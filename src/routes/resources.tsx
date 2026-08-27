import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Educational Resources & Blog | Chaitanya EM School" },
      {
        name: "description",
        content:
          "Read articles, resources, and guides for parents and students in Chekkapalli from the educators at Chaitanya EM School.",
      },
      { property: "og:title", content: "Educational Resources & Blog | Chaitanya EM School" },
      {
        property: "og:description",
        content:
          "Read articles, resources, and guides for parents and students in Chekkapalli from the educators at Chaitanya EM School.",
      },
      { property: "og:url", content: "https://www.chaitanyaemschool.com/resources" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaitanyaemschool.com/resources" }
    ]
  }),
  component: ResourcesPage,
});

const ARTICLES = [
  {
    title: "How to Choose the Right English Medium School in Chekkapalli",
    slug: "/how-to-choose-the-right-english-medium-school-in-chekkapalli",
    description: "A comprehensive guide for parents evaluating schools, curriculum, and facilities for their children.",
    date: "August 15, 2026",
  },
  {
    title: "The Importance of Activity-Based Learning in Early Education",
    slug: "/importance-of-activity-based-learning",
    description: "Discover why hands-on activities and play are essential for cognitive development in nursery and primary students.",
    date: "July 22, 2026",
  },
];

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-[calc(110px_+_env(safe-area-inset-top))] pb-12 md:px-10 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Blog & Guides
        </div>
        <h1 className="mt-3 text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[48px] md:text-[64px] lg:text-[76px]">
          Educational
          <br />
          <span className="font-editorial" style={{ fontWeight: 400 }}>
            Resources.
          </span>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]">
          Insights, advice, and updates from the educators at Chaitanya EM School to help parents navigate their child's educational journey.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to={article.slug as any}
              className="group flex flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {article.date}
                </div>
                <h2 className="mt-3 text-[22px] font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {article.description}
                </p>
                <div className="mt-6 font-medium text-[13px] text-primary">Read article &rarr;</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
