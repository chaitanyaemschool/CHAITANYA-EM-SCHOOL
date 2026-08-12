import heroAssembly from "@/assets/hero-assembly-best.png.asset.json";
import heroClassroom from "@/assets/hero-2-classroom.png.asset.json";
import heroStudents from "@/assets/hero-3-students.png.asset.json";
import heroCampus from "@/assets/hero-4-campus.png.asset.json";
import classroomImg from "@/assets/classroom.jpg";
import scienceImg from "@/assets/science.jpg";
import sportsImg from "@/assets/sports.jpg";
import danceImg from "@/assets/dance.jpg";
import busImg from "@/assets/school-bus.jpg";
import journeyHero from "@/assets/journey-hero.jpg";
import lifeHero from "@/assets/life-hero.jpg";
import lifeAnnualDay from "@/assets/life-annualday.jpg";
import lifeSports from "@/assets/life-sports.jpg";
import lifeScience from "@/assets/life-science.jpg";
import lifeDrawing from "@/assets/life-drawing.jpg";
import lifeIndependence from "@/assets/life-independence.jpg";
import lifeYoga from "@/assets/life-yoga.jpg";
import lifeDance from "@/assets/life-dance.jpg";
import lifeFestival from "@/assets/life-festival.jpg";
import lifeParents from "@/assets/life-parents.jpg";
import lifeAssembly from "@/assets/life-assembly.jpg";
import leaderNagaraju from "@/assets/leader-nagaraju.png.asset.json";
import leaderNagababu from "@/assets/leader-nagababu.png.asset.json";
import studentReading from "@/assets/student-reading.jpg";
import leadMotto from "@/assets/lead-school-motto.jpeg.asset.json";
import visitImage from "@/assets/hero-classroom-full.png.asset.json";
import { ACADEMIC_STAGES } from "@/lib/academics-data";

// Central definition of editable site content.
// Each "section" is a Firestore doc under `content/{sectionKey}`.
// Defaults keep the site rendering identically until admin edits.

export type FieldType = "text" | "textarea" | "image" | "url" | "tel" | "email";

export type FieldDef = {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  help?: string;
};

export type ListDef = {
  key: string;
  label: string;
  itemLabel: string; // e.g. "Stage", "Leader"
  fields: FieldDef[];
};

export type SectionDef = {
  key: string;             // Firestore doc id under `content`
  page: string;            // grouping in admin sidebar
  title: string;
  description?: string;
  fields?: FieldDef[];
  lists?: ListDef[];
};

