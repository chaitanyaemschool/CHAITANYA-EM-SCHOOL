import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import {
  Activity,
  FileText,
  Image as ImageIcon,
  Images,
  Inbox,
  Megaphone,
  Plus,
  Sparkles,
  Upload,
  Users,
} from "lucide-react";

import { db } from "@/lib/firebase";
import { CONTENT_SECTIONS } from "@/lib/content-schema";

const ease = [0.22, 1, 0.36, 1] as const;

type Row = Record<string, unknown> & { id: string };

function useCollection(name: string, take = 8) {
  const [rows, setRows] = useState<Row[]>([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const unsubAll = onSnapshot(
      collection(db, name),
      (s) => setCount(s.size),
      () => setCount(0),
    );
    const unsubRecent = onSnapshot(
      query(collection(db, name), orderBy("createdAt", "desc"), limit(take)),
      (s) => setRows(s.docs.map((d) => ({ id: d.id, ...d.data() }) as Row)),
      () => setRows([]),
    );
    return () => {
      unsubAll();
      unsubRecent();
    };
  }, [name, take]);
  return { rows, count };
}

function timeAgo(ts: unknown) {
  const d = (ts as { toDate?: () => Date })?.toDate?.();
  if (!d) return "—";
  const s = Math.floor((Date.now() - d.getTime()) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} hr ago`;
  return d.toLocaleDateString();
}

export function Dashboard({ onNavigate }: { onNavigate: (id: string) => void }) {
  const inquiries = useCollection("admissions");
  const gallery = useCollection("gallery", 6);
  const media = useCollection("media", 6);

  const unread = useMemo(
    () => inquiries.rows.filter((r) => r["read"] !== true).length,
    [inquiries.rows],
  );
  const pagesCount = useMemo(() => new Set(CONTENT_SECTIONS.map((s) => s.page)).size, []);
  const lastUpdated = inquiries.rows[0] ? timeAgo(inquiries.rows[0]["createdAt"]) : "—";

  const stats = [
    {
      label: "Total inquiries",
      value: inquiries.count,
      hint: `${unread} unread`,
      icon: Users,
      tone: "bg-[#eef2ff] text-[#4338ca]",
    },
    {
      label: "Gallery images",
      value: gallery.count,
      hint: "Published photos",
      icon: Images,
      tone: "bg-[#ecfdf5] text-[#047857]",
    },
    {
      label: "Media files",
      value: media.count,
      hint: "In media library",
      icon: ImageIcon,
      tone: "bg-[#fff7ed] text-[#c2410c]",
    },
    {
      label: "Website pages",
      value: pagesCount,
      hint: "Editable pages",
      icon: FileText,
      tone: "bg-[#fdf2f8] text-[#be185d]",
    },
  ];

  const quick = [
    { label: "Edit home page", icon: Sparkles, id: "page:Home" },
    { label: "Upload images", icon: Upload, id: "media" },
    { label: "Manage gallery", icon: Images, id: "gallery" },
    { label: "View inquiries", icon: Inbox, id: "inquiries" },
    { label: "Contact details", icon: Megaphone, id: "page:Contact & Global" },
    { label: "Add gallery video", icon: Plus, id: "page:Life / Gallery" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease, delay: i * 0.05 }}
            className="rounded-[22px] bg-white p-5 ring-1 ring-black/5 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.5)]"
          >
            <div className="flex items-start justify-between">
              <div className={`grid h-11 w-11 place-items-center rounded-2xl ${s.tone}`}>
                <s.icon className="h-5 w-5" strokeWidth={2.1} />
              </div>
            </div>
            <div className="mt-4 text-[30px] font-black leading-none tracking-[-0.03em]">
              {s.value}
            </div>
            <div className="mt-1.5 text-[12.5px] font-semibold text-[#1c2a4d]/70">{s.label}</div>
            <div className="mt-0.5 text-[11.5px] text-[#1c2a4d]/45">{s.hint}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        {/* Recent inquiries */}
        <div className="rounded-[24px] bg-white p-5 ring-1 ring-black/5 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.5)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[15px] font-semibold tracking-[-0.02em]">Recent inquiries</div>
              <div className="mt-0.5 text-[12px] text-[#1c2a4d]/50">Last updated {lastUpdated}</div>
            </div>
            <button
              onClick={() => onNavigate("inquiries")}
              className="rounded-full bg-[#1c2a4d]/[0.05] px-3.5 py-2 text-[11.5px] font-semibold transition-colors hover:bg-[#1c2a4d]/10"
            >
              View all
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {inquiries.rows.length === 0 && (
              <div className="rounded-2xl border border-dashed border-black/10 p-8 text-center text-[12.5px] text-[#1c2a4d]/50">
                No inquiries yet. Website enquiry forms land here automatically.
              </div>
            )}
            {inquiries.rows.slice(0, 5).map((r) => (
              <div
                key={r.id}
                className="flex items-center gap-3 rounded-2xl bg-[#faf8f4] px-3.5 py-3 ring-1 ring-black/[0.04]"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[oklch(0.32_0.11_258)]/10 text-[11px] font-bold text-[oklch(0.32_0.11_258)]">
                  {String(r["studentName"] ?? "?")
                    .slice(0, 1)
                    .toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[13.5px] font-semibold">
                    {String(r["studentName"] ?? "Unnamed")}
                  </div>
                  <div className="truncate text-[11.5px] text-[#1c2a4d]/50">
                    {String(r["mobile"] ?? r["email"] ?? "—")}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[11px] text-[#1c2a4d]/45">{timeAgo(r["createdAt"])}</div>
                  <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${
                      r["read"] === true
                        ? "bg-[#1c2a4d]/[0.06] text-[#1c2a4d]/50"
                        : "bg-[#dcfce7] text-[#15803d]"
                    }`}
                  >
                    {r["read"] === true ? "Read" : "New"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Quick actions */}
          <div className="rounded-[24px] bg-white p-5 ring-1 ring-black/5 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.5)]">
            <div className="text-[15px] font-semibold tracking-[-0.02em]">Quick actions</div>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {quick.map((q) => (
                <button
                  key={q.label}
                  onClick={() => onNavigate(q.id)}
                  className="flex flex-col items-start gap-2.5 rounded-2xl bg-[#faf8f4] p-3.5 text-left ring-1 ring-black/[0.04] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_26px_-20px_rgba(15,23,42,0.6)] active:scale-[0.98]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#c65d2c] ring-1 ring-black/5">
                    <q.icon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <span className="text-[12px] font-semibold leading-tight">{q.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent uploads */}
          <div className="rounded-[24px] bg-white p-5 ring-1 ring-black/5 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.5)]">
            <div className="flex items-center justify-between">
              <div className="text-[15px] font-semibold tracking-[-0.02em]">Recent uploads</div>
              <Activity className="h-4 w-4 text-[#1c2a4d]/35" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[...media.rows, ...gallery.rows].slice(0, 6).map((m) => (
                <div
                  key={m.id}
                  className="aspect-square overflow-hidden rounded-xl bg-[#faf8f4] ring-1 ring-black/5"
                >
                  <img
                    src={String(m["url"] ?? "")}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
              {media.rows.length + gallery.rows.length === 0 && (
                <div className="col-span-3 rounded-2xl border border-dashed border-black/10 p-6 text-center text-[12px] text-[#1c2a4d]/50">
                  Nothing uploaded yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
