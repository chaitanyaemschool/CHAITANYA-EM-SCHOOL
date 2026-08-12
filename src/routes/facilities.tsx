import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Bus, Cpu, Palette, FlaskConical, Trophy } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useContent } from "@/lib/use-content";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Chaitanya EM School" },
      {
        name: "description",
        content:
          "Smart classrooms, science lab, library, playground and safe transport at Chaitanya EM School, Chekkapalli.",
      },
      { property: "og:title", content: "Facilities — Chaitanya EM School" },
      { property: "og:description", content: "Every space, built for a child." },
    ],
  }),
  component: FacilitiesPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS = [Cpu, FlaskConical, Trophy, Palette, Bus];

type FacilityItem = { title?: string; tag?: string; body?: string; image?: string };

function FacilitiesPage() {
  const cms = useContent<{ items?: FacilityItem[] }>("facilities");
  const items = (cms.items ?? []).filter((f) => f && (f.title || f.image));
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 pt-28 xl:max-w-7xl pb-8 md:px-10 md:pt-36 md:pb-12 lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Campus
        </div>
        <h1 className="mt-3 text-[clamp(2.1rem,10.5vw,2.75rem)] font-semibold leading-[1.02] sm:text-[44px] tracking-[-0.04em] md:text-[72px] lg:text-[88px]">
          Every space,
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>
            built for a child.
          </span>
        </h1>
        <p className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground md:text-[16px]">
          Facilities that feel modern, but never intimidating — designed around how children
          actually learn and play.
        </p>
      </section>

      <section className="relative overflow-hidden pb-24">
        {/* soft ambient wash so the glass surfaces have something to refract */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 12% 8%, oklch(0.93 0.05 78 / 0.55) 0%, transparent 60%), radial-gradient(55% 45% at 88% 40%, oklch(0.90 0.05 258 / 0.4) 0%, transparent 62%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8 lg:px-16 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
            {items.map((f, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.article
                  key={`${f.title ?? "facility"}-${i}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease, delay: Math.min(i * 0.07, 0.28) }}
                  whileHover={{ y: -8, rotateX: 2.4, rotateY: i % 2 === 0 ? -2.4 : 2.4 }}
                  style={{ transformPerspective: 1100, willChange: "transform" }}
                  className="group relative flex flex-col overflow-hidden rounded-[26px] border border-white/60 bg-white/55 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.32)] backdrop-blur-xl transition-shadow duration-500 ease-out hover:shadow-[0_38px_72px_-30px_rgba(15,23,42,0.45)]"
                >
                  {/* soft gradient border + hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[26px] p-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(140deg, oklch(0.85 0.09 78 / 0.9) 0%, rgba(255,255,255,0.55) 38%, oklch(0.72 0.09 258 / 0.65) 100%)",
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(50% 50% at 50% 40%, oklch(0.85 0.08 78 / 0.45) 0%, transparent 70%)",
                    }}
                  />

                  {/* soft translucent sheen */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                      background:
                        "linear-gradient(150deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.18) 42%, rgba(255,255,255,0) 100%)",
                    }}
                  />

                  <div className="relative m-1.5 h-44 overflow-hidden rounded-[20px] bg-muted sm:h-48 lg:h-44">
                    <img
                      src={f.image}
                      alt={f.title ?? ""}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                    <div className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-[rgba(15,23,42,0.42)] shadow-[0_8px_20px_-10px_rgba(15,23,42,0.6)] backdrop-blur-md">
                      <Icon
                        className="h-[18px] w-[18px] text-white drop-shadow"
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col gap-2 px-5 pb-6 pt-4">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {f.tag}
                    </div>
                    <h2 className="text-[21px] font-semibold leading-tight tracking-[-0.025em] text-foreground">
                      {f.title}
                    </h2>
                    <p className="text-[13.5px] leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>

                  {/* thin refined border highlight on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/50 transition-colors duration-500 group-hover:ring-white/80"
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
