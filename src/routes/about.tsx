import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useInView,
  useMotionValue,
  animate,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useIsMobile } from "@/hooks/use-mobile";

import heroAssembly from "@/assets/hero-assembly-best.png.asset.json";
import studentReading from "@/assets/student-reading.jpg";
// teacher.jpg intentionally not imported — replaced with editorial collage
import visitImage from "@/assets/hero-classroom-full.png.asset.json";
import leadMotto from "@/assets/lead-school-motto.jpeg.asset.json";
import leaderNagaraju from "@/assets/leader-nagaraju.png.asset.json";
import leaderNagababu from "@/assets/leader-nagababu.png.asset.json";
import { useContent } from "@/lib/use-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chaitanya EM High School | Chekkapalli" },
      {
        name: "description",
        content:
          "Dare to dream, care to achieve. The story, belief and journey behind Chaitanya EM High School — how a small neighbourhood school in Chekkapalli grew into a home for curious minds from Nursery to Grade 10.",
      },
      { property: "og:title", content: "About Chaitanya EM High School | Chekkapalli" },
      {
        property: "og:description",
        content:
          "Dare to dream, care to achieve. The story, belief and journey behind Chaitanya EM High School — how a small neighbourhood school in Chekkapalli grew into a home for curious minds from Nursery to Grade 10.",
      },
      { property: "og:url", content: "https://www.chaitanyaemhighschool.com/about" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.chaitanyaemhighschool.com/about" }],
  }),
  component: AboutSchool,
});

const ease = [0.22, 1, 0.36, 1] as const;

/* -------- palette (matches home) -------- */
const CREAM = "#fbf7f0";
const NAVY = "oklch(0.35 0.13 258)";
const NAVY_DEEP = "oklch(0.28 0.11 258)";
const EMBER = "oklch(0.62 0.17 42)"; // burnt orange accent
const EMBER_SOFT = "oklch(0.72 0.12 55)";

/* -------- primitives -------- */
function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.85, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.32em] text-[color:var(--ember)] md:text-[11px]"
      style={{ ["--ember" as unknown]: EMBER }}
    >
      <span
        aria-hidden
        className="h-[1.5px] w-8 bg-[color:var(--ember)]"
        style={{ ["--ember" as unknown]: EMBER }}
      />
      {children}
    </span>
  );
}

