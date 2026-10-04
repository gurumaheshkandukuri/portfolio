# Guru Mahesh Kandukuri — Portfolio

Personal developer portfolio of **Guru Mahesh Kandukuri**, showcasing software engineering projects, practical case studies, verified skills, and academic proof of work. Designed and built with an editorial aesthetic, responsive layout, and restrained motion system.

> *"Curious by nature. Always building, learning and experimenting."*

---

## About

I am a 3rd-year **B.Tech Computer Science and Engineering (AIML)** student at Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGR) and a **Web Development Intern at Netmaxin Group**.

My engineering approach centers on **learning by building**—tackling real-world problems directly, discovering constraints firsthand, and seeing solutions through from architecture to deployment. Alongside web application development, I maintain strong computer science fundamentals with **1,000+ algorithmic problems solved on CodeChef** and formal certification in Data Structures & Algorithms (NPTEL).

---

## Featured Work

Production-ready web applications and case studies documented on the portfolio.

### NexCivic — AI-Powered Civic Intelligence Platform
A full-stack municipal issue reporting and tracking platform designed to connect citizens, field inspectors, and administrators with geospatial transparency.
* **Key Features**: Interactive Google Maps issue triage, citizen reporting with photo upload, role-based state command center dashboard, and AI-assisted issue categorization.
* **Technologies**: React, TypeScript, Google Maps API, Firebase Authentication, Cloud Firestore, Node.js, Tailwind CSS, REST APIs.
* **Live Application**: [nexcivic-49dbe.web.app](https://nexcivic-49dbe.web.app/)
* **Repository**: [github.com/gurumaheshkandukuri/NexCivic](https://github.com/gurumaheshkandukuri/NexCivic)

### Nexus — AI-Powered Smart Campus Education Platform
A collaborative campus platform that surfaces real-time topic-wise student feedback to help educators identify and address learning gaps.
* **Key Features**: Google Authentication, automated event synchronization via Google Calendar API, instant academic meeting scheduling via Google Meet integration, and student feedback analytics.
* **Technologies**: React, TypeScript, Firebase, Google Cloud APIs, Google Meet, Tailwind CSS, Firebase Hosting.
* **Live Application**: [nexus-a9bcc.web.app](https://nexus-a9bcc.web.app/)
* **Repository**: [github.com/gurumaheshkandukuri/Nexus-eduplatform](https://github.com/gurumaheshkandukuri/Nexus-eduplatform)

### Intentix — Intent-Based Coding Assessment Tool
An assessment generation tool that converts plain-English hiring requirements into structured coding evaluations tailored to role, skill levels, difficulty, and time constraints.
* **Role**: UI Developer
* **Key Features**: Interactive evaluation preview, balanced question generation rules, and candidate assessment feasibility checks.
* **Technologies**: Next.js, React, Google Gemini API, REST APIs.
* **Repository**: [github.com/gurumaheshkandukuri/Intentix-platform](https://github.com/gurumaheshkandukuri/Intentix-platform)

---

## Currently Building

Active software projects currently in development:

### Fillo — Lead Developer
A privacy-first **Chrome Manifest V3** browser extension for rapid web form autofill.
* Engineered with local browser storage and zero cloud backend so personal profile data remains strictly on the client device.
* **Stack**: TypeScript, JavaScript, Chrome Extension API (MV3), Vite, HTML5, CSS3.
* **Repository**: [github.com/gurumaheshkandukuri/fillo](https://github.com/gurumaheshkandukuri/fillo)

### TechNova — Lead Developer
A responsive corporate IT services and digital solutions web platform.
* Features structured service discovery, dynamic portfolio filtering, career workflows, and an interactive multi-step project enquiry system.
* **Stack**: HTML5, CSS3, JavaScript (ES6+), PHP, MySQL.
* **Repository**: [github.com/gurumaheshkandukuri/TechNova](https://github.com/gurumaheshkandukuri/TechNova)

### Savy PDF Editor — Lead Developer
A browser-based, client-side PDF workspace for viewing, editing, organizing, and converting documents.
* Processes documents entirely locally in the browser using PDF.js and pdf-lib—no server uploads required.
* **Stack**: JavaScript, TypeScript, PDF.js, `pdf-lib`, Vite, PWA.
* **Repository**: [github.com/gurumaheshkandukuri/savy-pdf-editor](https://github.com/gurumaheshkandukuri/savy-pdf-editor)

---

## Tech Stack

### Portfolio Application Stack
This specific portfolio website is built using:
* **Framework**: Next.js 14 (App Router, Static Site Generation)
* **Language**: TypeScript
* **Styling**: Tailwind CSS, custom design tokens, native CSS variables
* **Icons**: Lucide React
* **Motion**: Native CSS transitions, `@keyframes`, and single-fire `IntersectionObserver` (zero heavy motion libraries)

### Broader Engineering Technologies Represented Across Projects
| Category | Technologies |
| :--- | :--- |
| **Programming Languages** | C++, Python, JavaScript, TypeScript, SQL |
| **Frontend** | React, Next.js, HTML5, CSS3, Tailwind CSS |
| **Backend & Services** | Node.js, Express, Firebase (Auth, Firestore, Hosting), Supabase |
| **Databases** | MySQL, MongoDB |
| **APIs & Integrations** | REST APIs, Google Maps API, Google Calendar API, Google Meet API, Google Gemini API |
| **Tools & Environments** | Git, GitHub, VS Code, Vite, Chrome Extensions (MV3) |

---

## Portfolio Architecture

High-level directory structure of this repository:

```text
├── app/                          # Next.js 14 App Router
│   ├── globals.css               # Editorial design tokens, reset, and animation keyframes
│   ├── layout.tsx                # Root layout with ThemeProvider and metadata
│   ├── not-found.tsx             # Editorial 404 page with custom artwork
│   ├── page.tsx                  # Single-page editorial homepage
│   └── work/
│       └── [slug]/
│           └── page.tsx          # Dynamic SSG project case study routes
├── components/
│   ├── layout/                   # Header, Footer, Container, ThemeProvider
│   ├── sections/                 # Hero, QuickProof, CurrentlyBuilding, SelectedWork,
│   │                             # Experience, About, Skills, Achievements, Contact
│   ├── ui/                       # ScrollReveal, MagneticWrap (restrained interaction utilities)
│   └── work/                     # ProjectDetailView (case study reader & figures)
├── lib/                          # Single sources of truth for verified portfolio data
│   ├── about-data.ts
│   ├── achievements-data.ts
│   ├── assets.ts                 # Runtime asset registry and nav configuration
│   ├── contact-data.ts
│   ├── currently-building-data.ts
│   ├── experience-data.ts
│   ├── project-details-data.ts   # Deep case study copy, decisions, and figures
│   ├── selected-work-data.ts
│   └── skills-data.ts
└── public/
    ├── assets/
    │   ├── images/               # Static illustrations and fallbacks
    │   ├── photo/                # Portrait photograph
    │   ├── projects/             # Verified production screenshots for case studies
    │   └── videos/               # Viewport-lazy character motion MP4s
    └── resume.pdf                # Verified resume
```

---

## Design System

The portfolio follows an **editorial, publication-inspired design philosophy** rather than standard dashboard or tech-bro templates:

* **Warm Editorial Palette**: Warm parchment base (`#F5F1E8`) with charcoal text (`#1A1815`) and burnt terracotta accents (`#C05621`).
* **True Dark Theme**: Deep espresso/charcoal background (`#1A1815`) preserving contrast and warmth without harsh pitch-black surfaces.
* **Typography Hierarchy**: Distinctive editorial serif headings paired with clean sans-serif body copy and monospace index metadata.
* **12-Column Asymmetric Grids**: Content organized into offset ledgers and editorial splits rather than repetitive card grids.
* **Real Production Evidence**: Case studies feature genuine, unembellished production interface screenshots in restrained frames instead of artificial 3D device mockups.
* **Deliberately Avoids**: Heavy floating gradients, generic glassmorphism, inflated percentage bars ("React 95%"), fake user statistics, and distracting cursor trails.

---

## Accessibility & Performance

* **Layout Shift Prevention**: Media containers define fixed aspect ratios (`aspect-[3/2]` for character media) and explicit width/height dimensions (for case study figures) to prevent layout shifts during asset loading.
* **Strict Media Mutual Exclusivity**: Character elements render either `<video>` or `<img>`—never stacked, avoiding ghosting and double network transfers.
* **Lazy Media Loading**: Below-the-fold videos load only when within 240px of the viewport via `IntersectionObserver` and pause automatically when scrolled offscreen.
* **Respects Reduced Motion**: Fully compliant with `prefers-reduced-motion: reduce`—animations complete instantly, videos swap to lightweight static PNGs, and magnetic translation is disabled.
* **Semantic HTML**: Proper heading outline (`h1` through `h3`), `<main>`, `<header>`, `<footer>`, `<figure>`, and `<figcaption>` elements with clear ARIA labels.
* **Zero Heavy JS Animation Libraries**: Achieved without Framer Motion, GSAP, or smooth-scroll shims, keeping the client bundle lean through native CSS transitions and minimal IntersectionObserver utilities.

---

## Getting Started

### Prerequisites
* Node.js 18.17 or later
* npm, pnpm, or yarn

### Installation & Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/gurumaheshkandukuri/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

### Production Build

Verify type checking and create an optimized production static build:

```bash
# Type check without emitting files
npx tsc --noEmit

# Build production static application
npm run build

# Preview production build locally
npm start
```

---

## Contact & Profiles

* **Email**: [gurumaheshkandukuri@gmail.com](mailto:gurumaheshkandukuri@gmail.com)
* **LinkedIn**: [linkedin.com/in/guru-mahesh-kandukuri-420550307](https://www.linkedin.com/in/guru-mahesh-kandukuri-420550307/)
* **GitHub**: [github.com/gurumaheshkandukuri](https://github.com/gurumaheshkandukuri)
* **CodeChef**: [codechef.com](https://www.codechef.com) (1000+ problems solved)

---

## License

This portfolio repository is maintained by Guru Mahesh Kandukuri.
