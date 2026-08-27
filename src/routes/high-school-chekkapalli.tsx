import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LocationSection } from "@/components/location-section";

export const Route = createFileRoute("/high-school-chekkapalli")({
  head: () => ({
    meta: [
      { title: "High School in Chekkapalli | Chaitanya EM School" },
      {
        name: "description",
        content:
          "Chaitanya EM School is the premier High School in Chekkapalli. We prepare students for board exams and future careers with expert faculty and an IIT Foundation program.",
      },
      { property: "og:title", content: "High School in Chekkapalli | Chaitanya EM School" },
      {
        property: "og:description",
        content:
          "Chaitanya EM School is the premier High School in Chekkapalli. We prepare students for board exams and future careers with expert faculty and an IIT Foundation program.",
      },
      { property: "og:url", content: "https://www.chaitanyaemschool.com/high-school-chekkapalli" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaitanyaemschool.com/high-school-chekkapalli" }
    ]
  }),
  component: HighSchoolPage,
});

function HighSchoolPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-[calc(110px_+_env(safe-area-inset-top))] pb-12 md:px-10 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Advanced Academics
        </div>
        <h1 className="mt-3 text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[48px] md:text-[64px] lg:text-[76px]">
          High School
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>
            in Chekkapalli.
          </span>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]">
          Preparing students for the challenges of tomorrow. Our High School program in Chekkapalli combines rigorous academics, expert faculty, and specialized foundation programs to ensure success in board exams and beyond.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10 lg:px-16">
        <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-h2:text-[28px] prose-h2:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed">
          <h2>Excellence in High School Education</h2>
          <p>
            When students reach high school, the academic focus shifts toward deep subject mastery, analytical thinking, and exam preparation. As the premier High School in Chekkapalli, Chaitanya EM School is committed to providing an environment that challenges students to reach their highest potential.
          </p>

          <h3>Expert Faculty & Board Exam Preparation</h3>
          <p>
            Our experienced teachers specialize in high school subjects, providing personalized attention and structured guidance. We employ comprehensive revision strategies, mock tests, and regular assessments to ensure every student is fully prepared and confident for their state board examinations.
          </p>

          <h3>IIT Foundation Program</h3>
          <p>
            For students aspiring to pursue careers in engineering and medicine, early preparation is key. Our specialized IIT Foundation program introduces advanced concepts in Mathematics, Physics, and Chemistry. This rigorous training gives our Chekkapalli students a significant advantage in competitive entrance exams.
          </p>

          <h3>Science Labs and Practical Learning</h3>
          <p>
            Theoretical knowledge must be backed by practical application. Our well-equipped science laboratories provide high school students with hands-on experience in conducting experiments, fostering a deeper understanding of scientific principles and encouraging a spirit of inquiry.
          </p>

          <h2>High School Admissions</h2>
          <p>
            Secure a bright future for your child at Chaitanya EM School. We are welcoming admissions for our High School classes. Parents and prospective students in Chekkapalli are encouraged to visit our campus, interact with our faculty, and discover our academic programs. Visit our <a href="/admissions" className="text-primary font-medium hover:underline">Admissions page</a> for more details on enrollment.
          </p>
        </article>
      </section>

      <LocationSection />
      <SiteFooter />
    </div>
  );
}
