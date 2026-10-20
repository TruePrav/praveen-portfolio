// Shared content module for praveenmahtani.xyz.
// Plain data only: no React, no JSX, no 'use client'. Every page and every
// design variant imports from here. Icons are chosen by renderers, not here.

export type Status = 'live' | 'production' | 'in-dev' | 'shipped' | 'paused';

export interface Site {
  name: string;
  url: string;
  role: string;
  title: string;
  description: string;
  location: string;
  email: string;
  availability: string;
  socials: { label: string; handle: string; href: string }[];
  photo: string;
}

export interface Stat {
  value: string;
  label: string;
  href?: string;
}

export interface Hero {
  eyebrow: string;
  headline: string;
  sub: string;
  stats: Stat[];
  primaryCta: { label: string; target: string };
  secondaryCta: { label: string; target: string };
}

export interface Project {
  slug: string;
  title: string;
  kind: string;
  status: Status;
  statusLabel: string;
  url?: string;
  period?: string;
  summary: string;
  detail: string;
  outcomes: string[];
  stack: string[];
  accent: string;
  featured?: boolean;
  logo?: Logo;
}

export interface AgentEntry {
  name: string;
  role: string;
  status: 'live' | 'scheduled' | 'paused' | 'in-dev';
  cadence?: string;
}

export interface AgentNetwork {
  intro: string;
  orchestrator: AgentEntry;
  agents: AgentEntry[];
  infrastructure: string[];
}

export interface SkillGroup {
  category: string;
  accent: string;
  items: string[];
}

export interface About {
  heading: string;
  paragraphs: string[];
  facts: { label: string; value: string; href?: string }[];
}

export interface Contact {
  heading: string;
  blurb: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  tools: string[];
  logo?: Logo;
}

// tone: 'light' = logo has dark ink, place on a light plate; 'dark' = light ink,
// place on a dark plate. srcOnDark, when present, is a variant made for dark plates.
export interface Logo {
  src: string;
  alt: string;
  tone: 'light' | 'dark';
  srcOnDark?: string;
  // Brand background colour for the plate behind the logo (overrides the tone default).
  plate?: string;
  // An illustration rather than a logo: fills the tile edge to edge.
  art?: boolean;
}

export interface Reference {
  slug: string;
  name: string;
  url?: string;
  relationship: string;
  summary: string;
  period?: string;
  logo?: Logo;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  detail: string;
  url?: string;
}

export interface Resume {
  web2: Experience[];
  web3: Experience[];
  certifications: Certification[];
}

// Public Credly badge for the Anthropic CCA-F certification.
const CCAF_URL = 'https://www.credly.com/badges/466975c6-89bc-4748-9af0-f33688201e9c';

export const site: Site = {
  name: 'Praveen Mahtani',
  url: 'https://www.praveenmahtani.xyz',
  role: 'AI Agent Engineer',
  title: 'Praveen Mahtani | AI Agent Engineer',
  description:
    'Praveen Mahtani is an AI Agent Engineer in Toronto who designs and runs multi-agent systems in production.',
  location: 'Toronto, Canada',
  email: 'praveen@ailevelup.ca',
  availability: 'Open to applied AI roles and consulting',
  socials: [
    { label: 'X', handle: '@TruePrav', href: 'https://x.com/TruePrav' },
    { label: 'LinkedIn', handle: 'praveen-mahtani', href: 'https://linkedin.com/in/praveen-mahtani' },
    { label: 'GitHub', handle: 'TruePrav', href: 'https://github.com/TruePrav' },
  ],
  photo: '/praveenpfp.jpeg',
};

export const hero: Hero = {
  eyebrow: 'AI Agent Engineer, Toronto',
  headline: 'I design multi-agent systems and keep them running in production.',
  sub:
    "I run production agent networks for a retail business in Barbados and for SMB clients through LevelUp Enterprises. I orchestrate my own development work with a multi-model agent layer, and I'm Anthropic CCA-F certified.",
  stats: [
    { value: '30+', label: 'projects under one orchestration layer' },
    { value: 'CCA-F', label: 'Anthropic certified architect, 2026', href: CCAF_URL },
  ],
  primaryCta: { label: 'See my work', target: 'work' },
  secondaryCta: { label: 'Get in touch', target: 'contact' },
};