function Editorial({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-editorial leading-[0.95] tracking-[-0.02em] ${className ?? ""}`}
      style={{ color: NAVY_DEEP }}
    >
      {children}
    </h2>
  );
}

/* -------- 1 · HERO -------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);
  const c = useContent<Record<string, string>>("about_hero");

  return (
    <section
      ref={ref}
      id="about-hero"
      className="relative overflow-hidden px-6 pb-20 pt-[calc(110px_+_env(safe-area-inset-top))] md:px-10 md:pb-24 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16"
      style={{
        background: `radial-gradient(120% 80% at 8% 8%, #fef3e2 0%, transparent 55%), radial-gradient(110% 80% at 100% 100%, #eef2ff 0%, transparent 55%), linear-gradient(160deg, ${CREAM} 0%, #f5efe4 100%)`,
      }}
    >
      {/* dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,48,0.28) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </Reveal>

          <div className="mt-6 overflow-hidden">
            <motion.h1
              initial={reduce ? { opacity: 0 } : { y: "110%" }}
              animate={reduce ? { opacity: 1 } : { y: 0 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
              className="font-editorial text-[clamp(2.6rem,8.2vw,5.5rem)] leading-[0.92] tracking-[-0.025em]"
              style={{ color: NAVY_DEEP }}
            >
              {c.line1}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={reduce ? { opacity: 0 } : { y: "110%" }}
              animate={reduce ? { opacity: 1 } : { y: 0 }}
              transition={{ duration: 1, ease, delay: 0.35 }}
              className="font-editorial text-[clamp(2.6rem,8.2vw,5.5rem)] leading-[0.92] tracking-[-0.025em]"
              style={{ color: NAVY_DEEP }}
            >
              {c.line2}
            </motion.h1>
          </div>
          <div className="mt-1 overflow-hidden">
            <motion.h1
              initial={reduce ? { opacity: 0 } : { y: "110%" }}
              animate={reduce ? { opacity: 1 } : { y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="font-editorial text-[clamp(2.6rem,8.2vw,5.5rem)] leading-[0.92] tracking-[-0.025em]"
              style={{ color: EMBER }}
            >
              {c.line3}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.85 }}
            className="mt-8 max-w-[44ch] text-[15px] leading-[1.7] text-slate-700 md:text-[17px]"
          >
            {c.paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="mt-12 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-500"
          >
            <span>Scroll</span>
            <motion.span
              animate={reduce ? {} : { scaleX: [0.2, 1, 0.2] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block h-[2px] w-16 origin-left"
              style={{ background: EMBER }}
            />
          </motion.div>
        </div>

        {/* Layered images */}
        <div className="relative flex flex-col gap-6 mt-10 md:mt-0 md:block md:h-[560px]">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.35 }}
            style={{ y: isMobile ? 0 : y1 }}
            className="relative h-[300px] w-full overflow-hidden rounded-[28px] ring-1 ring-slate-200 md:absolute md:right-0 md:top-0 md:h-[86%] md:w-[88%]"
          >
            <img
              src={c.imageMain || heroAssembly.url}
              alt="Chaitanya EM High School students in assembly"
              className="h-full w-full object-cover"
              loading="eager"
              style={{ boxShadow: "0 40px 80px -30px rgba(15,23,48,0.35)" }}
            />
          </motion.div>
          {(c.imageSmall || studentReading) && (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.94 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.7 }}
              style={{ y: isMobile ? 0 : y2 }}
              className="relative h-[280px] w-[85%] self-end overflow-hidden rounded-[22px] ring-1 ring-slate-200 md:absolute md:-left-6 md:bottom-0 md:h-auto md:w-[52%] md:aspect-[4/5]"
            >
              <img
                src={c.imageSmall || studentReading}
                alt="Student reading"
                className="h-full w-full object-cover"
                loading="lazy"
                style={{ boxShadow: "0 30px 60px -25px rgba(15,23,48,0.4)" }}
              />
            </motion.div>
          )}

          {/* floating chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease }}
            className="absolute bottom-4 left-4 md:-bottom-4 md:left-auto md:right-6 flex items-center gap-3 rounded-full bg-white/95 px-5 py-2.5 backdrop-blur z-10"
            style={{
              boxShadow: "0 20px 40px -18px rgba(15,23,48,0.35)",
              border: "1px solid rgba(203,210,223,0.9)",
            }}
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
              {c.badgeLabel}
            </span>
            <span aria-hidden className="h-3 w-px" style={{ background: "rgba(198,93,44,0.5)" }} />
            <span className="font-editorial text-[17px] leading-none" style={{ color: NAVY_DEEP }}>
              {c.badgeValue}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------- 2 · THE BEGINNING -------- */
function Beginning() {
  const c = useContent<Record<string, string>>("about_beginning");
  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16"
      style={{ background: `linear-gradient(180deg, #f5efe4 0%, ${CREAM} 100%)` }}
    >
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative">
          {/* oversized decorative year */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.07, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.4, ease }}
            className="font-editorial pointer-events-none absolute -top-20 left-0 whitespace-nowrap text-[clamp(6rem,26vw,14rem)] leading-[1] tracking-[-0.05em] md:-top-24 md:text-[clamp(7rem,12vw,10.5rem)]"
            style={{ color: NAVY_DEEP }}
          >
            {c.year}
          </motion.div>

          <Reveal>
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <Editorial className="mt-6 text-[clamp(2rem,5.5vw,3.5rem)]">
              {c.title} <em style={{ color: EMBER }}>{c.titleEm}</em>.
            </Editorial>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[52ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]">
              {c.para1}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]">
              {c.para2}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative md:pr-10 md:pt-8 md:pb-10">
            {/* single dominant image */}
            <div
              className="relative overflow-hidden rounded-[28px] ring-1 ring-slate-200"
              style={{ boxShadow: "0 40px 80px -30px rgba(15,23,48,0.3)" }}
            >
              <img
                src={c.image}
                alt="An early classroom at Chaitanya"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* first-year badge */}
            <div
              className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white/95 px-5 py-4 ring-1 ring-slate-200 backdrop-blur sm:block"
              style={{ boxShadow: "0 24px 40px -20px rgba(15,23,48,0.3)" }}
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                {c.badgeLabel}
              </div>
              <div
                className="font-editorial mt-1 text-[28px] leading-none"
                style={{ color: NAVY_DEEP }}
              >
                {c.badgeTitle} <em style={{ color: EMBER }}>{c.badgeEm}</em>
              </div>
            </div>

            {/* mobile first-year caption */}
            <div className="mt-4 flex items-baseline gap-3 sm:hidden">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                {c.badgeLabel}
              </span>
              <span
                className="font-editorial text-[20px] leading-none"
                style={{ color: NAVY_DEEP }}
              >
                {c.badgeTitle} <em style={{ color: EMBER }}>{c.badgeEm}</em>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- 3 · TIMELINE -------- */
