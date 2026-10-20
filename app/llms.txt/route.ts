// Plain-text profile for AI readers (llmstxt.org format), built from the same
// content module as the pages so it never drifts from the site.
import { about, agentNetwork, contact, projects, references, resume, site, skills } from '../content';
import type { Experience } from '../content';

export const dynamic = 'force-static';

const bullets = (items: string[]) => items.map((i) => `- ${i}`).join('\n');

function experience(e: Experience) {
  return [
    `### ${e.role}, ${e.company} (${e.period})`,
    bullets(e.responsibilities),
    `Tools: ${e.tools.join(', ')}`,
  ].join('\n');
}

function build() {
  const parts = [
    `# ${site.name}`,
    `> ${site.description}`,
    [
      `- Role: ${site.role}`,
      `- Location: ${site.location}`,
      `- Email: ${site.email}`,
      `- Availability: ${site.availability}`,
      ...site.socials.map((so) => `- ${so.label}: ${so.href}`),
      `- Website: ${site.url}`,
      `- Resume: ${site.url}/resume`,
    ].join('\n'),

    `## About\n\n${about.paragraphs.join('\n\n')}`,

    `## Businesses I build for\n\n${references
      .map((r) => `- ${r.url ? `[${r.name}](${r.url})` : r.name}: ${r.relationship}. ${r.summary}`)
      .join('\n')}`,

    `## Projects\n\n${projects
      .map((p) =>
        [
          `### ${p.title}`,
          `${p.kind}. ${p.statusLabel}${p.period ? `, ${p.period}` : ''}.${p.url ? ` ${p.url}` : ''}`,
          p.summary,
          p.detail,
          bullets(p.outcomes),
          `Stack: ${p.stack.join(', ')}`,
        ].join('\n'),
      )
      .join('\n\n')}`,

    [
      '## Agent systems',
      agentNetwork.intro,
      `- ${agentNetwork.orchestrator.name} (orchestrator): ${agentNetwork.orchestrator.role}`,
      ...agentNetwork.agents.map((a) => `- ${a.name}: ${a.role}`),
      `Infrastructure:\n${bullets(agentNetwork.infrastructure)}`,
    ].join('\n\n'),

    `## Skills\n\n${skills.map((g) => `- ${g.category}: ${g.items.join(', ')}`).join('\n')}`,

    `## Experience\n\n${[...resume.web2, ...resume.web3].map(experience).join('\n\n')}`,

    `## Certifications\n\n${resume.certifications
      .map((c) => `- ${c.name}, ${c.issuer} (${c.date}): ${c.detail}${c.url ? ` Verify: ${c.url}` : ''}`)
      .join('\n')}`,

    `## Contact\n\n${contact.blurb}\n\nEmail ${site.email}`,
  ];
  return `${parts.join('\n\n')}\n`;
}

export function GET() {
  return new Response(build(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
