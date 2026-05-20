# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server (HMR). Default port 5173; may roll forward if taken.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` locally.
- `npm run lint` — ESLint over the repo. Lint a single file with `npx eslint src/path/to/File.jsx`.

No test runner is configured.

## Stack and key versions

- React 19 + Vite 8 (JSX, no TypeScript).
- Tailwind CSS v4 via the `@tailwindcss/vite` plugin (registered in `vite.config.js`).
- `motion` v12 (the rebranded Framer Motion). Import from `motion/react`, **not** `framer-motion`.
- ESLint 10 flat config in `eslint.config.js` with `react-hooks` and `react-refresh` plugins.

The React Compiler is intentionally not enabled (dev/build perf — see README).

## Tailwind setup (important)

Tailwind v4 normally configures theme via CSS `@theme`, but this project uses a JS config bridged into CSS:

- `tailwind.config.js` defines the custom `primary` purple scale (50–950, with `400 = #7F77DD`) and the `sans` font stack (Inter → system).
- `src/index.css` opts in to the JS config with `@config '../tailwind.config.js'` after `@import 'tailwindcss'`.
- Inter is loaded via Google Fonts `@import` at the top of `src/index.css`.
- Base styles (dark `#0F1117` background, `#E5E7EB` text, heading colors) live in the `@layer base` block in `src/index.css`.

When adding theme values, update `tailwind.config.js` — do **not** introduce parallel `@theme` blocks in CSS.

## Architecture

Single-page portfolio. `src/main.jsx` mounts `<App />` into `#root`; `App.jsx` is the section orchestrator that composes the page top-to-bottom.

Component layout under `src/components/`:

- `layout/Navbar.jsx`, `layout/Footer.jsx` — page chrome wrapping the sections.
- `layout/sections/` — full-width page sections (`Hero`, `About`, `Experience`, `Projects`). Each owns its own `<section>` element, vertical rhythm, and Framer Motion entrance animations. Section anchors are linked by `id` (e.g. `#projects`) — the Hero CTA scrolls to `#projects` via `scrollIntoView`.
- `layout/ui/` — small reusable presentational atoms (`ProjectCard`, `ScrollReveal`, `SectionTitle`, `TechPill`). Sections compose these; sections do not import other sections.

Content is **separated from presentation** in `src/data/`:

- `data/projects.js`, `data/experience.js` — arrays of plain objects consumed by the corresponding section components. When adding a project or job, edit the data file; do not hardcode entries inside section JSX.

## Conventions in existing code

- Components are default-exported function components.
- Animation pattern (see `Hero.jsx`): define a shared `fadeUp` variant object, then spread it onto each `motion.*` element and pass a per-element `transition={{ duration, delay }}` for staggered entrances. Reuse this pattern for new sections rather than re-deriving it.
- Primary brand color is referenced via the Tailwind scale (`bg-primary-400`, `text-primary-400`, etc.), not raw hex.
- External links use `target="_blank"` + `rel="noopener noreferrer"`.

## Sections build order and status

- [x] Hero.jsx — done
- [x] About.jsx — done
- [ ] Projects.jsx — next
- [ ] Experience.jsx
- [ ] Navbar.jsx
- [ ] Footer.jsx

## Data files

`src/data/projects.js` — three entries:
- **Admin Panel** — full-stack dashboard, React 19 + Tailwind + Xano + Recharts + JWT auth. GitHub: https://github.com/LexTarasov/admin-panel
- **Coffee Tracker** — React app, state management practice. GitHub: https://github.com/LexTarasov/Coffie-Tracker-ReactJS
- **Nexierge (work)** — private production app, no link. Described in Experience instead.

`src/data/experience.js` — two entries:
- **Nexierge** · Full-stack Developer · 2024–Present · Built product sections end-to-end with Xano + Nordcraft (frontend + backend), Stripe payment integration, auth systems, APIs, databases. Migrated to React + Tailwind. Private app.
- **Self-directed learning** · Ongoing · React, Node.js, system design. Building projects to deepen full-stack skills.