type Milestone = { year: string; title: string; body: string };
const MILESTONES: Milestone[] = [
  {
    year: "2015",
    title: "A small beginning.",
    body: "The school opens its doors in Chekkapalli with a handful of families and a single classroom.",
  },
  {
    year: "The Early Years",
    title: "Building a foundation.",
    body: "Creating a safe and nurturing environment for young learners — routines, kindness and curiosity first.",
  },
  {
    year: "The Journey Forward",
    title: "Growing with purpose.",
    body: "Expanding classrooms and strengthening academic foundations, one grade at a time.",
  },
  {
    year: "Today",
    title: "Nursery to Grade 10.",
    body: "A growing community of curious, confident learners — and the families who make it home.",
  },
];

/* Subtle premium mesh-grid backdrop — fine architectural lines, soft ivory
   base and gently drifting navy/ember tonal light. Purely decorative. */
function MeshGrid() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* primary architectural grid — navy ink, clearly readable but soft */}
      <motion.div
        className="absolute -inset-x-8 -inset-y-8"
        animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,37,84,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,37,84,0.14) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(130% 85% at 50% 30%, #000 0%, rgba(0,0,0,0.6) 58%, transparent 94%)",
          WebkitMaskImage:
            "radial-gradient(130% 85% at 50% 30%, #000 0%, rgba(0,0,0,0.6) 58%, transparent 94%)",
        }}
      />
      {/* finer sub-grid for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,37,84,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,37,84,0.07) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(85% 58% at 50% 42%, #000 0%, transparent 82%)",
          WebkitMaskImage: "radial-gradient(85% 58% at 50% 42%, #000 0%, transparent 82%)",
        }}
      />
      {/* ember intersection nodes — tiny, sparse, premium */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(198,93,44,0.30) 1.1px, transparent 1.2px)",
          backgroundSize: "144px 144px",
          backgroundPosition: "0 0",
          maskImage: "radial-gradient(95% 65% at 50% 38%, #000 0%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(95% 65% at 50% 38%, #000 0%, transparent 85%)",
        }}
      />
      {/* slow tonal light drift — warms the grid without glare */}
      <motion.div
        className="absolute -inset-x-24 -inset-y-28"
        animate={
          reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0], opacity: [0.62, 0.85, 0.62] }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(40% 32% at 18% 22%, rgba(198,93,44,0.14) 0%, transparent 70%), radial-gradient(44% 36% at 82% 70%, rgba(38,63,140,0.13) 0%, transparent 72%)",
        }}
      />
      {/* soft vignette to keep edges calm */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 75% at 50% 45%, transparent 55%, rgba(246,239,225,0.85) 100%)",
        }}
      />
    </div>
  );
}

