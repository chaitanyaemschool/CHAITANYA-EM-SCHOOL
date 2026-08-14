import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
  useReducedMotion,
  type PanInfo,
} from "motion/react";
import { X, ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";

import lifeAnnualDay from "@/assets/life-annualday.jpg";
import lifeSports from "@/assets/life-sports.jpg";
import lifeScience from "@/assets/life-science.jpg";
import lifeDrawing from "@/assets/life-drawing.jpg";
import lifeIndependence from "@/assets/life-independence.jpg";
import lifeYoga from "@/assets/life-yoga.jpg";
import lifeDance from "@/assets/life-dance.jpg";
import lifeFestival from "@/assets/life-festival.jpg";
import lifeParents from "@/assets/life-parents.jpg";
import lifeAssembly from "@/assets/life-assembly.jpg";
import classroomImg from "@/assets/classroom.jpg";
// Responsive webp srcsets — right pixel size per device keeps the rail smooth.
import annualDaySet from "@/assets/life-annualday.jpg?w=320;520;720&format=webp&as=srcset";
import sportsSet from "@/assets/life-sports.jpg?w=320;520;720&format=webp&as=srcset";
import scienceSet from "@/assets/life-science.jpg?w=320;520;720&format=webp&as=srcset";
import drawingSet from "@/assets/life-drawing.jpg?w=320;520;720&format=webp&as=srcset";
import independenceSet from "@/assets/life-independence.jpg?w=320;520;720&format=webp&as=srcset";
import yogaSet from "@/assets/life-yoga.jpg?w=320;520;720&format=webp&as=srcset";
import danceSet from "@/assets/life-dance.jpg?w=320;520;720&format=webp&as=srcset";
import festivalSet from "@/assets/life-festival.jpg?w=320;520;720&format=webp&as=srcset";
import parentsSet from "@/assets/life-parents.jpg?w=320;520;720&format=webp&as=srcset";
import assemblySet from "@/assets/life-assembly.jpg?w=320;520;720&format=webp&as=srcset";
import classroomSet from "@/assets/classroom.jpg?w=320;520;720&format=webp&as=srcset";
import annualDayLargeSet from "@/assets/life-annualday.jpg?w=640;960;1280&format=webp&as=srcset";
import sportsLargeSet from "@/assets/life-sports.jpg?w=640;960;1280&format=webp&as=srcset";
import scienceLargeSet from "@/assets/life-science.jpg?w=640;960;1280&format=webp&as=srcset";
import drawingLargeSet from "@/assets/life-drawing.jpg?w=640;960;1280&format=webp&as=srcset";
import independenceLargeSet from "@/assets/life-independence.jpg?w=640;960;1280&format=webp&as=srcset";
import yogaLargeSet from "@/assets/life-yoga.jpg?w=640;960;1280&format=webp&as=srcset";
import danceLargeSet from "@/assets/life-dance.jpg?w=640;960;1280&format=webp&as=srcset";
import festivalLargeSet from "@/assets/life-festival.jpg?w=640;960;1280&format=webp&as=srcset";
import parentsLargeSet from "@/assets/life-parents.jpg?w=640;960;1280&format=webp&as=srcset";
import assemblyLargeSet from "@/assets/life-assembly.jpg?w=640;960;1280&format=webp&as=srcset";
import classroomLargeSet from "@/assets/classroom.jpg?w=640;960;1280&format=webp&as=srcset";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useContent } from "@/lib/use-content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "School Gallery | Chaitanya EM High School" },
        {
          name: "description",
          content:
            "Dare to dream, care to achieve. Every smile, every memory, every achievement. A visual diary of life at Chaitanya EM High School, Chekkapalli.",
        },
        { property: "og:title", content: "School Gallery | Chaitanya EM High School" },
        {
          property: "og:description",
          content:
            "Dare to dream, care to achieve. Every smile, every memory, every achievement. A visual diary of life at Chaitanya EM High School, Chekkapalli.",
        },
        { property: "og:url", content: "https://www.chaitanyaemschool.com/gallery" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: "https://www.chaitanyaemschool.com/gallery" }
      ]
  }),
  component: LifePage,
});

const ease = [0.22, 1, 0.36, 1] as const;

/* -------------------- Data -------------------- */

type Story = {
  id: string;
  title: string;
  line: string;
  img: string;
  srcSet: string;
  srcSetLarge: string;
  reveal: "mask" | "zoom" | "blur" | "layer" | "lift" | "perspective";
  size: "hero" | "tall" | "wide" | "square";
  category: "Campus" | "Classrooms" | "Events" | "Annual Day" | "Sports" | "Labs";
};

