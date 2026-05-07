import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(245,245,240,0.9)] backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-body font-semibold text-[16px] text-[#1A1A1A] hover:text-[#6B7B3E] transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Akash Kesav
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body font-medium text-[14px] text-[#1A1A1A] hover:text-[#6B7B3E] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-2">
              <a
                href="https://github.com/AkashKesav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A] hover:text-[#6B7B3E] transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-kesav-592ba5289/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A] hover:text-[#6B7B3E] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:akashkesav3@gmail.com"
                className="text-[#1A1A1A] hover:text-[#6B7B3E] transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5F5F0] flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-heading font-bold text-[32px] text-[#1A1A1A] hover:text-[#6B7B3E] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/AkashKesav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A]"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-kesav-592ba5289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A]"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:akashkesav3@gmail.com"
              className="text-[#1A1A1A]"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
