import { o as __toESM, r as __exportAll$1 } from "../_runtime.mjs";
import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { a as orderBy, c as updateDoc, d as getFirestore, f as serverTimestamp, i as onSnapshot, l as collection, n as deleteDoc, o as query, r as limit, s as setDoc, t as addDoc, u as doc } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
import { i as signOut, n as onAuthStateChanged, r as signInWithEmailAndPassword, t as getAuth } from "../_libs/firebase__auth.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { S as useRouter, V as notFound, _ as lazyRouteComponent, b as Link, d as HeadContent, f as useLocation, g as Outlet, h as createRouter, p as useRouterState, u as Scripts, v as createFileRoute, x as useNavigate, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { c as useMotionValueEvent, r as useReducedMotion, s as useScroll, u as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { $ as Check, A as Lock, B as Eye, C as MessageCircle, F as House, G as Copy, H as ExternalLink, I as GripVertical, K as Cloud, M as Inbox, N as Image, O as Mail, P as Images, Q as ChevronDown, S as Monitor, T as Megaphone, U as Download, V as EyeOff, Y as CircleAlert, Z as ChevronLeft, _ as Phone, a as Trash2, at as ArrowRight, c as Smartphone, ct as Activity, f as Search, h as Plus, j as LoaderCircle, k as LogOut, l as ShieldCheck, m as RefreshCw, n as Users, o as Tablet, ot as ArrowLeft, r as Upload, rt as ArrowUp, s as Sparkles, st as Archive, t as X, tt as Building2, u as Settings, w as Menu, y as Pencil, z as FileText } from "../_libs/lucide-react.mjs";
import { n as useLenis, t as ReactLenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-merge-D4xc1ddu.js
/**
* Firebase web config comes from VITE_* env vars (see .env / .env.local).
* Web API keys are publishable — security is enforced by Auth & Firestore rules.
*/
var env = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_CLOUDINARY_CLOUD_NAME": "lc2wkrzj",
	"VITE_CLOUDINARY_UPLOAD_PRESET": "chaitanya",
	"VITE_FIREBASE_API_KEY": "AIzaSyBXJJq6Oy1Tqv7tfOq6AL_B1Xnc5l6QUFU",
	"VITE_FIREBASE_APP_ID": "1:282082683305:web:01112d3af794017960fcb8",
	"VITE_FIREBASE_AUTH_DOMAIN": "chaitanya-em-school-b3012.firebaseapp.com",
	"VITE_FIREBASE_MEASUREMENT_ID": "G-JGN5XHKM1K",
	"VITE_FIREBASE_MESSAGING_SENDER_ID": "282082683305",
	"VITE_FIREBASE_PROJECT_ID": "chaitanya-em-school-b3012",
	"VITE_FIREBASE_STORAGE_BUCKET": "chaitanya-em-school-b3012.firebasestorage.app"
};
var firebaseConfig = {
	apiKey: env.VITE_FIREBASE_API_KEY,
	authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: env.VITE_FIREBASE_APP_ID,
	measurementId: env.VITE_FIREBASE_MEASUREMENT_ID
};
var firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
var auth = getAuth(firebaseApp);
var db = getFirestore(firebaseApp);
var hero_assembly_best_png_asset_default = {
	asset_id: "3e79b660-3982-4091-bc6f-e03a434c9df1",
	content_type: "image/png",
	created_at: "2026-07-23T16:58:59Z",
	original_filename: "hero-assembly-best.png",
	project_id: "4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8",
	r2_key: "a/v1/4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8/3e79b660-3982-4091-bc6f-e03a434c9df1/hero-assembly-best.png",
	size: 2213411,
	url: "/__l5e/assets-v1/3e79b660-3982-4091-bc6f-e03a434c9df1/hero-assembly-best.png",
	version: 1
};
var hero_2_classroom_png_asset_default = {
	asset_id: "205ee5df-72ff-47ca-8098-faf3dbbd9cbc",
	content_type: "image/png",
	created_at: "2026-07-23T16:54:54Z",
	original_filename: "hero-2-classroom.png",
	project_id: "4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8",
	r2_key: "a/v1/4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8/205ee5df-72ff-47ca-8098-faf3dbbd9cbc/hero-2-classroom.png",
	size: 2292376,
	url: "/__l5e/assets-v1/205ee5df-72ff-47ca-8098-faf3dbbd9cbc/hero-2-classroom.png",
	version: 1
};
var hero_3_students_png_asset_default = {
	asset_id: "66b5dd2c-e0c9-4a27-8ed0-c3c2e7acbc8f",
	content_type: "image/png",
	created_at: "2026-07-23T16:54:59Z",
	original_filename: "hero-3-students.png",
	project_id: "4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8",
	r2_key: "a/v1/4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8/66b5dd2c-e0c9-4a27-8ed0-c3c2e7acbc8f/hero-3-students.png",
	size: 2319579,
	url: "/__l5e/assets-v1/66b5dd2c-e0c9-4a27-8ed0-c3c2e7acbc8f/hero-3-students.png",
	version: 1
};
var hero_4_campus_png_asset_default = {
	asset_id: "c5fbb422-269e-46bc-b3ac-3e84f519ac13",
	content_type: "image/png",
	created_at: "2026-07-23T16:55:05Z",
	original_filename: "hero-4-campus.png",
	project_id: "4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8",
	r2_key: "a/v1/4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8/c5fbb422-269e-46bc-b3ac-3e84f519ac13/hero-4-campus.png",
	size: 2997060,
	url: "/__l5e/assets-v1/c5fbb422-269e-46bc-b3ac-3e84f519ac13/hero-4-campus.png",
	version: 1
};
var classroom_default = "/assets/classroom-B0JmcwWN.jpg";
var science_default = "/assets/science-CD-t20JM.jpg";
var sports_default = "/assets/sports-Du5sBUbb.jpg";
var dance_default = "/assets/dance-j77jNDIM.jpg";
var school_bus_default = "/assets/school-bus-D_Rfd8Jg.jpg";
var journey_hero_default = "/assets/journey-hero-Bv8i1ccx.jpg";
var life_hero_default = "/assets/life-hero-BAR5qywL.jpg";
var life_annualday_default = "/assets/life-annualday-CwSF47UG.jpg";
var life_sports_default = "/assets/life-sports-CDlv-H_Z.jpg";
var life_science_default = "/assets/life-science-mkv-Ld0q.jpg";
var life_drawing_default = "/assets/life-drawing-BO2QWlwN.jpg";
var life_independence_default = "/assets/life-independence-CppOyUwE.jpg";
var life_yoga_default = "/assets/life-yoga-DzovjpMj.jpg";
var life_dance_default = "/assets/life-dance-DuP3y9FJ.jpg";
var life_festival_default = "/assets/life-festival-DsRNQE7z.jpg";
var life_parents_default = "/assets/life-parents-CHhfAGIa.jpg";
var life_assembly_default = "/assets/life-assembly-BrdwvGNw.jpg";
var leader_nagaraju_png_asset_default = {
	asset_id: "33794b24-8b14-4952-9872-8fe2f223930d",
	content_type: "image/png",
	created_at: "2026-07-27T17:57:29Z",
	original_filename: "leader-nagaraju.png",
	project_id: "4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8",
	r2_key: "a/v1/4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8/33794b24-8b14-4952-9872-8fe2f223930d/leader-nagaraju.png",
	size: 2063502,
	url: "/__l5e/assets-v1/33794b24-8b14-4952-9872-8fe2f223930d/leader-nagaraju.png",
	version: 1
};
var leader_nagababu_png_asset_default = {
	asset_id: "b6f1ff94-de7c-41ff-ac3d-1e1ef2bc04b9",
	content_type: "image/png",
	created_at: "2026-07-27T17:57:33Z",
	original_filename: "leader-nagababu.png",
	project_id: "4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8",
	r2_key: "a/v1/4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8/b6f1ff94-de7c-41ff-ac3d-1e1ef2bc04b9/leader-nagababu.png",
	size: 2054543,
	url: "/__l5e/assets-v1/b6f1ff94-de7c-41ff-ac3d-1e1ef2bc04b9/leader-nagababu.png",
	version: 1
};
var student_reading_default = "/assets/student-reading-Bk6PonIN.jpg";
var lead_school_motto_jpeg_asset_default = {
	asset_id: "df8d62ca-b5d2-40b9-a144-a66796c44662",
	content_type: "image/jpeg",
	created_at: "2026-07-21T03:16:51Z",
	original_filename: "lead-school-motto.jpeg",
	project_id: "4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8",
	r2_key: "a/v1/4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8/df8d62ca-b5d2-40b9-a144-a66796c44662/lead-school-motto.jpeg",
	size: 161080,
	url: "/__l5e/assets-v1/df8d62ca-b5d2-40b9-a144-a66796c44662/lead-school-motto.jpeg",
	version: 1
};
var hero_classroom_full_png_asset_default = {
	asset_id: "dc112c9c-8e8d-4655-a117-b629ba1f95e4",
	content_type: "image/png",
	created_at: "2026-07-23T16:43:19Z",
	original_filename: "hero-classroom-full.png",
	project_id: "4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8",
	r2_key: "a/v1/4fec4e36-48ea-4ac1-b692-e4b3f87c7cb8/dc112c9c-8e8d-4655-a117-b629ba1f95e4/hero-classroom-full.png",
	size: 2292376,
	url: "/__l5e/assets-v1/dc112c9c-8e8d-4655-a117-b629ba1f95e4/hero-classroom-full.png",
	version: 1
};
var library_default = "/assets/library-BWOXsYsb.jpg";
var academics_hero_default = "/assets/academics-hero-51WwceVx.jpg";
var ACADEMIC_STAGES = [
	{
		slug: "foundation",
		tag: "Foundation",
		grades: "Nursery — Grade 3",
		line: "Play. Wonder. Discover.",
		bg: "linear-gradient(160deg, oklch(0.94 0.05 62) 0%, oklch(0.87 0.10 52) 100%)",
		fg: "text-foreground",
		tone: "light",
		preview: {
			title: "Building the First Foundations",
			description: "Early learning is where curiosity begins. Our foundation years focus on developing confidence, communication, creativity and a joyful relationship with learning.",
			image: student_reading_default,
			focus: [
				"Early curiosity",
				"Communication",
				"Creativity",
				"Foundational learning"
			],
			cta: "View Foundation Programme"
		},
		detail: {
			heroImage: student_reading_default,
			headline: ["Where the first questions", "become a lifelong curiosity."],
			intro: "From Nursery to Grade 3, children learn through play, story and hands-on discovery — in classrooms designed for how young minds actually work.",
			overview: "The foundation years build the habits that carry a child through school: listening, speaking, questioning and the confidence to try. Every day balances structured literacy and numeracy with music, art, movement and free exploration.",
			approach: [
				{
					title: "Learning through play",
					body: "Concepts arrive as games, songs and stories first — so understanding is felt before it is written."
				},
				{
					title: "Language from day one",
					body: "English is spoken warmly and constantly, supported in the mother tongue so no child feels lost."
				},
				{
					title: "Small, watchful classes",
					body: "Teachers track each child individually and adjust pace, so quiet children are never left behind."
				}
			],
			development: [
				"Confidence to speak in front of a group",
				"Fine motor skills, handwriting and early reading",
				"Number sense through concrete materials",
				"Kindness, sharing and classroom routines"
			],
			gallery: [academics_hero_default, library_default]
		}
	},
	{
		slug: "development",
		tag: "Development",
		grades: "Grade 4 — Grade 7",
		line: "LEAD curriculum, activity based.",
		bg: "linear-gradient(160deg, oklch(0.36 0.12 260) 0%, oklch(0.24 0.09 264) 100%)",
		fg: "text-white",
		tone: "dark",
		preview: {
			title: "Growing Knowledge and Confidence",
			description: "As children grow, learning becomes deeper, more independent and more connected to the world around them.",
			image: classroom_default,
			focus: [
				"Strong academic foundations",
				"Independent thinking",
				"Exploration",
				"Confidence"
			],
			cta: "View Development Programme"
		},
		detail: {
			heroImage: classroom_default,
			headline: ["Where knowledge turns", "into independent thinking."],
			intro: "Grades 4 to 7 deepen every subject through the LEAD curriculum — activity-led lessons, reading pods and smart classroom experiences.",
			overview: "This is the stage where students move from being taught to learning on their own. Concepts are introduced through activity, tested through discussion and applied through projects, so understanding is durable rather than memorised.",
			approach: [
				{
					title: "Activity-led lessons",
					body: "Every concept is done before it is written — experiments, models, role-play and group tasks."
				},
				{
					title: "Reading and expression",
					body: "Structured reading pods and regular writing build vocabulary, comprehension and a clear voice."
				},
				{
					title: "Continuous assessment",
					body: "Frequent low-stakes checks show exactly where a student stands, long before an exam does."
				}
			],
			development: [
				"Independent study and note-making habits",
				"Comfort with mathematics and reasoning",
				"Curiosity about science and the wider world",
				"Teamwork, presentation and leadership"
			],
			gallery: [life_science_default, library_default]
		}
	},
	{
		slug: "excellence",
		tag: "Excellence",
		grades: "Grade 8 — Grade 10",
		line: "IIT Foundation. Board excellence.",
		bg: "linear-gradient(160deg, oklch(0.60 0.09 46) 0%, oklch(0.46 0.09 40) 100%)",
		fg: "text-white",
		tone: "dark",
		preview: {
			title: "Preparing for the Next Chapter",
			description: "The senior years help students build knowledge, discipline and confidence as they prepare for future academic opportunities.",
			image: science_default,
			focus: [
				"Academic preparation",
				"Critical thinking",
				"Confidence",
				"Future readiness"
			],
			cta: "View Excellence Programme"
		},
		detail: {
			heroImage: science_default,
			headline: ["Where preparation becomes", "quiet, lasting confidence."],
			intro: "Grades 8 to 10 combine board preparation with an integrated IIT Foundation track in mathematics, science and reasoning.",
			overview: "Senior students work to a clear rhythm: concept, practice, review. Alongside the board syllabus, the IIT Foundation programme strengthens problem-solving and exam temperament so students step into Intermediate and competitive exams already prepared.",
			approach: [
				{
					title: "Integrated IIT Foundation",
					body: "Advanced problem sets in maths, physics and chemistry run alongside the regular syllabus."
				},
				{
					title: "Exam craft",
					body: "Timed practice, paper analysis and revision cycles remove the fear from board examinations."
				},
				{
					title: "Mentored guidance",
					body: "Each student gets regular one-to-one review of progress, targets and next-step choices."
				}
			],
			development: [
				"Disciplined, self-directed study routines",
				"Critical thinking and applied problem solving",
				"Composure and confidence under examination",
				"Clarity about the path after Grade 10"
			],
			gallery: [life_science_default, academics_hero_default]
		}
	}
];
function getStage(slug) {
	return ACADEMIC_STAGES.find((s) => s.slug === slug);
}
var CONTENT_SECTIONS = [
	{
		key: "home_hero",
		page: "Home",
		title: "Hero",
		description: "The first cinematic frame visitors see.",
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text",
				placeholder: "Chaitanya · Since 2012"
			},
			{
				key: "headline",
				label: "Headline (line 1)",
				type: "text",
				placeholder: "Learning today."
			},
			{
				key: "headlineTwo",
				label: "Headline (line 2)",
				type: "text",
				placeholder: "Leading tomorrow."
			},
			{
				key: "subline",
				label: "Subline",
				type: "textarea",
				placeholder: "A school for complete knowledge…"
			},
			{
				key: "ctaPrimary",
				label: "Primary button label",
				type: "text",
				placeholder: "Book a visit"
			},
			{
				key: "ctaSecondary",
				label: "Secondary button label",
				type: "text",
				placeholder: "Our academics"
			}
		],
		lists: [{
			key: "slides",
			label: "Hero rotating images",
			itemLabel: "Slide",
			fields: [{
				key: "image",
				label: "Image",
				type: "image"
			}, {
				key: "alt",
				label: "Alt text",
				type: "text"
			}]
		}]
	},
	{
		key: "home_about",
		page: "Home",
		title: "About strip",
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text"
			},
			{
				key: "title",
				label: "Title",
				type: "text"
			},
			{
				key: "body",
				label: "Body",
				type: "textarea"
			},
			{
				key: "image",
				label: "Thumbnail",
				type: "image"
			}
		]
	},
	{
		key: "home_academics",
		page: "Home",
		title: "Academics stages",
		description: "The three cards shown on the home page.",
		lists: [{
			key: "stages",
			label: "Stages",
			itemLabel: "Stage",
			fields: [
				{
					key: "title",
					label: "Title",
					type: "text",
					placeholder: "Foundation"
				},
				{
					key: "ages",
					label: "Ages / grades",
					type: "text",
					placeholder: "Nursery — UKG"
				},
				{
					key: "tagline",
					label: "Tagline",
					type: "text"
				},
				{
					key: "body",
					label: "Body",
					type: "textarea"
				},
				{
					key: "image",
					label: "Image",
					type: "image"
				}
			]
		}]
	},
	{
		key: "facilities",
		page: "Facilities",
		title: "Facility cards",
		lists: [{
			key: "items",
			label: "Facilities",
			itemLabel: "Facility",
			fields: [
				{
					key: "title",
					label: "Title",
					type: "text"
				},
				{
					key: "tag",
					label: "Small label",
					type: "text",
					placeholder: "Digital learning"
				},
				{
					key: "body",
					label: "Description",
					type: "textarea"
				},
				{
					key: "image",
					label: "Image",
					type: "image"
				}
			]
		}]
	},
	{
		key: "about_hero",
		page: "About School",
		title: "Editorial hero",
		description: "The opening frame of the About page — headline, paragraph, both photos and the year badge.",
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text"
			},
			{
				key: "line1",
				label: "Headline line 1",
				type: "text"
			},
			{
				key: "line2",
				label: "Headline line 2",
				type: "text"
			},
			{
				key: "line3",
				label: "Headline line 3 (accent)",
				type: "text"
			},
			{
				key: "paragraph",
				label: "Paragraph",
				type: "textarea"
			},
			{
				key: "imageMain",
				label: "Main photo",
				type: "image"
			},
			{
				key: "imageSmall",
				label: "Small overlapping photo",
				type: "image"
			},
			{
				key: "badgeLabel",
				label: "Badge label",
				type: "text",
				placeholder: "Est."
			},
			{
				key: "badgeValue",
				label: "Badge value",
				type: "text",
				placeholder: "2015"
			}
		]
	},
	{
		key: "about_beginning",
		page: "About School",
		title: "Where it began",
		description: "The 2015 origin story block — text, photo and the first-year caption.",
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text"
			},
			{
				key: "year",
				label: "Big background year",
				type: "text",
				placeholder: "2015"
			},
			{
				key: "title",
				label: "Heading",
				type: "text",
				placeholder: "Every meaningful journey"
			},
			{
				key: "titleEm",
				label: "Heading accent",
				type: "text",
				placeholder: "starts small"
			},
			{
				key: "para1",
				label: "Paragraph 1",
				type: "textarea"
			},
			{
				key: "para2",
				label: "Paragraph 2",
				type: "textarea"
			},
			{
				key: "image",
				label: "Photo",
				type: "image"
			},
			{
				key: "badgeLabel",
				label: "Badge label",
				type: "text",
				placeholder: "First year"
			},
			{
				key: "badgeTitle",
				label: "Badge text",
				type: "text",
				placeholder: "One room."
			},
			{
				key: "badgeEm",
				label: "Badge accent text",
				type: "text",
				placeholder: "One dream."
			}
		]
	},
	{
		key: "about_timeline",
		page: "About School",
		title: "The journey (timeline)",
		description: "Heading and every milestone card on the About timeline.",
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text"
			},
			{
				key: "title",
				label: "Heading",
				type: "text",
				placeholder: "Growing, one"
			},
			{
				key: "titleEm",
				label: "Heading accent",
				type: "text",
				placeholder: "chapter"
			},
			{
				key: "titleTail",
				label: "Heading ending",
				type: "text",
				placeholder: "at a time."
			}
		],
		lists: [{
			key: "milestones",
			label: "Milestones",
			itemLabel: "Milestone",
			fields: [
				{
					key: "year",
					label: "Year / phase",
					type: "text"
				},
				{
					key: "title",
					label: "Title",
					type: "text"
				},
				{
					key: "body",
					label: "Description",
					type: "textarea"
				}
			]
		}]
	},
	{
		key: "about_moto",
		page: "About School",
		title: "Our moto (LEAD)",
		description: "The LEAD cycle heading, image and the four stage cards.",
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text"
			},
			{
				key: "title",
				label: "Heading",
				type: "text",
				placeholder: "Learning is a"
			},
			{
				key: "titleEm",
				label: "Heading accent",
				type: "text",
				placeholder: "journey"
			},
			{
				key: "titleTail",
				label: "Heading ending",
				type: "text",
				placeholder: ". We make every step count."
			},
			{
				key: "paragraph",
				label: "Paragraph",
				type: "textarea"
			},
			{
				key: "image",
				label: "LEAD circle image",
				type: "image"
			}
		],
		lists: [{
			key: "stages",
			label: "LEAD stages",
			itemLabel: "Stage",
			fields: [
				{
					key: "n",
					label: "Number",
					type: "text",
					placeholder: "01"
				},
				{
					key: "title",
					label: "Title",
					type: "text"
				},
				{
					key: "body",
					label: "Description",
					type: "textarea"
				}
			]
		}]
	},
	{
		key: "about_people_intro",
		page: "About School",
		title: "People — heading",
		description: "The heading and intro text above the leadership cards.",
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text"
			},
			{
				key: "title",
				label: "Heading line 1",
				type: "text"
			},
			{
				key: "titleEm",
				label: "Heading line 2 (accent)",
				type: "text"
			},
			{
				key: "paragraph",
				label: "Intro paragraph",
				type: "textarea"
			}
		]
	},
	{
		key: "about_cta",
		page: "About School",
		title: "Come visit (final CTA)",
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text"
			},
			{
				key: "title",
				label: "Heading",
				type: "text",
				placeholder: "Come and see where the"
			},
			{
				key: "titleEm",
				label: "Heading accent",
				type: "text",
				placeholder: "journey"
			},
			{
				key: "titleTail",
				label: "Heading ending",
				type: "text",
				placeholder: "continues."
			},
			{
				key: "paragraph",
				label: "Paragraph",
				type: "textarea"
			},
			{
				key: "ctaPrimary",
				label: "Primary button label",
				type: "text"
			},
			{
				key: "ctaSecondary",
				label: "Secondary button label",
				type: "text"
			},
			{
				key: "image",
				label: "Photo",
				type: "image"
			}
		]
	},
	{
		key: "about_leadership",
		page: "About School",
		title: "The People Behind Us",
		description: "The three leaders shown on the About page. Upload, replace or remove each portrait — order is Nagaraju, Nagababu, Kesava.",
		lists: [{
			key: "people",
			label: "Leaders",
			itemLabel: "Person",
			fields: [
				{
					key: "name",
					label: "Name",
					type: "text"
				},
				{
					key: "role",
					label: "Role",
					type: "text"
				},
				{
					key: "tagline",
					label: "Tagline",
					type: "text"
				},
				{
					key: "photo",
					label: "Portrait",
					type: "image",
					help: "Portrait photo — 4:5 works best."
				}
			]
		}]
	},
	{
		key: "gallery_videos",
		page: "Life / Gallery",
		title: "Video stories (YouTube)",
		description: "Cards in the Video Stories section. Paste the full YouTube link — the thumbnail is picked up automatically.",
		lists: [{
			key: "items",
			label: "Videos",
			itemLabel: "Video",
			fields: [
				{
					key: "url",
					label: "YouTube link",
					type: "url",
					placeholder: "https://www.youtube.com/watch?v=..."
				},
				{
					key: "title",
					label: "Event title",
					type: "text",
					placeholder: "Annual Day Highlights"
				},
				{
					key: "label",
					label: "Category / year",
					type: "text",
					placeholder: "Event · 2024"
				},
				{
					key: "thumb",
					label: "Custom thumbnail (optional)",
					type: "image",
					help: "Leave empty to use the YouTube thumbnail."
				}
			]
		}]
	},
	{
		key: "home_previews",
		page: "Home",
		title: "Home page sections",
		description: "The big scrolling cards on the home page — About, Academics, Facilities, Gallery, Contact.",
		lists: [{
			key: "cards",
			label: "Sections",
			itemLabel: "Section",
			fields: [
				{
					key: "eyebrow",
					label: "Eyebrow",
					type: "text"
				},
				{
					key: "title",
					label: "Heading",
					type: "text"
				},
				{
					key: "body",
					label: "Description",
					type: "textarea"
				},
				{
					key: "image",
					label: "Image",
					type: "image"
				},
				{
					key: "cta",
					label: "Button label",
					type: "text"
				}
			]
		}]
	},
	{
		key: "gallery_photos",
		page: "Life / Gallery",
		title: "Photo stories",
		description: "Every photo shown in the gallery grid. Replace, reorder, delete or add new ones.",
		lists: [{
			key: "photos",
			label: "Photos",
			itemLabel: "Photo",
			fields: [
				{
					key: "image",
					label: "Photo",
					type: "image"
				},
				{
					key: "title",
					label: "Title",
					type: "text"
				},
				{
					key: "line",
					label: "Caption",
					type: "text"
				},
				{
					key: "category",
					label: "Category",
					type: "text",
					help: "Campus, Classrooms, Events, Annual Day, Sports or Labs."
				}
			]
		}]
	},
	{
		key: "contact_info",
		page: "Contact & Global",
		title: "Contact details",
		description: "Shared across home contact strip, /contact page, and the footer.",
		fields: [
			{
				key: "phone",
				label: "Phone number",
				type: "tel",
				placeholder: "+91 90000 00000"
			},
			{
				key: "whatsapp",
				label: "WhatsApp number (digits only)",
				type: "text",
				placeholder: "910000000000"
			},
			{
				key: "email",
				label: "Email address",
				type: "email"
			},
			{
				key: "address",
				label: "Address",
				type: "textarea"
			},
			{
				key: "mapUrl",
				label: "Google Maps embed URL",
				type: "url"
			}
		]
	},
	{
		key: "footer",
		page: "Contact & Global",
		title: "Footer",
		fields: [
			{
				key: "tagline",
				label: "Tagline",
				type: "textarea"
			},
			{
				key: "instagram",
				label: "Instagram URL",
				type: "url"
			},
			{
				key: "facebook",
				label: "Facebook URL",
				type: "url"
			},
			{
				key: "youtube",
				label: "YouTube URL",
				type: "url"
			}
		]
	}
];
var CONTENT_DEFAULTS = {
	home_hero: {
		eyebrow: "Chaitanya · English Medium School",
		headline: "Learning today.",
		headlineTwo: "Leading tomorrow.",
		subline: "A school for complete knowledge. Nurturing young minds from Nursery through Grade 10 with the LEAD curriculum and IIT Foundation.",
		ctaPrimary: "Book a visit",
		ctaSecondary: "Our academics",
		slides: [
			{
				image: hero_assembly_best_png_asset_default.url,
				alt: "Chaitanya EM High School — morning assembly with students"
			},
			{
				image: hero_2_classroom_png_asset_default.url,
				alt: "Classroom in session with teacher"
			},
			{
				image: hero_3_students_png_asset_default.url,
				alt: "Three students collaborating at a desk"
			},
			{
				image: hero_4_campus_png_asset_default.url,
				alt: "Chaitanya EM High School campus aerial view"
			}
		]
	},
	home_about: {
		eyebrow: "About the school",
		title: "A campus built to grow curious, kind children.",
		body: "From Nursery to Grade 10, Chaitanya blends the LEAD curriculum with an IIT Foundation track — inside classrooms designed for how children actually learn.",
		image: journey_hero_default
	},
	home_academics: { stages: ACADEMIC_STAGES.map((s) => ({
		slug: s.slug,
		title: s.preview.title,
		ages: s.grades,
		tagline: s.line,
		body: s.preview.description,
		image: s.preview.image
	})) },
	home_previews: { cards: [
		{
			eyebrow: "About School",
			title: "A story rooted in Chekkapalli.",
			body: "Since 2015, we've grown a small neighbourhood school into a home for curious minds — guided by three families and a single belief in complete knowledge.",
			image: journey_hero_default,
			cta: "Read our story"
		},
		{
			eyebrow: "Academics",
			title: "Three stages. One clear journey.",
			body: "Foundation play, LEAD activity-based primary years, and an IIT Foundation edge from Grade 6 — designed so every child moves forward with confidence.",
			image: classroom_default,
			cta: "Explore academics"
		},
		{
			eyebrow: "Facilities",
			title: "Spaces built around the child.",
			body: "Bright classrooms, a hands-on science lab, sports ground, safe transport and a warm campus — every corner shaped for how children actually learn.",
			image: hero_4_campus_png_asset_default.url,
			cta: "See the campus"
		},
		{
			eyebrow: "Gallery",
			title: "Life, in motion.",
			body: "Annual day, sports meets, science fairs, festivals, quiet mornings — the everyday moments that make Chaitanya feel like home.",
			image: life_hero_default,
			cta: "Open the gallery"
		},
		{
			eyebrow: "Contact",
			title: "Come, visit us.",
			body: "Admissions, campus tours, a quick question — we're a call or WhatsApp away. Parents in Chekkapalli often just walk in.",
			image: hero_3_students_png_asset_default.url,
			cta: "Get in touch"
		}
	] },
	gallery_photos: { photos: [
		{
			image: life_annualday_default,
			title: "Annual Day",
			line: "One evening, a thousand tiny stars on stage.",
			category: "Annual Day"
		},
		{
			image: life_sports_default,
			title: "Sports Day",
			line: "Small feet, big finish lines.",
			category: "Sports"
		},
		{
			image: life_science_default,
			title: "Science Activities",
			line: "The world begins to answer curious questions.",
			category: "Labs"
		},
		{
			image: life_drawing_default,
			title: "Drawing Competition",
			line: "Imagination arrives on paper first.",
			category: "Events"
		},
		{
			image: classroom_default,
			title: "Classroom Learning",
			line: "Where a quiet spark becomes an idea.",
			category: "Classrooms"
		},
		{
			image: life_independence_default,
			title: "Independence Day",
			line: "Small hands, tallest salute.",
			category: "Events"
		},
		{
			image: life_yoga_default,
			title: "Yoga Day",
			line: "Stillness is also a lesson.",
			category: "Campus"
		},
		{
			image: life_dance_default,
			title: "Dance Performance",
			line: "Rhythm learnt long before the words.",
			category: "Annual Day"
		},
		{
			image: life_festival_default,
			title: "Festival Celebration",
			line: "Lights, laughter, and one big family.",
			category: "Events"
		},
		{
			image: life_parents_default,
			title: "Parents Meeting",
			line: "The most important classroom is a shared one.",
			category: "Campus"
		},
		{
			image: life_assembly_default,
			title: "Morning Assembly",
			line: "Every day begins together.",
			category: "Campus"
		}
	] },
	facilities: { items: [
		{
			title: "Smart Classrooms",
			tag: "Digital learning",
			image: classroom_default,
			body: "Interactive smart boards paired with teachers who still know every child's name."
		},
		{
			title: "Science Lab",
			tag: "Hands-on discovery",
			image: science_default,
			body: "A full science lab where curiosity turns into experiments — chemistry, physics, biology."
		},
		{
			title: "Playground",
			tag: "Room to run",
			image: sports_default,
			body: "Open ground for athletics, cricket, football and daily physical education."
		},
		{
			title: "Arts & Culture",
			tag: "Music · Dance · Drawing",
			image: dance_default,
			body: "Weekly art, dance, music and craft — because a childhood should also feel like joy."
		},
		{
			title: "School Transport",
			tag: "Door to gate",
			image: school_bus_default,
			body: "Safe, GPS-tracked buses with trained attendants across every village route we serve."
		}
	] },
	about_hero: {
		eyebrow: "Chapter Two · Our Story",
		line1: "More than",
		line2: "a school.",
		line3: "A place to grow.",
		paragraph: "Since 2015, Chaitanya EM High School has grown from a small neighbourhood school into a place where children learn, discover and grow with confidence — from Nursery to Grade 10.",
		imageMain: hero_assembly_best_png_asset_default.url,
		imageSmall: student_reading_default,
		badgeLabel: "Est.",
		badgeValue: "2015"
	},
	about_beginning: {
		eyebrow: "Where it began",
		year: "2015",
		title: "Every meaningful journey",
		titleEm: "starts small",
		para1: "Chaitanya began in 2015 with a simple belief — that children deserve an education that develops the whole person, not just the marks on a report card.",
		para2: "One classroom. A handful of families. A quiet promise to teach with patience, care and honesty. That promise still shapes every morning here.",
		image: hero_2_classroom_png_asset_default.url,
		badgeLabel: "First year",
		badgeTitle: "One room.",
		badgeEm: "One dream."
	},
	about_timeline: {
		eyebrow: "The Journey",
		title: "Growing, one",
		titleEm: "chapter",
		titleTail: "at a time.",
		milestones: [
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
		]
	},
	about_people_intro: {
		eyebrow: "The people behind us",
		title: "Every school has a story.",
		titleEm: "Ours is shaped by people.",
		paragraph: "Behind every classroom, every morning assembly and every small milestone are the people who carry this school forward — with care, patience and a steady hand."
	},
	about_moto: {
		eyebrow: "Our moto",
		title: "Learning is a",
		titleEm: "journey",
		titleTail: ". We make every step count.",
		paragraph: "The LEAD cycle shapes how we teach — plan with intent, teach with care, review honestly and evaluate so every child moves forward.",
		image: lead_school_motto_jpeg_asset_default.url,
		stages: [
			{
				n: "01",
				title: "Planning",
				body: "Every meaningful learning journey begins with a clear direction."
			},
			{
				n: "02",
				title: "Implementation",
				body: "Ideas become meaningful through thoughtful action and learning experiences."
			},
			{
				n: "03",
				title: "Review",
				body: "Progress is observed, understood and improved continuously."
			},
			{
				n: "04",
				title: "Evaluation",
				body: "Learning is measured to help every child move forward with confidence."
			}
		]
	},
	about_cta: {
		eyebrow: "Come visit",
		title: "Come and see where the",
		titleEm: "journey",
		titleTail: "continues.",
		paragraph: "Visit our campus, meet our community, and discover what makes Chaitanya feel like home.",
		ctaPrimary: "Plan a visit",
		ctaSecondary: "Explore academics",
		image: hero_classroom_full_png_asset_default.url
	},
	about_leadership: { people: [
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
	] },
	gallery_videos: { items: [
		{
			url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			title: "Annual Day Highlights",
			label: "Event · 2024",
			thumb: ""
		},
		{
			url: "https://www.youtube.com/watch?v=hY7m5jjJ9mM",
			title: "Sports Day Moments",
			label: "Event · 2024",
			thumb: ""
		},
		{
			url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
			title: "Cultural Performance",
			label: "Stage · 2023",
			thumb: ""
		},
		{
			url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
			title: "Science Exhibition",
			label: "Learning · 2023",
			thumb: ""
		},
		{
			url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
			title: "Independence Day",
			label: "Assembly · 2024",
			thumb: ""
		},
		{
			url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
			title: "Campus Tour",
			label: "Our School",
			thumb: ""
		}
	] },
	contact_info: {
		phone: "+91 94913 71708",
		whatsapp: "919491371708",
		email: "chaitanyaemschool27@gmail.com",
		address: "Chekkapalli, Andhra Pradesh",
		mapUrl: ""
	},
	footer: {
		tagline: "A school for complete knowledge. Nurturing young minds from Nursery through Grade 10 with the LEAD curriculum and IIT Foundation.",
		instagram: "https://www.instagram.com/maridhu.nagaraju",
		facebook: "https://www.facebook.com/search/top?q=Nagaraju%20Maridhu",
		youtube: "https://www.youtube.com/@chaitanyaschoolchekkapalli"
	}
};
/**
* Merge a Firestore content doc on top of the built-in defaults.
*
* An empty (or all-blank) array in Firestore usually means the doc was created
* before real content was migrated — falling back to the built-in content keeps
* both the public site and the admin editor showing the real existing content
* instead of an empty state.
*/
function mergeSection(sectionKey, remote) {
	const defaults = CONTENT_DEFAULTS[sectionKey] ?? {};
	const cleaned = {};
	for (const [k, v] of Object.entries(remote ?? {})) {
		if (Array.isArray(v) && Array.isArray(defaults[k])) {
			if (!v.some((item) => item && typeof item === "object" && Object.values(item).some((x) => typeof x === "string" && x.trim() !== ""))) continue;
		}
		cleaned[k] = v;
	}
	return {
		...defaults,
		...cleaned
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DnsFphIK.js
var router_DnsFphIK_exports = /* @__PURE__ */ __exportAll$1({
	a: () => useContent,
	c: () => waHref,
	getRouter: () => getRouter,
	i: () => useIsMobile,
	n: () => Route$1,
	o: () => DREAM_TEAM_URL,
	r: () => AdminPage,
	s: () => SOCIAL,
	t: () => router_exports
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-D5-B0-Gr.css";
/**
* Desktop-only soft radial light following the cursor.
* Styling lives in styles.css (.cursor-spotlight). Very subtle by design.
*/
function MouseSpotlight() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const el = ref.current;
		if (!el) return;
		let raf = 0;
		let x = -100, y = -100;
		const onMove = (e) => {
			x = e.clientX;
			y = e.clientY;
			if (raf) return;
			raf = requestAnimationFrame(() => {
				el.style.setProperty("--cursor-x", `${x}px`);
				el.style.setProperty("--cursor-y", `${y}px`);
				raf = 0;
			});
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => {
			window.removeEventListener("mousemove", onMove);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "cursor-spotlight",
		"aria-hidden": true
	});
}
var ease$6 = [
	.22,
	1,
	.36,
	1
];
/** Total on-screen time of the reveal (ms). */
var DURATION = 3600;
/**
* Premium full-screen opening reveal.
*
* Sequence (~3.6s):
*  0.0s  crest fades up from a soft blur
*  0.4s  crest gently zooms in
*  1.3s  crest eases back out and settles — held clearly on screen throughout
*  1.5s  school name rises into place
*  2.0s  tagline fades in beneath it
*  0.6s+ hairline progress line fills left-to-right
*  3.6s  the whole plate lifts and dissolves into the homepage hero
*/
function LogoLoader() {
	const reduce = useReducedMotion();
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const startedAt = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const total = reduce ? 1200 : DURATION;
		document.body.style.overflow = "hidden";
		startedAt.current = performance.now();
		let raf = 0;
		const tick = () => {
			const p = Math.min(1, (performance.now() - startedAt.current) / total);
			setProgress(1 - Math.pow(1 - p, 2));
			if (p < 1) raf = requestAnimationFrame(tick);
			else {
				setVisible(false);
				document.body.classList.add("loader-finished");
			}
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			document.body.style.overflow = "";
		};
	}, [reduce]);
	(0, import_react.useEffect)(() => {
		if (!visible) document.body.style.overflow = "";
	}, [visible]);
	const d = DURATION / 1e3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[99999] grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,oklch(0.99_0.01_78)_0%,oklch(0.965_0.025_78)_60%,oklch(0.94_0.03_78)_100%)]",
		style: {
			position: "fixed",
			inset: 0,
			zIndex: 99999,
			backgroundColor: "#fdfdfd"
		},
		initial: { opacity: 1 },
		exit: reduce ? { opacity: 0 } : {
			opacity: 0,
			scale: 1.04,
			filter: "blur(6px)"
		},
		transition: {
			duration: reduce ? .3 : .7,
			ease: ease$6
		},
		"aria-label": "Loading Chaitanya EM High School",
		role: "status",
		children: [!reduce && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			initial: { opacity: 0 },
			animate: { opacity: [
				0,
				.9,
				.7
			] },
			transition: {
				duration: d,
				times: [
					0,
					.35,
					1
				],
				ease: "easeInOut"
			},
			style: { background: "radial-gradient(38% 30% at 50% 34%, rgba(198,93,44,0.10) 0%, transparent 70%), radial-gradient(52% 42% at 50% 60%, rgba(38,63,140,0.08) 0%, transparent 75%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex w-full max-w-[min(90vw,460px)] flex-col items-center px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "relative",
					initial: reduce ? { opacity: 1 } : {
						opacity: 0,
						scale: .84,
						filter: "blur(8px)"
					},
					animate: reduce ? {
						opacity: 1,
						scale: 1
					} : {
						opacity: [
							0,
							1,
							1,
							1,
							1
						],
						scale: [
							.84,
							1.08,
							1,
							1.02,
							1
						],
						filter: [
							"blur(8px)",
							"blur(0px)",
							"blur(0px)",
							"blur(0px)",
							"blur(0px)"
						]
					},
					transition: reduce ? {
						duration: .3,
						ease: ease$6
					} : {
						duration: d,
						times: [
							0,
							.28,
							.5,
							.72,
							1
						],
						ease: "easeInOut"
					},
					style: { willChange: "transform, opacity" },
					children: [!reduce && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						"aria-hidden": true,
						className: "absolute left-1/2 top-1/2 block h-[6.75rem] w-[6.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-[rgba(198,93,44,0.35)] sm:h-[8.25rem] sm:w-[8.25rem]",
						initial: {
							opacity: 0,
							scale: 1
						},
						animate: {
							opacity: [
								0,
								.55,
								0
							],
							scale: [
								1,
								1.45,
								1.7
							]
						},
						transition: {
							duration: 2.2,
							delay: .35,
							ease: "easeOut"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-crest.jpeg",
						alt: "Chaitanya EM High School crest",
						className: "relative h-[6.75rem] w-[6.75rem] rounded-full bg-white object-contain p-2 shadow-[0_28px_70px_-34px_rgba(15,23,42,0.55)] ring-1 ring-black/5 sm:h-[8.25rem] sm:w-[8.25rem] md:h-[9.25rem] md:w-[9.25rem]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					className: "font-editorial mt-7 text-[clamp(1.35rem,5.4vw,2.1rem)] leading-tight tracking-tight text-foreground",
					initial: reduce ? { opacity: 1 } : {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: reduce ? .3 : .9,
						delay: reduce ? 0 : 1.5,
						ease: ease$6
					},
					children: "Chaitanya EM High School"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					className: "mt-2.5 text-[9px] font-medium uppercase tracking-[0.3em] text-foreground/45 sm:text-[10px]",
					initial: reduce ? { opacity: 1 } : {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: reduce ? .3 : .8,
						delay: reduce ? 0 : 2,
						ease: ease$6
					},
					children: "A school for complete knowledge"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "relative mt-8 h-[2px] w-[min(60vw,240px)] overflow-hidden rounded-full bg-foreground/10",
					initial: reduce ? { opacity: 1 } : { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .6,
						delay: reduce ? 0 : .6,
						ease: ease$6
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-y-0 left-0 rounded-full",
						style: {
							width: `${progress * 100}%`,
							background: "linear-gradient(90deg, oklch(0.36 0.13 258) 0%, oklch(0.62 0.18 45) 100%)",
							transition: "width 120ms linear"
						}
					})
				})
			]
		})]
	}, "intro") });
}
/** Canonical outbound links for the school. */
var SOCIAL = {
	phone: "+919491371708",
	email: "chaitanyaemschool27@gmail.com",
	whatsapp: "919491371708",
	youtube: "https://www.youtube.com/@chaitanyaschoolchekkapalli",
	facebook: "https://www.facebook.com/search/top?q=Nagaraju%20Maridhu",
	instagram: "https://www.instagram.com/maridhu.nagaraju"
};
/** Partner / developer credit link shown in the footer. */
var DREAM_TEAM_URL = "https://www.thedreamteamservices.com/";
/** Professional pre-filled WhatsApp enquiry message. */
var WA_ENQUIRY_MESSAGE = `Hello Chaitanya EM High School,

I visited your website and would like to know more about admissions.

Please assist me.

Thank you.`;
var telHref = (phone) => `tel:${(phone || SOCIAL.phone).replace(/[^+\d]/g, "")}`;
var waHref = (num, text = WA_ENQUIRY_MESSAGE) => {
	return `https://wa.me/${(num || SOCIAL.whatsapp).replace(/\D/g, "") || SOCIAL.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
};
function useContent(sectionKey) {
	const [data, setData] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") try {
			const cached = localStorage.getItem(`chaitanya_cms_${sectionKey}`);
			if (cached) return mergeSection(sectionKey, JSON.parse(cached));
		} catch {}
		return CONTENT_DEFAULTS[sectionKey] ?? {};
	});
	(0, import_react.useEffect)(() => {
		try {
			return onSnapshot(doc(db, "content", sectionKey), (snap) => {
				const remoteData = snap.data();
				if (remoteData) {
					const merged = mergeSection(sectionKey, remoteData);
					setData(merged);
					try {
						localStorage.setItem(`chaitanya_cms_${sectionKey}`, JSON.stringify(remoteData));
					} catch {}
				}
			});
		} catch {}
	}, [sectionKey]);
	return data;
}
var ease$5 = [
	.22,
	1,
	.36,
	1
];
/** Shared shell: glossy 3D sphere with rim light, inner highlight and depth shadow. */
var BTN = "group pointer-events-auto relative grid h-[40px] w-[40px] place-items-center overflow-hidden rounded-full text-white transition-[transform,box-shadow] duration-300 ease-out will-change-transform [transform:translateZ(0)] hover:-translate-y-0.5 hover:scale-[1.06] active:scale-[0.94] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-[44px] md:w-[44px]";
var sphere = (from, to, glow) => ({
	background: `radial-gradient(120% 120% at 30% 18%, ${from} 0%, ${to} 62%, ${to} 100%)`,
	boxShadow: `inset 0 1px 1px rgba(255,255,255,0.55), inset 0 -6px 12px rgba(0,0,0,0.28), 0 10px 22px -10px ${glow}, 0 3px 8px -4px rgba(15,23,42,0.5)`
});
/** Specular gloss cap + soft bottom bounce light, shared by every button. */
function Gloss() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-x-[14%] top-[5%] h-[42%] rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.06))] blur-[0.3px]"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-x-[22%] bottom-[6%] h-[22%] rounded-[999px] bg-white/15 blur-[3px]"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/35"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -inset-y-full left-[-60%] w-1/2 skew-x-12 bg-white/25 transition-all duration-700 ease-out group-hover:left-[130%]"
		})
	] });
}
/** Official WhatsApp glyph, drawn as vector so it stays crisp at any size. */
function WhatsAppGlyph({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": true,
		focusable: "false",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M16.04 5.5c-5.79 0-10.49 4.7-10.49 10.49 0 1.85.48 3.62 1.4 5.2L5.5 26.5l5.47-1.42a10.44 10.44 0 0 0 5.07 1.29h.01c5.78 0 10.48-4.7 10.48-10.49 0-2.8-1.09-5.43-3.07-7.41a10.4 10.4 0 0 0-7.42-2.97Zm0 19.02h-.01a8.7 8.7 0 0 1-4.43-1.21l-.32-.19-3.25.85.87-3.17-.21-.33a8.68 8.68 0 0 1-1.33-4.64c0-4.81 3.91-8.72 8.72-8.72 2.33 0 4.52.91 6.17 2.56a8.66 8.66 0 0 1 2.55 6.17c0 4.81-3.91 8.68-8.76 8.68Zm4.78-6.5c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.03-.15.17-.3.2-.56.07-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.31-1.55-1.46-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.19s.94 2.54 1.07 2.72c.13.17 1.85 2.83 4.48 3.97.63.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.25.22-.61.22-1.14.15-1.25-.06-.11-.24-.18-.5-.31Z"
		})
	});
}
/**
* Vertical floating dock — Scroll to top, Call, WhatsApp only.
* Uniform diameter, spacing and depth; CSS-only gloss + hover animation.
*/
function FloatingDock() {
	const reduce = useReducedMotion();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { scrollY } = useScroll();
	const lenis = useLenis();
	useMotionValueEvent(scrollY, "change", (y) => {
		const next = y > 320;
		setScrolled((prev) => prev === next ? prev : next);
	});
	const contact = useContent("contact_info");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed bottom-4 right-3 z-40 flex flex-col items-center gap-2.5 md:bottom-6 md:right-6",
		style: { paddingBottom: "env(safe-area-inset-bottom)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: scrolled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				type: "button",
				"aria-label": "Scroll to top",
				onClick: () => reduce ? window.scrollTo({
					top: 0,
					behavior: "auto"
				}) : lenis?.scrollTo(0),
				initial: reduce ? false : {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: 10
				},
				transition: {
					duration: .22,
					ease: ease$5
				},
				className: BTN,
				style: sphere("oklch(0.62 0.11 258)", "oklch(0.30 0.11 258)", "oklch(0.35 0.13 258 / 0.75)"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gloss, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
					className: "relative h-[19px] w-[19px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]",
					strokeWidth: 2.6
				})]
			}, "top") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: telHref(contact.phone),
				"aria-label": "Call the school",
				className: BTN,
				style: sphere("oklch(0.78 0.11 258)", "oklch(0.38 0.15 258)", "oklch(0.5 0.16 258 / 0.75)"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gloss, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					className: "relative h-[19px] w-[19px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]",
					strokeWidth: 2.4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: waHref(contact.whatsapp),
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Chat on WhatsApp",
				className: BTN,
				style: sphere("#5ffc7b", "#25d366", "rgba(37,211,102,0.8)"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gloss, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppGlyph, { className: "relative h-[22px] w-[22px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]" })]
			})
		]
	});
}
function LenisProvider({ children }) {
	const reduce = useReducedMotion();
	const location = useLocation();
	const lenis = useLenis();
	(0, import_react.useEffect)(() => {
		if (lenis) lenis.scrollTo(0, { immediate: true });
	}, [location.pathname, lenis]);
	const [isTouch, setIsTouch] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
	}, []);
	if (reduce || isTouch) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactLenis, {
		root: true,
		options: {
			lerp: .1,
			duration: 1.2,
			smoothWheel: true
		},
		children
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				httpEquiv: "Cache-Control",
				content: "no-cache, no-store, must-revalidate"
			},
			{
				httpEquiv: "Pragma",
				content: "no-cache"
			},
			{
				httpEquiv: "Expires",
				content: "0"
			},
			{ title: "Chaitanya EM High School | Chekkapalli" },
			{
				name: "description",
				content: "Dare to dream, care to achieve — Chaitanya EM High School, Chekkapalli. Nurturing young minds from Nursery to Grade 10 with quality education, the LEAD curriculum and IIT Foundation."
			},
			{
				name: "author",
				content: "Chaitanya EM High School"
			},
			{
				property: "og:title",
				content: "Chaitanya EM High School | Chekkapalli"
			},
			{
				property: "og:description",
				content: "Dare to dream, care to achieve — Chaitanya EM High School, Chekkapalli. Nurturing young minds from Nursery to Grade 10 with quality education, the LEAD curriculum and IIT Foundation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.chaitanyaemhighschool.com/"
			},
			{
				property: "og:site_name",
				content: "Chaitanya EM High School"
			},
			{
				property: "og:image",
				content: "https://www.chaitanyaemhighschool.com/logo-crest.jpeg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Chaitanya EM High School | Chekkapalli"
			},
			{
				name: "twitter:description",
				content: "Dare to dream, care to achieve — nurturing young minds from Nursery to Grade 10."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/logo-crest.jpeg",
				type: "image/jpeg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "EducationalOrganization",
				name: "Chaitanya EM High School",
				url: "https://www.chaitanyaemhighschool.com/",
				logo: "https://www.chaitanyaemhighschool.com/logo-crest.jpeg",
				slogan: "Dare to dream, care to achieve",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Chekkapalli",
					addressRegion: "Andhra Pradesh",
					addressCountry: "IN"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
          body:not(.loader-finished) #app-content {
            opacity: 0;
            visibility: hidden;
          }
          body.loader-finished #app-content {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.8s ease-in-out;
          }
        ` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	const isAdmin = useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LenisProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoLoader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "app-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDock, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MouseSpotlight, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				richColors: true,
				closeButton: true
			})
		]
	}) });
}
var $$splitComponentImporter$7 = () => import("./routes-BXRpejop.mjs");
var Route$8 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({
		meta: [{ title: "Chaitanya EM High School | Best School in Chekkapalli" }, {
			property: "og:url",
			content: "https://www.chaitanyaemhighschool.com/"
		}],
		links: [{
			rel: "preload",
			as: "image",
			href: hero_assembly_best_png_asset_default.url
		}, {
			rel: "canonical",
			href: "https://www.chaitanyaemhighschool.com/"
		}]
	})
});
var $$splitComponentImporter$6 = () => import("./about-Cdo_xufG.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Chaitanya EM High School | Chekkapalli" },
			{
				name: "description",
				content: "Dare to dream, care to achieve. The story, belief and journey behind Chaitanya EM High School — how a small neighbourhood school in Chekkapalli grew into a home for curious minds from Nursery to Grade 10."
			},
			{
				property: "og:title",
				content: "About Chaitanya EM High School | Chekkapalli"
			},
			{
				property: "og:description",
				content: "Dare to dream, care to achieve. The story, belief and journey behind Chaitanya EM High School — how a small neighbourhood school in Chekkapalli grew into a home for curious minds from Nursery to Grade 10."
			},
			{
				property: "og:url",
				content: "https://www.chaitanyaemhighschool.com/about"
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.chaitanyaemhighschool.com/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./academics-DMtwAbcC.mjs");
var Route$6 = createFileRoute("/academics")({
	head: () => ({
		meta: [
			{ title: "Academics | Chaitanya EM High School" },
			{
				name: "description",
				content: "Dare to dream, care to achieve. Discover the comprehensive academic programmes at Chaitanya EM High School, from Nursery to Grade 10, featuring the LEAD curriculum and IIT Foundation."
			},
			{
				property: "og:title",
				content: "Academics | Chaitanya EM High School"
			},
			{
				property: "og:description",
				content: "Dare to dream, care to achieve. Discover the comprehensive academic programmes at Chaitanya EM High School, from Nursery to Grade 10, featuring the LEAD curriculum and IIT Foundation."
			},
			{
				property: "og:url",
				content: "https://www.chaitanyaemhighschool.com/academics"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.chaitanyaemhighschool.com/academics"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var CLOUDINARY_CLOUD_NAME = "lc2wkrzj";
var CLOUDINARY_UPLOAD_PRESET = "chaitanya";
async function uploadToCloudinary(file) {
	const form = new FormData();
	form.append("file", file);
	form.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
	const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
		method: "POST",
		body: form
	});
	if (!res.ok) throw new Error(`Cloudinary upload failed (${res.status})`);
	return res.json();
}
async function saveSection(sectionKey, data) {
	await setDoc(doc(db, "content", sectionKey), data, { merge: true });
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: 767px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
var WIDTHS = {
	desktop: 1180,
	tablet: 834,
	mobile: 390
};
var DEVICES = [
	{
		id: "desktop",
		label: "Desktop",
		icon: Monitor
	},
	{
		id: "tablet",
		label: "Tablet",
		icon: Tablet
	},
	{
		id: "mobile",
		label: "Mobile",
		icon: Smartphone
	}
];
function isImage(f) {
	return f.type === "image";
}
function str(v) {
	return typeof v === "string" ? v : "";
}
/**
* Live, website-styled rendering of whatever the admin is currently editing.
* It re-renders from local editor state, so every keystroke, upload or list
* change is reflected instantly — no save, no refresh.
*/
function SectionPreview({ section, data }) {
	const [device, setDevice] = (0, import_react.useState)("desktop");
	const isMobile = useIsMobile();
	(0, import_react.useEffect)(() => {
		if (isMobile) setDevice("mobile");
	}, [isMobile]);
	const fields = section?.fields ?? [];
	const images = fields.filter(isImage);
	const [eyebrow, heading, ...rest] = fields.filter((f) => !isImage(f));
	const scale = device === "desktop" ? .42 : device === "tablet" ? .62 : .9;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[24px] bg-white ring-1 ring-black/5 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.15)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 border-b border-black/5 px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground",
					children: "Live preview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 truncate text-[13px] font-semibold tracking-[-0.01em]",
					children: section?.title ?? "Select a section"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `shrink-0 items-center gap-1 rounded-full bg-secondary/60 p-1 ${isMobile ? "hidden" : "flex"}`,
				children: DEVICES.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `${label} preview`,
					"aria-pressed": device === id,
					onClick: () => setDevice(id),
					className: `grid h-7 w-7 place-items-center rounded-full transition-colors ${device === id ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
				}, id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-[70vh] touch-pan-y overflow-auto overscroll-contain bg-[#faf8f4] p-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] lg:[scrollbar-width:auto]",
			"data-lenis-prevent": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto overflow-hidden rounded-[18px] bg-background ring-1 ring-black/5",
				style: {
					width: isMobile ? "100%" : WIDTHS[device],
					maxWidth: "100%",
					zoom: isMobile ? 1 : scale
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-10 py-10",
					children: [
						eyebrow && str(data[eyebrow.key]) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground",
							children: str(data[eyebrow.key])
						}),
						heading && str(data[heading.key]) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-[40px] leading-[1.05] tracking-[-0.03em]",
							style: {
								fontFamily: "var(--font-display)",
								fontWeight: 600
							},
							children: str(data[heading.key])
						}),
						rest.map((f) => {
							const v = str(data[f.key]);
							if (!v) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-[62ch] whitespace-pre-line text-[15px] leading-relaxed text-muted-foreground",
								children: v
							}, f.key);
						}),
						images.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mt-6 ${device === "mobile" ? "flex flex-col gap-4" : "grid grid-cols-2 gap-4"}`,
							children: images.map((f) => {
								const v = str(data[f.key]);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden rounded-[18px] bg-secondary/60 ring-1 ring-black/5",
									children: v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: v,
										alt: f.label,
										className: "h-full w-full object-contain md:object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-full place-items-center text-[12px] text-muted-foreground",
										children: f.label
									})
								}, f.key);
							})
						}),
						section?.lists?.map((list) => {
							const items = Array.isArray(data[list.key]) ? data[list.key] : [];
							if (items.length === 0) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground",
									children: list.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mt-4 ${device === "mobile" ? "flex flex-col gap-4" : `grid gap-4 ${device === "tablet" ? "grid-cols-2" : "grid-cols-3"}`}`,
									children: items.map((item, i) => {
										const imageField = list.fields.find(isImage);
										const textFields = list.fields.filter((f) => !isImage(f));
										const img = imageField ? str(item[imageField.key]) : "";
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `overflow-hidden rounded-[18px] bg-white ring-1 ring-black/5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.4)] ${device === "mobile" ? "flex flex-row items-center p-3 gap-4" : ""}`,
											children: [imageField && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `${device === "mobile" ? "h-[86px] w-[86px] shrink-0 rounded-[12px] overflow-hidden" : "aspect-[4/3]"} bg-secondary/60`,
												children: img && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: img,
													alt: "",
													className: "h-full w-full object-cover"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `${device === "mobile" ? "flex flex-1 flex-col min-w-0" : "p-4"}`,
												children: textFields.map((f, k) => {
													const v = str(item[f.key]);
													if (!v) return null;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: k === 0 ? `font-semibold tracking-[-0.01em] ${device === "mobile" ? "text-[14px] truncate" : "text-[15px]"}` : `leading-relaxed text-muted-foreground ${device === "mobile" ? "mt-1 text-[12px] line-clamp-2" : "mt-1.5 text-[13px]"}`,
														children: v
													}, f.key);
												})
											})]
										}, i);
									})
								})]
							}, list.key);
						})
					]
				})
			})
		})]
	});
}
var ease$4 = [
	.22,
	1,
	.36,
	1
];
/** Professional confirmation dialog used for every destructive action. */
function Confirm({ open, title, body, confirmLabel = "Delete", cancelLabel = "Cancel", onCancel, onConfirm }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[90] grid place-items-center bg-black/45 px-4 backdrop-blur-sm",
		role: "dialog",
		"aria-modal": "true",
		onClick: onCancel,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-sm rounded-[22px] bg-white p-6 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[16px] font-semibold",
					children: title
				}),
				body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onCancel,
						className: "h-11 rounded-full bg-secondary px-5 text-[13px] font-semibold",
						children: cancelLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onConfirm,
						className: "h-11 rounded-full bg-red-600 px-5 text-[13px] font-semibold text-white active:scale-95",
						children: confirmLabel
					})]
				})
			]
		})
	});
}
function ContentEditor({ page } = {}) {
	const pages = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const s of CONTENT_SECTIONS) {
			if (!map.has(s.page)) map.set(s.page, []);
			map.get(s.page).push(s);
		}
		return Array.from(map.entries());
	}, []);
	const [activePage, setActivePage] = (0, import_react.useState)(page ?? pages[0][0]);
	(0, import_react.useEffect)(() => {
		if (page) setActivePage(page);
	}, [page]);
	const activeSections = pages.find(([p]) => p === activePage)?.[1] ?? [];
	const [focusKey, setFocusKey] = (0, import_react.useState)(null);
	const [live, setLive] = (0, import_react.useState)({});
	const previewKey = focusKey && activeSections.some((s) => s.key === focusKey) ? focusKey : activeSections[0]?.key ?? null;
	const previewSection = activeSections.find((s) => s.key === previewKey) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid gap-4 ${page ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]" : "lg:grid-cols-[200px_minmax(0,1fr)_minmax(0,1.05fr)]"}`,
		children: [
			!page && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:sticky lg:top-32 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[22px] bg-white p-2 ring-1 ring-black/5 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.15)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground",
						children: "Pages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 overflow-x-auto lg:flex-col [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
						children: pages.map(([p]) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setActivePage(p);
									setFocusKey(null);
								},
								className: `flex-shrink-0 lg:w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${p === activePage ? "bg-foreground text-background" : "text-foreground/70 hover:bg-secondary/60"}`,
								children: p
							}, p);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-4",
				children: [activeSections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					section: s,
					onFocus: () => setFocusKey(s.key),
					onData: (d) => setLive((prev) => ({
						...prev,
						[s.key]: d
					}))
				}, s.key)), activeSections.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[24px] border border-dashed border-black/10 bg-white/60 p-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[15px] font-semibold",
						children: "No editable sections on this page yet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-[42ch] text-[12.5px] text-muted-foreground",
						children: "This page is still using fixed content. Ask for it to be connected and every heading, paragraph and image here becomes editable."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 lg:sticky lg:top-32 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionPreview, {
					section: previewSection,
					data: (previewKey ? live[previewKey] : void 0) ?? {}
				})
			})
		]
	});
}
function SectionCard({ section, onFocus, onData }) {
	const [data, setData] = (0, import_react.useState)(() => CONTENT_DEFAULTS[section.key] ?? {});
	const [open, setOpen] = (0, import_react.useState)(true);
	const [saveState, setSaveState] = (0, import_react.useState)("idle");
	const [dirty, setDirty] = (0, import_react.useState)(false);
	const [askDiscard, setAskDiscard] = (0, import_react.useState)(false);
	const dirtyRef = (0, import_react.useRef)(false);
	dirtyRef.current = dirty;
	const skipNextRemote = (0, import_react.useRef)(false);
	/** Last known persisted version, used to restore on "Discard changes". */
	const savedRef = (0, import_react.useRef)({});
	(0, import_react.useEffect)(() => {
		return onSnapshot(doc(db, "content", section.key), (snap) => {
			const remote = snap.data() ?? {};
			savedRef.current = remote;
			if (skipNextRemote.current) {
				skipNextRemote.current = false;
				return;
			}
			if (dirtyRef.current) return;
			setData(mergeSection(section.key, remote));
		});
	}, [section.key]);
	const update = (patch) => {
		setData((d) => ({
			...d,
			...patch
		}));
		setDirty(true);
		setSaveState("idle");
	};
	const save = async () => {
		setSaveState("saving");
		try {
			skipNextRemote.current = true;
			await saveSection(section.key, data);
			savedRef.current = data;
			setDirty(false);
			setSaveState("saved");
			toast.success("Changes saved successfully.");
			window.setTimeout(() => setSaveState("idle"), 1600);
		} catch {
			setSaveState("error");
			toast.error("Unable to save changes. Please try again.");
		}
	};
	(0, import_react.useEffect)(() => {
		if (!dirty) return;
		const handler = (e) => {
			e.preventDefault();
			e.returnValue = "";
		};
		window.addEventListener("beforeunload", handler);
		return () => window.removeEventListener("beforeunload", handler);
	}, [dirty]);
	const onDataRef = (0, import_react.useRef)(onData);
	onDataRef.current = onData;
	(0, import_react.useEffect)(() => {
		onDataRef.current?.(data);
	}, [data]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		layout: true,
		onFocusCapture: onFocus,
		onPointerDownCapture: onFocus,
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
			ease: ease$4
		},
		className: "overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.15)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground",
						children: section.page
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[17px] font-semibold tracking-[-0.02em] truncate",
						children: section.title
					}),
					section.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 text-[12px] text-muted-foreground truncate",
						children: section.description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBadge, {
					state: saveState,
					dirty
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					animate: { rotate: open ? 180 : 0 },
					className: "grid h-8 w-8 place-items-center rounded-full bg-secondary/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
				})]
			})]
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
					duration: .35,
					ease: ease$4
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-black/5 p-5 flex flex-col gap-5",
					children: [
						section.fields?.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
							field: f,
							value: data[f.key],
							onChange: (v) => update({ [f.key]: v })
						}, f.key)),
						section.lists?.map((list) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListEditor, {
							list,
							value: data[list.key] ?? [],
							onChange: (v) => update({ [list.key]: v })
						}, list.key)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sticky bottom-0 -mx-5 -mb-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 bg-white/90 px-5 py-3.5 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[12px] font-medium text-muted-foreground",
								children: dirty ? "You have unsaved changes." : saveState === "saved" ? "All changes saved" : "Up to date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [dirty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAskDiscard(true),
									className: "h-11 rounded-full bg-secondary px-4 text-[12.5px] font-semibold text-foreground/70",
									children: "Discard changes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: save,
									disabled: !dirty || saveState === "saving",
									className: "inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-[13px] font-semibold text-background transition-transform active:scale-95 disabled:opacity-40",
									children: [saveState === "saving" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), "Save changes"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confirm, {
							open: askDiscard,
							title: "You have unsaved changes.",
							body: "Discarding will restore the last saved version of this section.",
							confirmLabel: "Discard changes",
							cancelLabel: "Continue editing",
							onCancel: () => setAskDiscard(false),
							onConfirm: () => {
								setAskDiscard(false);
								setDirty(false);
								setData(mergeSection(section.key, savedRef.current));
								toast.success("Changes discarded");
							}
						})
					]
				})
			})
		})]
	});
}
function SaveBadge({ state, dirty }) {
	if (dirty && state !== "saving") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200",
		children: "Unsaved"
	});
	if (state === "saving") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), " Saving"]
	});
	if (state === "saved") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), " Saved"]
	});
	if (state === "error") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-[11px] font-semibold text-red-600",
		children: "Error"
	});
	return null;
}
function FieldRow({ field, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
			children: field.label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldControl, {
				field,
				value,
				onChange
			})
		}),
		field.help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5 text-[11px] text-muted-foreground",
			children: field.help
		})
	] });
}
function FieldControl({ field, value, onChange }) {
	const v = typeof value === "string" ? value : "";
	if (field.type === "image") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
		value: v,
		onChange
	});
	if (field.type === "textarea") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value: v,
		onChange: (e) => onChange(e.target.value),
		placeholder: field.placeholder,
		rows: 4,
		className: "w-full resize-y rounded-xl border border-black/10 bg-secondary/30 px-3.5 py-2.5 text-[14px] leading-relaxed outline-none focus:border-foreground/40 focus:bg-white transition-colors"
	});
	const inputType = field.type === "email" ? "email" : field.type === "tel" ? "tel" : field.type === "url" ? "url" : "text";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: inputType,
		value: v,
		onChange: (e) => onChange(e.target.value),
		placeholder: field.placeholder,
		className: "w-full rounded-xl border border-black/10 bg-secondary/30 px-3.5 py-2.5 text-[14px] outline-none focus:border-foreground/40 focus:bg-white transition-colors"
	});
}
function ImageField({ value, onChange }) {
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const handleFile = async (file) => {
		if (!file) return;
		setUploading(true);
		try {
			onChange((await uploadToCloudinary(file)).secure_url);
			toast.success("Image uploaded");
		} catch (e) {
			toast.error(e.message || "Upload failed");
		} finally {
			setUploading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid h-20 w-28 shrink-0 place-items-center overflow-hidden rounded-xl bg-secondary/50 ring-1 ring-black/5",
				children: [value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: value,
					alt: "",
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-5 w-5 text-muted-foreground/60" }), uploading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center bg-black/40 text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => ref.current?.click(),
					className: "inline-flex h-10 items-center justify-center gap-2 self-start rounded-full bg-foreground px-4 text-[12px] font-semibold text-background active:scale-95 transition-transform",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }),
						" ",
						value ? "Replace" : "Upload"
					]
				}), value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onChange(""),
					className: "inline-flex h-8 items-center gap-1.5 self-start rounded-full px-3 text-[11px] font-semibold text-muted-foreground hover:text-red-600",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" }), " Remove"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref,
				type: "file",
				accept: "image/*",
				hidden: true,
				onChange: (e) => handleFile(e.target.files?.[0])
			})
		]
	});
}
function ListEditor({ list, value, onChange }) {
	const items = Array.isArray(value) ? value : [];
	const [pending, setPending] = (0, import_react.useState)(null);
	const updateItem = (i, patch) => {
		onChange(items.map((it, idx) => idx === i ? {
			...it,
			...patch
		} : it));
	};
	const removeItem = (i) => onChange(items.filter((_, idx) => idx !== i));
	const addItem = () => onChange([...items, {}]);
	const duplicateItem = (i) => onChange([
		...items.slice(0, i + 1),
		{ ...items[i] },
		...items.slice(i + 1)
	]);
	const move = (i, dir) => {
		const j = i + dir;
		if (j < 0 || j >= items.length) return;
		const next = [...items];
		[next[i], next[j]] = [next[j], next[i]];
		onChange(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
				children: list.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: addItem,
				className: "inline-flex h-8 items-center gap-1.5 rounded-full bg-foreground px-3 text-[11px] font-semibold text-background active:scale-95",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }),
					" Add ",
					list.itemLabel
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layout: true,
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -8
					},
					transition: {
						duration: .3,
						ease: ease$4
					},
					className: "rounded-2xl border border-black/5 bg-secondary/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-[11px] font-semibold text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-3.5 w-3.5" }),
								" ",
								list.itemLabel,
								" ",
								i + 1
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => move(i, -1),
									disabled: i === 0,
									className: "h-7 w-7 rounded-full text-[11px] hover:bg-white disabled:opacity-30",
									children: "↑"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => move(i, 1),
									disabled: i === items.length - 1,
									className: "h-7 w-7 rounded-full text-[11px] hover:bg-white disabled:opacity-30",
									children: "↓"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => duplicateItem(i),
									className: "h-7 rounded-full px-2 text-[11px] font-semibold text-muted-foreground hover:bg-white",
									children: "Duplicate"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setPending(i),
									className: "ml-1 h-7 w-7 rounded-full text-muted-foreground hover:bg-red-50 hover:text-red-600",
									"aria-label": "Remove",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto h-3.5 w-3.5" })
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-3",
						children: list.fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
							field: f,
							value: item[f.key],
							onChange: (v) => updateItem(i, { [f.key]: v })
						}, f.key))
					})]
				}, i))
			}), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-dashed border-black/10 bg-secondary/20 p-6 text-center text-[12px] text-muted-foreground",
				children: [
					"No ",
					list.label.toLowerCase(),
					" yet. Click \"Add ",
					list.itemLabel,
					"\" to create the first one."
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confirm, {
			open: pending !== null,
			title: `Delete this ${list.itemLabel.toLowerCase()}?`,
			body: "It is currently used on the website and will be removed once you save this section.",
			onCancel: () => setPending(null),
			onConfirm: () => {
				if (pending !== null) removeItem(pending);
				setPending(null);
			}
		})
	] });
}
function MediaLibrary() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(null);
	const [search, setSearch] = (0, import_react.useState)("");
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	/** Every image URL currently referenced by the live website content. */
	const [inUse, setInUse] = (0, import_react.useState)({});
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const unsubs = CONTENT_SECTIONS.map((section) => onSnapshot(doc(db, "content", section.key), (snap) => {
			const data = mergeSection(section.key, snap.data());
			const urls = [];
			const walk = (v) => {
				if (typeof v === "string" && /^https?:\/\/|^\//.test(v) && /(cloudinary|\.(jpe?g|png|webp|avif))/i.test(v)) urls.push(v);
				else if (Array.isArray(v)) v.forEach(walk);
				else if (v && typeof v === "object") Object.values(v).forEach(walk);
			};
			walk(data);
			setInUse((prev) => {
				const next = { ...prev };
				for (const [url, where] of Object.entries(next)) if (where === section.title) delete next[url];
				for (const u of urls) next[u] = section.title;
				return next;
			});
		}));
		return () => unsubs.forEach((u) => u());
	}, []);
	(0, import_react.useEffect)(() => {
		const q = query(collection(db, "media"), orderBy("createdAt", "desc"));
		return onSnapshot(q, (snap) => {
			setItems(snap.docs.map((d) => {
				const data = d.data();
				return {
					id: d.id,
					url: String(data.url ?? ""),
					publicId: String(data.publicId ?? ""),
					name: typeof data.name === "string" ? data.name : void 0,
					width: typeof data.width === "number" ? data.width : void 0,
					height: typeof data.height === "number" ? data.height : void 0
				};
			}));
			setLoading(false);
		}, () => setLoading(false));
	}, []);
	async function handleFiles(files) {
		if (!files || files.length === 0) return;
		setUploading(true);
		try {
			for (const file of Array.from(files)) {
				const res = await uploadToCloudinary(file);
				await addDoc(collection(db, "media"), {
					url: res.secure_url,
					publicId: res.public_id,
					name: file.name,
					width: res.width ?? null,
					height: res.height ?? null,
					createdAt: serverTimestamp()
				});
			}
			toast.success("Uploaded to media library");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setUploading(false);
			if (inputRef.current) inputRef.current.value = "";
		}
	}
	const q = search.trim().toLowerCase();
	const filtered = (0, import_react.useMemo)(() => q ? items.filter((m) => (m.name ?? m.publicId).toLowerCase().includes(q)) : items, [items, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground",
						children: "Assets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-[28px] font-semibold tracking-[-0.03em]",
						children: "Media library"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-[52ch] text-[13px] text-muted-foreground",
						children: "Upload images once, then paste the link into any section of the website."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => inputRef.current?.click(),
					disabled: uploading,
					className: "flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[12px] font-semibold text-background transition-transform active:scale-95 disabled:opacity-60",
					children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }), uploading ? "Uploading…" : "Upload"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					type: "file",
					accept: "image/*",
					multiple: true,
					className: "hidden",
					onChange: (e) => handleFiles(e.target.files)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex items-center rounded-2xl bg-white px-4 ring-1 ring-black/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: search,
				onChange: (e) => setSearch(e.target.value),
				placeholder: "Search assets by file name",
				className: "h-12 min-w-0 flex-1 bg-transparent pl-3 text-[14px] outline-none"
			})]
		}),
		loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-center gap-2 rounded-[22px] bg-white p-8 text-[13px] text-muted-foreground ring-1 ring-black/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Loading media…"]
		}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-[22px] bg-white p-8 text-center ring-1 ring-black/5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "mx-auto h-8 w-8 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-[14px] font-semibold",
					children: "No media yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12px] text-muted-foreground",
					children: "Upload photos and reuse them anywhere on the site."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",
			children: filtered.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group overflow-hidden rounded-[20px] bg-white ring-1 ring-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square overflow-hidden bg-secondary/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: m.url,
						alt: m.name ?? "Media asset",
						className: "h-full w-full object-cover",
						loading: "lazy",
						decoding: "async"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 px-3 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-[11px] text-muted-foreground",
							children: m.name ?? m.publicId
						}), inUse[m.url] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-0.5 truncate text-[10px] font-semibold text-emerald-700",
							children: ["In use · ", inUse[m.url]]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Copy image link",
							onClick: async () => {
								await navigator.clipboard.writeText(m.url);
								setCopied(m.id);
								setTimeout(() => setCopied((c) => c === m.id ? null : c), 1500);
							},
							className: "grid h-7 w-7 place-items-center rounded-full bg-secondary/70 transition-transform active:scale-95",
							children: copied === m.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Delete image",
							onClick: () => setPendingDelete(m),
							className: "grid h-7 w-7 place-items-center rounded-full bg-secondary/70 text-red-500 transition-transform active:scale-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})]
					})]
				})]
			}, m.id))
		}),
		pendingDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[90] grid place-items-center bg-black/45 p-4 backdrop-blur-sm",
			role: "dialog",
			"aria-modal": "true",
			onClick: () => setPendingDelete(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: (e) => e.stopPropagation(),
				className: "w-full max-w-sm rounded-[22px] bg-white p-6 shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[16px] font-semibold",
						children: "Delete this image?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[13px] text-muted-foreground",
						children: inUse[pendingDelete.url] ? `Warning: this image is currently used in "${inUse[pendingDelete.url]}" on the website. Deleting it will leave a blank space there.` : "It will be removed from the media library."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPendingDelete(null),
							className: "h-11 rounded-full bg-secondary px-5 text-[13px] font-semibold",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: async () => {
								const target = pendingDelete;
								setPendingDelete(null);
								try {
									await deleteDoc(doc(db, "media", target.id));
									toast.success("Image deleted");
								} catch {
									toast.error("Unable to delete this image.");
								}
							},
							className: "h-11 rounded-full bg-red-600 px-5 text-[13px] font-semibold text-white",
							children: "Delete"
						})]
					})
				]
			})
		})
	] });
}
var ease$3 = [
	.22,
	1,
	.36,
	1
];
function AdminShell({ groups, active, onSelect, email, onSignOut, signingOut, title, subtitle, actions, children }) {
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [drawer, setDrawer] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = drawer ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [drawer]);
	const Rail = ({ mini }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center gap-3 px-3 py-5 ${mini ? "justify-center" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[oklch(0.32_0.11_258)] text-white shadow-[0_12px_26px_-16px_rgba(28,42,77,0.9)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-[18px] w-[18px]" })
				}), !mini && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1c2a4d]/70",
						children: "Chaitanya"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 truncate text-[15px] font-semibold tracking-[-0.02em] text-[#1c2a4d]",
						children: "Admin Studio"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 overflow-y-auto px-2 pb-4 [scrollbar-width:thin]",
				children: groups.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4",
					children: [
						g.label && !mini && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 pb-1.5 pt-1 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#1c2a4d]/60",
							children: g.label
						}),
						g.label && mini && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-3 my-2 h-px bg-[#1c2a4d]/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-0.5",
							children: g.items.map(({ id, label, icon: Icon, badge }) => {
								const isActive = active === id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										onSelect(id);
										setDrawer(false);
									},
									title: mini ? label : void 0,
									className: `group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold transition-colors ${mini ? "justify-center" : ""} ${isActive ? "bg-[oklch(0.32_0.11_258)] text-white shadow-[0_14px_28px_-20px_rgba(28,42,77,0.95)]" : "text-[#1c2a4d]/90 hover:bg-[#1c2a4d]/[0.05] hover:text-[#1c2a4d]"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: `h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-[#c65d2c]"}`,
											strokeWidth: 2.2
										}),
										!mini && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 flex-1 truncate",
											children: label
										}),
										!mini && badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${isActive ? "bg-white/20 text-white" : "bg-[#c65d2c] text-white"}`,
											children: badge
										}) : null
									]
								}, id);
							})
						})
					]
				}, g.label ?? gi))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-[#1c2a4d]/10 p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: `flex items-center gap-2 rounded-xl px-3 py-2.5 text-[12.5px] font-semibold text-[#1c2a4d]/85 transition-colors hover:bg-[#1c2a4d]/[0.05] hover:text-[#1c2a4d] ${mini ? "justify-center" : ""}`,
					title: "View website",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 shrink-0" }), !mini && "View website"]
				}), !mini && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate rounded-xl bg-[#1c2a4d]/[0.04] px-3 py-2 text-[11px] font-medium text-[#1c2a4d]/75",
					children: email
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ee] text-[#1c2a4d]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-40 hidden border-r border-[#1c2a4d]/10 bg-white/80 backdrop-blur-xl transition-[width] duration-300 lg:block",
				style: { width: collapsed ? "76px" : "262px" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { mini: collapsed }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCollapsed((v) => !v),
					"aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
					className: "absolute -right-3 top-20 grid h-6 w-6 place-items-center rounded-full bg-white text-[#1c2a4d]/80 ring-1 ring-[#1c2a4d]/10 transition-transform hover:text-[#1c2a4d] active:scale-90",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: `h-3.5 w-3.5 transition-transform ${collapsed ? "rotate-180" : ""}` })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: drawer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setDrawer(false),
				className: "fixed inset-0 z-50 bg-[#1c2a4d]/40 backdrop-blur-sm lg:hidden"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
				initial: { x: "-100%" },
				animate: { x: 0 },
				exit: { x: "-100%" },
				transition: {
					duration: .32,
					ease: ease$3
				},
				className: "fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[300px] bg-white shadow-2xl lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setDrawer(false),
					"aria-label": "Close menu",
					className: "absolute right-3 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#1c2a4d]/[0.06] active:scale-90",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { mini: false })]
			})] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "transition-[padding] duration-300",
				style: { paddingLeft: void 0 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:pl-[var(--admin-rail)]",
					style: { ["--admin-rail"]: collapsed ? "76px" : "262px" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "sticky top-0 z-30 border-b border-[#1c2a4d]/10 bg-[#f7f4ee]/85 backdrop-blur-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 px-4 py-3 md:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setDrawer(true),
									"aria-label": "Open menu",
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white ring-1 ring-[#1c2a4d]/10 active:scale-90 lg:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4.5 w-4.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "truncate text-[17px] font-semibold tracking-[-0.02em] md:text-[20px]",
										children: title
									}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 hidden truncate text-[12px] font-medium text-[#1c2a4d]/75 sm:block",
										children: subtitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex shrink-0 items-center gap-2",
									children: [
										actions,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/",
											className: "hidden h-10 items-center gap-2 rounded-full bg-white px-4 text-[12px] font-semibold ring-1 ring-[#1c2a4d]/10 transition-transform active:scale-95 sm:flex",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 text-[#c65d2c]" }), " View site"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: onSignOut,
											disabled: signingOut,
											"aria-label": "Sign out",
											className: "grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-[#1c2a4d]/10 transition-transform active:scale-90 disabled:opacity-60",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 text-[#c65d2c]" })
										})
									]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "mx-auto w-full max-w-[1400px] px-4 py-6 md:px-6 md:py-8",
						children
					})]
				})
			})
		]
	});
}
var ease$2 = [
	.22,
	1,
	.36,
	1
];
function useCollection(name, take = 8) {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const unsubAll = onSnapshot(collection(db, name), (s) => setCount(s.size), () => setCount(0));
		const unsubRecent = onSnapshot(query(collection(db, name), orderBy("createdAt", "desc"), limit(take)), (s) => setRows(s.docs.map((d) => ({
			id: d.id,
			...d.data()
		}))), () => setRows([]));
		return () => {
			unsubAll();
			unsubRecent();
		};
	}, [name, take]);
	return {
		rows,
		count
	};
}
function timeAgo(ts) {
	const d = ts?.toDate?.();
	if (!d) return "—";
	const s = Math.floor((Date.now() - d.getTime()) / 1e3);
	if (s < 60) return "just now";
	if (s < 3600) return `${Math.floor(s / 60)} min ago`;
	if (s < 86400) return `${Math.floor(s / 3600)} hr ago`;
	return d.toLocaleDateString();
}
function Dashboard({ onNavigate }) {
	const inquiries = useCollection("admissions");
	const gallery = useCollection("gallery", 6);
	const media = useCollection("media", 6);
	const unread = (0, import_react.useMemo)(() => inquiries.rows.filter((r) => r["read"] !== true).length, [inquiries.rows]);
	const pagesCount = (0, import_react.useMemo)(() => new Set(CONTENT_SECTIONS.map((s) => s.page)).size, []);
	const lastUpdated = inquiries.rows[0] ? timeAgo(inquiries.rows[0]["createdAt"]) : "—";
	const stats = [
		{
			label: "Total inquiries",
			value: inquiries.count,
			hint: `${unread} unread`,
			icon: Users,
			tone: "bg-[#eef2ff] text-[#4338ca]"
		},
		{
			label: "Gallery images",
			value: gallery.count,
			hint: "Published photos",
			icon: Images,
			tone: "bg-[#ecfdf5] text-[#047857]"
		},
		{
			label: "Media files",
			value: media.count,
			hint: "In media library",
			icon: Image,
			tone: "bg-[#fff7ed] text-[#c2410c]"
		},
		{
			label: "Website pages",
			value: pagesCount,
			hint: "Editable pages",
			icon: FileText,
			tone: "bg-[#fdf2f8] text-[#be185d]"
		}
	];
	const quick = [
		{
			label: "Edit home page",
			icon: Sparkles,
			id: "page:Home"
		},
		{
			label: "Upload images",
			icon: Upload,
			id: "media"
		},
		{
			label: "Manage gallery",
			icon: Images,
			id: "gallery"
		},
		{
			label: "View inquiries",
			icon: Inbox,
			id: "inquiries"
		},
		{
			label: "Contact details",
			icon: Megaphone,
			id: "page:Contact & Global"
		},
		{
			label: "Add gallery video",
			icon: Plus,
			id: "page:Life / Gallery"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 14
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .45,
					ease: ease$2,
					delay: i * .05
				},
				className: "rounded-[22px] bg-white p-5 ring-1 ring-black/5 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.5)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-start justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-11 w-11 place-items-center rounded-2xl ${s.tone}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: "h-5 w-5",
								strokeWidth: 2.1
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-[30px] font-black leading-none tracking-[-0.03em]",
						children: s.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[12.5px] font-semibold text-[#1c2a4d]/70",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 text-[11.5px] text-[#1c2a4d]/45",
						children: s.hint
					})
				]
			}, s.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[24px] bg-white p-5 ring-1 ring-black/5 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.5)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[15px] font-semibold tracking-[-0.02em]",
						children: "Recent inquiries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-0.5 text-[12px] text-[#1c2a4d]/50",
						children: ["Last updated ", lastUpdated]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onNavigate("inquiries"),
						className: "rounded-full bg-[#1c2a4d]/[0.05] px-3.5 py-2 text-[11.5px] font-semibold transition-colors hover:bg-[#1c2a4d]/10",
						children: "View all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2",
					children: [inquiries.rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-dashed border-black/10 p-8 text-center text-[12.5px] text-[#1c2a4d]/50",
						children: "No inquiries yet. Website enquiry forms land here automatically."
					}), inquiries.rows.slice(0, 5).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl bg-[#faf8f4] px-3.5 py-3 ring-1 ring-black/[0.04]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[oklch(0.32_0.11_258)]/10 text-[11px] font-bold text-[oklch(0.32_0.11_258)]",
								children: String(r["studentName"] ?? "?").slice(0, 1).toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-[13.5px] font-semibold",
									children: String(r["studentName"] ?? "Unnamed")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-[11.5px] text-[#1c2a4d]/50",
									children: String(r["mobile"] ?? r["email"] ?? "—")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "shrink-0 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-[#1c2a4d]/45",
									children: timeAgo(r["createdAt"])
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${r["read"] === true ? "bg-[#1c2a4d]/[0.06] text-[#1c2a4d]/50" : "bg-[#dcfce7] text-[#15803d]"}`,
									children: r["read"] === true ? "Read" : "New"
								})]
							})
						]
					}, r.id))]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[24px] bg-white p-5 ring-1 ring-black/5 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.5)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[15px] font-semibold tracking-[-0.02em]",
						children: "Quick actions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-2.5",
						children: quick.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onNavigate(q.id),
							className: "flex flex-col items-start gap-2.5 rounded-2xl bg-[#faf8f4] p-3.5 text-left ring-1 ring-black/[0.04] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_26px_-20px_rgba(15,23,42,0.6)] active:scale-[0.98]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-xl bg-white text-[#c65d2c] ring-1 ring-black/5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q.icon, {
									className: "h-4 w-4",
									strokeWidth: 2.2
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[12px] font-semibold leading-tight",
								children: q.label
							})]
						}, q.label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[24px] bg-white p-5 ring-1 ring-black/5 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.5)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[15px] font-semibold tracking-[-0.02em]",
							children: "Recent uploads"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-[#1c2a4d]/35" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-3 gap-2",
						children: [[...media.rows, ...gallery.rows].slice(0, 6).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden rounded-xl bg-[#faf8f4] ring-1 ring-black/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: String(m["url"] ?? ""),
								alt: "",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						}, m.id)), media.rows.length + gallery.rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-3 rounded-2xl border border-dashed border-black/10 p-6 text-center text-[12px] text-[#1c2a4d]/50",
							children: "Nothing uploaded yet."
						})]
					})]
				})]
			})]
		})]
	});
}
var ease$1 = [
	.22,
	1,
	.36,
	1
];
var STATUSES = [
	{
		id: "new",
		label: "New",
		cls: "bg-[#dcfce7] text-[#15803d]"
	},
	{
		id: "contacted",
		label: "Contacted",
		cls: "bg-[#e0e7ff] text-[#4338ca]"
	},
	{
		id: "followup",
		label: "Follow-up",
		cls: "bg-[#fef3c7] text-[#b45309]"
	},
	{
		id: "closed",
		label: "Closed",
		cls: "bg-[#e5e7eb] text-[#374151]"
	}
];
var FILTERS = [
	"all",
	"new",
	"contacted",
	"followup",
	"closed",
	"archived"
];
function label(f) {
	return f === "followup" ? "Follow-up" : f.charAt(0).toUpperCase() + f.slice(1);
}
function statusOf(r) {
	const s = String(r.status ?? "new").toLowerCase();
	return STATUSES.find((x) => x.id === s)?.id ?? "new";
}
function fmt(ts) {
	const d = ts?.toDate?.();
	return d ? d.toLocaleString(void 0, {
		dateStyle: "medium",
		timeStyle: "short"
	}) : "—";
}
function dateOf(r) {
	const d = r.createdAt?.toDate?.();
	return d ? d.toISOString().slice(0, 10) : "";
}
function Inquiries() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [loadError, setLoadError] = (0, import_react.useState)(false);
	const [searchRaw, setSearchRaw] = (0, import_react.useState)("");
	const [search, setSearch] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [date, setDate] = (0, import_react.useState)("");
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setSearch(searchRaw), 220);
		return () => window.clearTimeout(t);
	}, [searchRaw]);
	(0, import_react.useEffect)(() => {
		return onSnapshot(query(collection(db, "admissions"), orderBy("createdAt", "desc")), (s) => {
			setRows(s.docs.map((d) => ({
				id: d.id,
				...d.data()
			})));
			setLoadError(false);
			setLoading(false);
		}, () => {
			setLoadError(true);
			setLoading(false);
		});
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const q = search.trim().toLowerCase();
		return rows.filter((r) => {
			if (filter === "archived" ? !r.archived : r.archived) return false;
			if (filter !== "all" && filter !== "archived" && statusOf(r) !== filter) return false;
			if (date && dateOf(r) !== date) return false;
			if (!q) return true;
			return [
				r.studentName,
				r.mobile,
				r.email,
				r.message,
				r.classApplying
			].filter(Boolean).some((v) => String(v).toLowerCase().includes(q));
		});
	}, [
		rows,
		search,
		filter,
		date
	]);
	const counts = (0, import_react.useMemo)(() => {
		const live = rows.filter((r) => !r.archived);
		return {
			all: live.length,
			new: live.filter((r) => statusOf(r) === "new").length,
			contacted: live.filter((r) => statusOf(r) === "contacted").length,
			followup: live.filter((r) => statusOf(r) === "followup").length,
			closed: live.filter((r) => statusOf(r) === "closed").length,
			archived: rows.filter((r) => r.archived).length
		};
	}, [rows]);
	function exportCsv() {
		const head = [
			"Name",
			"Mobile",
			"Email",
			"Class",
			"Message",
			"Source",
			"Status",
			"Received"
		];
		const esc = (v) => `"${String(v ?? "").replace(/"/g, "\"\"")}"`;
		const body = filtered.map((r) => [
			r.studentName,
			r.mobile,
			r.email,
			r.classApplying,
			r.message,
			r.source,
			label(statusOf(r)),
			fmt(r.createdAt)
		].map(esc).join(","));
		const blob = new Blob([[head.join(","), ...body].join("\n")], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `inquiries-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
		URL.revokeObjectURL(url);
		toast.success(`Exported ${filtered.length} inquiries`);
	}
	async function patch(id, data, message) {
		try {
			await updateDoc(doc(db, "admissions", id), data);
			if (message) toast.success(message);
		} catch {
			toast.error("Unable to save changes. Please try again.");
		}
	}
	async function confirmDelete() {
		if (!pendingDelete) return;
		setDeleting(true);
		try {
			await deleteDoc(doc(db, "admissions", pendingDelete.id));
			toast.success("Enquiry deleted");
			setPendingDelete(null);
		} catch {
			toast.error("Unable to delete this item.");
		} finally {
			setDeleting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 rounded-[22px] bg-white p-3.5 ring-1 ring-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 md:flex-row md:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 items-center rounded-xl bg-[#faf8f4] px-3.5 ring-1 ring-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 shrink-0 text-[#1c2a4d]/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: searchRaw,
								onChange: (e) => setSearchRaw(e.target.value),
								placeholder: "Search by name, phone, email or message",
								className: "h-11 min-w-0 flex-1 bg-transparent pl-3 text-[13.5px] outline-none placeholder:text-[#1c2a4d]/35"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: date,
							onChange: (e) => setDate(e.target.value),
							className: "h-11 shrink-0 rounded-xl bg-[#faf8f4] px-3.5 text-[13px] outline-none ring-1 ring-black/5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: exportCsv,
							className: "flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#1c2a4d] px-4 text-[12.5px] font-semibold text-white active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export CSV"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setFilter(f),
						className: `shrink-0 rounded-full px-3.5 py-2 text-[12px] font-semibold transition-colors ${filter === f ? "bg-[oklch(0.32_0.11_258)] text-white" : "bg-[#1c2a4d]/[0.05] text-[#1c2a4d]/65 hover:bg-[#1c2a4d]/10"}`,
						children: [
							label(f),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-60",
								children: counts[f]
							})
						]
					}, f))
				})]
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-[22px] bg-white p-10 text-[13px] text-[#1c2a4d]/55 ring-1 ring-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Loading inquiries…"]
			}) : loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[22px] bg-white p-10 text-center ring-1 ring-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[14.5px] font-semibold",
					children: "Unable to load content. Please try again."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => window.location.reload(),
					className: "mt-4 rounded-full bg-[#1c2a4d] px-5 py-2.5 text-[12.5px] font-semibold text-white active:scale-95",
					children: "Retry"
				})]
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[22px] bg-white p-12 text-center ring-1 ring-black/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "mx-auto h-8 w-8 text-[#1c2a4d]/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-[14.5px] font-semibold",
						children: "No inquiries here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[12.5px] text-[#1c2a4d]/50",
						children: "Every enquiry submitted on the website appears in this inbox instantly."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: filtered.map((r, i) => {
					const tel = String(r.mobile ?? "").replace(/[^\d+]/g, "");
					const wa = String(r.mobile ?? "").replace(/\D/g, "");
					const st = statusOf(r);
					const meta = STATUSES.find((s) => s.id === st);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .35,
							ease: ease$1,
							delay: Math.min(i * .03, .3)
						},
						className: `rounded-[22px] bg-white p-4 ring-1 shadow-[0_16px_38px_-32px_rgba(15,23,42,0.5)] md:p-5 ${st === "new" ? "ring-[oklch(0.32_0.11_258)]/25" : "ring-black/5"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[oklch(0.32_0.11_258)]/10 text-[12px] font-bold text-[oklch(0.32_0.11_258)]",
									children: String(r.studentName ?? "?").slice(0, 1).toUpperCase()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate text-[15px] font-semibold",
											children: r.studentName || "Unnamed"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${meta.cls}`,
											children: meta.label
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-0.5 truncate text-[12px] text-[#1c2a4d]/55",
										children: [
											r.mobile || "—",
											" · ",
											fmt(r.createdAt)
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-1.5",
								children: [
									tel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${tel}`,
										"aria-label": "Call",
										className: "grid h-9 w-9 place-items-center rounded-full bg-[#eef2ff] text-[#4338ca] active:scale-90",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
									}),
									wa && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `https://wa.me/${wa.length === 10 ? `91${wa}` : wa}`,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "WhatsApp",
										className: "grid h-9 w-9 place-items-center rounded-full bg-[#dcfce7] text-[#15803d] active:scale-90",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
									}),
									r.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${r.email}`,
										"aria-label": "Email",
										className: "grid h-9 w-9 place-items-center rounded-full bg-[#fff7ed] text-[#c2410c] active:scale-90",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: st,
										onChange: (e) => patch(r.id, {
											status: e.target.value,
											read: true
										}, "Status updated"),
										"aria-label": "Change status",
										className: "h-9 rounded-full bg-[#1c2a4d]/[0.05] px-3 text-[11.5px] font-semibold text-[#1c2a4d]/75 outline-none",
										children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s.id,
											children: s.label
										}, s.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => patch(r.id, { archived: !r.archived }, r.archived ? "Restored" : "Archived"),
										"aria-label": "Archive",
										className: "grid h-9 w-9 place-items-center rounded-full bg-[#1c2a4d]/[0.05] text-[#1c2a4d]/60 active:scale-90",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setPendingDelete(r),
										"aria-label": "Delete",
										className: "grid h-9 w-9 place-items-center rounded-full bg-red-50 text-red-500 active:scale-90",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid gap-1.5 border-t border-black/5 pt-3 text-[12.5px] text-[#1c2a4d]/65 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Email: ", r.email || "—"] }),
								r.classApplying && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Class: ", r.classApplying] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Source: ", r.source || "website"] }),
								r.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: ["Message: ", r.message]
								})
							]
						})]
					}, r.id);
				})
			}),
			pendingDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[90] grid place-items-center bg-black/45 px-4 backdrop-blur-sm",
				role: "dialog",
				"aria-modal": "true",
				onClick: () => !deleting && setPendingDelete(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: (e) => e.stopPropagation(),
					className: "w-full max-w-sm rounded-[22px] bg-white p-6 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[16px] font-semibold",
							children: "Delete this enquiry?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-[13px] text-[#1c2a4d]/60",
							children: [pendingDelete.studentName || "This enquiry", " will be permanently removed. This cannot be undone."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPendingDelete(null),
								disabled: deleting,
								className: "h-11 rounded-full bg-[#1c2a4d]/[0.06] px-5 text-[13px] font-semibold text-[#1c2a4d]/75",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: confirmDelete,
								disabled: deleting,
								className: "inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-5 text-[13px] font-semibold text-white active:scale-95 disabled:opacity-60",
								children: [deleting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), " Delete"]
							})]
						})
					]
				})
			})
		]
	});
}
var SECTION = "gallery_photos";
/**
* Photo gallery manager — reads and writes the SAME data the public gallery
* page renders (`content/gallery_photos.photos`), so every existing photo on
* the website appears here and can be replaced, edited, reordered or deleted.
*/
function PhotoGallery() {
	const [photos, setPhotos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [dirty, setDirty] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [uploading, setUploading] = (0, import_react.useState)(null);
	const [search, setSearch] = (0, import_react.useState)("");
	const [editIndex, setEditIndex] = (0, import_react.useState)(null);
	const [deleteIndex, setDeleteIndex] = (0, import_react.useState)(null);
	const [replaceIndex, setReplaceIndex] = (0, import_react.useState)(null);
	const [replaceUrl, setReplaceUrl] = (0, import_react.useState)(null);
	const [replaceBusy, setReplaceBusy] = (0, import_react.useState)(false);
	const dirtyRef = (0, import_react.useRef)(false);
	dirtyRef.current = dirty;
	const skipRemote = (0, import_react.useRef)(false);
	const uploadRef = (0, import_react.useRef)(null);
	const replaceRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return onSnapshot(doc(db, "content", SECTION), (snap) => {
			const merged = mergeSection(SECTION, snap.data());
			if (skipRemote.current) skipRemote.current = false;
			else if (!dirtyRef.current) setPhotos(Array.isArray(merged.photos) ? merged.photos : []);
			setLoading(false);
		}, () => {
			setPhotos(mergeSection(SECTION, {}).photos ?? []);
			setLoading(false);
			toast.error("Couldn't reach the database — showing the current website photos.");
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (!dirty) return;
		const handler = (e) => {
			e.preventDefault();
			e.returnValue = "";
		};
		window.addEventListener("beforeunload", handler);
		return () => window.removeEventListener("beforeunload", handler);
	}, [dirty]);
	const apply = (next) => {
		setPhotos(next);
		setDirty(true);
	};
	async function save(next) {
		const payload = next ?? photos;
		setSaving(true);
		try {
			skipRemote.current = true;
			await saveSection(SECTION, { photos: payload });
			setDirty(false);
			toast.success("Gallery saved. The website is updated.");
		} catch {
			toast.error("Unable to save the gallery. Please try again.");
		} finally {
			setSaving(false);
		}
	}
	async function handleUpload(files) {
		if (!files || files.length === 0) return;
		const list = Array.from(files);
		setUploading({
			done: 0,
			total: list.length
		});
		const added = [];
		try {
			for (const file of list) {
				const res = await uploadToCloudinary(file);
				added.push({
					image: res.secure_url,
					title: file.name.replace(/\.[^.]+$/, ""),
					line: "",
					category: "Campus"
				});
				setUploading((p) => p ? {
					...p,
					done: p.done + 1
				} : p);
			}
			apply([...photos, ...added]);
			toast.success(`${added.length} photo${added.length > 1 ? "s" : ""} added. Remember to save.`);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setUploading(null);
			if (uploadRef.current) uploadRef.current.value = "";
		}
	}
	async function handleReplaceFile(file) {
		if (!file) return;
		setReplaceBusy(true);
		try {
			const res = await uploadToCloudinary(file);
			setReplaceUrl(res.secure_url);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setReplaceBusy(false);
			if (replaceRef.current) replaceRef.current.value = "";
		}
	}
	const move = (i, dir) => {
		const j = i + dir;
		if (j < 0 || j >= photos.length) return;
		const next = [...photos];
		[next[i], next[j]] = [next[j], next[i]];
		apply(next);
	};
	const q = search.trim().toLowerCase();
	const visible = (0, import_react.useMemo)(() => photos.map((p, i) => ({
		p,
		i
	})).filter(({ p }) => q ? [
		p.title,
		p.line,
		p.category
	].filter(Boolean).some((v) => String(v).toLowerCase().includes(q)) : true), [photos, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:flex-wrap sm:items-end sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground",
							children: "Media"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-[26px] font-semibold tracking-[-0.03em] sm:text-[28px]",
							children: "Photo gallery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-[52ch] text-[13px] text-muted-foreground",
							children: "These are the exact photos shown on the public gallery page. Replace, edit, reorder, delete or add new ones."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => uploadRef.current?.click(),
					disabled: !!uploading,
					className: "flex h-11 shrink-0 items-center gap-2 rounded-full bg-foreground px-4 text-[12.5px] font-semibold text-background transition-transform active:scale-95 disabled:opacity-60",
					children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }), uploading ? `Uploading ${uploading.done}/${uploading.total}` : "Upload images"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: uploadRef,
					type: "file",
					accept: "image/*",
					multiple: true,
					hidden: true,
					onChange: (e) => handleUpload(e.target.files)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 items-center rounded-2xl bg-white px-4 ring-1 ring-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: search,
					onChange: (e) => setSearch(e.target.value),
					placeholder: "Search photos by title, caption or category",
					className: "h-12 min-w-0 flex-1 bg-transparent pl-3 text-[14px] outline-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] font-medium text-muted-foreground",
					children: dirty ? "Unsaved changes" : `${photos.length} photos`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => save(),
					disabled: !dirty || saving,
					className: "inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-[13px] font-semibold text-background transition-transform active:scale-95 disabled:opacity-40",
					children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), "Save changes"]
				})]
			})]
		}),
		loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-center gap-2 rounded-[22px] bg-white p-8 text-[13px] text-muted-foreground ring-1 ring-black/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Loading gallery…"]
		}) : visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-[22px] bg-white p-10 text-center ring-1 ring-black/5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "mx-auto h-8 w-8 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-[14px] font-semibold",
					children: q ? "No photos match your search" : "No photos yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12px] text-muted-foreground",
					children: q ? "Try a different word." : "Tap Upload images to add the first photos."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",
			children: visible.map(({ p, i }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-[20px] bg-white ring-1 ring-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] bg-secondary/50",
					children: [p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: p.title ?? "Gallery photo",
						className: "h-full w-full object-cover",
						loading: "lazy",
						decoding: "async"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-6 w-6 text-muted-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white",
						children: ["#", i + 1]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-[13.5px] font-semibold",
							children: p.title || "Untitled"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-0.5 truncate text-[11.5px] text-muted-foreground",
							children: [p.category || "Uncategorised", p.line ? ` · ${p.line}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => move(i, -1),
									disabled: i === 0 || !!q,
									"aria-label": "Move earlier",
									className: "grid h-9 w-9 place-items-center rounded-full bg-secondary/70 disabled:opacity-30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => move(i, 1),
									disabled: i === photos.length - 1 || !!q,
									"aria-label": "Move later",
									className: "grid h-9 w-9 place-items-center rounded-full bg-secondary/70 disabled:opacity-30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setReplaceIndex(i);
										setReplaceUrl(null);
									},
									className: "inline-flex h-9 items-center gap-1.5 rounded-full bg-secondary/70 px-3 text-[11.5px] font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" }), " Replace"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setEditIndex(i),
									className: "inline-flex h-9 items-center gap-1.5 rounded-full bg-secondary/70 px-3 text-[11.5px] font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Edit"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setDeleteIndex(i),
									"aria-label": "Delete photo",
									className: "ml-auto grid h-9 w-9 place-items-center rounded-full bg-red-50 text-red-500",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								})
							]
						})
					]
				})]
			}, `${p.image}-${i}`))
		}),
		q && photos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-[11.5px] text-muted-foreground",
			children: "Clear the search to reorder photos."
		}),
		editIndex !== null && photos[editIndex] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
			onClose: () => setEditIndex(null),
			title: "Edit photo details",
			children: [[
				"title",
				"line",
				"category"
			].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
					children: k === "line" ? "Caption" : k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: photos[editIndex][k] ?? "",
					onChange: (e) => apply(photos.map((p, idx) => idx === editIndex ? {
						...p,
						[k]: e.target.value
					} : p)),
					className: "mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-secondary/30 px-3.5 text-[14px] outline-none focus:bg-white"
				})]
			}, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setEditIndex(null),
					className: "h-11 rounded-full bg-foreground px-5 text-[13px] font-semibold text-background",
					children: "Done"
				})
			})]
		}),
		replaceIndex !== null && photos[replaceIndex] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
			onClose: () => setReplaceIndex(null),
			title: "Replace this photo",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
						children: "Current image"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos[replaceIndex].image,
						alt: "",
						className: "aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-black/5"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
						children: "New image"
					}), replaceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: replaceUrl,
						alt: "",
						className: "aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-black/5"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => replaceRef.current?.click(),
						className: "grid aspect-[4/3] w-full place-items-center rounded-xl border border-dashed border-black/15 text-[12px] font-semibold text-muted-foreground",
						children: replaceBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Choose image"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: replaceRef,
					type: "file",
					accept: "image/*",
					hidden: true,
					onChange: (e) => handleReplaceFile(e.target.files?.[0])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setReplaceIndex(null),
						className: "h-11 rounded-full bg-secondary px-5 text-[13px] font-semibold",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: !replaceUrl,
						onClick: () => {
							apply(photos.map((p, idx) => idx === replaceIndex ? {
								...p,
								image: replaceUrl
							} : p));
							setReplaceIndex(null);
							setReplaceUrl(null);
							toast.success("Image replaced. Remember to save.");
						},
						className: "h-11 rounded-full bg-foreground px-5 text-[13px] font-semibold text-background disabled:opacity-40",
						children: "Use new image"
					})]
				})
			]
		}),
		deleteIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
			onClose: () => setDeleteIndex(null),
			title: "Delete this image?",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[13px] text-muted-foreground",
				children: "This image will be removed from the gallery on the website."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setDeleteIndex(null),
					className: "h-11 rounded-full bg-secondary px-5 text-[13px] font-semibold",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						const next = photos.filter((_, idx) => idx !== deleteIndex);
						setPhotos(next);
						setDeleteIndex(null);
						save(next);
					},
					className: "h-11 rounded-full bg-red-600 px-5 text-[13px] font-semibold text-white",
					children: "Delete"
				})]
			})]
		})
	] });
}
function Modal({ title, children, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-black/45 p-4 backdrop-blur-sm",
		role: "dialog",
		"aria-modal": "true",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-md rounded-[22px] bg-white p-5 shadow-2xl sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[16px] font-semibold",
				children: title
			}), children]
		})
	});
}
var Route$5 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Admin Dashboard | Chaitanya EM High School" },
		{
			name: "description",
			content: "Manage content, images, gallery and pages of Chaitanya EM High School."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: AdminPage
});
var ease = [
	.22,
	1,
	.36,
	1
];
function friendlyAuthError(code, fallback) {
	return {
		"auth/invalid-email": "That email address doesn't look right.",
		"auth/user-disabled": "This account has been disabled. Contact the administrator.",
		"auth/user-not-found": "No admin account found with this email.",
		"auth/wrong-password": "Incorrect password. Please try again.",
		"auth/invalid-credential": "Email or password is incorrect.",
		"auth/invalid-login-credentials": "Email or password is incorrect.",
		"auth/too-many-requests": "Too many attempts. Please wait a minute and try again.",
		"auth/network-request-failed": "Network error. Check your connection and retry."
	}[code] ?? fallback;
}
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var NAV_GROUPS = [
	{ items: [{
		id: "overview",
		label: "Dashboard",
		icon: House
	}] },
	{
		label: "Website management",
		items: [
			{
				id: "page:Home",
				label: "Home page",
				icon: House
			},
			{
				id: "page:About School",
				label: "About us",
				icon: Users
			},
			{
				id: "page:Facilities",
				label: "Facilities",
				icon: Building2
			},
			{
				id: "page:Life / Gallery",
				label: "Gallery & videos",
				icon: Image
			},
			{
				id: "gallery",
				label: "Photo gallery",
				icon: Image
			}
		]
	},
	{
		label: "Content",
		items: [{
			id: "media",
			label: "Media library",
			icon: Cloud
		}]
	},
	{
		label: "Inquiries & leads",
		items: [{
			id: "inquiries",
			label: "Inquiries",
			icon: Inbox
		}]
	},
	{
		label: "Settings",
		items: [{
			id: "page:Contact & Global",
			label: "Contact & footer",
			icon: Mail
		}, {
			id: "settings",
			label: "Website settings",
			icon: Settings
		}]
	}
];
var TAB_META = {
	overview: {
		title: "Dashboard",
		subtitle: "Everything happening on your website at a glance."
	},
	"page:Home": {
		title: "Home page",
		subtitle: "Edit the hero, about strip and academics cards."
	},
	"page:About School": {
		title: "About us",
		subtitle: "Editorial hero and the leadership team."
	},
	"page:Facilities": {
		title: "Facilities",
		subtitle: "Manage facility cards, text and photos."
	},
	"page:Life / Gallery": {
		title: "Gallery & videos",
		subtitle: "Video stories shown on the gallery page."
	},
	"page:Contact & Global": {
		title: "Contact & footer",
		subtitle: "Phone, WhatsApp, email, address and social links."
	},
	gallery: {
		title: "Photo gallery",
		subtitle: "Upload, reorder and remove gallery photos."
	},
	media: {
		title: "Media library",
		subtitle: "Every uploaded image in one place."
	},
	inquiries: {
		title: "Inquiries",
		subtitle: "Every enquiry submitted on the website."
	},
	settings: {
		title: "Website settings",
		subtitle: "School details and account."
	}
};
function AdminPage() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [checking, setChecking] = (0, import_react.useState)(true);
	const [email, setEmail] = (0, import_react.useState)("");
	const [pw, setPw] = (0, import_react.useState)("");
	const [signingIn, setSigningIn] = (0, import_react.useState)(false);
	const [authError, setAuthError] = (0, import_react.useState)(null);
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [touched, setTouched] = (0, import_react.useState)({
		email: false,
		pw: false
	});
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const [tab, setTab] = (0, import_react.useState)("overview");
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		return onAuthStateChanged(auth, (u) => {
			setUser(u);
			setChecking(false);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (checking) return;
		if (user && pathname === "/admin") navigate({
			to: "/admin/dashboard",
			replace: true
		});
		if (!user && pathname !== "/admin") navigate({
			to: "/admin",
			replace: true
		});
	}, [
		user,
		checking,
		pathname,
		navigate
	]);
	if (checking) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-[#faf6ef] text-[#1c2a4d]/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin" })
	});
	if (!user) {
		const emailInvalid = !EMAIL_RE.test(email.trim());
		const pwInvalid = pw.length < 6;
		const emailErr = touched.email && emailInvalid ? email.trim().length === 0 ? "Email is required." : "Enter a valid email address." : null;
		const pwErr = touched.pw && pwInvalid ? pw.length === 0 ? "Password is required." : "Password must be at least 6 characters." : null;
		const canSubmit = !emailInvalid && !pwInvalid && !signingIn;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid min-h-screen place-items-center px-6 py-16 text-[#1c2a4d]",
			style: { background: "radial-gradient(80% 60% at 20% 0%, #fdf1dd 0%, transparent 60%), linear-gradient(180deg, #faf6ef 0%, #f4ece0 100%)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .8,
					ease
				},
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-2xl bg-[oklch(0.32_0.11_258)] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-medium uppercase tracking-[0.28em] text-[#1c2a4d]/50",
								children: "Chaitanya"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 text-[16px] font-semibold tracking-[-0.02em]",
								children: "Admin Console"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-editorial mt-8 text-[34px] leading-[1.08] tracking-[-0.02em]",
						children: "Sign in to manage the school website."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-[36ch] text-[13px] leading-relaxed text-[#1c2a4d]/60",
						children: "Restricted area — for authorised staff only. Create an admin user in Firebase Auth (Email/Password) and sign in below."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: async (e) => {
							e.preventDefault();
							setTouched({
								email: true,
								pw: true
							});
							if (emailInvalid || pwInvalid) return;
							setAuthError(null);
							setSigningIn(true);
							try {
								await signInWithEmailAndPassword(auth, email.trim(), pw);
							} catch (err) {
								const code = err?.code ?? "";
								const fallback = err instanceof Error ? err.message.replace("Firebase: ", "") : "Sign in failed";
								setAuthError(friendlyAuthError(code, fallback));
							} finally {
								setSigningIn(false);
							}
						},
						className: "mt-8 rounded-[26px] bg-white/85 p-6 ring-1 ring-[#1c2a4d]/10 backdrop-blur-xl shadow-[0_30px_70px_-40px_rgba(28,42,77,0.55)]",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-medium uppercase tracking-[0.22em] text-[#1c2a4d]/55",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-2 flex items-center rounded-2xl border bg-[#faf6ef] px-4 transition-colors ${emailErr ? "border-red-400/60" : "border-[#1c2a4d]/12 focus-within:border-[#c65d2c]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[#c65d2c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									autoComplete: "email",
									inputMode: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									onBlur: () => setTouched((t) => ({
										...t,
										email: true
									})),
									placeholder: "you@school.com",
									"aria-invalid": !!emailErr,
									"aria-describedby": emailErr ? "email-err" : void 0,
									className: "h-12 flex-1 bg-transparent pl-3 text-[14px] text-[#1c2a4d] placeholder:text-[#1c2a4d]/35 outline-none"
								})]
							}),
							emailErr && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "email-err",
								className: "mt-1.5 flex items-center gap-1.5 text-[11px] text-red-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3 w-3" }),
									" ",
									emailErr
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mt-4 block text-[11px] font-medium uppercase tracking-[0.22em] text-[#1c2a4d]/55",
								children: "Password"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-2 flex items-center rounded-2xl border bg-[#faf6ef] px-4 transition-colors ${pwErr ? "border-red-400/60" : "border-[#1c2a4d]/12 focus-within:border-[#c65d2c]"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-[#c65d2c]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: showPw ? "text" : "password",
										autoComplete: "current-password",
										value: pw,
										onChange: (e) => setPw(e.target.value),
										onBlur: () => setTouched((t) => ({
											...t,
											pw: true
										})),
										placeholder: "Enter password",
										"aria-invalid": !!pwErr,
										"aria-describedby": pwErr ? "pw-err" : void 0,
										className: "h-12 flex-1 bg-transparent pl-3 text-[14px] text-[#1c2a4d] placeholder:text-[#1c2a4d]/35 outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPw((v) => !v),
										"aria-label": showPw ? "Hide password" : "Show password",
										className: "grid h-8 w-8 place-items-center rounded-full text-[#1c2a4d]/45 transition-colors hover:text-[#1c2a4d]",
										children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})
								]
							}),
							pwErr && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "pw-err",
								className: "mt-1.5 flex items-center gap-1.5 text-[11px] text-red-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3 w-3" }),
									" ",
									pwErr
								]
							}),
							authError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: -4
								},
								animate: {
									opacity: 1,
									y: 0
								},
								className: "mt-4 flex items-start gap-2 rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-[12px] text-red-700",
								role: "alert",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: authError })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: !canSubmit,
								className: "group mt-6 flex h-14 w-full items-center justify-between rounded-full bg-[oklch(0.32_0.11_258)] px-6 text-[15px] font-semibold text-white shadow-[0_20px_40px_-22px_rgba(28,42,77,0.8)] transition-transform active:scale-[0.97] disabled:opacity-50 disabled:active:scale-100",
								children: [signingIn ? "Signing in…" : "Enter dashboard", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white",
									children: signingIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "h-4 w-4",
										strokeWidth: 2.5
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-[11px] text-[#1c2a4d]/40",
								children: "Secured by Firebase Authentication."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[#1c2a4d]/55 transition-colors hover:text-[#1c2a4d]",
						children: "← Back to site"
					})
				]
			})
		});
	}
	const meta = TAB_META[tab] ?? {
		title: "Admin",
		subtitle: ""
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		groups: NAV_GROUPS,
		active: tab,
		onSelect: (id) => setTab(id),
		email: user.email ?? "",
		signingOut,
		onSignOut: async () => {
			if (signingOut) return;
			if (!confirm("Sign out of the admin console?")) return;
			setSigningOut(true);
			try {
				await signOut(auth);
			} finally {
				setSigningOut(false);
			}
		},
		title: meta.title,
		subtitle: meta.subtitle,
		children: [
			tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, { onNavigate: (t) => setTab(t) }),
			tab.startsWith("page:") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentEditor, { page: tab.slice(5) }),
			tab === "media" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaLibrary, {}),
			tab === "gallery" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoGallery, {}),
			tab === "inquiries" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inquiries, {}),
			tab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {})
		]
	});
}
function SettingsPanel() {
	const env = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_CLOUDINARY_CLOUD_NAME": "lc2wkrzj",
		"VITE_CLOUDINARY_UPLOAD_PRESET": "chaitanya",
		"VITE_FIREBASE_API_KEY": "AIzaSyBXJJq6Oy1Tqv7tfOq6AL_B1Xnc5l6QUFU",
		"VITE_FIREBASE_APP_ID": "1:282082683305:web:01112d3af794017960fcb8",
		"VITE_FIREBASE_AUTH_DOMAIN": "chaitanya-em-school-b3012.firebaseapp.com",
		"VITE_FIREBASE_MEASUREMENT_ID": "G-JGN5XHKM1K",
		"VITE_FIREBASE_MESSAGING_SENDER_ID": "282082683305",
		"VITE_FIREBASE_PROJECT_ID": "chaitanya-em-school-b3012",
		"VITE_FIREBASE_STORAGE_BUCKET": "chaitanya-em-school-b3012.firebasestorage.app"
	};
	const firebaseReady = Boolean(env.VITE_FIREBASE_API_KEY && env.VITE_FIREBASE_PROJECT_ID);
	const cloudinaryReady = Boolean(env.VITE_CLOUDINARY_CLOUD_NAME && env.VITE_CLOUDINARY_UPLOAD_PRESET);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground",
			children: "Configuration"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 text-[28px] font-semibold tracking-[-0.03em]",
			children: "Settings"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 flex flex-col gap-3",
			children: [
				{
					label: "Firebase",
					hint: firebaseReady ? `Auth & database · ${env.VITE_FIREBASE_PROJECT_ID}` : "Auth & database — not configured",
					ready: firebaseReady
				},
				{
					label: "Cloudinary",
					hint: cloudinaryReady ? `Image hosting & CDN · ${env.VITE_CLOUDINARY_CLOUD_NAME}` : "Image hosting & CDN — not configured",
					ready: cloudinaryReady
				},
				{
					label: "WhatsApp number",
					hint: "Contact routing",
					ready: true
				},
				{
					label: "SEO metadata",
					hint: "Titles & descriptions",
					ready: true
				}
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[14px] font-semibold",
					children: r.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 text-[12px] text-muted-foreground",
					children: r.hint
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${r.ready ? "bg-[oklch(0.92_0.09_150)] text-[oklch(0.32_0.14_150)]" : "bg-secondary text-muted-foreground"}`,
					children: r.ready ? "Ready" : "Pending"
				})]
			}, r.label))
		})
	] });
}
var $$splitComponentImporter$4 = () => import("./contact-DyIC68LG.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Chaitanya EM High School | Chekkapalli" },
			{
				name: "description",
				content: "Dare to dream, care to achieve. Get in touch with Chaitanya EM High School, Chekkapalli. Call, WhatsApp or send a note for admissions or enquiries."
			},
			{
				property: "og:title",
				content: "Contact Chaitanya EM High School | Chekkapalli"
			},
			{
				property: "og:description",
				content: "Dare to dream, care to achieve. Get in touch with Chaitanya EM High School, Chekkapalli. Call, WhatsApp or send a note for admissions or enquiries."
			},
			{
				property: "og:url",
				content: "https://www.chaitanyaemhighschool.com/contact"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.chaitanyaemhighschool.com/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./facilities-CRPx3AEB.mjs");
var Route$3 = createFileRoute("/facilities")({
	head: () => ({
		meta: [
			{ title: "School Facilities | Chaitanya EM High School" },
			{
				name: "description",
				content: "Dare to dream, care to achieve. Smart classrooms, science lab, library, playground and safe transport at Chaitanya EM High School, Chekkapalli."
			},
			{
				property: "og:title",
				content: "School Facilities | Chaitanya EM High School"
			},
			{
				property: "og:description",
				content: "Dare to dream, care to achieve. Smart classrooms, science lab, library, playground and safe transport at Chaitanya EM High School, Chekkapalli."
			},
			{
				property: "og:url",
				content: "https://www.chaitanyaemhighschool.com/facilities"
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.chaitanyaemhighschool.com/facilities"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gallery-C-wmCUTk.mjs");
var Route$2 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "School Gallery | Chaitanya EM High School" },
			{
				name: "description",
				content: "Dare to dream, care to achieve. Every smile, every memory, every achievement. A visual diary of life at Chaitanya EM High School, Chekkapalli."
			},
			{
				property: "og:title",
				content: "School Gallery | Chaitanya EM High School"
			},
			{
				property: "og:description",
				content: "Dare to dream, care to achieve. Every smile, every memory, every achievement. A visual diary of life at Chaitanya EM High School, Chekkapalli."
			},
			{
				property: "og:url",
				content: "https://www.chaitanyaemhighschool.com/gallery"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.chaitanyaemhighschool.com/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
/**
* useAutoScrollRail — glides a horizontal rail at a slow, premium speed using a
* sub-pixel accumulator (no jitter). unknown manual interaction (touch, drag,
* wheel, hover, keyboard) pauses it; it resumes smoothly after a short idle
* delay. At either end it eases into a direction reversal instead of snapping
* back, so there are never sudden jumps.
*/
var $$splitComponentImporter$1 = () => import("./academics_._stage-Cf_281tA.mjs");
var Route$1 = createFileRoute("/academics_/$stage")({
	loader: ({ params }) => {
		const stage = getStage(params.stage);
		if (!stage) throw notFound();
		return { slug: stage.slug };
	},
	head: ({ params, location }) => {
		const stage = getStage(params.stage);
		const title = stage ? `${stage.tag} Programme | Chaitanya EM High School` : "Academics | Chaitanya EM High School";
		const description = stage?.detail.intro ?? "Academic programmes at Chaitanya EM High School. Dare to dream, care to achieve with our comprehensive curriculum.";
		const canonical = `https://www.chaitanyaemhighschool.com${location.pathname}`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: canonical
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: canonical
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin_.dashboard-hWJIMghJ.mjs");
var Route = createFileRoute("/admin_/dashboard")({
	head: () => ({ meta: [
		{ title: "Dashboard | Chaitanya EM High School Admin" },
		{
			name: "description",
			content: "Manage content, images, gallery and enquiries for Chaitanya EM High School."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	AcademicsRoute: Route$6.update({
		id: "/academics",
		path: "/academics",
		getParentRoute: () => Route$9
	}),
	AdminRoute: Route$5.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	FacilitiesRoute: Route$3.update({
		id: "/facilities",
		path: "/facilities",
		getParentRoute: () => Route$9
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$9
	}),
	AcademicsStageRoute: Route$1.update({
		id: "/academics_/$stage",
		path: "/academics/$stage",
		getParentRoute: () => Route$9
	}),
	AdminDashboardRoute: Route.update({
		id: "/admin_/dashboard",
		path: "/admin/dashboard",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { life_yoga_default as A, life_dance_default as C, life_parents_default as D, life_independence_default as E, life_science_default as O, life_assembly_default as S, life_festival_default as T, hero_classroom_full_png_asset_default as _, router_DnsFphIK_exports as a, leader_nagaraju_png_asset_default as b, waHref as c, db as d, getStage as f, hero_assembly_best_png_asset_default as g, hero_4_campus_png_asset_default as h, SOCIAL as i, life_sports_default as k, ACADEMIC_STAGES as l, hero_3_students_png_asset_default as m, DREAM_TEAM_URL as n, useContent as o, hero_2_classroom_png_asset_default as p, Route$1 as r, useIsMobile as s, AdminPage as t, classroom_default as u, lead_school_motto_jpeg_asset_default as v, life_drawing_default as w, life_annualday_default as x, leader_nagababu_png_asset_default as y };
