import { useEffect, useMemo, useRef, useState } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { Check, Copy, Loader2, Search, Trash2, Upload, Image as ImageIcon } from "lucide-react";
import { CONTENT_SECTIONS } from "@/lib/content-schema";
import { mergeSection } from "@/lib/content-merge";
import { db } from "@/lib/firebase";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { toast } from "sonner";

type MediaItem = {
  id: string;
  url: string;
  publicId: string;
  name?: string;
  width?: number;
  height?: number;
};

export function MediaLibrary() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [pendingDelete, setPendingDelete] = useState<MediaItem | null>(null);
  /** Every image URL currently referenced by the live website content. */
  const [inUse, setInUse] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsubs = CONTENT_SECTIONS.map((section) =>
      onSnapshot(doc(db, "content", section.key), (snap) => {
        const data = mergeSection<Record<string, unknown>>(section.key, snap.data() as Record<string, unknown>);
        const urls: string[] = [];
        const walk = (v: unknown) => {
          if (typeof v === "string" && /^https?:\/\/|^\//.test(v) && /(cloudinary|\.(jpe?g|png|webp|avif))/i.test(v)) urls.push(v);
          else if (Array.isArray(v)) v.forEach(walk);
          else if (v && typeof v === "object") Object.values(v).forEach(walk);
        };
        walk(data);
        setInUse((prev) => {
          const next = { ...prev };
          for (const [url, where] of Object.entries(next)) if (where === section.title) delete next[url];
          for (const u of urls) next[u] = section.title;
          return next;
        });
      }),
    );
    return () => unsubs.forEach((u) => u());
  }, []);

  useEffect(() => {
    const q = query(collection(db, "media"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setItems(
          snap.docs.map((d) => {
            const data = d.data() as Record<string, unknown>;
            return {
              id: d.id,
              url: String(data.url ?? ""),
              publicId: String(data.publicId ?? ""),
              name: typeof data.name === "string" ? data.name : undefined,
              width: typeof data.width === "number" ? data.width : undefined,
              height: typeof data.height === "number" ? data.height : undefined,
            };
          })
        );
        setLoading(false);
      },
      () => setLoading(false)
    );
    return unsub;
  }, []);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const res = await uploadToCloudinary(file);
        await addDoc(collection(db, "media"), {
          url: res.secure_url,
          publicId: res.public_id,
          name: file.name,
          width: res.width ?? null,
          height: res.height ?? null,
          createdAt: serverTimestamp(),
        });
      }
      toast.success("Uploaded to media library");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  const q = search.trim().toLowerCase();
  const filtered = useMemo(
    () => (q ? items.filter((m) => (m.name ?? m.publicId).toLowerCase().includes(q)) : items),
    [items, q],
  );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">Assets</div>
          <h1 className="mt-2 text-[28px] font-semibold tracking-[-0.03em]">Media library</h1>
          <p className="mt-2 max-w-[52ch] text-[13px] text-muted-foreground">
            Upload images once, then paste the link into any section of the website.
          </p>
        </div>
        <button
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[12px] font-semibold text-background transition-transform active:scale-95 disabled:opacity-60"
        >
          {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Upload className="h-3.5 w-3.5" />}
          {uploading ? "Uploading…" : "Upload"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      <div className="mt-5 flex items-center rounded-2xl bg-white px-4 ring-1 ring-black/5">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search assets by file name"
          className="h-12 min-w-0 flex-1 bg-transparent pl-3 text-[14px] outline-none"
        />
      </div>

      {loading ? (
        <div className="mt-6 flex items-center gap-2 rounded-[22px] bg-white p-8 text-[13px] text-muted-foreground ring-1 ring-black/5">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading media…
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-6 rounded-[22px] bg-white p-8 text-center ring-1 ring-black/5">
          <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground" />
          <div className="mt-3 text-[14px] font-semibold">No media yet</div>
          <p className="mt-1 text-[12px] text-muted-foreground">Upload photos and reuse them anywhere on the site.</p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((m) => (
            <div key={m.id} className="group overflow-hidden rounded-[20px] bg-white ring-1 ring-black/5">
              <div className="aspect-square overflow-hidden bg-secondary/50">
                <img src={m.url} alt={m.name ?? "Media asset"} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="flex items-center justify-between gap-2 px-3 py-2.5">
                <div className="min-w-0">
                  <div className="truncate text-[11px] text-muted-foreground">{m.name ?? m.publicId}</div>
                  {inUse[m.url] && (
                    <div className="mt-0.5 truncate text-[10px] font-semibold text-emerald-700">In use · {inUse[m.url]}</div>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <button
                    aria-label="Copy image link"
                    onClick={async () => {
                      await navigator.clipboard.writeText(m.url);
                      setCopied(m.id);
                      setTimeout(() => setCopied((c) => (c === m.id ? null : c)), 1500);
                    }}
                    className="grid h-7 w-7 place-items-center rounded-full bg-secondary/70 transition-transform active:scale-95"
                  >
                    {copied === m.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                  <button
                    aria-label="Delete image"
                    onClick={() => setPendingDelete(m)}
                    className="grid h-7 w-7 place-items-center rounded-full bg-secondary/70 text-red-500 transition-transform active:scale-95"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {pendingDelete && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/45 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setPendingDelete(null)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm rounded-[22px] bg-white p-6 shadow-2xl">
            <div className="text-[16px] font-semibold">Delete this image?</div>
            <p className="mt-2 text-[13px] text-muted-foreground">
              {inUse[pendingDelete.url]
                ? `Warning: this image is currently used in "${inUse[pendingDelete.url]}" on the website. Deleting it will leave a blank space there.`
                : "It will be removed from the media library."}
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setPendingDelete(null)} className="h-11 rounded-full bg-secondary px-5 text-[13px] font-semibold">
                Cancel
              </button>
              <button
                onClick={async () => {
                  const target = pendingDelete;
                  setPendingDelete(null);
                  try {
                    await deleteDoc(doc(db, "media", target.id));
                    toast.success("Image deleted");
                  } catch {
                    toast.error("Unable to delete this image.");
                  }
                }}
                className="h-11 rounded-full bg-red-600 px-5 text-[13px] font-semibold text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
