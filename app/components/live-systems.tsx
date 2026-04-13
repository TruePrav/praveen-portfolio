'use client';

import { useEffect, useRef } from 'react';

const aion = {
  url: 'https://www.aionchain.app',
  tag: 'Personal - On-Chain Analytics',
  description:
    'Multi-chain smart money platform tracking on-chain wallet activity, whale movements, and DEX flows across Solana and EVM chains. Built to surface high-conviction setups and smart money signals in real time. Competing in the Nansen CLI competition.',
  features: [
    'Real-time wallet + whale movement tracking',
    'Smart money signal aggregation across chains',
    'Multi-chain: Solana, Polygon, Ethereum',
    'Custom analytics dashboards, live on VPS',
  ],
  stack: ['Python', 'FastAPI', 'Next.js', 'Nansen API', 'Solana', 'Polygon', 'REST APIs', 'Linux VPS'],
  accent: '#F97316',
  glow: 'rgba(249,115,22,0.07)',
};

const agents = [
  { name: 'Alfred',     role: 'Orchestrator + ops — routes tasks, manages memory, monitors all agents',       color: '#22D3EE', uptime: '99.8%' },
  { name: 'Linda',      role: 'Content research — daily trending scrape, 7-day calendar, Telegram brief',      color: '#8B5CF6', uptime: '98.5%' },
  { name: 'Jax',        role: 'Research & analysis — web search, document review, competitor intel',           color: '#F97316', uptime: '98.9%' },
  { name: 'Lux',        role: 'Career strategy — resume tailoring, job pipeline, interview prep',              color: '#A78BFA', uptime: '99.0%' },
  { name: 'Popeye',     role: 'Health & fitness — meal plans, workout programming, macros, check-ins',         color: '#22C55E', uptime: '99.0%' },
  { name: 'Zero',       role: 'Full-stack dev — Next.js, React, TypeScript, UI/UX, client sites',             color: '#EAB308', uptime: '99.1%' },
  { name: 'Architect',  role: 'Backend dev — Python, Node.js, APIs, infrastructure, system architecture',      color: '#60A5FA', uptime: '99.2%' },
  { name: 'Degen',      role: 'Crypto & prediction markets — Polymarket ICT strategy, Polygon/DeFi',           color: '#34D399', uptime: '97.5%' },
  { name: 'Quant',      role: 'Data & analytics — SQL queries, personal finance, charts, business data',       color: '#F472B6', uptime: '98.8%' },
  { name: 'Carrington', role: 'Personal AI companion — daily quizzes, follow-ups, accountability',             color: '#FB7185', uptime: '99.3%' },
];

export default function LiveSystems() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" ref={sectionRef} id="agents">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="reveal mb-12">
          <p className="section-label mb-3">PASSION PROJECTS</p>
          <h2 className="section-title mb-4">Things I build for myself</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            Personal systems, trading infrastructure, and a network of AI agents I run daily.
          </p>
        </div>

        {/* AION Featured Card */}
        <div
          className="reveal glass"
          style={{
            padding: '36px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: `linear-gradient(135deg, ${aion.glow}, rgba(10,14,20,0.70))`,
            border: '1px solid rgba(255,255,255,0.07)',
            borderTop: '1px solid rgba(255,255,255,0.10)',
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.4), 0 0 0 0.5px ${aion.accent}10`,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '18px',
            marginBottom: '48px',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${aion.accent}60, transparent)`, opacity: 0.7 }} />
          <div style={{ position: 'absolute', top: '-20px', right: '24px', fontSize: '7rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, color: `${aion.accent}08`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
            01
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', alignItems: 'start', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: aion.accent, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {aion.tag}
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', fontWeight: 600, color: '#22C55E', letterSpacing: '0.08em', fontFamily: "'JetBrains Mono', monospace", border: '1px solid rgba(34,197,94,0.25)', borderRadius: '4px', padding: '1px 7px', background: 'rgba(34,197,94,0.08)' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'agentPulse 2s ease-in-out infinite' }} />
                  IN DEV
                </span>
                <a
                  href={aion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', fontWeight: 600, color: aion.accent, opacity: 0.7, textDecoration: 'none', border: `1px solid ${aion.accent}40`, borderRadius: '4px', padding: '1px 7px', fontFamily: "'JetBrains Mono', monospace", transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
                >
                  {'->'} visit
                </a>
              </div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '12px', letterSpacing: '-0.02em' }}>
                AION
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                {aion.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {aion.stack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(0,0,0,0.25)', border: `1px solid ${aion.accent}15`, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '14px' }}>
                What it does
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {aion.features.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    <span style={{ color: aion.accent, marginTop: '1px', flexShrink: 0 }}>+</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agent Network header */}
        <div className="reveal" style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
              MY AGENT NETWORK
            </p>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'agentPulse 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#22C55E', letterSpacing: '0.08em' }}>
                {agents.length} ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* Agent grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
          {agents.map((agent, i) => (
            <div
              key={agent.name}
              className="reveal"
              style={{
                padding: '18px 20px',
                borderRadius: '14px',
                background: 'rgba(5,12,20,0.7)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderLeft: `3px solid ${agent.color}45`,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)',
                transition: 'border-left-color 0.2s, box-shadow 0.2s',
                transitionDelay: `${i * 40}ms`,
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = agent.color;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px ${agent.color}12`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = `${agent.color}45`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', fontWeight: 700, color: agent.color }}>
                  {agent.name}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'agentPulse 2s ease-in-out infinite', animationDelay: `${i * 0.18}s` }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#22C55E', letterSpacing: '0.05em' }}>{agent.uptime}</span>
                </div>
              </div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.76rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.5, margin: 0 }}>
                {agent.role}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes agentPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.35); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }
      `}</style>
    </section>
  );
}
