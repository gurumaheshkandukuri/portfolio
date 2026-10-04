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
    value: "9.50 / 10",
    title: "B.Tech CSE (AIML)",
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
        "A Manifest V3 Chrome extension for fast browser form autofill, engineered with local profile storage and zero cloud backend so personal data remains private on the user's device.",
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
        "A responsive IT services platform featuring structured service discovery, portfolio filtering, and an interactive multi-step project enquiry workflow built on a JavaScript, PHP, and MySQL architecture.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "MySQL"],
      repoUrl: "https://github.com/gurumaheshkandukuri/TechNova",
    },
    {
      index: "03",
      name: "SAVY PDF EDITOR",
      role: "Lead Developer",
      description:
        "A browser-based PDF workspace built with PDF.js and pdf-lib for client-side editing, organizing, and conversion, handling documents locally on the device rather than uploading to a server.",
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
