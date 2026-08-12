import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Send, Clock } from "lucide-react";
import { AdmissionDialog } from "@/components/admission-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useContent } from "@/lib/use-content";
import { ContactActions } from "@/components/contact-actions";
import { LocationSection } from "@/components/location-section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Chaitanya EM School" },
      { name: "description", content: "Get in touch with Chaitanya EM School, Chekkapalli. Call, WhatsApp or send a note." },
      { property: "og:title", content: "Contact — Chaitanya EM School" },
      { property: "og:description", content: "Simple, helpful, one tap away." },
    ],
  }),
  component: ContactPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function ContactPage() {
  const contact = useContent<{
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  }>("contact_info");
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,oklch(0.95_0.05_78/0.4),transparent_50%),radial-gradient(circle_at_90%_100%,oklch(0.93_0.06_258/0.35),transparent_55%)] bg-background text-foreground">
      <PageHeader label="Contact" />

      <section className="mx-auto max-w-6xl px-6 pt-28 pb-8 md:px-10 md:pt-36 lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">Say hello</div>
        <h1 className="mt-3 text-[44px] font-semibold leading-[0.98] tracking-[-0.04em] md:text-[72px] lg:text-[88px]">
          One tap
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>away.</span>
        </h1>
        <p className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground md:text-[16px]">
          Whether it's admissions, a campus visit or a quick question — we'd love to hear from you.
        </p>
      </section>

      <div className="mx-auto max-w-6xl md:px-6 lg:px-16">
      <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
      <div>
      {/* Premium contact actions */}
      <section className="px-4 pb-4">
        <ContactActions
          tel={contact.phone}
          whatsapp={contact.whatsapp}
          email={contact.email}
          className="grid-cols-1"
        />
      </section>


      {/* Admission enquiry — same premium popup on desktop and mobile */}
      <section className="px-4 pt-6 pb-12">
        <div className="overflow-hidden rounded-[28px] bg-white p-6 ring-1 ring-black/5 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] md:p-8">
          <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Admission enquiry
          </div>
          <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] md:text-[26px]">
            Start your application
          </h2>
          <p className="mt-2 max-w-[46ch] text-[13.5px] leading-relaxed text-muted-foreground">
            Share a few details and our admissions office will reach out. It takes less than a minute.
          </p>
          <button
            type="button"
            onClick={() => setEnquiryOpen(true)}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[14px] font-semibold text-white shadow-[0_18px_40px_-18px_rgba(34,64,180,0.6)] transition-transform duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
            style={{ background: "linear-gradient(135deg,oklch(0.55 0.16 258),oklch(0.35 0.13 258))" }}
          >
            Open admission form
            <Send className="h-4 w-4" strokeWidth={2.4} />
          </button>
        </div>
      </section>
      </div>

      {/* Info */}
      <section className="px-4 pb-12 md:pt-6">
        <div className="overflow-hidden rounded-[28px] bg-white ring-1 ring-black/5 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)]">
          <div className="grid grid-cols-1 gap-4 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground/60" />
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Address</div>
                <div className="mt-0.5 text-[14px] whitespace-pre-line">{contact.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-foreground/60" />
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Office hours</div>
                <div className="mt-0.5 text-[14px]">Mon – Sat · 9:00 AM – 4:30 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
      <LocationSection />
      <SiteFooter />
      <AdmissionDialog open={enquiryOpen} onClose={() => setEnquiryOpen(false)} whatsapp={contact.whatsapp} />
    </div>
  );
}

function PageHeader(_: { label: string }) {
  return <SiteHeader />;
}