export const CONTENT_SECTIONS: SectionDef[] = [
  {
    key: "home_hero",
    page: "Home",
    title: "Hero",
    description: "The first cinematic frame visitors see.",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text", placeholder: "Chaitanya · Since 2012" },
      { key: "headline", label: "Headline (line 1)", type: "text", placeholder: "Learning today." },
      { key: "headlineTwo", label: "Headline (line 2)", type: "text", placeholder: "Leading tomorrow." },
      { key: "subline", label: "Subline", type: "textarea", placeholder: "A school for complete knowledge…" },
      { key: "ctaPrimary", label: "Primary button label", type: "text", placeholder: "Book a visit" },
      { key: "ctaSecondary", label: "Secondary button label", type: "text", placeholder: "Our academics" },
    ],
    lists: [
      {
        key: "slides",
        label: "Hero rotating images",
        itemLabel: "Slide",
        fields: [
          { key: "image", label: "Image", type: "image" },
          { key: "alt", label: "Alt text", type: "text" },
        ],
      },
    ],
  },
  {
    key: "home_about",
    page: "Home",
    title: "About strip",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "image", label: "Thumbnail", type: "image" },
    ],
  },
  {
    key: "home_academics",
    page: "Home",
    title: "Academics stages",
    description: "The three cards shown on the home page.",
    lists: [
      {
        key: "stages",
        label: "Stages",
        itemLabel: "Stage",
        fields: [
          { key: "title", label: "Title", type: "text", placeholder: "Foundation" },
          { key: "ages", label: "Ages / grades", type: "text", placeholder: "Nursery — UKG" },
          { key: "tagline", label: "Tagline", type: "text" },
          { key: "body", label: "Body", type: "textarea" },
          { key: "image", label: "Image", type: "image" },
        ],
      },
    ],
  },
  {
    key: "facilities",
    page: "Facilities",
    title: "Facility cards",
    lists: [
      {
        key: "items",
        label: "Facilities",
        itemLabel: "Facility",
        fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "tag", label: "Small label", type: "text", placeholder: "Digital learning" },
          { key: "body", label: "Description", type: "textarea" },
          { key: "image", label: "Image", type: "image" },
        ],
      },
    ],
  },
  {
    key: "about_hero",
    page: "About School",
    title: "Editorial hero",
    description: "The opening frame of the About page — headline, paragraph, both photos and the year badge.",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "line1", label: "Headline line 1", type: "text" },
      { key: "line2", label: "Headline line 2", type: "text" },
      { key: "line3", label: "Headline line 3 (accent)", type: "text" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "imageMain", label: "Main photo", type: "image" },
      { key: "imageSmall", label: "Small overlapping photo", type: "image" },
      { key: "badgeLabel", label: "Badge label", type: "text", placeholder: "Est." },
      { key: "badgeValue", label: "Badge value", type: "text", placeholder: "2015" },
    ],
  },
  {
    key: "about_beginning",
    page: "About School",
    title: "Where it began",
    description: "The 2015 origin story block — text, photo and the first-year caption.",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "year", label: "Big background year", type: "text", placeholder: "2015" },
      { key: "title", label: "Heading", type: "text", placeholder: "Every meaningful journey" },
      { key: "titleEm", label: "Heading accent", type: "text", placeholder: "starts small" },
      { key: "para1", label: "Paragraph 1", type: "textarea" },
      { key: "para2", label: "Paragraph 2", type: "textarea" },
      { key: "image", label: "Photo", type: "image" },
      { key: "badgeLabel", label: "Badge label", type: "text", placeholder: "First year" },
      { key: "badgeTitle", label: "Badge text", type: "text", placeholder: "One room." },
      { key: "badgeEm", label: "Badge accent text", type: "text", placeholder: "One dream." },
    ],
  },
  {
    key: "about_timeline",
    page: "About School",
    title: "The journey (timeline)",
    description: "Heading and every milestone card on the About timeline.",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "title", label: "Heading", type: "text", placeholder: "Growing, one" },
      { key: "titleEm", label: "Heading accent", type: "text", placeholder: "chapter" },
      { key: "titleTail", label: "Heading ending", type: "text", placeholder: "at a time." },
    ],
    lists: [
      {
        key: "milestones",
        label: "Milestones",
        itemLabel: "Milestone",
        fields: [
          { key: "year", label: "Year / phase", type: "text" },
          { key: "title", label: "Title", type: "text" },
          { key: "body", label: "Description", type: "textarea" },
        ],
      },
    ],
  },
  {
    key: "about_moto",
    page: "About School",
    title: "Our moto (LEAD)",
    description: "The LEAD cycle heading, image and the four stage cards.",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "title", label: "Heading", type: "text", placeholder: "Learning is a" },
      { key: "titleEm", label: "Heading accent", type: "text", placeholder: "journey" },
      { key: "titleTail", label: "Heading ending", type: "text", placeholder: ". We make every step count." },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "image", label: "LEAD circle image", type: "image" },
    ],
    lists: [
      {
        key: "stages",
        label: "LEAD stages",
        itemLabel: "Stage",
        fields: [
          { key: "n", label: "Number", type: "text", placeholder: "01" },
          { key: "title", label: "Title", type: "text" },
          { key: "body", label: "Description", type: "textarea" },
        ],
      },
    ],
  },
  {
    key: "about_people_intro",
    page: "About School",
    title: "People — heading",
    description: "The heading and intro text above the leadership cards.",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "title", label: "Heading line 1", type: "text" },
      { key: "titleEm", label: "Heading line 2 (accent)", type: "text" },
      { key: "paragraph", label: "Intro paragraph", type: "textarea" },
    ],
  },
  {
    key: "about_cta",
    page: "About School",
    title: "Come visit (final CTA)",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "title", label: "Heading", type: "text", placeholder: "Come and see where the" },
      { key: "titleEm", label: "Heading accent", type: "text", placeholder: "journey" },
      { key: "titleTail", label: "Heading ending", type: "text", placeholder: "continues." },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      { key: "ctaPrimary", label: "Primary button label", type: "text" },
      { key: "ctaSecondary", label: "Secondary button label", type: "text" },
      { key: "image", label: "Photo", type: "image" },
    ],
  },

  {
    key: "about_leadership",
    page: "About School",
    title: "The People Behind Us",
    description:
      "The three leaders shown on the About page. Upload, replace or remove each portrait — order is Nagaraju, Nagababu, Kesava.",
    lists: [
      {
        key: "people",
        label: "Leaders",
        itemLabel: "Person",
        fields: [
          { key: "name", label: "Name", type: "text" },
          { key: "role", label: "Role", type: "text" },
          { key: "tagline", label: "Tagline", type: "text" },
          { key: "photo", label: "Portrait", type: "image", help: "Portrait photo — 4:5 works best." },
        ],
      },
    ],
  },
  {
    key: "gallery_videos",
    page: "Life / Gallery",
    title: "Video stories (YouTube)",
    description:
      "Cards in the Video Stories section. Paste the full YouTube link — the thumbnail is picked up automatically.",
    lists: [
      {
        key: "items",
        label: "Videos",
        itemLabel: "Video",
        fields: [
          { key: "url", label: "YouTube link", type: "url", placeholder: "https://www.youtube.com/watch?v=..." },
          { key: "title", label: "Event title", type: "text", placeholder: "Annual Day Highlights" },
          { key: "label", label: "Category / year", type: "text", placeholder: "Event · 2024" },
          { key: "thumb", label: "Custom thumbnail (optional)", type: "image", help: "Leave empty to use the YouTube thumbnail." },
        ],
      },
    ],
  },
  {
    key: "home_previews",
    page: "Home",
    title: "Home page sections",
    description: "The big scrolling cards on the home page — About, Academics, Facilities, Gallery, Contact.",
    lists: [
      {
        key: "cards",
        label: "Sections",
        itemLabel: "Section",
        fields: [
          { key: "eyebrow", label: "Eyebrow", type: "text" },
          { key: "title", label: "Heading", type: "text" },
          { key: "body", label: "Description", type: "textarea" },
          { key: "image", label: "Image", type: "image" },
          { key: "cta", label: "Button label", type: "text" },
        ],
      },
    ],
  },
  {
    key: "gallery_photos",
    page: "Life / Gallery",
    title: "Photo stories",
    description: "Every photo shown in the gallery grid. Replace, reorder, delete or add new ones.",
    lists: [
      {
        key: "photos",
        label: "Photos",
        itemLabel: "Photo",
        fields: [
          { key: "image", label: "Photo", type: "image" },
          { key: "title", label: "Title", type: "text" },
          { key: "line", label: "Caption", type: "text" },
          { key: "category", label: "Category", type: "text", help: "Campus, Classrooms, Events, Annual Day, Sports or Labs." },
        ],
      },
    ],
  },
  {
    key: "contact_info",
    page: "Contact & Global",
    title: "Contact details",
    description: "Shared across home contact strip, /contact page, and the footer.",
    fields: [
      { key: "phone", label: "Phone number", type: "tel", placeholder: "+91 90000 00000" },
      { key: "whatsapp", label: "WhatsApp number (digits only)", type: "text", placeholder: "910000000000" },
      { key: "email", label: "Email address", type: "email" },
      { key: "address", label: "Address", type: "textarea" },
      { key: "mapUrl", label: "Google Maps embed URL", type: "url" },
    ],
  },
  {
    key: "footer",
    page: "Contact & Global",
    title: "Footer",
    fields: [
      { key: "tagline", label: "Tagline", type: "textarea" },
      { key: "instagram", label: "Instagram URL", type: "url" },
      { key: "facebook", label: "Facebook URL", type: "url" },
      { key: "youtube", label: "YouTube URL", type: "url" },
    ],
  },
];