function TimelineItem({ m, i }: { m: Milestone; i: number }) {
  const right = i % 2 === 1;
  const itemRef = useRef<HTMLLIElement>(null);
  const active = useInView(itemRef, { margin: "-20% 0px -20% 0px" });
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  const revealProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px -10% 0px" },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <li ref={itemRef} className="relative md:grid md:grid-cols-2 md:gap-12">
      {/* point */}
      <div className="absolute left-6 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 md:left-1/2">
        {!reduce && (
          <motion.span
            aria-hidden
            className="absolute left-1/2 top-1/2 block h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            animate={{ scale: active ? 2.6 : 1, opacity: active ? 0.18 : 0 }}
            transition={{ duration: 0.6, ease }}
            style={{ background: EMBER }}
          />
        )}
        <motion.div
          style={{
            background: active ? EMBER : "#cbd2df",
            ["--cream" as unknown]: CREAM,
            transition: "background 500ms ease",
          }}
          className="relative h-3.5 w-3.5 rounded-full ring-4 ring-[color:var(--cream)]"
        />
      </div>

      <motion.div
        {...revealProps}
        className={`col-start-1 col-end-2 row-start-1 ml-14 rounded-[28px] bg-white p-6 ring-1 ring-slate-200 shadow-sm md:ml-0 md:mt-0 md:p-8 transition-shadow duration-300 hover:shadow-md ${
          right ? "md:col-start-2 md:col-end-3" : "md:col-start-1 md:col-end-2 md:text-right"
        }`}
      >
        <div
          className="font-editorial text-[clamp(1.75rem,4vw,2.6rem)] leading-none"
          style={{ color: NAVY_DEEP }}
        >
          {m.year}
        </div>
        <div
          className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em]"
          style={{ color: EMBER }}
        >
          {m.title}
        </div>
        <p className="mt-3 text-[14.5px] leading-[1.6] text-slate-700 md:leading-[1.7] md:text-[15.5px]">{m.body}</p>
      </motion.div>
    </li>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const c = useContent<Record<string, unknown>>("about_timeline");
  const milestones: Milestone[] =
    Array.isArray(c.milestones) && c.milestones.length ? (c.milestones as Milestone[]) : MILESTONES;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 45%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });
  const height = useTransform(fill, [0, 1], ["0%", "100%"]);
  const headTop = useTransform(fill, [0, 1], ["0%", "100%"]);
  const headOpacity = useTransform(fill, [0, 0.04, 0.97, 1], [0, 1, 1, 0]);

  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16"
      style={{
        background: `radial-gradient(70% 50% at 90% 10%, #fdf1dd 0%, transparent 60%), linear-gradient(180deg, ${CREAM} 0%, #f6efe1 100%)`,
      }}
    >
      <MeshGrid />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <Editorial className="mt-6 text-[clamp(2rem,5.5vw,3.75rem)]">
            {c.title} <em style={{ color: EMBER }}>{c.titleEm}</em> {c.titleTail}
          </Editorial>
        </Reveal>
      </div>

      <div ref={ref} className="relative z-[1] mx-auto mt-16 max-w-4xl md:mt-20">
        {/* rail */}
        <div className="absolute left-6 top-0 h-full w-px bg-slate-300/70 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          aria-hidden
          style={{ height, willChange: "height" }}
          className="absolute left-6 top-0 w-px overflow-hidden md:left-1/2 md:-translate-x-1/2"
        >
          <div
            className="h-full w-full"
            style={{ background: `linear-gradient(180deg, ${EMBER} 0%, ${NAVY} 100%)` }}
          />
        </motion.div>

        {/* travelling indicator — follows scroll progress along the rail */}
        {!reduce && (
          <motion.div
            aria-hidden
            style={{ top: headTop, opacity: headOpacity }}
            className="absolute left-6 z-[3] -translate-x-1/2 -translate-y-1/2 md:left-1/2"
          >
            <span
              className="block h-2.5 w-2.5 rounded-full"
              style={{
                background: EMBER,
                boxShadow: `0 0 0 5px rgba(198,93,44,0.14), 0 0 18px 3px rgba(198,93,44,0.35)`,
              }}
            />
          </motion.div>
        )}

        <ol className="space-y-16 md:space-y-24">
          {milestones.map((m, i) => (
            <TimelineItem key={m.year} m={m} i={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------- 5 · THE PEOPLE BEHIND US -------- */
type Leader = { name: string; role: string; tagline: string; photo?: string };

const LEADERS: Leader[] = [
  {
    name: "Nagaraju",
    role: "Managing Director",
    tagline: "Building the vision behind every new beginning.",
    photo: leaderNagaraju.url,
  },
  {
    name: "Nagababu",
    role: "Director",
    tagline: "Guiding the school forward with purpose.",
    photo: leaderNagababu.url,
  },
  {
    name: "Kesava",
    role: "Principal",
    tagline: "Turning everyday learning into lasting growth.",
    photo: "",
  },
];

/* Extremely subtle desktop-only perspective tilt. */
function PeopleCard({ person, index }: { person: Leader; index: number }) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 3.2, ry: px * 3.2 });
  };

  // Gentle vertical offset variation so the three cards never read as
  // three identical boxes on desktop.
  const offset = ["lg:mt-0", "lg:mt-10", "lg:mt-4"][index];

  const hovering = tilt.rx !== 0 || tilt.ry !== 0;

  return (
    <motion.div
      className={offset}
      animate={reduce ? undefined : { y: [0, -9, 0] }}
      transition={
        reduce
          ? undefined
          : { duration: 7 + index * 1.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }
      }
      style={{ willChange: "transform" }}
    >
      <motion.article
        ref={cardRef as unknown}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 0.75, ease, delay: index * 0.12 }}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        className="group relative overflow-hidden rounded-[30px] bg-white/85 p-3 ring-1 ring-slate-200/80 backdrop-blur"
        style={{
          boxShadow: hovering
            ? "0 52px 96px -44px rgba(15,23,48,0.5), 0 12px 28px -18px rgba(15,23,48,0.28)"
            : "0 26px 60px -34px rgba(15,23,48,0.32)",
          transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) rotate(${
            hovering ? (index % 2 === 0 ? -0.8 : 0.8) : 0
          }deg) translateY(${hovering ? -8 : 0}px)`,
          transformStyle: "preserve-3d",
          transition: "transform 600ms cubic-bezier(0.22,1,0.36,1), box-shadow 600ms ease",
          willChange: "transform",
        }}
      >
        {/* portrait */}
        <div className="relative overflow-hidden rounded-[22px] bg-[#f2ece1]">
          <motion.div
            initial={{ scale: 1.06, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 1, ease, delay: index * 0.12 + 0.08 }}
            className="h-full w-full"
          >
            {person.photo ? (
              <img
                src={person.photo}
                alt={`${person.name} — ${person.role}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div
                className="grid aspect-[4/5] w-full place-items-center text-center"
                style={{ background: "linear-gradient(160deg,#f6efe3 0%,#ece3d4 100%)" }}
              >
                <div className="px-6">
                  <div
                    className="font-editorial text-[44px] leading-none"
                    style={{ color: NAVY_DEEP, opacity: 0.35 }}
                  >
                    {person.name.charAt(0)}
                  </div>
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                    Photo coming soon
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* number detail */}
          <div
            className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[11px] font-bold tracking-[0.08em] ring-1 ring-white/70 backdrop-blur"
            style={{ color: EMBER }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* soft bottom veil for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-70"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.85) 100%)",
            }}
          />
        </div>

        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease, delay: index * 0.12 + 0.22 }}
          className="px-4 pb-5 pt-6 sm:px-5"
        >
          <h3
            className="font-editorial text-[30px] leading-none md:text-[32px]"
            style={{ color: NAVY_DEEP }}
          >
            {person.name}
          </h3>
          <div
            className="mt-2.5 text-[10.5px] font-bold uppercase tracking-[0.28em]"
            style={{ color: EMBER }}
          >
            {person.role}
          </div>
          <p className="mt-4 text-[14.5px] leading-[1.7] text-slate-700">{person.tagline}</p>
          <div
            aria-hidden
            className="mt-5 h-px w-full origin-left scale-x-[0.25] bg-slate-300 transition-transform duration-700 group-hover:scale-x-100"
          />
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

