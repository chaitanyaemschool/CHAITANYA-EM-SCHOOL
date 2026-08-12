import { useEffect, useMemo, useRef, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { motion, AnimatePresence } from "motion/react";
import { Check, Loader2, Upload, X, Plus, GripVertical, Image as ImageIcon, ChevronDown } from "lucide-react";
import { db } from "@/lib/firebase";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { saveSection } from "@/lib/content-write";
import { mergeSection } from "@/lib/content-merge";
import { CONTENT_SECTIONS, CONTENT_DEFAULTS, type SectionDef, type FieldDef } from "@/lib/content-schema";
import { toast } from "sonner";
import { SectionPreview } from "@/components/admin/SectionPreview";

const ease = [0.22, 1, 0.36, 1] as const;

type SaveState = "idle" | "saving" | "saved" | "error";

/** Professional confirmation dialog used for every destructive action. */
function Confirm({
  open,
  title,
  body,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  onCancel,
  onConfirm,
}: {
  open: boolean;
  title: string;
  body?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[90] grid place-items-center bg-black/45 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onCancel}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm rounded-[22px] bg-white p-6 shadow-2xl">
        <div className="text-[16px] font-semibold">{title}</div>
        {body && <p className="mt-2 text-[13px] text-muted-foreground">{body}</p>}
        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onCancel} className="h-11 rounded-full bg-secondary px-5 text-[13px] font-semibold">
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="h-11 rounded-full bg-red-600 px-5 text-[13px] font-semibold text-white active:scale-95"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}


