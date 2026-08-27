import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useContent } from "@/lib/use-content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "School Gallery | Chaitanya EM School Chekkapalli" },
      {
        name: "description",
        content:
          "Explore school events, student activities, sports, celebrations, campus moments and learning experiences at Chaitanya EM School, Chekkapalli.",
      },
      { property: "og:title", content: "School Gallery | Chaitanya EM School Chekkapalli" },
      {
        property: "og:description",
        content:
          "Explore school events, student activities, sports, celebrations, campus moments and learning experiences at Chaitanya EM School, Chekkapalli.",
      },
      { property: "og:url", content: "https://www.chaitanyaemschool.com/gallery" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaitanyaemschool.com/gallery" }
    ]
  }),
  component: GalleryPage,
});

/* -------------------- Data Fetching (Single Source of Truth) -------------------- */

type Story = {
  id: string;
  img: string;
  title: string;
  line: string;
  category: string;
};

function useStories(): Story[] {
  const cms = useContent<{ photos?: Array<Record<string, string>> }>("gallery_photos");
  const photos = cms.photos ?? [];
  return photos
    .filter((p) => p && p.image) // Only valid images
    .map((p, i) => ({
      id: `photo-${i}`,
      img: p.image || "",
      title: p.title || "Gallery Image",
      line: p.line || "",
      category: p.category || "Uncategorized",
    }));
}

type VideoItem = { id: string; url: string; title: string; label: string; thumb: string };

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

function useVideos(): VideoItem[] {
  const content = useContent<{ items?: Array<Record<string, string>> }>("gallery_videos");
  return (content.items ?? [])
    .map((v) => {
      const id = youTubeId(v.url ?? "");
      return {
        id,
        url: v.url ?? "",
        title: v.title ?? "",
        label: v.label ?? "",
        thumb: v.thumb || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : ""),
      };
    })
    .filter((v) => v.id || v.thumb);
}

/* -------------------- Lightbox -------------------- */

function Lightbox({
  index,
  stories,
  onClose,
  onNext,
  onPrev,
}: {
  index: number;
  stories: Story[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const story = stories[index];
  if (!story) return null;

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl touch-none"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="flex flex-1 items-center justify-center p-4 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center w-full max-w-5xl"
          >
            <img
              src={story.img}
              alt={story.title}
              className="max-h-[75vh] w-auto max-w-full rounded-[16px] object-contain shadow-2xl"
              draggable={false}
            />
            <div className="mt-6 text-center text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{story.category}</span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{story.title}</h3>
              {story.line && <p className="mt-2 text-sm text-white/70">{story.line}</p>}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-y-0 left-0 w-1/4 flex items-center justify-start px-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end px-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </motion.div>
  );
}

/* -------------------- Image Card -------------------- */

function ImageCard({ story, index, onOpen }: { story: Story; index: number; onOpen: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // If the image fails to load (e.g. broken cached local URL), remove the card entirely
  if (error) return null;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.05, 0.4) }}
      onClick={onOpen}
      className="group relative mb-6 block w-full overflow-hidden rounded-[20px] bg-muted text-left outline-none ring-1 ring-border/50 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative w-full overflow-hidden bg-slate-100 aspect-[4/3]">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-slate-200" />
        )}
        <img
          src={story.img}
          alt={story.title || "Gallery image"}
          loading={index < 4 ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="absolute bottom-0 left-0 p-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {story.category}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-white leading-tight">
            {story.title}
          </h3>
        </div>
        
        <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-foreground opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </div>
      </div>
    </motion.button>
  );
}

/* -------------------- Video Card -------------------- */

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  return (
    <motion.a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative block overflow-hidden rounded-[20px] bg-white ring-1 ring-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={video.thumb}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-primary shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
          {video.label}
        </div>
        <h3 className="mt-1.5 text-lg font-semibold leading-tight text-foreground">
          {video.title}
        </h3>
      </div>
    </motion.a>
  );
}

/* -------------------- Page -------------------- */

function GalleryPage() {
  const stories = useStories();
  const videos = useVideos();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const categories = useMemo(() => {
    const cats = new Set(stories.map((s) => s.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [stories]);

  const filteredStories = useMemo(() => {
    if (activeCategory === "All") return stories;
    return stories.filter((s) => s.category === activeCategory);
  }, [activeCategory, stories]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="pt-[calc(110px_+_env(safe-area-inset-top))] pb-12 md:pt-[calc(140px_+_env(safe-area-inset-top))] px-6 md:px-10 lg:px-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            Our Gallery
          </div>
          <h1 className="font-editorial mt-4 max-w-[16ch] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight">
            Moments That Inspire. <br /> Memories That Last.
          </h1>
          <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]">
            Explore moments from learning, activities, celebrations, sports and everyday life at Chaitanya EM School.
          </p>
        </motion.div>
      </section>

      {/* Photo Gallery Section */}
      <section className="px-6 md:px-10 lg:px-16 mx-auto max-w-7xl pb-24">
        {stories.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center rounded-[24px] border border-dashed bg-muted/30">
            <div className="text-center">
              <h3 className="text-xl font-semibold">No gallery images available yet.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Admin: Please upload photos from the CMS.</p>
            </div>
          </div>
        ) : (
          <>
            {/* Filter */}
            {categories.length > 2 && (
              <div className="mb-10 flex flex-wrap gap-2">
                {categories.map((c) => {
                  const isActive = activeCategory === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c)}
                      className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all ${
                        isActive
                          ? "bg-foreground text-background shadow-md"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Masonry Grid */}
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
              <AnimatePresence mode="popLayout">
                {filteredStories.map((story, i) => {
                  // Find the original index for the lightbox
                  const originalIndex = stories.findIndex((s) => s.id === story.id);
                  return (
                    <ImageCard
                      key={story.id}
                      story={story}
                      index={i}
                      onOpen={() => setLightbox(originalIndex)}
                    />
                  );
                })}
              </AnimatePresence>
            </div>
          </>
        )}
      </section>

      {/* Video Gallery Section */}
      {videos.length > 0 && (
        <section className="bg-muted/30 px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
                Video Stories
              </div>
              <h2 className="font-editorial mt-3 text-[32px] leading-tight md:text-[42px]">
                Watch us in motion.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v, i) => (
                <VideoCard key={v.id} video={v} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            index={lightbox}
            stories={stories}
            onClose={() => setLightbox(null)}
            onNext={() => setLightbox((v) => (v === null ? 0 : (v + 1) % stories.length))}
            onPrev={() => setLightbox((v) => (v === null ? 0 : (v - 1 + stories.length) % stories.length))}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
