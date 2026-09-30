/**
 * Phase 13 — Achievements / Proof of Work Data
 * Strictly factual, resume-verified entries.
 * No invented rankings, awards, or unconfirmed roles.
 */

export interface AchievementEntry {
  readonly index: string;
  readonly category: "CODING" | "CERTIFICATION" | "LEADERSHIP" | "COMMUNITY";
  readonly title: string;
  readonly detail: string;
  readonly description: string;
}

export const ACHIEVEMENTS_SECTION_DATA = {
  sectionLabel: "08 / ACHIEVEMENTS",
  heading: "PROOF OF WORK",
  supportingLine:
    "A few things that reflect how I learn, build, and contribute.",
  entries: [
    {
      index: "01",
      category: "CODING",
      title: "1000+ Problems Solved",
      detail: "CodeChef",
      description:
        "Consistent problem solving and competitive programming practice on CodeChef.",
    },
    {
      index: "02",
      category: "CERTIFICATION",
      title: "Data Structures & Algorithms",
      detail: "NPTEL · October 2025",
      description:
        "Completed certification focused on data structures and algorithms.",
    },
    {
      index: "03",
      category: "CERTIFICATION",
      title: "Introduction to Modern AI",
      detail: "Cisco · June 2026",
      description:
        "Completed certification covering modern artificial intelligence concepts.",
    },
    {
      index: "04",
      category: "CERTIFICATION",
      title: "Web Development: HTML & CSS",
      detail: "IBM SkillsBuild · June 2025",
      description:
        "Completed certification focused on HTML and CSS for web development.",
    },
    {
      index: "05",
      category: "LEADERSHIP",
      title: "Class Representative",
      detail: "MVGR College of Engineering",
      description:
        "Representing my class and contributing to communication and coordination.",
    },
    {
      index: "06",
      category: "COMMUNITY",
      title: "Literary Club",
      detail: "Core Member",
      description:
        "Active involvement as a core member of the college Literary Club.",
    },
  ] satisfies readonly AchievementEntry[],
} as const;
