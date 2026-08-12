import { o as __toESM } from "../_runtime.mjs";
import { _ as hero_classroom_full_png_asset_default, b as leader_nagaraju_png_asset_default, g as hero_assembly_best_png_asset_default, o as useContent, s as useIsMobile, v as lead_school_motto_jpeg_asset_default, y as leader_nagababu_png_asset_default } from "./router-TINUFHpO.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useTransform, i as useSpring, n as animate, o as useMotionValue, r as useReducedMotion, s as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { it as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter } from "./site-header-CtjUfMZJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CvKUjCrS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
var CREAM = "#fbf7f0";
var NAVY = "oklch(0.35 0.13 258)";
var NAVY_DEEP = "oklch(0.28 0.11 258)";
var EMBER = "oklch(0.62 0.17 42)";
function Reveal({ children, delay = 0, y = 28, className }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: reduce ? { opacity: 0 } : {
			opacity: 0,
			y,
			filter: "blur(6px)"
		},
		whileInView: reduce ? { opacity: 1 } : {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-10% 0px"
		},
		transition: {
			duration: .85,
			ease,
			delay
		},
		className,
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.32em] text-[color:var(--ember)] md:text-[11px]",
		style: { ["--ember"]: EMBER },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "h-[1.5px] w-8 bg-[color:var(--ember)]",
			style: { ["--ember"]: EMBER }
		}), children]
	});
}
function Editorial({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: `font-editorial leading-[0.95] tracking-[-0.02em] ${className ?? ""}`,
		style: { color: NAVY_DEEP },
		children
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y1 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
	const y2 = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);
	const c = useContent("about_hero");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "about-hero",
		className: "relative overflow-hidden px-6 pb-20 pt-28 md:px-10 md:pb-24 md:pt-32 lg:px-16 lg:pt-36",
		style: { background: `radial-gradient(120% 80% at 8% 8%, #fef3e2 0%, transparent 55%), radial-gradient(110% 80% at 100% 100%, #eef2ff 0%, transparent 55%), linear-gradient(160deg, ${CREAM} 0%, #f5efe4 100%)` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 opacity-[0.09]",
			style: {
				backgroundImage: "radial-gradient(rgba(15,23,48,0.28) 1px, transparent 1px)",
				backgroundSize: "22px 22px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: c.eyebrow }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: reduce ? { opacity: 0 } : { y: "110%" },
						animate: reduce ? { opacity: 1 } : { y: 0 },
						transition: {
							duration: 1,
							ease,
							delay: .2
						},
						className: "font-editorial text-[clamp(2.6rem,8.2vw,5.5rem)] leading-[0.92] tracking-[-0.025em]",
						style: { color: NAVY_DEEP },
						children: c.line1
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: reduce ? { opacity: 0 } : { y: "110%" },
						animate: reduce ? { opacity: 1 } : { y: 0 },
						transition: {
							duration: 1,
							ease,
							delay: .35
						},
						className: "font-editorial text-[clamp(2.6rem,8.2vw,5.5rem)] leading-[0.92] tracking-[-0.025em]",
						style: { color: NAVY_DEEP },
						children: c.line2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: reduce ? { opacity: 0 } : { y: "110%" },
						animate: reduce ? { opacity: 1 } : { y: 0 },
						transition: {
							duration: 1,
							ease,
							delay: .5
						},
						className: "font-editorial text-[clamp(2.6rem,8.2vw,5.5rem)] leading-[0.92] tracking-[-0.025em]",
						style: { color: EMBER },
						children: c.line3
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						ease,
						delay: .85
					},
					className: "mt-8 max-w-[44ch] text-[15px] leading-[1.7] text-slate-700 md:text-[17px]",
					children: c.paragraph
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						delay: 1.2,
						duration: .9
					},
					className: "mt-12 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						animate: reduce ? {} : { scaleX: [
							.2,
							1,
							.2
						] },
						transition: {
							duration: 1.8,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "block h-[2px] w-16 origin-left",
						style: { background: EMBER }
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[68vw] max-h-[560px] min-h-[380px] md:h-[560px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: reduce ? { opacity: 0 } : {
							opacity: 0,
							y: 40,
							scale: .98
						},
						animate: reduce ? { opacity: 1 } : {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: {
							duration: 1.1,
							ease,
							delay: .35
						},
						style: { y: y1 },
						className: "absolute right-0 top-0 h-[86%] w-[88%] overflow-hidden rounded-[28px] ring-1 ring-slate-200",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.imageMain || hero_assembly_best_png_asset_default.url,
							alt: "Chaitanya EM School students in assembly",
							className: "h-full w-full object-cover",
							loading: "eager",
							style: { boxShadow: "0 40px 80px -30px rgba(15,23,48,0.35)" }
						})
					}),
					(c.imageSmall, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: reduce ? { opacity: 0 } : {
							opacity: 0,
							y: 30,
							scale: .94
						},
						animate: reduce ? { opacity: 1 } : {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: {
							duration: 1.1,
							ease,
							delay: .7
						},
						style: { y: y2 },
						className: "absolute -left-2 bottom-0 w-[52%] overflow-hidden rounded-[22px] ring-1 ring-slate-200 md:-left-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.imageSmall || "/assets/student-reading-Bk6PonIN.jpg",
							alt: "Student reading",
							className: "aspect-[4/5] h-full w-full object-cover",
							loading: "lazy",
							style: { boxShadow: "0 30px 60px -25px rgba(15,23,48,0.4)" }
						})
					})),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.1,
							duration: .9,
							ease
						},
						className: "absolute -bottom-4 right-2 flex items-center gap-3 rounded-full bg-white/95 px-5 py-2.5 backdrop-blur md:right-6",
						style: {
							boxShadow: "0 20px 40px -18px rgba(15,23,48,0.35)",
							border: "1px solid rgba(203,210,223,0.9)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500",
								children: c.badgeLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "h-3 w-px",
								style: { background: "rgba(198,93,44,0.5)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-editorial text-[17px] leading-none",
								style: { color: NAVY_DEEP },
								children: c.badgeValue
							})
						]
					})
				]
			})]
		})]
	});
}
function Beginning() {
	const c = useContent("about_beginning");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16",
		style: { background: `linear-gradient(180deg, #f5efe4 0%, ${CREAM} 100%)` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						"aria-hidden": true,
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: .07,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-10% 0px"
						},
						transition: {
							duration: 1.4,
							ease
						},
						className: "font-editorial pointer-events-none absolute -top-20 left-0 whitespace-nowrap text-[clamp(6rem,26vw,14rem)] leading-[1] tracking-[-0.05em] md:-top-24 md:text-[clamp(7rem,12vw,10.5rem)]",
						style: { color: NAVY_DEEP },
						children: c.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: c.eyebrow }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Editorial, {
							className: "mt-6 text-[clamp(2rem,5.5vw,3.5rem)]",
							children: [
								c.title,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									style: { color: EMBER },
									children: c.titleEm
								}),
								"."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-[52ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]",
							children: c.para1
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-[52ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]",
							children: c.para2
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative md:pr-10 md:pt-8 md:pb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[28px] ring-1 ring-slate-200",
							style: { boxShadow: "0 40px 80px -30px rgba(15,23,48,0.3)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.image,
								alt: "An early classroom at Chaitanya",
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-6 -left-4 hidden rounded-2xl bg-white/95 px-5 py-4 ring-1 ring-slate-200 backdrop-blur sm:block",
							style: { boxShadow: "0 24px 40px -20px rgba(15,23,48,0.3)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500",
								children: c.badgeLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-editorial mt-1 text-[28px] leading-none",
								style: { color: NAVY_DEEP },
								children: [
									c.badgeTitle,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										style: { color: EMBER },
										children: c.badgeEm
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-baseline gap-3 sm:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500",
								children: c.badgeLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-editorial text-[20px] leading-none",
								style: { color: NAVY_DEEP },
								children: [
									c.badgeTitle,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										style: { color: EMBER },
										children: c.badgeEm
									})
								]
							})]
						})
					]
				})
			})]
		})
	});
}
var MILESTONES = [
	{
		year: "2015",
		title: "A small beginning.",
		body: "The school opens its doors in Chekkapalli with a handful of families and a single classroom."
	},
	{
		year: "The Early Years",
		title: "Building a foundation.",
		body: "Creating a safe and nurturing environment for young learners — routines, kindness and curiosity first."
	},
	{
		year: "The Journey Forward",
		title: "Growing with purpose.",
		body: "Expanding classrooms and strengthening academic foundations, one grade at a time."
	},
	{
		year: "Today",
		title: "Nursery to Grade 10.",
		body: "A growing community of curious, confident learners — and the families who make it home."
	}
];
function MeshGrid() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -inset-x-8 -inset-y-8",
				animate: reduce ? void 0 : { backgroundPosition: ["0px 0px", "72px 72px"] },
				transition: {
					duration: 60,
					repeat: Infinity,
					ease: "linear"
				},
				style: {
					backgroundImage: "linear-gradient(to right, rgba(23,37,84,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,37,84,0.14) 1px, transparent 1px)",
					backgroundSize: "72px 72px",
					maskImage: "radial-gradient(130% 85% at 50% 30%, #000 0%, rgba(0,0,0,0.6) 58%, transparent 94%)",
					WebkitMaskImage: "radial-gradient(130% 85% at 50% 30%, #000 0%, rgba(0,0,0,0.6) 58%, transparent 94%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					backgroundImage: "linear-gradient(to right, rgba(23,37,84,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,37,84,0.07) 1px, transparent 1px)",
					backgroundSize: "18px 18px",
					maskImage: "radial-gradient(85% 58% at 50% 42%, #000 0%, transparent 82%)",
					WebkitMaskImage: "radial-gradient(85% 58% at 50% 42%, #000 0%, transparent 82%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					backgroundImage: "radial-gradient(circle, rgba(198,93,44,0.30) 1.1px, transparent 1.2px)",
					backgroundSize: "144px 144px",
					backgroundPosition: "0 0",
					maskImage: "radial-gradient(95% 65% at 50% 38%, #000 0%, transparent 85%)",
					WebkitMaskImage: "radial-gradient(95% 65% at 50% 38%, #000 0%, transparent 85%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -inset-x-24 -inset-y-28",
				animate: reduce ? void 0 : {
					x: [
						0,
						30,
						0
					],
					y: [
						0,
						-20,
						0
					],
					opacity: [
						.62,
						.85,
						.62
					]
				},
				transition: {
					duration: 30,
					repeat: Infinity,
					ease: "easeInOut"
				},
				style: { background: "radial-gradient(40% 32% at 18% 22%, rgba(198,93,44,0.14) 0%, transparent 70%), radial-gradient(44% 36% at 82% 70%, rgba(38,63,140,0.13) 0%, transparent 72%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(110% 75% at 50% 45%, transparent 55%, rgba(246,239,225,0.85) 100%)" }
			})
		]
	});
}
function TimelineItem({ m, i }) {
	const right = i % 2 === 1;
	const itemRef = (0, import_react.useRef)(null);
	const active = useInView(itemRef, { margin: "-45% 0px -35% 0px" });
	const reduce = useReducedMotion();
	const isMobile = useIsMobile();
	const { scrollYProgress } = useScroll({
		target: itemRef,
		offset: ["start 92%", "start 52%"]
	});
	const p = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 26,
		mass: .4
	});
	const opacity = useTransform(p, [0, 1], [0, 1]);
	const x = useTransform(p, [0, 1], [right ? 56 : -56, 0]);
	const y = useTransform(p, [0, 1], [40, 0]);
	const scale = useTransform(p, [0, 1], [.965, 1]);
	const dotScale = useTransform(p, [.15, 1], [.35, 1]);
	const scrollLinked = !reduce && !isMobile;
	const motionStyle = scrollLinked ? {
		opacity,
		x,
		y,
		scale,
		willChange: "transform, opacity"
	} : { opacity: 1 };
	const revealProps = !reduce && isMobile ? {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-12% 0px -10% 0px"
		},
		transition: {
			duration: .55,
			ease
		}
	} : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		ref: itemRef,
		className: "relative md:grid md:grid-cols-2 md:gap-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-6 top-3 z-[2] -translate-x-1/2 md:left-1/2",
			children: [!isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				className: "absolute left-1/2 top-1/2 block h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
				animate: {
					scale: active ? 2.6 : 1,
					opacity: active ? .18 : 0
				},
				transition: {
					duration: .6,
					ease
				},
				style: { background: EMBER }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					scale: scrollLinked ? dotScale : 1,
					background: active ? EMBER : "#cbd2df",
					["--cream"]: CREAM,
					transition: "background 500ms ease"
				},
				className: "relative h-3.5 w-3.5 rounded-full ring-4 ring-[color:var(--cream)]"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			...revealProps,
			style: {
				...motionStyle,
				background: active ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.9)",
				boxShadow: active ? "0 40px 80px -40px rgba(15,23,48,0.42), 0 6px 18px -12px rgba(15,23,48,0.18)" : "0 22px 48px -34px rgba(15,23,48,0.24)",
				border: `1px solid ${active ? "rgba(198,93,44,0.32)" : "rgba(203,210,223,0.7)"}`,
				transition: "background 600ms ease, box-shadow 600ms ease, border-color 600ms ease"
			},
			className: `ml-14 rounded-[22px] p-6 md:ml-0 md:p-8 md:backdrop-blur ${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-editorial text-[clamp(1.75rem,4vw,2.6rem)] leading-none",
					style: { color: NAVY_DEEP },
					children: m.year
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-[11px] font-bold uppercase tracking-[0.28em]",
					style: { color: EMBER },
					children: m.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[14.5px] leading-[1.7] text-slate-700 md:text-[15.5px]",
					children: m.body
				})
			]
		})]
	});
}
function Timeline() {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const isMobile = useIsMobile();
	const c = useContent("about_timeline");
	const milestones = Array.isArray(c.milestones) && c.milestones.length ? c.milestones : MILESTONES;
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 72%", "end 45%"]
	});
	const fill = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 30,
		mass: .4
	});
	const height = useTransform(fill, [0, 1], ["0%", "100%"]);
	const headTop = useTransform(fill, [0, 1], ["0%", "100%"]);
	const headOpacity = useTransform(fill, [
		0,
		.04,
		.97,
		1
	], [
		0,
		1,
		1,
		0
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16",
		style: { background: `radial-gradient(70% 50% at 90% 10%, #fdf1dd 0%, transparent 60%), linear-gradient(180deg, ${CREAM} 0%, #f6efe1 100%)` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: c.eyebrow }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Editorial, {
						className: "mt-6 text-[clamp(2rem,5.5vw,3.75rem)]",
						children: [
							c.title,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								style: { color: EMBER },
								children: c.titleEm
							}),
							" ",
							c.titleTail
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "relative z-[1] mx-auto mt-16 max-w-4xl md:mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-6 top-0 h-full w-px bg-slate-300/70 md:left-1/2 md:-translate-x-1/2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						"aria-hidden": true,
						style: {
							height,
							willChange: "height"
						},
						className: "absolute left-6 top-0 w-px overflow-hidden md:left-1/2 md:-translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full w-full",
							style: { background: `linear-gradient(180deg, ${EMBER} 0%, ${NAVY} 100%)` }
						})
					}),
					!reduce && !isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						"aria-hidden": true,
						style: {
							top: headTop,
							opacity: headOpacity
						},
						className: "absolute left-6 z-[3] -translate-x-1/2 -translate-y-1/2 md:left-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block h-2.5 w-2.5 rounded-full",
							style: {
								background: EMBER,
								boxShadow: `0 0 0 5px rgba(198,93,44,0.14), 0 0 18px 3px rgba(198,93,44,0.35)`
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-16 md:space-y-24",
						children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineItem, {
							m,
							i
						}, m.year))
					})
				]
			})
		]
	});
}
var LEADERS = [
	{
		name: "Nagaraju",
		role: "Managing Director",
		tagline: "Building the vision behind every new beginning.",
		photo: leader_nagaraju_png_asset_default.url
	},
	{
		name: "Nagababu",
		role: "Director",
		tagline: "Guiding the school forward with purpose.",
		photo: leader_nagababu_png_asset_default.url
	},
	{
		name: "Kesava",
		role: "Principal",
		tagline: "Turning everyday learning into lasting growth.",
		photo: ""
	}
];
function PeopleCard({ person, index }) {
	const reduce = useReducedMotion();
	const cardRef = (0, import_react.useRef)(null);
	const [tilt, setTilt] = (0, import_react.useState)({
		rx: 0,
		ry: 0
	});
	const onMove = (e) => {
		if (reduce) return;
		const el = cardRef.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		setTilt({
			rx: -py * 3.2,
			ry: px * 3.2
		});
	};
	const offset = [
		"lg:mt-0",
		"lg:mt-10",
		"lg:mt-4"
	][index];
	const hovering = tilt.rx !== 0 || tilt.ry !== 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: offset,
		animate: reduce ? void 0 : { y: [
			0,
			-9,
			0
		] },
		transition: reduce ? void 0 : {
			duration: 7 + index * 1.3,
			repeat: Infinity,
			ease: "easeInOut",
			delay: index * .6
		},
		style: { willChange: "transform" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			ref: cardRef,
			initial: {
				opacity: 0,
				y: 34
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-12% 0px"
			},
			transition: {
				duration: .75,
				ease,
				delay: index * .12
			},
			onMouseMove: onMove,
			onMouseLeave: () => setTilt({
				rx: 0,
				ry: 0
			}),
			className: "group relative overflow-hidden rounded-[30px] bg-white/85 p-3 ring-1 ring-slate-200/80 backdrop-blur",
			style: {
				boxShadow: hovering ? "0 52px 96px -44px rgba(15,23,48,0.5), 0 12px 28px -18px rgba(15,23,48,0.28)" : "0 26px 60px -34px rgba(15,23,48,0.32)",
				transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) rotate(${hovering ? index % 2 === 0 ? -.8 : .8 : 0}deg) translateY(${hovering ? -8 : 0}px)`,
				transformStyle: "preserve-3d",
				transition: "transform 600ms cubic-bezier(0.22,1,0.36,1), box-shadow 600ms ease",
				willChange: "transform"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[22px] bg-[#f2ece1]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							scale: 1.06,
							opacity: 0
						},
						whileInView: {
							scale: 1,
							opacity: 1
						},
						viewport: {
							once: true,
							margin: "-12% 0px"
						},
						transition: {
							duration: 1,
							ease,
							delay: index * .12 + .08
						},
						className: "h-full w-full",
						children: person.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: person.photo,
							alt: `${person.name} — ${person.role}`,
							loading: "lazy",
							className: "aspect-[4/5] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid aspect-[4/5] w-full place-items-center text-center",
							style: { background: "linear-gradient(160deg,#f6efe3 0%,#ece3d4 100%)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-editorial text-[44px] leading-none",
									style: {
										color: NAVY_DEEP,
										opacity: .35
									},
									children: person.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500",
									children: "Photo coming soon"
								})]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[11px] font-bold tracking-[0.08em] ring-1 ring-white/70 backdrop-blur",
						style: { color: EMBER },
						children: String(index + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-70",
						style: { background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.85) 100%)" }
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 14
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-12% 0px"
				},
				transition: {
					duration: .7,
					ease,
					delay: index * .12 + .22
				},
				className: "px-4 pb-5 pt-6 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-editorial text-[30px] leading-none md:text-[32px]",
						style: { color: NAVY_DEEP },
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2.5 text-[10.5px] font-bold uppercase tracking-[0.28em]",
						style: { color: EMBER },
						children: person.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[14.5px] leading-[1.7] text-slate-700",
						children: person.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "mt-5 h-px w-full origin-left scale-x-[0.25] bg-slate-300 transition-transform duration-700 group-hover:scale-x-100"
					})
				]
			})]
		})
	});
}
function PeopleBehind() {
	const intro = useContent("about_people_intro");
	const content = useContent("about_leadership");
	const remote = Array.isArray(content.people) ? content.people : [];
	const people = LEADERS.map((base, i) => {
		const r = remote[i];
		if (!r) return base;
		return {
			name: r.name?.trim() || base.name,
			role: r.role?.trim() || base.role,
			tagline: r.tagline?.trim() || base.tagline,
			photo: r.photo?.trim() || base.photo
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16",
		style: { background: `linear-gradient(180deg, #fbf1dd 0%, ${CREAM} 100%)` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 opacity-[0.06]",
			style: {
				backgroundImage: "radial-gradient(rgba(15,23,48,0.3) 1px, transparent 1px)",
				backgroundSize: "24px 24px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: intro.eyebrow }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Editorial, {
							className: "mt-6 text-[clamp(2rem,5.5vw,3.5rem)]",
							children: [
								intro.title,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									style: { color: EMBER },
									children: intro.titleEm
								})
							]
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[46ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]",
							children: intro.paragraph
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-6 pt-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
						children: people.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-[76vw] max-w-[330px] shrink-0 snap-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleCard, {
								person: p,
								index: i
							})
						}, p.name))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",
						children: "Swipe to explore"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 hidden gap-7 md:grid md:grid-cols-3 lg:gap-8",
					children: people.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleCard, {
						person: p,
						index: i
					}, p.name))
				})
			]
		})]
	});
}
var MOTO_STAGES = [
	{
		n: "01",
		title: "Planning",
		body: "Every meaningful learning journey begins with a clear direction.",
		color: "oklch(0.38 0.13 258)",
		tint: "linear-gradient(160deg,#eef2ff 0%,#dbe4ff 100%)",
		angle: -45
	},
	{
		n: "02",
		title: "Implementation",
		body: "Ideas become meaningful through thoughtful action and learning experiences.",
		color: "oklch(0.45 0.19 305)",
		tint: "linear-gradient(160deg,#f4ecff 0%,#e6d9fb 100%)",
		angle: -135
	},
	{
		n: "03",
		title: "Review",
		body: "Progress is observed, understood and improved continuously.",
		color: "oklch(0.52 0.2 27)",
		tint: "linear-gradient(160deg,#fdecec 0%,#f8d9d2 100%)",
		angle: 45
	},
	{
		n: "04",
		title: "Evaluation",
		body: "Learning is measured to help every child move forward with confidence.",
		color: "oklch(0.5 0.16 148)",
		tint: "linear-gradient(160deg,#e9f6ec 0%,#d3ecd8 100%)",
		angle: 135
	}
];
function OurMoto() {
	const c = useContent("about_moto");
	const stages = (Array.isArray(c.stages) && c.stages.length ? c.stages : MOTO_STAGES).map((s, i) => ({
		...MOTO_STAGES[i % MOTO_STAGES.length],
		...s
	}));
	const reduce = useReducedMotion();
	const [active, setActive] = (0, import_react.useState)(0);
	const rotation = useMotionValue(0);
	const circleRef = (0, import_react.useRef)(null);
	const drag = (0, import_react.useRef)({
		active: false,
		last: 0,
		moved: 0,
		velocity: 0,
		time: 0
	});
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const idle = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		if (reduce) return;
		let raf = 0;
		let prev = performance.now();
		const tick = (t) => {
			const dt = (t - prev) / 1e3;
			prev = t;
			if (idle.current && !drag.current.active) rotation.set(rotation.get() + dt * 2.2);
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [reduce, rotation]);
	const angleFrom = (e) => {
		const el = circleRef.current;
		if (!el) return 0;
		const r = el.getBoundingClientRect();
		return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI;
	};
	const onPointerDown = (e) => {
		e.target.setPointerCapture?.(e.pointerId);
		idle.current = false;
		drag.current = {
			active: true,
			last: angleFrom(e),
			moved: 0,
			velocity: 0,
			time: performance.now()
		};
		setDragging(true);
	};
	const onPointerMove = (e) => {
		if (!drag.current.active) return;
		const a = angleFrom(e);
		let delta = a - drag.current.last;
		if (delta > 180) delta -= 360;
		if (delta < -180) delta += 360;
		const now = performance.now();
		const dt = Math.max(16, now - drag.current.time);
		drag.current.velocity = delta / dt * 1e3;
		drag.current.time = now;
		drag.current.last = a;
		drag.current.moved += Math.abs(delta);
		rotation.set(rotation.get() + delta);
	};
	const settle = () => {
		if (!drag.current.active) return;
		const { moved, velocity } = drag.current;
		drag.current.active = false;
		setDragging(false);
		if (moved < 4) {
			select((active + 1) % stages.length);
			return;
		}
		const carry = Math.max(-160, Math.min(160, velocity * .35));
		animate(rotation, rotation.get() + carry, {
			duration: 1.1,
			ease: [
				.16,
				1,
				.3,
				1
			],
			onComplete: () => {
				idle.current = true;
			}
		});
		const steps = Math.round(moved / 90);
		if (steps > 0) setActive((a) => (a + steps * (velocity >= 0 ? 1 : -1) + stages.length * 4) % stages.length);
	};
	const select = (i) => {
		setActive(i);
		idle.current = false;
		animate(rotation, rotation.get() + 90, {
			type: "spring",
			stiffness: 48,
			damping: 15,
			onComplete: () => {
				idle.current = true;
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "our-moto",
		className: "relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16",
		style: { background: `linear-gradient(180deg, ${CREAM} 0%, #f5efe4 100%)` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 opacity-[0.07]",
			style: {
				backgroundImage: "radial-gradient(rgba(15,23,48,0.3) 1px, transparent 1px)",
				backgroundSize: "24px 24px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: c.eyebrow }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Editorial, {
							className: "mt-6 text-[clamp(2rem,5.5vw,3.75rem)]",
							children: [
								c.title,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									style: { color: EMBER },
									children: c.titleEm
								}),
								c.titleTail
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .12,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-[52ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]",
							children: c.paragraph
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[0.95fr_1.05fr] md:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[420px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute inset-6 rounded-full blur-3xl",
							style: {
								background: stages[active].color,
								opacity: .16
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							ref: circleRef,
							role: "button",
							tabIndex: 0,
							onPointerDown,
							onPointerMove,
							onPointerUp: settle,
							onPointerCancel: settle,
							onKeyDown: (e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									select((active + 1) % stages.length);
								}
							},
							"aria-label": `LEAD cycle — showing ${stages[active].title}. Drag or tap to explore the stages.`,
							animate: { scale: dragging ? .985 : 1 },
							transition: {
								duration: .35,
								ease
							},
							className: "relative block w-full touch-none select-none rounded-full focus-luxe",
							style: { cursor: dragging ? "grabbing" : "grab" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: c.image || lead_school_motto_jpeg_asset_default.url,
								alt: "LEAD School cycle — Planning, Implementation, Review, Evaluation",
								loading: "lazy",
								draggable: false,
								className: "w-full rounded-full object-contain",
								style: {
									rotate: reduce ? 0 : rotation,
									filter: "drop-shadow(0 30px 60px rgba(15,23,48,0.28))"
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 text-center text-[10.5px] font-bold uppercase tracking-[0.3em] text-slate-500",
							children: "Drag to explore"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: stages.map((st, i) => {
						const on = i === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							onMouseEnter: () => setActive(i),
							onFocus: () => setActive(i),
							onClick: () => select(i),
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
								margin: "-10% 0px"
							},
							transition: {
								duration: .7,
								ease,
								delay: i * .06
							},
							className: "group relative min-h-[44px] overflow-hidden rounded-[24px] p-6 text-left ring-1 transition-all duration-500",
							style: {
								background: on ? st.tint : "rgba(255,255,255,0.72)",
								boxShadow: on ? "0 26px 50px -28px rgba(15,23,48,0.42)" : "0 14px 30px -24px rgba(15,23,48,0.3)",
								["--tw-ring-color"]: on ? st.color : "rgba(148,163,184,0.4)",
								transform: on ? "translateY(-4px)" : void 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "absolute left-0 top-0 h-full w-[3px] transition-opacity duration-500",
									style: {
										background: st.color,
										opacity: on ? 1 : 0
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-editorial text-[34px] leading-none",
									style: { color: st.color },
									children: st.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-[13px] font-bold uppercase tracking-[0.22em]",
									style: { color: NAVY_DEEP },
									children: st.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-[14px] leading-[1.65] text-slate-700",
									children: st.body
								})
							]
						}, st.n);
					})
				})]
			})]
		})]
	});
}
function FinalCTA() {
	const c = useContent("about_cta");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-16",
		style: { background: `radial-gradient(80% 60% at 10% 10%, #fef3e2 0%, transparent 60%), radial-gradient(80% 60% at 90% 90%, #eef2ff 0%, transparent 60%), linear-gradient(180deg, #f5efe4 0%, ${CREAM} 100%)` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: c.eyebrow }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Editorial, {
						className: "mt-6 text-[clamp(2.25rem,6vw,4rem)]",
						children: [
							c.title,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								style: { color: EMBER },
								children: c.titleEm
							}),
							" ",
							c.titleTail
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[46ch] text-[15px] leading-[1.75] text-slate-700 md:text-[16.5px]",
						children: c.paragraph
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .25,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group inline-flex h-14 items-center justify-between gap-3 rounded-full px-6 text-[15px] font-semibold text-white transition-all duration-500 hover:shadow-[0_18px_40px_-12px_rgba(15,23,42,0.5)] active:scale-[0.97]",
							style: {
								background: "linear-gradient(135deg, oklch(0.55 0.16 258) 0%, oklch(0.35 0.13 258) 100%)",
								boxShadow: "0 14px 36px -12px rgba(34,64,180,0.55)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.ctaPrimary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-full bg-white/20 transition-transform duration-500 group-hover:translate-x-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4",
									strokeWidth: 2.5
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/academics",
							className: "group inline-flex h-14 items-center justify-between gap-3 rounded-full bg-white/95 px-6 text-[15px] font-semibold text-slate-900 ring-1 ring-slate-200 transition-all duration-500 hover:shadow-[0_18px_40px_-12px_rgba(15,23,42,0.25)] active:scale-[0.97]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.ctaSecondary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-full text-white transition-transform duration-500 group-hover:translate-x-1",
								style: { background: NAVY },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4",
									strokeWidth: 2.5
								})
							})]
						})]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-[28px] ring-1 ring-slate-200",
						style: { boxShadow: "0 40px 80px -30px rgba(15,23,48,0.35)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image || hero_classroom_full_png_asset_default.url,
							alt: "Students learning together in a Chaitanya classroom",
							loading: "lazy",
							decoding: "async",
							className: "aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.04]"
						})
					})
				})
			})]
		})
	});
}
function AboutSchool() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		style: { background: CREAM },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beginning, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleBehind, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurMoto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AboutSchool as component };
