import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CONTENT_DEFAULTS } from "./content-schema";
import { mergeSection } from "./content-merge";

// SSR-safe hook: on the server (or first paint) it returns defaults; once
// hydrated it subscribes to Firestore and merges live values on top.
export function useContent<T extends Record<string, unknown>>(sectionKey: string): T {
  const [data, setData] = useState<T>(() => {
    if (typeof window !== "undefined") {
      try {
        const cached = localStorage.getItem(`chaitanya_cms_${sectionKey}`);
        if (cached) {
          return mergeSection<T>(sectionKey, JSON.parse(cached));
        }
      } catch {
        // Ignore cache errors
      }
    }
    return (CONTENT_DEFAULTS[sectionKey] ?? {}) as T;
  });

  useEffect(() => {
    try {
      const unsub = onSnapshot(doc(db, "content", sectionKey), (snap) => {
        const remoteData = snap.data() as Record<string, unknown> | undefined;
        if (remoteData) {
          const merged = mergeSection<T>(sectionKey, remoteData);
          setData(merged);
          try {
            localStorage.setItem(`chaitanya_cms_${sectionKey}`, JSON.stringify(remoteData));
          } catch {
            // Ignore quota errors
          }
        }
      });
      return unsub;
    } catch {
      /* offline / rules issue — keep defaults */
    }
  }, [sectionKey]);

  return data;
}
