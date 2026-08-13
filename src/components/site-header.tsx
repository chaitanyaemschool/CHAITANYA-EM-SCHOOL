import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

import { navItems } from "@/components/site-footer";
import { AdmissionDialog } from "@/components/admission-form";

const ease = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [enroll, setEnroll] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isInner = pathname !== "/" && pathname !== "/admin";
  // Always permanent/sticky navigation per user requirement - no back arrow button needed.

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0, height: 72 }}
        animate={{ y: 0, opacity: 1, height: scrolled ? 62 : 72 }}
        transition={{ duration: 0.5, ease }}
        style={{
          backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "blur(14px) saturate(1.2)",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "blur(14px) saturate(1.2)",
          boxShadow: scrolled
            ? "0 18px 50px -18px rgba(15,23,42,0.28)"
            : "0 8px 30px -12px rgba(15,23,42,0.12)",
          backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.78)",
          transition:
            "background-color 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 500ms cubic-bezier(0.22,1,0.36,1)",
        }}
        className="fixed inset-x-3 top-3 z-50 mx-auto max-w-6xl rounded-[28px] ring-1 ring-black/5 md:inset-x-6 md:top-4 lg:inset-x-8"
      >
        <div className="relative flex h-full items-center justify-between gap-2 px-3 md:gap-3 md:px-6">
          {isInner && (
            <button
              onClick={() => router.history.back()}
              aria-label="Go back"
              className={`focus-luxe grid shrink-0 place-items-center rounded-full bg-white text-foreground ring-1 ring-black/5 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out hover:scale-105 active:scale-95 md:hidden ${
                scrolled ? "h-10 w-10" : "h-11 w-11"
              }`}
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            </button>
          )}
          <Link
            to="/"
            className={`flex min-w-0 items-center gap-2.5 md:gap-3 ${
              isInner ? "absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" : ""
            }`}
            aria-label="Chaitanya EM School — Home"
          >
            <img
              src="/logo-crest.jpeg"
              alt=""
              className={`shrink-0 rounded-full object-cover ring-1 ring-black/5 transition-all duration-500 ease-out ${
                scrolled ? "h-10 w-10 md:h-12 md:w-12" : "h-12 w-12 md:h-14 md:w-14"
              }`}
            />
            <img
              src="/logo-wordmark.png"
              alt="Chaitanya (E.M.) High School"
              className={`object-contain object-left transition-all duration-500 ease-out ${
                scrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              }`}
            />
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeProps={{ className: "bg-black/5 text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 font-nav text-[14px] font-semibold tracking-tight text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setEnroll(true)}
              className="ml-2 focus-luxe rounded-full bg-primary px-5 py-2.5 font-nav text-[14px] font-bold text-white shadow-[0_10px_28px_-10px_rgba(34,64,180,0.55)] transition-all hover:scale-[1.03] active:scale-95"
            >
              Enroll
            </button>
          </nav>
          <button
            onClick={() => setMenu(true)}
            aria-label="Open menu"
            aria-expanded={menu}
            className={`focus-luxe grid shrink-0 place-items-center rounded-full text-white shadow-[0_10px_28px_-10px_rgba(34,64,180,0.55)] transition-all duration-500 ease-out hover:scale-105 active:scale-95 md:hidden ${
              scrolled ? "h-10 w-10" : "h-11 w-11"
            }`}
            style={{
              background: "linear-gradient(135deg,oklch(0.52 0.16 258),oklch(0.36 0.13 258))",
            }}
          >
            <Menu className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </motion.header>
      <MenuOverlay open={menu} onClose={() => setMenu(false)} onEnroll={() => setEnroll(true)} />
      <AdmissionDialog open={enroll} onClose={() => setEnroll(false)} />
    </>
  );
}

