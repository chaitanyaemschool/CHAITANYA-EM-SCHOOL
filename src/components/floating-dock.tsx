import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { ArrowUp, Phone } from "lucide-react";

import { useState } from "react";

import { telHref, waHref } from "@/lib/social-links";
import { useContent } from "@/lib/use-content";

const ease = [0.22, 1, 0.36, 1] as const;

/** Shared shell: glossy 3D sphere with rim light, inner highlight and depth shadow. */
const BTN =
  "group pointer-events-auto relative grid h-[44px] w-[44px] place-items-center overflow-hidden rounded-full text-white transition-[transform,box-shadow] duration-300 ease-out will-change-transform [transform:translateZ(0)] hover:-translate-y-0.5 hover:scale-[1.06] active:scale-[0.94] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-[48px] md:w-[48px]";

const sphere = (from: string, to: string, glow: string) => ({
  background: `radial-gradient(120% 120% at 30% 18%, ${from} 0%, ${to} 62%, ${to} 100%)`,
  boxShadow: `inset 0 1px 1px rgba(255,255,255,0.55), inset 0 -6px 12px rgba(0,0,0,0.28), 0 10px 22px -10px ${glow}, 0 3px 8px -4px rgba(15,23,42,0.5)`,
});

/** Specular gloss cap + soft bottom bounce light, shared by every button. */
function Gloss() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-[14%] top-[5%] h-[42%] rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.06))] blur-[0.3px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-[22%] bottom-[6%] h-[22%] rounded-[999px] bg-white/15 blur-[3px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/35"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-y-full left-[-60%] w-1/2 skew-x-12 bg-white/25 transition-all duration-700 ease-out group-hover:left-[130%]"
      />
    </>
  );
}

/** Official WhatsApp glyph, drawn as vector so it stays crisp at any size. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M16.04 5.5c-5.79 0-10.49 4.7-10.49 10.49 0 1.85.48 3.62 1.4 5.2L5.5 26.5l5.47-1.42a10.44 10.44 0 0 0 5.07 1.29h.01c5.78 0 10.48-4.7 10.48-10.49 0-2.8-1.09-5.43-3.07-7.41a10.4 10.4 0 0 0-7.42-2.97Zm0 19.02h-.01a8.7 8.7 0 0 1-4.43-1.21l-.32-.19-3.25.85.87-3.17-.21-.33a8.68 8.68 0 0 1-1.33-4.64c0-4.81 3.91-8.72 8.72-8.72 2.33 0 4.52.91 6.17 2.56a8.66 8.66 0 0 1 2.55 6.17c0 4.81-3.91 8.68-8.76 8.68Zm4.78-6.5c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.03-.15.17-.3.2-.56.07-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.31-1.55-1.46-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.19s.94 2.54 1.07 2.72c.13.17 1.85 2.83 4.48 3.97.63.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.25.22-.61.22-1.14.15-1.25-.06-.11-.24-.18-.5-.31Z"
      />
    </svg>
  );
}

/**
 * Vertical floating dock — Scroll to top, Call, WhatsApp only.
 * Uniform diameter, spacing and depth; CSS-only gloss + hover animation.
 */
export function FloatingDock() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 320;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  const contact = useContent<{ whatsapp: string; phone: string }>("contact_info");

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-3 z-40 flex flex-col items-center gap-2.5 md:bottom-6 md:right-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <AnimatePresence>
        {scrolled && (
          <motion.button
            key="top"
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.22, ease }}
            className={BTN}
            style={sphere(
              "oklch(0.62 0.11 258)",
              "oklch(0.30 0.11 258)",
              "oklch(0.35 0.13 258 / 0.75)",
            )}
          >
            <Gloss />
            <ArrowUp
              className="relative h-[19px] w-[19px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
              strokeWidth={2.6}
            />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={telHref(contact.phone)}
        aria-label="Call the school"
        className={BTN}
        style={sphere("oklch(0.78 0.11 258)", "oklch(0.38 0.15 258)", "oklch(0.5 0.16 258 / 0.75)")}
      >
        <Gloss />
        <Phone
          className="relative h-[19px] w-[19px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
          strokeWidth={2.4}
        />
      </a>

      <a
        href={waHref(contact.whatsapp)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={BTN}
        style={sphere("#5ffc7b", "#25d366", "rgba(37,211,102,0.8)")}
      >
        <Gloss />
        <WhatsAppGlyph className="relative h-[26px] w-[26px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]" />
      </a>
    </div>
  );
}