function PeopleBehind() {
  const intro = useContent<Record<string, string>>("about_people_intro");
  const content = useContent<{ people?: Leader[] }>("about_leadership");
  const remote = Array.isArray(content.people) ? content.people : [];
  const people: Leader[] = LEADERS.map((base, i) => {
    const r = remote[i];
    if (!r) return base;
    return {
      name: r.name?.trim() || base.name,
      role: r.role?.trim() || base.role,
      tagline: r.tagline?.trim() || base.tagline,
      photo: r.photo?.trim() || base.photo,
    };
  });

  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16"
      style={{ background: `linear-gradient(180deg, #fbf1dd 0%, ${CREAM} 100%)` }}
    >
      {/* layered surfaces */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,48,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{intro.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <Editorial className="mt-6 text-[clamp(2rem,5.5vw,3.5rem)]">
                {intro.title}
                <br />
                <em style={{ color: EMBER }}>{intro.titleEm}</em>
              </Editorial>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[46ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]">
              {intro.paragraph}
            </p>
          </Reveal>
        </div>

        {/* Mobile: premium swipeable carousel with next-card peek */}
        <div className="mt-12 md:hidden">
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-6 pt-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {people.map((p, i) => (
              <div key={p.name} className="w-[76vw] max-w-[330px] shrink-0 snap-center">
                <PeopleCard person={p} index={i} />
              </div>
            ))}
          </div>
          <div className="mt-1 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
            Swipe to explore
          </div>
        </div>

        {/* Desktop: three balanced portrait cards */}
        <div className="mt-14 hidden gap-7 md:grid md:grid-cols-3 lg:gap-8">
          {people.map((p, i) => (
            <PeopleCard key={p.name} person={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 6 · OUR MOTO (LEAD) -------- */
const MOTO_STAGES = [
  {
    n: "01",
    title: "Planning",
    body: "Every meaningful learning journey begins with a clear direction.",
    color: "oklch(0.38 0.13 258)",
    tint: "linear-gradient(160deg,#eef2ff 0%,#dbe4ff 100%)",
    angle: -45,
  },
  {
    n: "02",
    title: "Implementation",
    body: "Ideas become meaningful through thoughtful action and learning experiences.",
    color: "oklch(0.45 0.19 305)",
    tint: "linear-gradient(160deg,#f4ecff 0%,#e6d9fb 100%)",
    angle: -135,
  },
  {
    n: "03",
    title: "Review",
    body: "Progress is observed, understood and improved continuously.",
    color: "oklch(0.52 0.2 27)",
    tint: "linear-gradient(160deg,#fdecec 0%,#f8d9d2 100%)",
    angle: 45,
  },
  {
    n: "04",
    title: "Evaluation",
    body: "Learning is measured to help every child move forward with confidence.",
    color: "oklch(0.5 0.16 148)",
    tint: "linear-gradient(160deg,#e9f6ec 0%,#d3ecd8 100%)",
    angle: 135,
  },
];

function OurMoto() {
  const c = useContent<Record<string, unknown>>("about_moto");
  const stages = (Array.isArray(c.stages) && c.stages.length ? c.stages : MOTO_STAGES).map(
    (s: unknown, i: number) => ({ ...MOTO_STAGES[i % MOTO_STAGES.length], ...s }),
  );
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const rotation = useMotionValue(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, last: 0, moved: 0, velocity: 0, time: 0 });
  const [dragging, setDragging] = useState(false);
  const idle = useRef(true);

  // Gentle idle drift — alive, never dizzying. Pauses while interacting.
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let prev = performance.now();
    const tick = (t: number) => {
      const dt = (t - prev) / 1000;
      prev = t;
      if (idle.current && !drag.current.active) {
        rotation.set(rotation.get() + dt * 2.2);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, rotation]);

  const angleFrom = (e: React.PointerEvent) => {
    const el = circleRef.current;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    return (
      (Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) /
      Math.PI
    );
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    idle.current = false;
    drag.current = {
      active: true,
      last: angleFrom(e),
      moved: 0,
      velocity: 0,
      time: performance.now(),
    };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const a = angleFrom(e);
    let delta = a - drag.current.last;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const now = performance.now();
    const dt = Math.max(16, now - drag.current.time);
    drag.current.velocity = (delta / dt) * 1000; // deg / s
    drag.current.time = now;
    drag.current.last = a;
    drag.current.moved += Math.abs(delta);
    rotation.set(rotation.get() + delta);
  };

  const settle = () => {
    if (!drag.current.active) return;
    const { moved, velocity } = drag.current;
    drag.current.active = false;
    setDragging(false);

    if (moved < 4) {
      // treated as a tap
      select((active + 1) % stages.length);
      return;
    }
    // momentum — clamped so it never spins away
    const carry = Math.max(-160, Math.min(160, velocity * 0.35));
    animate(rotation, rotation.get() + carry, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        idle.current = true;
      },
    });
    // rotating past a quarter turn advances the highlighted stage
    const steps = Math.round(moved / 90);
    if (steps > 0) {
      setActive((a) => (a + steps * (velocity >= 0 ? 1 : -1) + stages.length * 4) % stages.length);
    }
  };

  const select = (i: number) => {
    setActive(i);
    idle.current = false;
    animate(rotation, rotation.get() + 90, {
      type: "spring",
      stiffness: 48,
      damping: 15,
      onComplete: () => {
        idle.current = true;
      },
    });
  };

  return (
    <section
      id="our-moto"
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16"
      style={{ background: `linear-gradient(180deg, ${CREAM} 0%, #f5efe4 100%)` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,48,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <Editorial className="mt-6 text-[clamp(2rem,5.5vw,3.75rem)]">
              {c.title} <em style={{ color: EMBER }}>{c.titleEm}</em>
              {c.titleTail}
            </Editorial>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]">
              {c.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
          {/* Interactive LEAD logo */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[420px]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-6 rounded-full blur-3xl"
                style={{ background: stages[active].color, opacity: 0.16 }}
              />
              <motion.div
                ref={circleRef}
                role="button"
                tabIndex={0}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={settle}
                onPointerCancel={settle}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    select((active + 1) % stages.length);
                  }
                }}
                aria-label={`LEAD cycle — showing ${stages[active].title}. Drag or tap to explore the stages.`}
                animate={{ scale: dragging ? 0.985 : 1 }}
                transition={{ duration: 0.35, ease }}
                className="relative block w-full touch-none select-none rounded-full focus-luxe"
                style={{ cursor: dragging ? "grabbing" : "grab" }}
              >
                <motion.img
                  src={c.image || leadMotto.url}
                  alt="LEAD School cycle — Planning, Implementation, Review, Evaluation"
                  loading="lazy"
                  draggable={false}
                  className="w-full rounded-full object-contain"
                  style={{
                    rotate: reduce ? 0 : rotation,
                    filter: "drop-shadow(0 30px 60px rgba(15,23,48,0.28))",
                  }}
                />
              </motion.div>
              <div className="mt-5 text-center text-[10.5px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Drag to explore
              </div>
            </div>
          </Reveal>

          {/* Stage cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {stages.map((st, i) => {
              const on = i === active;
              return (
                <motion.button
                  key={st.n}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => select(i)}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                  className="group relative min-h-[44px] overflow-hidden rounded-[24px] p-6 text-left ring-1 transition-all duration-500"
                  style={{
                    background: on ? st.tint : "rgba(255,255,255,0.72)",
                    boxShadow: on
                      ? "0 26px 50px -28px rgba(15,23,48,0.42)"
                      : "0 14px 30px -24px rgba(15,23,48,0.3)",
                    ["--tw-ring-color" as string]: on ? st.color : "rgba(148,163,184,0.4)",
                    transform: on ? "translateY(-4px)" : undefined,
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[3px] transition-opacity duration-500"
                    style={{ background: st.color, opacity: on ? 1 : 0 }}
                  />
                  <div
                    className="font-editorial text-[34px] leading-none"
                    style={{ color: st.color }}
                  >
                    {st.n}
                  </div>
                  <h3
                    className="mt-3 text-[13px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: NAVY_DEEP }}
                  >
                    {st.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-slate-700">{st.body}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- 7 · FINAL CTA -------- */
function FinalCTA() {
  const c = useContent<Record<string, string>>("about_cta");
  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16"
      style={{
        background: `radial-gradient(80% 60% at 10% 10%, #fef3e2 0%, transparent 60%), radial-gradient(80% 60% at 90% 90%, #eef2ff 0%, transparent 60%), linear-gradient(180deg, #f5efe4 0%, ${CREAM} 100%)`,
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <Editorial className="mt-6 text-[clamp(2.25rem,6vw,4rem)]">
              {c.title} <em style={{ color: EMBER }}>{c.titleEm}</em> {c.titleTail}
            </Editorial>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]">
              {c.paragraph}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex h-14 items-center justify-between gap-3 rounded-full px-6 text-[15px] font-semibold text-white transition-all duration-500 hover:shadow-[0_18px_40px_-12px_rgba(15,23,42,0.5)] active:scale-[0.97]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.16 258) 0%, oklch(0.35 0.13 258) 100%)",
                  boxShadow: "0 14px 36px -12px rgba(34,64,180,0.55)",
                }}
              >
                <span>{c.ctaPrimary}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </Link>
              <Link
                to="/academics"
                className="group inline-flex h-14 items-center justify-between gap-3 rounded-full bg-white/95 px-6 text-[15px] font-semibold text-slate-900 ring-1 ring-slate-200 transition-all duration-500 hover:shadow-[0_18px_40px_-12px_rgba(15,23,42,0.25)] active:scale-[0.97]"
              >
                <span>{c.ctaSecondary}</span>
                <span
                  className="grid h-8 w-8 place-items-center rounded-full text-white transition-transform duration-500 group-hover:translate-x-1"
                  style={{ background: NAVY }}
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="group relative">
            <div
              className="overflow-hidden rounded-[28px] ring-1 ring-slate-200"
              style={{ boxShadow: "0 40px 80px -30px rgba(15,23,48,0.35)" }}
            >
              <img
                src={c.image || visitImage.url}
                alt="Students learning together in a Chaitanya classroom"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- Page -------- */
function AboutSchool() {
  return (
    <main className="min-h-screen" style={{ background: CREAM }}>
      <SiteHeader />
      <Hero />
      <Beginning />
      <Timeline />
      <PeopleBehind />
      <OurMoto />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
