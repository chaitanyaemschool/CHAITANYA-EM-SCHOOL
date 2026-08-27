import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { AdmissionDialog } from "@/components/admission-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useContent } from "@/lib/use-content";
import { LocationSection } from "@/components/location-section";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "School Admissions in Chekkapalli | Chaitanya EM School" },
      {
        name: "description",
        content:
          "Admissions are open at Chaitanya EM School, Chekkapalli. Apply now for Nursery to Grade 10. Learn about our admission process, requirements and school facilities.",
      },
      { property: "og:title", content: "School Admissions in Chekkapalli | Chaitanya EM School" },
      {
        property: "og:description",
        content:
          "Admissions are open at Chaitanya EM School, Chekkapalli. Apply now for Nursery to Grade 10. Learn about our admission process, requirements and school facilities.",
      },
      { property: "og:url", content: "https://www.chaitanyaemschool.com/admissions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaitanyaemschool.com/admissions" }
    ]
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const contact = useContent<{ whatsapp: string }>("contact_info");
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-[calc(110px_+_env(safe-area-inset-top))] pb-8 md:px-10 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Join Us
        </div>
        <h1 className="mt-3 text-[44px] font-semibold leading-[0.98] tracking-[-0.04em] md:text-[72px] lg:text-[88px]">
          School Admissions
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>
            in Chekkapalli.
          </span>
        </h1>
        <p className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground md:text-[16px]">
          We are currently accepting applications for Nursery to Grade 10. Experience activity-based learning and the LEAD curriculum.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          <div className="rounded-[28px] bg-muted/50 p-8 ring-1 ring-black/5">
            <h2 className="text-[24px] font-semibold tracking-tight">How to Apply</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Submit an enquiry form or message us on WhatsApp.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Schedule a campus visit to see our smart classrooms and facilities.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Complete the registration and submit required documents.</span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-white p-8 ring-1 ring-black/5 shadow-sm">
            <h2 className="text-[24px] font-semibold tracking-tight">Start Your Application</h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
              Share a few details and our admissions office will reach out to guide you through the process.
            </p>
            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "linear-gradient(135deg,oklch(0.55 0.16 258),oklch(0.35 0.13 258))",
              }}
            >
              Open admission form
              <Send className="h-4 w-4" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 lg:px-16">
        <h2 className="mb-8 text-center text-[28px] font-semibold md:text-[36px]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="rounded-2xl border border-border p-6">
            <h3 className="text-lg font-medium">What classes does Chaitanya EM School offer?</h3>
            <p className="mt-2 text-muted-foreground">We offer English medium education from Nursery up to Grade 10.</p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <h3 className="text-lg font-medium">Where is Chaitanya EM School located?</h3>
            <p className="mt-2 text-muted-foreground">Our campus is located in Chekkapalli, Andhra Pradesh, providing a safe and accessible environment for students in the surrounding areas.</p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <h3 className="text-lg font-medium">Does the school provide school transport?</h3>
            <p className="mt-2 text-muted-foreground">Yes, we provide safe, GPS-tracked school buses with trained attendants across Chekkapalli and nearby villages.</p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <h3 className="text-lg font-medium">What curriculum does the school follow?</h3>
            <p className="mt-2 text-muted-foreground">We follow the LEAD curriculum featuring activity-based learning. For higher grades, we also offer an IIT Foundation program.</p>
          </div>
        </div>
      </section>

      <LocationSection />
      <SiteFooter />
      <AdmissionDialog
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        whatsapp={contact.whatsapp}
      />
    </div>
  );
}