// Defaults — the exact copy currently hardcoded in the site.
// Used as a fallback so nothing breaks until admin edits a field.
export const CONTENT_DEFAULTS: Record<string, Record<string, unknown>> = {
  home_hero: {
    eyebrow: "Chaitanya · English Medium School",
    headline: "Learning today.",
    headlineTwo: "Leading tomorrow.",
    subline:
      "A school for complete knowledge. Nurturing young minds from Nursery through Grade 10 with the LEAD curriculum and IIT Foundation.",
    ctaPrimary: "Book a visit",
    ctaSecondary: "Our academics",
    slides: [
      { image: heroAssembly.url, alt: "Chaitanya EM School — morning assembly with students" },
      { image: heroClassroom.url, alt: "Classroom in session with teacher" },
      { image: heroStudents.url, alt: "Three students collaborating at a desk" },
      { image: heroCampus.url, alt: "Chaitanya EM School campus aerial view" },
    ],
  },
  home_about: {
    eyebrow: "About the school",
    title: "A campus built to grow curious, kind children.",
    body: "From Nursery to Grade 10, Chaitanya blends the LEAD curriculum with an IIT Foundation track — inside classrooms designed for how children actually learn.",
    image: journeyHero,
  },
  home_academics: {
    stages: ACADEMIC_STAGES.map((s) => ({
      slug: s.slug,
      title: s.preview.title,
      ages: s.grades,
      tagline: s.line,
      body: s.preview.description,
      image: s.preview.image,
    })),
  },
  home_previews: {
    cards: [
      {
        eyebrow: "About School",
        title: "A story rooted in Chekkapalli.",
        body: "Since 2015, we've grown a small neighbourhood school into a home for curious minds — guided by three families and a single belief in complete knowledge.",
        image: journeyHero,
        cta: "Read our story",
      },
      {
        eyebrow: "Academics",
        title: "Three stages. One clear journey.",
        body: "Foundation play, LEAD activity-based primary years, and an IIT Foundation edge from Grade 6 — designed so every child moves forward with confidence.",
        image: classroomImg,
        cta: "Explore academics",
      },
      {
        eyebrow: "Facilities",
        title: "Spaces built around the child.",
        body: "Bright classrooms, a hands-on science lab, sports ground, safe transport and a warm campus — every corner shaped for how children actually learn.",
        image: heroCampus.url,
        cta: "See the campus",
      },
      {
        eyebrow: "Gallery",
        title: "Life, in motion.",
        body: "Annual day, sports meets, science fairs, festivals, quiet mornings — the everyday moments that make Chaitanya feel like home.",
        image: lifeHero,
        cta: "Open the gallery",
      },
      {
        eyebrow: "Contact",
        title: "Come, visit us.",
        body: "Admissions, campus tours, a quick question — we're a call or WhatsApp away. Parents in Chekkapalli often just walk in.",
        image: heroStudents.url,
        cta: "Get in touch",
      },
    ],
  },
  gallery_photos: {
    photos: [
      { image: lifeAnnualDay, title: "Annual Day", line: "One evening, a thousand tiny stars on stage.", category: "Annual Day" },
      { image: lifeSports, title: "Sports Day", line: "Small feet, big finish lines.", category: "Sports" },
      { image: lifeScience, title: "Science Activities", line: "The world begins to answer curious questions.", category: "Labs" },
      { image: lifeDrawing, title: "Drawing Competition", line: "Imagination arrives on paper first.", category: "Events" },
      { image: classroomImg, title: "Classroom Learning", line: "Where a quiet spark becomes an idea.", category: "Classrooms" },
      { image: lifeIndependence, title: "Independence Day", line: "Small hands, tallest salute.", category: "Events" },
      { image: lifeYoga, title: "Yoga Day", line: "Stillness is also a lesson.", category: "Campus" },
      { image: lifeDance, title: "Dance Performance", line: "Rhythm learnt long before the words.", category: "Annual Day" },
      { image: lifeFestival, title: "Festival Celebration", line: "Lights, laughter, and one big family.", category: "Events" },
      { image: lifeParents, title: "Parents Meeting", line: "The most important classroom is a shared one.", category: "Campus" },
      { image: lifeAssembly, title: "Morning Assembly", line: "Every day begins together.", category: "Campus" },
    ],
  },
  facilities: {
    items: [
      { title: "Smart Classrooms", tag: "Digital learning", image: classroomImg, body: "Interactive smart boards paired with teachers who still know every child's name." },
      { title: "Science Lab", tag: "Hands-on discovery", image: scienceImg, body: "A full science lab where curiosity turns into experiments — chemistry, physics, biology." },
      { title: "Playground", tag: "Room to run", image: sportsImg, body: "Open ground for athletics, cricket, football and daily physical education." },
      { title: "Arts & Culture", tag: "Music · Dance · Drawing", image: danceImg, body: "Weekly art, dance, music and craft — because a childhood should also feel like joy." },
      { title: "School Transport", tag: "Door to gate", image: busImg, body: "Safe, GPS-tracked buses with trained attendants across every village route we serve." },
    ],
  },
  about_hero: {
    eyebrow: "Chapter Two · Our Story",
    line1: "More than",
    line2: "a school.",
    line3: "A place to grow.",
    paragraph:
      "Since 2015, Chaitanya EM School has grown from a small neighbourhood school into a place where children learn, discover and grow with confidence — from Nursery to Grade 10.",
    imageMain: heroAssembly.url,
    imageSmall: studentReading,
    badgeLabel: "Est.",
    badgeValue: "2015",
  },
  about_beginning: {
    eyebrow: "Where it began",
    year: "2015",
    title: "Every meaningful journey",
    titleEm: "starts small",
    para1:
      "Chaitanya began in 2015 with a simple belief — that children deserve an education that develops the whole person, not just the marks on a report card.",
    para2:
      "One classroom. A handful of families. A quiet promise to teach with patience, care and honesty. That promise still shapes every morning here.",
    image: heroClassroom.url,
    badgeLabel: "First year",
    badgeTitle: "One room.",
    badgeEm: "One dream.",
  },
  about_timeline: {
    eyebrow: "The Journey",
    title: "Growing, one",
    titleEm: "chapter",
    titleTail: "at a time.",
    milestones: [
      { year: "2015", title: "A small beginning.", body: "The school opens its doors in Chekkapalli with a handful of families and a single classroom." },
      { year: "The Early Years", title: "Building a foundation.", body: "Creating a safe and nurturing environment for young learners — routines, kindness and curiosity first." },
      { year: "The Journey Forward", title: "Growing with purpose.", body: "Expanding classrooms and strengthening academic foundations, one grade at a time." },
      { year: "Today", title: "Nursery to Grade 10.", body: "A growing community of curious, confident learners — and the families who make it home." },
    ],
  },
  about_people_intro: {
    eyebrow: "The people behind us",
    title: "Every school has a story.",
    titleEm: "Ours is shaped by people.",
    paragraph:
      "Behind every classroom, every morning assembly and every small milestone are the people who carry this school forward — with care, patience and a steady hand.",
  },
  about_moto: {
    eyebrow: "Our moto",
    title: "Learning is a",
    titleEm: "journey",
    titleTail: ". We make every step count.",
    paragraph:
      "The LEAD cycle shapes how we teach — plan with intent, teach with care, review honestly and evaluate so every child moves forward.",
    image: leadMotto.url,
    stages: [
      { n: "01", title: "Planning", body: "Every meaningful learning journey begins with a clear direction." },
      { n: "02", title: "Implementation", body: "Ideas become meaningful through thoughtful action and learning experiences." },
      { n: "03", title: "Review", body: "Progress is observed, understood and improved continuously." },
      { n: "04", title: "Evaluation", body: "Learning is measured to help every child move forward with confidence." },
    ],
  },
  about_cta: {
    eyebrow: "Come visit",
    title: "Come and see where the",
    titleEm: "journey",
    titleTail: "continues.",
    paragraph:
      "Visit our campus, meet our community, and discover what makes Chaitanya feel like home.",
    ctaPrimary: "Plan a visit",
    ctaSecondary: "Explore academics",
    image: visitImage.url,
  },

  about_leadership: {
    people: [
      {
        name: "Nagaraju",
        role: "Managing Director",
        tagline: "Building the vision behind every new beginning.",
        photo: leaderNagaraju.url,
      },
      {
        name: "Nagababu",
        role: "Director",
        tagline: "Guiding the school forward with purpose.",
        photo: leaderNagababu.url,
      },
      {
        name: "Kesava",
        role: "Principal",
        tagline: "Turning everyday learning into lasting growth.",
        photo: "",
      },
    ],
  },
  gallery_videos: {
    items: [
      { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Annual Day Highlights", label: "Event · 2024", thumb: "" },
      { url: "https://www.youtube.com/watch?v=hY7m5jjJ9mM", title: "Sports Day Moments", label: "Event · 2024", thumb: "" },
      { url: "https://www.youtube.com/watch?v=9bZkp7q19f0", title: "Cultural Performance", label: "Stage · 2023", thumb: "" },
      { url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk", title: "Science Exhibition", label: "Learning · 2023", thumb: "" },
      { url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ", title: "Independence Day", label: "Assembly · 2024", thumb: "" },
      { url: "https://www.youtube.com/watch?v=OPf0YbXqDm0", title: "Campus Tour", label: "Our School", thumb: "" },
    ],
  },
  contact_info: {
    phone: "+91 94913 71708",
    whatsapp: "919491371708",
    email: "chaitanyaemschool27@gmail.com",
    address: "Chekkapalli, Andhra Pradesh",
    mapUrl: "",
  },
  footer: {
    tagline:
      "A school for complete knowledge. Nurturing young minds from Nursery through Grade 10 with the LEAD curriculum and IIT Foundation.",
    instagram: "https://www.instagram.com/maridhu.nagaraju",
    facebook: "https://www.facebook.com/search/top?q=Nagaraju%20Maridhu",
    youtube: "https://www.youtube.com/@chaitanyaschoolchekkapalli",
  },

};