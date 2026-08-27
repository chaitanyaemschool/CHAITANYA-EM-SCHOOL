import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LocationSection } from "@/components/location-section";

export const Route = createFileRoute("/primary-school-chekkapalli")({
  head: () => ({
    meta: [
      { title: "Primary School in Chekkapalli | Chaitanya EM School" },
      {
        name: "description",
        content:
          "Discover the top Primary School in Chekkapalli. Chaitanya EM School provides a strong academic foundation, activity-based learning, and modern facilities.",
      },
      { property: "og:title", content: "Primary School in Chekkapalli | Chaitanya EM School" },
      {
        property: "og:description",
        content:
          "Discover the top Primary School in Chekkapalli. Chaitanya EM School provides a strong academic foundation, activity-based learning, and modern facilities.",
      },
      { property: "og:url", content: "https://www.chaitanyaemschool.com/primary-school-chekkapalli" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaitanyaemschool.com/primary-school-chekkapalli" }
    ]
  }),
  component: PrimaryPage,
});

function PrimaryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-[calc(110px_+_env(safe-area-inset-top))] pb-12 md:px-10 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Foundational Years
        </div>
        <h1 className="mt-3 text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[48px] md:text-[64px] lg:text-[76px]">
          Primary School
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>
            in Chekkapalli.
          </span>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]">
          The primary years are crucial for building a strong academic foundation. At Chaitanya EM School, we blend traditional values with modern, activity-based learning to foster confident and curious students.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10 lg:px-16">
        <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-h2:text-[28px] prose-h2:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed">
          <h2>A Strong Academic Foundation</h2>
          <p>
            As a leading Primary School in Chekkapalli, Chaitanya EM School focuses on core subjects like Mathematics, English, and Science while ensuring students remain engaged through the LEAD curriculum. We believe that rote memorization is a thing of the past; instead, our educators prioritize conceptual understanding and critical thinking.
          </p>

          <h3>Activity-Based Learning</h3>
          <p>
            Children learn best by doing. Our classrooms are transformed into interactive learning spaces where students participate in hands-on activities, group projects, and practical experiments. This activity-based approach ensures that complex concepts are easily grasped and remembered.
          </p>

          <h3>Extracurricular Growth</h3>
          <p>
            Education is not confined to textbooks. We encourage primary students to discover their talents in arts, sports, and cultural activities. Our campus provides ample opportunities for physical education and creative expression, ensuring a well-rounded development.
          </p>

          <h3>Modern Smart Classrooms</h3>
          <p>
            To keep pace with the digital age, our primary school classrooms are equipped with smart technology. Visual aids and interactive multimedia make lessons more engaging and cater to different learning styles, ensuring every student in Chekkapalli receives a high-quality education.
          </p>

          <h2>Admissions for Primary School</h2>
          <p>
            Are you looking for the best educational start for your child? Admissions for our Primary School are open. We invite parents to explore our Chekkapalli campus, meet our dedicated teachers, and learn more about our curriculum. Please visit the <a href="/admissions" className="text-primary font-medium hover:underline">Admissions page</a> to submit an enquiry or contact us today.
          </p>
        </article>
      </section>

      <LocationSection />
      <SiteFooter />
    </div>
  );
}
