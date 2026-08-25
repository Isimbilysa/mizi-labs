import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { AfricaLab } from '@/components/sections/AfricaLab';
import { Approach } from '@/components/sections/Approach';
import { BuildWithUs } from '@/components/sections/BuildWithUs';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { Hero } from '@/components/sections/Hero';
import { Philosophy } from '@/components/sections/Philosophy';
import { Problem } from '@/components/sections/Problem';
import { Research } from '@/components/sections/Research';
import { Vision } from '@/components/sections/Vision';

/**
 * The page is a single narrative, read top to bottom:
 * context → approach → what we build → where → how → why → where it leads.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Problem />
        <Approach />
        <Ecosystem />
        <AfricaLab />
        <Research />
        <Philosophy />
        <Vision />
        <BuildWithUs />
      </main>

      <Footer />
    </>
  );
}
