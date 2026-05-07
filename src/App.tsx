import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import Summary from '@/sections/Summary';
import Education from '@/sections/Education';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Publications from '@/sections/Publications';
import Skills from '@/sections/Skills';
import Leadership from '@/sections/Leadership';
import Contact from '@/sections/Contact';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

export default function App() {
  useScrollAnimations();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />
      <main>
        <Hero />
        <Summary />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
}
