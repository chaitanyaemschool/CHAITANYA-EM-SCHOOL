import { useEffect, useState } from "react";
import { Monitor, Tablet, Smartphone } from "lucide-react";

import type { SectionDef, FieldDef } from "@/lib/content-schema";
import { useIsMobile } from "@/hooks/use-mobile";

type Device = "desktop" | "tablet" | "mobile";

const WIDTHS: Record<Device, number> = { desktop: 1180, tablet: 834, mobile: 390 };

const DEVICES: { id: Device; label: string; icon: typeof Monitor }[] = [
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "tablet", label: "Tablet", icon: Tablet },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

function isImage(f: FieldDef) {
  return f.type === "image";
}

function str(v: unknown) {
  return typeof v === "string" ? v : "";
}

/**
 * Live, website-styled rendering of whatever the admin is currently editing.
 * It re-renders from local editor state, so every keystroke, upload or list
 * change is reflected instantly — no save, no refresh.
 */
export function SectionPreview({
  section,
  data,
}: {
  section: SectionDef | null;
  data: Record<string, unknown>;
}) {
  const [device, setDevice] = useState<Device>("desktop");
  const isMobile = useIsMobile();

  /* On a phone the desktop/tablet frames are unusable — show the mobile frame
     only, and keep the toggle hidden. */
  useEffect(() => {
    if (isMobile) setDevice("mobile");
  }, [isMobile]);

  const fields = section?.fields ?? [];
  const images = fields.filter(isImage);
  const texts = fields.filter((f) => !isImage(f));
  const [eyebrow, heading, ...rest] = texts;

  const scale = device === "desktop" ? 0.42 : device === "tablet" ? 0.62 : 0.9;

  return (
    <div className="rounded-[24px] bg-white ring-1 ring-black/5 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.15)]">
      <div className="flex items-center justify-between gap-3 border-b border-black/5 px-4 py-3">
        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Live preview
          </div>
          <div className="mt-0.5 truncate text-[13px] font-semibold tracking-[-0.01em]">
            {section?.title ?? "Select a section"}
          </div>
        </div>
        <div
          className={`shrink-0 items-center gap-1 rounded-full bg-secondary/60 p-1 ${isMobile ? "hidden" : "flex"}`}
        >
          {DEVICES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              aria-label={`${label} preview`}
              aria-pressed={device === id}
              onClick={() => setDevice(id)}
              className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
                device === id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-[70vh] touch-pan-y overflow-auto overscroll-contain bg-[#faf8f4] p-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] lg:[scrollbar-width:auto]">
        <div
          className="mx-auto overflow-hidden rounded-[18px] bg-background ring-1 ring-black/5"
          style={{
            width: isMobile ? "100%" : WIDTHS[device],
            maxWidth: "100%",
            zoom: isMobile ? 1 : scale,
          }}
        >
          <div className="px-10 py-10">
            {eyebrow && str(data[eyebrow.key]) && (
              <div className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
                {str(data[eyebrow.key])}
              </div>
            )}
            {heading && str(data[heading.key]) && (
              <h2
                className="mt-3 text-[40px] leading-[1.05] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {str(data[heading.key])}
              </h2>
            )}
            {rest.map((f) => {
              const v = str(data[f.key]);
              if (!v) return null;
              return (
                <p
                  key={f.key}
                  className="mt-3 max-w-[62ch] whitespace-pre-line text-[15px] leading-relaxed text-muted-foreground"
                >
                  {v}
                </p>
              );
            })}

            {images.length > 0 && (
              <div className={`mt-6 grid gap-4 ${device === "mobile" ? "grid-cols-1" : "grid-cols-2"}`}>
                {images.map((f) => {
                  const v = str(data[f.key]);
                  return (
                    <div
                      key={f.key}
                      className="aspect-[4/3] overflow-hidden rounded-[18px] bg-secondary/60 ring-1 ring-black/5"
                    >
                      {v ? (
                        <img src={v} alt={f.label} className="h-full w-full object-contain md:object-cover" />
                      ) : (
                        <div className="grid h-full place-items-center text-[12px] text-muted-foreground">
                          {f.label}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {section?.lists?.map((list) => {
              const items = Array.isArray(data[list.key])
                ? (data[list.key] as Record<string, unknown>[])
                : [];
              if (items.length === 0) return null;
              return (
                <div key={list.key} className="mt-8">
                  <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    {list.label}
                  </div>
                  <div className={`mt-4 grid gap-4 ${device === "mobile" ? "grid-cols-1" : device === "tablet" ? "grid-cols-2" : "grid-cols-3"}`}>
                    {items.map((item, i) => {
                      const imageField = list.fields.find(isImage);
                      const textFields = list.fields.filter((f) => !isImage(f));
                      const img = imageField ? str(item[imageField.key]) : "";
                      return (
                        <div
                          key={i}
                          className="overflow-hidden rounded-[18px] bg-white ring-1 ring-black/5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.4)]"
                        >
                          {imageField && (
                            <div className="aspect-[4/3] bg-secondary/60">
                              {img && (
                                <img src={img} alt="" className="h-full w-full object-contain md:object-cover" />
                              )}
                            </div>
                          )}
                          <div className="p-4">
                            {textFields.map((f, k) => {
                              const v = str(item[f.key]);
                              if (!v) return null;
                              return (
                                <div
                                  key={f.key}
                                  className={
                                    k === 0
                                      ? "text-[15px] font-semibold tracking-[-0.01em]"
                                      : "mt-1.5 text-[13px] leading-relaxed text-muted-foreground"
                                  }
                                >
                                  {v}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
