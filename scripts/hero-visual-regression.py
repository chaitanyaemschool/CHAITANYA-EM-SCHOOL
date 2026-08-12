"""
Hero section visual regression harness.

Captures the hero (above-the-fold) of the home route at key mobile widths so
typography + spacing regressions are caught before shipping.

Usage:
  python scripts/hero-visual-regression.py                 # local dev (http://localhost:8080)
  BASE_URL=https://your-production-url.com \
    python scripts/hero-visual-regression.py               # against a deployed URL

Outputs PNGs to /mnt/documents/hero-visual-regression/.
"""
import asyncio, os, sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE_URL = os.environ.get("BASE_URL", "http://localhost:8080")
OUT = Path(os.environ.get("OUT_DIR", "/mnt/documents/hero-visual-regression"))
OUT.mkdir(parents=True, exist_ok=True)

# Real device widths parents actually use.
BREAKPOINTS = [
    ("iphone-se",       320, 568),
    ("android-small",   360, 780),
    ("iphone-13-mini",  375, 812),
    ("iphone-14",       390, 844),
    ("iphone-14-plus",  414, 896),
    ("iphone-14-promax",430, 932),
    ("tablet-portrait", 768, 1024),
]

async def capture(playwright, name, w, h):
    browser = await playwright.chromium.launch(headless=True)
    ctx = await browser.new_context(
        viewport={"width": w, "height": h},
        device_scale_factor=2,
        is_mobile=True,
        has_touch=True,
    )
    page = await ctx.new_page()
    await page.goto(BASE_URL, wait_until="networkidle")
    # Wait past the ~650ms cinematic loader + hero motion settle.
    await page.wait_for_timeout(1600)
    out = OUT / f"hero_{name}_{w}x{h}.png"
    await page.screenshot(path=str(out), clip={"x": 0, "y": 0, "width": w, "height": h})
    print(f"  ✓ {name:20s} {w}x{h} -> {out.name}")
    await browser.close()

async def main():
    print(f"Capturing hero regressions from {BASE_URL}")
    async with async_playwright() as p:
        for name, w, h in BREAKPOINTS:
            try:
                await capture(p, name, w, h)
            except Exception as e:
                print(f"  ✗ {name}: {e}", file=sys.stderr)
    print(f"\nDone. {len(list(OUT.glob('hero_*.png')))} screenshots in {OUT}")

asyncio.run(main())
