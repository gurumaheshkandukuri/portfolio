/**
 * Phase 17 — Reusable Project Case Study Data Architecture
 * Strictly sourced from verified repository code, ARCHITECTURE.md, README.md,
 * and reference/assets/resume/resume.pdf.
 * No invented metrics, unverified user counts, or fabricated claims.
 */

export interface ProjectDetailHighlight {
  readonly label: string;
  readonly value: string;
  readonly detail: string;
}

export interface ProjectDetailPainPoint {
  readonly title: string;
  readonly description: string;
}

export interface ProjectDetailThinkingPillar {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectDetailFigure {
  readonly figureNumber: string;
  readonly title: string;
  readonly caption: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly width: number;
  readonly height: number;
}

export interface ProjectDetailBuildArea {
  readonly index: string;
  readonly title: string;
  readonly tag: string;
  readonly description: string;
  readonly implementationNotes: readonly string[];
}

export interface ProjectDetailTechnicalDecision {
  readonly index: string;
  readonly decision: string;
  readonly whyItMattered: string;
  readonly howItWasImplemented: string;
}

export interface ProjectDetailLesson {
  readonly index: string;
  readonly title: string;
  readonly reflection: string;
}

export interface ProjectDetailCaseStudy {
  readonly slug: string;
  readonly index: "01" | "02" | "03";
  readonly title: string;
  readonly displayName: string;
  readonly subtitle: string;
  readonly role: string;
  readonly statusLabel: string;
  readonly stack: readonly string[];
  readonly intro: {
    readonly sectionLabel: string;
    readonly lead: string;
    readonly overview: readonly string[];
    readonly highlights: readonly ProjectDetailHighlight[];
  };
  readonly problem: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly lead: string;
    readonly paragraphs: readonly string[];
    readonly painPoints: readonly ProjectDetailPainPoint[];
  };
  readonly thinking: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly lead: string;
    readonly paragraphs: readonly string[];
    readonly pillars: readonly ProjectDetailThinkingPillar[];
  };
  readonly building: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly lead: string;
    readonly areas: readonly ProjectDetailBuildArea[];
    readonly figures?: readonly ProjectDetailFigure[];
  };
  readonly technicalDecisions: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly lead: string;
    readonly decisions: readonly ProjectDetailTechnicalDecision[];
  };
  readonly result: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly lead: string;
    readonly paragraphs: readonly string[];
    readonly verifiableState: readonly {
      readonly label: string;
      readonly value: string;
    }[];
  };
  readonly learned: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly lead: string;
    readonly lessons: readonly ProjectDetailLesson[];
  };
  readonly links: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly supportingText: string;
    readonly live?: string;
    readonly github: string;
  };
}

