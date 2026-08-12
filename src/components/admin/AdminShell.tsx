import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import {
  ChevronLeft,
  ExternalLink,
  LayoutDashboard,
  LogOut,
  Menu,
  ShieldCheck,
  X,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export type NavItem = { id: string; label: string; icon: LucideIcon; badge?: number };
export type NavGroup = { label?: string; items: NavItem[] };

export function AdminShell({
  groups,
  active,
  onSelect,
  email,
  onSignOut,
  signingOut,
  title,
  subtitle,
  actions,
  children,
}: {
  groups: NavGroup[];
  active: string;
  onSelect: (id: string) => void;
  email: string;
  onSignOut: () => void;
  signingOut?: boolean;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const Rail = ({ mini }: { mini: boolean }) => (
    <div className="flex h-full flex-col">
      <div className={`flex items-center gap-3 px-3 py-5 ${mini ? "justify-center" : ""}`}>
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[oklch(0.32_0.11_258)] text-white shadow-[0_12px_26px_-16px_rgba(28,42,77,0.9)]">
          <ShieldCheck className="h-[18px] w-[18px]" />
        </div>
        {!mini && (
          <div className="min-w-0 leading-none">
            <div className="truncate text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1c2a4d]/45">
              Chaitanya
            </div>
            <div className="mt-1.5 truncate text-[15px] font-semibold tracking-[-0.02em] text-[#1c2a4d]">
              Admin Studio
            </div>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-4 [scrollbar-width:thin]">
        {groups.map((g, gi) => (
          <div key={g.label ?? gi} className="mb-4">
            {g.label && !mini && (
              <div className="px-3 pb-1.5 pt-1 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#1c2a4d]/35">
                {g.label}
              </div>
            )}
            {g.label && mini && <div className="mx-3 my-2 h-px bg-[#1c2a4d]/10" />}
            <div className="flex flex-col gap-0.5">
              {g.items.map(({ id, label, icon: Icon, badge }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      onSelect(id);
                      setDrawer(false);
                    }}
                    title={mini ? label : undefined}
                    className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold transition-colors ${
                      mini ? "justify-center" : ""
                    } ${
                      isActive
                        ? "bg-[oklch(0.32_0.11_258)] text-white shadow-[0_14px_28px_-20px_rgba(28,42,77,0.95)]"
                        : "text-[#1c2a4d]/70 hover:bg-[#1c2a4d]/[0.05] hover:text-[#1c2a4d]"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-[#c65d2c]"}`}
                      strokeWidth={2.2}
                    />
                    {!mini && <span className="min-w-0 flex-1 truncate">{label}</span>}
                    {!mini && badge ? (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          isActive ? "bg-white/20 text-white" : "bg-[#c65d2c] text-white"
                        }`}
                      >
                        {badge}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-[#1c2a4d]/10 p-2">
        <Link
          to="/"
          className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-[12.5px] font-semibold text-[#1c2a4d]/65 transition-colors hover:bg-[#1c2a4d]/[0.05] hover:text-[#1c2a4d] ${
            mini ? "justify-center" : ""
          }`}
          title="View website"
        >
          <ExternalLink className="h-4 w-4 shrink-0" />
          {!mini && "View website"}
        </Link>
        {!mini && (
          <div className="truncate rounded-xl bg-[#1c2a4d]/[0.04] px-3 py-2 text-[11px] text-[#1c2a4d]/55">
            {email}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1c2a4d]">
      {/* Desktop sidebar */}
      <aside
        className="fixed inset-y-0 left-0 z-40 hidden border-r border-[#1c2a4d]/10 bg-white/80 backdrop-blur-xl transition-[width] duration-300 lg:block"
        style={{ width: collapsed ? "76px" : "262px" }}
      >
        <Rail mini={collapsed} />
        <button
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-20 grid h-6 w-6 place-items-center rounded-full bg-white text-[#1c2a4d]/60 ring-1 ring-[#1c2a4d]/10 transition-transform hover:text-[#1c2a4d] active:scale-90"
        >
          <ChevronLeft
            className={`h-3.5 w-3.5 transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(false)}
              className="fixed inset-0 z-50 bg-[#1c2a4d]/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease }}
              className="fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[300px] bg-white shadow-2xl lg:hidden"
            >
              <button
                onClick={() => setDrawer(false)}
                aria-label="Close menu"
                className="absolute right-3 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#1c2a4d]/[0.06] active:scale-90"
              >
                <X className="h-4 w-4" />
              </button>
              <Rail mini={false} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="transition-[padding] duration-300" style={{ paddingLeft: undefined }}>
        <div
          className="lg:pl-[var(--admin-rail)]"
          style={{ ["--admin-rail" as string]: collapsed ? "76px" : "262px" }}
        >
          {/* Top bar */}
          <header className="sticky top-0 z-30 border-b border-[#1c2a4d]/10 bg-[#f7f4ee]/85 backdrop-blur-xl">
            <div className="flex items-center gap-3 px-4 py-3 md:px-6">
              <button
                onClick={() => setDrawer(true)}
                aria-label="Open menu"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white ring-1 ring-[#1c2a4d]/10 active:scale-90 lg:hidden"
              >
                <Menu className="h-4.5 w-4.5" />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="truncate text-[17px] font-semibold tracking-[-0.02em] md:text-[20px]">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-0.5 hidden truncate text-[12px] text-[#1c2a4d]/55 sm:block">
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {actions}
                <Link
                  to="/"
                  className="hidden h-10 items-center gap-2 rounded-full bg-white px-4 text-[12px] font-semibold ring-1 ring-[#1c2a4d]/10 transition-transform active:scale-95 sm:flex"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-[#c65d2c]" /> View site
                </Link>
                <button
                  onClick={onSignOut}
                  disabled={signingOut}
                  aria-label="Sign out"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-[#1c2a4d]/10 transition-transform active:scale-90 disabled:opacity-60"
                >
                  <LogOut className="h-4 w-4 text-[#c65d2c]" />
                </button>
              </div>
            </div>
          </header>

          <main className="mx-auto w-full max-w-[1400px] px-4 py-6 md:px-6 md:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export const DashboardIcon = LayoutDashboard;
