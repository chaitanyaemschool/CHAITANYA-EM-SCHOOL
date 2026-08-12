import { o as useContent } from "./router-TINUFHpO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { R as FlaskConical, W as Cpu, b as Palette, et as Bus, i as Trophy } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./site-header-CtjUfMZJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/facilities-C9t0aoyM.js
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
var ICONS = [
	Cpu,
	FlaskConical,
	Trophy,
	Palette,
	Bus
];
function FacilitiesPage() {
	const items = (useContent("facilities").items ?? []).filter((f) => f && (f.title || f.image));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 pt-28 xl:max-w-7xl pb-8 md:px-10 md:pt-36 md:pb-12 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground",
						children: "Campus"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 text-[clamp(2.1rem,10.5vw,2.75rem)] font-semibold leading-[1.02] sm:text-[44px] tracking-[-0.04em] md:text-[72px] lg:text-[88px]",
						children: [
							"Every space,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-editorial",
								style: { fontWeight: 400 },
								children: "built for a child."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground md:text-[16px]",
						children: "Facilities that feel modern, but never intimidating — designed around how children actually learn and play."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-0",
					style: { background: "radial-gradient(60% 50% at 12% 8%, oklch(0.93 0.05 78 / 0.55) 0%, transparent 60%), radial-gradient(55% 45% at 88% 40%, oklch(0.90 0.05 258 / 0.4) 0%, transparent 62%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-6xl px-5 md:px-8 lg:px-16 xl:max-w-7xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7",
						children: items.map((f, i) => {
							const Icon = ICONS[i % ICONS.length];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
								initial: {
									opacity: 0,
									y: 28
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									amount: .2
								},
								transition: {
									duration: .7,
									ease,
									delay: Math.min(i * .07, .28)
								},
								whileHover: {
									y: -8,
									rotateX: 2.4,
									rotateY: i % 2 === 0 ? -2.4 : 2.4
								},
								style: {
									transformPerspective: 1100,
									willChange: "transform"
								},
								className: "group relative flex flex-col overflow-hidden rounded-[26px] border border-white/60 bg-white/55 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.32)] backdrop-blur-xl transition-shadow duration-500 ease-out hover:shadow-[0_38px_72px_-30px_rgba(15,23,42,0.45)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute inset-0 rounded-[26px] p-px opacity-70 transition-opacity duration-500 group-hover:opacity-100",
										style: {
											background: "linear-gradient(140deg, oklch(0.85 0.09 78 / 0.9) 0%, rgba(255,255,255,0.55) 38%, oklch(0.72 0.09 258 / 0.65) 100%)",
											WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
											WebkitMaskComposite: "xor",
											maskComposite: "exclude"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute -inset-6 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
										style: { background: "radial-gradient(50% 50% at 50% 40%, oklch(0.85 0.08 78 / 0.45) 0%, transparent 70%)" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute inset-0 opacity-70",
										style: { background: "linear-gradient(150deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.18) 42%, rgba(255,255,255,0) 100%)" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative m-1.5 h-44 overflow-hidden rounded-[20px] bg-muted sm:h-48 lg:h-44",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: f.image,
												alt: f.title ?? "",
												loading: "lazy",
												decoding: "async",
												className: "h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-[rgba(15,23,42,0.42)] shadow-[0_8px_20px_-10px_rgba(15,23,42,0.6)] backdrop-blur-md",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "h-[18px] w-[18px] text-white drop-shadow",
													strokeWidth: 1.7
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex flex-1 flex-col gap-2 px-5 pb-6 pt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] font-semibold uppercase tracking-[0.3em] text-muted-foreground",
												children: f.tag
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-[21px] font-semibold leading-tight tracking-[-0.025em] text-foreground",
												children: f.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13.5px] leading-relaxed text-muted-foreground",
												children: f.body
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/50 transition-colors duration-500 group-hover:ring-white/80"
									})
								]
							}, `${f.title ?? "facility"}-${i}`);
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { FacilitiesPage as component };
