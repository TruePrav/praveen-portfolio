'use client';

import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'PLAY Agent Network',
    tag: 'Production · Gaming Retail',
    description:
      'Multi-agent AI system for a family-owned gaming retail business. PlayMaster orchestrates a network of specialised agents across customer support, finance, content, sales intelligence, and HR — fully automated ops across Telegram, Discord, and WhatsApp.',
    impact: [
      'Customer support automated 24/7 (Scout)',
      'Daily financial reconciliation (Ledger)',
      '18 content ideas researched daily (Trender)',
    ],
    stack: ['Python', 'LangChain', 'LangGraph', 'OpenClaw', 'Telegram', 'Discord', 'Node.js'],
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
    description:
      'Custom digital storefront for a family gaming retail business enabling online gift card and digital product sales. Dan orchestrates a network of sales agents handling product queries, order fulfillment, and customer support — fully automated end-to-end.',
    impact: [
      'Automated digital fulfillment',
      'Integrated with Lightspeed POS',
      'Zero manual order processing',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'SQL', 'LangChain', 'REST APIs'],
    accent: '#22D3EE',
    glow: 'rgba(34,211,238,0.06)',
    number: '03',
  },
  {
    title: 'Greenbox Barbados',
    tag: 'Production · Retail',
    description:
      'Built the web presence for Greenbox Barbados, a local Barbados retail business. Currently designing and deploying a custom AI agent network for their operations — applying the same multi-agent framework from PLAY and Digisales to a new client.',
    impact: [
      'greenboxbarbados.com live',
      'AI agent build in progress',
      'Custom ops automation planned',
    ],
    stack: ['Next.js', 'Tailwind', 'Vercel', 'OpenClaw', 'LangChain'],
    accent: '#22C55E',
    glow: 'rgba(34,197,94,0.06)',
    number: '04',
  },
];

// ─── All deployed agents across all networks ──────────────────────────────────

type AgentStatus = 'active' | 'building' | 'beta';