export function ContentEditor({ page }: { page?: string } = {}) {
  const pages = useMemo(() => {
    const map = new Map<string, SectionDef[]>();
    for (const s of CONTENT_SECTIONS) {
      if (!map.has(s.page)) map.set(s.page, []);
      map.get(s.page)!.push(s);
    }
    return Array.from(map.entries());
  }, []);

  const [activePage, setActivePage] = useState(page ?? pages[0][0]);
  useEffect(() => {
    if (page) setActivePage(page);
  }, [page]);
  const activeSections = pages.find(([p]) => p === activePage)?.[1] ?? [];
  const [focusKey, setFocusKey] = useState<string | null>(null);
  const [live, setLive] = useState<Record<string, Record<string, unknown>>>({});

  const previewKey = focusKey && activeSections.some((s) => s.key === focusKey)
    ? focusKey
    : (activeSections[0]?.key ?? null);
  const previewSection = activeSections.find((s) => s.key === previewKey) ?? null;


  return (
    <div className={`grid gap-4 ${page ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]" : "lg:grid-cols-[200px_minmax(0,1fr)_minmax(0,1.05fr)]"}`}>
      {/* Page rail */}
      {!page && (
      <aside className="lg:sticky lg:top-32 lg:self-start">
        <div className="rounded-[22px] bg-white p-2 ring-1 ring-black/5 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.15)]">
          <div className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Pages</div>
          <div className="flex gap-1 overflow-x-auto lg:flex-col [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {pages.map(([p]) => {
              const active = p === activePage;
              return (
                <button
                  key={p}
                  onClick={() => {
                    setActivePage(p);
                    setFocusKey(null);
                  }}
                  className={`flex-shrink-0 lg:w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${
                    active
                      ? "bg-foreground text-background"
                      : "text-foreground/70 hover:bg-secondary/60"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
      )}


      <div className="flex min-w-0 flex-col gap-4">
        {activeSections.map((s) => (
          <SectionCard
            key={s.key}
            section={s}
            onFocus={() => setFocusKey(s.key)}
            onData={(d) => setLive((prev) => ({ ...prev, [s.key]: d }))}
          />
        ))}
        {activeSections.length === 0 && (
          <div className="rounded-[24px] border border-dashed border-black/10 bg-white/60 p-10 text-center">
            <div className="text-[15px] font-semibold">No editable sections on this page yet</div>
            <p className="mx-auto mt-2 max-w-[42ch] text-[12.5px] text-muted-foreground">
              This page is still using fixed content. Ask for it to be connected and every heading, paragraph and image here becomes editable.
            </p>
          </div>
        )}
      </div>


      <div className="min-w-0 lg:sticky lg:top-32 lg:self-start">
        <SectionPreview
          section={previewSection}
          data={(previewKey ? live[previewKey] : undefined) ?? {}}
        />
      </div>
    </div>
  );
}

/* ------------------------------ Section ------------------------------ */
function SectionCard({
  section,
  onFocus,
  onData,
}: {
  section: SectionDef;
  onFocus?: () => void;
  onData?: (d: Record<string, unknown>) => void;
}) {
  const [data, setData] = useState<Record<string, unknown>>(() => CONTENT_DEFAULTS[section.key] ?? {});
  const [open, setOpen] = useState(true);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [dirty, setDirty] = useState(false);
  const [askDiscard, setAskDiscard] = useState(false);
  const dirtyRef = useRef(false);
  dirtyRef.current = dirty;
  const skipNextRemote = useRef(false);
  /** Last known persisted version, used to restore on "Discard changes". */
  const savedRef = useRef<Record<string, unknown>>({});

  // Subscribe once
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "content", section.key), (snap) => {
      const remote = (snap.data() ?? {}) as Record<string, unknown>;
      savedRef.current = remote;
      if (skipNextRemote.current) {
        skipNextRemote.current = false;
        return;
      }
      if (dirtyRef.current) return; // never overwrite unsaved edits
      setData(mergeSection(section.key, remote));
    });
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section.key]);

  const update = (patch: Record<string, unknown>) => {
    setData((d) => ({ ...d, ...patch }));
    setDirty(true);
    setSaveState("idle");
  };

  const save = async () => {
    setSaveState("saving");
    try {
      skipNextRemote.current = true;
      await saveSection(section.key, data);
      savedRef.current = data;
      setDirty(false);
      setSaveState("saved");
      toast.success("Changes saved successfully.");
      window.setTimeout(() => setSaveState("idle"), 1600);
    } catch {
      setSaveState("error");
      toast.error("Unable to save changes. Please try again.");
    }
  };


  // Warn before leaving with unsaved edits
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  /* Push local state to the live preview on every change. */
  const onDataRef = useRef(onData);
  onDataRef.current = onData;
  useEffect(() => {
    onDataRef.current?.(data);
  }, [data]);

  return (
    <motion.section
      layout
      onFocusCapture={onFocus}
      onPointerDownCapture={onFocus}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
      className="overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.15)]"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {section.page}
          </div>
          <div className="mt-1 text-[17px] font-semibold tracking-[-0.02em] truncate">{section.title}</div>
          {section.description && (
            <div className="mt-0.5 text-[12px] text-muted-foreground truncate">{section.description}</div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <SaveBadge state={saveState} dirty={dirty} />
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="grid h-8 w-8 place-items-center rounded-full bg-secondary/60">
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="border-t border-black/5 p-5 flex flex-col gap-5">
              {section.fields?.map((f) => (
                <FieldRow
                  key={f.key}
                  field={f}
                  value={data[f.key]}
                  onChange={(v) => update({ [f.key]: v })}
                />
              ))}
              {section.lists?.map((list) => (
                <ListEditor
                  key={list.key}
                  list={list}
                  value={(data[list.key] as Record<string, unknown>[]) ?? []}
                  onChange={(v) => update({ [list.key]: v })}
                />
              ))}

              <div className="sticky bottom-0 -mx-5 -mb-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 bg-white/90 px-5 py-3.5 backdrop-blur">
                <span className="text-[12px] font-medium text-muted-foreground">
                  {dirty ? "You have unsaved changes." : saveState === "saved" ? "All changes saved" : "Up to date"}
                </span>
                <div className="flex items-center gap-2">
                  {dirty && (
                    <button
                      type="button"
                      onClick={() => setAskDiscard(true)}
                      className="h-11 rounded-full bg-secondary px-4 text-[12.5px] font-semibold text-foreground/70"
                    >
                      Discard changes
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={save}
                    disabled={!dirty || saveState === "saving"}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-[13px] font-semibold text-background transition-transform active:scale-95 disabled:opacity-40"
                  >
                    {saveState === "saving" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />}
                    Save changes
                  </button>
                </div>
              </div>

              <Confirm
                open={askDiscard}
                title="You have unsaved changes."
                body="Discarding will restore the last saved version of this section."
                confirmLabel="Discard changes"
        cancelLabel="Continue editing"
                onCancel={() => setAskDiscard(false)}
                onConfirm={() => {
                  setAskDiscard(false);
                  setDirty(false);
                  setData(mergeSection(section.key, savedRef.current));
                  toast.success("Changes discarded");
                }}
              />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function SaveBadge({ state, dirty }: { state: SaveState; dirty?: boolean }) {
  if (dirty && state !== "saving")
    return (
      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
        Unsaved
      </span>
    );
  if (state === "saving")
    return (
      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
        <Loader2 className="h-3.5 w-3.5 animate-spin" /> Saving
      </span>
    );
  if (state === "saved")
    return (
      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
        <Check className="h-3.5 w-3.5" /> Saved
      </span>
    );
  if (state === "error")
    return <span className="text-[11px] font-semibold text-red-600">Error</span>;
  return null;
}

/* ------------------------------ Field ------------------------------ */
function FieldRow({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  return (
    <div>
      <label className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {field.label}
      </label>
      <div className="mt-2">
        <FieldControl field={field} value={value} onChange={onChange} />
      </div>
      {field.help && <div className="mt-1.5 text-[11px] text-muted-foreground">{field.help}</div>}
    </div>
  );
}

function FieldControl({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  const v = typeof value === "string" ? value : "";
  if (field.type === "image") return <ImageField value={v} onChange={onChange} />;
  if (field.type === "textarea")
    return (
      <textarea
        value={v}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        rows={4}
        className="w-full resize-y rounded-xl border border-black/10 bg-secondary/30 px-3.5 py-2.5 text-[14px] leading-relaxed outline-none focus:border-foreground/40 focus:bg-white transition-colors"
      />
    );
  const inputType =
    field.type === "email" ? "email" : field.type === "tel" ? "tel" : field.type === "url" ? "url" : "text";
  return (
    <input
      type={inputType}
      value={v}
      onChange={(e) => onChange(e.target.value)}
      placeholder={field.placeholder}
      className="w-full rounded-xl border border-black/10 bg-secondary/30 px-3.5 py-2.5 text-[14px] outline-none focus:border-foreground/40 focus:bg-white transition-colors"
    />
  );
}

function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleFile = async (file?: File) => {
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadToCloudinary(file);
      onChange(res.secure_url);
      toast.success("Image uploaded");
    } catch (e) {
      toast.error((e as Error).message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-20 w-28 shrink-0 place-items-center overflow-hidden rounded-xl bg-secondary/50 ring-1 ring-black/5">
        {value ? (
          <img src={value} alt="" className="h-full w-full object-cover" />
        ) : (
          <ImageIcon className="h-5 w-5 text-muted-foreground/60" />
        )}
        {uploading && (
          <div className="absolute inset-0 grid place-items-center bg-black/40 text-white">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <button
          type="button"
          onClick={() => ref.current?.click()}
          className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-full bg-foreground px-4 text-[12px] font-semibold text-background active:scale-95 transition-transform"
        >
          <Upload className="h-3.5 w-3.5" /> {value ? "Replace" : "Upload"}
        </button>
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="inline-flex h-8 items-center gap-1.5 self-start rounded-full px-3 text-[11px] font-semibold text-muted-foreground hover:text-red-600"
          >
            <X className="h-3 w-3" /> Remove
          </button>
        )}
      </div>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}

/* ------------------------------ List ------------------------------ */
function ListEditor({
  list,
  value,
  onChange,
}: {
  list: { key: string; label: string; itemLabel: string; fields: FieldDef[] };
  value: Record<string, unknown>[];
  onChange: (v: Record<string, unknown>[]) => void;
}) {
  const items = Array.isArray(value) ? value : [];
  const [pending, setPending] = useState<number | null>(null);


  const updateItem = (i: number, patch: Record<string, unknown>) => {
    const next = items.map((it, idx) => (idx === i ? { ...it, ...patch } : it));
    onChange(next);
  };
  const removeItem = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const addItem = () => onChange([...items, {}]);
  const duplicateItem = (i: number) =>
    onChange([...items.slice(0, i + 1), { ...items[i] }, ...items.slice(i + 1)]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {list.label}
        </label>
        <button
          type="button"
          onClick={addItem}
          className="inline-flex h-8 items-center gap-1.5 rounded-full bg-foreground px-3 text-[11px] font-semibold text-background active:scale-95"
        >
          <Plus className="h-3 w-3" /> Add {list.itemLabel}
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        <AnimatePresence initial={false}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
              className="rounded-2xl border border-black/5 bg-secondary/30 p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                  <GripVertical className="h-3.5 w-3.5" /> {list.itemLabel} {i + 1}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => move(i, -1)}
                    disabled={i === 0}
                    className="h-7 w-7 rounded-full text-[11px] hover:bg-white disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => move(i, 1)}
                    disabled={i === items.length - 1}
                    className="h-7 w-7 rounded-full text-[11px] hover:bg-white disabled:opacity-30"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => duplicateItem(i)}
                    className="h-7 rounded-full px-2 text-[11px] font-semibold text-muted-foreground hover:bg-white"
                  >
                    Duplicate
                  </button>
                  <button
                    type="button"
                    onClick={() => setPending(i)}

                    className="ml-1 h-7 w-7 rounded-full text-muted-foreground hover:bg-red-50 hover:text-red-600"
                    aria-label="Remove"
                  >
                    <X className="mx-auto h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {list.fields.map((f) => (
                  <FieldRow
                    key={f.key}
                    field={f}
                    value={(item as Record<string, unknown>)[f.key]}
                    onChange={(v) => updateItem(i, { [f.key]: v })}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {items.length === 0 && (
          <div className="rounded-2xl border border-dashed border-black/10 bg-secondary/20 p-6 text-center text-[12px] text-muted-foreground">
            No {list.label.toLowerCase()} yet. Click "Add {list.itemLabel}" to create the first one.
          </div>
        )}
      </div>

      <Confirm
        open={pending !== null}
        title={`Delete this ${list.itemLabel.toLowerCase()}?`}
        body="It is currently used on the website and will be removed once you save this section."
        onCancel={() => setPending(null)}
        onConfirm={() => {
          if (pending !== null) removeItem(pending);
          setPending(null);
        }}
      />
    </div>

  );
}