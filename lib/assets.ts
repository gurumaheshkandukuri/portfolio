/**
 * Approved Reference Asset Library Registry
 * Source of truth: reference/assets/
 * Do NOT modify, replace, or regenerate these approved source assets.
 */

export const APPROVED_REFERENCE_ASSETS = {
  design: {
    portfolioReference: "reference/assets/design/portfolio-reference.png",
  },
  photo: {
    guruPhoto: "reference/assets/photo/guru_photo.jpeg",
  },
  resume: {
    pdf: "reference/assets/resume/resume.pdf",
  },
  characters: {
    hero: "reference/assets/images/character/guru-hero-character.png",
    about: "reference/assets/images/character/about-character.png",
    building: "reference/assets/images/character/building-character.png",
    thinking: "reference/assets/images/character/thinking-character.png",
    learning: "reference/assets/images/character/learning-character.png",
    hackathon: "reference/assets/images/character/hackathon-character.png",
    contact: "reference/assets/images/character/contact-character.png",
    notFound404: "reference/assets/images/character/404-character.png",
  },
  videos: {
    heroMotion: "reference/assets/videos/hero-character-motion.mp4",
    aboutMotion: "reference/assets/videos/about-character-motion.mp4",
    buildingMotion: "reference/assets/videos/building-character-motion.mp4",
    thinkingMotion: "reference/assets/videos/thinking-character-motion.mp4",
    learningMotion: "reference/assets/videos/learning-character-motion.mp4",
    hackathonMotion: "reference/assets/videos/hackathon-character-motion.mp4",
    contactMotion: "reference/assets/videos/contact-character-motion.mp4",
  },
} as const;

/**
 * Public Runtime Assets
 * Only approved runtime assets actively used by the portfolio are copied into public/.
 * Unused or rejected videos (learning-character-motion.mp4, contact-character-motion.mp4)
 * remain preserved in reference/assets/videos/ only.
 */
export const PUBLIC_HERO_ASSETS = {
  heroVideo: "/assets/videos/hero-character-motion.mp4",
  heroCharacterFallback: "/assets/images/character/guru-hero-character.png",
  resumePdf: "/resume.pdf",
} as const;

export const PUBLIC_SECTION_ASSETS = {
  currentlyBuilding: {
    videoSrc: "/assets/videos/building-character-motion.mp4",
    fallbackImageSrc: "/assets/images/character/building-character.png",
    alt: "Illustration of Guru Mahesh Kandukuri actively coding and building software at his dual-screen engineering desk.",
  },
  selectedWork: {
    videoSrc: "/assets/videos/thinking-character-motion.mp4",
    fallbackImageSrc: "/assets/images/character/thinking-character.png",
    alt: "Illustration of Guru Mahesh Kandukuri thinking through system architecture and technical problem solving at his desk.",
  },
  skills: {
    imageSrc: "/assets/images/character/learning-character.png",
    alt: "Illustration of Guru Mahesh Kandukuri studying and taking engineering notes by his laptop.",
  },
  achievements: {
    videoSrc: "/assets/videos/hackathon-character-motion.mp4",
    fallbackImageSrc: "/assets/images/character/hackathon-character.png",
    alt: "Illustration of Guru Mahesh Kandukuri collaborating with teammates during a software hackathon.",
  },
  about: {
    photoSrc: "/assets/photo/guru_photo.jpeg",
    videoSrc: "/assets/videos/about-character-motion.mp4",
    fallbackImageSrc: "/assets/images/character/about-character.png",
    alt: "Illustration of Guru Mahesh Kandukuri in his study workspace, reflecting a curious engineer learning by building.",
  },
  contact: {
    imageSrc: "/assets/images/character/contact-character.png",
  },
  notFound404: {
    imageSrc: "/assets/images/character/404-character.png",
    alt: "Illustration of Guru Mahesh Kandukuri sitting with his laptop and a malfunctioning robot, shrugging at a missing page.",
  },
} as const;

/**
 * Header Navigation Structure
 */
export interface NavRoute {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export const HEADER_NAV_ITEMS: readonly NavRoute[] = [
  { label: "HOME", href: "/#top" },
  { label: "ABOUT", href: "/#about" },
  { label: "WORK", href: "/#work" },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "SKILLS", href: "/#skills" },
  { label: "ACHIEVEMENTS", href: "/#achievements" },
  { label: "RESUME", href: PUBLIC_HERO_ASSETS.resumePdf, external: true },
] as const;

export const HEADER_CONTACT_ACTION: NavRoute = {
  label: "CONTACT",
  href: "/#contact",
} as const;
