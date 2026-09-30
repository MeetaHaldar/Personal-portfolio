# Personal Portfolio

A premium, static personal developer and freelance portfolio built with Next.js
(App Router), TypeScript and Tailwind CSS. Frontend only: no backend, no
database, no API routes, no server actions. All content lives in typed data
files under `/data`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
npm run format   # prettier
```

## Dependencies

Kept intentionally minimal:

- `next`, `react`, `react-dom` — the framework.
- `lucide-react` — tree-shaken SVG icons (only the icons used are bundled).

No animation library is installed. Reveal-on-scroll and micro-interactions use
CSS plus one shared `IntersectionObserver` (`components/ui/Reveal.tsx`).

## Where to edit content

Everything you'd change lives in `/data` (and `/public` for images). You should
not need to touch component code to update content.

- `data/site.ts` — name, title, tagline, email, socials, availability, nav, SEO
  defaults, career start year, portrait and CV paths. **Replace every `TODO_`
  value here.**
- `data/projects.ts` — the three case studies (cards + case-study pages).
- `data/experience.ts` — the experience timeline.
- `data/services.ts` — the "What I can build" list.
- `data/process.ts` — the "How I work" steps.
- `data/skills.ts` — the grouped tech stack.

## Placeholders you must replace

Defined in `data/site.ts`. Any link still set to a `TODO_` value is hidden or
disabled automatically, so nothing renders as a broken link.

- `TODO_EMAIL` — contact email (also enables the contact form).
- `TODO_LINKEDIN_URL` — LinkedIn profile URL.
- `TODO_GITHUB_URL` — GitHub profile URL.
- `TODO_SITE_URL` — public site origin (used for canonical URLs, sitemap, OG).

Per-project placeholders in `data/projects.ts` are commented inline
(`liveUrl`, `githubUrl`, exact database, Room Scholars modules).

## Screenshots

Each project folder under `/public/projects/<project>/` has a `README.txt`
listing the exact filenames and sizes to add:

- `public/projects/inventory/`
- `public/projects/room-scholars/`
- `public/projects/hrm/`

Add the file, then set its `src` (and update `alt`) in `data/projects.ts`. A
`null` `src` renders a labelled placeholder instead of a broken image.

The portrait is optional at `public/profile.jpg` (set `site.portrait` to `null`
to hide it). A downloadable CV is served from `public/CV.pdf`.

## Connecting the contact form to a service

The form (`components/sections/ContactForm.tsx`) is frontend only. On submit it
builds a `mailto:` link and opens the user's email client — no network requests.

To use a hosted form service later (Formspree, Web3Forms, Netlify Forms),
replace the body of `handleSubmit` with a `fetch` POST to the service endpoint,
keeping the existing validation and the `aria-live` status handling.

## SEO

- Metadata with title template, canonical, Open Graph and Twitter card in
  `app/layout.tsx`; per-case-study metadata via `generateMetadata`.
- `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`.
- JSON-LD `Person` schema in `components/layout/JsonLd.tsx` (only includes real,
  non-placeholder links).
- `app/opengraph-image.tsx` generates the OG image at build time.

## Static export (optional)

The site avoids features that block static export. To enable it:

1. Uncomment `output: "export"` in `next.config.mjs`.
2. Delete `app/opengraph-image.tsx` (it needs a runtime) and instead add a
   static `public/og.png` (1200×630), then set `openGraph.images: ["/og.png"]`
   in `app/layout.tsx`.
3. Run `npm run build`; the static site is written to `out/`.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel — the Next.js preset is detected automatically.
3. Set the production domain, then update `TODO_SITE_URL` in `data/site.ts` to
   that URL so canonical links, the sitemap and Open Graph resolve correctly.
4. Deploy.

## Bundle size check

```bash
npm run build
```

The build output prints per-route First Load JS. Client JS is limited to the
navbar, mobile menu, theme toggle, reveal component and contact form; every
other component is server-rendered.

## Lighthouse checklist

Run Lighthouse (mobile) on the home page and each case-study page:

- [ ] Performance 95+ (small client JS, `next/image`, fonts with `display: swap`).
- [ ] Accessibility: skip link, single `h1`, focus rings, mobile-menu focus trap
      + Escape, labelled form fields, AA contrast in both themes.
- [ ] Best Practices: no console errors, external links use
      `rel="noopener noreferrer"`.
- [ ] SEO: metadata, canonical, sitemap.xml, robots.txt, JSON-LD.
- [ ] No layout shift (fixed aspect ratios on all images).
- [ ] `prefers-reduced-motion`: all motion disabled, content visible.
- [ ] No horizontal overflow at 360 / 390 / 768 / 1024 / 1280 / 1536 / 1920 px.

Built with Next.js and Tailwind CSS.
