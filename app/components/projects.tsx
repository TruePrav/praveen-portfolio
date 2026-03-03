'use client';

import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'PLAY Agent Network',
    tag: 'Production · Gaming Retail',
    description:
      'Multi-agent AI system running Alfred (orchestrator), Scout (support), Ledger (reconciliation), and Linda (content) — fully automated ops for a family gaming retail business.',
    impact: [
      '100+ tasks automated monthly',
      '95% support accuracy (Scout)',
      '$50K+ reconciled monthly',
    ],
    stack: ['Python', 'LangChain', 'OpenClaw', 'Telegram', 'Discord', 'Node.js'],
    accent: '#22D3EE',
    glow: 'rgba(34,211,238,0.06)',
    number: '01',
  },
  {
    title: 'ailevelup.ca',
    tag: 'Live · AI Consulting',
    description:
      'AI automation platform for small and medium businesses. Deploys custom AI agents across every business function — customer support, finance, sales, operations, marketing, HR, and content — without requiring a technical team.',
    impact: [
      'Global SMB market',
      'Done-for-you AI deployment',
      'Live agents, not templates',
    ],
    stack: ['Next.js', 'Tailwind', 'Node.js', 'Anthropic', 'Grok', 'Vercel'],
    accent: '#8B5CF6',
    glow: 'rgba(139,92,246,0.06)',
    number: '02',
  },
  {
    title: 'Digisales',
    tag: 'Internal · E-commerce',
    description:
      'Custom digital storefront for a family gaming retail business enabling online gift card and digital product sales — replacing manual processes with a fully automated fulfillment pipeline.',
    impact: [
      'Automated digital fulfillment',
      'Integrated with Lightspeed POS',
      'Zero manual order processing',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'SQL', 'REST APIs'],
    accent: '#22D3EE',
    glow: 'rgba(34,211,238,0.06)',
    number: '03',
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
    <section className="section" ref={sectionRef} style={{ paddingTop: '0' }}>
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="reveal mb-12">
          <p className="section-label mb-3">PROJECTS</p>
          <h2 className="section-title mb-4">Things I&apos;ve shipped</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            Products and systems built with real constraints — small team, tight budget, production traffic.
          </p>
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal glass"
              style={{
                padding: '36px',
                /* Enhanced glassmorphism */
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                background: `linear-gradient(135deg, ${project.glow}, rgba(10,14,20,0.70))`,
                border: `1px solid rgba(255,255,255,0.07)`,
                borderTop: `1px solid rgba(255,255,255,0.10)`,
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.06),
                  inset 0 -1px 0 rgba(0,0,0,0.2),
                  0 8px 40px rgba(0,0,0,0.4),
                  0 0 0 0.5px ${project.accent}10
                `,
                transitionDelay: `${i * 100}ms`,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '18px',
              }}
            >
              {/* Subtle top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)`,
                  opacity: 0.6,
                }}
              />

              {/* Large number bg */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '24px',
                  fontSize: '7rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  color: `${project.accent}08`,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {project.number}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '32px',
                  alignItems: 'start',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Left: info */}
                <div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: project.accent,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: "'Space Grotesk', sans-serif",
                      marginBottom: '8px',
                    }}
                  >
                    {project.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      marginBottom: '20px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Right: impact */}
                <div
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    background: 'rgba(0,0,0,0.25)',
                    border: `1px solid ${project.accent}15`,
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-secondary)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      marginBottom: '14px',
                    }}
                  >
                    Impact
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.impact.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.875rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <span style={{ color: project.accent, marginTop: '1px', flexShrink: 0 }}>✅</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Business Agents — Deployed */}
        <div className="reveal" style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.06)' }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(34,211,238,0.5)',
            }}>
              Deployed Agents
            </span>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px',
          }}>
            {[
              {
                name: 'Scout',
                color: '#22D3EE',
                function: 'Customer Support',
                desc: 'Handles customer inquiries 24/7 — product questions, issue resolution, escalation routing, and region policy enforcement. Learns the business and improves over time.',
                metrics: '95% accuracy · <1 min response',
                module: 'support.handler',
              },
              {
                name: 'Ledger',
                color: '#8B5CF6',
                function: 'Finance & Reconciliation',
                desc: 'Pulls sales data from POS systems, matches against supplier invoices, flags discrepancies, and delivers a formatted daily report. Runs automatically every morning.',
                metrics: '$50K+/month tracked · daily',
                module: 'finance.reconcile',
              },
              {
                name: 'Linda',
                color: '#22D3EE',
                function: 'Content Intelligence',
                desc: 'Monitors trending topics across social platforms, researches competitor content, and surfaces daily post ideas with engagement context. Outputs ready-to-review drafts.',
                metrics: '18 ideas/day · multi-platform',
                module: 'content.megaphone',
              },
              {
                name: 'Ranger',
                color: '#8B5CF6',
                function: 'Digital Sales Support',
                desc: 'Supports the digital storefront — handles product questions, delivery status, redemption issues, and auto-escalates edge cases to a human. Integrated with the e-commerce backend.',
                metrics: '98%+ eval accuracy',
                module: 'sales.digital',
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="reveal"
                style={{
                  padding: '24px',
                  borderRadius: '14px',
                  background: 'rgba(5,12,20,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: `linear-gradient(90deg, transparent, ${agent.color}40, transparent)`,
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: agent.color,
                      marginBottom: '2px',
                    }}>{agent.name.toLowerCase()}</div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.35)',
                    }}>{agent.function}</div>
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem',
                    color: 'rgba(34,197,94,0.7)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.15)',
                  }}>ACTIVE</span>
                </div>

                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                  marginBottom: '14px',
                }}>{agent.desc}</p>

                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  color: `${agent.color}80`,
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                }}>{agent.metrics}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
