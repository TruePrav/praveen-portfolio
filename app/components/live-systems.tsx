'use client';

import { useEffect, useRef } from 'react';

const agents = [
  {
    pid: '1001',
    name: 'alfred',
    displayName: 'Alfred',
    role: 'Orchestrator · multi-agent ops via Telegram',
    stat: '100+ tasks/month',
    status: 'active',
    color: '#22D3EE',
    uptime: '99.8%',
    module: 'orchestrator.core',
  },
  {
    pid: '1002',
    name: 'scout',
    displayName: 'Scout',
    role: 'Customer support · Telegram & Discord',
    stat: '95% accuracy',
    status: 'active',
    color: '#8B5CF6',
    uptime: '99.1%',
    module: 'support.handler',
  },
  {
    pid: '1003',
    name: 'ledger',
    displayName: 'Ledger',
    role: 'Daily reconciliation · financial reporting',
    stat: '$50K+/month tracked',
    status: 'active',
    color: '#22D3EE',
    uptime: '100%',
    module: 'finance.reconcile',
  },
  {
    pid: '1004',
    name: 'linda',
    displayName: 'Linda',
    role: 'Content intelligence · social media research',
    stat: '18 ideas/day',
    status: 'active',
    color: '#8B5CF6',
    uptime: '98.5%',
    module: 'content.generator',
  },
  {
    pid: '1005',
    name: 'degen',
    displayName: 'Degen',
    role: 'Autonomous Polymarket prediction trading bot',
    stat: 'Live on Polymarket',
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

  return (
    <section className="section" ref={sectionRef} id="work">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="section-label mb-3">LIVE SYSTEMS</p>
          <h2 className="section-title mb-4">What&apos;s running right now</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            A network of autonomous AI agents handling real business ops — 24/7, no supervision required.
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
            {/* Traffic lights */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57', opacity: 0.8 }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E', opacity: 0.8 }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28CA41', opacity: 0.8 }} />
            </div>

            {/* Title bar */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
                fontSize: '0.75rem',
                color: 'rgba(34,211,238,0.6)',
                letterSpacing: '0.06em',
              }}
            >
              agent-status --network play-bb --watch
            </div>

            {/* Live indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#22C55E',
                  display: 'inline-block',
                  animation: 'termPulse 2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontSize: '0.7rem',
                  color: '#22C55E',
                  letterSpacing: '0.08em',
                }}
              >
                LIVE
              </span>
            </div>
          </div>

          {/* Column headers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 120px 1fr 110px 90px 80px',
              gap: '12px',
              padding: '10px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {['PID', 'NAME', 'ROLE', 'METRIC', 'UPTIME', 'STATUS'].map((col) => (
              <span
                key={col}
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontSize: '0.65rem',
                  color: 'rgba(34,211,238,0.4)',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}
              >
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
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(34,211,238,0.03)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                }}
              >
                {/* PID */}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.25)',
                  }}
                >
                  {agent.pid}
                </span>

                {/* Name */}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: agent.color,
                    letterSpacing: '0.02em',
                  }}
                >
                  {agent.name}
                </span>

                {/* Role */}
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.4,
                  }}
                >
                  {agent.role}
                </span>

                {/* Metric */}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {agent.stat}
                </span>

                {/* Uptime */}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontSize: '0.75rem',
                    color: agent.status === 'active' ? '#22C55E' : '#FBBF24',
                  }}
                >
                  {agent.uptime}
                </span>

                {/* Status badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: agent.status === 'active' ? '#22C55E' : '#FBBF24',
                      display: 'inline-block',
                      flexShrink: 0,
                      animation: agent.status === 'active' ? 'termPulse 2s ease-in-out infinite' : 'buildPulse 1.2s ease-in-out infinite',
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: agent.status === 'active' ? '#22C55E' : '#FBBF24',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: agent.status === 'active' ? 'rgba(34,197,94,0.1)' : 'rgba(251,191,36,0.1)',
                      border: agent.status === 'active' ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(251,191,36,0.2)',
                    }}
                  >
                    {agent.status === 'active' ? 'ACTIVE' : 'BUILDING'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal footer */}
          <div
            style={{
              padding: '12px 20px',
              borderTop: '1px solid rgba(34,211,238,0.08)',
              background: 'rgba(34,211,238,0.02)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: '0.7rem',
                color: 'rgba(34,211,238,0.4)',
              }}
            >
              $
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: '0.7rem',
                color: 'rgba(34,211,238,0.5)',
              }}
            >
              5 agents running · 4 active · 1 building
            </span>
            <span
              style={{
                marginLeft: 'auto',
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.15)',
              }}
            >
              network: play-bb-prod
            </span>
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
