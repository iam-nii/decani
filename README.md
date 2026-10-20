# Decani Creative Hub

The studio site for Decani Creative Hub, Accra. Brand, digital and campaign work.

Built as a working press sheet: numbered plates, crop marks, a registration square, a
stripe band and grain. The design record (concept, palette, type, layout families) lives in
[`DESIGN.md`](./DESIGN.md).

## Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS 3 with tokens in `src/index.css`
- `motion` for choreography (line masks, clip reveals, plate swaps)
- `lenis` for smooth scroll, disabled under `prefers-reduced-motion`
- React Router 7 (`/`, `/contact`, designed 404)

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type check + production build to dist/
npm run preview  # serve dist/ locally
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| All copy, services, team, studio facts | `src/lib/site.ts` |
| Colour, type, grain, field and marquee styles | `src/index.css` |
| Tailwind theme (colours, fonts, sheet width, easing) | `tailwind.config.js` |
| Page sections | `src/components/layouts/` |
| Shared UI (reveals, crop marks, buttons, arrows) | `src/components/ui/` |
| Pages and routing | `src/pages/`, `src/router.tsx` |
| Fonts, SEO, OG/Twitter tags, JSON-LD | `index.html` + `src/lib/usePageMeta.ts` |

## Images

- Hero: `public/hero-wide.jpg` (1920×1100) and `public/hero-tall.jpg` (900×1400).
- Services: `src/assets/images/opt/*-800.jpg` + `*-1600.jpg`, referenced with `srcSet`.
- Team portraits: `src/assets/images/*.png` (currently 249×249, replace with larger files).
- Rebuild images and the grain tile with `scripts/prep-images.ps1` (Windows PowerShell, uses
  System.Drawing). It reads the originals in `src/assets/images/services/` and
  `src/assets/images/source/`.

## QA scripts (optional, need Playwright)

```bash
npm run preview -- --port 4400   # in one shell
node scripts/shoot.mjs           # screenshots + report.json in .shots/
node scripts/og.mjs              # rebuilds public/og.jpg from the live preview
```

`shoot.mjs` checks console errors, failed requests, horizontal overflow, small tap targets,
missing `alt` text and hidden content under reduced motion. Set `BASE` to point at another
origin.

## Deploying

This is a client-routed SPA. The host must rewrite unknown paths to `index.html`, otherwise
`/contact` will 404 on a hard refresh. On Netlify add `/* /index.html 200`; on Vercel add a
rewrite to `/index.html`; on nginx use `try_files $uri $uri/ /index.html;`.

The current `DockerFile` runs `npm run dev` and exposes 8080. That works for a demo, but a
production image should run `npm run build` and serve `dist/` behind a static server with
the rewrite above.
