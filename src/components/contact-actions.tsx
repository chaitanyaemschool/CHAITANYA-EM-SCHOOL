import type React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Phone, Mail } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* Ready-to-send templates so a parent never faces an empty message box. */
const WHATSAPP_TEMPLATE = [
  "Hello Chaitanya EM High School,",
  "",
  "I would like to know more about admissions.",
  "",
  "Student name: ",
  "Class seeking admission: ",
  "Parent name: ",
  "City / Area: ",
  "",
  "Please share the details. Thank you.",
].join("\n");

const EMAIL_SUBJECT = "Admission enquiry - Chaitanya EM High School";
const EMAIL_BODY = [
  "Dear Admissions Team,",
  "",
  "I would like to enquire about admissions at Chaitanya EM High School.",
  "",
  "Student name: ",
  "Class seeking admission: ",
  "Parent name: ",
  "Contact number: ",
  "City / Area: ",
  "",
  "Kindly share the admission process, fee structure and available dates for a campus visit.",
  "",
  "Thank you,",
].join("\n");

/** Official-style WhatsApp glyph. */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

type Action = {
  key: string;
  label: string;
  sub: string;
  href: string;
  bg: string;
  shadow: string;
  ring: string;
  aria: string;
  Icon: (p: { className?: string }) => React.ReactElement;
};

/**
 * Cohesive premium contact-action group: three elevated cards with the
 * correct, instantly recognisable icon for each service.
 */
export function ContactActions({
  tel,
  whatsapp,
  email,
  className = "",
}: {
  tel: string;
  whatsapp: string;
  email: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const actions: Action[] = [
    {
      key: "call",
      label: "Call us",
      sub: "Talk to the office",
      href: `tel:${(tel || "").replace(/[^+\d]/g, "")}`,
      bg: "linear-gradient(135deg,#3b82f6,#1e3a8a)",
      shadow: "0 14px 28px -14px rgba(29,78,216,0.6)",
      ring: "#1e40af",
      aria: "Call Chaitanya EM High School",
      Icon: ({ className }) => <Phone className={className} strokeWidth={2.2} aria-hidden="true" />,
    },
    {
      key: "wa",
      label: "WhatsApp us",
      sub: "Quick reply",
      href: `https://wa.me/${(whatsapp || "").replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_TEMPLATE)}`,
      bg: "linear-gradient(135deg,#25D366,#128C7E)",
      shadow: "0 14px 28px -14px rgba(18,140,126,0.65)",
      ring: "#128C7E",
      aria: "Message Chaitanya EM High School on WhatsApp",
      Icon: ({ className }) => <WhatsAppIcon className={className} />,
    },
    {
      key: "mail",
      label: "Email us",
      sub: "We reply in a day",
      href: `mailto:${email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`,
      bg: "linear-gradient(135deg,#f59e0b,#b45309)",
      shadow: "0 14px 28px -14px rgba(180,83,9,0.6)",
      ring: "#b45309",
      aria: "Email Chaitanya EM High School",
      Icon: ({ className }) => <Mail className={className} strokeWidth={2.2} aria-hidden="true" />,
    },
  ];

  return (
    <div className={`flex flex-wrap justify-center gap-3 md:gap-4 ${className || ""}`}>
      {actions.map(({ key, label, sub, href, ring, aria, Icon }, i) => (
        <motion.a
          key={key}
          href={href}
          aria-label={aria}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease, delay: i * 0.07 }}
          whileHover={reduce ? undefined : { y: -2 }}
          whileTap={{ scale: 0.98 }}
          style={{ ["--focus-ring" as string]: ring }}
          className="group flex flex-1 sm:flex-initial min-w-[145px] max-w-[280px] items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-black/5 shadow-[0_2px_8px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_12px_24px_-8px_rgba(15,23,42,0.12)] hover:ring-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2"
        >
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: `${ring}15`, color: ring }}
          >
            <Icon className="h-5 w-5" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-[14px] font-bold tracking-tight text-slate-800 transition-colors group-hover:text-[var(--focus-ring)]">
              {label}
            </span>
            <span className="truncate text-[12px] font-medium text-slate-500">{sub}</span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}