export const NEXCIVIC_CASE_STUDY: ProjectDetailCaseStudy = {
  slug: "nexcivic",
  index: "01",
  title: "NEXCIVIC",
  displayName: "NexCivic",
  subtitle: "AI-Powered Civic Intelligence Platform",
  role: "Lead Developer",
  statusLabel: "Live Full-Stack Prototype",
  stack: [
    "React",
    "TypeScript",
    "Google Maps API",
    "Firebase Authentication",
    "Cloud Firestore",
    "Firebase Storage",
    "Tailwind CSS",
    "Node.js",
    "REST APIs",
    "Vite",
  ],
  intro: {
    sectionLabel: "01 / PROJECT INTRO",
    lead: "A civic platform built with React, TypeScript, and Google Maps API for reporting, triaging, and tracking public infrastructure issues in real time.",
    overview: [
      "NexCivic is a full-stack civic issue reporting and municipal workflow platform designed to connect citizens, field inspectors, and municipal administrators around a shared, transparent record of neighborhood infrastructure issues.",
      "As Lead Developer, I designed and built the end-to-end web application—spanning the citizen reporting interface, AI-assisted image categorization and severity triage, geospatial boundary mapping, role-based operational dashboards, and the Firebase backend enforcing complaint lifecycle rules.",
    ],
    highlights: [
      {
        label: "ROLE",
        value: "Lead Developer",
        detail: "End-to-end architecture & frontend/backend build",
      },
      {
        label: "SYSTEM MODEL",
        value: "3-Role RBAC Workflow",
        detail: "Citizen · Field Inspector · Municipality HQ",
      },
      {
        label: "CORE INFRASTRUCTURE",
        value: "React + TypeScript + Firebase",
        detail: "Auth, Firestore FSM, Storage & Geospatial Maps",
      },
    ],
  },
  problem: {
    sectionLabel: "02 / PROBLEM",
    heading: "THE CIVIC REPORTING GAP",
    lead: "Urban communities regularly deal with everyday infrastructure breakdowns—garbage overflow, potholes, drainage blockages, water leakages, and damaged streetlights—yet reporting them often feels like sending complaints into a black box.",
    paragraphs: [
      "Existing complaint channels are frequently manual, fragmented across local departments, and disconnected from accurate location context. Citizens rarely know whether an issue on their street has already been reported, who is assigned to inspect it, or whether a closed ticket reflects verified work on the ground.",
      "On the administrative side, incoming reports arrive without consistent categorization, severity context, or jurisdiction mapping—making it difficult for municipal teams and field inspectors to prioritize urgent hazards, route tasks to the right local body, and track resolution progress transparently.",
    ],
    painPoints: [
      {
        title: "Unstructured Issue Submissions",
        description:
          "Complaints submitted without standardized categories, clear visual evidence, or exact coordinates slow down initial triage and field dispatch.",
      },
      {
        title: "Manual Jurisdiction Routing",
        description:
          "Without automatic mapping to State, District, and Urban Local Body (ULB) boundaries, reports sit in flat queues while citizens receive little visibility into status changes.",
      },
      {
        title: "Unverified Complaint Closures",
        description:
          "Closing infrastructure complaints without structured field inspection stages or before-and-after photographic proof weakens accountability.",
      },
    ],
  },
  thinking: {
    sectionLabel: "03 / THINKING",
    heading: "STRUCTURING ROLES, LOCATION, AND ACCOUNTABILITY",
    lead: "A civic platform only works if a report submitted on the street translates into a clearly scoped task for the right local authority and an auditable timeline for the public.",
    paragraphs: [
      "Rather than treating civic reporting as a single form and a table of tickets, I approached NexCivic as a coordinated workflow across three distinct participants: the Citizen reporting or confirming an issue, the Field Inspector verifying and resolving it on site, and Municipality HQ overseeing state and district operations.",
      "To make that workflow reliable, every complaint needed three foundations at creation time: structured categorization and priority context, geographic coordinates resolved to administrative boundaries (State, District, ULB, and Ward), and a deterministic state machine that prevents issues from being marked resolved without field verification.",
    ],
    pillars: [
      {
        index: "01",
        title: "Citizen Reporting & Community Confirmation",
        description:
          "Enable citizens to report issues with photos and map coordinates while allowing neighbors to view and confirm (upvote) existing public complaints so duplicate reports reinforce priority instead of fragmenting the queue.",
      },
      {
        index: "02",
        title: "Hierarchical State · District · ULB Organization",
        description:
          "Structure complaint data around real administrative boundaries—State, District, Urban Local Body (such as GHMC, GVMC, and VMC), and Ward—so filtering, inspector assignment, and analytics match municipal jurisdiction boundaries.",
      },
      {
        index: "03",
        title: "Evidence-Backed Lifecycle Transitions",
        description:
          "Require complaints to progress through explicit inspection states with before-and-after photographic evidence before Municipality HQ reviews and closes the record.",
      },
    ],
  },
  building: {
    sectionLabel: "04 / BUILDING",
    heading: "WHAT WAS BUILT",
    lead: "NexCivic was built as a modular React and TypeScript web platform backed by Firebase Authentication, Cloud Firestore, Firebase Storage, interactive geospatial mapping, and an AI-assisted vision triage pipeline.",
    areas: [
      {
        index: "01",
        title: "Citizen Portal & Real-Time Issue Tracking",
        tag: "CITIZEN WORKFLOW",
        description:
          "Built the citizen-facing reporting flow and dashboard for submitting civic complaints with image uploads, location selection, community upvotes, and live status timelines.",
        implementationNotes: [
          "Supports 10 standardized civic categories: Garbage Overflow, Drainage Overflow, Road Damage, Street Light, Water Leakage, Public Property Damage, Traffic Signal, Illegal Dumping, Dead Animal, and Others.",
          "Tracks community confirmations in a dedicated issue_supports collection so citizens can upvote existing neighborhood issues without creating duplicate tickets.",
          "Generates a step-by-step audit timeline on each complaint showing every status transition, timestamp, actor role, and inspection remark.",
        ],
      },
      {
        index: "02",
        title: "Interactive Mapping & Spatial Jurisdiction Engine",
        tag: "GEOSPATIAL & GIS",
        description:
          "Integrated interactive map views for pinning complaint locations, exploring nearby issues, visualizing spatial heatmaps, and resolving coordinates into municipal jurisdictions.",
        implementationNotes: [
          "Implemented a Point-in-Polygon (PIP) ray-casting engine (jurisdictionEngine.ts) that maps latitude/longitude coordinates to State, District, Urban Local Body (ULB), Ward, and Zone.",
          "Built interactive map pickers with draggable markers and reverse geocoding so citizens can pinpoint exact infrastructure locations.",
          "Added GIS map exploration and filtering by category, status, and administrative region for public and executive visibility.",
        ],
      },
      {
        index: "03",
        title: "AI-Assisted Issue Categorization & Severity Triage",
        tag: "AI TRIAGE PIPELINE",
        description:
          "Implemented an image and text analysis pipeline that inspects uploaded complaint photos to assist with category selection, hazard detection, and initial severity scoring.",
        implementationNotes: [
          "Evaluates uploaded complaint images to suggest category classifications, severity tiers (CRITICAL, HIGH, MEDIUM, LOW), detected objects, and safety hazard flags.",
          "Surfaces bounding-box overlays and structured reasoning inside the reporting interface so users can review or adjust the suggested classification before submission.",
        ],
      },
      {
        index: "04",
        title: "Field Inspector & Municipality HQ Dashboards",
        tag: "ROLE-BASED OPERATIONS",
        description:
          "Created dedicated operational dashboards for on-ground Field Inspectors and Municipality HQ administrators to manage assignments, evidence uploads, and regional analytics.",
        implementationNotes: [
          "Field Inspector view surfaces district-assigned complaints, route context, status progression controls, and before/after photo upload workflows.",
          "Municipality HQ dashboard provides state and district filtering, complaint trend charts, SLA and priority breakdowns, and final review controls for inspector recommendations.",
        ],
      },
    ],
    figures: [
      {
        figureNumber: "FIGURE 01",
        title: "CITIZEN GRIEVANCE REPORTING & GEOSPATIAL TRIAGE",
        caption:
          "Production citizen submission flow integrating category classification across ten municipal areas, priority severity tiers, real-time GPS telemetry with embedded Leaflet locator, and supporting photo evidence uploads.",
        imageSrc: "/assets/projects/nexcivic/figure-01-reporting.png",
        imageAlt:
          "NexCivic citizen grievance reporting interface with GPS telemetry map, category selector, severity tiers, and incident description",
        width: 2880,
        height: 1920,
      },
      {
        figureNumber: "FIGURE 02",
        title: "TELANGANA STATE COMMAND CENTER & REDRESSAL BOARD",
        caption:
          "State-level operational dashboard displaying real-time grievance tracking across 72 Urban Local Bodies (ULBs), incident clustering, resolution rate telemetry, and municipal master records.",
        imageSrc: "/assets/projects/nexcivic/figure-02-command-center.png",
        imageAlt:
          "NexCivic Telangana State Command Center dashboard showing 148,497 grievances, Leaflet incident coverage map, and 72 ULB municipal master list",
        width: 2880,
        height: 1800,
      },
    ],
  },
  technicalDecisions: {
    sectionLabel: "05 / TECHNICAL DECISIONS",
    heading: "KEY ENGINEERING DECISIONS",
    lead: "Core architectural choices made in NexCivic to enforce role isolation, prevent invalid status jumps, and keep client workflows dependable.",
    decisions: [
      {
        index: "01",
        decision:
          "Role-Based Access Control (RBAC) across Citizen, Field Inspector, and Municipality HQ",
        whyItMattered:
          "A civic platform cannot expose administrative override controls to public accounts or allow field inspectors to modify complaints outside their assigned jurisdiction.",
        howItWasImplemented:
          "Backed Firebase Authentication with a users Firestore collection storing explicit role mappings (Citizen, FieldInspector, MunicipalityHQ) and assigned State/District scopes, enforced in both the React dashboard views and Firestore security rules.",
      },
      {
        index: "02",
        decision:
          "Strict 7-Stage Finite State Machine (FSM) & Append-Only Complaint Timeline",
        whyItMattered:
          "Public transparency breaks down if complaints can jump directly from Submitted to Resolved without field inspection or if historical status logs can be deleted.",
        howItWasImplemented:
          "Enforced a strict lifecycle inside issueService.ts (Submitted → Assigned → Accepted → Inspection Started → Inspection Completed → Awaiting HQ Review → Resolved / Rejected) that rejects backward or skipped transitions and appends an immutable TimelineItem on every mutation, while Firestore security rules forbid delete operations on issues.",
      },
      {
        index: "03",
        decision:
          "Transactional Regional Complaint IDs & Automated Inspector Routing",
        whyItMattered:
          "Citizens and municipal teams need human-readable, regionally scoped reference numbers without sequence collisions when multiple complaints are submitted simultaneously.",
        howItWasImplemented:
          "Used Firestore runTransaction against regional counter documents (counters/{stateCode}_{districtCode}) to generate sequential IDs in the format NC-YYYY-[STATE]-[DISTRICT]-[000000], paired with an automated lookup that assigns an available Field Inspector matching the complaint's state and district.",
      },
      {
        index: "04",
        decision:
          "Cross-Service Storage Security Rules for Before/After Inspection Evidence",
        whyItMattered:
          "Resolving an infrastructure issue requires verifiable field evidence uploaded only by the assigned inspector during an active inspection.",
        howItWasImplemented:
          "Structured Firebase Storage paths as issues/{complaintId}/{before|after}/{filename} (enforcing image/* MIME types and a 5 MB limit) and used cross-service Storage rules with firestore.get() to verify that request.auth.uid matches assignedInspectorUID while the complaint is in the Inspection Started state.",
      },
      {
        index: "05",
        decision:
          "Provider-Agnostic Vision Adapter with Signature Caching & Client Fallback",
        whyItMattered:
          "Depending directly on an external vision API during complaint submission risks broken forms on network timeouts, quota limits, or repeated analyses of the same image.",
        howItWasImplemented:
          "Designed an IVisionProvider adapter layer (visionProvider.ts and imageAnalysisEngine.ts) with in-memory file-signature caching and a deterministic fallback analyzer so image categorization and severity triage always return a valid structured result.",
      },
    ],
  },
  result: {
    sectionLabel: "06 / RESULT & CURRENT STATE",
    heading: "CURRENT STATE OF THE PROJECT",
    lead: "NexCivic is a deployed, working full-stack prototype hosted on Firebase Hosting, demonstrating an end-to-end civic reporting, field inspection, and municipal oversight workflow.",
    paragraphs: [
      "The live build brings together citizen complaint reporting, interactive coordinate picking and GIS filtering, AI-assisted image categorization, transactional complaint ID generation, and role-based dashboards for Citizens, Field Inspectors, and Municipality HQ.",
      "Built as a student-led engineering and civic-technology project, the repository includes the complete React and TypeScript source code, Firestore and Storage security rules, and architectural documentation.",
    ],
    verifiableState: [
      {
        label: "DEPLOYMENT STATUS",
        value: "Live Web Application on Firebase Hosting",
      },
      {
        label: "WORKFLOW COVERAGE",
        value: "7-Stage Complaint Lifecycle (Submitted to HQ Review & Resolution)",
      },
      {
        label: "ROLE INTERFACES",
        value: "Citizen Portal · Field Inspector View · Municipality HQ Dashboard",
      },
      {
        label: "REPOSITORY ARTIFACTS",
        value: "Source Code, ARCHITECTURE.md, Firestore Rules & Storage Rules",
      },
    ],
  },
  learned: {
    sectionLabel: "07 / WHAT I LEARNED",
    heading: "WHAT I LEARNED BUILDING NEXCIVIC",
    lead: "Taking NexCivic from an initial civic-reporting concept to a multi-role application taught me how much engineering clarity comes from modeling real-world constraints early.",
    lessons: [
      {
        index: "01",
        title: "Designing Around Multi-Role Hand-Offs",
        reflection:
          "Building for Citizens, Field Inspectors, and Municipality HQ taught me that a feature is not finished when data is saved to a collection—it has to hand off cleanly to the next role with explicit permissions and valid state transitions.",
      },
      {
        index: "02",
        title: "Enforcing Backend Invariants in a Serverless Stack",
        reflection:
          "Working with Firebase Authentication, Firestore transactions, and cross-service Storage rules showed me how to enforce sequential ID generation, role isolation, and append-only audit trails without relying on a traditional monolithic backend.",
      },
      {
        index: "03",
        title: "Normalizing Location Data into Administrative Hierarchies",
        reflection:
          "Implementing point-in-polygon jurisdiction lookup made it clear that raw GPS coordinates are not enough for civic software—resolving State, District, ULB, and Ward at creation time makes downstream routing and filtering far simpler.",
      },
      {
        index: "04",
        title: "Building Resilient External API Integrations",
        reflection:
          "Integrating AI-assisted categorization and reverse geocoding reinforced the value of adapter interfaces, signature caching, and deterministic fallbacks so user-facing workflows remain dependable even when external services fail.",
      },
    ],
  },
  links: {
    sectionLabel: "08 / PROJECT LINKS",
    heading: "EXPLORE NEXCIVIC",
    supportingText:
      "Try the live deployed application on Firebase Hosting or inspect the codebase and architectural documentation on GitHub.",
    live: "https://nexcivic-49dbe.web.app/",
    github: "https://github.com/gurumaheshkandukuri/NexCivic.git",
  },
};

