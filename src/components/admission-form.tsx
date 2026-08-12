import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { X, Loader2, CheckCircle2, GraduationCap } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "@/lib/firebase";
import { SOCIAL } from "@/lib/social-links";
import { isValidEmail, isValidMobile, isValidName, normalizeMobile } from "@/lib/validation";

const ease = [0.22, 1, 0.36, 1] as const;

export type AdmissionForm = {
  studentName: string;
  mobile: string;
  email: string;
  message: string;
};

const EMPTY: AdmissionForm = {
  studentName: "",
  mobile: "",
  email: "",
  message: "",
};

const FIELD =
  "w-full min-w-0 rounded-xl border border-black/10 bg-white/80 px-3.5 py-2.5 text-[14px] text-foreground outline-none transition-shadow duration-200 placeholder:text-muted-foreground/70 focus:border-transparent focus:ring-2 focus:ring-[oklch(0.55_0.16_258)]";
const LABEL =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground";
const ERR_FIELD = "!border-[oklch(0.6_0.19_25)] focus:!ring-[oklch(0.6_0.19_25)]";
const ERR_TEXT = "mt-1.5 text-[11.5px] font-medium text-[oklch(0.5_0.19_25)]";

function buildWhatsAppText(f: AdmissionForm) {
  const stamp = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return [
    "*CHAITANYA ENGLISH MEDIUM SCHOOL*",
    "_Admission Enquiry_",
    "━━━━━━━━━━━━━━━━━━",
    "",
    `*Student name:* ${f.studentName}`,
    `*Mobile:* ${f.mobile}`,
    `*Email:* ${f.email || "Not provided"}`,
    "",
    "*Message*",
    f.message?.trim() || "Not provided",
    "",
    "━━━━━━━━━━━━━━━━━━",
    `Submitted on ${stamp}`,
    "Sent from the school website admission form.",
  ].join("\n");
}

