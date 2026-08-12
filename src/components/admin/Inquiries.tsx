import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import {
  Archive,
  Download,
  Inbox,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

import { db } from "@/lib/firebase";

const ease = [0.22, 1, 0.36, 1] as const;

type Status = "new" | "contacted" | "followup" | "closed";

const STATUSES: { id: Status; label: string; cls: string }[] = [
  { id: "new", label: "New", cls: "bg-[#dcfce7] text-[#15803d]" },
  { id: "contacted", label: "Contacted", cls: "bg-[#e0e7ff] text-[#4338ca]" },
  { id: "followup", label: "Follow-up", cls: "bg-[#fef3c7] text-[#b45309]" },
  { id: "closed", label: "Closed", cls: "bg-[#e5e7eb] text-[#374151]" },
];

type Inquiry = {
  id: string;
  studentName?: string;
  mobile?: string;
  email?: string;
  message?: string;
  classApplying?: string;
  source?: string;
  status?: string;
  read?: boolean;
  archived?: boolean;
  createdAt?: { toDate?: () => Date };
};

type Filter = "all" | Status | "archived";

const FILTERS: Filter[] = ["all", "new", "contacted", "followup", "closed", "archived"];

function label(f: Filter) {
  return f === "followup" ? "Follow-up" : f.charAt(0).toUpperCase() + f.slice(1);
}

function statusOf(r: Inquiry): Status {
  const s = String(r.status ?? "new").toLowerCase();
  return (STATUSES.find((x) => x.id === s)?.id ?? "new") as Status;
}

function fmt(ts: Inquiry["createdAt"]) {
  const d = ts?.toDate?.();
  return d ? d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "—";
}

function dateOf(r: Inquiry) {
  const d = r.createdAt?.toDate?.();
  return d ? d.toISOString().slice(0, 10) : "";
}

export function Inquiries() {
  const [rows, setRows] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [searchRaw, setSearchRaw] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [date, setDate] = useState("");
  const [pendingDelete, setPendingDelete] = useState<Inquiry | null>(null);
  const [deleting, setDeleting] = useState(false);

  // debounced search
  useEffect(() => {
    const t = window.setTimeout(() => setSearch(searchRaw), 220);
    return () => window.clearTimeout(t);
  }, [searchRaw]);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "admissions"), orderBy("createdAt", "desc")),
      (s) => {
        setRows(s.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Inquiry, "id">) })));
        setLoadError(false);
        setLoading(false);
      },
      () => {
        setLoadError(true);
        setLoading(false);
      }
    );
    return unsub;
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((r) => {
      if (filter === "archived" ? !r.archived : r.archived) return false;
      if (filter !== "all" && filter !== "archived" && statusOf(r) !== filter) return false;
      if (date && dateOf(r) !== date) return false;
      if (!q) return true;
      return [r.studentName, r.mobile, r.email, r.message, r.classApplying]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [rows, search, filter, date]);

  const counts = useMemo(() => {
    const live = rows.filter((r) => !r.archived);
    return {
      all: live.length,
      new: live.filter((r) => statusOf(r) === "new").length,
      contacted: live.filter((r) => statusOf(r) === "contacted").length,
      followup: live.filter((r) => statusOf(r) === "followup").length,
      closed: live.filter((r) => statusOf(r) === "closed").length,
      archived: rows.filter((r) => r.archived).length,
    } as Record<Filter, number>;
  }, [rows]);

  function exportCsv() {
    const head = ["Name", "Mobile", "Email", "Class", "Message", "Source", "Status", "Received"];
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const body = filtered.map((r) =>
      [r.studentName, r.mobile, r.email, r.classApplying, r.message, r.source, label(statusOf(r)), fmt(r.createdAt)]
        .map(esc)
        .join(",")
    );
    const blob = new Blob([[head.join(","), ...body].join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Exported ${filtered.length} inquiries`);
  }

  async function patch(id: string, data: Partial<Inquiry>, message?: string) {
    try {
      await updateDoc(doc(db, "admissions", id), data);
      if (message) toast.success(message);
    } catch {
      toast.error("Unable to save changes. Please try again.");
    }
  }

  async function confirmDelete() {
    if (!pendingDelete) return;
    setDeleting(true);
    try {
      await deleteDoc(doc(db, "admissions", pendingDelete.id));
      toast.success("Enquiry deleted");
      setPendingDelete(null);
    } catch {
      toast.error("Unable to delete this item.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-[22px] bg-white p-3.5 ring-1 ring-black/5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex min-w-0 flex-1 items-center rounded-xl bg-[#faf8f4] px-3.5 ring-1 ring-black/5">
            <Search className="h-4 w-4 shrink-0 text-[#1c2a4d]/40" />
            <input
              value={searchRaw}
              onChange={(e) => setSearchRaw(e.target.value)}
              placeholder="Search by name, phone, email or message"
              className="h-11 min-w-0 flex-1 bg-transparent pl-3 text-[13.5px] outline-none placeholder:text-[#1c2a4d]/35"
            />
          </div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-11 shrink-0 rounded-xl bg-[#faf8f4] px-3.5 text-[13px] outline-none ring-1 ring-black/5"
          />
          <button
            onClick={exportCsv}
            className="flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#1c2a4d] px-4 text-[12.5px] font-semibold text-white active:scale-95"
          >
            <Download className="h-3.5 w-3.5" /> Export CSV
          </button>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`shrink-0 rounded-full px-3.5 py-2 text-[12px] font-semibold transition-colors ${
                filter === f
                  ? "bg-[oklch(0.32_0.11_258)] text-white"
                  : "bg-[#1c2a4d]/[0.05] text-[#1c2a4d]/65 hover:bg-[#1c2a4d]/10"
              }`}
            >
              {label(f)} <span className="opacity-60">{counts[f]}</span>
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 rounded-[22px] bg-white p-10 text-[13px] text-[#1c2a4d]/55 ring-1 ring-black/5">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading inquiries…
        </div>
      ) : loadError ? (
        <div className="rounded-[22px] bg-white p-10 text-center ring-1 ring-black/5">
          <div className="text-[14.5px] font-semibold">Unable to load content. Please try again.</div>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-full bg-[#1c2a4d] px-5 py-2.5 text-[12.5px] font-semibold text-white active:scale-95"
          >
            Retry
          </button>
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-[22px] bg-white p-12 text-center ring-1 ring-black/5">
          <Inbox className="mx-auto h-8 w-8 text-[#1c2a4d]/30" />
          <div className="mt-3 text-[14.5px] font-semibold">No inquiries here</div>
          <p className="mt-1 text-[12.5px] text-[#1c2a4d]/50">
            Every enquiry submitted on the website appears in this inbox instantly.
          </p>
        </div>
      ) : (
        <div className="grid gap-3">
          {filtered.map((r, i) => {
            const tel = String(r.mobile ?? "").replace(/[^\d+]/g, "");
            const wa = String(r.mobile ?? "").replace(/\D/g, "");
            const st = statusOf(r);
            const meta = STATUSES.find((s) => s.id === st)!;
            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease, delay: Math.min(i * 0.03, 0.3) }}
                className={`rounded-[22px] bg-white p-4 ring-1 shadow-[0_16px_38px_-32px_rgba(15,23,42,0.5)] md:p-5 ${
                  st === "new" ? "ring-[oklch(0.32_0.11_258)]/25" : "ring-black/5"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[oklch(0.32_0.11_258)]/10 text-[12px] font-bold text-[oklch(0.32_0.11_258)]">
                      {String(r.studentName ?? "?").slice(0, 1).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-[15px] font-semibold">{r.studentName || "Unnamed"}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${meta.cls}`}>
                          {meta.label}
                        </span>
                      </div>
                      <div className="mt-0.5 truncate text-[12px] text-[#1c2a4d]/55">
                        {r.mobile || "—"} · {fmt(r.createdAt)}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {tel && (
                      <a href={`tel:${tel}`} aria-label="Call" className="grid h-9 w-9 place-items-center rounded-full bg-[#eef2ff] text-[#4338ca] active:scale-90">
                        <Phone className="h-4 w-4" />
                      </a>
                    )}
                    {wa && (
                      <a
                        href={`https://wa.me/${wa.length === 10 ? `91${wa}` : wa}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                        className="grid h-9 w-9 place-items-center rounded-full bg-[#dcfce7] text-[#15803d] active:scale-90"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    )}
                    {r.email && (
                      <a href={`mailto:${r.email}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full bg-[#fff7ed] text-[#c2410c] active:scale-90">
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                    <select
                      value={st}
                      onChange={(e) => patch(r.id, { status: e.target.value, read: true }, "Status updated")}
                      aria-label="Change status"
                      className="h-9 rounded-full bg-[#1c2a4d]/[0.05] px-3 text-[11.5px] font-semibold text-[#1c2a4d]/75 outline-none"
                    >
                      {STATUSES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => patch(r.id, { archived: !r.archived }, r.archived ? "Restored" : "Archived")}
                      aria-label="Archive"
                      className="grid h-9 w-9 place-items-center rounded-full bg-[#1c2a4d]/[0.05] text-[#1c2a4d]/60 active:scale-90"
                    >
                      <Archive className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setPendingDelete(r)}
                      aria-label="Delete"
                      className="grid h-9 w-9 place-items-center rounded-full bg-red-50 text-red-500 active:scale-90"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid gap-1.5 border-t border-black/5 pt-3 text-[12.5px] text-[#1c2a4d]/65 sm:grid-cols-2">
                  <div>Email: {r.email || "—"}</div>
                  {r.classApplying && <div>Class: {r.classApplying}</div>}
                  <div>Source: {r.source || "website"}</div>
                  {r.message && <div className="sm:col-span-2">Message: {r.message}</div>}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {pendingDelete && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/45 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => !deleting && setPendingDelete(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-[22px] bg-white p-6 shadow-2xl"
          >
            <div className="text-[16px] font-semibold">Delete this enquiry?</div>
            <p className="mt-2 text-[13px] text-[#1c2a4d]/60">
              {pendingDelete.studentName || "This enquiry"} will be permanently removed. This cannot be undone.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setPendingDelete(null)}
                disabled={deleting}
                className="h-11 rounded-full bg-[#1c2a4d]/[0.06] px-5 text-[13px] font-semibold text-[#1c2a4d]/75"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-5 text-[13px] font-semibold text-white active:scale-95 disabled:opacity-60"
              >
                {deleting && <Loader2 className="h-3.5 w-3.5 animate-spin" />} Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
