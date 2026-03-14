'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'Agents',   id: 'agents'   },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills',   id: 'skills'   },
  { label: 'About',    id: 'about'    },
];

export default function Nav() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = ['agents', 'projects', 'skills', 'about', 'contact'];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0D1117]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-5 max-w-6xl">
          <div className="flex items-center justify-end md:justify-between">
            {/* Logo — TP image on desktop only, nothing on mobile */}
            <button onClick={() => scrollTo('hero')} className="focus:outline-none hidden md:block">
              <Image
                src="/tp-logo.png"
                alt="TruePrav"
                width={40}
                height={40}
                priority
              />
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="nav-link"
                  style={{ color: active === item.id ? 'var(--accent)' : undefined, transition: 'color 0.2s' }}
                >
                  {item.label}
                </button>
              ))}
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
              className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none transition-colors z-[60] relative"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[55] flex flex-col md:hidden"
          style={{
            background: 'rgba(13, 17, 23, 0.97)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {/* Top bar — just close button on mobile */}
          <div className="flex justify-end items-center px-6 py-5">
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links centered */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8 pb-16">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link text-center"
                style={{
                  fontSize: '1.5rem',
                  color: active === item.id ? 'var(--accent)' : 'var(--text-primary)',
                  animation: `slideUp 0.3s ease-out ${i * 0.05}s both`,
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-gradient mt-4"
              style={{ animation: 'slideUp 0.3s ease-out 0.2s both' }}
            >
              Contact
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
