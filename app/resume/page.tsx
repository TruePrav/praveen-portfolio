'use client'

import { useState } from 'react';

export default function Resume() {
  const [view, setView] = useState<'web3' | 'web2'>('web2');

  const web2Experience = [
    {
      role: 'Technical Operations Manager',
      company: 'Infinite Technology Inc. (PLAY Barbados)',
      period: '01/2024 – Present',
      responsibilities: [
        'Implemented and managed Freshdesk end-to-end, including staff training, support portal setup, workflows, and a full Knowledge Base.',
        'Led major improvements to the company’s online presence, including product updates, layout enhancements, and development of a new e-commerce platform for digital sales.',
        'Managed end-to-end marketing operations, including content planning, growth strategy, team coordination, and performance tracking.',
        'Introduced automation and AI-driven customer experience enhancements to increase efficiency, reduce manual workload, and improve customer satisfaction.',
        'Acted as the primary escalation point for complex support cases, resolving high-priority customer and supplier issues quickly and effectively.',
      ],
      tools: ['Freshdesk', 'Lightspeed', 'AI Tools', 'Spurnow', 'Wati', 'Slack', 'Google Suite','Fygaro','Canva','Supabase'],
    },
    {
      role: 'Technical Support Team Lead',
      company: 'Silverware POS',
      period: '05/2022 – 01/2024',
      responsibilities: [
        'Promoted from Analyst role due to strong performance and leadership ability.',
        'Led complex client support cases across phone, chat, and email for 500+ business accounts.',
        'Prioritized daily tasks based on urgency, impact, and client deadlines, demonstrating strong judgment and independence.',
        'Mentored junior agents, helping improve consistency and service excellence across the support team.',
      ],
      tools: ['Zendesk', 'Microsoft Teams', 'Outlook', 'Azure DevOps', 'SQL', 'Proprietary Remote Tools', 'Internal Cloud-Based Systems'],
    },
    {
      role: 'Technical Support Analyst',
      company: 'Silverware POS',
      period: '11/2021 – 05/2022',
      responsibilities: [
        'Provided frontline support for POS and back-office systems in a fast-paced SaaS environment.',
        'Diagnosed and resolved technical issues remotely, using Zendesk and remote access tools.',
        'Assisted with device setup, account provisioning, and onboarding new clients.',
        'Logged and escalated unresolved issues, contributing to faster triaging and team insights.',
      ],
      tools: ['Zendesk', 'Microsoft Teams', 'Outlook', 'Proprietary Remote Tools', 'Internal Cloud-Based Systems'],
    },
    {
      role: 'IT Coordinator',
      company: 'Green & Spiegel',
      period: '11/2019 – 07/2020',
      responsibilities: [
        'Delivered first-line support to 120+ professionals, resolving access, software, and technical issues across multiple platforms.',
        'Managed user provisioning, license control, and access escalations in Microsoft 365 and internal CRM tools.',
        'Logged service trends and submitted issue reports for team improvement, enhancing visibility into recurring cases.',
        'Ran internal cybersecurity simulations and delivered staff training to improve phishing awareness.',
        'Handled employee onboarding and offboarding, ensuring secure device setup and account access.',
      ],
      tools: ['Microsoft 365', 'Active Directory', 'SQL'],
    },
  ];

  const web3Experience = [
    {
      role: 'Collab Manager',
      company: 'EHive',
      period: '04/2024 – Present',
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
      period: '11/2024 – 01/2025',
      responsibilities: [
        'Encouraged users to try the app and guided them on usability.',
        'Collected user feedback and reported bugs to improve the app.',
        'Enforced community rules for a safe and engaging space.',
        'Assisted with announcements and newsletters.',
        'Provided prompt and professional support to users.',
      ],
      tools: ['Discord', 'Twitter', 'Telegram', 'Google Sheets','Notion'],
    },
    {
      role: 'Collab/Community Manager',
      company: 'The Tribe',
      period: '01/2022 – 12/2024',
      responsibilities: [
        'Secured 6,000+ whitelist spots, delivering 50+ ETH in potential profits.',
        'Managed partnership tracking and executed collaborations.',
        'Hosted Discord events to engage the community and reward users.',
        'Collected and analyzed feedback to improve strategies.',
      ],
      tools: ['Discord', 'Twitter', 'Telegram', 'Google Sheets','Airtable'],
    },
    {
      role: 'Project Manager',
      company: 'Artamei',
      period: '10/2022 – 03/2023',
      responsibilities: [
        'Managed final whitelist sheets and ensured all data was captured.',
        'Provided pre-mint strategy advice to the founder.',
        'Led moderators and collab managers with task delegation and scheduling.',
        'Organized high-engagement community events.',
      ],
      tools: ['Discord', 'Twitter', 'Telegram', 'Google Sheets',],
    },
  ];
  const experience = view === 'web3' ? web3Experience : web2Experience;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mt-16 text-3xl font-bold mb-8">Experience</h1>


      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => setView('web2')}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
            view === 'web2'
              ? 'bg-primary-600 text-white shadow-md ring-2 ring-primary-400'
              : 'bg-transparent text-white hover:bg-primary-700/20'
          }`}
        >
          Web2 Resume
        </button>
        <button
          onClick={() => setView('web3')}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
            view === 'web3'
              ? 'bg-primary-600 text-white shadow-md ring-2 ring-primary-400'
              : 'bg-transparent text-white hover:bg-primary-700/20'
          }`}
        >
          Web3 Resume
        </button>
      </div>

      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-accent/20" />
            <div className="absolute left-0 top-1/2 w-3 h-3 bg-accent rounded-full -mt-1.5" />

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-heading font-bold text-text-primary">{exp.role}</h2>
                <span className="text-sm text-text-secondary">{exp.period}</span>
              </div>
              <h3 className="text-text-primary">{exp.company}</h3>

              <div className="bg-neutral-900 text-white p-4 rounded-md shadow-sm">
                <ul className="list-disc list-inside text-text-secondary space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tools.map((tool, i) => (
                    <span key={i} className="status-badge">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
}
