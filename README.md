# MIZI Labs

> Rooted in Africa. Built for the future.

Landing page for **MIZI Labs** — a research initiative mapping what agricultural data exists
across Africa, who holds it, and where the gaps are. Rwanda first.

Research and prototype stage. The site says so, and the code enforces it.

```bash
npm install
cp server/.env.example server/.env
npm run dev          # client :5173 · API :5050
```

## The one rule

No invented numbers, no finished-product energy. Two mechanisms keep that honest in code
instead of good intentions:

- **`Provenance`** — a required field on every country and dataset record
  (`illustrative | in-progress | verified`). Nothing reads as fact until it says so.
- **`StatusBadge`** — renders maturity everywhere, and the example panel carries its own
  "data shown for illustration" label, so a caption can't drift from what it describes.

## The map

No map library, no GeoJSON. `lib/africa.ts` projects a generalised coastline, lays a lattice
over it, clips by ray casting, and assigns each cell to its nearest country centroid — a
Voronoi partition. The result looks like a coverage raster instead of a fake political map,
which is the honest thing to show when you're cataloguing gaps.

Cells are merged into one `<path>` per country (~50 DOM nodes, not ~2,000), computed once and
shared by all three instances of `AfricaDataMap`:

| Mode | Where | Behaviour |
| ---- | ----- | --------- |
| `ambient` | Hero | Graticule, observation points, animated connections. |
| `explore` | Data Map | Neutral regions, click or keyboard to select a country. |
| `coverage` | Data Gaps | Green / amber / red scale, next to its legend. |

Coverage colour appears in exactly one section — beside the legend that explains it.

## Stack

React 18 + Vite + TypeScript · CSS Modules with design tokens · Express 4. No UI kit, no icon
package, no charting library — the mark, the ten icons and every visualisation are drawn here.

```
client/src/
├── types/index.ts   # CoverageLevel, DatasetRecord, Provenance…
├── data/            # Mock objects shaped like the eventual API responses
├── lib/             # africa.ts (geometry) · api.ts (the only thing that talks to a server)
├── components/      # layout · ui · visuals · forms · sections
└── styles/          # tokens.css · base.css · utilities.css
```

Nothing in `components/` knows where its data came from, so swapping mocks for real catalogue
endpoints is an `api.ts` change.

## API

Base `/api`, responses `{ ok, data }` or `{ ok: false, error }`.

- `GET /api/health` — liveness and uptime
- `POST /api/signups` — research mailing list

Sign-ups append to `server/data/signups.jsonl` behind `saveSignup()`, so a database can replace
the file without touching a caller. Guarded by `helmet`, an origin allowlist, a 32 kB body cap,
rate limits, and a honeypot that returns a friendly `202` to bots. Set `SIGNUP_WEBHOOK_URL` to
forward to Slack or a CRM — a webhook failure never fails the visitor's request.

## Commands

| | |
| --- | --- |
| `npm run dev` | Client and API together, both reloading. |
| `npm run build` | Typecheck, then production build to `client/dist`. |
| `npm run lint` | ESLint across the client. |
| `npm run preview` | Serve the production build. |

---

Charcoal and ivory, green as an accent rather than a surface. Space Grotesk / Inter / IBM Plex
Mono, with Instrument Serif italic saved for the few places the page makes a statement. Colour
is never the only signal, and every animation stops under `prefers-reduced-motion`.

© 2026 MIZI Labs