export const projects: Project[] = [
  {
    slug: 'play-barbados',
    logo: { src: '/logos/play.png', alt: 'PLAY Barbados logo', tone: 'dark', plate: '#00006E' },
    title: 'PLAY Barbados',
    kind: 'Production system',
    status: 'production',
    statusLabel: 'In production since 2024',
    url: 'https://play.bb',
    period: '2024 to present',
    summary:
      'Customer support, finance reconciliation, and purchasing automation for a two-location gaming retailer in Barbados.',
    detail:
      'Support, reconciliation, and purchasing for two stores were spread across WhatsApp, a POS, and spreadsheets. They now run as one automated system in daily production.',
    outcomes: [
      'Customer support answered automatically, with handoff to staff when needed',
      'Daily finance reconciliation replaced a manual process',
      'Purchase orders now created automatically',
    ],
    stack: [
      'Python',
      'LangChain',
      'LangGraph',
      'LangSmith',
      'Claude',
      'Grok',
      'WhatsApp Business API',
      'Lightspeed POS',
      'Counterpoint (MSSQL)',
      'Google Sheets API',
      'Slack',
      'Telegram',
    ],
    accent: '#22D3EE',
    featured: true,
  },
  {
    slug: 'alfred-orchestration',
    logo: {
      src: '/alfred-orchestrator.webp',
      alt: 'Illustration of Alfred at the top of an org chart directing nine specialist agents',
      tone: 'dark',
      plate: '#0b1a19',
      art: true,
    },
    title: 'Alfred, the orchestration layer',
    kind: 'Private infrastructure',
    status: 'live',
    statusLabel: 'Live',
    period: '2026',
    summary: 'A private orchestration layer that coordinates the work across every project I run.',
    detail:
      'Running 30+ projects without a system does not scale. Alfred plans and reviews the work across all of them while keeping spend under control.',
    outcomes: [
      'Coordinates 30+ projects in one place',
      'Keeps model spend low on routine work',
      'Live and in daily use',
    ],
    stack: [
      'Claude Agent SDK',
      'Claude Code',
      'Codex CLI',
      'Python',
      'TypeScript',
      'MCP',
      'Obsidian',
      'Windows Task Scheduler',
      'Telegram',
    ],
    accent: '#F5B93E',
    featured: true,
  },
  {
    slug: 'levelup-enterprises',
    logo: { src: '/logos/levelup.png', alt: 'AIlevelUp logo', tone: 'dark' },
    title: 'LevelUp Enterprises',
    kind: 'Founder and Technical Lead',
    status: 'live',
    statusLabel: 'Live',
    url: 'https://ailevelup.ca',
    period: 'Nov 2025 to present',
    summary: 'AI automation for small and medium businesses, built and run as my own company.',
    detail:
      'Small businesses need AI agents and tooling without an engineering team. LevelUp delivers both as done-for-you deployments, backed by a product line I build and run myself.',
    outcomes: [
      'Done-for-you deployment, no client engineering team needed',
      'Products for messaging, delivery, voice, hiring, and websites',
      'Products live with real businesses',
    ],
    stack: ['Next.js', 'Supabase', 'Node.js', 'Anthropic', 'OpenAI', 'Grok', 'WhatsApp Business API', 'Vercel'],
    accent: '#8B5CF6',
    featured: true,
  },
  {
    slug: 'digisales',
    logo: { src: '/logos/digisales.png', alt: 'Digisales logo', tone: 'light', srcOnDark: '/logos/digisales-on-dark.png' },
    title: 'Digisales',
    kind: 'Product',
    status: 'live',
    statusLabel: 'Live',
    url: 'https://digisales.ca',
    summary:
      'A storefront for digital gift cards, with card payments, automated code delivery, and a support agent.',
    detail:
      'Selling digital codes online risks charging customers for something that cannot be delivered. Digisales delivers codes automatically after payment and answers customer questions with a support agent.',
    outcomes: [
      'Digital codes delivered automatically after payment',
      'Customer questions answered by a support agent',
      'Live at digisales.ca',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'LangChain', 'Moneris', 'Resend'],
    accent: '#22D3EE',
    featured: true,
  },
  {
    slug: 'greenbox-barbados',
    logo: { src: '/logos/greenbox.jpg', alt: 'Greenbox Barbados logo', tone: 'light' },
    title: 'Greenbox Barbados',
    kind: 'Client build',
    status: 'live',
    statusLabel: 'Live, taking orders',
    url: 'https://greenboxbarbados.com',
    summary: 'An ordering and delivery platform for a vegan food business in Barbados.',
    detail:
      'The weekly menu changes, and typing it in by hand is slow. Greenbox now loads menus from PDFs or images and takes live customer orders.',
    outcomes: [
      'Live and taking orders',
      'Weekly menu loaded from a PDF or image',
      'Delivery routing runs on LevelUp Dispatch',
    ],
    stack: ['Next.js', 'Supabase', 'Vercel', 'OpenAI', 'Node test runner'],
    accent: '#22C55E',
    featured: true,
  },
  {
    slug: 'voice-reservation-agent',
    title: 'AI phone reservation agent',
    kind: 'Voice agent platform',
    status: 'in-dev',
    statusLabel: 'Pilot',
    period: '2026',
    summary:
      'An AI phone host for restaurants, bars, and hotels in Barbados that answers calls and takes reservations.',
    detail:
      'Venues miss calls during service, and generic voice agents struggle with local speech. This agent answers, books, and passes messages to staff, and is now piloting on a real phone line.',
    outcomes: [
      'Answering calls on a real phone line in pilot',
      'Takes reservations and messages for staff',
      'Client onboarding portal live',
    ],
    stack: [
      'Python',
      'Vapi',
      'ElevenLabs',
      'Deepgram',
      'Next.js',
      'Supabase',
      'Deno',
      'Playwright',
      'IndexedDB',
      'Vercel',
    ],
    accent: '#3DD68C',
  },
  {
    slug: 'instant-site',
    title: 'AIlevelUp Instant Site',
    kind: 'Product',
    status: 'in-dev',
    statusLabel: 'In development',
    period: '2026',
    summary: 'A questionnaire that turns a few answers into a designed, working website for a small business.',
    detail:
      'Small businesses need a website without hiring a designer. A short questionnaire aims to produce a complete, on-brand site quickly.',
    outcomes: [
      'Questionnaire to complete website in one flow',
      'Sites include working contact, booking, and order forms',
      'In active development',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Zod',
      'Supabase',
      'Anthropic Claude',
      'Vitest',
      'Playwright',
      'axe-core',
      'Lighthouse',
    ],
    accent: '#8B5CF6',
  },
  {
    slug: 'merit',
    title: 'Merit',
    kind: 'Product',
    status: 'in-dev',
    statusLabel: 'Beta',
    url: 'https://merit.ailevelup.ca',
    period: '2026',
    summary:
      'A hiring app that brings applicants from every source into one pipeline and screens them with AI.',
    detail:
      'Hiring teams re-read the same resumes for every new role. Merit gathers applicants in one place and helps reviewers shortlist them faster.',
    outcomes: [
      'Applicants from every source in one pipeline',
      'AI-assisted screening with results a reviewer can explain',
      'Currently in beta',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Anthropic', 'Vercel'],
    accent: '#F5B93E',
  },
  {
    slug: 'ailevelup-connect',
    title: 'AIlevelUp Connect',
    kind: 'Product',
    status: 'production',
    statusLabel: 'In production',
    url: 'https://connect.ailevelup.ca',
    period: '2026',
    summary:
      'A messaging platform that lets a business run customer conversations on WhatsApp and email from one inbox.',
    detail:
      'WhatsApp has strict messaging rules, and breaking them can cost a business its number. Connect keeps businesses compliant while their team handles every conversation in one place.',
    outcomes: [
      'Passed Meta App Review for WhatsApp Advanced Access',
      'WhatsApp and email conversations in one inbox',
      'In production',
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Supabase',
      'Postgres RLS',
      'pgmq',
      'WhatsApp Cloud API',
      'Resend',
      'Vercel',
    ],
    accent: '#22C55E',
  },
  {
    slug: 'dispatch-route-manager',
    title: 'LevelUp Dispatch',
    kind: 'Product, built with a courier operator',
    status: 'production',
    statusLabel: 'In production',
    url: 'https://dispatch.ailevelup.ca',
    period: '2026',
    summary:
      'A delivery route manager for small Caribbean courier businesses, with driver manifests and proof of delivery.',
    detail:
      "Standard routing tools fail on Barbados addresses, which often do not geocode. Dispatch gives courier teams reliable routes and proof of delivery, built with an operator's feedback.",
    outcomes: [
      'Route planning for runs of 50+ stops',
      'Drivers capture proof of delivery on their phones',
      'Live with a real courier operator',
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Supabase',
      'Google Route Optimization API',
      'zxing',
      'Playwright',
      'PWA',
      'Vercel',
    ],
    accent: '#60A5FA',
  },
  {
    slug: 'inventory-replenishment',
    title: 'Inventory Replenishment App',
    kind: 'Client build',
    status: 'shipped',
    statusLabel: 'Shipped',
    period: '2025',
    summary:
      'A restock tool for a Barbados clothing retailer that turns POS exports into a prioritized restock report.',
    detail:
      'Restocking across two stores and a warehouse needs a clear priority list. The tool turns POS exports into a prioritized restock report ready to import.',
    outcomes: [
      'One run covers two stores and a warehouse',
      'Report imports straight into the POS',
      'Shipped to a retail client',
    ],
    stack: ['Python', 'FastAPI', 'pydantic-ai', 'GPT-4o-mini', 'rapidfuzz', 'Render'],
    accent: '#F97316',
  },
  {
    slug: 'truebot',
    title: 'TrueBot',
    kind: 'Private toolkit',
    status: 'live',
    statusLabel: 'Active',
    period: '2026',
    summary: 'A self-hosted Web3 toolkit for wallet management and mint automation across several chains.',
    detail:
      'Web3 projects need reliable wallet and mint tooling they control. TrueBot is a private toolkit for managing wallets and automating mints on EVM chains, Solana, and Bitcoin ordinals.',
    outcomes: [
      'Supports EVM chains, Solana, and Bitcoin ordinals',
      'Smart contract deployed and verified on mainnet',
      'In active use',
    ],
    stack: ['TypeScript', 'viem', 'Solidity', 'Solana/Anchor', 'bitcoinjs-lib', 'Playwright', 'AWS EC2', 'Linux'],
    accent: '#F5B93E',
  },
  {
    slug: 'jobpilot',
    title: 'JobPilot',
    kind: 'Product',
    status: 'in-dev',
    statusLabel: 'In development, running privately',
    summary: 'A job search platform that finds and scores roles, tailors resumes, and tracks applications.',
    detail:
      'Job searching means scanning many sources and tailoring every application. JobPilot handles the scanning and tracking, and is running privately for its first user.',
    outcomes: [
      'Running privately for its first user',
      'Interview tracking from email',
      'Never submits an application automatically',
    ],
    stack: ['Next.js', 'SQLite', 'Claude', 'Gmail API', 'Docker', 'Playwright'],
    accent: '#A78BFA',
  },
];

export const agentNetwork: AgentNetwork = {
  intro:
    'Alfred plans the work, delegates it to cheaper models, and reviews what comes back. Each specialist agent owns one domain and reports over Telegram or Slack.',
  orchestrator: {
    name: 'Alfred',
    role: 'Runs the whole team',
    status: 'live',
    cadence: 'always on',
  },
  agents: [
    {
      name: 'Scout',
      role: 'Customer support',
      status: 'live',
      cadence: '24/7',
    },
    {
      name: 'Ledger',
      role: 'Finance reconciliation',
      status: 'live',
      cadence: 'daily 22:00 and 07:00',
    },
    {
      name: 'Prophet',
      role: 'Purchasing',
      status: 'live',
      cadence: 'event-driven',
    },
    {
      name: 'Mira',
      role: 'Motion design',
      status: 'in-dev',
      cadence: 'on demand',
    },
    {
      name: 'Lux',
      role: 'Job search',
      status: 'live',
      cadence: 'daily 07:30',
    },
    {
      name: 'Linda',
      role: 'Content research',
      status: 'paused',
      cadence: 'daily',
    },
    {
      name: 'Argus',
      role: 'QA testing',
      status: 'live',
      cadence: 'on demand',
    },
    {
      name: 'Sage',
      role: 'AI research',
      status: 'live',
      cadence: 'daily 06:30',
    },
    {
      name: 'Molly',
      role: 'Social content',
      status: 'in-dev',
      cadence: 'on demand',
    },
  ],
  infrastructure: [
    'Multi-model routing with automatic fallback',
    'Guardrails that check safety before anything runs',
    'Cost and usage tracking across every model',
    'Scheduled reviews that keep every project on track',
  ],
};

export const skills: SkillGroup[] = [
  {
    category: 'AI and agents',
    accent: '#22D3EE',
    items: [
      'Claude Agent SDK',
      'LangChain',
      'LangGraph',
      'LangSmith evals',
      'MCP tool design',
      'Multi-model routing',
      'OpenAI',
      'xAI Grok',
      'Gemini',
      'DeepSeek',
      'Codex CLI',
      'OpenClaw',
      'Voice agents (Vapi, ElevenLabs, Deepgram)',
      'RAG',
      'Prompt design',
    ],
  },
  {
    category: 'Backend and data',
    accent: '#8B5CF6',
    items: [
      'Python',
      'FastAPI',
      'pydantic-ai',
      'Node.js',
      'TypeScript',
      'Hono',
      'PostgreSQL',
      'Supabase',
      'MSSQL',
      'Row-level security',
      'Queue-driven workers (pgmq)',
      'REST APIs',
      'Moneris payments',
      'Scheduled jobs',
    ],
  },
  {
    category: 'Frontend and mobile',
    accent: '#3DD68C',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Capacitor', 'Playwright', 'Responsive design'],
  },
  {
    category: 'Web3',
    accent: '#F5B93E',
    items: ['Solidity', 'viem', 'Solana and Anchor', 'Bitcoin ordinals', 'EVM chains', 'Wallet infrastructure'],
  },
  {
    category: 'Ops and integrations',
    accent: '#60A5FA',
    items: [
      'Linux',
      'AWS EC2',
      'Vercel',
      'Render',
      'Tailscale',
      'WhatsApp Business API',
      'Telegram',
      'Discord',
      'Slack',
      'N8N',
      'Shopify',
      'Lightspeed POS',
      'Counterpoint POS',
      'Google Sheets API',
      'Obsidian',
    ],
  },
];

export const exploring: string[] = [
  'Caribbean-accent speech recognition',
  'Agent memory architectures',
  'Evaluation frameworks',
  'On-device agents',
];

export const about: About = {
  heading: 'The person behind the agents',
  paragraphs: [
    "I was born in Chile, raised in Barbados, and I'm based in Toronto now. My obsession with games, music, and computer hardware made me curious about how everything works, and that curiosity kept me learning and on top of new technology. Building AI agents that perform in production is the natural next step.",
    'I run technical operations for a family-owned gaming retail business with two locations in Barbados, and in November 2025 I founded LevelUp Enterprises to bring the same agent systems to other small and medium businesses.',
    'Every system I build solves a problem I hit first. I think of agents as a network of specialists, not one tool.',
    "I'm Claude Certified Architect, Foundations (CCA-F), certified by Anthropic in July 2026, and I'm open to applied AI roles and consulting.",
  ],
  facts: [
    { label: 'Based in', value: 'Toronto, Canada' },
    { label: 'Roles', value: 'AI Agent Engineer, Infinite Technology Inc. (PLAY Barbados)' },
    { label: 'Founder', value: 'LevelUp Enterprises Inc.', href: 'https://ailevelup.ca' },
    { label: 'Certified', value: 'Claude Certified Architect, Foundations (Anthropic, 2026)', href: CCAF_URL },
    { label: 'Stack', value: 'Python, TypeScript, Next.js, Claude Agent SDK, LangGraph, Supabase' },
    { label: 'Online', value: '@TruePrav', href: 'https://x.com/TruePrav' },
  ],
};

export const contact: Contact = {
  heading: "Let's build something\nworth running.",
  blurb:
    "I'm open to applied AI engineering roles, consulting, and systems that need to run without a person in the loop.",
};

export const resume: Resume = {
  web2: [
    {
      role: 'Founder and Technical Lead',
      company: 'LevelUp Enterprises Inc.',
      logo: { src: '/logos/levelup.png', alt: 'AIlevelUp logo', tone: 'dark' },
      period: '11/2025 - Present',
      responsibilities: [
        'Building a 7-agent platform (Ally, Sterling, Nova, Pulse, Atlas, Forge, Barney) for SMB clients, each agent scoped to one business function: support, finance, sales, ops, marketing, coding, and HR, with hot-swap fallback routing across OpenAI, Anthropic, and Grok.',
        'Shipped ailevelup-connect, a WhatsApp Business SaaS product, to production behind a 26-check smoke suite.',
        'Built an AI phone reservation agent for hospitality venues in Barbados on Vapi, ElevenLabs, and Deepgram, provisioned entirely from code per venue, with a client onboarding portal that records a guided voice interview and recovers from crashes and network drops through an offline-safe outbox, covered by 84 Playwright end-to-end tests.',
        'Built a multi-tenant delivery dispatch and route manager for a courier operator: route optimization, driver manifests, barcode scan-in, proof of delivery, and failed-stop redelivery, shipped in iterative rounds against live client feedback with end-to-end test suites of 50+ tests.',
      ],
      tools: ['Next.js', 'Supabase', 'Node.js', 'OpenAI', 'Anthropic', 'Grok', 'WhatsApp Business API', 'Vapi', 'ElevenLabs', 'Deepgram', 'Playwright', 'Vercel'],
    },
    {
      role: 'AI Agent Engineer',
      company: 'Infinite Technology Inc. (PLAY Barbados)',
      logo: { src: '/logos/play.png', alt: 'PLAY Barbados logo', tone: 'dark', plate: '#00006E' },
      period: '01/2024 - Present',
      responsibilities: [
        'Architected and deployed a production multi-agent AI system using LangChain, automating customer support, inventory reconciliation, and purchasing across 2 retail locations.',
        'Built Scout, a customer support agent on WhatsApp and Telegram, behind a guard layer that hardens the send path before anything reaches a customer.',
        'Built Ledger, a daily reconciliation agent for POS sales and digital-code pools, with unposted-ticket alerts at 10 PM and 7 AM, backed by 147 tests.',
        'Built Prophet, a purchase-order pipeline that turns Amazon orders into Lightspeed purchase orders.',
        'Designed LangSmith evaluation pipelines across 3 deployed agents: 73+ evals, 100% pass rate on the customer support agent in production, now handling 200+ customer interactions a day.',
      ],
      tools: [
        'Python',
        'Node.js',
        'LangChain',
        'LangGraph',
        'LangSmith',
        'WhatsApp Business API',
        'Google Sheets API',
        'Lightspeed POS',
        'Counterpoint (MSSQL)',
      ],
    },
    {
      role: 'AI Engineer',
      company: 'Independent / Freelance',
      period: '01/2024 - Present',
      responsibilities: [
        'Built an AI-powered inventory replenishment tool for a Barbados clothing retailer: FastAPI backend with pydantic-ai and GPT-4o-mini processing Lightspeed POS exports through a multi-stage match pipeline (exact, fuzzy, LLM fallback) to generate prioritized restock reports across 2 stores and a warehouse.',
        'Architected and shipped Digisales (digisales.ca): a direct-to-consumer digital gift card platform built on Next.js and Supabase, with automated code delivery, a support agent handling customer questions, and a hardening program covering RBAC, idempotent orders, private storage, and encrypted KYC data.',
        'Built TrueBot, a self-hosted Web3 automation toolkit for wallet management and mint automation across EVM chains, Solana, and Bitcoin ordinals, including a Solidity factory contract for batch minting deployed and verified on mainnet, and a signer with byte-identical parity to bitcoinjs-lib.',
        'Engineered Greenbox Barbados (greenboxbarbados.com): a full-stack ordering platform for a vegan food business in Barbados, with server-side pricing and cart validation and AI-assisted menu extraction.',
        'Designed and deployed Alfred, a multi-model orchestration layer that plans, delegates to cheaper models, and reviews the results across 30+ projects.',
      ],
      tools: [
        'Python',
        'FastAPI',
        'Next.js',
        'Supabase',
        'PostgreSQL',
        'pydantic-ai',
        'TypeScript',
        'Playwright',
        'Vercel',
        'Render',
      ],
    },
    {
      role: 'Technical Support Team Lead',
      company: 'Silverware POS',
      logo: { src: '/logos/silverware.png', alt: 'Silverware POS logo', tone: 'light' },
      period: '05/2022 - 12/2023',
      responsibilities: [
        'Promoted from Analyst to Team Lead within 6 months based on performance and leadership ability.',
        'Supervised 20+ support agents, coaching them through complex technical issues and developing training materials that improved first-contact resolution by 25%.',
        'Owned SLA compliance and escalation triage across 500+ client accounts, resolving complex cross-system issues spanning POS integrations, APIs, and payment processors.',
        'Built the internal knowledge base and troubleshooting playbooks that cut resolution time and shortened ramp-up for new hires.',
      ],
      tools: ['Zendesk', 'Microsoft Teams', 'Outlook', 'Azure DevOps', 'SQL', 'Remote Access Tools', 'Internal Cloud Systems'],
    },
    {
      role: 'Technical Support Analyst',
      company: 'Silverware POS',
      logo: { src: '/logos/silverware.png', alt: 'Silverware POS logo', tone: 'light' },
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
        'Delivered day-to-day technical support to 100+ internal users, logging all solutions and repairs in a ticketing system.',
        'Managed creation, deletion, and administration of Active Directory and proprietary software user accounts.',
        'Ran internal cybersecurity simulations and delivered phishing awareness training to all staff.',
        'Diagnosed, troubleshot, and resolved hardware, software, and network issues across the firm.',
        'Wrote SQL-based operational reports for audits and compliance tracking.',
      ],
      tools: ['Microsoft 365', 'Active Directory', 'SQL'],
    },
  ],
  web3: [
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
  ],
  certifications: [
    {
      name: 'Claude Certified Architect, Foundations (CCA-F)',
      issuer: 'Anthropic',
      date: 'July 2026',
      detail:
        'Proctored certification covering agent architecture, context management, multi-agent orchestration, production reliability, and tool and MCP design.',
      url: CCAF_URL,
    },
  ],
};

