# Portfolio — Rana Badawy

A personal frontend developer portfolio built around a code-editor identity: terminal-window project cards, a typed code-block hero, and a warm graphite / periwinkle palette instead of the usual dark-mode defaults.

## 🚀 Live Demo

[Live demo →](https://my-portfolio-seven-theta-78.vercel.app)

## Before you deploy — replace the placeholder data

Everything personal lives in **one file**: `src/data/profile.js`. Open it and swap in your real name, bio, email, social links, skills, experience, and resume link. Nothing else in the codebase needs to change.

## Adding a new project later

Also in `src/data/profile.js`, add an entry to the `projects` array:

```js
{
  id: "my-new-project",
  name: "Project Name",
  tagline: "One-line description",
  description: "A couple of sentences about what it does and why you built it this way.",
  tags: ["React", "Tailwind", "..."],
  liveUrl: "https://...",   // leave "" if not deployed yet
  codeUrl: "https://github.com/...",
  accent: "periwinkle",     // or "gold"
}
```

A new project card appears automatically on the Projects section — no other file needs editing.

## What's included

- **Hero** — an animated, typed-out code block introducing you
- **Projects** — data-driven cards styled as terminal windows, one per project
- **About** — skills grouped by category, plus an experience timeline
- **Contact** — direct email CTA and social links

## Stack

- React 19 + Vite
- Tailwind CSS
- Framer Motion
- Lucide icons

## Running locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project structure

```
src/
  data/profile.js           ← edit this: your info, skills, experience, projects
  components/ui/            Reusable primitives (Button, Tag, TerminalWindow, TypedCode)
  components/layout/        Navbar, Footer
  components/sections/      Hero, Projects, About, Contact
```
