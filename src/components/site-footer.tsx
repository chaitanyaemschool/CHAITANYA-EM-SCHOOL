import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Home,
  School,
  BookOpen,
  Building2,
  Image as ImageIcon,
  PhoneCall,
} from "lucide-react";

import logoAsset from "@/assets/chaitanya-logo.asset.json";
import { WhatsAppIcon } from "@/components/contact-actions";
import { FacebookMark, InstagramMark, WhatsAppMark, YouTubeMark } from "@/components/brand-icons";
import { DREAM_TEAM_URL, SOCIAL, waHref as buildWaHref } from "@/lib/social-links";
import { useContent } from "@/lib/use-content";

const ease = [0.22, 1, 0.36, 1] as const;

export const navItems = [
  {
    label: "Home",
    to: "/",
    icon: Home,
    tooltip: "Return to the homepage",
    gradient: "linear-gradient(135deg,oklch(0.72 0.17 28),oklch(0.55 0.19 28))",
  },
  {
    label: "About School",
    to: "/about",
    icon: School,
    tooltip: "Our story, vision & leadership",
    gradient: "linear-gradient(135deg,oklch(0.62 0.16 258),oklch(0.36 0.13 258))",
  },
  {
    label: "Academics",
    to: "/academics",
    icon: BookOpen,
    tooltip: "Curriculum & learning stages",
    gradient: "linear-gradient(135deg,oklch(0.78 0.15 78),oklch(0.58 0.16 60))",
  },
  {
    label: "Facilities",
    to: "/facilities",
    icon: Building2,
    tooltip: "Campus, labs & amenities",
    gradient: "linear-gradient(135deg,oklch(0.65 0.14 200),oklch(0.42 0.12 220))",
  },
  {
    label: "Gallery",
    to: "/gallery",
    icon: ImageIcon,
    tooltip: "Photos from life on campus",
    gradient: "linear-gradient(135deg,oklch(0.72 0.16 320),oklch(0.48 0.17 300))",
  },
  {
    label: "Contact",
    to: "/contact",
    icon: PhoneCall,
    tooltip: "Reach us & find directions",
    gradient: "linear-gradient(135deg,oklch(0.66 0.15 148),oklch(0.42 0.14 148))",
  },
] as const;

export function SiteFooter() {
  const contact = useContent<{
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  }>("contact_info");
  const footer = useContent<{
    tagline: string;
    instagram: string;
    facebook: string;
    youtube: string;
  }>("footer");
  const telHref = `tel:${(contact.phone || SOCIAL.phone).replace(/[^+\d]/g, "")}`;
  const waHref = buildWaHref(contact.whatsapp);
  const mailHref = `mailto:${contact.email || SOCIAL.email}`;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease }}
      className="relative overflow-hidden bg-foreground px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-20 text-background md:px-10 md:pt-24 lg:px-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[oklch(0.32_0.11_258)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-40 h-56 w-56 rounded-full bg-[oklch(0.78_0.13_78)]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <img
            src={logoAsset.url}
            alt="Chaitanya EM School logo"
            className="h-14 w-14 rounded-2xl bg-white/95 object-cover p-1 ring-1 ring-white/15"
          />
          <div className="min-w-0 leading-none">
            <div className="font-editorial truncate text-[32px] leading-none md:text-[42px]">
              CHAITANYA
            </div>
            <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-background/70">
              EM SCHOOL · CHEKKAPALLI
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-[38ch] text-[13px] leading-relaxed text-background/60 md:text-[14px]">
          {footer.tagline}
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          <div className="relative rounded-[26px] bg-white/7 p-4 ring-1 ring-white/10">
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-background/50">
              Reach
            </div>
            <ul className="mt-4 space-y-3 text-[14px] text-background/88">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background/60" />
                <span>{contact.address}</span>
              </li>
              <li>
                <a
                  href={telHref}
                  className="flex items-center gap-3 transition-colors hover:text-background"
                >
                  <Phone className="h-4 w-4 text-background/60" /> Call admissions
                </a>
              </li>
              <li>
                <a
                  href={waHref}
                  className="flex items-center gap-3 transition-colors hover:text-background"
                >
                  <WhatsAppIcon className="h-4 w-4 text-background/60" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={mailHref}
                  className="flex items-center gap-3 transition-colors hover:text-background"
                >
                  <Mail className="h-4 w-4 text-background/60" /> Email
                </a>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-background/40">
                Explore
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-[14px] text-background/85">
                {navItems.map((n) => (
                  <li key={n.label}>
                    <Link to={n.to} className="transition-colors hover:text-background">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Socials — official marks, no plates */}
          <div className="relative flex flex-col items-start gap-4">
            <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-background/40">
              Follow
            </div>
            <div className="flex items-center gap-5">
              {[
                {
                  Icon: InstagramMark,
                  label: "Instagram",
                  href: footer.instagram || SOCIAL.instagram,
                },
                { Icon: FacebookMark, label: "Facebook", href: footer.facebook || SOCIAL.facebook },
                { Icon: WhatsAppMark, label: "WhatsApp", href: waHref },
                { Icon: YouTubeMark, label: "YouTube", href: footer.youtube || SOCIAL.youtube },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-md transition-transform duration-300 ease-out hover:scale-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/60 active:scale-95"
                >
                  <Icon className="h-8 w-8 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-10 h-px w-full bg-white/10" />

        <div className="relative mt-6 flex flex-col gap-3 text-[11px] leading-relaxed text-background/50 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Chaitanya EM School, Chekkapalli. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span>Designed &amp; developed by</span>
            <a
              href={DREAM_TEAM_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold uppercase tracking-[0.18em] text-background/90 underline-offset-4 transition-colors hover:text-background hover:underline"
            >
              Dream Team Services
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
