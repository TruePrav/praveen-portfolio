'use client';

import { useEffect, useRef } from 'react';

const facts: { label: string; value: string; href?: string }[] = [
  { label: 'Based in',   value: 'Toronto, Canada 🇨🇦' },
  { label: 'Role',       value: 'AI Agent Engineer' },
  { label: 'Company',    value: 'Infinite Technology Inc. - PLAY Barbados' },
  { label: 'Building',   value: 'ailevelup.ca — AI automation for SMBs', href: 'https://ailevelup.ca' },
  { label: 'Stack',      value: 'Python · Node.js · Next.js · LangChain · Deep Agents' },
  { label: 'Online',     value: '@TruePrav - AI, automation, gaming, crypto' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-6xl">

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

          {/* Left - text */}
          <div>
            <div className="reveal mb-12">
              <p className="section-label mb-3">ABOUT</p>
              <h2 className="section-title mb-6">The person behind the agents</h2>
            </div>

            <div className="reveal">
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '20px' }}>
                I&apos;m Praveen. Born in Chile, raised in Barbados, now based in Toronto. I grew up obsessed with computers, training for gaming tournaments, DJing, and learning software. That competitive edge never left. Now I build AI agents.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '20px' }}>
                I run technical operations for a family-owned gaming retail business with two locations in Barbados. I wear every hat: marketing, support, dev, ops, automation. Growing up around three cultures and running a business across two countries taught me how to build systems that work without me being in the room. That&apos;s exactly how I think about AI agents. Not one tool, but a network of specialists working together.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '20px' }}>
                Most of what I build solves a real problem I ran into first. The agent network started because I needed to automate 50% of ops. The content agent because consistent posting eats too much time. The trading bot because I wanted to understand fully autonomous systems from the inside.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
                Now I&apos;m building <a href="https://ailevelup.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>ailevelup.ca</a> to bring the same systems to other businesses — done-for-you AI that actually runs.
              </p>
            </div>
          </div>

          {/* Right - facts card */}
          <div className="reveal">
            <div
              className="glass"
              style={{
                padding: '32px',
                borderRadius: '18px',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(34,211,238,0.5)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: '20px',
                }}
              >
                Quick Profile
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {facts.map((fact, i) => (
                  <div
                    key={fact.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '130px 1fr',
                      gap: '12px',
                      padding: '14px 0',
                      borderBottom: i < facts.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      alignItems: 'start',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.68rem',
                        color: 'rgba(34,211,238,0.5)',
                        letterSpacing: '0.06em',
                        paddingTop: '1px',
                      }}
                    >
                      {fact.label}
                    </span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      {fact.href ? (
                        <a href={fact.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                          {fact.value}
                        </a>
                      ) : fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
