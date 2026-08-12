import { createFileRoute, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { ContentEditor } from "@/components/admin/ContentEditor";
import { MediaLibrary } from "@/components/admin/MediaLibrary";
import { AdminShell, type NavGroup } from "@/components/admin/AdminShell";
import { Dashboard } from "@/components/admin/Dashboard";
import { Inquiries } from "@/components/admin/Inquiries";
import { PhotoGallery } from "@/components/admin/PhotoGallery";
import {
  Home,
  Image as ImageIcon,
  Users,
  Settings,
  Plus,
  Upload,
  Trash2,
  Lock,
  Cloud,
  Search,
  ShieldCheck,
  Loader2,
  Mail,
  Eye,
  EyeOff,
  AlertCircle,
  Building2,
  Inbox,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Chaitanya EM School" },
      {
        name: "description",
        content: "Manage content, images, gallery and pages of Chaitanya EM School.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function friendlyAuthError(code: string, fallback: string) {
  const map: Record<string, string> = {
    "auth/invalid-email": "That email address doesn't look right.",
    "auth/user-disabled": "This account has been disabled. Contact the administrator.",
    "auth/user-not-found": "No admin account found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/invalid-login-credentials": "Email or password is incorrect.",
    "auth/too-many-requests": "Too many attempts. Please wait a minute and try again.",
    "auth/network-request-failed": "Network error. Check your connection and retry.",
  };
  return map[code] ?? fallback;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NAV_GROUPS: NavGroup[] = [
  { items: [{ id: "overview", label: "Dashboard", icon: Home }] },
  {
    label: "Website management",
    items: [
      { id: "page:Home", label: "Home page", icon: Home },
      { id: "page:About School", label: "About us", icon: Users },
      { id: "page:Facilities", label: "Facilities", icon: Building2 },
      { id: "page:Life / Gallery", label: "Gallery & videos", icon: ImageIcon },
      { id: "gallery", label: "Photo gallery", icon: ImageIcon },
    ],
  },
  {
    label: "Content",
    items: [{ id: "media", label: "Media library", icon: Cloud }],
  },
  {
    label: "Inquiries & leads",
    items: [{ id: "inquiries", label: "Inquiries", icon: Inbox }],
  },
  {
    label: "Settings",
    items: [
      { id: "page:Contact & Global", label: "Contact & footer", icon: Mail },
      { id: "settings", label: "Website settings", icon: Settings },
    ],
  },
];

const TAB_META: Record<string, { title: string; subtitle: string }> = {
  overview: { title: "Dashboard", subtitle: "Everything happening on your website at a glance." },
  "page:Home": { title: "Home page", subtitle: "Edit the hero, about strip and academics cards." },
  "page:About School": { title: "About us", subtitle: "Editorial hero and the leadership team." },
  "page:Facilities": { title: "Facilities", subtitle: "Manage facility cards, text and photos." },
  "page:Life / Gallery": {
    title: "Gallery & videos",
    subtitle: "Video stories shown on the gallery page.",
  },
  "page:Contact & Global": {
    title: "Contact & footer",
    subtitle: "Phone, WhatsApp, email, address and social links.",
  },
  gallery: { title: "Photo gallery", subtitle: "Upload, reorder and remove gallery photos." },
  media: { title: "Media library", subtitle: "Every uploaded image in one place." },
  inquiries: { title: "Inquiries", subtitle: "Every enquiry submitted on the website." },
  settings: { title: "Website settings", subtitle: "School details and account." },
};

type Tab = string;

export function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPw, setShowPw] = useState(false);
  const [touched, setTouched] = useState<{ email: boolean; pw: boolean }>({
    email: false,
    pw: false,
  });
  const [signingOut, setSigningOut] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
    return unsub;
  }, []);

  /* Signed-in admins always live at /admin/dashboard. */
  useEffect(() => {
    if (checking) return;
    if (user && pathname === "/admin") navigate({ to: "/admin/dashboard", replace: true });
    if (!user && pathname !== "/admin") navigate({ to: "/admin", replace: true });
  }, [user, checking, pathname, navigate]);

  if (checking) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#faf6ef] text-[#1c2a4d]/60">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!user) {
    const emailInvalid = !EMAIL_RE.test(email.trim());
    const pwInvalid = pw.length < 6;
    const emailErr =
      touched.email && emailInvalid
        ? email.trim().length === 0
          ? "Email is required."
          : "Enter a valid email address."
        : null;
    const pwErr =
      touched.pw && pwInvalid
        ? pw.length === 0
          ? "Password is required."
          : "Password must be at least 6 characters."
        : null;
    const canSubmit = !emailInvalid && !pwInvalid && !signingIn;
    return (
      <div
        className="grid min-h-screen place-items-center px-6 py-16 text-[#1c2a4d]"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 0%, #fdf1dd 0%, transparent 60%), linear-gradient(180deg, #faf6ef 0%, #f4ece0 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="w-full max-w-md"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[oklch(0.32_0.11_258)] text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="leading-none">
              <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#1c2a4d]/50">
                Chaitanya
              </div>
              <div className="mt-1.5 text-[16px] font-semibold tracking-[-0.02em]">
                Admin Console
              </div>
            </div>
          </div>

          <h1 className="font-editorial mt-8 text-[34px] leading-[1.08] tracking-[-0.02em]">
            Sign in to manage the school website.
          </h1>
          <p className="mt-3 max-w-[36ch] text-[13px] leading-relaxed text-[#1c2a4d]/60">
            Restricted area — for authorised staff only. Create an admin user in Firebase Auth
            (Email/Password) and sign in below.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setTouched({ email: true, pw: true });
              if (emailInvalid || pwInvalid) return;
              setAuthError(null);
              setSigningIn(true);
              try {
                await signInWithEmailAndPassword(auth, email.trim(), pw);
              } catch (err: unknown) {
                const code = (err as { code?: string })?.code ?? "";
                const fallback =
                  err instanceof Error ? err.message.replace("Firebase: ", "") : "Sign in failed";
                setAuthError(friendlyAuthError(code, fallback));
              } finally {
                setSigningIn(false);
              }
            }}
            className="mt-8 rounded-[26px] bg-white/85 p-6 ring-1 ring-[#1c2a4d]/10 backdrop-blur-xl shadow-[0_30px_70px_-40px_rgba(28,42,77,0.55)]"
            noValidate
          >
            <label className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#1c2a4d]/55">
              Email
            </label>
            <div
              className={`mt-2 flex items-center rounded-2xl border bg-[#faf6ef] px-4 transition-colors ${emailErr ? "border-red-400/60" : "border-[#1c2a4d]/12 focus-within:border-[#c65d2c]"}`}
            >
              <Mail className="h-4 w-4 text-[#c65d2c]" />
              <input
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="you@school.com"
                aria-invalid={!!emailErr}
                aria-describedby={emailErr ? "email-err" : undefined}
                className="h-12 flex-1 bg-transparent pl-3 text-[14px] text-[#1c2a4d] placeholder:text-[#1c2a4d]/35 outline-none"
              />
            </div>
            {emailErr && (
              <div
                id="email-err"
                className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-300"
              >
                <AlertCircle className="h-3 w-3" /> {emailErr}
              </div>
            )}
            <label className="mt-4 block text-[11px] font-medium uppercase tracking-[0.22em] text-[#1c2a4d]/55">
              Password
            </label>
            <div
              className={`mt-2 flex items-center rounded-2xl border bg-[#faf6ef] px-4 transition-colors ${pwErr ? "border-red-400/60" : "border-[#1c2a4d]/12 focus-within:border-[#c65d2c]"}`}
            >
              <Lock className="h-4 w-4 text-[#c65d2c]" />
              <input
                type={showPw ? "text" : "password"}
                autoComplete="current-password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, pw: true }))}
                placeholder="Enter password"
                aria-invalid={!!pwErr}
                aria-describedby={pwErr ? "pw-err" : undefined}
                className="h-12 flex-1 bg-transparent pl-3 text-[14px] text-[#1c2a4d] placeholder:text-[#1c2a4d]/35 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                aria-label={showPw ? "Hide password" : "Show password"}
                className="grid h-8 w-8 place-items-center rounded-full text-[#1c2a4d]/45 transition-colors hover:text-[#1c2a4d]"
              >
                {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {pwErr && (
              <div
                id="pw-err"
                className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-300"
              >
                <AlertCircle className="h-3 w-3" /> {pwErr}
              </div>
            )}
            {authError && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-start gap-2 rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-[12px] text-red-700"
                role="alert"
              >
                <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{authError}</span>
              </motion.div>
            )}
            <button
              type="submit"
              disabled={!canSubmit}
              className="group mt-6 flex h-14 w-full items-center justify-between rounded-full bg-[oklch(0.32_0.11_258)] px-6 text-[15px] font-semibold text-white shadow-[0_20px_40px_-22px_rgba(28,42,77,0.8)] transition-transform active:scale-[0.97] disabled:opacity-50 disabled:active:scale-100"
            >
              {signingIn ? "Signing in…" : "Enter dashboard"}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white">
                {signingIn ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
                )}
              </span>
            </button>
            <div className="mt-4 text-[11px] text-[#1c2a4d]/40">
              Secured by Firebase Authentication.
            </div>
          </form>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[#1c2a4d]/55 transition-colors hover:text-[#1c2a4d]"
          >
            ← Back to site
          </Link>
        </motion.div>
      </div>
    );
  }

  const meta = TAB_META[tab] ?? { title: "Admin", subtitle: "" };

  return (
    <AdminShell
      groups={NAV_GROUPS}
      active={tab}
      onSelect={(id) => setTab(id as Tab)}
      email={user.email ?? ""}
      signingOut={signingOut}
      onSignOut={async () => {
        if (signingOut) return;
        if (!confirm("Sign out of the admin console?")) return;
        setSigningOut(true);
        try {
          await signOut(auth);
        } finally {
          setSigningOut(false);
        }
      }}
      title={meta.title}
      subtitle={meta.subtitle}
    >
      {tab === "overview" && <Dashboard onNavigate={(t) => setTab(t as Tab)} />}
      {tab.startsWith("page:") && <ContentEditor page={tab.slice(5)} />}
      {tab === "media" && <MediaLibrary />}
      {tab === "gallery" && <PhotoGallery />}
      {tab === "inquiries" && <Inquiries />}
      {tab === "settings" && <SettingsPanel />}
    </AdminShell>
  );
}

