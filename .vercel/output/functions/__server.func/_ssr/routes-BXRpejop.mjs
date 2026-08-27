import { o as __toESM } from "../_runtime.mjs";
import { g as hero_assembly_best_png_asset_default, h as hero_4_campus_png_asset_default, l as ACADEMIC_STAGES, m as hero_3_students_png_asset_default, o as useContent, p as hero_2_classroom_png_asset_default } from "./router-DnsFphIK.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useTransform, i as useSpring, r as useReducedMotion, s as useScroll, u as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { X as ChevronRight, it as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, n as ContactActions, r as SiteFooter } from "./site-header-DyIaj2XA.mjs";
import { t as LocationSection } from "./location-section-al1A8sed.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BXRpejop.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
function PillButton({ children, variant = "solid", to }) {
	const cls = `group relative inline-flex h-11 min-h-11 w-auto items-center justify-between gap-2.5 self-start rounded-full py-0 pl-4 pr-1.5 text-[13.5px] font-semibold tracking-tight transition-all duration-500 active:scale-[0.97] hover:shadow-[0_14px_30px_-14px_rgba(15,23,42,0.35)] md:h-12 md:text-[14px] ${variant === "solid" ? "text-white shadow-[0_10px_26px_-12px_rgba(34,64,180,0.5)] bg-[linear-gradient(135deg,oklch(0.55_0.16_258)_0%,oklch(0.35_0.13_258)_100%)]" : "bg-white/95 text-foreground ring-1 ring-black/10"}`;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:translate-x-1 ${variant === "solid" ? "bg-white/20" : "bg-[oklch(0.35_0.13_258)] text-white"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "h-3.5 w-3.5",
			strokeWidth: 2.5
		})
	})] });
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cls,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cls,
		children: inner
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroInner, {});
}
function ScrollIndicator({ style }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: "#chapter-about",
		"aria-label": "Scroll to next section",
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: 1.4,
			duration: .9,
			ease
		},
		style,
		className: "group absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/90 md:bottom-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] font-semibold uppercase tracking-[0.36em] drop-shadow",
			children: "Scroll"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			whileHover: reduce ? void 0 : { scale: 1.08 },
			whileTap: { scale: .94 },
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20
			},
			className: "relative flex h-10 w-6 items-start justify-center rounded-full border-[1.5px] border-white/85 backdrop-blur-sm",
			style: { boxShadow: "0 8px 24px -6px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				animate: reduce ? {} : {
					y: [
						4,
						16,
						4
					],
					opacity: [
						1,
						.15,
						1
					]
				},
				transition: {
					duration: 1.8,
					repeat: Infinity,
					ease: [
						.65,
						0,
						.35,
						1
					]
				},
				className: "mt-1 h-1.5 w-1.5 rounded-full bg-white",
				style: { boxShadow: "0 0 8px rgba(255,255,255,0.85)" }
			})
		})]
	});
}
function HeroInner() {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
	const imgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.1]);
	const overlayOpacity = useTransform(scrollYProgress, [0, 1], [.5, .7]);
	const scrollBtnOpacity = useTransform(scrollYProgress, [
		0,
		.15,
		.35
	], [
		1,
		.6,
		0
	]);
	const scrollBtnY = useTransform(scrollYProgress, [0, .35], [0, 40]);
	const scrollBtnScale = useTransform(scrollYProgress, [0, .35], [1, .85]);
	const cms = useContent("home_hero");
	const defaultHeroImages = [
		{
			src: hero_assembly_best_png_asset_default.url,
			alt: "Chaitanya EM High School — morning assembly with students"
		},
		{
			src: hero_2_classroom_png_asset_default.url,
			alt: "Classroom in session with teacher"
		},
		{
			src: hero_3_students_png_asset_default.url,
			alt: "Three students collaborating at a desk"
		},
		{
			src: hero_4_campus_png_asset_default.url,
			alt: "Chaitanya EM High School campus aerial view"
		}
	];
	const cmsSlides = (cms.slides ?? []).filter((s) => s && s.image);
	const heroImages = cmsSlides.length ? cmsSlides.map((s) => ({
		src: s.image,
		alt: s.alt || "Chaitanya EM High School"
	})) : defaultHeroImages;
	const [heroIdx, setHeroIdx] = (0, import_react.useState)(0);
	const [heroLoaded, setHeroLoaded] = (0, import_react.useState)(false);
	const slideCount = heroImages.length;
	(0, import_react.useEffect)(() => {
		setHeroIdx((i) => i < slideCount ? i : 0);
	}, [slideCount]);
	(0, import_react.useEffect)(() => {
		if (reduce || slideCount < 2) return;
		const t = setInterval(() => setHeroIdx((i) => (i + 1) % slideCount), 5500);
		return () => clearInterval(t);
	}, [reduce, slideCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative min-h-[100svh] w-full overflow-hidden flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: imgY,
					scale: imgScale,
					perspective: 1400
				},
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0",
					style: { background: "linear-gradient(135deg, #1a2540 0%, #223055 45%, #3a2a1e 100%)" }
				}), heroImages.map((img, i) => {
					const active = i === heroIdx;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: img.src,
						alt: i === 0 ? img.alt : "",
						fetchPriority: i === 0 ? "high" : "auto",
						decoding: "async",
						loading: i === 0 ? "eager" : "lazy",
						onLoad: i === 0 ? () => setHeroLoaded(true) : void 0,
						className: "absolute inset-0 h-full w-full object-cover object-center will-change-[transform,opacity] [backface-visibility:hidden]",
						initial: false,
						animate: reduce ? {
							opacity: active ? 1 : 0,
							scale: 1
						} : active ? {
							opacity: 1,
							scale: 1.04
						} : {
							opacity: 0,
							scale: 1
						},
						transition: active ? {
							opacity: {
								duration: 1.1,
								ease
							},
							scale: {
								duration: 8,
								ease: "easeOut"
							}
						} : {
							opacity: {
								duration: 1.1,
								ease
							},
							scale: { duration: 0 }
						},
						style: { transformOrigin: i % 2 ? "65% 45%" : "35% 55%" }
					}, `${i}-${img.src}`);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { opacity: overlayOpacity },
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(180deg, rgba(10,12,28,0.3) 0%, rgba(10,12,28,0.42) 55%, rgba(8,10,24,0.62) 100%)" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 h-[65%]",
				style: { background: "radial-gradient(120% 60% at 12% 100%, rgba(4,6,18,0.62) 0%, rgba(4,6,18,0.3) 45%, rgba(4,6,18,0.08) 75%, transparent 90%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex w-full max-w-6xl flex-col pt-[clamp(140px,22svh,240px)] pb-24 px-5 sm:px-10 md:pt-[clamp(180px,28svh,300px)] md:pb-32 lg:pb-36 z-10",
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
							duration: .7,
							ease,
							delay: .5
						},
						className: "inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 sm:text-[10px] sm:tracking-[0.32em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-white/50" }), cms.eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 pb-2 md:mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							initial: { y: "110%" },
							animate: { y: 0 },
							transition: {
								duration: 1,
								ease,
								delay: .65
							},
							className: "text-[clamp(2.15rem,9vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white md:text-[clamp(3.25rem,7vw,6.5rem)] text-balance",
							style: {
								fontFamily: "var(--font-display)",
								fontWeight: 700,
								textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.45)"
							},
							children: cms.headline
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							initial: { y: "110%" },
							animate: { y: 0 },
							transition: {
								duration: 1,
								ease,
								delay: .85
							},
							className: "text-[clamp(2.15rem,9vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white/95 md:text-[clamp(3.25rem,7vw,6.5rem)] text-balance",
							style: {
								fontFamily: "var(--font-display)",
								fontWeight: 700,
								textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.45)"
							},
							children: cms.headlineTwo
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							ease,
							delay: 1.15
						},
						className: "mt-5 max-w-[36ch] md:mt-6 text-[18px] font-medium leading-[1.5] tracking-[-0.005em] text-white md:text-[17px] lg:text-[18.5px]",
						style: { textShadow: "0 1px 2px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.7), 0 8px 34px rgba(0,0,0,0.55)" },
						children: cms.subline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							ease,
							delay: 1.4
						},
						className: "mt-6 flex flex-row flex-wrap items-center gap-2.5 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
							to: "/contact",
							children: cms.ctaPrimary || "Book a visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
							variant: "ghost",
							to: "/academics",
							children: cms.ctaSecondary || "Our academics"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollIndicator, { style: {
				opacity: scrollBtnOpacity,
				y: scrollBtnY,
				scale: scrollBtnScale
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBottomFade, {})
		]
	});
}
function HeroBottomFade() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 sm:h-16 md:h-20",
		style: { background: "linear-gradient(180deg, rgba(251,247,240,0) 0%, rgba(251,247,240,0.28) 62%, rgba(251,247,240,0.92) 100%)" }
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .4
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		style: {
			scaleX,
			originX: 0,
			background: "linear-gradient(90deg, oklch(0.32 0.11 258) 0%, oklch(0.45 0.14 220) 45%, oklch(0.78 0.13 78) 100%)"
		},
		className: "pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]"
	});
}
var PREVIEW_ROUTES = [
	"/about",
	"/academics",
	"/facilities",
	"/gallery",
	"/contact"
];
function PreviewCard({ item, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCardInner, {
		item,
		index
	});
}
function ContactExtras() {
	const contact = useContent("contact_info");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactActions, {
			tel: contact.phone,
			whatsapp: contact.whatsapp,
			email: contact.email,
			className: "grid-cols-1"
		})
	});
}
var themes = [
	{
		bg: "bg-[linear-gradient(180deg,oklch(0.99_0.008_78)_0%,oklch(0.955_0.03_78)_100%)]",
		eyebrow: "text-[oklch(0.42_0.14_258)]",
		heading: "text-foreground",
		body: "text-foreground/72",
		cta: "bg-[oklch(0.32_0.11_258)] text-white",
		ctaIcon: "bg-white/15",
		accent: "oklch(0.32 0.11 258)"
	},
	{
		bg: "bg-[radial-gradient(120%_80%_at_0%_0%,oklch(0.96_0.05_78)_0%,transparent_55%),radial-gradient(120%_80%_at_100%_100%,oklch(0.92_0.09_45)_0%,transparent_55%),linear-gradient(180deg,oklch(0.985_0.02_78)_0%,oklch(0.94_0.07_60)_100%)]",
		eyebrow: "text-[oklch(0.46_0.16_45)]",
		heading: "text-foreground",
		body: "text-foreground/72",
		cta: "bg-[linear-gradient(135deg,oklch(0.62_0.18_45),oklch(0.48_0.18_35))] text-white",
		ctaIcon: "bg-white/20",
		accent: "oklch(0.72 0.16 55)"
	},
	{
		bg: "bg-[linear-gradient(180deg,oklch(0.97_0.03_148)_0%,oklch(0.92_0.07_148)_100%)]",
		eyebrow: "text-[oklch(0.38_0.14_148)]",
		heading: "text-foreground",
		body: "text-foreground/72",
		cta: "bg-[oklch(0.38_0.14_148)] text-white",
		ctaIcon: "bg-white/15",
		accent: "oklch(0.38 0.14 148)"
	},
	{
		bg: "bg-[radial-gradient(120%_80%_at_100%_0%,oklch(0.94_0.06_320)_0%,transparent_55%),radial-gradient(120%_80%_at_0%_100%,oklch(0.92_0.08_260)_0%,transparent_55%),linear-gradient(180deg,oklch(0.98_0.02_310)_0%,oklch(0.93_0.07_310)_100%)]",
		eyebrow: "text-[oklch(0.42_0.16_310)]",
		heading: "text-foreground",
		body: "text-foreground/72",
		cta: "bg-[linear-gradient(135deg,oklch(0.5_0.18_310),oklch(0.34_0.15_310))] text-white",
		ctaIcon: "bg-white/20",
		accent: "oklch(0.62 0.15 310)"
	},
	{
		bg: "bg-[radial-gradient(120%_80%_at_0%_0%,oklch(0.96_0.05_170)_0%,transparent_55%),radial-gradient(120%_80%_at_100%_100%,oklch(0.94_0.05_258)_0%,transparent_55%),linear-gradient(180deg,oklch(0.985_0.015_258)_0%,oklch(0.94_0.045_180)_100%)]",
		eyebrow: "text-[oklch(0.32_0.11_258)]",
		heading: "text-foreground",
		body: "text-foreground/72",
		cta: "bg-[linear-gradient(135deg,oklch(0.55_0.16_258),oklch(0.35_0.13_258))] text-white",
		ctaIcon: "bg-white/20",
		accent: "oklch(0.32 0.11 258)"
	}
];
var academicsStages = ACADEMIC_STAGES.map((s, i) => ({
	slug: s.slug,
	tag: `Stage 0${i + 1} · ${s.tag}`,
	grades: s.grades,
	line: s.line,
	image: s.preview.image,
	detail: s.preview.description,
	title: s.preview.title,
	focus: s.preview.focus,
	cta: s.preview.cta,
	fill: s.bg,
	fg: s.fg
}));
function AcademicsStageModal({ stage, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!stage) return;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", onKey);
		};
	}, [stage, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: stage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .22,
			ease
		},
		className: "fixed inset-0 z-[75] grid place-items-center bg-black/65 px-5 backdrop-blur-xl",
		onClick: onClose,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": stage.grades,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 36,
				scale: .96
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 24,
				scale: .96
			},
			transition: {
				duration: .38,
				ease
			},
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-sm overflow-hidden rounded-[32px] bg-white shadow-[0_40px_100px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/3] w-full overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					loading: "lazy",
					decoding: "async",
					src: stage.image,
					alt: stage.grades,
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close stage",
					onClick: onClose,
					className: "absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-foreground shadow-lg active:scale-95 transition-transform",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "h-4 w-4",
						strokeWidth: 2.5
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground",
						children: stage.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-editorial mt-2 text-[34px] leading-none text-foreground",
						children: stage.grades
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[15px] font-semibold leading-snug text-foreground",
						children: stage.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[13px] font-medium leading-relaxed text-foreground/70",
						children: stage.detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: stage.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full bg-muted px-3 py-1.5 text-[11px] font-semibold tracking-tight text-foreground ring-1 ring-black/5",
							children: f
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/academics/$stage",
						params: { stage: stage.slug },
						onClick: onClose,
						className: "mt-5 inline-flex items-center gap-2 rounded-full bg-[oklch(0.36_0.13_258)] px-5 py-2.5 text-[12px] font-semibold text-white transition-transform duration-200 hover:gap-3 active:scale-95",
						children: [stage.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "h-4 w-4",
							strokeWidth: 2.4
						})]
					})
				]
			})]
		})
	}) });
}
function AcademicsStageCards() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [pressed, setPressed] = (0, import_react.useState)(null);
	const cms = useContent("home_academics");
	const cmsStages = Array.isArray(cms.stages) ? cms.stages : [];
	const stages = cmsStages.length ? cmsStages.map((r, i) => {
		const base = academicsStages[i] ?? academicsStages[academicsStages.length - 1];
		return {
			...base,
			slug: r.slug?.trim() || base.slug,
			tag: `Stage 0${i + 1} · ${(r.title?.trim() || base.title).split(" ")[0]}`,
			grades: r.ages?.trim() || base.grades,
			line: r.tagline?.trim() || base.line,
			title: r.title?.trim() || base.title,
			detail: r.body?.trim() || base.detail,
			image: r.image?.trim() || base.image
		};
	}) : academicsStages;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-7 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-5",
		children: [stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
			initial: {
				opacity: 0,
				y: 42
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
				duration: .9,
				ease,
				delay: i * .08
			},
			whileHover: {
				rotateX: -6,
				rotateY: 6,
				y: -6,
				scale: 1.02
			},
			whileTap: {
				rotateX: -6,
				rotateY: 6,
				y: -4,
				scale: .99
			},
			type: "button",
			onClick: () => setSelected(s),
			onPointerDown: () => setPressed(s.tag),
			onPointerUp: () => setPressed(null),
			onPointerCancel: () => setPressed(null),
			onPointerLeave: () => setPressed(null),
			"data-pressed": pressed === s.tag ? "true" : void 0,
			className: `group relative min-h-[148px] w-full overflow-hidden rounded-[30px] p-6 text-left ring-1 ring-white/10 md:min-h-[240px] md:p-8 ${s.fg}`,
			style: {
				background: s.fill,
				boxShadow: "0 30px 60px -30px rgba(0,0,0,0.55)",
				transformStyle: "preserve-3d",
				transformPerspective: 900
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.28)_50%,transparent_65%)] transition-transform duration-[900ms] ease-out group-hover:translate-x-full group-data-[pressed=true]:translate-x-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60 group-data-[pressed=true]:opacity-60",
					style: { background: "radial-gradient(circle,rgba(255,255,255,0.9),transparent 65%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-semibold uppercase tracking-[0.28em] opacity-80",
						children: s.tag
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-full bg-white/15 ring-1 ring-white/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-45 group-data-[pressed=true]:translate-x-1 group-data-[pressed=true]:rotate-45",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-[26px] font-semibold leading-[1.05] tracking-[-0.03em] transition-transform duration-500 group-hover:-translate-y-0.5 group-data-[pressed=true]:-translate-y-0.5",
					style: {
						fontFamily: "var(--font-display)",
						transform: "translateZ(30px)"
					},
					children: s.grades
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-[14px] font-medium opacity-90",
					style: { transform: "translateZ(18px)" },
					children: s.line
				})
			]
		}, `${s.tag}-${i}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademicsStageModal, {
			stage: selected,
			onClose: () => setSelected(null)
		})]
	});
}
function PreviewCardInner({ item, index }) {
	const t = themes[index] ?? themes[0];
	const isAcademics = item.to === "/academics";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		id: item.to.replace("/", ""),
		initial: {
			opacity: 0,
			y: 40
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
			duration: .9,
			ease
		},
		className: `relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:py-32 ${t.bg}`,
		style: { scrollMarginTop: 96 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-30 blur-3xl",
				style: { background: t.accent }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -left-16 bottom-8 h-56 w-56 rounded-full opacity-15 blur-3xl",
				style: { background: t.accent }
			}),
			false,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `relative text-[10px] font-semibold uppercase tracking-[0.32em] ${t.eyebrow}`,
						children: item.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: `font-editorial relative mt-4 text-[clamp(2.6rem,11vw,4.25rem)] leading-[0.94] md:text-[clamp(3.5rem,6.5vw,6rem)] ${t.heading}`,
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `relative mt-4 max-w-[44ch] text-[15px] font-medium leading-[1.65] md:text-[17px] lg:text-[18px] ${t.body}`,
						children: item.body
					}),
					isAcademics ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademicsStageCards, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 30,
							rotateX: 6
						},
						whileInView: {
							opacity: 1,
							y: 0,
							rotateX: 0
						},
						viewport: {
							once: true,
							amount: .2
						},
						transition: {
							duration: 1,
							ease,
							delay: .1
						},
						whileHover: {
							y: -4,
							scale: 1.01
						},
						className: `card-spotlight hover-lift relative mt-7 overflow-hidden rounded-[28px] ring-1 md:mt-10 ring-black/5`,
						style: {
							boxShadow: "0 30px 70px -30px rgba(15,23,42,0.4)",
							transformStyle: "preserve-3d",
							perspective: 1e3
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: item.image,
							alt: "",
							initial: { scale: 1.15 },
							whileInView: { scale: 1 },
							viewport: {
								once: true,
								amount: .2
							},
							transition: {
								duration: 1.6,
								ease
							},
							className: "h-[42vh] w-full object-cover sm:h-[54vh] md:h-[62vh] lg:h-[70vh]",
							loading: "lazy",
							decoding: "async"
						})
					}),
					item.to === "/contact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactExtras, {}),
					!isAcademics && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: `group btn-glow relative mt-7 inline-flex h-12 items-center gap-3 rounded-full pl-5 pr-2 text-[13px] font-semibold tracking-tight transition-all duration-500 active:scale-[0.97] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(15,23,42,0.35)] ${t.cta}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "uppercase tracking-[0.14em]",
							children: item.cta
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-8 w-8 place-items-center rounded-full transition-transform duration-500 group-hover:translate-x-1 ${t.ctaIcon}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-4 w-4",
								strokeWidth: 2.5
							})
						})]
					})
				]
			})
		]
	});
}
function PageSections() {
	const previews = (useContent("home_previews").cards ?? []).map((c, i) => ({
		eyebrow: c.eyebrow ?? "",
		title: c.title ?? "",
		body: c.body ?? "",
		image: c.image ?? "",
		cta: c.cta ?? "Read more",
		to: PREVIEW_ROUTES[i] ?? "/about"
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "chapter-about",
		className: "relative bg-background scroll-mt-24",
		children: previews.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCard, {
			item,
			index: i
		}, `${item.to}-${i}`))
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSections, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "site-footer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				})
			] })
		]
	});
}
//#endregion
export { Index as component };
