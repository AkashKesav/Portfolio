import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] py-20 md:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2
          data-animate="fade-up"
          className="font-heading font-bold text-[32px] md:text-[48px] text-[#F5F5F0] mb-4"
        >
          Let&apos;s investigate what reliable ML can do.
        </h2>

        <p
          data-animate="fade-up"
          className="font-body text-[16px] text-[rgba(245,245,240,0.7)] max-w-[480px] mx-auto mb-10"
          style={{ transitionDelay: '100ms' }}
        >
          I&apos;m open to research internships and collaborations in applied ML, trustworthy AI, agentic systems, and AI for science.
        </p>

        <div
          data-animate="fade-up"
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8"
          style={{ transitionDelay: '200ms' }}
        >
          <a
            href="mailto:akashkesav3@gmail.com"
            className="flex items-center gap-2 font-body font-medium text-[16px] text-[#F5F5F0] hover:underline transition-all duration-200"
          >
            <Mail size={18} />
            akashkesav3@gmail.com
          </a>
          <a
            href="tel:+6586246231"
            className="flex items-center gap-2 font-body font-medium text-[16px] text-[#F5F5F0] hover:underline transition-all duration-200"
          >
            <Phone size={18} />
            +65 8624 6231
          </a>
          <span className="flex items-center gap-2 font-body font-medium text-[16px] text-[#F5F5F0]">
            <MapPin size={18} />
            Singapore / India
          </span>
        </div>

        <div
          data-animate="fade-up"
          className="flex items-center justify-center gap-6 mb-16"
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="https://github.com/AkashKesav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(245,245,240,0.6)] hover:text-[#F5F5F0] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-kesav-592ba5289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(245,245,240,0.6)] hover:text-[#F5F5F0] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="border-t border-[rgba(245,245,240,0.1)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12px] text-[rgba(245,245,240,0.5)]">
            © 2026 Akash Kesav Shanmugaraj
          </p>
          <p className="font-body text-[12px] text-[rgba(245,245,240,0.5)]">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
