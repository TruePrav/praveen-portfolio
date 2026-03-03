'use client';

import { useEffect, useRef, useState } from 'react';

const EMAIL = 'praveen@play.bb';

const links = [
  {
    label: 'X / Twitter',
    value: '@TruePrav',
    href: 'https://twitter.com/TruePrav',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: '#8B5CF6',
  },
  {
    label: 'LinkedIn',
    value: 'praveen-mahtani',
    href: 'https://linkedin.com/in/praveen-mahtani',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#22D3EE',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="section" id="contact" ref={sectionRef}>
      {/* Separator */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, rgba(34,211,238,0.3), transparent)',
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl text-center">

        <div className="reveal mb-4">
          <p className="section-label mb-3">CONTACT</p>
        </div>

        <h2
          className="reveal section-title mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}
        >
          Let&apos;s build something
          <br />
          <span className="gradient-text">worth running.</span>
        </h2>

        <p
          className="reveal"
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: '480px',
            margin: '0 auto 48px',
          }}
        >
          Open to AI/ops roles, consulting, and interesting projects. If you&apos;re building something that needs automation — I&apos;m interested.
        </p>

        <div
          className="reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {/* ── Email card with copy button ── */}
          <div
            className="glass"
            style={{
              padding: '20px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              minWidth: '220px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(34,211,238,0.3)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(34,211,238,0.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.borderColor = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '';
            }}
          >
            <span style={{ color: '#22D3EE' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </span>

            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '2px' }}>
                Email
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                {EMAIL}
              </div>
            </div>

            {/* Copy button */}
            <button
              onClick={copyEmail}
              title="Copy email"
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 10px',
                borderRadius: '6px',
                border: `1px solid ${copied ? 'rgba(34,197,94,0.4)' : 'rgba(34,211,238,0.25)'}`,
                background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(34,211,238,0.06)',
                color: copied ? '#22C55E' : 'rgba(34,211,238,0.7)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!copied) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(34,211,238,0.12)';
              }}
              onMouseLeave={(e) => {
                if (!copied) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(34,211,238,0.06)';
              }}
            >
              {copied ? (
                <>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  copied
                </>
              ) : (
                <>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                  copy
                </>
              )}
            </button>
          </div>

          {/* ── Other links ── */}
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="glass"
                style={{
                  padding: '20px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  minWidth: '220px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${link.color}50`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${link.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                }}
              >
                <span style={{ color: link.color }}>{link.icon}</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '2px' }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {link.value}
                  </div>
                </div>
                <svg style={{ marginLeft: 'auto', color: link.color, opacity: 0.6 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.6 }}>
          © {new Date().getFullYear()} Praveen Mahtani
        </div>
      </div>
    </section>
  );
}
