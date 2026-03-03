'use client';

import { useEffect, useRef } from 'react';

const agents = [
  {
    pid: '1001',
    name: 'alfred',
    displayName: 'Alfred',
    role: 'Personal orchestrator · memory, scheduling, proactive ops',
    stat: '100+ tasks/month',
    status: 'active',
    color: '#22D3EE',
    uptime: '99.8%',
    module: 'orchestrator.core',
  },
  {
    pid: '1002',
    name: 'linda',
    displayName: 'Linda',
    role: 'Content intelligence · trend research & social drafts',
    stat: '18 ideas/day',
    status: 'active',
    color: '#8B5CF6',
    uptime: '98.5%',
    module: 'content.megaphone',
  },
  {
    pid: '1003',
    name: 'zero',
    displayName: 'Zero',
    role: 'Full-stack dev agent · builds sites, apps, and automations on demand',
    stat: 'PTY session',
    status: 'active',
    color: '#F59E0B',
    uptime: '99.1%',
    module: 'dev.fullstack',
  },
  {
    pid: '1004',
    name: 'degen',
    displayName: 'Degen',
    role: 'Autonomous prediction market trader · Polymarket on Polygon',
    stat: 'Wallet live',
    status: 'building',
    color: '#22C55E',
    uptime: 'beta',
    module: 'trading.polymarket',
  },
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const clientDeployments = [
    {
      type: 'Gaming Retail',
      count: 6,
      departments: ['Customer Support', 'Finance & Reconciliation', 'Content Intelligence', 'Sales Analytics', 'HR & Training', 'Operations'],
      stack: ['Python', 'LangChain', 'OpenClaw', 'Telegram', 'Discord'],
      color: '#22D3EE',
    },
    {
      type: 'Digital Commerce',
      count: 4,
      departments: ['Sales Orchestration', 'Order Fulfillment', 'Product Knowledge', 'Customer Support'],
      stack: ['Python', 'LangChain', 'REST APIs', 'Discord'],
      color: '#F97316',
    },
    {
      type: 'Vegan Catering (In Progress)',
      count: '4+',
      departments: ['Customer Support', 'Finance', 'Operations', 'Content'],
      stack: ['OpenClaw', 'LangChain', 'Next.js'],
      color: '#22C55E',
    },
  ];

  return (
    <section className="section" ref={sectionRef} id="agents">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="section-label mb-3">LIVE SYSTEMS</p>
          <h2 className="section-title mb-4">What&apos;s running right now</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            Personal AI agents I run daily — orchestration, content intelligence, dev, and autonomous trading. Business agents are deployed separately for clients.
          </p>
        </div>

        {/* Terminal console panel */}
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
          {/* Scanline overlay */}
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

          {/* Terminal top bar */}
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
            <div style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace", fontSize: '0.75rem', color: 'rgba(34,211,238,0.6)', letterSpacing: '0.06em' }}>
              agent-status --personal --watch
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'termPulse 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.7rem', color: '#22C55E', letterSpacing: '0.08em' }}>LIVE</span>
            </div>
          </div>

          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '60px 120px 1fr 110px 90px 80px', gap: '12px', padding: '10px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)', position: 'relative', zIndex: 1 }}>
            {['PID', 'NAME', 'ROLE', 'METRIC', 'UPTIME', 'STATUS'].map((col) => (
              <span key={col} style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.65rem', color: 'rgba(34,211,238,0.4)', letterSpacing: '0.1em', fontWeight: 600 }}>
                {col}
              </span>
            ))}
          </div>

          {/* Agent rows */}
          <div style={{ position: 'relative', zIndex: 1 }}>
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
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(34,211,238,0.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
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

          {/* Terminal footer */}
          <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(34,211,238,0.08)', background: 'rgba(34,211,238,0.02)', display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
            <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.7rem', color: 'rgba(34,211,238,0.4)' }}>$</span>
            <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.7rem', color: 'rgba(34,211,238,0.5)' }}>
              4 personal agents · 3 active · 1 building
            </span>
            <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.15)' }}>host: personal</span>
          </div>
        </div>
      {/* ── Client Deployments ─────────────────────────────────────────── */}
      <div className="reveal" style={{ marginTop: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.06)' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.5)' }}>
            Client Deployments
          </span>
          <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {clientDeployments.map((client) => (
            <div
              key={client.type}
              className="reveal"
              style={{ padding: '24px', borderRadius: '14px', background: 'rgba(5,12,20,0.6)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${client.color}40, transparent)` }} />

              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {client.type}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: client.color }}>
                    {client.count} agents deployed
                  </div>
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(34,197,94,0.7)', padding: '3px 10px', borderRadius: '4px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  {client.type.includes('Progress') ? 'BUILDING' : 'LIVE'}
                </div>
              </div>

              {/* Departments */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                {client.departments.map((dept) => (
                  <span key={dept} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', padding: '3px 10px', borderRadius: '20px', color: client.color, background: `${client.color}10`, border: `1px solid ${client.color}25` }}>
                    {dept}
                  </span>
                ))}
              </div>

              {/* Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {client.stack.map((tech) => (
                  <span key={tech} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', padding: '2px 7px', borderRadius: '3px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
}
