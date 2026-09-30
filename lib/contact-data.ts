/**
 * Phase 14 — Contact & Footer Data
 * Strictly sourced from reference/assets/resume/resume.pdf.
 * No invented social accounts, emails, or external URLs.
 */

export interface ContactLinkItem {
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
}

export const CONTACT_SECTION_DATA = {
  sectionLabel: "09 / CONTACT",
  heading: "LET'S BUILD SOMETHING.",
  supportingText:
    "Have a project, opportunity, or problem worth working on? I'd love to hear about it.",
  primaryCta: {
    label: "GET IN TOUCH",
    email: "gurumaheshkandukuri@gmail.com",
    href: "mailto:gurumaheshkandukuri@gmail.com",
  },
  links: [
    {
      label: "GitHub",
      href: "https://github.com/gurumaheshkandukuri",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/guru-mahesh-kandukuri-420550307/",
      external: true,
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      external: true,
    },
  ] satisfies readonly ContactLinkItem[],
  media: {
    imageSrc: "/assets/images/character/contact-character.png",
    alt: "Illustration of Guru Mahesh Kandukuri waving from his engineering desk.",
  },
} as const;
