// ────────────────────────────────────────────────────────────────
// EDIT ME: swap every value below with your real details.
// Nothing else in the site needs to change — every section reads
// from this file.
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: "Rana Badawy",
  role: "Frontend Developer",
  tagline: "I build interfaces that feel as good as they look.",
  bio: "Two years into building React apps that real people use every day — from admin dashboards to booking flows. I care about the details most portfolios skip: loading states, empty states, and the half-second before data arrives.",
  location: "Egypt",
  availability: "Open to freelance & full-time roles",
  email: "ranabadawy373@gmail.com",
  socials: {
    github: "https://github.com/ranabadawy111",
    linkedin: "https://www.linkedin.com/in/rana-badawy",
    twitter: "",
    upwork: "",
    mostaql: "",
  },
  resumeUrl: "", // add a link to your CV/resume PDF once ready
};

export const skills = [
  {
    group: "Core",
    items: [
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
    ],
  },
  {
    group: "Styling & UI",
    items: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Framer Motion"],
  },
  {
    group: "Testing & Tooling",
    items: ["Vite", "Vitest", "Git & GitHub", "Bitbucket", "Jira", "REST APIs"],
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "BlueBell",
    period: "Aug 2024 — Present",
    points: [
      "Built and maintained responsive web apps with React, TypeScript, and Redux Toolkit for enterprise clients including Mechanica, EgyptAir, and the Public Prosecution",
      "Integrated RESTful APIs and streamlined data flow between frontend and backend teams",
      "Built reusable UI components with Bootstrap and Tailwind CSS, keeping a consistent design system across projects",
      "Improved performance through lazy loading, code splitting, and optimized state management",
      "Worked in Agile sprints alongside UI/UX designers on pixel-accurate, accessible implementations",
    ],
  },
];

export const education = [
  {
    degree: "BSc in Computer Engineering",
    institution: "Faculty of Engineering, Al-Azhar University",
    period: "Sept 2018 — Jun 2023",
    note: "Grade: Very Good (Honors)",
  },
];

export const training = [
  {
    name: "Frontend & Cross-Platform Mobile Development Diploma",
    institution: "ITI (Information Technology Institute)",
    period: "Nov 2023 — Feb 2024",
  },
  {
    name: "Front-End Diploma",
    institution: "Route Academy",
    period: "Feb 2022 — Aug 2022",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
];

// Add new projects here as you build them — each card on the
// Projects section is generated from this array, so nothing else
// needs to change when you add one.
export const projects = [
  {
    id: "kettle-and-co",
    name: "Kettle & Co",
    tagline: "Subscription admin dashboard",
    description:
      "An admin dashboard for a specialty tea subscription business — order management, live filtering and search, revenue charts, and inventory tracking, all wired to RTK Query with cache invalidation.",
    tags: ["React", "Redux Toolkit", "RTK Query", "Tailwind", "Recharts"],
    liveUrl: "https://kettle-admin-dashboard.vercel.app/",
    codeUrl: "https://github.com/ranabadawy111/kettle-admin-dashboard",
    accent: "periwinkle",
  },
  {
    id: "hammam-zahra",
    name: "Hammam Zahra",
    tagline: "Ritual booking experience",
    description:
      "A marketing site and multi-step booking flow for a boutique bathhouse — live availability, session-based slot reservation, and a distinct visual identity built around a custom arch motif.",
    tags: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Framer Motion",
      "React Router",
    ],
    liveUrl: "https://hammam-booking-flow.vercel.app/",
    codeUrl: "https://github.com/ranabadawy111/Hammam-Booking-Flow",
    accent: "gold",
  },
  {
    id: "bloom-bowls",
    name: "Bloom Bowls",
    tagline: "Build-your-own bowl configurator",
    description:
      "An interactive product configurator for a build-your-own açaí bowl bar — live price calculation, a custom SVG bowl illustration that updates with every topping in real time, and an animated order summary wired to RTK Query.",
    tags: ["React", "Redux Toolkit", "RTK Query", "Framer Motion", "SVG"],
    liveUrl: "https://bloom-bowls.vercel.app/",
    codeUrl: "https://github.com/ranabadawy111/Bloom-Bowls",
    accent: "periwinkle",
  },
  {
    id: "marsa-estates",
    name: "Marsa Estates",
    tagline: "Property search with live map & mortgage calculator",
    description:
      "A real estate listings site with multi-field search and filtering, an interactive Leaflet map with custom branded markers, a live mortgage calculator with real amortization math, and session-based favorites — combining RTK Query for server-shaped data with a plain Redux Toolkit slice for client state.",
    tags: ["React", "Redux Toolkit", "RTK Query", "Leaflet", "Framer Motion"],
    liveUrl: "https://marsa-estates.vercel.app/",
    codeUrl: "https://github.com/ranabadawy111/Marsa-Estates",
    accent: "gold",
  },
];
