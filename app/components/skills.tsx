'use client';

import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    category: 'AI & Agents',
    icon: '🤖',
    color: '#22D3EE',
    skills: ['LangChain', 'Anthropic Claude', 'OpenAI', 'Google Gemini', 'Grok / xAI', 'OpenClaw', 'Multi-Agent Systems', 'Prompt Engineering', 'RAG', 'MCP'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#8B5CF6',
    skills: ['Python', 'Node.js', 'REST APIs', 'SQL', 'Automation Pipelines', 'Cron / Scheduling'],
  },
  {
    category: 'Frontend',
    icon: '✦',
    color: '#22D3EE',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Bots & Infra',
    icon: '🔗',
    color: '#8B5CF6',
    skills: ['Telegram Bots', 'Discord Bots', 'GitHub', 'Linux', 'Vercel', 'Environment Automation'],
  },
  {
    category: 'Ops & Tools',
    icon: '📊',
    color: '#22D3EE',
    skills: ['Lightspeed POS', 'Shopify', 'Data Reconciliation', 'Customer Support Systems', 'Analytics'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 90);
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
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="section-label mb-3">SKILLS</p>
          <h2 className="section-title mb-4">What I work with</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            From LLM orchestration to frontend polish — I build across the full stack, with a bias for automation.
          </p>
        </div>

        {/* Skill groups */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="reveal glass"
              style={{
                padding: '28px',
                transitionDelay: `${i * 80}ms`,
                /* Enhanced glassmorphism */
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                background: `linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(${group.color === '#22D3EE' ? '34,211,238' : '139,92,246'},0.04) 100%)`,
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: '1px solid rgba(255,255,255,0.10)',
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.06),
                  inset 0 -1px 0 rgba(0,0,0,0.15),
                  0 4px 24px rgba(0,0,0,0.35),
                  0 0 0 0.5px ${group.color}10
                `,
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle top glow accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, ${group.color}50, transparent)`,
                }}
              />

              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', position: 'relative' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: `rgba(${group.color === '#22D3EE' ? '34,211,238' : '139,92,246'},0.10)`,
                    border: `1px solid ${group.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}
                >
                  {group.icon}
                </div>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: group.color,
                    letterSpacing: '0.02em',
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={
                      {
                        '--hover-color': group.color,
                      } as React.CSSProperties
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently exploring strip */}
        <div
          className="reveal"
          style={{
            marginTop: '32px',
            padding: '20px 28px',
            borderRadius: '12px',
            /* Glassmorphism on the strip too */
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'linear-gradient(135deg, rgba(34,211,238,0.05), rgba(139,92,246,0.05))',
            border: '1px solid rgba(34,211,238,0.12)',
            borderTop: '1px solid rgba(34,211,238,0.18)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Currently exploring
          </span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Model fine-tuning', 'Agent memory architectures', 'Polymarket trading systems', 'Caribbean AI market'].map((item) => (
              <span key={item} className="skill-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
