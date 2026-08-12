import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CONTENT_DEFAULTS } from "./content-schema";
import { mergeSection } from "./content-merge";

// SSR-safe hook: on the server (or first paint) it returns defaults; once
// hydrated it subscribes to Firestore and merges live values on top.
export function useContent<T extends Record<string, unknown>>(
  sectionKey: string,
): T {
  const defaults = (CONTENT_DEFAULTS[sectionKey] ?? {}) as T;
  const [data, setData] = useState<T>(defaults);

  useEffect(() => {
    try {
      const unsub = onSnapshot(doc(db, "content", sectionKey), (snap) => {
        setData(mergeSection<T>(sectionKey, snap.data() as Record<string, unknown>));
      });
      return unsub;
    } catch {

      /* offline / rules issue — keep defaults */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionKey]);

  return data;
}