export const references: Reference[] = [
  {
    slug: 'play-barbados',
    logo: { src: '/logos/play.png', alt: 'PLAY Barbados logo', tone: 'dark', plate: '#00006E' },
    name: 'PLAY Barbados (Infinite Technology Inc.)',
    url: 'https://play.bb',
    relationship: 'Built and run their AI operations stack',
    summary:
      'A two-location gaming retailer in Barbados. Their support, finance, and purchasing run on AI systems I built and operate.',
    period: '2024 to present',
  },
  {
    slug: 'levelup-enterprises',
    logo: { src: '/logos/levelup.png', alt: 'AIlevelUp logo', tone: 'dark' },
    name: 'LevelUp Enterprises Inc.',
    url: 'https://ailevelup.ca',
    relationship: 'Founded and run it',
    summary:
      'My company: done-for-you AI automation and products for small and medium businesses.',
    period: 'Nov 2025 to present',
  },
  {
    slug: 'digisales',
    logo: { src: '/logos/digisales.png', alt: 'Digisales logo', tone: 'light', srcOnDark: '/logos/digisales-on-dark.png' },
    name: 'Digisales',
    url: 'https://digisales.ca',
    relationship: 'Built and operate the storefront and its support agent',
    summary:
      'An online store for digital gift cards with instant delivery and AI customer support.',
  },
  {
    slug: 'greenbox-barbados',
    logo: { src: '/logos/greenbox.jpg', alt: 'Greenbox Barbados logo', tone: 'light' },
    name: 'Greenbox Barbados',
    url: 'https://greenboxbarbados.com',
    relationship: 'Built their ordering platform',
    summary:
      'Online ordering and delivery for a vegan food business in Barbados.',
  },
  {
    slug: 'silverware-pos',
    logo: { src: '/logos/silverware.png', alt: 'Silverware POS logo', tone: 'light' },
    name: 'Silverware POS',
    relationship: 'Technical support analyst, then team lead',
    summary:
      'Supported POS systems for client accounts, then led a team of 20+ support agents.',
    period: 'Nov 2021 to Dec 2023',
  },
];
