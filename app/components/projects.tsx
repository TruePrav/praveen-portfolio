'use client';

import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'PLAY Agent Network',
    tag: 'Production · Gaming Retail',
    url: null,
    description:
      'Multi-agent AI system for a family-owned gaming retail business. An orchestrator supervises a network of specialised agents across customer support, finance, content, sales intelligence, and HR — fully automated ops across Telegram, Discord, and WhatsApp.',
    impact: [
      'Customer support automated 24/7',
      'Daily financial reconciliation',
      '18 content ideas researched daily',
    ],
    stack: ['Python', 'LangChain', 'LangGraph', 'OpenClaw', 'Telegram', 'Discord', 'Node.js'],
    accent: '#22D3EE',
    glow: 'rgba(34,211,238,0.06)',
    number: '01',
  },
  {
    title: 'ailevelup.ca',
    tag: 'Live · AI Consulting',
    url: 'https://ailevelup.ca',
    description:
      'AI automation platform for small and medium businesses. Deploys custom AI agent networks across every business function — support, finance, sales, ops, marketing, HR, and content — without requiring a technical team on the client side.',
    impact: [
      'Global SMB market',
      'Done-for-you AI deployment',
      'Live demo agents on-site',
    ],
    stack: ['Next.js', 'Tailwind', 'Node.js', 'Anthropic', 'Groq', 'Vercel'],
    accent: '#8B5CF6',
    glow: 'rgba(139,92,246,0.06)',
    number: '02',
  },
  {
    title: 'Digisales',
    tag: 'Internal · E-commerce',
    url: 'https://digisales.ca',
    description:
      'Custom digital storefront enabling online gift card and digital product sales for a gaming retail business. An agent network handles the full sales pipeline — product queries, order fulfillment, and customer support — with zero manual processing.',
    impact: [
      'Automated digital fulfillment',
      'Integrated with POS system',
      'Zero manual order processing',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'SQL', 'LangChain', 'REST APIs'],
    accent: '#22D3EE',
    glow: 'rgba(34,211,238,0.06)',
    number: '03',
  },
  {
    title: 'Greenbox Barbados',
    tag: 'Production · Vegan Catering',
    url: 'https://greenboxbarbados.com',
    description:
      'Built the digital presence for a vegan catering business in Barbados. Currently designing and deploying a custom AI agent network for their operations — applying the same multi-agent framework to a new client vertical.',
    impact: [
      'greenboxbarbados.com live',
      'AI agent network in progress',
      'Custom ops automation planned',
    ],
    stack: ['Next.js', 'Tailwind', 'Vercel', 'OpenClaw', 'LangChain'],
    accent: '#22C55E',
    glow: 'rgba(34,197,94,0.06)',
    number: '04',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="projects" ref={sectionRef} style={{ paddingTop: '0' }}>
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="reveal mb-12">
          <p className="section-label mb-3">PROJECTS</p>
          <h2 className="section-title mb-4">Things I&apos;ve shipped</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            Products and systems built with real constraints — small team, tight budget, production traffic.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal glass"
              style={{
                padding: '36px',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                background: `linear-gradient(135deg, ${project.glow}, rgba(10,14,20,0.70))`,
                border: `1px solid rgba(255,255,255,0.07)`,
                borderTop: `1px solid rgba(255,255,255,0.10)`,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.4), 0 0 0 0.5px ${project.accent}10`,
                transitionDelay: `${i * 100}ms`,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '18px',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)`, opacity: 0.6 }} />
              <div style={{ position: 'absolute', top: '-20px', right: '24px', fontSize: '7rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, color: `${project.accent}08`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                {project.number}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', alignItems: 'start', position: 'relative', zIndex: 1 }}>
                <div>
                  {/* Tag + visit link */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, color: project.accent, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>
                      {project.tag}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', fontWeight: 600, color: project.accent, opacity: 0.7, textDecoration: 'none', border: `1px solid ${project.accent}40`, borderRadius: '4px', padding: '1px 7px', fontFamily: "'JetBrains Mono', monospace", transition: 'opacity 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
                      >
                        ↗ visit
                      </a>
                    )}
                  </div>

                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.2 }}>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = project.accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      >
                        {project.title}
                      </a>
                    ) : project.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(0,0,0,0.25)', border: `1px solid ${project.accent}15`, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '14px' }}>
                    Impact
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.impact.map((item) => {
                      // Auto-link impact items that look like domain names
                      const domainMatch = item.match(/^([\w-]+\.[\w.]+)\s/);
                      const url = domainMatch ? `https://${domainMatch[1]}` : null;
                      return (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                          <span style={{ color: project.accent, marginTop: '1px', flexShrink: 0 }}>✅</span>
                          {url ? (
                            <span>
                              <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: project.accent, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                                {domainMatch![1]}
                              </a>
                              {item.slice(domainMatch![1].length)}
                            </span>
                          ) : item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