function MenuOverlay({
  open,
  onClose,
  onEnroll,
}: {
  open: boolean;
  onClose: () => void;
  onEnroll: () => void;
}) {
  const lenis = useLenis();
  
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.14, ease }}
          className="fixed inset-0 z-[60] px-3 pt-4 backdrop-blur-md"
          style={{ background: "rgba(23, 26, 62, 0.42)" }}
          onClick={onClose}
        >
          <motion.aside
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto max-w-md overflow-hidden rounded-[30px] text-foreground shadow-[0_32px_90px_-28px_rgba(20,30,90,0.55)]"
            style={{
              background:
                "radial-gradient(120% 90% at 0% 0%, oklch(0.98 0.02 78) 0%, transparent 55%), radial-gradient(120% 90% at 100% 100%, oklch(0.94 0.06 258) 0%, transparent 55%), linear-gradient(180deg,#ffffff 0%,oklch(0.97 0.02 148) 100%)",
            }}
          >
            <div
              className="relative flex items-center justify-between rounded-full px-3 py-3 ring-1 ring-black/5"
              style={{
                background:
                  "linear-gradient(135deg,oklch(0.96 0.02 78) 0%,oklch(0.93 0.05 258) 100%)",
              }}
            >
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src="/logo-crest.jpeg"
                  alt=""
                  className="h-12 w-12 shrink-0 rounded-full bg-white p-1 ring-1 ring-black/5"
                />
                <img
                  src="/logo-wordmark.png"
                  alt="Chaitanya (E.M.) High School"
                  className="h-12 object-contain object-left"
                />
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white shadow-[0_8px_20px_-8px_rgba(200,70,70,0.55)] active:scale-95 transition-transform"
                style={{
                  background: "linear-gradient(135deg,oklch(0.72 0.17 28),oklch(0.56 0.19 28))",
                }}
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>

            <nav className="relative px-6 pb-2 pt-5">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.01, duration: 0.14, ease }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => {
                        onClose();
                        window.setTimeout(() => {
                          if (lenis) {
                            lenis.scrollTo(0);
                          } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }, 120);
                      }}
                      activeProps={{ className: "is-active text-[oklch(0.22_0.14_258)]" }}
                      activeOptions={{ exact: item.to === "/" }}
                      className="font-nav group flex min-h-12 items-center gap-3 rounded-2xl px-2 py-1.5 text-[21px] leading-[1.25] text-[oklch(0.2_0.035_258)] transition-all duration-200 md:text-[22px]"
                    >
                      <span className="relative">
                        {/* Soft outer halo — fades in on active */}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute -inset-1.5 rounded-full opacity-0 blur-[10px] transition-opacity duration-300 group-[.is-active]:opacity-70"
                          style={{ background: item.gradient }}
                        />
                        <span
                          className="peer relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-white shadow-[0_8px_18px_-8px_rgba(20,30,90,0.45)] ring-1 ring-white/70 transition-all duration-300 ease-out group-hover:scale-105 group-[.is-active]:scale-100 group-[.is-active]:ring-2 group-[.is-active]:ring-offset-2 group-[.is-active]:ring-offset-white group-[.is-active]:shadow-[0_14px_30px_-8px_rgba(20,30,90,0.55)] group-active:scale-95 motion-safe:group-[.is-active]:animate-[scale-in_.22s_ease-out]"
                          style={{ background: item.gradient }}
                          aria-describedby={`nav-tip-${i}`}
                        >
                          <Icon className="h-[18px] w-[18px]" strokeWidth={2.4} />
                        </span>
                        <span
                          id={`nav-tip-${i}`}
                          role="tooltip"
                          className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-[oklch(0.2_0.04_258)] px-2.5 py-1 text-[11px] font-medium leading-tight text-white opacity-0 shadow-lg ring-1 ring-black/10 transition-all duration-200 ease-out peer-hover:translate-y-0 peer-hover:opacity-100 peer-focus-visible:translate-y-0 peer-focus-visible:opacity-100"
                        >
                          {item.tooltip}
                          <span
                            aria-hidden
                            className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[oklch(0.2_0.04_258)]"
                          />
                        </span>
                      </span>
                      <span className="transition-all duration-200 group-[.is-active]:font-bold group-[.is-active]:tracking-[-0.02em]">
                        {item.label}
                      </span>
                      <span
                        aria-hidden
                        className="ml-auto h-2 w-2 shrink-0 scale-0 rounded-full opacity-0 shadow-[0_0_0_3px_rgba(255,255,255,0.9)] transition-all duration-300 ease-out group-[.is-active]:scale-100 group-[.is-active]:opacity-100"
                        style={{ background: item.gradient }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="relative px-5 pb-5 pt-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEnroll();
                }}
                className="font-nav flex h-14 w-full items-center justify-center gap-2 rounded-full text-[15px] font-bold text-white shadow-[0_16px_40px_-14px_rgba(34,64,180,0.55)] active:scale-[0.98] transition-transform"
                style={{
                  background:
                    "linear-gradient(135deg,oklch(0.55 0.16 258) 0%,oklch(0.35 0.13 258) 100%)",
                }}
              >
                Enroll now
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
