/**
 * Phase 11 — About Section Data
 * Strictly factual personal, academic, and community context.
 * No invented leadership claims, unconfirmed titles, or repeated resume lists.
 */

export const ABOUT_SECTION_DATA = {
  sectionLabel: "06 / ABOUT",
  heading: "A LITTLE ABOUT ME",
  handwrittenLead: "Curious about how things work. So I build them.",
  coreIdea: "Curious by nature. Always building, learning and experimenting.",
  photo: {
    src: "/assets/photo/guru_photo.jpeg",
    alt: "Portrait photograph of Guru Mahesh Kandukuri",
    caption: "GURU MAHESH KANDUKURI",
    subCaption: "3RD YEAR B.TECH CSE (AIML)",
  },
  paragraphs: [
    "I'm a 3rd-year B.Tech Computer Science and Engineering (AIML) student at Maharaj Vijayaram Gajapathi Raj College of Engineering, and currently a Web Development Intern at Netmaxin Group. Most of what I understand about software comes from sitting down with a problem and trying to build a working solution.",
    "When I take on an idea—whether it's for a college hackathon, a technical workshop, or a personal web project—I focus on figuring out what the problem actually needs, learning the parts I don't know yet, and seeing the work through. Practicing algorithmic problem solving (with 1000+ problems solved on CodeChef) keeps my fundamentals sharp, while serving as a Class Representative and a core member of our college Literary Club has taught me how to take responsibility and work well with people.",
  ],
  philosophy: {
    label: "LEARNING BY BUILDING",
    statement:
      "Instead of waiting to learn everything before starting, I prefer to start building, encounter the real problems firsthand, research what is missing, experiment, and learn through the process.",
  },
  contextNotes: [
    {
      label: "EDUCATION",
      value: "3rd Year B.Tech CSE (AIML)",
      detail: "MVGR College of Engineering",
    },
    {
      label: "CAMPUS & COMMUNITY",
      value: "Class Representative",
      detail: "Literary Club Core Member",
    },
    {
      label: "PRACTICE & ACTIVITIES",
      value: "1000+ CodeChef Problems",
      detail: "Hackathons & Technical Workshops",
    },
  ],
} as const;