const DEFAULT_STORIES: Story[] = [
  {
    id: "annual",
    title: "Annual Day",
    line: "One evening, a thousand tiny stars on stage.",
    img: lifeAnnualDay,
    srcSet: annualDaySet,
    srcSetLarge: annualDayLargeSet,
    reveal: "mask",
    size: "hero",
    category: "Annual Day",
  },
  {
    id: "sports",
    title: "Sports Day",
    line: "Small feet, big finish lines.",
    img: lifeSports,
    srcSet: sportsSet,
    srcSetLarge: sportsLargeSet,
    reveal: "zoom",
    size: "tall",
    category: "Sports",
  },
  {
    id: "science",
    title: "Science Activities",
    line: "The world begins to answer curious questions.",
    img: lifeScience,
    srcSet: scienceSet,
    srcSetLarge: scienceLargeSet,
    reveal: "blur",
    size: "wide",
    category: "Labs",
  },
  {
    id: "drawing",
    title: "Drawing Competition",
    line: "Imagination arrives on paper first.",
    img: lifeDrawing,
    srcSet: drawingSet,
    srcSetLarge: drawingLargeSet,
    reveal: "layer",
    size: "tall",
    category: "Events",
  },
  {
    id: "classroom",
    title: "Classroom Learning",
    line: "Where a quiet spark becomes an idea.",
    img: classroomImg,
    srcSet: classroomSet,
    srcSetLarge: classroomLargeSet,
    reveal: "lift",
    size: "wide",
    category: "Classrooms",
  },
  {
    id: "independence",
    title: "Independence Day",
    line: "Small hands, tallest salute.",
    img: lifeIndependence,
    srcSet: independenceSet,
    srcSetLarge: independenceLargeSet,
    reveal: "perspective",
    size: "hero",
    category: "Events",
  },
  {
    id: "yoga",
    title: "Yoga Day",
    line: "Stillness is also a lesson.",
    img: lifeYoga,
    srcSet: yogaSet,
    srcSetLarge: yogaLargeSet,
    reveal: "mask",
    size: "wide",
    category: "Campus",
  },
  {
    id: "dance",
    title: "Dance Performance",
    line: "Rhythm learnt long before the words.",
    img: lifeDance,
    srcSet: danceSet,
    srcSetLarge: danceLargeSet,
    reveal: "zoom",
    size: "tall",
    category: "Annual Day",
  },
  {
    id: "festival",
    title: "Festival Celebration",
    line: "Lights, laughter, and one big family.",
    img: lifeFestival,
    srcSet: festivalSet,
    srcSetLarge: festivalLargeSet,
    reveal: "blur",
    size: "wide",
    category: "Events",
  },
  {
    id: "parents",
    title: "Parents Meeting",
    line: "The most important classroom is a shared one.",
    img: lifeParents,
    srcSet: parentsSet,
    srcSetLarge: parentsLargeSet,
    reveal: "lift",
    size: "square",
    category: "Campus",
  },
  {
    id: "assembly",
    title: "Morning Assembly",
    line: "Every day begins together.",
    img: lifeAssembly,
    srcSet: assemblySet,
    srcSetLarge: assemblyLargeSet,
    reveal: "perspective",
    size: "wide",
    category: "Campus",
  },
];

const REVEALS: Story["reveal"][] = ["mask", "zoom", "blur", "layer", "lift", "perspective"];
const SIZES: Story["size"][] = [
  "hero",
  "tall",
  "wide",
  "tall",
  "wide",
  "hero",
  "wide",
  "tall",
  "wide",
  "square",
  "wide",
];

/** Photos are CMS-managed (admin → Life / Gallery → Photo stories). */
function useStories(): Story[] {
  const cms = useContent<{ photos?: Array<Record<string, string>> }>("gallery_photos");
  const photos = (cms.photos ?? []).filter((p) => p && p.image);
  return photos.map((p, i) => {
    const fallback = DEFAULT_STORIES.find((d) => d.img === p.image);
    const base = DEFAULT_STORIES[i];
    return {
      id: fallback?.id ?? `photo-${i}`,
      title: p.title ?? fallback?.title ?? "",
      line: p.line ?? fallback?.line ?? "",
      img: p.image,
      srcSet: fallback?.srcSet ?? "",
      srcSetLarge: fallback?.srcSetLarge ?? "",
      reveal: base?.reveal ?? REVEALS[i % REVEALS.length],
      size: base?.size ?? SIZES[i % SIZES.length],
      category: (p.category as Story["category"]) ?? fallback?.category ?? "Campus",
    };
  });
}

const categories = [
  "All",
  "Campus",
  "Classrooms",
  "Events",
  "Annual Day",
  "Sports",
  "Labs",
] as const;

/* -------------------- YouTube videos -------------------- */
// Edited from the admin CMS (Life / Gallery → Video stories).
type VideoItem = { id: string; url: string; title: string; label: string; thumb?: string };

