import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Audiences } from '@/components/sections/Audiences';
import { DataGaps } from '@/components/sections/DataGaps';
import { DataMap } from '@/components/sections/DataMap';
import { DataQuality } from '@/components/sections/DataQuality';
import { Domains } from '@/components/sections/Domains';
import { GlobalResearch } from '@/components/sections/GlobalResearch';
import { Hero } from '@/components/sections/Hero';
import { JoinCta } from '@/components/sections/JoinCta';
import { Methodology } from '@/components/sections/Methodology';
import { Pilot } from '@/components/sections/Pilot';
import { Principles } from '@/components/sections/Principles';
import { Problem } from '@/components/sections/Problem';
import { ResearchQuestion } from '@/components/sections/ResearchQuestion';
import { Roadmap } from '@/components/sections/Roadmap';
import { Vision } from '@/components/sections/Vision';
import { WhatIsMizi } from '@/components/sections/WhatIsMizi';

/**
 * The page argues one case, top to bottom: there is a real agricultural data
 * problem in Africa, here is the map we are building to understand it, here is
 * the method, and here is where it could lead.
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
        <WhatIsMizi />
        <DataMap />
        <Domains />
        <DataQuality />
        <DataGaps />
        <Methodology />
        <GlobalResearch />
        <Pilot />
        <ResearchQuestion />
        <Audiences />
        <Roadmap />
        <Vision />
        <Principles />
        <JoinCta />
      </main>

      <Footer />
    </>
  );
}