export const NEXUS_CASE_STUDY: ProjectDetailCaseStudy = {
  slug: "nexus",
  index: "02",
  title: "NEXUS",
  displayName: "Nexus",
  subtitle: "AI-Powered Smart Campus Education Platform",
  role: "Lead Developer",
  statusLabel: "Live Full-Stack Prototype",
  stack: [
    "React",
    "TypeScript",
    "Firebase Authentication",
    "Cloud Firestore",
    "Firebase Hosting",
    "Google OAuth 2.0",
    "Google Meet",
    "Tailwind CSS",
    "Recharts",
    "Vite",
  ],
  intro: {
    sectionLabel: "01 / PROJECT INTRO",
    lead: "A smart campus platform designed to surface learning gaps through real-time topic-wise student feedback and separate critical academic deadlines, mentorship sessions, and hostel notices from everyday chat noise.",
    overview: [
      "Conceived and built while leading Team CodeNCoffee for a Google Developer Group (GDG) On Campus TechSprint, Nexus addresses a practical gap we experienced firsthand in college: educators rarely know which specific lecture topic confused a class until exam results arrive, while students miss course deadlines and residential updates buried in informal messaging groups.",
      "As Lead Developer, I architected and built the multi-role React and TypeScript web application—connecting a real-time classroom comprehension loop, anonymous student queries, Saturday mentorship and Google Meet scheduling, an in-app campus calendar timeline, and a dual-mode Admin Command Center backed by Firebase Authentication and Cloud Firestore.",
    ],
    highlights: [
      {
        label: "ROLE & ORIGIN",
        value: "Lead Developer",
        detail: "GDG On Campus TechSprint · Team CodeNCoffee",
      },
      {
        label: "CAMPUS ROLES",
        value: "Student · Educator · Admin",
        detail: "Includes Official Admin & Hostel Warden modes",
      },
      {
        label: "CORE WORKFLOW",
        value: "Feedback → Analytics → Meet",
        detail: "Topic pulse checks, Recharts breakdown & live sessions",
      },
    ],
  },
  problem: {
    sectionLabel: "02 / PROBLEM",
    heading: "THREE EVERYDAY GAPS IN CAMPUS COMMUNICATION",
    lead: "Nexus was designed around three concrete breakdowns in how students, faculty, and campus administrators share information during a semester.",
    paragraphs: [
      "In lectures covering subjects like Data Structures & Algorithms, Python, or Machine Learning, students frequently stay quiet when they lose track of a concept because they hesitate to slow down the class or risk judgment in front of peers. Because instructors can only see what they delivered—not how much was actually understood—those topic-level learning gaps accumulate silently until midterm assessments.",
      "Outside the classroom, important academic and residential updates suffer from the opposite problem: too much unstructured noise. Course registration deadlines, workshop announcements, and hostel notices are routinely forwarded through busy chat threads or word-of-mouth groups, where a single deadline message is easily buried under dozens of casual replies.",
    ],
    painPoints: [
      {
        title: "Classroom Hesitation & Unseen Learning Gaps",
        description:
          "Students often hesitate to admit confusion aloud during a fast-paced lecture, leaving educators with no visibility into which specific topic needs a refresher.",
      },
      {
        title: "Deadlines Buried in Chat Noise",
        description:
          "When course registration deadlines, certification links, and campus event dates are shared inside general-purpose messaging groups, important opportunities get lost in daily conversation.",
      },
      {
        title: "Fragmented Campus & Hostel Notices",
        description:
          "Hostel announcements and campus event logistics often depend on word-of-mouth or being in the right group chat rather than a single, reliable noticeboard.",
      },
    ],
  },
  thinking: {
    sectionLabel: "03 / THINKING",
    heading: "FROM PASSIVE STORAGE AND CHAT NOISE TO ACTIONABLE SIGNALS",
    lead: "We designed Nexus around a simple premise: a campus platform should actively close the loop between student confusion and educator action, while giving deadlines and announcements a dedicated home.",
    paragraphs: [
      "Most classroom tools act as static file folders for uploading slides, while chat apps mix urgent academic deadlines with casual conversation. In designing Nexus, we wanted to bridge two workflows: first, turning silent classroom confusion into visible data that triggers a targeted review session; and second, moving courses, events, and hostel notices into a structured workspace tied to a shared schedule.",
      "To keep the system practical for daily campus use, every role sees only the controls relevant to their responsibilities: Students interact with the Virtual Classroom, Mastery Heatmap, Announcements board, and Calendar timeline; Educators monitor topic-wise sentiment charts, urgent query alerts, and Saturday mentorship requests; and Administrators publish verified courses, campus events, or Boys' and Girls' hostel updates.",
    ],
    pillars: [
      {
        index: "01",
        title: "Safe-Space Topic Feedback Over Passive Lectures",
        description:
          "Lower the barrier to speaking up by giving students a one-tap comprehension check (On Track, Need a Refresh, Help! I'm Stuck) and an anonymous question box tied directly to the active lesson topic.",
      },
      {
        index: "02",
        title: "Closing the Loop: Feedback → Analytics → Weekend Meets",
        description:
          "Aggregate student pulse checks into immediate visual breakdowns for the educator so they can spot struggling topics early, approve Saturday mentorship slots, or launch a live Google Meet review session.",
      },
      {
        index: "03",
        title: "Dedicated Academic Signal Over Messaging Noise",
        description:
          "Separate course registration deadlines, campus events, and residential hostel bulletins from chat threads, and surface upcoming dates inside a single synchronized campus calendar view.",
      },
    ],
  },
  building: {
    sectionLabel: "04 / BUILDING",
    heading: "WHAT WAS BUILT",
    lead: "Nexus was implemented as a multi-role React and TypeScript web application backed by Firebase Authentication, Cloud Firestore real-time listeners, Recharts analytics, an in-app calendar timeline, and Google Meet session workflows.",
    areas: [
      {
        index: "01",
        title: "Virtual Classroom & Safe-Space Comprehension Loop",
        tag: "STUDENT & EDUCATOR CLASSROOM",
        description:
          "Built connected Student and Educator Classroom views across subjects (DSA, Python, and Machine Learning) where educators publish the active lesson topic and students submit live comprehension signals and anonymous doubts.",
        implementationNotes: [
          "Students log their understanding of the active topic (such as Dynamic Programming Optimization) using three explicit states—On Track, Need a Refresh, or Help! I'm Stuck—stored in the Firestore feedback collection.",
          "Includes an anonymous Direct Query card where students message their educator without exposing their identity in class, plus priority flagging that surfaces urgent alerts on the Educator Dashboard.",
          "Educators view live Recharts donut charts showing the class comprehension distribution alongside a real-time Firestore stream (shared_data) of student submissions.",
        ],
      },
      {
        index: "02",
        title: "Meetings Hub, Saturday Mentorship Slots & Google Meet Dispatch",
        tag: "TARGETED REVIEW SESSIONS",
        description:
          "Implemented the Educator Meetings Hub and Student Join-Class workflow to turn classroom feedback and student help requests into scheduled or instant live sessions.",
        implementationNotes: [
          "Students request dedicated Saturday mentorship/office-hour slots with a stated reason; educators review pending requests in a modal and grant slots with one click.",
          "Approving a mentorship slot or scheduling/conducting a session automatically generates a Google Meet session link, records the meeting, and dispatches a role-targeted notification to students.",
          "Students can view educator-approved sessions and launch straight into the Google Meet room from the Join Class modal in their Virtual Classroom.",
        ],
      },
      {
        index: "03",
        title: "In-App Campus Schedule & Deadline Timeline",
        tag: "CALENDAR & REMINDERS",
        description:
          "Built a slide-over Campus Schedule calendar widget and course-reminder system so registration deadlines, live sessions, and campus events stay visible in one timeline.",
        implementationNotes: [
          "Aggregates course registration deadlines, scheduled Google Meet sessions, and campus events onto an interactive monthly grid with color-coded status dots (Deadline, Meet, Event).",
          "Allows students to toggle personal deadline reminders on individual courses (persisted to their Firestore user profile) and highlights reminded deadlines inside the calendar timeline.",
          "Includes a quick-action Sync Next Meet button inside the calendar drawer to open the next scheduled live session.",
        ],
      },
      {
        index: "04",
        title: "Centralized Noticeboard & Dual-Mode Admin Command Center",
        tag: "CAMPUS & HOSTEL LOGISTICS",
        description:
          "Created a structured Announcements workspace for students paired with a role-gated Command Center for Official Administrators and Hostel Wardens.",
        implementationNotes: [
          "Official Admin mode enables staff to publish academic courses (with fees, deadlines, descriptions, and external links), create campus events (with venue, time, and capacity), and track live student enrollment counts.",
          "Warden mode provides a dedicated publishing workflow for residential updates separated into Girls' Hostels and Boys' Hostels.",
          "Students browse dedicated Courses, Hostels, and Events tabs, enroll or log event interest in one tap, and receive live toast and panel notifications.",
        ],
      },
    ],
    figures: [
      {
        figureNumber: "FIGURE 01",
        title: "STUDENT CLASSROOM FEEDBACK & DIRECT QUERY",
        caption:
          "Live student comprehension interface featuring the three-state understanding pulse check (On Track, Need a Refresh, Help! I'm Stuck), active lesson indicator, and anonymous direct educator query input.",
        imageSrc: "/assets/projects/nexus/figure-01-classroom.png",
        imageAlt:
          "Nexus Virtual Classroom student view showing active lesson topic, 3-state comprehension pulse check, and anonymous direct query form",
        width: 2880,
        height: 1800,
      },
      {
        figureNumber: "FIGURE 02",
        title: "EDUCATOR CLASSROOM INTEL & SENTIMENT BREAKDOWN",
        caption:
          "Educator analytics console displaying active curriculum topics, Recharts donut breakdown of aggregated student comprehension states, and the real-time shared student questions feed.",
        imageSrc: "/assets/projects/nexus/figure-02-analytics.png",
        imageAlt:
          "Nexus Educator Classroom Intel console with Recharts feedback breakdown donut chart and shared student data stream",
        width: 2880,
        height: 1800,
      },
      {
        figureNumber: "FIGURE 03",
        title: "CAMPUS REACH & EDUCATOR OVERVIEW",
        caption:
          "Educator home overview tracking verified campus reach (450+ students across MVGR classrooms), student sentiment pulse, and scheduled mentorship sessions.",
        imageSrc: "/assets/projects/nexus/figure-03-educator-dashboard.png",
        imageAlt:
          "Nexus Educator Dashboard showing campus reach metrics, sentiment pulse, and live session tracker",
        width: 2880,
        height: 1800,
      },
    ],
  },
  technicalDecisions: {
    sectionLabel: "05 / TECHNICAL DECISIONS",
    heading: "KEY ENGINEERING DECISIONS",
    lead: "How the frontend architecture, Firebase data model, and scheduling workflows were structured to address the campus problems we set out to solve.",
    decisions: [
      {
        index: "01",
        decision:
          "Google OAuth 2.0 + Email/Password Sign-In with Automatic Firestore Profile Provisioning",
        whyItMattered:
          "A campus platform needs fast, low-friction sign-in via Google accounts while guaranteeing that every authenticated user has a structured Firestore document for role routing and saved reminders.",
        howItWasImplemented:
          "Integrated Firebase Authentication (GoogleAuthProvider with signInWithPopup alongside email/password auth) in Login.tsx and built a post-login handler that checks users/{uid} in Firestore—hydrating existing role data or automatically creating a default Student profile on first Google sign-in.",
      },
      {
        index: "02",
        decision:
          "Three-State Topic Pulse & Anonymous Query Model to Overcome Classroom Hesitation",
        whyItMattered:
          "If reporting confusion requires filling out a long form or attaching a student's name in public, students stay silent and the educator never sees the learning gap.",
        howItWasImplemented:
          "Modeled classroom feedback around three discrete StatusType values (On Track, Need a Refresh, Help! I'm Stuck) tied to the active subject topic, paired with an unattributed AnonymousQuestion feed and live Recharts aggregation on the Educator Classroom view.",
      },
      {
        index: "03",
        decision:
          "Centralized React Context Store with Real-Time Firestore onSnapshot Synchronization",
        whyItMattered:
          "When an educator updates a lesson topic, launches an instant review session, or posts a campus notice, students need to see that signal immediately without refreshing the page.",
        howItWasImplemented:
          "Built a unified AppProvider state container (store.tsx) combining role-scoped Firestore queries with live onSnapshot listeners across notifications, enrollments, and shared classroom data.",
      },
      {
        index: "04",
        decision:
          "In-App Calendar Timeline & Client-Side Google Meet Workflow for Prototype Reliability",
        whyItMattered:
          "The original product concept envisioned pulling deadlines out of chat groups into a synchronized schedule and triggering weekend review sessions whenever Friday feedback showed class confusion.",
        howItWasImplemented:
          "Rather than requiring external Google Calendar OAuth write scopes during prototype evaluation, I implemented an in-app synchronized CalendarWidget (merging Firestore course deadlines, user reminders, campus events, and meetings) and connected Educator office-hour approvals and instant sessions directly to generated Google Meet room links and live student notifications.",
      },
      {
        index: "05",
        decision:
          "Dual-Mode Admin Clearance (Official Admin vs. Hostel Warden)",
        whyItMattered:
          "Academic coordinators publishing course deadlines and hostel wardens posting residential bulletins manage completely different logistics and should not share a cluttered form.",
        howItWasImplemented:
          "Structured the Admin Command Center around an explicit AdminType selector (Official vs. Warden) that isolates course/event publishing and live enrollment counters from Boys' and Girls' hostel notice boards.",
      },
    ],
  },
  result: {
    sectionLabel: "06 / RESULT & CURRENT STATE",
    heading: "CURRENT STATE OF THE PROJECT",
    lead: "Nexus is a deployed, working full-stack web prototype hosted on Firebase Hosting, built to demonstrate how real-time topic feedback and structured campus communication can work together in a single platform.",
    paragraphs: [
      "The live prototype implements the end-to-end multi-role experience across Student, Educator, and Administrator workspaces: topic-level comprehension pulse checks, anonymous classroom queries, Recharts sentiment breakdowns, Saturday mentorship slot approvals, Google Meet session links, an in-app Campus Schedule calendar widget, and separated Courses, Events, and Hostel noticeboards.",
      "While our original TechSprint pitch also envisioned two-way external Google Calendar REST API synchronization and a full document file vault, the deployed web prototype focuses on a self-contained, immediately testable implementation using an in-app synchronized calendar timeline, Firestore-persisted deadline reminders, and structured course catalog links.",
    ],
    verifiableState: [
      {
        label: "DEPLOYMENT STATUS",
        value: "Live Web Prototype on Firebase Hosting",
      },
      {
        label: "IMPLEMENTED WORKSPACES",
        value: "Student Portal · Educator Hub · Dual-Mode Admin Command Center",
      },
      {
        label: "CLASSROOM FEEDBACK LOOP",
        value: "3-State Topic Pulse, Anonymous Queries & Recharts Analytics",
      },
      {
        label: "SCHEDULING & NOTICES",
        value: "In-App Calendar Timeline, Mentorship Approvals, Google Meet Links & Hostel/Event Boards",
      },
    ],
  },
  learned: {
    sectionLabel: "07 / WHAT I LEARNED",
    heading: "WHAT I LEARNED BUILDING NEXUS",
    lead: "Leading the build of Nexus from a TechSprint problem statement to a deployed multi-role prototype taught me how to translate human communication problems into concrete state models.",
    lessons: [
      {
        index: "01",
        title: "Designing Interfaces Around User Hesitation",
        reflection:
          "Addressing classroom silence taught me that UX is not just visual polish—reducing feedback to three clear comprehension states and separating anonymous questions from public profiles directly changes whether students feel comfortable participating.",
      },
      {
        index: "02",
        title: "Connecting Analytics Directly to an Action",
        reflection:
          "A chart showing that students are stuck is only useful if the educator can act on it immediately. Linking the classroom feedback view to Saturday mentorship slot approvals and instant Google Meet broadcasts made the analytics meaningful.",
      },
      {
        index: "03",
        title: "Coordinating Real-Time State Across Three Roles",
        reflection:
          "Building Student, Educator, and Admin workflows inside a single React and Firestore application showed me how to structure role-targeted notifications, enrollment counters, and onSnapshot listeners so each role sees live updates without data leaks or UI clutter.",
      },
      {
        index: "04",
        title: "Scoping Prototype Integrations Honestly and Pragmatically",
        reflection:
          "Translating a broad hackathon vision into working software taught me how to prioritize core workflow reliability—implementing an in-app synchronized calendar timeline, Firestore deadline reminders, and direct Google Meet session links that work immediately for any signed-in user.",
      },
    ],
  },
  links: {
    sectionLabel: "08 / PROJECT LINKS",
    heading: "EXPLORE NEXUS",
    supportingText:
      "Try the live deployed smart campus prototype on Firebase Hosting or inspect the React, TypeScript, and Firebase source code on GitHub.",
    live: "https://nexus-a9bcc.web.app/",
    github: "https://github.com/gurumaheshkandukuri/Nexus-eduplatform.git",
  },
};

export const PROJECT_DETAILS_BY_SLUG: Readonly<
  Record<string, ProjectDetailCaseStudy>
> = {
  nexcivic: NEXCIVIC_CASE_STUDY,
  nexus: NEXUS_CASE_STUDY,
};

