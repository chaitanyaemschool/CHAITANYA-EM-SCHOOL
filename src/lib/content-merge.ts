import { CONTENT_DEFAULTS } from "./content-schema";

/**
 * Merge a Firestore content doc on top of the built-in defaults.
 *
 * An empty (or all-blank) array in Firestore usually means the doc was created
 * before real content was migrated — falling back to the built-in content keeps
 * both the public site and the admin editor showing the real existing content
 * instead of an empty state.
 */
export function mergeSection<T extends Record<string, unknown>>(
  sectionKey: string,
  remote: Record<string, unknown> | undefined | null,
): T {
  const defaults = (CONTENT_DEFAULTS[sectionKey] ?? {}) as Record<string, unknown>;
  const cleaned: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(remote ?? {})) {
    if (Array.isArray(v) && Array.isArray(defaults[k])) {
      const meaningful = v.some(
        (item) =>
          item &&
          typeof item === "object" &&
          Object.values(item as Record<string, unknown>).some(
            (x) => typeof x === "string" && x.trim() !== "",
          ),
      );
      if (!meaningful) continue;
    }
    cleaned[k] = v;
  }
  return { ...defaults, ...cleaned } as T;
}
