import { f as getStage, r as Route$1 } from "./router-TINUFHpO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { at as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./site-header-CtjUfMZJ.mjs";
import { t as useAcademicStage } from "./use-academic-stages-DDUJbgcp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/academics_._stage-B_GdmXCX.js
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
function StagePage() {
	const { stage: slug } = Route$1.useParams();
	const stage = useAcademicStage(slug) ?? getStage(slug);
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			duration: .4,
			ease
		},
		className: "min-h-screen overflow-x-clip bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 pb-10 pt-28 md:px-10 md:pt-36 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							ease
						},
						className: "text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground",
						children: ["Academics · ", stage.tag]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .08,
							ease
						},
						className: "mt-3 max-w-[18ch] text-[36px] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-[44px] md:text-[64px] lg:text-[76px]",
						children: [
							stage.detail.headline[0],
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontFamily: "var(--font-display)",
									fontWeight: 600
								},
								children: stage.detail.headline[1]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .16,
							ease
						},
						className: "mt-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]",
						children: stage.detail.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 26,
							scale: reduce ? 1 : 1.02
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: {
							duration: .8,
							delay: .2,
							ease
						},
						className: "mt-10 overflow-hidden rounded-[26px] ring-1 ring-black/5 md:rounded-[32px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							loading: "lazy",
							decoding: "async",
							src: stage.detail.heroImage,
							alt: `${stage.tag} students at Chaitanya EM School`,
							className: "aspect-[16/10] w-full object-cover md:aspect-[21/9]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium ring-1 ring-black/5",
							children: stage.grades
						}), stage.preview.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium ring-1 ring-black/5",
							children: f
						}, f))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "Overview",
				title: "What this stage is about",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground md:text-[17px]",
					children: stage.detail.overview
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "Teaching approach",
				title: "How we teach it",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: stage.detail.approach.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .3
						},
						transition: {
							duration: .5,
							delay: i * .08,
							ease
						},
						className: "rounded-[22px] bg-white p-6 ring-1 ring-black/5 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.35)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] font-medium uppercase tracking-[0.26em] text-muted-foreground",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-[19px] leading-tight tracking-[-0.02em]",
								style: {
									fontFamily: "var(--font-display)",
									fontWeight: 600
								},
								children: a.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-[14px] leading-relaxed text-muted-foreground",
								children: a.body
							})
						]
					}, a.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "Student development",
				title: "What students carry forward",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: stage.detail.development.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -12
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: {
								once: true,
								amount: .4
							},
							transition: {
								duration: .45,
								delay: i * .06,
								ease
							},
							className: "flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "mt-1.5 h-2 w-2 shrink-0 rounded-full",
								style: { background: "oklch(0.62 0.18 45)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[14px] leading-relaxed text-foreground/85 md:text-[15px]",
								children: d
							})]
						}, d))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4",
						children: stage.detail.gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: g,
							alt: "Chaitanya " + stage.tag + " school life",
							loading: "lazy",
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								amount: .3
							},
							transition: {
								duration: .6,
								delay: i * .1,
								ease
							},
							className: `w-full rounded-[20px] object-cover ring-1 ring-black/5 ${i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] mt-8"}`
						}, g + i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32 lg:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground",
					children: "Continue exploring"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/academics",
						className: "group inline-flex w-full max-w-[420px] items-center gap-4 rounded-full px-6 py-4 text-white shadow-[0_28px_60px_-28px_rgba(15,23,60,0.7)] ring-1 ring-white/15 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_36px_72px_-28px_rgba(15,23,60,0.75)] sm:w-auto sm:gap-5 sm:px-9 sm:py-5",
						style: { background: "linear-gradient(135deg,oklch(0.42 0.14 258),oklch(0.24 0.09 258))" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-medium uppercase tracking-[0.28em] text-white/65",
								children: "Every stage, in one place"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-[18px] font-semibold tracking-[-0.02em] sm:text-[20px]",
								children: "Explore Academics"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 transition-transform duration-500 ease-out group-hover:translate-x-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "h-5 w-5",
								strokeWidth: 2.2
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Section({ eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16 lg:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 16
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				amount: .4
			},
			transition: {
				duration: .5,
				ease
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground",
				children: eyebrow
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-[26px] font-semibold leading-tight tracking-[-0.03em] md:text-[38px]",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-7",
			children
		})]
	});
}
//#endregion
export { StagePage as component };
