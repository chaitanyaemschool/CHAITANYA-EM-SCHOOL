import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LocationSection } from "@/components/location-section";

export const Route = createFileRoute("/nursery-school-chekkapalli")({
  head: () => ({
    meta: [
      { title: "Nursery School in Chekkapalli | Chaitanya EM School" },
      {
        name: "description",
        content:
          "Looking for the best Nursery school in Chekkapalli? Chaitanya EM School offers a safe, nurturing environment with play-based learning for early childhood education.",
      },
      { property: "og:title", content: "Nursery School in Chekkapalli | Chaitanya EM School" },
      {
        property: "og:description",
        content:
          "Looking for the best Nursery school in Chekkapalli? Chaitanya EM School offers a safe, nurturing environment with play-based learning for early childhood education.",
      },
      { property: "og:url", content: "https://www.chaitanyaemschool.com/nursery-school-chekkapalli" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaitanyaemschool.com/nursery-school-chekkapalli" }
    ]
  }),
  component: NurseryPage,
});

function NurseryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-[calc(110px_+_env(safe-area-inset-top))] pb-12 md:px-10 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Early Education
        </div>
        <h1 className="mt-3 text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[48px] md:text-[64px] lg:text-[76px]">
          Nursery School
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>
            in Chekkapalli.
          </span>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]">
          At Chaitanya EM School, our Nursery program provides a warm, secure, and engaging environment where early childhood education focuses on curiosity, play-based learning, and foundational social skills.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10 lg:px-16">
        <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-h2:text-[28px] prose-h2:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed">
          <h2>Why Choose Chaitanya EM School for Nursery?</h2>
          <p>
            Choosing the right school for your child's first step into education is a critical decision for parents in Chekkapalli. Our Nursery program is designed to ease the transition from home to school, ensuring that every child feels safe, loved, and encouraged to explore.
          </p>

          <h3>Play-Based Learning</h3>
          <p>
            We believe that children learn best when they are actively engaged. Our classrooms are equipped with educational toys, sensory activities, and interactive tools that make learning feel like play. This approach develops fine motor skills, cognitive abilities, and early language skills.
          </p>

          <h3>A Safe and Nurturing Campus</h3>
          <p>
            Safety is our top priority. Our Chekkapalli campus features secure, child-friendly spaces where Nursery students can run, play, and interact freely under the careful supervision of our experienced teachers and staff.
          </p>

          <h3>Foundational Social Skills</h3>
          <p>
            Beyond academics, Nursery is about learning how to share, communicate, and build friendships. Through group activities, storytelling sessions, and arts and crafts, children develop the emotional intelligence needed for primary school.
          </p>

          <h2>Admissions for Nursery</h2>
          <p>
            Admissions for our Nursery program are currently open. We welcome parents from Chekkapalli and nearby villages to visit our campus, meet our educators, and see our smart classrooms in action. To learn more about the admission process or to schedule a visit, please navigate to our <a href="/admissions" className="text-primary font-medium hover:underline">Admissions page</a> or contact our office directly.
          </p>
        </article>
      </section>

      <LocationSection />
      <SiteFooter />
    </div>
  );
}
