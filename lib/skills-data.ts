/**
 * Phase 12 — Skills Section Data
 * Strictly sourced from reference/assets/resume/resume.pdf.
 * No unverified technologies, proficiency percentages, or skill ratings.
 */

export interface SkillGroup {
  readonly index: string;
  readonly category: string;
  readonly items: readonly string[];
}

export const SKILLS_SECTION_DATA = {
  sectionLabel: "07 / SKILLS",
  heading: "WHAT I WORK WITH",
  supportingLine:
    "Tools and technologies I've worked with while building, learning, and experimenting.",
  groups: [
    {
      index: "01",
      category: "PROGRAMMING",
      items: ["C++", "Python", "JavaScript", "SQL"],
    },
    {
      index: "02",
      category: "FRONTEND",
      items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    },
    {
      index: "03",
      category: "BACKEND",
      items: ["Node.js", "Express"],
    },
    {
      index: "04",
      category: "DATABASES / BACKEND SERVICES",
      items: ["MySQL", "MongoDB", "Supabase", "Firebase"],
    },
    {
      index: "05",
      category: "APIs / INTEGRATIONS",
      items: ["REST APIs", "Google APIs", "Google Gemini API"],
    },
    {
      index: "06",
      category: "TOOLS",
      items: ["GitHub", "VS Code", "Canva"],
    },
  ] satisfies readonly SkillGroup[],
} as const;
