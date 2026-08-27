import { createFileRoute } from "@tanstack/react-router";
import { Bus, MapPin, ShieldCheck, Clock } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LocationSection } from "@/components/location-section";

export const Route = createFileRoute("/school-transport-chekkapalli")({
  head: () => ({
    meta: [
      { title: "School Transport in Chekkapalli | Chaitanya EM School" },
      {
        name: "description",
        content:
          "Safe and reliable school transport in Chekkapalli. Chaitanya EM School provides a modern fleet of buses covering Chekkapalli and surrounding villages with GPS tracking.",
      },
      { property: "og:title", content: "School Transport in Chekkapalli | Chaitanya EM School" },
      {
        property: "og:description",
        content:
          "Safe and reliable school transport in Chekkapalli. Chaitanya EM School provides a modern fleet of buses covering Chekkapalli and surrounding villages with GPS tracking.",
      },
      { property: "og:url", content: "https://www.chaitanyaemschool.com/school-transport-chekkapalli" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaitanyaemschool.com/school-transport-chekkapalli" }
    ]
  }),
  component: TransportPage,
});

function TransportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-[calc(110px_+_env(safe-area-inset-top))] pb-12 md:px-10 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Student Safety
        </div>
        <h1 className="mt-3 text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[48px] md:text-[64px] lg:text-[76px]">
          School Transport
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>
            in Chekkapalli.
          </span>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]">
          Ensuring a safe, comfortable, and punctual journey for every student. Our modern fleet of school buses covers Chekkapalli and surrounding villages, giving parents complete peace of mind.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[24px] bg-muted/50 p-6 ring-1 ring-black/5">
            <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 text-[18px] font-semibold">Trained Staff</h3>
            <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">
              Every bus is operated by experienced drivers and dedicated attendants trained in student safety and emergency protocols.
            </p>
          </div>
          
          <div className="rounded-[24px] bg-muted/50 p-6 ring-1 ring-black/5">
            <MapPin className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 text-[18px] font-semibold">Wide Coverage</h3>
            <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">
              Our routes span across Chekkapalli and neighboring communities, providing convenient pickup and drop-off points.
            </p>
          </div>

          <div className="rounded-[24px] bg-muted/50 p-6 ring-1 ring-black/5">
            <Clock className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 text-[18px] font-semibold">Punctuality</h3>
            <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">
              We maintain strict schedules to ensure students arrive at school on time and return home promptly.
            </p>
          </div>

          <div className="rounded-[24px] bg-muted/50 p-6 ring-1 ring-black/5">
            <Bus className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 text-[18px] font-semibold">Modern Fleet</h3>
            <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">
              Well-maintained, spacious buses equipped with essential safety features for a comfortable daily commute.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10 lg:px-16">
        <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-h2:text-[28px] prose-h2:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed">
          <h2>Reliable Commute for Students</h2>
          <p>
            At Chaitanya EM School, we understand that a child's day begins the moment they step out of their home. That is why our School Transport service in Chekkapalli is designed with safety, reliability, and comfort as its core pillars. We take the stress out of the daily commute so students arrive refreshed and ready to learn.
          </p>
          
          <h2>Requesting Transport Services</h2>
          <p>
            Transport facility is available for students from Nursery to Grade 10. Route availability and pickup timings are discussed during the admission process. If you would like to know if our buses cover your specific area or village, please reach out to our administration office. You can find our contact details on the <a href="/contact" className="text-primary font-medium hover:underline">Contact page</a>.
          </p>
        </article>
      </section>

      <LocationSection />
      <SiteFooter />
    </div>
  );
}
