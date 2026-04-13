'use client'

import { useState } from 'react';
import Nav from '../components/nav';

export default function Resume() {
  const [view, setView] = useState<'web3' | 'web2'>('web2');

  const web2Experience = [
    {
      role: 'AI Agent Engineer',
      company: 'Infinite Technology Inc. (PLAY Barbados)',
      period: '01/2024 - Present',
      responsibilities: [
        'Architected and deployed a production multi-agent AI system using LangChain, automating customer support, inventory reconciliation, and marketing workflows across 2 retail locations.',
        'Built specialized AI agents from scratch: Customer Service Agent (WhatsApp Business, 24/7 support), Inventory Reconciliation Agent (multi-system data synthesis from POS and suppliers), and Marketing Content Agent (brand voice consistency, multi-platform generation).',
        'Owned the complete Agent Development Life Cycle — designing evaluation workflows, running daily prompt iteration pipelines, handling edge cases, and continuously monitoring production performance.',
        'Designed LangSmith evaluation pipelines across 3 deployed agents — 73+ evals, 100% pass rate on customer support agent in production.',
        'Led major improvements to the company online presence including product updates, layout enhancements, and development of a new e-commerce platform for digital sales.',
      ],
      tools: ['Python', 'Node.js', 'LangChain', 'LangGraph', 'LangSmith', 'OpenClaw', 'WhatsApp Business API', 'Google Sheets API', 'Lightspeed POS', 'Freshdesk', 'AI Automation'],
    },
    {
      role: 'AI Engineer',
      company: 'Independent / Freelance',
      period: '01/2024 - Present',
      responsibilities: [
        'Built an AI-powered inventory replenishment tool for a Barbados clothing retailer — FastAPI backend with pydantic-ai and GPT-4o-mini that processes Lightspeed POS exports through a multi-stage match pipeline (exact, fuzzy, LLM fallback) to generate prioritized restock reports across 2 stores and a warehouse.',
        'Architected and shipped Digisales (digisales.ca) — a D2C digital gift card platform built on Next.js and Supabase, with AI-powered customer support agents handling real-time code delivery.',
        'Built autonomous trading infrastructure (Degen) on Polymarket using Python, Polygon/USDC, and ICT methodology — live prediction market bot with conviction scoring and risk management.',
        'Engineered Greenbox Barbados (greenboxbarbados.com) — full-stack platform for a vegan food delivery business in Barbados with online ordering, delivery management, and AI-assisted operations.',
        'Designed and deployed Alfred — a custom AI personal assistant operating 24/7 as a fully autonomous ops partner across PLAY Barbados and personal projects.',
      ],
      tools: ['Python', 'FastAPI', 'Next.js', 'Supabase', 'PostgreSQL', 'pydantic-ai', 'OpenAI GPT-4o-mini', 'LangChain', 'OpenClaw', 'Polygon/Web3', 'Render', 'Vercel'],
    },
    {
      role: 'Technical Support Team Lead',
      company: 'Silverware POS',
      period: '05/2022 - 12/2023',
      responsibilities: [
        'Promoted from Analyst to Team Lead within 6 months based on performance and leadership ability.',
        'Coached and mentored Level 1 Technical Support Analysts through scorecards, training sessions, and daily guidance.',
        'Led complex client support cases across phone, chat, and email for 500+ business accounts.',
        'Handled client and internal escalations, performed software and hardware testing, and completed on-site implementation tasks.',
        'Ensured efficient operation of the Technical Support team through analysis, reporting, and deficiency recreation.',
      ],
      tools: ['Zendesk', 'Microsoft Teams', 'Outlook', 'Azure DevOps', 'SQL', 'Remote Access Tools', 'Internal Cloud Systems'],
    },
    {
      role: 'Technical Support Analyst',
      company: 'Silverware POS',
      period: '11/2021 - 05/2022',
      responsibilities: [
        'Provided Level 1 Technical Support for POS and back-office systems via telephone and remote access.',
        'Resolved issues across networking (switches/routers), hardware (POS workstations, printers, pin-pads), and their respective software.',
        'Maintained communication with third-party vendors: Epson, Maestro PMS, Merchant Processors, Clover, HotSchedules.',
        'Established and repaired cluster Quorum in multi-server database environments.',
        'Collected and maintained a problems-and-solutions log to accelerate team triaging. Worked in a 24/7 environment.',
      ],
      tools: ['Zendesk', 'Microsoft Teams', 'SQL', 'Clover', 'HotSchedules', 'Epson', 'Remote Access Tools'],
    },
    {
      role: 'IT Coordinator',
      company: 'Green & Spiegel',
      period: '11/2019 - 07/2020',
      responsibilities: [
        'Delivered day-to-day technical support to 120+ employees, logging all solutions and repairs in ticketing system.',
        'Managed creation, deletion, and administration of Active Directory and proprietary software user accounts.',
        'Ran internal cybersecurity simulations and delivered phishing awareness training to all staff.',
        'Diagnosed, troubleshot, and resolved hardware, software, and network issues across the firm.',
        'Created custom reports on SQL database and assisted managers with tasks to maintain productivity.',
      ],
      tools: ['Microsoft 365', 'Active Directory', 'SQL'],
    },
  ];

  const web3Experience = [
    {
      role: 'Community / Collab Manager',
      company: 'EHive',
      period: '04/2024 - 04/2025',
      responsibilities: [
        'Organized and hosted AMAs to educate the EHive community about new Web3 projects.',
        'Facilitated cross-community collaborations to expand outreach and network strength.',
        'Maintained and enforced server rules to ensure a safe and inclusive environment.',
        'Welcomed newcomers and created fun, interactive spaces to boost retention.',
      ],
      tools: ['Discord', 'Twitter', 'Telegram', 'Google Sheets'],
    },
    {
      role: 'Moderator',
      company: 'Jen AI',
      period: '11/2024 - 01/2025',
      responsibilities: [
        'Encouraged users to try the app and guided them on usability.',
        'Collected user feedback and reported bugs to improve the app.',
        'Enforced community rules for a safe and engaging space.',
        'Assisted with announcements and newsletters.',
        'Provided prompt and professional support to users.',
      ],
      tools: ['Discord', 'Twitter', 'Telegram', 'Google Sheets', 'Notion'],
    },
    {
      role: 'Collab / Community Manager',
      company: 'The Tribe',
      period: '01/2022 - 12/2024',
      responsibilities: [
        'Secured 6,000+ whitelist spots, delivering 50+ ETH in potential profits.',
        'Managed partnership tracking and executed collaborations.',
        'Hosted Discord events to engage the community and reward users.',
        'Collected and analyzed feedback to improve strategies.',
      ],
      tools: ['Discord', 'Twitter', 'Telegram', 'Google Sheets', 'Airtable'],
    },
    {
      role: 'Project Manager',
      company: 'Artamei',
      period: '10/2022 - 03/2023',
      responsibilities: [
        'Managed final whitelist sheets and ensured all data was captured.',
        'Provided pre-mint strategy advice to the founder.',
        'Led moderators and collab managers with task delegation and scheduling.',
        'Organized high-engagement community events.',
      ],
      tools: ['Discord', 'Twitter', 'Telegram', 'Google Sheets'],
    },
  ];

  const experience = view === 'web3' ? web3Experience : web2Experience;

  return (
    <div style={{ minHeight: '100vh', background: '#0D1117', paddingBottom: '80px' }}>
      <Nav />
      <div className="container mx-auto px-6 max-w-4xl" style={{ paddingTop: '120px' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22D3EE', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '12px' }}>
            EXPERIENCE
          </p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, color: '#F0F6FC', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Praveen Mahtani
          </h1>
          <p style={{ color: 'rgba(240,246,252,0.5)', fontSize: '1rem' }}>
            AI Agent Engineer — Toronto, Canada
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', padding: '4px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', width: 'fit-content' }}>
          {(['web2', 'web3'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setView(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: '7px',
                fontSize: '0.82rem',
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '0.03em',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: view === tab ? '#22D3EE' : 'transparent',
                color: view === tab ? '#0D1117' : 'rgba(240,246,252,0.5)',
                boxShadow: view === tab ? '0 2px 12px rgba(34,211,238,0.3)' : 'none',
              }}
            >
              {tab === 'web2' ? 'Web2 Resume' : 'Web3 Resume'}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {experience.map((exp, index) => (
            <div
              key={index}
              style={{
                padding: '28px 32px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: '3px solid rgba(34,211,238,0.4)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#F0F6FC', margin: 0 }}>
                  {exp.role}
                </h2>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'rgba(240,246,252,0.35)', letterSpacing: '0.05em', flexShrink: 0 }}>
                  {exp.period}
                </span>
              </div>

              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: '#22D3EE', marginBottom: '18px' }}>
                {exp.company}
              </p>

              <ul style={{ margin: '0 0 20px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'rgba(240,246,252,0.6)', lineHeight: 1.65 }}>
                    <span style={{ color: '#22D3EE', flexShrink: 0, marginTop: '1px' }}>+</span>
                    {resp}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.tools.map((tool, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: '0.04em',
                      color: 'rgba(34,211,238,0.8)',
                      background: 'rgba(34,211,238,0.08)',
                      border: '1px solid rgba(34,211,238,0.18)',
                      borderRadius: '5px',
                      padding: '3px 9px',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
