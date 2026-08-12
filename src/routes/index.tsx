import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, ChevronRight, X, Sparkles, GraduationCap, Award, Users } from "lucide-react";

import logoAsset from "@/assets/chaitanya-logo.asset.json";
import hero1Assembly from "@/assets/hero-assembly-best.png.asset.json";
import hero2Classroom from "@/assets/hero-2-classroom.png.asset.json";
import hero3Students from "@/assets/hero-3-students.png.asset.json";
import hero4Campus from "@/assets/hero-4-campus.png.asset.json";
import { ContactActions } from "@/components/contact-actions";
import { LocationSection } from "@/components/location-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useContent } from "@/lib/use-content";
import { ACADEMIC_STAGES } from "@/lib/academics-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "preload", as: "image", href: hero1Assembly.url } as unknown],
  }),
});

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------------- Hero ---------------- */
function PillButton({
  children,
  variant = "solid",
  to,
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  to?: string;
}) {
  const solid =
    "text-white shadow-[0_10px_26px_-12px_rgba(34,64,180,0.5)] bg-[linear-gradient(135deg,oklch(0.55_0.16_258)_0%,oklch(0.35_0.13_258)_100%)]";
  const ghost = "bg-white/95 text-foreground ring-1 ring-black/10";
  const cls = `group relative inline-flex h-11 min-h-11 w-auto items-center justify-between gap-2.5 self-start rounded-full py-0 pl-4 pr-1.5 text-[13.5px] font-semibold tracking-tight transition-all duration-500 active:scale-[0.97] hover:shadow-[0_14px_30px_-14px_rgba(15,23,42,0.35)] md:h-12 md:text-[14px] ${
    variant === "solid" ? solid : ghost
  }`;
  const inner = (
    <>
      <span>{children}</span>
      <span
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:translate-x-1 ${
          variant === "solid" ? "bg-white/20" : "bg-[oklch(0.35_0.13_258)] text-white"
        }`}
      >
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return <button className={cls}>{inner}</button>;
}

function Hero() {
  return <HeroInner />;
}

function ScrollIndicator({ style }: { style?: unknown }) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href="#chapter-about"
      aria-label="Scroll to next section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.9, ease }}
      style={style}
      className="group absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/90 md:bottom-14"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.36em] drop-shadow">
        Scroll
      </span>
      {/* Minimalist mouse with bouncing dot — Apple/Linear style */}
      <motion.span
        whileHover={reduce ? undefined : { scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex h-10 w-6 items-start justify-center rounded-full border-[1.5px] border-white/85 backdrop-blur-sm"
        style={{
          boxShadow: "0 8px 24px -6px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <motion.span
          aria-hidden
          animate={reduce ? {} : { y: [4, 16, 4], opacity: [1, 0.15, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
          className="mt-1 h-1.5 w-1.5 rounded-full bg-white"
          style={{ boxShadow: "0 0 8px rgba(255,255,255,0.85)" }}
        />
      </motion.span>
    </motion.a>
  );
}

function HeroInner() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.7]);
  // Scroll-linked fade & lift for the 3D scroll button
  const scrollBtnOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 0.6, 0]);
  const scrollBtnY = useTransform(scrollYProgress, [0, 0.35], [0, 40]);
  const scrollBtnScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.85]);
  const cms = useContent<{
    eyebrow: string;
    headline: string;
    headlineTwo: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    slides: { image?: string; alt?: string }[];
  }>("home_hero");
  const defaultHeroImages = [
    { src: hero1Assembly.url, alt: "Chaitanya EM School — morning assembly with students" },
    { src: hero2Classroom.url, alt: "Classroom in session with teacher" },
    { src: hero3Students.url, alt: "Three students collaborating at a desk" },
    { src: hero4Campus.url, alt: "Chaitanya EM School campus aerial view" },
  ];
  const cmsSlides = (cms.slides ?? []).filter((s) => s && s.image);
  const heroImages = cmsSlides.length
    ? cmsSlides.map((s) => ({ src: s.image!, alt: s.alt || "Chaitanya EM School" }))
    : defaultHeroImages;
  const [heroIdx, setHeroIdx] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const slideCount = heroImages.length;
  // Keep the active index valid when the admin adds/removes slides.
  useEffect(() => {
    setHeroIdx((i) => (i < slideCount ? i : 0));
  }, [slideCount]);
  useEffect(() => {
    if (reduce || slideCount < 2) return;
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % slideCount), 5500);
    return () => clearInterval(t);
  }, [reduce, slideCount]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div
        style={{ y: imgY, scale: imgScale, perspective: 1400 }}
        className="absolute inset-0"
      >
        {/* Dark warm placeholder that blends with the school photography — prevents unknown white flash before decode */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1a2540 0%, #223055 45%, #3a2a1e 100%)",
          }}
        />
        {heroImages.map((img, i) => {
          const active = i === heroIdx;
          return (
            <motion.img
              key={`${i}-${img.src}`}
              src={img.src}
              alt={i === 0 ? img.alt : ""}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding="async"
              loading={i === 0 ? "eager" : "lazy"}
              onLoad={i === 0 ? () => setHeroLoaded(true) : undefined}

              className="absolute inset-0 h-full w-full object-cover will-change-[transform,opacity] [backface-visibility:hidden]"
              initial={false}
              animate={
                reduce
                  ? { opacity: active ? 1 : 0, scale: 1 }
                  : active
                    ? { opacity: 1, scale: 1.08 }
                    : { opacity: 0, scale: 1 }
              }
              transition={
                active
                  ? { opacity: { duration: 1.1, ease }, scale: { duration: 6.5, ease: "easeOut" } }
                  : { opacity: { duration: 1.1, ease }, scale: { duration: 0 } }
              }
              style={{ transformOrigin: i % 2 ? "65% 45%" : "35% 55%" }}
            />
          );
        })}
      </motion.div>
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,12,28,0.3) 0%, rgba(10,12,28,0.42) 55%, rgba(8,10,24,0.62) 100%)",
          }}
        />
      </motion.div>
      {/* stronger local scrim behind headline for legibility during image cycling */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%]"
        style={{
          background:
            "radial-gradient(120% 60% at 12% 100%, rgba(4,6,18,0.62) 0%, rgba(4,6,18,0.3) 45%, rgba(4,6,18,0.08) 75%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-[clamp(9rem,34vh,15rem)] sm:px-10 sm:pb-32 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 sm:text-[10px] sm:tracking-[0.32em]"
        >
          <span className="h-px w-6 bg-white/50" />
          {cms.eyebrow}
        </motion.div>

        <div className="mt-4 pb-2 md:mt-5">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease, delay: 0.65 }}
            className="text-[clamp(2.5rem,11.5vw,6rem)] sm:whitespace-nowrap leading-[1.15] tracking-[-0.02em] text-white md:text-[clamp(3.5rem,7vw,6.5rem)]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.45)",
            }}
          >
            {cms.headline}
          </motion.h1>
        </div>
        <div className="pb-2">
          <motion.h2
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease, delay: 0.85 }}
            className="text-[clamp(2.5rem,11.5vw,6rem)] sm:whitespace-nowrap leading-[1.15] tracking-[-0.02em] text-white/95 md:text-[clamp(3.5rem,7vw,6.5rem)]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.45)",
            }}
          >
            {cms.headlineTwo}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1.15 }}
          className="mt-5 max-w-[36ch] md:mt-6 text-[18px] font-medium leading-[1.5] tracking-[-0.005em] text-white md:text-[17px] lg:text-[18.5px]"
          style={{
            textShadow:
              "0 1px 2px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.7), 0 8px 34px rgba(0,0,0,0.55)",
          }}
        >
          {cms.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1.4 }}
          className="mt-6 flex flex-row flex-wrap items-center gap-2.5 sm:gap-3"
        >
          <PillButton to="/contact">{cms.ctaPrimary || "Book a visit"}</PillButton>
          <PillButton variant="ghost" to="/academics">
            {cms.ctaSecondary || "Our academics"}
          </PillButton>
        </motion.div>
      </div>

      {/* 3D scroll indicator */}
      <ScrollIndicator
        style={{ opacity: scrollBtnOpacity, y: scrollBtnY, scale: scrollBtnScale }}
      />

      {/* Clean editorial hero-to-content fade (no wave) */}
      <HeroBottomFade />
    </section>
  );
}

function HeroBottomFade() {
  // Editorial hero-to-content transition: a clean, confident bottom edge.
  // A shallow vertical fade dissolves the hero into the next section's warm
  // ivory background — no wave, no curve, no decorative shape. Compact on
  // mobile, generous on desktop.
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 sm:h-16 md:h-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(251,247,240,0) 0%, rgba(251,247,240,0.28) 62%, rgba(251,247,240,0.92) 100%)",
      }}
    />
  );
}

/* ---------------- Hero floating glass badges ---------------- */
function HeroFloatingBadges() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[5] hidden md:block">
      {/* Top-right: Est. badge */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: -16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9, ease }}
        className="absolute right-6 top-28 lg:right-12 lg:top-32"
      >
        <div
          className={`glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 ${reduce ? "" : "float-slow"}`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[oklch(0.32_0.11_258)] text-white">
            <Award className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <div className="leading-tight">
            <div className="text-[9px] font-semibold uppercase tracking-[0.24em] text-foreground/60">
              Established
            </div>
            <div className="text-[15px] font-semibold tracking-tight text-foreground">
              Since 2012
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right mid: 100% environment */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.9, ease }}
        className="absolute right-10 top-1/2 -translate-y-1/2 lg:right-16"
      >
        <div
          className={`glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 ${reduce ? "" : "float-slower"}`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[oklch(0.55_0.16_148)] text-white">
            <Sparkles className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <div className="leading-tight">
            <CountUp
              to={100}
              suffix="%"
              className="text-[15px] font-semibold tracking-tight text-foreground"
            />
            <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-foreground/60">
              Academic environment
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right bottom: admissions ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.9, ease }}
        className="pointer-events-auto absolute bottom-32 right-8 lg:right-16"
      >
        <Link
          to="/contact"
          className="glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold tracking-tight text-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.62_0.18_45)] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.62_0.18_45)]" />
          </span>
          Admissions open · 2026
          <ArrowUpRight className="h-3.5 w-3.5 opacity-60" strokeWidth={2.4} />
        </Link>
      </motion.div>
    </div>
  );
}

/* Number that counts up when first mounted */
function CountUp({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) {
      setN(to);
      return;
    }
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, reduce]);
  return (
    <div className={className}>
      {n}
      {suffix}
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        originX: 0,
        background:
          "linear-gradient(90deg, oklch(0.32 0.11 258) 0%, oklch(0.45 0.14 220) 45%, oklch(0.78 0.13 78) 100%)",
      }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]"
    />
  );
}

/* ---------------- Page previews ---------------- */
type SectionPreview = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  to: "/about" | "/academics" | "/facilities" | "/gallery" | "/contact";
  cta: string;
};

const PREVIEW_ROUTES: SectionPreview["to"][] = [
  "/about",
  "/academics",
  "/facilities",
  "/gallery",
  "/contact",
];

function PreviewCard({ item, index }: { item: SectionPreview; index: number }) {
  return <PreviewCardInner item={item} index={index} />;
}

function ContactExtras() {
  const contact = useContent<{ phone: string; whatsapp: string; email: string }>("contact_info");
  return (
    <div className="mt-7">
      <ContactActions
        tel={contact.phone}
        whatsapp={contact.whatsapp}
        email={contact.email}
        className="grid-cols-1"
      />
    </div>
  );
}

/* Distinct palette + accents per section */
type Theme = {
  bg: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  ctaIcon: string;
  accent: string;
};
const themes: Theme[] = [
  {
    // About — warm cream / trust blue accent
    bg: "bg-[linear-gradient(180deg,oklch(0.99_0.008_78)_0%,oklch(0.955_0.03_78)_100%)]",
    eyebrow: "text-[oklch(0.42_0.14_258)]",
    heading: "text-foreground",
    body: "text-foreground/72",
    cta: "bg-[oklch(0.32_0.11_258)] text-white",
    ctaIcon: "bg-white/15",
    accent: "oklch(0.32 0.11 258)",
  },
  {
    // Academics — warm amber mesh (no black)
    bg: "bg-[radial-gradient(120%_80%_at_0%_0%,oklch(0.96_0.05_78)_0%,transparent_55%),radial-gradient(120%_80%_at_100%_100%,oklch(0.92_0.09_45)_0%,transparent_55%),linear-gradient(180deg,oklch(0.985_0.02_78)_0%,oklch(0.94_0.07_60)_100%)]",
    eyebrow: "text-[oklch(0.46_0.16_45)]",
    heading: "text-foreground",
    body: "text-foreground/72",
    cta: "bg-[linear-gradient(135deg,oklch(0.62_0.18_45),oklch(0.48_0.18_35))] text-white",
    ctaIcon: "bg-white/20",
    accent: "oklch(0.72 0.16 55)",
  },
  {
    // Facilities — education green
    bg: "bg-[linear-gradient(180deg,oklch(0.97_0.03_148)_0%,oklch(0.92_0.07_148)_100%)]",
    eyebrow: "text-[oklch(0.38_0.14_148)]",
    heading: "text-foreground",
    body: "text-foreground/72",
    cta: "bg-[oklch(0.38_0.14_148)] text-white",
    ctaIcon: "bg-white/15",
    accent: "oklch(0.38 0.14 148)",
  },
  {
    // Gallery — plum / lilac mesh (no black)
    bg: "bg-[radial-gradient(120%_80%_at_100%_0%,oklch(0.94_0.06_320)_0%,transparent_55%),radial-gradient(120%_80%_at_0%_100%,oklch(0.92_0.08_260)_0%,transparent_55%),linear-gradient(180deg,oklch(0.98_0.02_310)_0%,oklch(0.93_0.07_310)_100%)]",
    eyebrow: "text-[oklch(0.42_0.16_310)]",
    heading: "text-foreground",
    body: "text-foreground/72",
    cta: "bg-[linear-gradient(135deg,oklch(0.5_0.18_310),oklch(0.34_0.15_310))] text-white",
    ctaIcon: "bg-white/20",
    accent: "oklch(0.62 0.15 310)",
  },
  {
    // Contact — soft mint / trust blue mesh
    bg: "bg-[radial-gradient(120%_80%_at_0%_0%,oklch(0.96_0.05_170)_0%,transparent_55%),radial-gradient(120%_80%_at_100%_100%,oklch(0.94_0.05_258)_0%,transparent_55%),linear-gradient(180deg,oklch(0.985_0.015_258)_0%,oklch(0.94_0.045_180)_100%)]",
    eyebrow: "text-[oklch(0.32_0.11_258)]",
    heading: "text-foreground",
    body: "text-foreground/72",
    cta: "bg-[linear-gradient(135deg,oklch(0.55_0.16_258),oklch(0.35_0.13_258))] text-white",
    ctaIcon: "bg-white/20",
    accent: "oklch(0.32 0.11 258)",
  },
];

const academicsStages = ACADEMIC_STAGES.map((s, i) => ({
  slug: s.slug,
  tag: `Stage 0${i + 1} · ${s.tag}`,
  grades: s.grades,
  line: s.line,
  image: s.preview.image,
  detail: s.preview.description,
  title: s.preview.title,
  focus: s.preview.focus,
  cta: s.preview.cta,
  fill: s.bg,
  fg: s.fg,
}));

function AcademicsStageModal({
  stage,
  onClose,
}: {
  stage: (typeof academicsStages)[number] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!stage) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [stage, onClose]);
  return (
    <AnimatePresence>
      {stage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease }}
          className="fixed inset-0 z-[75] grid place-items-center bg-black/65 px-5 backdrop-blur-xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={stage.grades}
        >
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.38, ease }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm overflow-hidden rounded-[32px] bg-white shadow-[0_40px_100px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/20"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                src={stage.image}
                alt={stage.grades}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label="Close stage"
                onClick={onClose}
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-foreground shadow-lg active:scale-95 transition-transform"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
            <div className="px-6 py-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                {stage.tag}
              </div>
              <h4 className="font-editorial mt-2 text-[34px] leading-none text-foreground">
                {stage.grades}
              </h4>
              <p className="mt-3 text-[15px] font-semibold leading-snug text-foreground">
                {stage.title}
              </p>
              <p className="mt-3 text-[13px] font-medium leading-relaxed text-foreground/70">
                {stage.detail}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stage.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full bg-muted px-3 py-1.5 text-[11px] font-semibold tracking-tight text-foreground ring-1 ring-black/5"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/academics/$stage"
                params={{ stage: stage.slug }}
                onClick={onClose}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[oklch(0.36_0.13_258)] px-5 py-2.5 text-[12px] font-semibold text-white transition-transform duration-200 hover:gap-3 active:scale-95"
              >
                {stage.cta}
                <ChevronRight className="h-4 w-4" strokeWidth={2.4} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AcademicsStageCards() {
  const [selected, setSelected] = useState<(typeof academicsStages)[number] | null>(null);
  const [pressed, setPressed] = useState<string | null>(null);
  /* Editable in Admin Studio → Home page → Academics stages. */
  const cms = useContent<{ stages?: Array<Record<string, string>> }>("home_academics");
  const cmsStages = Array.isArray(cms.stages) ? cms.stages : [];
  const stages = cmsStages.length
    ? cmsStages.map((r, i) => {
        const base = academicsStages[i] ?? academicsStages[academicsStages.length - 1];
        return {
          ...base,
          slug: (r.slug?.trim() || base.slug) as typeof base.slug,
          tag: `Stage 0${i + 1} · ${(r.title?.trim() || base.title).split(" ")[0]}`,
          grades: r.ages?.trim() || base.grades,
          line: r.tagline?.trim() || base.line,
          title: r.title?.trim() || base.title,
          detail: r.body?.trim() || base.detail,
          image: r.image?.trim() || base.image,
        };
      })
    : academicsStages;
  return (
    <div className="mt-7 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
      {stages.map((s, i) => (
        <motion.button
          key={`${s.tag}-${i}`}
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease, delay: i * 0.08 }}
          whileHover={{ rotateX: -6, rotateY: 6, y: -6, scale: 1.02 }}
          whileTap={{ rotateX: -6, rotateY: 6, y: -4, scale: 0.99 }}
          type="button"
          onClick={() => setSelected(s)}
          onPointerDown={() => setPressed(s.tag)}
          onPointerUp={() => setPressed(null)}
          onPointerCancel={() => setPressed(null)}
          onPointerLeave={() => setPressed(null)}
          data-pressed={pressed === s.tag ? "true" : undefined}
          className={`group relative min-h-[148px] w-full overflow-hidden rounded-[30px] p-6 text-left ring-1 ring-white/10 md:min-h-[240px] md:p-8 ${s.fg}`}
          style={{
            background: s.fill,
            boxShadow: "0 30px 60px -30px rgba(0,0,0,0.55)",
            transformStyle: "preserve-3d",
            transformPerspective: 900,
          }}
        >
          {/* Shine sweep on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.28)_50%,transparent_65%)] transition-transform duration-[900ms] ease-out group-hover:translate-x-full group-data-[pressed=true]:translate-x-full"
          />
          {/* Soft aurora bloom that fades in on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60 group-data-[pressed=true]:opacity-60"
            style={{ background: "radial-gradient(circle,rgba(255,255,255,0.9),transparent 65%)" }}
          />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] opacity-80">
              {s.tag}
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 ring-1 ring-white/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-45 group-data-[pressed=true]:translate-x-1 group-data-[pressed=true]:rotate-45">
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </div>
          <div
            className="mt-8 text-[26px] font-semibold leading-[1.05] tracking-[-0.03em] transition-transform duration-500 group-hover:-translate-y-0.5 group-data-[pressed=true]:-translate-y-0.5"
            style={{ fontFamily: "var(--font-display)", transform: "translateZ(30px)" }}
          >
            {s.grades}
          </div>
          <div
            className="mt-2 text-[14px] font-medium opacity-90"
            style={{ transform: "translateZ(18px)" }}
          >
            {s.line}
          </div>
        </motion.button>
      ))}
      <AcademicsStageModal stage={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function PreviewCardInner({ item, index }: { item: SectionPreview; index: number }) {
  const t = themes[index] ?? themes[0];
  const isAcademics = item.to === "/academics";
  const isDarkSection = false;
  return (
    <motion.section
      id={item.to.replace("/", "")}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease }}
      className={`relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:py-32 ${t.bg}`}
      style={{ scrollMarginTop: 96 }}
    >
      {/* Ambient accent orbs — professional depth */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: t.accent }}
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-8 h-56 w-56 rounded-full opacity-15 blur-3xl"
        style={{ background: t.accent }}
      />
      {isDarkSection && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      )}

      <div className="relative mx-auto max-w-6xl">
        <div
          className={`relative text-[10px] font-semibold uppercase tracking-[0.32em] ${t.eyebrow}`}
        >
          {item.eyebrow}
        </div>

        <h3
          className={`font-editorial relative mt-4 text-[clamp(2.6rem,11vw,4.25rem)] leading-[0.94] md:text-[clamp(3.5rem,6.5vw,6rem)] ${t.heading}`}
        >
          {item.title}
        </h3>

        <p
          className={`relative mt-4 max-w-[44ch] text-[15px] font-medium leading-[1.65] md:text-[17px] lg:text-[18px] ${t.body}`}
        >
          {item.body}
        </p>

        {isAcademics ? (
          <AcademicsStageCards />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`card-spotlight hover-lift relative mt-7 overflow-hidden rounded-[28px] ring-1 md:mt-10 ${isDarkSection ? "ring-white/10" : "ring-black/5"}`}
            style={{
              boxShadow: "0 30px 70px -30px rgba(15,23,42,0.4)",
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <motion.img
              src={item.image}
              alt=""
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease }}
              className="h-[42vh] w-full object-cover sm:h-[54vh] md:h-[62vh] lg:h-[70vh]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        )}

        {item.to === "/contact" && <ContactExtras />}

        {!isAcademics && (
          <Link
            to={item.to}
            className={`group btn-glow relative mt-7 inline-flex h-12 items-center gap-3 rounded-full pl-5 pr-2 text-[13px] font-semibold tracking-tight transition-all duration-500 active:scale-[0.97] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(15,23,42,0.35)] ${t.cta}`}
          >
            <span className="uppercase tracking-[0.14em]">{item.cta}</span>
            <span
              className={`grid h-8 w-8 place-items-center rounded-full transition-transform duration-500 group-hover:translate-x-1 ${t.ctaIcon}`}
            >
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>
        )}
      </div>
    </motion.section>
  );
}

function PageSections() {
  const cms = useContent<{ cards?: Array<Partial<SectionPreview>> }>("home_previews");
  const previews: SectionPreview[] = (cms.cards ?? []).map((c, i) => ({
    eyebrow: c.eyebrow ?? "",
    title: c.title ?? "",
    body: c.body ?? "",
    image: c.image ?? "",
    cta: c.cta ?? "Read more",
    to: PREVIEW_ROUTES[i] ?? "/about",
  }));
  return (
    <div id="chapter-about" className="relative bg-background scroll-mt-24">
      {previews.map((item, i) => (
        <PreviewCard key={`${item.to}-${i}`} item={item} index={i} />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <PageSections />
        <LocationSection />
        <div id="site-footer">
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