const deployedAgents: {
  network: string;
  networkColor: string;
  agents: {
    name: string;
    color: string;
    function: string;
    desc: string;
    metrics: string;
    status: AgentStatus;
  }[];
}[] = [
  {
    network: 'PLAY Agent Network',
    networkColor: '#22D3EE',
    agents: [
      {
        name: 'PlayMaster',
        color: '#22D3EE',
        function: 'Multi-Agent Orchestrator',
        desc: 'Supervises all PLAY agents using a LangGraph state machine. Routes tasks to the right sub-agent, handles escalations, and coordinates cross-agent workflows across Telegram and Discord.',
        metrics: 'Goal: zero-touch ops routing for all business functions',
        status: 'active',
      },
      {
        name: 'Scout',
        color: '#22D3EE',
        function: 'Customer Support',
        desc: 'Handles customer inquiries 24/7 — product questions, gift card help, store hours, issue resolution, and smart escalation to humans. Trained on the full product catalog and store policies.',
        metrics: '100% eval accuracy · <1 min response · 73 test cases',
        status: 'active',
      },
      {
        name: 'Ledger',
        color: '#8B5CF6',
        function: 'Finance & Reconciliation',
        desc: 'Pulls daily sales data from the POS system, matches against supplier invoices, flags discrepancies, tracks profit margins by product, and delivers a formatted morning report.',
        metrics: '$50K+/month tracked · daily automated report',
        status: 'active',
      },
      {
        name: 'Prophet',
        color: '#F59E0B',
        function: 'Sales Intelligence',
        desc: 'Analyses historical sales data across two POS systems to surface demand trends, forecast inventory needs, and identify the best and worst performing product lines.',
        metrics: 'Goal: proactive sales signals before stock runs out',
        status: 'building',
      },
      {
        name: 'Trender',
        color: '#22D3EE',
        function: 'Content Research',
        desc: 'Monitors gaming trends, trending titles, and competitor content across TikTok, Instagram, YouTube, and Reddit. Delivers daily post-ready ideas with engagement context.',
        metrics: '18 ideas/day · multi-platform research',
        status: 'active',
      },
      {
        name: 'Trinity',
        color: '#10B981',
        function: 'HR & Training',
        desc: 'Screens incoming job applications, scores candidates against role criteria, generates interview questions, builds onboarding checklists, and creates training materials for any role.',
        metrics: 'Goal: automate the full hire-to-trained pipeline',
        status: 'building',
      },
    ],
  },
  {
    network: 'Digisales Network',
    networkColor: '#F97316',
    agents: [
      {
        name: 'Dan',
        color: '#F97316',
        function: 'Digital Sales Orchestrator',
        desc: 'Supervises the Digisales agent network. Routes customer queries to the right specialist agent, handles complex multi-step workflows, and escalates fraud or edge cases to a human.',
        metrics: 'Goal: fully autonomous digital sales pipeline from query to delivery',
        status: 'active',
      },
      {
        name: 'Ranger',
        color: '#F97316',
        function: 'Digital Sales Support',
        desc: 'Handles product questions, delivery status, redemption issues, and post-purchase support on the digital storefront. Knows the full catalog and escalates anything outside its scope.',
        metrics: '100% eval accuracy · 46 test cases',
        status: 'active',
      },
      {
        name: 'Book',
        color: '#FBBF24',
        function: 'Orders & Fulfillment',
        desc: 'Tracks every digital order through its full lifecycle — placed, processing, fulfilled, delivered. Flags delays, mismatches, and failed deliveries before customers ask.',
        metrics: 'Goal: zero manual order handling, full visibility on every order',
        status: 'building',
      },
      {
        name: 'Digidex',
        color: '#FBBF24',
        function: 'Product Knowledge',
        desc: 'The catalog expert. Knows compatibility, regional restrictions, platform differences, and bundle options across every digital product. Reduces wrong purchases and returns.',
        metrics: 'Goal: answer any product question instantly, zero wrong recommendations',
        status: 'building',
      },
    ],
  },
  {
    network: 'Personal',
    networkColor: '#8B5CF6',
    agents: [
      {
        name: 'Alfred',
        color: '#22D3EE',
        function: 'Personal Orchestrator',
        desc: 'Runs my personal ops — memory, scheduling, proactive monitoring, task routing, heartbeat checks, and coordinating all other agents. The system I interact with daily via Telegram.',
        metrics: '100+ tasks/month · always on',
        status: 'active',
      },
      {
        name: 'Linda',
        color: '#8B5CF6',
        function: 'Content Intelligence',
        desc: 'Researches trending topics in my target niches, monitors competitor content, and delivers daily post-ready drafts across TikTok, Instagram, and X. Runs every morning at 9 AM.',
        metrics: '18 ideas/day · TikTok · Instagram · X',
        status: 'active',
      },
      {
        name: 'Zero',
        color: '#F59E0B',
        function: 'Full-Stack Dev Agent',
        desc: 'Builds and maintains websites, web apps, and integrations on demand. Handles frontend, backend, and deployment — spawned as a PTY session for interactive coding tasks.',
        metrics: 'Goal: ship production-ready code from a single instruction',
        status: 'active',
      },
      {
        name: 'Degen',
        color: '#22C55E',
        function: 'Autonomous Trader',
        desc: 'Autonomous prediction market trading agent on Polymarket. Identifies high-signal opportunities using ICT strategy, tracks top traders, and executes USDC trades on Polygon.',
        metrics: 'Live wallet on Polygon · dry-run complete · going live',
        status: 'building',
      },
    ],
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

  const statusStyle = (status: AgentStatus) => ({
    color: status === 'active' ? 'rgba(34,197,94,0.7)' : status === 'building' ? 'rgba(251,191,36,0.7)' : 'rgba(99,102,241,0.7)',
    padding: '2px 8px',
    borderRadius: '4px',
    background: status === 'active' ? 'rgba(34,197,94,0.08)' : status === 'building' ? 'rgba(251,191,36,0.08)' : 'rgba(99,102,241,0.08)',
    border: `1px solid ${status === 'active' ? 'rgba(34,197,94,0.15)' : status === 'building' ? 'rgba(251,191,36,0.15)' : 'rgba(99,102,241,0.15)'}`,
  });

  const statusLabel = (status: AgentStatus) =>
    status === 'active' ? 'ACTIVE' : status === 'building' ? 'BUILDING' : 'BETA';

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
                {/* Left */}
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: project.accent, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                    {project.tag}
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.2 }}>
                    {project.title}
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

                {/* Right: impact */}
                <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(0,0,0,0.25)', border: `1px solid ${project.accent}15`, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '14px' }}>
                    Impact
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.impact.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
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

        {/* ── Deployed Agents — Full Network ─────────────────────────────── */}
        <div className="reveal" style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(34,211,238,0.5)' }}>
              Deployed Agent Network
            </span>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {deployedAgents.map((network) => (
            <div key={network.network} style={{ marginBottom: '36px' }}>
              {/* Network label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: network.networkColor, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', color: network.networkColor, textTransform: 'uppercase' }}>
                  {network.network}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
                {network.agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="reveal"
                    style={{ padding: '22px', borderRadius: '14px', background: 'rgba(5,12,20,0.6)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${agent.color}40, transparent)` }} />

                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <div>
                        <div style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.85rem', fontWeight: 600, color: agent.color, marginBottom: '2px' }}>
                          {agent.name.toLowerCase()}
                        </div>
                        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                          {agent.function}
                        </div>
                      </div>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', ...statusStyle(agent.status) }}>
                        {statusLabel(agent.status)}
                      </span>
                    </div>

                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.6, marginBottom: '12px' }}>
                      {agent.desc}
                    </p>

                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.63rem', color: `${agent.color}75`, paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.05)', lineHeight: 1.5 }}>
                      {agent.metrics}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
