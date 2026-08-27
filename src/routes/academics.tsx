import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from "motion/react";

import { ArrowRight, Plus } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { type AcademicStage } from "@/lib/academics-data";
import { useAcademicStages } from "@/lib/use-academic-stages";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics | Nursery to Grade 10 | Chaitanya EM School" },
      {
        name: "description",
        content:
          "Dare to dream, care to achieve. Discover the comprehensive academic programmes at Chaitanya EM School, from Nursery to Grade 10, featuring the LEAD curriculum and IIT Foundation.",
      },
      { property: "og:title", content: "Academics | Nursery to Grade 10 | Chaitanya EM School" },
      {
        property: "og:description",
        content:
          "Dare to dream, care to achieve. Discover the comprehensive academic programmes at Chaitanya EM School, from Nursery to Grade 10, featuring the LEAD curriculum and IIT Foundation.",
      },
      { property: "og:url", content: "https://www.chaitanyaemschool.com/academics" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaitanyaemschool.com/academics" }
    ],
  }),
  component: AcademicsPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function AcademicsPage() {
  const [open, setOpen] = useState<string | null>(null);
  const stages = useAcademicStages();

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-[calc(110px_+_env(safe-area-inset-top))] md:px-10 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground"
        >
          Academics
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease }}
          className="mt-3 max-w-[16ch] text-[40px] font-semibold leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[72px] lg:text-[88px]"
        >
          A journey from
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>
            first words to first ranks.
          </span>
        </motion.h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mt-6 flex flex-col gap-5">
          {stages.map((stage, i) => (
            <StageCard
              key={stage.slug}
              stage={stage}
              index={i}
              open={open === stage.slug}
              onToggle={() => setOpen(open === stage.slug ? null : stage.slug)}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function StageCard({
  stage,
  index,
  open,
  onToggle,
}: {
  stage: AcademicStage;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const dark = stage.tone === "dark";

  /* Tactile drag: works with touch and mouse, snaps back with a controlled
     spring. Rotation and lift are derived from the drag offset so the card
     feels like a physical object rather than a sliding div. */
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-260, 0, 260], [-4.5, 0, 4.5]);
  const lift = useTransform(x, [-260, 0, 260], [-10, 0, -10]);
  const shadowBlur = useTransform(x, [-260, 0, 260], [96, 54, 96]);
  const boxShadow = useTransform(
    shadowBlur,
    (b: number) => `0 ${Math.round(b * 0.55)}px ${Math.round(b)}px -34px rgba(15,23,42,0.45)`,
  );
  const [dragging, setDragging] = useState(false);
  const draggedRef = useRef(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease }}
    >
      <motion.article
        drag={reduce ? false : "x"}
        dragDirectionLock
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        dragTransition={{ bounceStiffness: 260, bounceDamping: 32 }}
        onDragStart={() => {
          draggedRef.current = true;
          setDragging(true);
        }}
        onDragEnd={() => {
          setDragging(false);
          window.setTimeout(() => {
            draggedRef.current = false;
          }, 60);
        }}
        whileHover={reduce || dragging ? undefined : { scale: 1.006 }}
        animate={{ scale: dragging ? 1.018 : 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 28, mass: 0.5 }}
        className={`group relative touch-pan-y select-none overflow-hidden rounded-[28px] ring-1 ring-black/5 md:rounded-[32px] ${stage.fg} ${
          reduce ? "" : dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          background: stage.bg,
          x,
          rotate: reduce ? 0 : rotate,
          y: reduce ? 0 : lift,
          boxShadow: reduce
            ? open
              ? "0 40px 80px -34px rgba(15,23,42,0.45)"
              : "0 26px 54px -30px rgba(15,23,42,0.32)"
            : boxShadow,
          willChange: "transform",
        }}
      >
        <button
          type="button"
          onClick={() => {
            if (draggedRef.current) return;
            onToggle();
          }}
          aria-expanded={open}
          className="block w-full cursor-[inherit] p-6 text-left md:p-12 lg:p-14"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] opacity-70">
              0{index + 1} · {stage.tag}
            </span>
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 transition-all duration-300 ${
                dark ? "bg-white/15 ring-white/25" : "bg-white/70 ring-black/10"
              }`}
            >
              <Plus
                className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                strokeWidth={2.4}
              />
            </span>
          </div>

          <div className="mt-8 text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[34px] md:text-[52px] lg:text-[64px]">
            {stage.grades}
          </div>
          <div
            className="mt-2.5 text-[17px] leading-snug opacity-80 md:text-[23px] lg:text-[26px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            {stage.line}
          </div>

          <span className="mt-8 inline-block md:mt-10">
            <LearnMore label={open ? "Close preview" : "Learn more"} dark={dark} />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="preview"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease }}
              className="overflow-hidden"
            >
              <div
                className={`mx-6 mb-6 rounded-[22px] p-5 md:mx-12 md:mb-12 md:p-8 lg:mx-14 ${
                  dark ? "bg-white/10 ring-1 ring-white/15" : "bg-white/70 ring-1 ring-black/5"
                }`}
              >
                <div className="grid gap-6 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-9">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease }}
                    className="overflow-hidden rounded-[18px]"
                  >
                    <img
                      src={stage.preview.image}
                      alt={`${stage.tag} learning at Chaitanya EM School`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </motion.div>

                  <div>
                    <h2
                      className="text-[22px] leading-[1.2] tracking-[-0.02em] md:text-[28px]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                    >
                      {stage.preview.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed opacity-80 md:text-[15px]">
                      {stage.preview.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {stage.preview.focus.map((f) => (
                        <li
                          key={f}
                          className={`rounded-full px-3 py-1.5 text-[11px] font-medium tracking-tight ${
                            dark
                              ? "bg-white/15 text-white"
                              : "bg-white text-foreground ring-1 ring-black/5"
                          }`}
                        >
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/academics/$stage"
                      params={{ stage: stage.slug }}
                      className="mt-7 inline-block"
                    >
                      <LearnMore label={stage.preview.cta} dark={dark} solid />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </motion.div>
  );
}

/** Premium pill with a gliding arrow and a soft highlight sweep. */
export function LearnMore({
  label,
  dark,
  solid,
}: {
  label: string;
  dark?: boolean;
  solid?: boolean;
}) {
  return (
    <span
      className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-tight ring-1 transition-all duration-300 ease-out hover:gap-3 hover:shadow-[0_14px_30px_-14px_rgba(15,23,42,0.55)] active:scale-[0.97] md:text-[13px] ${
        solid
          ? dark
            ? "bg-white text-[oklch(0.28_0.1_260)] ring-white/60"
            : "bg-[oklch(0.36_0.13_258)] text-white ring-black/10"
          : dark
            ? "bg-white/15 text-white ring-white/25 hover:bg-white/25"
            : "bg-white/80 text-foreground ring-black/10 hover:bg-white"
      }`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-all duration-500 ease-out group-hover:left-[130%]"
      />
      <span className="relative">{label}</span>
      <ArrowRight
        className="relative h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
        strokeWidth={2.3}
      />
    </span>
  );
}
