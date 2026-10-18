# SHAZA — Brand Identity Guide

Version 0.2 · October 2026 · Working draft

The name is **SHAZA**: always uppercase, always five letters, never with a descriptor.
Not "SHAZA Labs", not "Shaza Technologies", not "SHAZA AI".

---

## 1. The idea

SHAZA is a technology company being built in Rwanda, starting with agriculture.

Information about Africa's soil, weather, land, crops and climate risks exists, but it is
scattered, hard to access, and difficult to turn into practical decisions. Before anyone
can build good tools on top of it, someone needs to know what is actually there.

SHAZA's first project is the African Agricultural Data Map, beginning with Rwanda. We find
each dataset, test whether it can really be used, and record who holds it, how to access
it, what it covers and what is missing.

**What makes SHAZA different** is not that it works on Africa. Many organisations do. It
is that SHAZA tests the data itself and publishes the gaps. Its claims are earned by that
work, one dataset at a time.

**Where it goes:** agriculture first. Over time, geospatial and AI tools for agricultural
decisions, and later climate technology, AI research and possibly robotics. The identity
is grounded in land and farming, but nothing in it ties SHAZA to agriculture forever.

### Where the name comes from

The name SHAZA comes from a Kirundi cultural expression associated with the beginning of
a traditional drumming rhythm. It is the story behind the name, nothing more. The visual
identity does not use drums, sound waves or music imagery. Don't claim a translation or
meaning beyond that sentence.

---

## 2. How the logo was chosen

Three rounds of exploration. The concept sheet is in [logo-concepts.html](logo-concepts.html).

1. **Sound-based marks** (attack bars, pulse grid, waveform S). Rejected: they read as
   music, and SHAZA is not a music brand.
2. **Agriculture-based marks:**
   - *Leaf A*: the A of SHAZA as a pointed leaf with a seed inside.
   - *Field*: a plot seen from above, with crop rows following the land.
   - *Terraces*: terraced hillside contours bending into the letter S.
3. **Chosen:** the **Terraces** symbol, paired with a custom wordmark whose As are drawn
   as **leaves**.

**Why this pairing:**
- Terraced hillsides are part of the real landscape SHAZA starts in, and contour lines
  are a map convention, so the symbol says farming *and* geospatial data.
- The symbol is the first letter of the name, so it still says SHAZA on its own (an app
  icon, an avatar, a device).
- The leaf As carry growth inside the name itself, without a separate icon.

---

## 3. Logo

### Symbol: Terraces

Drawn on a 64 × 64 grid. Four terrace lines bend into an S, and a gold seed sits at the
top of the hill.

- Each line is two arcs: one around a top centre at (32, 22), one around a bottom centre
  at (32, 42).
- The four lines pair top and bottom radii so they stay parallel: 16/4, 12/8, 8/12, 4/16.
- Each starts at −30° on its top arc and ends at 150° on its bottom arc.
- Stroke 2.8 units, flat ends.
- Seed: an ellipse 3.2 × 5 units at (51.5, 9), rotated 40°.

**Small version (24px and below):** two lines (radii 14/6 and 6/14), stroke 5.5, seed
4.5 × 7. Four lines merge into a blur at small sizes, so the small version is required,
not optional.

The website draws both versions in code ([Logo.tsx](../../client/src/components/ui/Logo.tsx))
and switches automatically at 24px.

### Wordmark: leaf As

SHAZA drawn by hand on a 185 × 46 grid with a 6-unit stroke, rather than typed in a font.

- **S:** two stacked arcs, the same construction as the symbol.
- **H and Z:** straight strokes.
- **Both As:** pointed leaves, each side an arc of radius 80. They have no crossbar.
- **The first A** holds a gold seed (3.2 × 5) where the crossbar would be.

Because the letters are drawn, the wordmark looks the same everywhere, whatever fonts
have loaded. Never retype it in a font.

### Lockups

- **Horizontal (primary):** symbol + wordmark. The gap between them is about 0.7 × the
  symbol's height.
- **Symbol only:** avatars, favicons, app icons, hardware.
- **Wordmark only:** only where the symbol already appears nearby.

### Colour versions

| Version    | Lines and letters | Seed      | Background        |
| ---------- | ----------------- | --------- | ----------------- |
| Primary    | Ivory             | Gold      | Ink or Forest     |
| Light      | Ink               | Deep Gold | Ivory             |
| Monochrome | One colour        | Same      | Any solid surface |

### Usage rules

- **Clear space:** at least a quarter of the symbol's height on every side.
- **Minimum size:** symbol 16px digital / 5mm print. Horizontal lockup 96px wide digital
  / 25mm print.
- **Backgrounds:** solid Ink, Forest or Ivory only. On a photograph, place the logo on a
  solid plate.
- **Never:** add gradients, outlines or shadows; change the number or spacing of the
  terraces; colour anything except the seed gold; stretch or rotate the mark; retype the
  wordmark; add a word after SHAZA.

---

## 4. Colour

Near-black and ivory carry almost every layout, forest green ties the brand to land and
climate, and one gold accent marks the seed. Most technology brands default to bright
blue; this palette reads as serious research, rooted in the land.

| Name      | HEX       | Role                                                 |
| --------- | --------- | ---------------------------------------------------- |
| Ink       | `#0D1012` | Primary dark surface and text on light               |
| Ivory     | `#F4F1EA` | Primary light surface and text on dark               |
| Forest    | `#16382C` | Secondary surface, primary buttons on light          |
| Sage      | `#7FA894` | Links and data highlights on dark                    |
| Silver    | `#A9B0B4` | Muted text, rules, hardware finish                   |
| Gold      | `#C9A227` | The seed: the one accent, on dark surfaces only      |
| Deep Gold | `#806219` | The seed and gold text on light surfaces             |

