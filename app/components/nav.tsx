'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1117]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5 max-w-6xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="logo cursor-pointer focus:outline-none">
            PM
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('work')} className="nav-link">Work</button>
            <button onClick={() => scrollTo('skills')} className="nav-link">Skills</button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline !py-2 !px-5 !text-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/[0.06] pt-4">
            <button onClick={() => scrollTo('work')} className="nav-link text-left">Work</button>
            <button onClick={() => scrollTo('skills')} className="nav-link text-left">Skills</button>
            <button onClick={() => scrollTo('contact')} className="nav-link text-left">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}
