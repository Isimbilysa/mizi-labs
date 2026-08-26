# MIZI Labs

> Rooted in Africa. Built for the future.

The landing page for **MIZI Labs**, a research-driven African technology initiative working on
agricultural data, food systems, climate resilience and eventually AI.

The first product is the **MIZI African Agricultural Data Map**: a catalogue of what
agricultural data exists across Africa, where it exists, who provides it, how accessible it is,
how useful it is, and where the gaps are. Rwanda is the initial research case study.

**Starting in Rwanda. Building for Africa.**

---

## The credibility rule

This is the constraint the whole repository is built around. MIZI Labs is at the research and
prototype stage, and the site must never suggest otherwise.

| Never claim | Always do |
| ----------- | --------- |
| Indexed datasets, reached farmers, solved food insecurity | State the stage plainly, in the hero and the footer |
| Invented statistics or coverage figures | Mark every unverified value as illustrative |
| Finished products in the roadmap | Badge each stage `Building` / `Research` / `Future` |
| Official-looking country boundaries | Say the regions are approximations, in the UI |

Two mechanisms enforce this in code rather than in good intentions:

- **`Provenance`** (`src/types/index.ts`) is a required field on countries and dataset
  records: `'illustrative' | 'in-progress' | 'verified'`. Nothing may be presented as fact
  until its provenance actually says so.
- **`StatusBadge`** renders the maturity of anything on the page, and the example dataset
  panel carries its own "Example interface — data shown for illustration" label as part of
  the component, so a caption cannot drift away from what it describes.

---

## Stack

| Layer | Choice | Why |
| ----- | ------ | --- |
| Client | React 18 + Vite + **TypeScript** | Typed domain model for a data-catalogue product. |
| Styling | CSS Modules + design tokens | Component-scoped, one semantic token layer, no runtime cost. |
| Geometry | Hand-built projection + Voronoi | No map library and no GeoJSON download. |
| Server | Node 18+ / Express 4 | Small, explicit API with room for catalogue endpoints. |

Tailwind is not installed, so the existing CSS Modules setup was kept and extended. No UI kit,
no icon package, no charting library: the mark, the ten icons and every visualisation are drawn
in this repository.

---

## Getting started

```bash
npm install                      # workspaces: installs client and server
cp server/.env.example server/.env
npm run dev                      # client on :5173, API on :5050
```

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Client and API together, with reload on both. |
| `npm run build` | Typecheck, then production build into `client/dist`. |
| `npm run typecheck` | `tsc --noEmit` on the client. |
| `npm run lint` | ESLint across the client. |
| `npm run preview` | Serve the production build (proxies `/api`). |

---

## Project structure

```
client/src/
├── types/index.ts            # Domain model: CoverageLevel, DatasetRecord, Provenance…
├── data/                     # Mock data, strictly separate from presentation
│   ├── countries.ts          # 50 countries, centroids, illustrative coverage
│   ├── catalogue.ts          # 7 data domains + example dataset records
│   └── site.ts               # Every word on the page
├── lib/
│   ├── africa.ts             # Projection, coastline, Voronoi regions, connections
│   └── api.ts                # Typed API client
├── hooks/                    # useInView, useActiveSection, usePrefersReducedMotion…
├── components/
│   ├── layout/               # Navbar, Footer, Section, Container
│   ├── ui/                   # Button, StatusBadge, CoverageDot, Icons, Logo…
│   ├── visuals/              # AfricaDataMap, DataConvergence
│   ├── forms/                # SignupForm
│   └── sections/             # One component per narrative section
└── styles/                   # tokens.css · base.css · utilities.css
```

The page reads in sixteen sections: hero → problem → what MIZI is → **the Data Map** →
domains → data quality → gaps → methodology → global research → Rwanda pilot → research
question → audiences → roadmap → vision → principles → join.

### Ready for the real application

`data/` holds mock objects shaped like the eventual API responses, and `lib/api.ts` is the only
place that talks to a server. When the Data Map application exists, its catalogue endpoints go
in `api.ts` and the sections keep their props — nothing in `components/` knows where the data
came from.

---

## The map

`lib/africa.ts` builds every map on the page from one set of coordinates:

1. A generalised African coastline in longitude/latitude, projected equirectangularly.
2. A lattice of cells across the continent, each clipped to the coastline by ray casting.
3. Each cell assigned to its **nearest country centroid** — a Voronoi partition.
4. Edges emitted wherever two neighbouring cells belong to different countries.

That produces the binned look of a real coverage raster instead of a fake political map, and the
regions are honestly labelled as approximations. Cells are grouped into one `<path>` per country,
so the map is ~50 DOM nodes rather than ~2,000, and the geometry is computed once per session and
shared by all three instances.

One component, `AfricaDataMap`, serves three modes:

| Mode | Where | Behaviour |
| ---- | ----- | --------- |
| `ambient` | Hero | Graticule, observation points, animated connections. |
| `explore` | Data Map | Neutral regions, click or keyboard to select a country. |
| `coverage` | Data Gaps | The green / amber / red scale, with a legend. |

Coverage colour is painted in exactly one section, next to its legend, so the product map never
implies a finished inventory. In `explore` mode the map and the country list are two views of one
selection, which is also what makes the section keyboard-operable.

---

## The API

Base URL `/api`. Responses are `{ ok, data }` or `{ ok: false, error }`.

| Method | Endpoint | Purpose |
| ------ | -------- | ------- |
| `GET` | `/api/health` | Liveness and uptime. |
| `POST` | `/api/signups` | Research mailing list. |

Sign-ups append to `server/data/signups.jsonl` (git-ignored) behind `saveSignup()`, so a database
can replace the file without touching a caller. Protection: `helmet`, an origin allowlist, a
32 kB body cap, 300 requests / 15 min across the API, 5 sign-ups / hour, and a honeypot that
returns a normal-looking `202` to bots.

Set `SIGNUP_WEBHOOK_URL` to forward each sign-up to Slack or a CRM; a webhook failure is logged
and never fails the visitor's request.

---

## Design system

**Palette** — charcoal first (`--ink-*`), warm ivory, restrained agricultural green as an accent
rather than a surface, muted earth tones, and a single amber for emphasis. The coverage scale
(`--coverage-strong / -limited / -gap / -unassessed`) is defined once and used by the map, the
legend, the country list and the record panels alike.

**Type** — Space Grotesk for headings, Inter for body, IBM Plex Mono for labels and readouts, and
Instrument Serif italic reserved for the few places the page makes a statement. Sizes are fluid
`clamp()` values.

**Colour is never the only signal** — every `CoverageDot` carries a written label or an accessible
name, so the four-level scale survives colour blindness and greyscale printing.

**Motion** — connection arcs, a travelling beam on the vision pipeline, blinking observation
points, and scroll reveals. Long-running animations pause when their section is off screen, and
everything is disabled under `prefers-reduced-motion`.

---

© 2026 MIZI Labs
