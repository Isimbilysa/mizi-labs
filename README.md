# MIZI Labs

> Rooted in Africa. Built for the future.

The landing experience for **MIZI Labs** — an Africa-focused deep-tech research company
working at the intersection of AI, agriculture, climate, and food systems.

A React front end delivers the narrative and the visual system; a Node/Express API handles
the parts a static page cannot: enquiry intake, validation, rate limiting, and storage.

---

## Stack

| Layer    | Choice                        | Why                                                                   |
| -------- | ----------------------------- | --------------------------------------------------------------------- |
| Client   | React 18 + Vite               | Fast builds, no framework ceremony for a single-page narrative.        |
| Styling  | CSS Modules + design tokens   | Component-scoped styles, one semantic token layer, zero runtime cost.  |
| Motion   | Canvas, SVG, CSS + hooks      | No animation library — every effect is small, deliberate, cancellable. |
| Server   | Node 18+ / Express 4          | A small, explicit API surface with room to grow.                       |

No UI kit, no CSS framework, no icon package: the mark, the icon set, and the Africa map
are drawn in this repository.

---

## Getting started

```bash
# 1. install (npm workspaces — installs client and server together)
npm install

# 2. configure the API
cp server/.env.example server/.env

# 3. run both apps
npm run dev
```

| Service | URL                          |
| ------- | ---------------------------- |
| Client  | http://localhost:5173        |
| API     | http://localhost:5050/api    |

The Vite dev server proxies `/api` to the API, so the client never needs an absolute URL.

### Scripts

| Command           | Description                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Client and API together, with reload on both.   |
| `npm run build`   | Production build of the client into `client/dist`. |
| `npm run preview` | Serve the production build locally.             |
| `npm run start`   | Run the API alone (production).                 |
| `npm run lint`    | ESLint across the client.                       |

---

## Project structure

```
mizi-labs/
├── client/                        # React landing experience
│   ├── public/favicon.svg
│   └── src/
│       ├── components/
│       │   ├── forms/             # ContactForm — the only stateful form
│       │   ├── layout/            # Navbar, Footer, Section, Container
│       │   ├── sections/          # One component per narrative section
│       │   ├── ui/                # Button, Eyebrow, SectionHeading, Logo, Icons
│       │   └── visuals/           # HeroBackdrop (canvas), AfricaMap (SVG)
│       ├── data/site.js           # Every word on the page, in one file
│       ├── hooks/                 # useInView, useCountUp, usePrefersReducedMotion…
│       ├── lib/
│       │   ├── africa.js          # Continent geometry, projection, region network
│       │   └── api.js             # Typed-ish API client with timeouts
│       ├── styles/                # tokens.css · base.css · utilities.css
│       ├── App.jsx
│       └── main.jsx
└── server/                        # Express API
    └── src/
        ├── config/env.js          # Environment parsing in one place
        ├── controllers/           # HTTP shape only
        ├── data/contactTopics.js  # Enquiry topics (single source of truth)
        ├── middleware/            # Error handling, rate limits
        ├── routes/                # Route tables
        ├── services/              # Persistence and notifications
        ├── utils/                 # ApiError, asyncHandler, validate, logger
        ├── app.js                 # App assembly
        └── index.js               # Bootstrap and graceful shutdown
```

### Where things live

- **Copy** lives in [`client/src/data/site.js`](client/src/data/site.js). Sections import
  from it, so editing text never means editing layout.
- **Colour, type, spacing and motion** live in
  [`client/src/styles/tokens.css`](client/src/styles/tokens.css). Components only reference
  semantic tokens (`--color-heading`, `--color-border`), so adding `.surface--dark` to any
  element re-themes everything inside it.
- **The Africa visual** is generated from coordinates in
  [`client/src/lib/africa.js`](client/src/lib/africa.js): one generalised coastline,
  projected once, then reused for the land shape, the sampled data lattice, and the
  sixteen agro-ecological region nodes. It is intentionally non-political — no borders,
  no capitals.

---

## The API

Base URL: `/api`. Every response is `{ ok: true, data }` or
`{ ok: false, error: { status, message, details? } }`.

| Method | Endpoint                | Purpose                                            |
| ------ | ----------------------- | -------------------------------------------------- |
| `GET`  | `/api`                  | Service descriptor.                                 |
| `GET`  | `/api/health`           | Liveness and uptime.                                |
| `GET`  | `/api/contact/topics`   | Enquiry topics for the form.                        |
| `POST` | `/api/contact`          | Submit an enquiry.                                  |

The topics list is served rather than duplicated in the client, so the form options and the
server's validation whitelist cannot drift apart.

**Submissions** are appended to `server/data/submissions.jsonl` (git-ignored) — durable,
greppable, and swappable for a database behind `saveSubmission()`. Set `CONTACT_WEBHOOK_URL`
to also forward each enquiry to Slack, a CRM, or Zapier; a webhook failure is logged and
never fails the visitor's request.

**Protection**: `helmet` headers, an origin allowlist, a 32 kB body cap, 300 requests per
15 minutes per IP across the API, 5 submissions per hour on the contact endpoint, and a
honeypot field that returns a normal-looking `202` to bots.

### Environment

| Variable              | Default                          | Purpose                        |
| --------------------- | -------------------------------- | ------------------------------ |
| `PORT`                | `5050`                           | API port.                      |
| `CORS_ORIGINS`        | `http://localhost:5173`          | Comma-separated origin allowlist. |
| `SUBMISSIONS_FILE`    | `data/submissions.jsonl`         | Where enquiries are stored.    |
| `CONTACT_WEBHOOK_URL` | _(empty)_                        | Optional outbound notification. |

Client-side: `VITE_DEV_API_TARGET` (dev proxy target) and `VITE_API_BASE_URL` (absolute API
base for production builds; leave empty to call the same origin).

---

## Design system

**Palette** — deep forest green, near-black charcoal, warm ivory, with muted sage and warm
gold as accents. Sections alternate between ivory and forest surfaces to give the page
rhythm; both are defined as complete token sets, so a section changes tone with one class.

**Type** — Space Grotesk for display, Inter for body, IBM Plex Mono for labels and readouts.
Sizes are fluid `clamp()` values, so headings scale with the viewport instead of stepping at
breakpoints.

**Motion** — a drifting node network on canvas in the hero, an animated region network over
the Africa map, scroll reveals via `IntersectionObserver`, and count-up readouts. All of it
is bounded: animation pauses when the tab is hidden or the element leaves the viewport, and
every effect is disabled under `prefers-reduced-motion`.

**Accessibility** — semantic landmarks and one `<h1>`, a skip link, `aria-labelledby` on
every section, labelled form fields with inline errors wired via `aria-describedby`,
visible focus rings, and content that stays readable if JavaScript never runs.

---

## Notes

The technology tracks (MIZI Climate, Crop, Vision, Water, Research, Robotics) are presented
as the company's **ecosystem and research direction**, and the page says so explicitly.
Nothing on the site claims a shipped commercial product.

---

© 2026 MIZI Labs. All rights reserved.
