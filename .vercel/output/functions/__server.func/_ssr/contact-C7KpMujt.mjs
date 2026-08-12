import { o as __toESM } from "../_runtime.mjs";
import { o as useContent } from "./router-TINUFHpO.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as MapPin, d as Send, q as Clock } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, n as ContactActions, r as SiteFooter, t as AdmissionDialog } from "./site-header-CtjUfMZJ.mjs";
import { t as LocationSection } from "./location-section-BuLWrSbU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C7KpMujt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const contact = useContent("contact_info");
	const [enquiryOpen, setEnquiryOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[radial-gradient(circle_at_10%_0%,oklch(0.95_0.05_78/0.4),transparent_50%),radial-gradient(circle_at_90%_100%,oklch(0.93_0.06_258/0.35),transparent_55%)] bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { label: "Contact" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 pt-28 pb-8 md:px-10 md:pt-36 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground",
						children: "Say hello"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 text-[44px] font-semibold leading-[0.98] tracking-[-0.04em] md:text-[72px] lg:text-[88px]",
						children: [
							"One tap",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-editorial",
								style: { fontWeight: 400 },
								children: "away."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground md:text-[16px]",
						children: "Whether it's admissions, a campus visit or a quick question — we'd love to hear from you."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl md:px-6 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:grid md:grid-cols-2 md:gap-8 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-4 pb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactActions, {
							tel: contact.phone,
							whatsapp: contact.whatsapp,
							email: contact.email,
							className: "grid-cols-1"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-4 pt-6 pb-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[28px] bg-white p-6 ring-1 ring-black/5 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground",
									children: "Admission enquiry"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-[22px] font-semibold tracking-[-0.03em] md:text-[26px]",
									children: "Start your application"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-[46ch] text-[13.5px] leading-relaxed text-muted-foreground",
									children: "Share a few details and our admissions office will reach out. It takes less than a minute."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEnquiryOpen(true),
									className: "mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[14px] font-semibold text-white shadow-[0_18px_40px_-18px_rgba(34,64,180,0.6)] transition-transform duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.97]",
									style: { background: "linear-gradient(135deg,oklch(0.55 0.16 258),oklch(0.35 0.13 258))" },
									children: ["Open admission form", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
										className: "h-4 w-4",
										strokeWidth: 2.4
									})]
								})
							]
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-4 pb-12 md:pt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[28px] bg-white ring-1 ring-black/5 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-4 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground",
										children: "Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-[14px] whitespace-pre-line",
										children: contact.address
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground",
										children: "Office hours"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-[14px]",
										children: "Mon – Sat · 9:00 AM – 4:30 PM"
									})] })]
								})]
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmissionDialog, {
				open: enquiryOpen,
				onClose: () => setEnquiryOpen(false),
				whatsapp: contact.whatsapp
			})
		]
	});
}
function PageHeader(_) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {});
}
//#endregion
export { ContactPage as component };
