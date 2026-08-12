import { useEffect, useMemo, useRef, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Image as ImageIcon,
  Loader2,
  Pencil,
  RefreshCw,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import { toast } from "sonner";

import { db } from "@/lib/firebase";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { saveSection } from "@/lib/content-write";
import { mergeSection } from "@/lib/content-merge";

type Photo = { image?: string; title?: string; line?: string; category?: string };

const SECTION = "gallery_photos";

/**
 * Photo gallery manager — reads and writes the SAME data the public gallery
 * page renders (`content/gallery_photos.photos`), so every existing photo on
 * the website appears here and can be replaced, edited, reordered or deleted.
 */
export function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<{ done: number; total: number } | null>(null);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
  const [replaceUrl, setReplaceUrl] = useState<string | null>(null);
  const [replaceBusy, setReplaceBusy] = useState(false);
  const dirtyRef = useRef(false);
  dirtyRef.current = dirty;
  const skipRemote = useRef(false);
  const uploadRef = useRef<HTMLInputElement>(null);
  const replaceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "content", SECTION),
      (snap) => {
        const merged = mergeSection<{ photos?: Photo[] }>(SECTION, snap.data() as Record<string, unknown>);
        if (skipRemote.current) {
          skipRemote.current = false;
        } else if (!dirtyRef.current) {
          setPhotos(Array.isArray(merged.photos) ? merged.photos : []);
        }
        setLoading(false);
      },
      () => {
        setPhotos((mergeSection<{ photos?: Photo[] }>(SECTION, {}).photos ?? []) as Photo[]);
        setLoading(false);
        toast.error("Couldn't reach the database — showing the current website photos.");
      },
    );
    return unsub;
  }, []);

  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  const apply = (next: Photo[]) => {
    setPhotos(next);
    setDirty(true);
  };

  async function save(next?: Photo[]) {
    const payload = next ?? photos;
    setSaving(true);
    try {
      skipRemote.current = true;
      await saveSection(SECTION, { photos: payload });
      setDirty(false);
      toast.success("Gallery saved. The website is updated.");
    } catch {
      toast.error("Unable to save the gallery. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    const list = Array.from(files);
    setUploading({ done: 0, total: list.length });
    const added: Photo[] = [];
    try {
      for (const file of list) {
        const res = await uploadToCloudinary(file);
        added.push({ image: res.secure_url, title: file.name.replace(/\.[^.]+$/, ""), line: "", category: "Campus" });
        setUploading((p) => (p ? { ...p, done: p.done + 1 } : p));
      }
      apply([...photos, ...added]);
      toast.success(`${added.length} photo${added.length > 1 ? "s" : ""} added. Remember to save.`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(null);
      if (uploadRef.current) uploadRef.current.value = "";
    }
  }

  async function handleReplaceFile(file?: File) {
    if (!file) return;
    setReplaceBusy(true);
    try {
      const res = await uploadToCloudinary(file);
      setReplaceUrl(res.secure_url);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setReplaceBusy(false);
      if (replaceRef.current) replaceRef.current.value = "";
    }
  }

  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= photos.length) return;
    const next = [...photos];
    [next[i], next[j]] = [next[j], next[i]];
    apply(next);
  };

  const q = search.trim().toLowerCase();
  const visible = useMemo(
    () =>
      photos
        .map((p, i) => ({ p, i }))
        .filter(({ p }) =>
          q
            ? [p.title, p.line, p.category].filter(Boolean).some((v) => String(v).toLowerCase().includes(q))
            : true,
        ),
    [photos, q],
  );

  return (
    <div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:flex-wrap sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">Media</div>
          <h1 className="mt-2 text-[26px] font-semibold tracking-[-0.03em] sm:text-[28px]">Photo gallery</h1>
          <p className="mt-2 max-w-[52ch] text-[13px] text-muted-foreground">
            These are the exact photos shown on the public gallery page. Replace, edit, reorder, delete or add new ones.
          </p>
        </div>
        <button
          onClick={() => uploadRef.current?.click()}
          disabled={!!uploading}
          className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-foreground px-4 text-[12.5px] font-semibold text-background transition-transform active:scale-95 disabled:opacity-60"
        >
          {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Upload className="h-3.5 w-3.5" />}
          {uploading ? `Uploading ${uploading.done}/${uploading.total}` : "Upload images"}
        </button>
        <input ref={uploadRef} type="file" accept="image/*" multiple hidden onChange={(e) => handleUpload(e.target.files)} />
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-center rounded-2xl bg-white px-4 ring-1 ring-black/5">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search photos by title, caption or category"
            className="h-12 min-w-0 flex-1 bg-transparent pl-3 text-[14px] outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-medium text-muted-foreground">
            {dirty ? "Unsaved changes" : `${photos.length} photos`}
          </span>
          <button
            onClick={() => save()}
            disabled={!dirty || saving}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-[13px] font-semibold text-background transition-transform active:scale-95 disabled:opacity-40"
          >
            {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />}
            Save changes
          </button>
        </div>
      </div>

      {loading ? (
        <div className="mt-6 flex items-center gap-2 rounded-[22px] bg-white p-8 text-[13px] text-muted-foreground ring-1 ring-black/5">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading gallery…
        </div>
      ) : visible.length === 0 ? (
        <div className="mt-6 rounded-[22px] bg-white p-10 text-center ring-1 ring-black/5">
          <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground" />
          <div className="mt-3 text-[14px] font-semibold">
            {q ? "No photos match your search" : "No photos yet"}
          </div>
          <p className="mt-1 text-[12px] text-muted-foreground">
            {q ? "Try a different word." : "Tap Upload images to add the first photos."}
          </p>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map(({ p, i }) => (
            <div key={`${p.image}-${i}`} className="overflow-hidden rounded-[20px] bg-white ring-1 ring-black/5">
              <div className="relative aspect-[4/3] bg-secondary/50">
                {p.image ? (
                  <img src={p.image} alt={p.title ?? "Gallery photo"} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                ) : (
                  <div className="grid h-full place-items-center"><ImageIcon className="h-6 w-6 text-muted-foreground" /></div>
                )}
                <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
                  #{i + 1}
                </span>
              </div>
              <div className="p-3">
                <div className="truncate text-[13.5px] font-semibold">{p.title || "Untitled"}</div>
                <div className="mt-0.5 truncate text-[11.5px] text-muted-foreground">
                  {p.category || "Uncategorised"}
                  {p.line ? ` · ${p.line}` : ""}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => move(i, -1)}
                    disabled={i === 0 || !!q}
                    aria-label="Move earlier"
                    className="grid h-9 w-9 place-items-center rounded-full bg-secondary/70 disabled:opacity-30"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => move(i, 1)}
                    disabled={i === photos.length - 1 || !!q}
                    aria-label="Move later"
                    className="grid h-9 w-9 place-items-center rounded-full bg-secondary/70 disabled:opacity-30"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setReplaceIndex(i);
                      setReplaceUrl(null);
                    }}
                    className="inline-flex h-9 items-center gap-1.5 rounded-full bg-secondary/70 px-3 text-[11.5px] font-semibold"
                  >
                    <RefreshCw className="h-3.5 w-3.5" /> Replace
                  </button>
                  <button
                    onClick={() => setEditIndex(i)}
                    className="inline-flex h-9 items-center gap-1.5 rounded-full bg-secondary/70 px-3 text-[11.5px] font-semibold"
                  >
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => setDeleteIndex(i)}
                    aria-label="Delete photo"
                    className="ml-auto grid h-9 w-9 place-items-center rounded-full bg-red-50 text-red-500"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {q && photos.length > 0 && (
        <p className="mt-3 text-[11.5px] text-muted-foreground">Clear the search to reorder photos.</p>
      )}

      {/* Edit metadata */}
      {editIndex !== null && photos[editIndex] && (
        <Modal onClose={() => setEditIndex(null)} title="Edit photo details">
          {(["title", "line", "category"] as const).map((k) => (
            <label key={k} className="mt-3 block">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {k === "line" ? "Caption" : k}
              </span>
              <input
                value={photos[editIndex]![k] ?? ""}
                onChange={(e) =>
                  apply(photos.map((p, idx) => (idx === editIndex ? { ...p, [k]: e.target.value } : p)))
                }
                className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-secondary/30 px-3.5 text-[14px] outline-none focus:bg-white"
              />
            </label>
          ))}
          <div className="mt-5 flex justify-end">
            <button
              onClick={() => setEditIndex(null)}
              className="h-11 rounded-full bg-foreground px-5 text-[13px] font-semibold text-background"
            >
              Done
            </button>
          </div>
        </Modal>
      )}

      {/* Replace with before/after compare */}
      {replaceIndex !== null && photos[replaceIndex] && (
        <Modal onClose={() => setReplaceIndex(null)} title="Replace this photo">
          <div className="mt-4 grid grid-cols-2 gap-3">
            <figure>
              <figcaption className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Current image
              </figcaption>
              <img src={photos[replaceIndex]!.image} alt="" className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-black/5" />
            </figure>
            <figure>
              <figcaption className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                New image
              </figcaption>
              {replaceUrl ? (
                <img src={replaceUrl} alt="" className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-black/5" />
              ) : (
                <button
                  onClick={() => replaceRef.current?.click()}
                  className="grid aspect-[4/3] w-full place-items-center rounded-xl border border-dashed border-black/15 text-[12px] font-semibold text-muted-foreground"
                >
                  {replaceBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Choose image"}
                </button>
              )}
            </figure>
          </div>
          <input ref={replaceRef} type="file" accept="image/*" hidden onChange={(e) => handleReplaceFile(e.target.files?.[0])} />
          <div className="mt-5 flex justify-end gap-2">
            <button onClick={() => setReplaceIndex(null)} className="h-11 rounded-full bg-secondary px-5 text-[13px] font-semibold">
              Cancel
            </button>
            <button
              disabled={!replaceUrl}
              onClick={() => {
                apply(photos.map((p, idx) => (idx === replaceIndex ? { ...p, image: replaceUrl! } : p)));
                setReplaceIndex(null);
                setReplaceUrl(null);
                toast.success("Image replaced. Remember to save.");
              }}
              className="h-11 rounded-full bg-foreground px-5 text-[13px] font-semibold text-background disabled:opacity-40"
            >
              Use new image
            </button>
          </div>
        </Modal>
      )}

      {/* Delete confirmation */}
      {deleteIndex !== null && (
        <Modal onClose={() => setDeleteIndex(null)} title="Delete this image?">
          <p className="mt-2 text-[13px] text-muted-foreground">
            This image will be removed from the gallery on the website.
          </p>
          <div className="mt-5 flex justify-end gap-2">
            <button onClick={() => setDeleteIndex(null)} className="h-11 rounded-full bg-secondary px-5 text-[13px] font-semibold">
              Cancel
            </button>
            <button
              onClick={() => {
                const next = photos.filter((_, idx) => idx !== deleteIndex);
                setPhotos(next);
                setDeleteIndex(null);
                void save(next);
              }}
              className="h-11 rounded-full bg-red-600 px-5 text-[13px] font-semibold text-white"
            >
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-black/45 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-[22px] bg-white p-5 shadow-2xl sm:p-6">
        <div className="text-[16px] font-semibold">{title}</div>
        {children}
      </div>
    </div>
  );
}
