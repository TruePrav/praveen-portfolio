'use client';

import { useEffect, useRef } from 'react';

const agents = [
  {
    pid: '1001',
    name: 'alfred',
    displayName: 'Alfred',
    role: 'Orchestrator + ops - manages everything, routes tasks, maintains memory',
    stat: 'Ops control',
    status: 'active',
    color: '#22D3EE',
    uptime: '99.8%',
    module: 'orchestrator.core',
  },
  {
    pid: '1002',
    name: 'linda',
    displayName: 'Linda',
    role: 'Content research - daily trending scrape, 7-day calendar, Sheets + Telegram brief',
    stat: 'Daily brief',
    status: 'active',
    color: '#8B5CF6',
    uptime: '98.5%',
    module: 'content.megaphone',
  },
  {
    pid: '1003',
    name: 'jax',
    displayName: 'Jax',
    role: 'Video production - tags clips, writes hooks/scripts, formats for TikTok/IG/X',
    stat: 'Clip engine',
    status: 'active',
    color: '#F97316',
    uptime: '98.9%',
    module: 'content.video',
  },
  {
    pid: '1004',
    name: 'lux',
    displayName: 'Lux',
    role: 'Career strategy - resume optimization and job hunting workflows',
    stat: 'Resume ops',
    status: 'building',
    color: '#A78BFA',
    uptime: 'pending',
    module: 'career.strategy',
  },
  {
    pid: '1005',
    name: 'popeye',
    displayName: 'Popeye',
    role: 'Health & fitness - meal plans, workout programming, macros, check-ins',
    stat: 'Daily plans',
    status: 'active',
    color: '#22C55E',
    uptime: '99.0%',
    module: 'health.coach',
  },
  {
    pid: '1006',
    name: 'zero',
    displayName: 'Zero',
    role: 'Full-stack dev - frontend, UI, client sites, WhatsApp integration',
    stat: 'Build queue',
    status: 'active',
    color: '#EAB308',
    uptime: '99.1%',
    module: 'dev.fullstack',
  },
  {
    pid: '1007',
    name: 'architect',
    displayName: 'Architect',
    role: 'Backend dev + infra - Python services, APIs, and server builds',
    stat: 'Infra build',
    status: 'active',
    color: '#60A5FA',
    uptime: '99.2%',
    module: 'dev.backend',
  },
  {
    pid: '1008',
    name: 'degen',
    displayName: 'Degen',
    role: 'Autonomous Polymarket trader - ICT strategy, YES 10:30 contracts',
    stat: 'Dry-run pass',
    status: 'building',
    color: '#22C55E',
    uptime: 'beta',
    module: 'trading.polymarket',
  },
];