/** Accepts full watch/share/embed links or a bare 11-char video id. */
function youTubeId(input: string): string {
  const v = (input || "").trim();
  if (!v) return "";
  if (/^[\w-]{11}$/.test(v)) return v;
  const m =
    v.match(/[?&]v=([\w-]{11})/) ||
    v.match(/youtu\.be\/([\w-]{11})/) ||
    v.match(/\/(?:embed|shorts|live)\/([\w-]{11})/);
  return m ? m[1] : "";
}

/* -------------------- Header + progress -------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-primary"
    />
  );
}

/* -------------------- Photo Stories (magazine layout) -------------------- */

/* -------------------- Horizontal 3D card rail -------------------- */

type RailItem = { id: string; title: string; sub: string; img: string; srcSet?: string };

function Rail3DCard({
  item,
  index,
  containerRef,
  onTap,
  aspect,
}: {
  item: RailItem;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onTap: () => void;
  aspect: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const progress = useMotionValue(0.5);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;
    let raf = 0;
    const update = () => {
      const cRect = container.getBoundingClientRect();
      const rect = card.getBoundingClientRect();
      const center = cRect.left + cRect.width / 2;
      const cardCenter = rect.left + rect.width / 2;
      const dist = (cardCenter - center) / cRect.width;
      // Map [-0.6, 0.6] -> [0, 1]; 0.5 is centered
      progress.set(Math.max(0, Math.min(1, 0.5 + dist)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [containerRef, progress]);

  // Mobile: keep it flat and crisp — no blur, no 3D rotation (both cause
  // shimmer/soft edges on phone GPUs). Desktop keeps the full 3D treatment.
  const isMobile = useIsMobile();
  const flat = reduce || isMobile;

  const rotateY = useTransform(progress, [0, 0.5, 1], flat ? [0, 0, 0] : [14, 0, -14]);
  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    reduce ? [1, 1, 1] : isMobile ? [0.94, 1, 0.94] : [0.92, 1, 0.92],
  );
  const opacity = useTransform(
    progress,
    [0, 0.5, 1],
    reduce ? [1, 1, 1] : isMobile ? [0.86, 1, 0.86] : [0.7, 1, 0.7],
  );
  const blur = useTransform(
    progress,
    [0, 0.5, 1],
    flat ? ["none", "none", "none"] : ["blur(2.5px)", "blur(0px)", "blur(2.5px)"],
  );
  const imgX = useTransform(progress, [0, 0.5, 1], flat ? ["0%", "0%", "0%"] : ["5%", "0%", "-5%"]);

  const spring = isMobile
    ? ({ stiffness: 260, damping: 34, mass: 0.35 } as const)
    : ({ stiffness: 140, damping: 26, mass: 0.5 } as const);
  const smoothRotate = useSpring(rotateY, spring);
  const smoothScale = useSpring(scale, spring);
  const smoothOpacity = useSpring(opacity, spring);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease, delay: Math.min(index * 0.05, 0.3) }}
      className="shrink-0 snap-center"
      style={{ perspective: 1400, transformStyle: "preserve-3d" }}
    >
      <motion.button
        type="button"
        onClick={onTap}
        whileHover={reduce ? undefined : { y: -6 }}
        whileTap={{ y: -2 }}
        style={{
          rotateY: smoothRotate,
          scale: smoothScale,
          opacity: smoothOpacity,
          ...(flat ? {} : { filter: blur }),
          transformStyle: "preserve-3d",
          background: isMobile
            ? "rgba(255,255,255,0.94)"
            : "linear-gradient(150deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.42) 45%, rgba(255,255,255,0.24) 100%)",
          ...(isMobile
            ? {}
            : {
                backdropFilter: "blur(18px) saturate(1.35)",
                WebkitBackdropFilter: "blur(18px) saturate(1.35)",
              }),
        }}

        className="group relative block w-[70vw] max-w-[260px] overflow-hidden rounded-[28px] border border-white/60 p-1.5 text-left shadow-[0_22px_54px_-30px_rgba(15,23,42,0.45)] transition-shadow duration-500 will-change-transform hover:shadow-[0_38px_80px_-32px_rgba(15,23,42,0.55)] md:w-[50vw] md:max-w-[380px] md:p-2 lg:w-[38vw] lg:max-w-[440px]"
      >
        {/* soft reflection sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2 rounded-t-[28px] opacity-70"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className={`${aspect} relative overflow-hidden rounded-[20px] bg-muted ring-1 ring-white/50`}
        >
          <motion.img
            src={item.img}
            srcSet={item.srcSet}
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 440px"
            alt={item.title}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            style={{ x: imgX }}
            className="h-full w-full scale-[1.04] object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.09] [image-rendering:auto] [transform:translateZ(0)]"
          />
        </div>
        <div className="relative z-10 px-1.5 pb-2 pt-3">
          <div className="text-[9px] font-bold uppercase tracking-[0.26em] text-foreground/55">
            {item.sub}
          </div>
          <h3 className="font-editorial mt-1 text-[22px] leading-[1.02] text-foreground md:text-[28px] lg:text-[32px]">
            {item.title}
          </h3>
        </div>
      </motion.button>
    </motion.div>
  );
}

function PhotoStories({ onOpen }: { onOpen: (index: number) => void }) {
  const stories = useStories();
  const railRef = useRef<HTMLDivElement>(null);
  useAutoScrollRail(railRef, 0.45);
  const items: RailItem[] = stories.map((s) => ({
    id: s.id,
    title: s.title,
    sub: s.line,
    img: s.img,
    srcSet: s.srcSet,
  }));

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,oklch(0.99_0.004_95),oklch(0.94_0.025_78))] pb-14 pt-16">
      <div className="mx-auto max-w-6xl px-5 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[oklch(0.42_0.14_258)]"
        >
          Photo Stories
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="font-editorial max-w-[12ch] text-[clamp(2.15rem,9vw,3.25rem)] leading-[0.94] text-foreground md:max-w-[16ch] md:text-[clamp(3rem,4.2vw,4.25rem)]"
        >
          Little moments, long remembered.
        </motion.h2>
        <p className="mt-3 max-w-[26ch] text-[13px] font-medium text-foreground/60">
          Swipe through — each card tilts as it takes centre stage.
        </p>
      </div>

      <div
        ref={railRef}
        className="scrollbar-hide mt-8 flex snap-x snap-proximity gap-3 overflow-x-auto overscroll-x-contain px-[max(1.25rem,12vw)] pb-6 md:gap-6 md:px-[18vw] lg:px-[clamp(5rem,17vw,17rem)] [-webkit-overflow-scrolling:touch]"
      >
        {items.map((it, i) => (
          <Rail3DCard
            key={it.id}
            item={it}
            index={i}
            containerRef={railRef}
            onTap={() => onOpen(i)}
            aspect="aspect-[4/5]"
          />
        ))}
      </div>
    </section>
  );
}

/* -------------------- Years Rail -------------------- */

/* -------------------- Browse all moments (masonry + filters) -------------------- */

function MomentCard({
  story,
  globalIndex,
  onOpen,
}: {
  story: Story;
  globalIndex: number;
  onOpen: (i: number) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.55, ease }}
      onClick={() => onOpen(globalIndex)}
      aria-label={`Open ${story.title} full screen`}
      style={{
        background:
          "linear-gradient(150deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 48%, rgba(255,255,255,0.22) 100%)",
        backdropFilter: "blur(16px) saturate(1.3)",
        WebkitBackdropFilter: "blur(16px) saturate(1.3)",
      }}
      className="focus-luxe group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[24px] border border-white/60 p-1.5 text-left shadow-[0_18px_44px_-28px_rgba(15,23,42,0.38)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.012] hover:shadow-[0_32px_70px_-30px_rgba(15,23,42,0.5)] active:scale-[0.985]"
    >
      {/* soft reflection */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 rounded-t-[24px] opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className={`relative overflow-hidden rounded-[18px] bg-muted ring-1 ring-white/50 ${
          story.size === "tall"
            ? "aspect-[3/4]"
            : story.size === "wide"
              ? "aspect-[4/3]"
              : story.size === "hero"
                ? "aspect-[4/5]"
                : "aspect-square"
        }`}
      >
        {!loaded && (
          <div
            aria-hidden
            className="absolute inset-0 animate-pulse"
            style={{
              background:
                "linear-gradient(110deg, oklch(0.95 0.01 258) 0%, oklch(0.98 0.008 78) 50%, oklch(0.95 0.01 258) 100%)",
            }}
          />
        )}
        <img
          src={story.img}
          srcSet={story.srcSet}
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 300px"
          alt={story.title}
          loading="lazy"
          decoding="async"
          ref={(el) => {
            if (el?.complete) setLoaded(true);
          }}
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-[800ms] ease-out group-hover:scale-[1.06] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Hover reveal */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-end p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{
            background: "linear-gradient(180deg, rgba(8,12,28,0) 40%, rgba(8,12,28,0.72) 100%)",
          }}
        >
          <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground">
            <Maximize2 className="h-3 w-3" strokeWidth={2.6} />
            View
          </span>
        </div>
      </div>
      <div className="relative z-10 px-1.5 pb-1.5 pt-2.5">
        <div className="text-[8px] font-bold uppercase tracking-[0.24em] text-foreground/45">
          {story.category}
        </div>
        <h3 className="font-editorial mt-0.5 text-[18px] leading-[1] text-foreground md:text-[22px]">
          {story.title}
        </h3>
      </div>
    </motion.button>
  );
}

