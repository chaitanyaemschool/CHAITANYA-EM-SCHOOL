import { o as __toESM } from "../_runtime.mjs";
import { f as serverTimestamp, l as collection, t as addDoc } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
import { c as waHref, d as db, i as SOCIAL, n as DREAM_TEAM_URL, o as useContent } from "./router-SErTpL7i.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as useRouterState, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useMotionValueEvent, r as useReducedMotion, s as useScroll, u as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { D as MapPin, F as House, J as CircleCheck, L as GraduationCap, N as Image, O as Mail, _ as Phone, it as ArrowUpRight, j as LoaderCircle, nt as BookOpen, ot as ArrowLeft, p as School, t as X, tt as Building2, v as PhoneCall, w as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-DXBCrAU8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ease$3 = [
	.22,
	1,
	.36,
	1
];
var WHATSAPP_TEMPLATE = [
	"Hello Chaitanya English Medium School,",
	"",
	"I would like to know more about admissions.",
	"",
	"Student name: ",
	"Class seeking admission: ",
	"Parent name: ",
	"City / Area: ",
	"",
	"Please share the details. Thank you."
].join("\n");
var EMAIL_SUBJECT = "Admission enquiry - Chaitanya English Medium School";
var EMAIL_BODY = [
	"Dear Admissions Team,",
	"",
	"I would like to enquire about admissions at Chaitanya English Medium School.",
	"",
	"Student name: ",
	"Class seeking admission: ",
	"Parent name: ",
	"Contact number: ",
	"City / Area: ",
	"",
	"Kindly share the admission process, fee structure and available dates for a campus visit.",
	"",
	"Thank you,"
].join("\n");
/** Official-style WhatsApp glyph. */
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
	});
}
/**
* Cohesive premium contact-action group: three elevated cards with the
* correct, instantly recognisable icon for each service.
*/
function ContactActions({ tel, whatsapp, email, className = "" }) {
	const reduce = useReducedMotion();
	const actions = [
		{
			key: "call",
			label: "Call us",
			sub: "Talk to the office",
			href: `tel:${(tel || "").replace(/[^+\d]/g, "")}`,
			bg: "linear-gradient(135deg,#3b82f6,#1e3a8a)",
			shadow: "0 14px 28px -14px rgba(29,78,216,0.6)",
			ring: "#1e40af",
			aria: "Call Chaitanya EM School",
			Icon: ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
				className,
				strokeWidth: 2.2,
				"aria-hidden": "true"
			})
		},
		{
			key: "wa",
			label: "WhatsApp us",
			sub: "Quick reply",
			href: `https://wa.me/${(whatsapp || "").replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_TEMPLATE)}`,
			bg: "linear-gradient(135deg,#25D366,#128C7E)",
			shadow: "0 14px 28px -14px rgba(18,140,126,0.65)",
			ring: "#128C7E",
			aria: "Message Chaitanya EM School on WhatsApp",
			Icon: ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className })
		},
		{
			key: "mail",
			label: "Email us",
			sub: "We reply in a day",
			href: `mailto:${email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`,
			bg: "linear-gradient(135deg,#f59e0b,#b45309)",
			shadow: "0 14px 28px -14px rgba(180,83,9,0.6)",
			ring: "#b45309",
			aria: "Email Chaitanya EM School",
			Icon: ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
				className,
				strokeWidth: 2.2,
				"aria-hidden": "true"
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid gap-3 ${className || "grid-cols-1 sm:grid-cols-3"}`,
		children: actions.map(({ key, label, sub, href, bg, shadow, ring, aria, Icon }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
			href,
			"aria-label": aria,
			target: href.startsWith("http") ? "_blank" : void 0,
			rel: href.startsWith("http") ? "noreferrer" : void 0,
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
				margin: "-60px"
			},
			transition: {
				duration: .5,
				ease: ease$3,
				delay: i * .07
			},
			whileHover: reduce ? void 0 : { y: -3 },
			whileTap: { scale: .98 },
			style: { ["--focus-ring"]: ring },
			className: "group flex min-h-[64px] items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-black/5 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.3)] transition-shadow duration-500 hover:shadow-[0_22px_44px_-22px_rgba(15,23,42,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-11 w-11 shrink-0 place-items-center rounded-full text-white transition-transform duration-500 group-hover:scale-105",
				style: {
					background: bg,
					boxShadow: shadow
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-[19px] w-[19px]" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-[14px] font-semibold tracking-tight text-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-[11.5px] text-muted-foreground",
					children: sub
				})]
			})]
		}, key))
	});
}
function FacebookMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "24",
			cy: "24",
			r: "24",
			fill: "#1877F2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M32.5 24H27v16h-6.6V24H16v-6h4.4v-4.1c0-4.4 2.6-7.1 7.2-7.1 2.1 0 4 .2 4.5.2v5.2h-3.1c-2 0-2.4 1-2.4 2.4V18h5.6l-.7 6Z"
		})]
	});
}
function InstagramMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "ig-g",
				cx: "30%",
				cy: "107%",
				r: "150%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#fdf497"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "5%",
						stopColor: "#fdf497"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "45%",
						stopColor: "#fd5949"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "60%",
						stopColor: "#d6249f"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "90%",
						stopColor: "#285AEB"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "0",
				width: "48",
				height: "48",
				rx: "13",
				fill: "url(#ig-g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10.5",
				y: "10.5",
				width: "27",
				height: "27",
				rx: "8.5",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "3.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "6.6",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "3.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "33.2",
				cy: "14.8",
				r: "2.1",
				fill: "#fff"
			})
		]
	});
}
function WhatsAppMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "24",
			cy: "24",
			r: "24",
			fill: "#25D366"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M33.6 14.3A13.5 13.5 0 0 0 12.4 30.6L10.5 38l7.6-2a13.5 13.5 0 0 0 6.4 1.6h.01c7.44 0 13.5-6.05 13.5-13.5 0-3.6-1.4-7-3.9-9.5Zm-9.1 20.8a11.2 11.2 0 0 1-5.7-1.6l-.4-.24-4.5 1.18 1.2-4.4-.27-.45a11.22 11.22 0 1 1 20.83-5.8c0 6.2-5.04 11.3-11.16 11.3Zm6.15-8.4c-.34-.17-2-.98-2.3-1.1-.3-.11-.53-.17-.75.17s-.86 1.1-1.05 1.32c-.2.23-.39.26-.72.09-.34-.17-1.42-.53-2.7-1.68-1-.9-1.67-1.99-1.87-2.32-.2-.34-.02-.52.15-.69.15-.15.34-.4.5-.6.17-.2.23-.34.35-.57.11-.23.06-.43-.03-.6-.09-.17-.75-1.82-1.03-2.49-.27-.65-.55-.56-.75-.57l-.64-.01c-.23 0-.6.08-.9.43-.32.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.14.66-.1 2.03-.83 2.32-1.63.28-.8.28-1.49.2-1.63-.09-.15-.31-.23-.65-.4Z"
		})]
	});
}
function YouTubeMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#FF0000",
			d: "M45.5 15.7a5.6 5.6 0 0 0-3.94-3.96C38.06 10.8 24 10.8 24 10.8s-14.06 0-17.56.94A5.6 5.6 0 0 0 2.5 15.7C1.56 19.2 1.56 24 1.56 24s0 4.8.94 8.3a5.6 5.6 0 0 0 3.94 3.96c3.5.94 17.56.94 17.56.94s14.06 0 17.56-.94a5.6 5.6 0 0 0 3.94-3.96c.94-3.5.94-8.3.94-8.3s0-4.8-.94-8.3Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#fff",
			d: "M19.5 30.7 31.2 24 19.5 17.3v13.4Z"
		})]
	});
}
var ease$2 = [
	.22,
	1,
	.36,
	1
];
var navItems = [
	{
		label: "Home",
		to: "/",
		icon: House,
		tooltip: "Return to the homepage",
		gradient: "linear-gradient(135deg,oklch(0.72 0.17 28),oklch(0.55 0.19 28))"
	},
	{
		label: "About School",
		to: "/about",
		icon: School,
		tooltip: "Our story, vision & leadership",
		gradient: "linear-gradient(135deg,oklch(0.62 0.16 258),oklch(0.36 0.13 258))"
	},
	{
		label: "Academics",
		to: "/academics",
		icon: BookOpen,
		tooltip: "Curriculum & learning stages",
		gradient: "linear-gradient(135deg,oklch(0.78 0.15 78),oklch(0.58 0.16 60))"
	},
	{
		label: "Facilities",
		to: "/facilities",
		icon: Building2,
		tooltip: "Campus, labs & amenities",
		gradient: "linear-gradient(135deg,oklch(0.65 0.14 200),oklch(0.42 0.12 220))"
	},
	{
		label: "Gallery",
		to: "/gallery",
		icon: Image,
		tooltip: "Photos from life on campus",
		gradient: "linear-gradient(135deg,oklch(0.72 0.16 320),oklch(0.48 0.17 300))"
	},
	{
		label: "Contact",
		to: "/contact",
		icon: PhoneCall,
		tooltip: "Reach us & find directions",
		gradient: "linear-gradient(135deg,oklch(0.66 0.15 148),oklch(0.42 0.14 148))"
	}
];
function SiteFooter() {
	const contact = useContent("contact_info");
	const footer = useContent("footer");
	const telHref = `tel:${(contact.phone || SOCIAL.phone).replace(/[^+\d]/g, "")}`;
	const waHref$1 = waHref(contact.whatsapp);
	const mailHref = `mailto:${contact.email || SOCIAL.email}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.footer, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: .8,
			ease: ease$2
		},
		className: "relative overflow-hidden bg-foreground px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-20 text-background md:px-10 md:pt-24 lg:px-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[oklch(0.32_0.11_258)]/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-16 bottom-40 h-56 w-56 rounded-full bg-[oklch(0.78_0.13_78)]/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-crest.jpeg",
							alt: "Chaitanya EM School logo",
							className: "h-14 w-14 rounded-2xl bg-white/95 object-cover p-1 ring-1 ring-white/15"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-editorial truncate text-[32px] leading-none md:text-[42px]",
								children: "CHAITANYA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-background/70",
								children: "EM SCHOOL · CHEKKAPALLI"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[38ch] text-[13px] leading-relaxed text-background/60 md:text-[14px]",
						children: footer.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-8 md:grid-cols-3 md:gap-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-[26px] bg-white/7 p-4 ring-1 ring-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-background/50",
									children: "Reach"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 space-y-3 text-[14px] text-background/88",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-background/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contact.address })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: telHref,
											className: "flex items-center gap-3 transition-colors hover:text-background",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-background/60" }), " Call admissions"]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: waHref$1,
											className: "flex items-center gap-3 transition-colors hover:text-background",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4 text-background/60" }), " WhatsApp"]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: mailHref,
											className: "flex items-center gap-3 transition-colors hover:text-background",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-background/60" }), " Email"]
										}) })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-medium uppercase tracking-[0.28em] text-background/40",
									children: "Explore"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-[14px] text-background/85",
									children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: n.to,
										className: "transition-colors hover:text-background",
										children: n.label
									}) }, n.label))
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-medium uppercase tracking-[0.28em] text-background/40",
									children: "Follow"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-5",
									children: [
										{
											Icon: InstagramMark,
											label: "Instagram",
											href: footer.instagram || SOCIAL.instagram
										},
										{
											Icon: FacebookMark,
											label: "Facebook",
											href: footer.facebook || SOCIAL.facebook
										},
										{
											Icon: WhatsAppMark,
											label: "WhatsApp",
											href: waHref$1
										},
										{
											Icon: YouTubeMark,
											label: "YouTube",
											href: footer.youtube || SOCIAL.youtube
										}
									].map(({ Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": label,
										className: "grid h-9 w-9 place-items-center rounded-md transition-transform duration-300 ease-out hover:scale-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/60 active:scale-95",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]" })
									}, label))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative mt-10 h-px w-full bg-white/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-6 flex flex-col gap-3 text-[11px] leading-relaxed text-background/50 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Chaitanya EM School, Chekkapalli. All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Designed & developed by" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: DREAM_TEAM_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "font-semibold uppercase tracking-[0.18em] text-background/90 underline-offset-4 transition-colors hover:text-background hover:underline",
								children: "Dream Team Services"
							})]
						})]
					})
				]
			})
		]
	});
}
/** Shared, framework-free validators for public forms. */
/** Strips spaces, dashes, brackets and a leading +91 / 0 from an Indian mobile number. */
function normalizeMobile(raw) {
	let v = String(raw ?? "").replace(/[\s()\-.]/g, "");
	if (v.startsWith("+91")) v = v.slice(3);
	else if (v.startsWith("0091")) v = v.slice(4);
	else if (v.startsWith("91") && v.length === 12) v = v.slice(2);
	if (v.startsWith("0") && v.length === 11) v = v.slice(1);
	return v;
}
/** Valid Indian mobile: exactly 10 digits starting 6-9. */
function isValidMobile(raw) {
	return /^[6-9]\d{9}$/.test(normalizeMobile(raw));
}
function isValidEmail(raw) {
	const v = String(raw ?? "").trim();
	return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v) && v.length <= 254;
}
function isValidName(raw) {
	const v = String(raw ?? "").trim();
	return v.length >= 2 && v.length <= 80;
}
var ease$1 = [
	.22,
	1,
	.36,
	1
];
var EMPTY = {
	studentName: "",
	mobile: "",
	email: "",
	message: ""
};
var FIELD = "w-full min-w-0 rounded-xl border border-black/10 bg-white/80 px-3.5 py-2.5 text-[14px] text-foreground outline-none transition-shadow duration-200 placeholder:text-muted-foreground/70 focus:border-transparent focus:ring-2 focus:ring-[oklch(0.55_0.16_258)]";
var LABEL = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground";
var ERR_FIELD = "!border-[oklch(0.6_0.19_25)] focus:!ring-[oklch(0.6_0.19_25)]";
var ERR_TEXT = "mt-1.5 text-[11.5px] font-medium text-[oklch(0.5_0.19_25)]";
function buildWhatsAppText(f) {
	const stamp = (/* @__PURE__ */ new Date()).toLocaleString("en-IN", {
		dateStyle: "medium",
		timeStyle: "short"
	});
	return [
		"*CHAITANYA ENGLISH MEDIUM SCHOOL*",
		"_Admission Enquiry_",
		"━━━━━━━━━━━━━━━━━━",
		"",
		`*Student name:* ${f.studentName}`,
		`*Mobile:* ${f.mobile}`,
		`*Email:* ${f.email || "Not provided"}`,
		"",
		"*Message*",
		f.message?.trim() || "Not provided",
		"",
		"━━━━━━━━━━━━━━━━━━",
		`Submitted on ${stamp}`,
		"Sent from the school website admission form."
	].join("\n");
}
/** Premium glass admission-enquiry dialog. */
function AdmissionDialog({ open, onClose, whatsapp }) {
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [touched, setTouched] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open, onClose]);
	(0, import_react.useEffect)(() => {
		if (open) {
			setForm(EMPTY);
			setDone(false);
			setError(null);
			setTouched({});
		}
	}, [open]);
	const errors = {
		studentName: isValidName(form.studentName) ? null : "Please enter the student's full name.",
		mobile: isValidMobile(form.mobile) ? null : "Please enter a valid contact number.",
		email: !form.email.trim() || isValidEmail(form.email) ? null : "Please enter a valid email address."
	};
	const invalid = Object.values(errors).some(Boolean);
	const showError = (k) => touched[k] ? errors[k] : null;
	const set = (k) => (e) => {
		const raw = e.target.value;
		const value = k === "mobile" ? raw.replace(/[^\d+\s-]/g, "").slice(0, 16) : raw;
		setForm((p) => ({
			...p,
			[k]: value
		}));
	};
	const blur = (k) => () => setTouched((t) => ({
		...t,
		[k]: true
	}));
	async function submit(e) {
		e.preventDefault();
		if (busy) return;
		setError(null);
		setTouched({
			studentName: true,
			mobile: true,
			email: true
		});
		if (invalid) {
			setError("Please correct the highlighted fields before submitting.");
			return;
		}
		setBusy(true);
		const clean = {
			studentName: form.studentName.trim(),
			mobile: normalizeMobile(form.mobile),
			email: form.email.trim(),
			message: form.message.trim()
		};
		const text = buildWhatsAppText(clean);
		try {
			await addDoc(collection(db, "admissions"), {
				...clean,
				status: "new",
				read: false,
				source: "website",
				createdAt: serverTimestamp()
			});
		} catch {
			setError("We couldn't save your enquiry, but you can still send it on WhatsApp.");
		}
		const num = (whatsapp || SOCIAL.whatsapp).replace(/\D/g, "") || SOCIAL.whatsapp;
		window.open(`https://wa.me/${num}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
		setBusy(false);
		setDone(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .2,
			ease: ease$1
		},
		onClick: onClose,
		className: "fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto overscroll-contain px-3 py-6 backdrop-blur-md sm:px-5 sm:py-10",
		style: { background: "rgba(17, 22, 55, 0.5)" },
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Admission enquiry form",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 24,
				scale: .97
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 16,
				scale: .98
			},
			transition: {
				duration: .32,
				ease: ease$1
			},
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-2xl overflow-hidden rounded-[26px] ring-1 ring-white/50 shadow-[0_40px_100px_-30px_rgba(15,23,60,0.6)]",
			style: { background: "radial-gradient(120% 80% at 0% 0%, oklch(0.98 0.02 78) 0%, transparent 55%), radial-gradient(120% 90% at 100% 100%, oklch(0.95 0.05 258) 0%, transparent 55%), rgba(255,255,255,0.94)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close",
					className: "absolute right-3.5 top-3.5 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-foreground ring-1 ring-black/10 transition-transform duration-200 hover:scale-105 active:scale-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "h-4 w-4",
						strokeWidth: 2.4
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 pt-6 sm:px-8 sm:pt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white",
							style: { background: "linear-gradient(135deg,oklch(0.55 0.16 258),oklch(0.35 0.13 258))" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
								className: "h-5 w-5",
								strokeWidth: 2.2
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground",
								children: "Admissions open"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "truncate text-[22px] font-semibold tracking-[-0.03em] sm:text-[26px]",
								children: "Admission enquiry"
							})]
						})]
					})
				}),
				done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 pb-8 pt-6 text-center sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "mx-auto h-10 w-10 text-[oklch(0.6_0.15_150)]",
							strokeWidth: 2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-[17px] font-semibold",
							children: "Enquiry received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-[42ch] text-[13.5px] leading-relaxed text-muted-foreground",
							children: "Thank you. Our admissions office will contact you shortly. A WhatsApp message has also been prepared for you to send."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "mt-6 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-[13.5px] font-semibold text-background transition-transform active:scale-[0.97]",
							children: "Close"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "px-5 pb-6 pt-5 sm:px-8 sm:pb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: LABEL,
											htmlFor: "ad-student",
											children: "Student name *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "ad-student",
											className: `${FIELD} ${showError("studentName") ? ERR_FIELD : ""}`,
											value: form.studentName,
											onChange: set("studentName"),
											onBlur: blur("studentName"),
											maxLength: 80,
											"aria-invalid": !!showError("studentName"),
											placeholder: "Full name of the student"
										}),
										showError("studentName") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: ERR_TEXT,
											children: showError("studentName")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: LABEL,
										htmlFor: "ad-mobile",
										children: "Mobile number *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "ad-mobile",
										type: "tel",
										inputMode: "numeric",
										autoComplete: "tel",
										className: `${FIELD} ${showError("mobile") ? ERR_FIELD : ""}`,
										value: form.mobile,
										onChange: set("mobile"),
										onBlur: blur("mobile"),
										maxLength: 16,
										"aria-invalid": !!showError("mobile"),
										placeholder: "10-digit mobile number"
									}),
									showError("mobile") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: ERR_TEXT,
										children: showError("mobile")
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: LABEL,
										htmlFor: "ad-email",
										children: "Email address"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "ad-email",
										type: "email",
										className: `${FIELD} ${showError("email") ? ERR_FIELD : ""}`,
										value: form.email,
										onChange: set("email"),
										onBlur: blur("email"),
										maxLength: 120,
										"aria-invalid": !!showError("email"),
										placeholder: "Optional"
									}),
									showError("email") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: ERR_TEXT,
										children: showError("email")
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: LABEL,
										htmlFor: "ad-message",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "ad-message",
										rows: 4,
										className: `${FIELD} resize-none`,
										value: form.message,
										onChange: set("message"),
										maxLength: 600,
										placeholder: "Anything you'd like us to know (optional)"
									})]
								})
							]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 rounded-xl bg-[oklch(0.96_0.04_30)] px-3.5 py-2.5 text-[12.5px] text-[oklch(0.45_0.16_30)]",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "min-h-11 rounded-full bg-secondary px-6 text-[13.5px] font-semibold text-foreground ring-1 ring-black/5 transition-transform duration-200 active:scale-[0.97]",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: busy,
								className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 text-[13.5px] font-semibold text-white shadow-[0_16px_36px_-16px_rgba(34,64,180,0.6)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97] disabled:opacity-70",
								style: { background: "linear-gradient(135deg,oklch(0.55 0.16 258),oklch(0.35 0.13 258))" },
								children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Submit"]
							})]
						})
					]
				})
			]
		})
	}, "admission") });
}
var ease = [
	.22,
	1,
	.36,
	1
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [enroll, setEnroll] = (0, import_react.useState)(false);
	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));
	const router = useRouter();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isInner = pathname !== "/" && pathname !== "/admin";
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menu ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menu]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
			initial: {
				y: -20,
				opacity: 0,
				height: 72
			},
			animate: {
				y: 0,
				opacity: 1,
				height: scrolled ? 62 : 72
			},
			transition: {
				duration: .5,
				ease
			},
			style: {
				backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "blur(14px) saturate(1.2)",
				WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "blur(14px) saturate(1.2)",
				boxShadow: scrolled ? "0 18px 50px -18px rgba(15,23,42,0.28)" : "0 8px 30px -12px rgba(15,23,42,0.12)",
				backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.78)",
				transition: "background-color 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 500ms cubic-bezier(0.22,1,0.36,1)"
			},
			className: "fixed inset-x-3 top-3 z-50 mx-auto max-w-6xl rounded-[28px] ring-1 ring-black/5 md:inset-x-6 md:top-4 lg:inset-x-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full items-center justify-between gap-2 px-3 md:gap-3 md:px-6",
				children: [
					isInner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => router.history.back(),
						"aria-label": "Go back",
						className: `focus-luxe grid shrink-0 place-items-center rounded-full bg-white text-foreground ring-1 ring-black/5 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out hover:scale-105 active:scale-95 md:hidden ${scrolled ? "h-10 w-10" : "h-11 w-11"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: `flex min-w-0 items-center gap-2.5 md:gap-3 ${isInner ? "absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" : ""}`,
						"aria-label": "Chaitanya EM School — Home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-crest.jpeg",
							alt: "",
							className: `shrink-0 rounded-full object-cover ring-1 ring-black/5 transition-all duration-500 ease-out ${scrolled ? "h-10 w-10 md:h-12 md:w-12" : "h-12 w-12 md:h-14 md:w-14"}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-wordmark.png",
							alt: "Chaitanya (E.M.) High School",
							className: `object-contain object-left transition-all duration-500 ease-out ${scrolled ? "h-10 md:h-12" : "h-12 md:h-14"}`
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							activeProps: { className: "bg-black/5 text-primary" },
							activeOptions: { exact: item.to === "/" },
							className: "rounded-full px-4 py-2 font-nav text-[14px] font-semibold tracking-tight text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground",
							children: item.label
						}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setEnroll(true),
							className: "ml-2 focus-luxe rounded-full bg-primary px-5 py-2.5 font-nav text-[14px] font-bold text-white shadow-[0_10px_28px_-10px_rgba(34,64,180,0.55)] transition-all hover:scale-[1.03] active:scale-95",
							children: "Enroll"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMenu(true),
						"aria-label": "Open menu",
						"aria-expanded": menu,
						className: `focus-luxe grid shrink-0 place-items-center rounded-full text-white shadow-[0_10px_28px_-10px_rgba(34,64,180,0.55)] transition-all duration-500 ease-out hover:scale-105 active:scale-95 md:hidden ${scrolled ? "h-10 w-10" : "h-11 w-11"}`,
						style: { background: "linear-gradient(135deg,oklch(0.52 0.16 258),oklch(0.36 0.13 258))" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuOverlay, {
			open: menu,
			onClose: () => setMenu(false),
			onEnroll: () => setEnroll(true)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmissionDialog, {
			open: enroll,
			onClose: () => setEnroll(false)
		})
	] });
}
function MenuOverlay({ open, onClose, onEnroll }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .14,
			ease
		},
		className: "fixed inset-0 z-[60] px-3 pt-4 backdrop-blur-md",
		style: { background: "rgba(23, 26, 62, 0.42)" },
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
			initial: {
				opacity: 0,
				y: -18,
				scale: .98
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -12,
				scale: .98
			},
			transition: {
				duration: .2,
				ease
			},
			onClick: (e) => e.stopPropagation(),
			className: "mx-auto max-w-md overflow-hidden rounded-[30px] text-foreground shadow-[0_32px_90px_-28px_rgba(20,30,90,0.55)]",
			style: { background: "radial-gradient(120% 90% at 0% 0%, oklch(0.98 0.02 78) 0%, transparent 55%), radial-gradient(120% 90% at 100% 100%, oklch(0.94 0.06 258) 0%, transparent 55%), linear-gradient(180deg,#ffffff 0%,oklch(0.97 0.02 148) 100%)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-between rounded-full px-3 py-3 ring-1 ring-black/5",
					style: { background: "linear-gradient(135deg,oklch(0.96 0.02 78) 0%,oklch(0.93 0.05 258) 100%)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-crest.jpeg",
							alt: "",
							className: "h-12 w-12 shrink-0 rounded-full bg-white p-1 ring-1 ring-black/5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-wordmark.png",
							alt: "Chaitanya (E.M.) High School",
							className: "h-12 object-contain object-left"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						"aria-label": "Close menu",
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full text-white shadow-[0_8px_20px_-8px_rgba(200,70,70,0.55)] active:scale-95 transition-transform",
						style: { background: "linear-gradient(135deg,oklch(0.72 0.17 28),oklch(0.56 0.19 28))" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "relative px-6 pb-2 pt-5",
					children: navItems.map((item, i) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: i * .01,
								duration: .14,
								ease
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								onClick: () => {
									onClose();
									window.setTimeout(() => {
										window.scrollTo({
											top: 0,
											behavior: "smooth"
										});
									}, 120);
								},
								activeProps: { className: "is-active text-[oklch(0.22_0.14_258)]" },
								activeOptions: { exact: item.to === "/" },
								className: "font-nav group flex min-h-12 items-center gap-3 rounded-2xl px-2 py-1.5 text-[21px] leading-[1.25] text-[oklch(0.2_0.035_258)] transition-all duration-200 md:text-[22px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": true,
												className: "pointer-events-none absolute -inset-1.5 rounded-full opacity-0 blur-[10px] transition-opacity duration-300 group-[.is-active]:opacity-70",
												style: { background: item.gradient }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "peer relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-white shadow-[0_8px_18px_-8px_rgba(20,30,90,0.45)] ring-1 ring-white/70 transition-all duration-300 ease-out group-hover:scale-105 group-[.is-active]:scale-100 group-[.is-active]:ring-2 group-[.is-active]:ring-offset-2 group-[.is-active]:ring-offset-white group-[.is-active]:shadow-[0_14px_30px_-8px_rgba(20,30,90,0.55)] group-active:scale-95 motion-safe:group-[.is-active]:animate-[scale-in_.22s_ease-out]",
												style: { background: item.gradient },
												"aria-describedby": `nav-tip-${i}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "h-[18px] w-[18px]",
													strokeWidth: 2.4
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												id: `nav-tip-${i}`,
												role: "tooltip",
												className: "pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-[oklch(0.2_0.04_258)] px-2.5 py-1 text-[11px] font-medium leading-tight text-white opacity-0 shadow-lg ring-1 ring-black/10 transition-all duration-200 ease-out peer-hover:translate-y-0 peer-hover:opacity-100 peer-focus-visible:translate-y-0 peer-focus-visible:opacity-100",
												children: [item.tooltip, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": true,
													className: "absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[oklch(0.2_0.04_258)]"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "transition-all duration-200 group-[.is-active]:font-bold group-[.is-active]:tracking-[-0.02em]",
										children: item.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "ml-auto h-2 w-2 shrink-0 scale-0 rounded-full opacity-0 shadow-[0_0_0_3px_rgba(255,255,255,0.9)] transition-all duration-300 ease-out group-[.is-active]:scale-100 group-[.is-active]:opacity-100",
										style: { background: item.gradient }
									})
								]
							})
						}, item.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative px-5 pb-5 pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onClose();
							onEnroll();
						},
						className: "font-nav flex h-14 w-full items-center justify-center gap-2 rounded-full text-[15px] font-bold text-white shadow-[0_16px_40px_-14px_rgba(34,64,180,0.55)] active:scale-[0.98] transition-transform",
						style: { background: "linear-gradient(135deg,oklch(0.55 0.16 258) 0%,oklch(0.35 0.13 258) 100%)" },
						children: ["Enroll now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						})]
					})
				})
			]
		})
	}) });
}
//#endregion
export { SiteHeader as i, ContactActions as n, SiteFooter as r, AdmissionDialog as t };