**Why these:**
- **Ink and Ivory** carry 90% of every layout. A warm ivory instead of pure white keeps
  it human; a green-tinted black instead of pure black keeps it from feeling cold.
- **Forest** ties to agriculture and climate.
- **Gold** is the seed: where something starts. Use it for the logo's seed, one primary
  action, or one live status. Rationing it is what keeps it meaningful.
- **Silver** looks ahead to instruments and devices.

### Contrast (WCAG 2.1)

| Pair               | Ratio  | Use                      |
| ------------------ | ------ | ------------------------ |
| Ivory on Ink       | 16.9:1 | All text                 |
| Forest on Ivory    | 11.4:1 | All text                 |
| Silver on Ink      | 8.7:1  | All text                 |
| Gold on Ink        | 7.9:1  | All text                 |
| Sage on Ink        | 7.2:1  | All text                 |
| Gold on Forest     | 5.3:1  | Text, normal size        |
| Deep Gold on Ivory | 5.1:1  | Text, normal size        |
| Gold on Ivory      | 2.1:1  | **Never.** Use Deep Gold |

**No gradients.** Every surface and card is a single solid colour.

---

## 5. Typography

One type family, free on Google Fonts, used everywhere.

| Role                 | Typeface       | Weights         | Use                                   |
| -------------------- | -------------- | --------------- | ------------------------------------- |
| Headings             | IBM Plex Sans  | 600, 700        | Headlines, UI labels                  |
| Body                 | IBM Plex Sans  | 400, 500        | Paragraphs, interface text            |
| Technical            | IBM Plex Mono  | 400, 500        | Data, code, metadata, small labels    |
| Long-form (optional) | IBM Plex Serif | 400, 400 italic | Pull quotes and research reports only |

Plex is precise and engineered but still warm, and it isn't one of the fonts most AI-made
sites default to. Headlines use tight letterspacing (−0.028em); small mono labels use
wide letterspacing (+0.22em) in uppercase. The wordmark is drawn, not set in Plex.

---

## 6. Verbal identity

**Brand essence:** SHAZA finds out what agricultural data really exists and whether it
can be used, so better tools can be built on top of it.

**Short description (for bios and profiles):**
> SHAZA is a technology company being built in Rwanda. Our first project maps what
> agricultural data exists, whether it can really be used, and what is missing.

**Mission:** To make the data behind African agriculture visible and usable, starting in
Rwanda, so that the tools built on it can be trusted.

**Vision:** A future where agricultural, climate and AI tools for Africa are built on data
that has been found, tested and understood, and where many of those tools are built in
Africa.

**Values:**
1. **Know before building.** Every product starts with understanding what is really there.
2. **Test it ourselves.** We use the data before we describe it.
3. **Honest by default.** Every number carries its source. We never present a prototype,
   an illustration or a prediction as a finding.
4. **Depth before scale.** One country studied properly before many studied lightly.
5. **Built for years.** We build things meant to last, not to impress for a week.

**Tagline options:**
1. Know what's there before building on it.
2. Rwanda first. Africa next.
3. Agricultural data you can actually use.
4. From scattered data to clear decisions.
5. Start with what's true.

**Tone:** short sentences, concrete nouns, no hype. Say "we are testing", not "we are
revolutionising". Never claim datasets, research, users or impact that don't exist yet.
Lead with Rwanda as proof and Africa as ambition.

---

## 7. Applications

| Context                  | How the identity applies                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Website                  | Ink surfaces, one plain headline, generous whitespace. Real findings first; anything illustrative is labelled.                               |
| Dashboard / data product | Ivory or Ink UI, Plex Mono for every number. Gold only for the single most important value or action. Every value shows its source.          |
| Research report cover    | Ivory cover, symbol top-left, title in Plex Sans 700, subtitle in Plex Serif italic, one Deep Gold rule at the foot.                         |
| Pitch deck               | Ink title slides, Ivory content slides. One idea per slide. Open with the problem, then the Rwanda work, then where it leads.                 |
| GitHub organisation      | Avatar: symbol on Ink. Profile README opens with the short description and links to the data inventory.                                      |
| Social avatar & banner   | Avatar: symbol only, primary colours. Banner: Ink, wordmark left, "Rwanda first. Africa next." right in Plex Mono.                           |
| Presentation template    | 16:9 grid with 64px margins; Plex Mono slide numbers bottom-left; logo bottom-right on every slide except the title slide.                  |
| Field kit / device       | Matte black or silver housing, the symbol printed in one colour. A gold status light where the seed sits.                                    |

---

## 8. Implementation checklist

- [x] Website tokens match section 4 (`client/src/styles/tokens.css`)
- [x] Fonts loaded: IBM Plex Sans, Mono, Serif
- [x] Logo and wordmark drawn in code (`client/src/components/ui/Logo.tsx`)
- [x] Favicon from the small symbol (`client/public/favicon.svg`)
- [x] Hero and "What is SHAZA" rewritten to the pitch in section 1
- [ ] Standalone SVG files of the logo in all three colour versions
- [ ] A real Rwanda data inventory on the site, replacing illustrative data
- [x] A short founder note on the site
- [x] Contact email and LinkedIn in the footer
- [ ] GitHub link
- [ ] Slide and report templates built from section 7
