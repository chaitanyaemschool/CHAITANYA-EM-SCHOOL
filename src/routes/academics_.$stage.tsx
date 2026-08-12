import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getStage } from "@/lib/academics-data";
import { useAcademicStage } from "@/lib/use-academic-stages";

export const Route = createFileRoute("/academics_/$stage")({
  loader: ({ params }) => {
    const stage = getStage(params.stage);
    if (!stage) throw notFound();
    return { slug: stage.slug };
  },
  head: ({ params }) => {
    const stage = getStage(params.stage);
    const title = stage
      ? `${stage.tag} Programme — Chaitanya EM School`
      : "Academics — Chaitanya EM School";
    const description = stage?.detail.intro ?? "Academic programmes at Chaitanya EM School.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: StagePage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function StagePage() {
  const { stage: slug } = Route.useParams();
  const stage = useAcademicStage(slug) ?? getStage(slug)!;
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease }}
      className="min-h-screen overflow-x-clip bg-background text-foreground"
    >
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-28 md:px-10 md:pt-36 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground"
        >
          Academics · {stage.tag}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="mt-3 max-w-[18ch] text-[36px] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-[44px] md:text-[64px] lg:text-[76px]"
        >
          {stage.detail.headline[0]}
          <br />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            {stage.detail.headline[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease }}
          className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]"
        >
          {stage.detail.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: reduce ? 1 : 1.02 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-10 overflow-hidden rounded-[26px] ring-1 ring-black/5 md:rounded-[32px]"
        >
          <img
            loading="lazy"
            decoding="async"
            src={stage.detail.heroImage}
            alt={`${stage.tag} students at Chaitanya EM School`}
            className="aspect-[16/10] w-full object-contain md:object-cover md:aspect-[21/9]"
          />
        </motion.div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium ring-1 ring-black/5">
            {stage.grades}
          </span>
          {stage.preview.focus.map((f) => (
            <span
              key={f}
              className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium ring-1 ring-black/5"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Overview */}
      <Section eyebrow="Overview" title="What this stage is about">
        <p className="max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]">
          {stage.detail.overview}
        </p>
      </Section>

      {/* Teaching approach */}
      <Section eyebrow="Teaching approach" title="How we teach it">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stage.detail.approach.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="rounded-[22px] bg-white p-6 ring-1 ring-black/5 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.35)]"
            >
              <div className="text-[10px] font-medium uppercase tracking-[0.26em] text-muted-foreground">
                0{i + 1}
              </div>
              <h3
                className="mt-3 text-[19px] leading-tight tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {a.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Student development + gallery */}
      <Section eyebrow="Student development" title="What students carry forward">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <ul className="space-y-3">
            {stage.detail.development.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
                className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-black/5"
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "oklch(0.62 0.18 45)" }}
                />
                <span className="text-[14px] leading-relaxed text-foreground/85 md:text-[15px]">
                  {d}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4">
            {stage.detail.gallery.map((g, i) => (
              <motion.img
                key={g + i}
                src={g}
                alt={"Chaitanya " + stage.tag + " school life"}
                loading="lazy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className={`w-full rounded-[20px] object-contain md:object-cover ring-1 ring-black/5 ${
                  i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] mt-8"
                }`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Next stages */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Continue exploring
        </div>
        {/* One premium CTA into the full academics journey — every breakpoint */}
        <div className="mt-6">
          <Link
            to="/academics"
            className="group inline-flex w-full max-w-[420px] items-center gap-4 rounded-full px-6 py-4 text-white shadow-[0_28px_60px_-28px_rgba(15,23,60,0.7)] ring-1 ring-white/15 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_36px_72px_-28px_rgba(15,23,60,0.75)] sm:w-auto sm:gap-5 sm:px-9 sm:py-5"
            style={{
              background: "linear-gradient(135deg,oklch(0.42 0.14 258),oklch(0.24 0.09 258))",
            }}
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-white/65">
                Every stage, in one place
              </span>
              <span className="mt-1 block text-[18px] font-semibold tracking-[-0.02em] sm:text-[20px]">
                Explore Academics
              </span>
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 transition-transform duration-500 ease-out group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
            </span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </motion.div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          {eyebrow}
        </div>
        <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-0.03em] md:text-[38px]">
          {title}
        </h2>
      </motion.div>
      <div className="mt-7">{children}</div>
    </section>
  );
}
