/**
 * Phase 8 / Final Polish — Quick Proof & Currently Building Data
 * Strictly factual information from verified portfolio context.
 * No placeholder project cards, invented names, or fake statistics.
 */

export interface QuickProofItem {
  readonly index: string;
  readonly label: string;
  readonly value: string;
  readonly title: string;
  readonly detail: string;
}

export const QUICK_PROOF_ITEMS: readonly QuickProofItem[] = [
  {
    index: "01",
    label: "CODING PROBLEMS",
    value: "1000+",
    title: "Problems Solved",
    detail: "CodeChef",
  },
  {
    index: "02",
    label: "CURRENT ROLE",
    value: "Web Development",
    title: "Intern",
    detail: "Netmaxin Group",
  },
  {
    index: "03",
    label: "EDUCATION",
    value: "B.Tech CSE",
    title: "(AIML)",
    detail: "MVGR College of Engineering",
  },
  {
    index: "04",
    label: "ACTIVE WORK",
    value: "3",
    title: "Projects in Progress",
    detail: "Currently being built",
  },
] as const;

export interface CurrentlyBuildingProject {
  readonly index: string;
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly repoUrl: string;
}

export const CURRENTLY_BUILDING_DATA = {
  sectionLabel: "03 / ACTIVE DEVELOPMENT",
  heading: "CURRENTLY BUILDING",
  supportingLine: "Three software projects currently in development.",
  projects: [
    {
      index: "01",
      name: "FILLO",
      role: "Lead Developer",
      description:
        "A privacy-first Chrome browser extension that helps fill repetitive web forms faster using a locally stored user profile.",
      technologies: [
        "TypeScript",
        "JavaScript",
        "Chrome Extension (MV3)",
        "Vite",
        "HTML/CSS",
      ],
      repoUrl: "https://github.com/gurumaheshkandukuri/fillo",
    },
    {
      index: "02",
      name: "TECHNOVA",
      role: "Lead Developer",
      description:
        "A responsive corporate IT services and solutions website featuring interactive service directories, portfolio filtering, career workflows, and a multi-step project enquiry system.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "MySQL"],
      repoUrl: "https://github.com/gurumaheshkandukuri/TechNova",
    },
    {
      index: "03",
      name: "SAVY PDF EDITOR",
      role: "Lead Developer",
      description:
        "A privacy-first, browser-based PDF workspace for editing, organizing, converting, and managing PDF documents locally on the client device.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "PDF.js",
        "pdf-lib",
        "Vite",
        "PWA",
      ],
      repoUrl: "https://github.com/gurumaheshkandukuri/savy-pdf-editor",
    },
  ] satisfies readonly CurrentlyBuildingProject[],
} as const;
