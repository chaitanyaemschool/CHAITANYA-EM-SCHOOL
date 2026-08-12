import { motion, useReducedMotion } from "motion/react";
import { MapPin, Navigation, Clock } from "lucide-react";

import { useContent } from "@/lib/use-content";

const ease = [0.22, 1, 0.36, 1] as const;

const MAPS_QUERY = encodeURIComponent("Chaitanya E.M. School, Chekkapalli, Andhra Pradesh");
export const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

/**
 * Premium "Find us" composition: a large, softly framed map panel with an
 * overlapping location card, a refined pulsing marker and a directions CTA.
 */
export function LocationSection() {
  const reduce = useReducedMotion();
  const contact = useContent<{ address: string; mapUrl: string }>("contact_info");
  const embed = contact.mapUrl || MAPS_EMBED;

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-10 md:py-24 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          Find us
        </div>
        <h2
          className="mt-3 text-[32px] leading-[1.02] tracking-[-0.03em] md:text-[48px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          Come and find us.
        </h2>
        <p className="mt-3 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">
          We're on the main road in Chekkapalli. Drop in on a working morning — someone
          will always walk you around the campus.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease, delay: 0.08 }}
        className="relative mt-8 md:mt-10 md:grid md:grid-cols-[1.4fr_1fr] md:items-stretch md:gap-6"
      >
        {/* Map — the hero element */}
        <div className="relative overflow-hidden rounded-[26px] bg-muted ring-1 ring-black/10 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)]">
          <div className="relative h-[280px] w-full sm:h-[360px] md:h-full md:min-h-[440px]">
            <iframe
              src={embed}
              title="Chaitanya E.M. School location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
            {/* Refined marker */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[130%]">
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.35_0.13_258)] text-white shadow-[0_12px_26px_-12px_rgba(15,23,42,0.7)] ring-2 ring-white">
                <MapPin className="h-[18px] w-[18px]" strokeWidth={2.3} />
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full ring-2 ring-[oklch(0.35_0.13_258)]/40"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Location card — beside the map on desktop, below it on mobile */}
        <div className="relative z-10 mx-auto -mt-8 flex w-[min(100%,560px)] flex-col rounded-[26px] bg-white p-5 ring-1 ring-black/5 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)] md:mx-0 md:mt-0 md:w-auto md:p-7">
          <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Campus
          </div>
          <div className="mt-2 text-[17px] font-semibold tracking-[-0.02em] md:text-[19px]">
            Chaitanya E.M. School
          </div>
          <div className="mt-3 flex items-start gap-2.5 text-[13.5px] leading-relaxed text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" strokeWidth={2.2} />
            <span className="whitespace-pre-line">{contact.address || "Chekkapalli, Andhra Pradesh"}</span>
          </div>
          <div className="mt-3 flex items-start gap-2.5 text-[13.5px] text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" strokeWidth={2.2} />
            <span>Mon – Sat · 9:00 AM – 4:30 PM</span>
          </div>
          <a
            href={MAPS_HREF}
            target="_blank"
            rel="noreferrer"
            className="group mt-5 inline-flex min-h-11 items-center gap-2.5 self-start rounded-full bg-[linear-gradient(135deg,oklch(0.55_0.16_258),oklch(0.35_0.13_258))] px-5 text-[13.5px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(34,64,180,0.6)] transition-all duration-400 hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.35_0.13_258)] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:mt-auto"
          >
            <Navigation className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={2.3} />
            Get directions
          </a>
        </div>
      </motion.div>
    </section>
  );
}