function KPI({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-[22px] bg-white p-5 ring-1 ring-black/5 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.2)]">
      <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-[32px] font-black tracking-[-0.03em]">{value}</div>
      <div className="mt-1 text-[11px] text-muted-foreground">{hint}</div>
    </div>
  );
}

function SettingsPanel() {
  const env = import.meta.env;
  const firebaseReady = Boolean(env.VITE_FIREBASE_API_KEY && env.VITE_FIREBASE_PROJECT_ID);
  const cloudinaryReady = Boolean(
    env.VITE_CLOUDINARY_CLOUD_NAME && env.VITE_CLOUDINARY_UPLOAD_PRESET,
  );
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
        Configuration
      </div>
      <h1 className="mt-2 text-[28px] font-semibold tracking-[-0.03em]">Settings</h1>
      <div className="mt-5 flex flex-col gap-3">
        {[
          {
            label: "Firebase",
            hint: firebaseReady
              ? `Auth & database · ${env.VITE_FIREBASE_PROJECT_ID}`
              : "Auth & database — not configured",
            ready: firebaseReady,
          },
          {
            label: "Cloudinary",
            hint: cloudinaryReady
              ? `Image hosting & CDN · ${env.VITE_CLOUDINARY_CLOUD_NAME}`
              : "Image hosting & CDN — not configured",
            ready: cloudinaryReady,
          },
          { label: "WhatsApp number", hint: "Contact routing", ready: true },
          { label: "SEO metadata", hint: "Titles & descriptions", ready: true },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-black/5"
          >
            <div>
              <div className="text-[14px] font-semibold">{r.label}</div>
              <div className="mt-0.5 text-[12px] text-muted-foreground">{r.hint}</div>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${r.ready ? "bg-[oklch(0.92_0.09_150)] text-[oklch(0.32_0.14_150)]" : "bg-secondary text-muted-foreground"}`}
            >
              {r.ready ? "Ready" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
