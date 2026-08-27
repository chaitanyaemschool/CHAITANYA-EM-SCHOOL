import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useTransform, o as useMotionValue, r as useReducedMotion, u as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { at as ArrowRight, h as Plus } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./site-header-DyIaj2XA.mjs";
import { n as useAcademicStages } from "./use-academic-stages-CIdgs_fQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/academics-DMtwAbcC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
function AcademicsPage() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const stages = useAcademicStages();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-clip bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 pb-8 pt-[calc(110px_+_env(safe-area-inset-top))] md:px-10 md:pt-[calc(140px_+_env(safe-area-inset-top))] lg:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
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
					children: "Academics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 18
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .06,
						ease
					},
					className: "mt-3 max-w-[16ch] text-[40px] font-semibold leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[72px] lg:text-[88px]",
					children: [
						"A journey from",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-editorial",
							style: { fontWeight: 400 },
							children: "first words to first ranks."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-col gap-5",
					children: stages.map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageCard, {
						stage,
						index: i,
						open: open === stage.slug,
						onToggle: () => setOpen(open === stage.slug ? null : stage.slug)
					}, stage.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function StageCard({ stage, index, open, onToggle }) {
	const reduce = useReducedMotion();
	const dark = stage.tone === "dark";
	const x = useMotionValue(0);
	const rotate = useTransform(x, [
		-260,
		0,
		260
	], [
		-4.5,
		0,
		4.5
	]);
	const lift = useTransform(x, [
		-260,
		0,
		260
	], [
		-10,
		0,
		-10
	]);
	const shadowBlur = useTransform(x, [
		-260,
		0,
		260
	], [
		96,
		54,
		96
	]);
	const boxShadow = useTransform(shadowBlur, (b) => `0 ${Math.round(b * .55)}px ${Math.round(b)}px -34px rgba(15,23,42,0.45)`);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const draggedRef = (0, import_react.useRef)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 26
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
			duration: .55,
			delay: index * .1,
			ease
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			drag: reduce ? false : "x",
			dragDirectionLock: true,
			dragConstraints: {
				left: 0,
				right: 0
			},
			dragElastic: .16,
			dragTransition: {
				bounceStiffness: 260,
				bounceDamping: 32
			},
			onDragStart: () => {
				draggedRef.current = true;
				setDragging(true);
			},
			onDragEnd: () => {
				setDragging(false);
				window.setTimeout(() => {
					draggedRef.current = false;
				}, 60);
			},
			whileHover: reduce || dragging ? void 0 : { scale: 1.006 },
			animate: { scale: dragging ? 1.018 : 1 },
			transition: {
				type: "spring",
				stiffness: 240,
				damping: 28,
				mass: .5
			},
			className: `group relative touch-pan-y select-none overflow-hidden rounded-[28px] ring-1 ring-black/5 md:rounded-[32px] ${stage.fg} ${reduce ? "" : dragging ? "cursor-grabbing" : "cursor-grab"}`,
			style: {
				background: stage.bg,
				x,
				rotate: reduce ? 0 : rotate,
				y: reduce ? 0 : lift,
				boxShadow: reduce ? open ? "0 40px 80px -34px rgba(15,23,42,0.45)" : "0 26px 54px -30px rgba(15,23,42,0.32)" : boxShadow,
				willChange: "transform"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					if (draggedRef.current) return;
					onToggle();
				},
				"aria-expanded": open,
				className: "block w-full cursor-[inherit] p-6 text-left md:p-12 lg:p-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-medium uppercase tracking-[0.28em] opacity-70",
							children: [
								"0",
								index + 1,
								" · ",
								stage.tag
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 transition-all duration-300 ${dark ? "bg-white/15 ring-white/25" : "bg-white/70 ring-black/10"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: `h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`,
								strokeWidth: 2.4
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[34px] md:text-[52px] lg:text-[64px]",
						children: stage.grades
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2.5 text-[17px] leading-snug opacity-80 md:text-[23px] lg:text-[26px]",
						style: {
							fontFamily: "var(--font-display)",
							fontWeight: 600
						},
						children: stage.line
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-8 inline-block md:mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnMore, {
							label: open ? "Close preview" : "Learn more",
							dark
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						height: 0,
						opacity: 0
					},
					animate: {
						height: "auto",
						opacity: 1
					},
					exit: {
						height: 0,
						opacity: 0
					},
					transition: {
						duration: .45,
						ease
					},
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mx-6 mb-6 rounded-[22px] p-5 md:mx-12 md:mb-12 md:p-8 lg:mx-14 ${dark ? "bg-white/10 ring-1 ring-white/15" : "bg-white/70 ring-1 ring-black/5"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-9",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									scale: 1.04
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .7,
									ease
								},
								className: "overflow-hidden rounded-[18px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: stage.preview.image,
									alt: `${stage.tag} learning at Chaitanya EM High School`,
									loading: "lazy",
									className: "aspect-[4/3] w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-[22px] leading-[1.2] tracking-[-0.02em] md:text-[28px]",
									style: {
										fontFamily: "var(--font-display)",
										fontWeight: 600
									},
									children: stage.preview.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[14px] leading-relaxed opacity-80 md:text-[15px]",
									children: stage.preview.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 flex flex-wrap gap-2",
									children: stage.preview.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: `rounded-full px-3 py-1.5 text-[11px] font-medium tracking-tight ${dark ? "bg-white/15 text-white" : "bg-white text-foreground ring-1 ring-black/5"}`,
										children: f
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/academics/$stage",
									params: { stage: stage.slug },
									className: "mt-7 inline-block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnMore, {
										label: stage.preview.cta,
										dark,
										solid: true
									})
								})
							] })]
						})
					})
				}, "preview")
			})]
		})
	});
}
/** Premium pill with a gliding arrow and a soft highlight sweep. */
function LearnMore({ label, dark, solid }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-tight ring-1 transition-all duration-300 ease-out hover:gap-3 hover:shadow-[0_14px_30px_-14px_rgba(15,23,42,0.55)] active:scale-[0.97] md:text-[13px] ${solid ? dark ? "bg-white text-[oklch(0.28_0.1_260)] ring-white/60" : "bg-[oklch(0.36_0.13_258)] text-white ring-black/10" : dark ? "bg-white/15 text-white ring-white/25 hover:bg-white/25" : "bg-white/80 text-foreground ring-black/10 hover:bg-white"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-white/25 transition-all duration-500 ease-out group-hover:left-[130%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
				className: "relative h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5",
				strokeWidth: 2.3
			})
		]
	});
}
//#endregion
export { LearnMore, AcademicsPage as component };
