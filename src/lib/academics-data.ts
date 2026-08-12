import studentReading from "@/assets/student-reading.jpg";
import classroomImg from "@/assets/classroom.jpg";
import scienceImg from "@/assets/science.jpg";
import libraryImg from "@/assets/library.jpg";
import academicsHero from "@/assets/academics-hero.jpg";
import lifeScience from "@/assets/life-science.jpg";

export type AcademicStage = {
  slug: "foundation" | "development" | "excellence";
  tag: string;
  grades: string;
  line: string;
  /** card surface */
  bg: string;
  /** text colour class for the card */
  fg: string;
  /** button surface tuning on the card */
  tone: "light" | "dark";
  preview: {
    title: string;
    description: string;
    image: string;
    focus: string[];
    cta: string;
  };
  detail: {
    heroImage: string;
    headline: [string, string];
    intro: string;
    overview: string;
    approach: { title: string; body: string }[];
    development: string[];
    gallery: string[];
  };
};

export const ACADEMIC_STAGES: AcademicStage[] = [
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
      description:
        "Early learning is where curiosity begins. Our foundation years focus on developing confidence, communication, creativity and a joyful relationship with learning.",
      image: studentReading,
      focus: ["Early curiosity", "Communication", "Creativity", "Foundational learning"],
      cta: "View Foundation Programme",
    },
    detail: {
      heroImage: studentReading,
      headline: ["Where the first questions", "become a lifelong curiosity."],
      intro:
        "From Nursery to Grade 3, children learn through play, story and hands-on discovery — in classrooms designed for how young minds actually work.",
      overview:
        "The foundation years build the habits that carry a child through school: listening, speaking, questioning and the confidence to try. Every day balances structured literacy and numeracy with music, art, movement and free exploration.",
      approach: [
        {
          title: "Learning through play",
          body: "Concepts arrive as games, songs and stories first — so understanding is felt before it is written.",
        },
        {
          title: "Language from day one",
          body: "English is spoken warmly and constantly, supported in the mother tongue so no child feels lost.",
        },
        {
          title: "Small, watchful classes",
          body: "Teachers track each child individually and adjust pace, so quiet children are never left behind.",
        },
      ],
      development: [
        "Confidence to speak in front of a group",
        "Fine motor skills, handwriting and early reading",
        "Number sense through concrete materials",
        "Kindness, sharing and classroom routines",
      ],
      gallery: [academicsHero, libraryImg],
    },
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
      description:
        "As children grow, learning becomes deeper, more independent and more connected to the world around them.",
      image: classroomImg,
      focus: ["Strong academic foundations", "Independent thinking", "Exploration", "Confidence"],
      cta: "View Development Programme",
    },
    detail: {
      heroImage: classroomImg,
      headline: ["Where knowledge turns", "into independent thinking."],
      intro:
        "Grades 4 to 7 deepen every subject through the LEAD curriculum — activity-led lessons, reading pods and smart classroom experiences.",
      overview:
        "This is the stage where students move from being taught to learning on their own. Concepts are introduced through activity, tested through discussion and applied through projects, so understanding is durable rather than memorised.",
      approach: [
        {
          title: "Activity-led lessons",
          body: "Every concept is done before it is written — experiments, models, role-play and group tasks.",
        },
        {
          title: "Reading and expression",
          body: "Structured reading pods and regular writing build vocabulary, comprehension and a clear voice.",
        },
        {
          title: "Continuous assessment",
          body: "Frequent low-stakes checks show exactly where a student stands, long before an exam does.",
        },
      ],
      development: [
        "Independent study and note-making habits",
        "Comfort with mathematics and reasoning",
        "Curiosity about science and the wider world",
        "Teamwork, presentation and leadership",
      ],
      gallery: [lifeScience, libraryImg],
    },
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
      description:
        "The senior years help students build knowledge, discipline and confidence as they prepare for future academic opportunities.",
      image: scienceImg,
      focus: ["Academic preparation", "Critical thinking", "Confidence", "Future readiness"],
      cta: "View Excellence Programme",
    },
    detail: {
      heroImage: scienceImg,
      headline: ["Where preparation becomes", "quiet, lasting confidence."],
      intro:
        "Grades 8 to 10 combine board preparation with an integrated IIT Foundation track in mathematics, science and reasoning.",
      overview:
        "Senior students work to a clear rhythm: concept, practice, review. Alongside the board syllabus, the IIT Foundation programme strengthens problem-solving and exam temperament so students step into Intermediate and competitive exams already prepared.",
      approach: [
        {
          title: "Integrated IIT Foundation",
          body: "Advanced problem sets in maths, physics and chemistry run alongside the regular syllabus.",
        },
        {
          title: "Exam craft",
          body: "Timed practice, paper analysis and revision cycles remove the fear from board examinations.",
        },
        {
          title: "Mentored guidance",
          body: "Each student gets regular one-to-one review of progress, targets and next-step choices.",
        },
      ],
      development: [
        "Disciplined, self-directed study routines",
        "Critical thinking and applied problem solving",
        "Composure and confidence under examination",
        "Clarity about the path after Grade 10",
      ],
      gallery: [lifeScience, academicsHero],
    },
  },
];

export function getStage(slug: string) {
  return ACADEMIC_STAGES.find((s) => s.slug === slug);
}
