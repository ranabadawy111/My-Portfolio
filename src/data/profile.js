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
  { group: "Core", items: ["React", "JavaScript (ES6+)", "Redux Toolkit", "RTK Query"] },
  { group: "Styling", items: ["Tailwind CSS", "Responsive Design", "Framer Motion"] },
  { group: "Tooling", items: ["Vite", "Git & GitHub", "REST APIs", "Chrome DevTools"] },
  { group: "Currently learning", items: ["TypeScript", "Testing (Vitest)"] },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Blue Bell",
    period: "2024 — Present",
    points: [
      "Built and maintained React features used by thousands of users daily",
      "Worked closely with design to turn Figma files into pixel-accurate, responsive UI",
      "Improved page load performance and reduced re-renders across key flows",
    ],
  },
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
    tags: ["React", "Redux Toolkit", "RTK Query", "Framer Motion", "React Router"],
    liveUrl: "https://hammam-booking-flow.vercel.app/",
    codeUrl: "https://github.com/ranabadawy111/Hammam-Booking-Flow",
    accent: "gold",
  },
];
