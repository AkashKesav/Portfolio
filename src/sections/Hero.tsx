import { useRef, useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useGridEffect } from '@/hooks/useGridEffect';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [charsAnimated, setCharsAnimated] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useGridEffect(canvasRef, { step: 24 });

  const name = 'Akash Kesav';
  const nameChars = name.split('');

  useEffect(() => {
    const timer1 = setTimeout(() => setCharsAnimated(true), 400);
    const timer2 = setTimeout(() => setContentVisible(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 text-center max-w-[800px] mx-auto px-6">
        <p
          className={`font-body font-medium text-[14px] text-[#6B7B3E] tracking-[0.1em] uppercase mb-6 transition-all duration-600 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Machine Learning Engineer
        </p>

        <h1 className="font-heading font-bold text-[48px] md:text-[80px] text-[#1A1A1A] leading-[1.0] mb-6">
          {nameChars.map((char, i) => (
            <span
              key={i}
              className={`char inline-block ${charsAnimated ? 'animate' : ''}`}
              style={{
                transitionDelay: charsAnimated ? `${i * 30}ms` : '0ms',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p
          className={`font-body text-[18px] text-[rgba(26,26,26,0.7)] leading-[1.6] max-w-[560px] mx-auto mb-8 transition-all duration-600 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Smart Manufacturing undergrad at IIITDM Jabalpur. Building ML systems for materials, language, and production.
        </p>

        <div
          className={`flex items-center justify-center gap-4 mb-6 transition-all duration-600 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <button
            onClick={() => handleScrollTo('#projects')}
            className="bg-[#1A1A1A] text-[#F5F5F0] px-7 py-3 font-body font-medium text-[14px] hover:bg-[#6B7B3E] transition-colors duration-200 flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={16} />
          </button>
          <a
            href="/AkashKesav_ML.pdf"
            className="border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] px-7 py-3 font-body font-medium text-[14px] hover:bg-[#1A1A1A] hover:text-[#F5F5F0] transition-all duration-200"
          >
            Download Resume
          </a>
        </div>

        <div
          className={`flex items-center justify-center gap-5 transition-all duration-600 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href="https://github.com/AkashKesav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(26,26,26,0.6)] hover:text-[#6B7B3E] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-kesav-592ba5289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(26,26,26,0.6)] hover:text-[#6B7B3E] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:akashkesav3@gmail.com"
            className="text-[rgba(26,26,26,0.6)] hover:text-[#6B7B3E] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
