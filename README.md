# Bright Cements Website

Production-ready Next.js recreation of [brightcements.com](https://www.brightcements.com), rebuilt from the HTTrack mirror with pixel-accurate content, layout, and interactions.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Google Tag Manager (`GTM-5H99CQBT`)

## Getting Started

```bash
npm install
npm run download-assets   # fetch images from live site (first-time setup)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run download-assets` | Download images from live site into `public/assets/` |

## Routes

- `/` — Home
- `/about-us` — About, vision, mission, founders
- `/contact-us` — Contact info, map, form

## Deployment

```bash
npm run build
npm run start
```

For Docker or standalone output, set `output: "standalone"` in `next.config.ts`.

## Asset Recovery

If assets are missing, run `npm run download-assets` to fetch them from `https://www.brightcements.com/assets/`.
