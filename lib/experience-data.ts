/**
 * Phase 10 — Experience Data
 * Strictly factual, confirmed information only.
 * No invented responsibilities, technologies, or metrics.
 */

export interface ExperienceEntry {
  readonly index: string;
  readonly role: string;
  readonly company: string;
  readonly status: "CURRENT";
  readonly roleType: "INTERNSHIP";
  readonly summary: string;
}

export const EXPERIENCE_ENTRIES: readonly ExperienceEntry[] = [
  {
    index: "01",
    role: "Web Development Intern",
    company: "Netmaxin Group",
    status: "CURRENT",
    roleType: "INTERNSHIP",
    summary:
      "Currently working as a Web Development Intern at Netmaxin Group.",
  },
] as const;
