import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function saveSection(sectionKey: string, data: Record<string, unknown>) {
  await setDoc(doc(db, "content", sectionKey), data, { merge: true });
}