function MomentsGrid({ onOpen }: { onOpen: (i: number) => void }) {
  const stories = useStories();
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [visible, setVisible] = useState(6);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () =>
      stories
        .map((s, i) => ({ story: s, index: i }))
        .filter(({ story }) => cat === "All" || story.category === cat),
    [cat, stories],
  );

  useEffect(() => setVisible(6), [cat]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible((v) => (v >= filtered.length ? v : v + 6));
        }
      },
      { rootMargin: "240px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,oklch(0.94_0.025_78)_0%,oklch(0.99_0.006_95)_45%,oklch(0.97_0.012_258)_100%)] px-5 pb-20 pt-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[oklch(0.46_0.16_45)]"
        >
          Browse all moments
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.08 }}
          className="font-editorial max-w-[14ch] text-[44px] leading-[0.92] text-foreground md:text-[64px] lg:text-[72px]"
        >
          Pick a corner of school life.
        </motion.h2>

        {/* Filters */}
        <div
          role="tablist"
          aria-label="Filter photos by category"
          className="scrollbar-hide -mx-5 mt-7 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0"
        >
          {categories.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => setCat(c)}
                className={`focus-luxe relative shrink-0 rounded-full px-4 py-2.5 text-[12px] font-semibold tracking-tight transition-all duration-400 ease-out ${
                  active
                    ? "text-white shadow-[0_14px_30px_-14px_rgba(34,64,180,0.55)]"
                    : "bg-white/80 text-foreground/70 ring-1 ring-black/5 hover:bg-white hover:text-foreground"
                }`}
                style={
                  active
                    ? {
                        background:
                          "linear-gradient(135deg,oklch(0.52 0.16 258),oklch(0.34 0.12 258))",
                      }
                    : undefined
                }
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Masonry */}
        <div className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.slice(0, visible).map(({ story, index }) => (
              <MomentCard key={story.id} story={story} globalIndex={index} onOpen={onOpen} />
            ))}
          </AnimatePresence>
        </div>

        <div ref={sentinelRef} className="h-6" />
        {visible < filtered.length && (
          <div className="flex justify-center py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/40">
            Loading more…
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * useAutoScrollRail — glides a horizontal rail at a slow, premium speed using a
 * sub-pixel accumulator (no jitter). unknown manual interaction (touch, drag,
 * wheel, hover, keyboard) pauses it; it resumes smoothly after a short idle
 * delay. At either end it eases into a direction reversal instead of snapping
 * back, so there are never sudden jumps.
 */
function useAutoScrollRail(ref: React.RefObject<HTMLDivElement | null>, speed = 0.35) {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let pausedUntil = 0;
    let dir = 1;
    let pos = el.scrollLeft;
    let last = performance.now();
    // ramp keeps the start/resume gentle instead of an instant snap to speed
    let ramp = 0;

    const pause = (ms = 2200) => {
      pausedUntil = performance.now() + ms;
      ramp = 0;
      // give snapping back to the user while they are in control
      el.style.scrollSnapType = "";
    };

    const tick = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      const max = el.scrollWidth - el.clientWidth;

      if (max > 4) {
        if (now >= pausedUntil) {
          ramp = Math.min(1, ramp + dt / 900);
          // re-sync if the user scrolled while paused
          if (Math.abs(pos - el.scrollLeft) > 2) pos = el.scrollLeft;

          // CSS snapping would fight the per-frame drift, so it is disabled
          // only while the rail glides on its own.
          el.style.scrollSnapType = "none";

          // ease down near the edges so the reversal feels natural
          const edge = Math.min(1, Math.min(pos, max - pos) / 140);
          const eased = 0.35 + 0.65 * edge * edge;

          pos += dir * speed * eased * ramp * (dt / 16.6667);

          if (pos >= max) {
            pos = max;
            dir = -1;
          } else if (pos <= 0) {
            pos = 0;
            dir = 1;
          }
          el.scrollLeft = pos;
        } else {
          pos = el.scrollLeft;
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onInteract = () => pause();
    const onLeave = () => pause(600);
    el.addEventListener("touchstart", onInteract, { passive: true });
    el.addEventListener("touchmove", onInteract, { passive: true });
    el.addEventListener("wheel", onInteract, { passive: true });
    el.addEventListener("pointerdown", onInteract, { passive: true });
    el.addEventListener("keydown", onInteract);
    el.addEventListener("mouseenter", onInteract);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.style.scrollSnapType = "";

      el.removeEventListener("touchstart", onInteract);
      el.removeEventListener("touchmove", onInteract);
      el.removeEventListener("wheel", onInteract);
      el.removeEventListener("pointerdown", onInteract);
      el.removeEventListener("keydown", onInteract);
      el.removeEventListener("mouseenter", onInteract);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, speed, reduce]);
}

/* -------------------- Video Rail (YouTube) -------------------- */

const EMBER = "oklch(0.58 0.16 42)";

function VideoCard({
  item,
  index,
  containerRef,
}: {
  item: VideoItem;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const progress = useMotionValue(0.5);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;
    let raf = 0;
    const update = () => {
      const cRect = container.getBoundingClientRect();
      const rect = card.getBoundingClientRect();
      const center = cRect.left + cRect.width / 2;
      const cardCenter = rect.left + rect.width / 2;
      const dist = (cardCenter - center) / cRect.width;
      progress.set(Math.max(0, Math.min(1, 0.5 + dist)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [containerRef, progress]);

  const isMobile = useIsMobile();
  const flat = reduce || isMobile;

  const rotateY = useTransform(progress, [0, 0.5, 1], flat ? [0, 0, 0] : [12, 0, -12]);
  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    reduce ? [1, 1, 1] : isMobile ? [0.94, 1, 0.94] : [0.92, 1, 0.92],
  );
  const opacity = useTransform(
    progress,
    [0, 0.5, 1],
    reduce ? [1, 1, 1] : isMobile ? [0.86, 1, 0.86] : [0.7, 1, 0.7],
  );
  const imgX = useTransform(progress, [0, 0.5, 1], flat ? ["0%", "0%", "0%"] : ["5%", "0%", "-5%"]);

  const vSpring = isMobile
    ? ({ stiffness: 260, damping: 34, mass: 0.35 } as const)
    : ({ stiffness: 140, damping: 26, mass: 0.5 } as const);
  const smoothRotate = useSpring(rotateY, vSpring);
  const smoothScale = useSpring(scale, vSpring);
  const smoothOpacity = useSpring(opacity, vSpring);

  const href = `https://www.youtube.com/watch?v=${item.id}`;
  const thumb = item.thumb || `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease, delay: Math.min(index * 0.05, 0.3) }}
      className="shrink-0 snap-center"
      style={{ perspective: 1400, transformStyle: "preserve-3d" }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${item.title} on YouTube`}
        style={{
          rotateY: smoothRotate,
          scale: smoothScale,
          opacity: smoothOpacity,
          transformStyle: "preserve-3d",
        }}
        className="group relative block w-[72vw] max-w-[280px] overflow-hidden rounded-[28px] border border-[rgba(198,93,44,0.16)] bg-[oklch(0.995_0.008_84)] p-1.5 text-left shadow-[0_20px_46px_-26px_rgba(56,38,26,0.35)] transition-[box-shadow,transform,border-color] duration-500 will-change-transform hover:scale-[1.03] hover:border-[rgba(198,93,44,0.45)] hover:shadow-[0_34px_66px_-28px_rgba(56,38,26,0.45)] active:scale-[0.99] md:w-[50vw] md:max-w-[400px] md:p-2 lg:w-[38vw] lg:max-w-[460px]"
      >
        <div className="relative aspect-video overflow-hidden rounded-[20px] bg-[oklch(0.93_0.02_78)]">
          <motion.img
            src={thumb}
            alt={item.title}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            style={{ x: imgX }}
            className="h-full w-full scale-[1.04] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.09] [transform:translateZ(0)]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(28,20,14,0) 40%, rgba(28,20,14,0.42) 100%)",
            }}
          />
          {/* Terracotta play button */}
          <div className="absolute inset-0 grid place-items-center">
            <motion.span
              animate={reduce ? {} : { scale: [1, 1.05, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="relative grid h-[60px] w-[60px] place-items-center rounded-full text-white shadow-[0_16px_34px_-10px_rgba(140,60,26,0.6)] ring-4 ring-white/70 transition-transform duration-500 group-hover:scale-110"
              style={{
                background: `linear-gradient(150deg, ${EMBER} 0%, oklch(0.48 0.15 34) 100%)`,
              }}
            >
              <Play className="relative ml-0.5 h-6 w-6 fill-current" strokeWidth={0} />
            </motion.span>
          </div>
        </div>
        <div className="px-3 pb-3 pt-3.5">
          <div
            className="text-[9px] font-bold uppercase tracking-[0.28em]"
            style={{ color: EMBER }}
          >
            {item.label}
          </div>
          <h3 className="font-editorial mt-1.5 text-[21px] leading-[1.05] text-[oklch(0.26_0.06_262)] md:text-[24px] lg:text-[27px]">
            {item.title}
          </h3>
        </div>
      </motion.a>
    </motion.div>
  );
}

function VideoStories() {
  const railRef = useRef<HTMLDivElement>(null);
  useAutoScrollRail(railRef, 0.4);

  const content = useContent<{ items?: Array<Record<string, string>> }>("gallery_videos");
  const videos: VideoItem[] = useMemo(
    () =>
      (content.items ?? [])
        .map((v) => ({
          id: youTubeId(v.url ?? ""),
          url: v.url ?? "",
          title: v.title ?? "",
          label: v.label ?? "",
          thumb: v.thumb ?? "",
        }))
        .filter((v) => v.id || v.thumb),
    [content.items],
  );

  if (videos.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden pb-16 pt-16"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.985 0.012 84) 0%, oklch(0.965 0.022 78) 55%, oklch(0.975 0.016 82) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 40% at 10% 0%, rgba(198,93,44,0.10) 0%, transparent 65%), radial-gradient(50% 42% at 92% 70%, rgba(38,63,140,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em]"
          style={{ color: EMBER }}
        >
          Video Stories
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="font-editorial max-w-[14ch] text-[clamp(2rem,8.5vw,2.9rem)] leading-[0.94] text-[oklch(0.26_0.06_262)] md:max-w-[18ch] md:text-[clamp(2.6rem,3.8vw,3.75rem)]"
        >
          Watch us in motion.
        </motion.h2>
        <p className="mt-3 max-w-[34ch] text-[13px] font-medium text-[oklch(0.44_0.03_262)] md:text-[14px]">
          Real school memories — assemblies, stage nights and celebrations. Tap unknown card to open
          the video on YouTube.
        </p>
      </div>

      <div
        ref={railRef}
        className="scrollbar-hide relative mt-8 flex snap-x snap-proximity gap-3 overflow-x-auto overscroll-x-contain px-[max(1.25rem,12vw)] pb-6 md:gap-6 md:px-[18vw] lg:px-[clamp(5rem,17vw,17rem)] [-webkit-overflow-scrolling:touch]"
      >
        {videos.map((v, i) => (
          <VideoCard key={(v.id || v.title) + i} item={v} index={i} containerRef={railRef} />
        ))}
      </div>
    </section>
  );
}

/* -------------------- Closing -------------------- */

function Closing() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-28 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className="font-editorial mx-auto max-w-md text-[48px] leading-[0.92] text-foreground"
      >
        Your child will make <span>beautiful memories</span> here.
      </motion.h2>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background active:scale-95 transition-transform"
      >
        Back to home
      </Link>
    </section>
  );
}

/* -------------------- Lightbox -------------------- */

function Lightbox({
  index,
  onClose,
  onNext,
  onPrev,
}: {
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const stories = useStories();
  const story = stories[index] ?? stories[0];

  // Motion values for pan/zoom on the image itself
  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Sheet-level swipe (for changing slides / dismissing)
  const sheetX = useMotionValue(0);
  const sheetY = useMotionValue(0);
  const sheetOpacity = useTransform(sheetY, [-300, 0, 300], [0.3, 1, 0.3]);

  const imgRef = useRef<HTMLDivElement | null>(null);
  const pinchRef = useRef<{
    active: boolean;
    startDist: number;
    startScale: number;
    startMidX: number;
    startMidY: number;
    startX: number;
    startY: number;
  }>({
    active: false,
    startDist: 0,
    startScale: 1,
    startMidX: 0,
    startMidY: 0,
    startX: 0,
    startY: 0,
  });
  const lastTapRef = useRef<number>(0);

  const springy = { type: "spring" as const, stiffness: 320, damping: 32, mass: 0.7 };

  const resetZoom = () => {
    animate(scale, 1, springy);
    animate(x, 0, springy);
    animate(y, 0, springy);
  };

  // Reset zoom whenever the slide changes
  useEffect(() => {
    scale.set(1);
    x.set(0);
    y.set(0);
    sheetX.set(0);
    sheetY.set(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const clampPan = () => {
    const el = imgRef.current;
    if (!el) return;
    const s = scale.get();
    const rect = el.getBoundingClientRect();
    // rect already reflects current scale; compute max offset so image edges stay within viewport
    const maxX = Math.max(0, (rect.width - window.innerWidth) / 2);
    const maxY = Math.max(0, (rect.height - window.innerHeight) / 2);
    const cx = Math.max(-maxX, Math.min(maxX, x.get()));
    const cy = Math.max(-maxY, Math.min(maxY, y.get()));
    if (cx !== x.get()) animate(x, cx, springy);
    if (cy !== y.get()) animate(y, cy, springy);
    if (s < 1) resetZoom();
    if (s > 4) animate(scale, 4, springy);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [t1, t2] = [e.touches[0], e.touches[1]];
      const dx = t2.clientX - t1.clientX;
      const dy = t2.clientY - t1.clientY;
      pinchRef.current = {
        active: true,
        startDist: Math.hypot(dx, dy) || 1,
        startScale: scale.get(),
        startMidX: (t1.clientX + t2.clientX) / 2,
        startMidY: (t1.clientY + t2.clientY) / 2,
        startX: x.get(),
        startY: y.get(),
      };
    } else if (e.touches.length === 1) {
      // Double-tap detection
      const now = Date.now();
      if (now - lastTapRef.current < 280) {
        const current = scale.get();
        if (current > 1.05) {
          resetZoom();
        } else {
          const rect = imgRef.current?.getBoundingClientRect();
          if (rect) {
            const tx = e.touches[0].clientX - (rect.left + rect.width / 2);
            const ty = e.touches[0].clientY - (rect.top + rect.height / 2);
            animate(scale, 2.4, springy);
            animate(x, -tx * 1.4, springy);
            animate(y, -ty * 1.4, springy);
          } else {
            animate(scale, 2.4, springy);
          }
        }
        lastTapRef.current = 0;
      } else {
        lastTapRef.current = now;
      }
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (pinchRef.current.active && e.touches.length === 2) {
      e.preventDefault();
      const [t1, t2] = [e.touches[0], e.touches[1]];
      const dx = t2.clientX - t1.clientX;
      const dy = t2.clientY - t1.clientY;
      const dist = Math.hypot(dx, dy) || 1;
      const nextScale = Math.max(
        0.6,
        Math.min(5, pinchRef.current.startScale * (dist / pinchRef.current.startDist)),
      );
      scale.set(nextScale);
      // Pan follows midpoint movement so pinch feels anchored
      const midX = (t1.clientX + t2.clientX) / 2;
      const midY = (t1.clientY + t2.clientY) / 2;
      x.set(pinchRef.current.startX + (midX - pinchRef.current.startMidX));
      y.set(pinchRef.current.startY + (midY - pinchRef.current.startMidY));
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (pinchRef.current.active && e.touches.length < 2) {
      pinchRef.current.active = false;
      clampPan();
    }
  };

  const handleImageDragEnd = (_: unknown, info: PanInfo) => {
    // Zoomed image drag → clamp pan
    clampPan();
    // A quick horizontal flick while zoomed-out advances slides
    if (scale.get() <= 1.05) {
      if (info.offset.x < -70 || info.velocity.x < -500) onNext();
      else if (info.offset.x > 70 || info.velocity.x > 500) onPrev();
      else {
        animate(x, 0, springy);
        animate(y, 0, springy);
      }
    }
  };

  const handleSheetDragEnd = (_: unknown, info: PanInfo) => {
    if (scale.get() > 1.05) {
      animate(sheetX, 0, springy);
      animate(sheetY, 0, springy);
      return;
    }
    if (Math.abs(info.offset.y) > 120 || Math.abs(info.velocity.y) > 700) {
      onClose();
      return;
    }
    if (info.offset.x < -70 || info.velocity.x < -500) {
      animate(sheetX, 0, springy);
      onNext();
    } else if (info.offset.x > 70 || info.velocity.x > 500) {
      animate(sheetX, 0, springy);
      onPrev();
    } else {
      animate(sheetX, 0, springy);
      animate(sheetY, 0, springy);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.4, ease }}
      className="fixed inset-0 z-[80] bg-black/70"
      onClick={onClose}
      style={{ WebkitBackdropFilter: "blur(24px)", touchAction: "none" }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20 active:scale-95 transition-transform"
        aria-label="Close"
      >
        <X className="h-5 w-5" strokeWidth={2.5} />
      </button>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={story.id}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.28}
          onDragEnd={handleSheetDragEnd}
          style={{ x: sheetX, y: sheetY, opacity: sheetOpacity }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.45, ease }}
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          <motion.div
            ref={imgRef}
            drag
            dragMomentum={false}
            dragElastic={0.15}
            onDragEnd={handleImageDragEnd}
            onDoubleClick={(e) => {
              e.stopPropagation();
              if (scale.get() > 1.05) resetZoom();
              else animate(scale, 2.4, springy);
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ scale, x, y, touchAction: "none" }}
            className="w-full max-w-md will-change-transform"
          >
            <img
              src={story.img}
              srcSet={story.srcSetLarge}
              sizes="(max-width: 640px) 90vw, 640px"
              alt={story.title}
              decoding="async"
              className="max-h-[72vh] w-full rounded-[24px] object-contain select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>
          <div className="mt-6 max-w-md text-center text-white">
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{story.title}</h3>
            <p className="mt-1 text-sm text-white/80">{story.line}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20 active:scale-95 transition-transform"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20 active:scale-95 transition-transform"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
      </button>
    </motion.div>
  );
}

/* -------------------- Page -------------------- */

function LifePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const lock = lightbox !== null;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const storyCount = useStories().length;
  return (
    <div className="min-h-screen bg-white text-foreground">
      <ScrollProgress />
      <SiteHeader />
      <div className="pt-[calc(110px_+_env(safe-area-inset-top))] md:pt-[calc(140px_+_env(safe-area-inset-top))]" />
      <PhotoStories onOpen={(i) => setLightbox(i)} />
      <MomentsGrid onOpen={(i) => setLightbox(i)} />
      <VideoStories />
      <Closing />
      <SiteFooter />

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            index={lightbox}
            onClose={() => setLightbox(null)}
            onNext={() => setLightbox((v) => (v === null ? 0 : (v + 1) % storyCount))}
            onPrev={() => setLightbox((v) => (v === null ? 0 : (v - 1 + storyCount) % storyCount))}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
