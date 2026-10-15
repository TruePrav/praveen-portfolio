'use client';

import type { CSSProperties, ComponentType, SVGProps } from 'react';
import { useEffect, useRef } from 'react';

type SkillGroup = {
  category: string;
  color: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  skills: string[];
};

function AgentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="7" y="8" width="18" height="16" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      <circle cx="20" cy="15" r="1.5" fill="currentColor" />
      <path d="M12 20C13.2 18.9 14.5 18.4 16 18.4C17.5 18.4 18.8 18.9 20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 8V5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="4" r="1.4" fill="currentColor" />
    </svg>
  );
}

function BackendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="6.5" y="7" width="19" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6.5" y="18" width="19" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="11" cy="10.5" r="1.2" fill="currentColor" />
      <circle cx="11" cy="21.5" r="1.2" fill="currentColor" />
      <path d="M15 10.5H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 21.5H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FrontendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="5.5" y="6.5" width="21" height="19" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 11H26.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="8.8" r="0.9" fill="currentColor" />
      <circle cx="12" cy="8.8" r="0.9" fill="currentColor" />
      <circle cx="15" cy="8.8" r="0.9" fill="currentColor" />
      <rect x="9" y="14" width="6" height="7" rx="1.6" fill="currentColor" fillOpacity="0.18" />
      <rect x="17.5" y="14" width="5.5" height="3" rx="1.4" fill="currentColor" fillOpacity="0.18" />
      <rect x="17.5" y="18.5" width="5.5" height="2.5" rx="1.2" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}

function InfraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="23" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="23" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11.6 11.1L14.4 20.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20.4 11.1L17.6 20.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 9H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function OpsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M7 24.5H25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 21V15.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 21V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 21V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9 12.5L14 9L18.5 11.5L23 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const skillGroups: SkillGroup[] = [
  {
    category: 'AI & Agents',
    icon: AgentIcon,
    color: '#22D3EE',
    skills: ['LangChain', 'Anthropic Claude', 'OpenAI', 'Google Gemini', 'Grok / xAI', 'OpenClaw', 'Multi-Agent Systems', 'Prompt Engineering', 'RAG', 'MCP'],
  },
  {
    category: 'Backend',
    icon: BackendIcon,
    color: '#8B5CF6',
    skills: ['Python', 'Node.js', 'REST APIs', 'SQL', 'Automation Pipelines', 'Cron / Scheduling'],
  },
  {
    category: 'Frontend',
    icon: FrontendIcon,
    color: '#22D3EE',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Bots & Infra',
    icon: InfraIcon,
    color: '#8B5CF6',
    skills: ['Telegram Bots', 'Discord Bots', 'Slack Bots', 'N8N', 'GitHub', 'Linux', 'Vercel', 'Environment Automation'],
  },
  {
    category: 'Ops & Tools',
    icon: OpsIcon,
    color: '#22D3EE',
    skills: ['Lightspeed POS', 'Shopify', 'Google Sheets', 'Slack', 'Discord', 'Data Reconciliation', 'Customer Support Systems', 'Analytics'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

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
      <div className="container mx-auto max-w-6xl px-6">
        <div className="reveal mb-12">
          <p className="section-label mb-3">SKILLS</p>
          <h2 className="section-title mb-4">What I work with</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            From LLM orchestration to frontend polish, I build across the full stack with a bias for automation.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {skillGroups.map((group, i) => {
            const Icon = group.icon;

            return (
              <div
                key={group.category}
                className="reveal glass"
                style={{
                  padding: '28px',
                  transitionDelay: `${i * 80}ms`,
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px', position: 'relative' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `linear-gradient(180deg, rgba(255,255,255,0.05), rgba(${group.color === '#22D3EE' ? '34,211,238' : '139,92,246'},0.12))`,
                      border: `1px solid ${group.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: group.color,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 24px ${group.color}14`,
                    }}
                  >
                    <Icon width={30} height={30} />
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {group.category}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        marginTop: '3px',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: group.color,
                      }}
                    >
                      {group.skills.length} capabilities
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative' }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={
                        {
                          '--hover-color': group.color,
                        } as CSSProperties
                      }
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="reveal"
          style={{
            marginTop: '32px',
            padding: '20px 28px',
            borderRadius: '12px',
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
