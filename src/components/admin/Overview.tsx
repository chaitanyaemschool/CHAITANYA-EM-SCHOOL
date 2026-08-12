import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { motion } from "motion/react";
import { ExternalLink, Image as ImageIcon, Images, Pencil, Sparkles, Upload, Users } from "lucide-react";
import { db } from "@/lib/firebase";

const ease = [0.22, 1, 0.36, 1] as const;

type Row = { id: string; studentName?: string; mobile?: string; read?: boolean; createdAt?: { seconds: number } };

const PREVIEW_SECTIONS = [
  { label: "Hero", page: "Home" },
  { label: "About", page: "Home" },
  { label: "Facilities", page: "Facilities" },
  { label: "Gallery", page: "Gallery" },
  { label: "Contact", page: "Contact" },
];

export function Overview({ onNavigate }: { onNavigate: (tab: "content" | "gallery" | "media" | "admissions") => void }) {
  const [enquiries, setEnquiries] = useState<Row[]>([]);
  const [galleryCount, setGalleryCount] = useState<number | null>(null);
  const [mediaCount, setMediaCount] = useState<number | null>(null);

  useEffect(() => {
    const unsubs = [
      onSnapshot(query(collection(db, "admissions"), orderBy("createdAt", "desc")), (s) =>
        setEnquiries(s.docs.map((d) => ({ id: d.id, ...(d.data() as Record<string, unknown>) })) as Row[])
      ),
      onSnapshot(collection(db, "gallery"), (s) => setGalleryCount(s.size)),
      onSnapshot(collection(db, "media"), (s) => setMediaCount(s.size)),
    ];
    return () => unsubs.forEach((u) => u());
  }, []);

  const unread = enquiries.filter((e) => e.read !== true).length;

  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">Welcome back</div>
      <h1 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.035em]">Dashboard</h1>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <KPI label="Total admissions" value={enquiries.length} hint="Enquiry forms" />
        <KPI label="Unread messages" value={unread} hint="Needs a reply" accent />
        <KPI label="Gallery images" value={galleryCount} hint="Published photos" />
        <KPI label="Media assets" value={mediaCount} hint="Library uploads" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        {/* Live preview */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5"
        >
          <div className="flex items-center justify-between gap-3 border-b border-black/5 px-5 py-4">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">Live website</div>
              <div className="mt-1 text-[15px] font-semibold">Homepage preview</div>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-secondary/70 px-3 py-1.5 text-[11px] font-semibold ring-1 ring-black/5 transition-transform active:scale-95"
            >
              <ExternalLink className="h-3 w-3" /> Open
            </a>
          </div>
          <div className="relative h-[280px] overflow-auto bg-secondary/40 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none">
            <div className="w-[400%] origin-top-left" style={{ transform: "scale(0.25)" }}>
              <iframe
                src="/"
                title="Homepage live preview"
                loading="lazy"
                className="h-[1120px] w-full border-0 pointer-events-none"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 px-5 py-4">
            {PREVIEW_SECTIONS.map((s) => (
              <button
                key={s.label}
                onClick={() => onNavigate("content")}
                className="flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1.5 text-[11px] font-semibold ring-1 ring-black/5 transition-transform active:scale-95"
              >
                <Pencil className="h-3 w-3" /> {s.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <div className="rounded-[24px] bg-white p-5 ring-1 ring-black/5">
            <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Quick actions
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <ActionTile icon={Upload} label="Upload media" onClick={() => onNavigate("media")} />
              <ActionTile icon={Images} label="Manage gallery" onClick={() => onNavigate("gallery")} />
              <ActionTile icon={Pencil} label="Edit content" onClick={() => onNavigate("content")} />
              <ActionTile icon={Users} label="View enquiries" onClick={() => onNavigate("admissions")} />
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-5 ring-1 ring-black/5">
            <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">Recent enquiries</div>
            {enquiries.length === 0 ? (
              <div className="mt-4 flex items-center gap-2 text-[12.5px] text-muted-foreground">
                <ImageIcon className="h-4 w-4" /> Nothing yet — new enquiries appear here.
              </div>
            ) : (
              <div className="mt-3 flex flex-col divide-y divide-black/5">
                {enquiries.slice(0, 5).map((r) => (
                  <button
                    key={r.id}
                    onClick={() => onNavigate("admissions")}
                    className="flex items-center justify-between gap-3 py-2.5 text-left"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-[13.5px] font-semibold">{r.studentName || "—"}</div>
                      <div className="text-[11.5px] text-muted-foreground">{r.mobile || "—"}</div>
                    </div>
                    {r.read !== true && (
                      <span className="shrink-0 rounded-full bg-[#c65d2c]/12 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c65d2c]">
                        New
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function KPI({ label, value, hint, accent }: { label: string; value: number | null; hint: string; accent?: boolean }) {
  return (
    <div className={`rounded-[22px] p-5 ring-1 ring-black/5 ${accent ? "bg-[oklch(0.32_0.11_258)] text-white" : "bg-white"}`}>
      <div className={`text-[10px] font-medium uppercase tracking-[0.24em] ${accent ? "text-white/60" : "text-muted-foreground"}`}>{label}</div>
      <div className="mt-2 text-[30px] font-semibold leading-none tracking-[-0.03em]">{value ?? "—"}</div>
      <div className={`mt-2 text-[11.5px] ${accent ? "text-white/65" : "text-muted-foreground"}`}>{hint}</div>
    </div>
  );
}

function ActionTile({ icon: Icon, label, onClick }: { icon: typeof Users; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded-2xl bg-secondary/50 px-4 py-3.5 text-left text-[12.5px] font-semibold ring-1 ring-black/5 transition-transform active:scale-[0.98]"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground text-background">
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </span>
      {label}
    </button>
  );
}
