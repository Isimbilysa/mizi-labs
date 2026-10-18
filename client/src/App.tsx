import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { DataCoverage } from '@/components/sections/DataCoverage';
import { DataMap } from '@/components/sections/DataMap';
import { FounderNote } from '@/components/sections/FounderNote';
import { Hero } from '@/components/sections/Hero';
import { JoinCta } from '@/components/sections/JoinCta';
import { Methodology } from '@/components/sections/Methodology';
import { Problem } from '@/components/sections/Problem';
import { Research } from '@/components/sections/Research';
import { Roadmap } from '@/components/sections/Roadmap';
import { WhatIsShaza } from '@/components/sections/WhatIsShaza';

/**
 * The page argues one case, top to bottom: there is a real agricultural data
 * problem in Africa, here is the map we are building to understand it, here is
 * the method, and here is where it could lead.
 *
 * Ten sections, each with one job. Where two sections were making the same
 * point in two shapes — the roadmap and the vision pipeline, the pilot and the
 * research question — they were folded into one, because a claim repeated
 * looks like two claims.
 *
 * Every claim about maturity is carried in the copy and the status badges, so
 * the order can change without the page overstating what exists.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <div className="grain" aria-hidden="true" />

      <main id="main">
        <Hero />
        <Problem />
        <WhatIsShaza />
        <DataMap />
        <DataCoverage />
        <Research />
        <Methodology />
        <Roadmap />
        <FounderNote />
        <JoinCta />
      </main>

      <Footer />
    </>
  );
}