export default function LiveSystems() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const activeAgents = agents.filter((agent) => agent.status === 'active').length;
  const buildingAgents = agents.length - activeAgents;

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" ref={sectionRef} id="agents">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="reveal mb-12">
          <p className="section-label mb-3">PASSION PROJECTS</p>
          <h2 className="section-title mb-4">Personal Agent Command Center</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            Personal AI agents I run daily - orchestration, content intelligence, dev, and autonomous trading.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'rgba(5, 12, 20, 0.85)',
            border: '1px solid rgba(34,211,238,0.20)',
            boxShadow: '0 0 40px rgba(34,211,238,0.06), 0 4px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34,211,238,0.08)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
              pointerEvents: 'none',
              zIndex: 0,
              borderRadius: '16px',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(34,211,238,0.12)',
              background: 'rgba(34,211,238,0.03)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57', opacity: 0.8 }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E', opacity: 0.8 }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28CA41', opacity: 0.8 }} />
            </div>
            <div className="terminal-title" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace", fontSize: '0.75rem', color: 'rgba(34,211,238,0.6)', letterSpacing: '0.06em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              agent-status --personal --watch
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'termPulse 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.7rem', color: '#22C55E', letterSpacing: '0.08em' }}>LIVE</span>
            </div>
          </div>

          {/* Desktop table header - hidden on mobile */}
          <div className="desktop-table-header" style={{ display: 'grid', gridTemplateColumns: '60px 120px 1fr 110px 90px 80px', gap: '12px', padding: '10px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)', position: 'relative', zIndex: 1 }}>
            {['PID', 'NAME', 'ROLE', 'METRIC', 'UPTIME', 'STATUS'].map((col) => (
              <span key={col} style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.65rem', color: 'rgba(34,211,238,0.4)', letterSpacing: '0.1em', fontWeight: 600 }}>
                {col}
              </span>
            ))}
          </div>

          {/* Desktop rows - hidden on mobile */}
          <div className="desktop-table-rows" style={{ position: 'relative', zIndex: 1 }}>
            {agents.map((agent, i) => (
              <div
                key={agent.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 120px 1fr 110px 90px 80px',
                  gap: '12px',
                  padding: '16px 20px',
                  borderBottom: i < agents.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                  alignItems: 'center',
                  transition: 'background 0.2s ease',
                  cursor: 'default',
                  animation: agent.status === 'active' ? `rowGlow${i % 2 === 0 ? 'A' : 'B'} 4s ease-in-out infinite` : 'none',
                  animationDelay: `${i * 0.8}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(34,211,238,0.03)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>{agent.pid}</span>
                <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.85rem', fontWeight: 600, color: agent.color, letterSpacing: '0.02em' }}>{agent.name}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{agent.role}</span>
                <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>{agent.stat}</span>
                <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.75rem', color: agent.status === 'active' ? '#22C55E' : '#FBBF24' }}>{agent.uptime}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: agent.status === 'active' ? '#22C55E' : '#FBBF24', display: 'inline-block', flexShrink: 0, animation: agent.status === 'active' ? 'termPulse 2s ease-in-out infinite' : 'buildPulse 1.2s ease-in-out infinite', animationDelay: `${i * 0.3}s` }} />
                  <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.06em', color: agent.status === 'active' ? '#22C55E' : '#FBBF24', padding: '2px 8px', borderRadius: '4px', background: agent.status === 'active' ? 'rgba(34,197,94,0.1)' : 'rgba(251,191,36,0.1)', border: agent.status === 'active' ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(251,191,36,0.2)' }}>
                    {agent.status === 'active' ? 'ACTIVE' : 'BUILDING'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile card layout - hidden on desktop */}
          <div className="mobile-cards" style={{ position: 'relative', zIndex: 1 }}>
            {agents.map((agent, i) => (
              <div
                key={agent.name}
                style={{
                  padding: '16px 16px',
                  borderBottom: i < agents.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>{agent.pid}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.9rem', fontWeight: 600, color: agent.color }}>{agent.name}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: agent.status === 'active' ? '#22C55E' : '#FBBF24', display: 'inline-block', animation: agent.status === 'active' ? 'termPulse 2s ease-in-out infinite' : 'buildPulse 1.2s ease-in-out infinite' }} />
                    <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.06em', color: agent.status === 'active' ? '#22C55E' : '#FBBF24', padding: '2px 6px', borderRadius: '4px', background: agent.status === 'active' ? 'rgba(34,197,94,0.1)' : 'rgba(251,191,36,0.1)', border: agent.status === 'active' ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(251,191,36,0.2)' }}>
                      {agent.status === 'active' ? 'ACTIVE' : 'BUILDING'}
                    </span>
                  </div>
                </div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: '0 0 8px 0' }}>{agent.role}</p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.68rem', color: 'rgba(255,255,255,0.55)' }}>{agent.stat}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.68rem', color: agent.status === 'active' ? '#22C55E' : '#FBBF24' }}>↑ {agent.uptime}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(34,211,238,0.08)', background: 'rgba(34,211,238,0.02)', display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
            <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.7rem', color: 'rgba(34,211,238,0.4)' }}>$</span>
            <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.7rem', color: 'rgba(34,211,238,0.5)' }}>
              {agents.length} personal agents | {activeAgents} active | {buildingAgents} building
            </span>
            <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.15)' }}>host: personal</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes termPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }
        @keyframes buildPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes rowGlowA {
          0%, 100% { box-shadow: none; }
          50% { box-shadow: inset 0 0 30px rgba(34,211,238,0.015); }
        }
        @keyframes rowGlowB {
          0%, 100% { box-shadow: none; }
          50% { box-shadow: inset 0 0 30px rgba(139,92,246,0.015); }
        }
        .mobile-cards {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-table-header,
          .desktop-table-rows {
            display: none !important;
          }
          .mobile-cards {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}