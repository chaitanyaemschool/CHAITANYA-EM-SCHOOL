import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Total on-screen time of the reveal (ms). */
const DURATION = 3600;

/**
 * Premium full-screen opening reveal.
 *
 * Sequence (~3.6s):
 *  0.0s  crest fades up from a soft blur
 *  0.4s  crest gently zooms in
 *  1.3s  crest eases back out and settles — held clearly on screen throughout
 *  1.5s  school name rises into place
 *  2.0s  tagline fades in beneath it
 *  0.6s+ hairline progress line fills left-to-right
 *  3.6s  the whole plate lifts and dissolves into the homepage hero
 */
export function LogoLoader() {
  const reduce = useReducedMotion();
  // Rendered from the very first paint (SSR included) so the reveal is the
  // first thing on screen, then dismissed on a timer after hydration.
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const startedAt = useRef(0);

  useEffect(() => {
    const total = reduce ? 1200 : DURATION;
    document.body.style.overflow = "hidden";
    startedAt.current = performance.now();

    let raf = 0;
    const tick = () => {
      const p = Math.min(1, (performance.now() - startedAt.current) / total);
      // ease-out so the line decelerates into completion rather than snapping
      setProgress(1 - Math.pow(1 - p, 2));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVisible(false);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  const d = DURATION / 1000;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,oklch(0.99_0.01_78)_0%,oklch(0.965_0.025_78)_60%,oklch(0.94_0.03_78)_100%)]"
          initial={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04, filter: "blur(6px)" }}
          transition={{ duration: reduce ? 0.3 : 0.7, ease }}
          aria-label="Loading Chaitanya English Medium School"
          role="status"
        >
          {/* very soft ambient light behind the crest */}
          {!reduce && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0.7] }}
              transition={{ duration: d, times: [0, 0.35, 1], ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(38% 30% at 50% 34%, rgba(198,93,44,0.10) 0%, transparent 70%), radial-gradient(52% 42% at 50% 60%, rgba(38,63,140,0.08) 0%, transparent 75%)",
              }}
            />
          )}

          <div className="relative flex w-full max-w-[min(90vw,460px)] flex-col items-center px-6 text-center">
            {/* Crest — zoom in, ease back out, then hold */}
            <motion.div
              className="relative"
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.84, filter: "blur(8px)" }}
              animate={
                reduce
                  ? { opacity: 1, scale: 1 }
                  : {
                      opacity: [0, 1, 1, 1, 1],
                      scale: [0.84, 1.08, 1.0, 1.02, 1],
                      filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"],
                    }
              }
              transition={
                reduce
                  ? { duration: 0.3, ease }
                  : { duration: d, times: [0, 0.28, 0.5, 0.72, 1], ease: "easeInOut" }
              }
              style={{ willChange: "transform, opacity" }}
            >
              {/* halo ring that expands once, subtly */}
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 block h-[6.75rem] w-[6.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-[rgba(198,93,44,0.35)] sm:h-[8.25rem] sm:w-[8.25rem]"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: [0, 0.55, 0], scale: [1, 1.45, 1.7] }}
                  transition={{ duration: 2.2, delay: 0.35, ease: "easeOut" }}
                />
              )}
              <img
                src="/logo-crest.jpeg"
                alt="Chaitanya English Medium School crest"
                className="relative h-[6.75rem] w-[6.75rem] rounded-full bg-white object-contain p-2 shadow-[0_28px_70px_-34px_rgba(15,23,42,0.55)] ring-1 ring-black/5 sm:h-[8.25rem] sm:w-[8.25rem] md:h-[9.25rem] md:w-[9.25rem]"
              />
            </motion.div>

            <motion.h1
              className="font-editorial mt-7 text-[clamp(1.35rem,5.4vw,2.1rem)] leading-tight tracking-tight text-foreground"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.3 : 0.9, delay: reduce ? 0 : 1.5, ease }}
            >
              Chaitanya English Medium School
            </motion.h1>

            <motion.p
              className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.3em] text-foreground/45 sm:text-[10px]"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.3 : 0.8, delay: reduce ? 0 : 2.0, ease }}
            >
              A school for complete knowledge
            </motion.p>

            {/* Refined progress line */}
            <motion.div
              className="relative mt-8 h-[2px] w-[min(60vw,240px)] overflow-hidden rounded-full bg-foreground/10"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: reduce ? 0 : 0.6, ease }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${progress * 100}%`,
                  background:
                    "linear-gradient(90deg, oklch(0.36 0.13 258) 0%, oklch(0.62 0.18 45) 100%)",
                  transition: "width 120ms linear",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