/** Premium glass admission-enquiry dialog. */
export function AdmissionDialog({
  open,
  onClose,
  whatsapp,
}: {
  open: boolean;
  onClose: () => void;
  whatsapp?: string;
}) {
  const [form, setForm] = useState<AdmissionForm>(EMPTY);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setForm(EMPTY);
      setDone(false);
      setError(null);
      setTouched({});
    }
  }, [open]);

  const errors = {
    studentName: isValidName(form.studentName) ? null : "Please enter the student's full name.",
    mobile: isValidMobile(form.mobile) ? null : "Please enter a valid contact number.",
    email:
      !form.email.trim() || isValidEmail(form.email) ? null : "Please enter a valid email address.",
  };
  const invalid = Object.values(errors).some(Boolean);
  const showError = (k: keyof typeof errors) => (touched[k] ? errors[k] : null);

  const set =
    (k: keyof AdmissionForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const raw = e.target.value;
      // Mobile accepts digits, spaces and a leading + only — letters are rejected as typed.
      const value = k === "mobile" ? raw.replace(/[^\d+\s-]/g, "").slice(0, 16) : raw;
      setForm((p) => ({ ...p, [k]: value }));
    };
  const blur = (k: string) => () => setTouched((t) => ({ ...t, [k]: true }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError(null);
    setTouched({ studentName: true, mobile: true, email: true });
    if (invalid) {
      setError("Please correct the highlighted fields before submitting.");
      return;
    }
    setBusy(true);
    const clean: AdmissionForm = {
      studentName: form.studentName.trim(),
      mobile: normalizeMobile(form.mobile),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    const text = buildWhatsAppText(clean);
    try {
      await addDoc(collection(db, "admissions"), {
        ...clean,
        status: "new",
        read: false,
        source: "website",
        createdAt: serverTimestamp(),
      });
    } catch {
      setError("We couldn't save your enquiry, but you can still send it on WhatsApp.");
    }
    const num = (whatsapp || SOCIAL.whatsapp).replace(/\D/g, "") || SOCIAL.whatsapp;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setBusy(false);
    setDone(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="admission"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto overscroll-contain px-3 py-6 backdrop-blur-md sm:px-5 sm:py-10"
          style={{ background: "rgba(17, 22, 55, 0.5)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Admission enquiry form"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.32, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[26px] ring-1 ring-white/50 shadow-[0_40px_100px_-30px_rgba(15,23,60,0.6)]"
            style={{
              background:
                "radial-gradient(120% 80% at 0% 0%, oklch(0.98 0.02 78) 0%, transparent 55%), radial-gradient(120% 90% at 100% 100%, oklch(0.95 0.05 258) 0%, transparent 55%), rgba(255,255,255,0.94)",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-foreground ring-1 ring-black/10 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <X className="h-4 w-4" strokeWidth={2.4} />
            </button>

            <div className="px-5 pt-6 sm:px-8 sm:pt-8">
              <div className="flex items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white"
                  style={{
                    background: "linear-gradient(135deg,oklch(0.55 0.16 258),oklch(0.35 0.13 258))",
                  }}
                >
                  <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Admissions open
                  </div>
                  <h2 className="truncate text-[22px] font-semibold tracking-[-0.03em] sm:text-[26px]">
                    Admission enquiry
                  </h2>
                </div>
              </div>
            </div>

            {done ? (
              <div className="px-5 pb-8 pt-6 text-center sm:px-8">
                <CheckCircle2
                  className="mx-auto h-10 w-10 text-[oklch(0.6_0.15_150)]"
                  strokeWidth={2}
                />
                <div className="mt-3 text-[17px] font-semibold">Enquiry received</div>
                <p className="mx-auto mt-2 max-w-[42ch] text-[13.5px] leading-relaxed text-muted-foreground">
                  Thank you. Our admissions office will contact you shortly. A WhatsApp message has
                  also been prepared for you to send.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-[13.5px] font-semibold text-background transition-transform active:scale-[0.97]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={LABEL} htmlFor="ad-student">
                      Student name *
                    </label>
                    <input
                      id="ad-student"
                      className={`${FIELD} ${showError("studentName") ? ERR_FIELD : ""}`}
                      value={form.studentName}
                      onChange={set("studentName")}
                      onBlur={blur("studentName")}
                      maxLength={80}
                      aria-invalid={!!showError("studentName")}
                      placeholder="Full name of the student"
                    />
                    {showError("studentName") && (
                      <p className={ERR_TEXT}>{showError("studentName")}</p>
                    )}
                  </div>
                  <div>
                    <label className={LABEL} htmlFor="ad-mobile">
                      Mobile number *
                    </label>
                    <input
                      id="ad-mobile"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      className={`${FIELD} ${showError("mobile") ? ERR_FIELD : ""}`}
                      value={form.mobile}
                      onChange={set("mobile")}
                      onBlur={blur("mobile")}
                      maxLength={16}
                      aria-invalid={!!showError("mobile")}
                      placeholder="10-digit mobile number"
                    />
                    {showError("mobile") && <p className={ERR_TEXT}>{showError("mobile")}</p>}
                  </div>
                  <div>
                    <label className={LABEL} htmlFor="ad-email">
                      Email address
                    </label>
                    <input
                      id="ad-email"
                      type="email"
                      className={`${FIELD} ${showError("email") ? ERR_FIELD : ""}`}
                      value={form.email}
                      onChange={set("email")}
                      onBlur={blur("email")}
                      maxLength={120}
                      aria-invalid={!!showError("email")}
                      placeholder="Optional"
                    />
                    {showError("email") && <p className={ERR_TEXT}>{showError("email")}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className={LABEL} htmlFor="ad-message">
                      Message
                    </label>
                    <textarea
                      id="ad-message"
                      rows={4}
                      className={`${FIELD} resize-none`}
                      value={form.message}
                      onChange={set("message")}
                      maxLength={600}
                      placeholder="Anything you'd like us to know (optional)"
                    />
                  </div>
                </div>

                {error && (
                  <p className="mt-4 rounded-xl bg-[oklch(0.96_0.04_30)] px-3.5 py-2.5 text-[12.5px] text-[oklch(0.45_0.16_30)]">
                    {error}
                  </p>
                )}

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="min-h-11 rounded-full bg-secondary px-6 text-[13.5px] font-semibold text-foreground ring-1 ring-black/5 transition-transform duration-200 active:scale-[0.97]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={busy}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 text-[13.5px] font-semibold text-white shadow-[0_16px_36px_-16px_rgba(34,64,180,0.6)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97] disabled:opacity-70"
                    style={{
                      background:
                        "linear-gradient(135deg,oklch(0.55 0.16 258),oklch(0.35 0.13 258))",
                    }}
                  >
                    {busy && <Loader2 className="h-4 w-4 animate-spin" />}
                    Submit
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
