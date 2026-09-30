/**
 * Phase 9 — Selected Work Data
 * Strictly sourced from reference/assets/resume/resume.pdf.
 * No invented metrics, user counts, or unverified links.
 */

export interface SelectedWorkProject {
  readonly index: "01" | "02" | "03";
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly role: string;
  readonly description: string;
  readonly approach: string;
  readonly technologies: readonly string[];
  readonly links: {
    readonly caseStudy?: string;
    readonly live?: string;
    readonly github: string;
  };
}

export const SELECTED_WORK_PROJECTS: readonly SelectedWorkProject[] = [
  {
    index: "01",
    slug: "nexcivic",
    title: "NexCivic",
    subtitle: "AI-Powered Civic Intelligence Platform",
    role: "Lead Developer",
    description:
      "A civic platform built with React, TypeScript, and Google Maps API for reporting and tracking public infrastructure issues in real time.",
    approach:
      "Implemented Firebase Authentication and Firestore for secure access and media uploads, paired with AI issue categorization and Tailwind CSS dashboards for public transparency.",
    technologies: [
      "React",
      "TypeScript",
      "Google Maps API",
      "Firebase",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    links: {
      caseStudy: "/work/nexcivic",
      live: "https://nexcivic-49dbe.web.app/",
      github: "https://github.com/gurumaheshkandukuri/NexCivic.git",
    },
  },
  {
    index: "02",
    slug: "nexus",
    title: "Nexus",
    subtitle: "AI-Powered Smart Campus Education Platform",
    role: "Lead Developer",
    description:
      "A smart campus platform designed to surface learning gaps through real-time topic-wise student feedback and streamline academic communication and collaboration.",
    approach:
      "Integrated Google Authentication, Google Calendar API, and Google Meet for secure login, automated event synchronization, and instant academic meeting scheduling.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Firebase Hosting",
      "Google Cloud",
      "Google Calendar API",
      "Google Meet",
    ],
    links: {
      caseStudy: "/work/nexus",
      live: "https://nexus-a9bcc.web.app/",
      github: "https://github.com/gurumaheshkandukuri/Nexus-eduplatform.git",
    },
  },
  {
    index: "03",
    slug: "intentix",
    title: "Intentix",
    subtitle: "Intent-Based Coding Assessment Tool",
    role: "UI Developer",
    description:
      "An intent-based assessment tool that converts a plain-English hiring prompt into a structured coding assessment aligned to role, skills, difficulty, and time.",
    approach:
      "Implemented rules to balance question selection, check assessment feasibility, and attach clear explanations so generated evaluations remain consistent for recruiters.",
    technologies: ["Next.js", "React", "Google Gemini API", "REST APIs"],
    links: {
      github: "https://github.com/gurumaheshkandukuri/Intentix-platform.git",
    },
  },
] as const;
