import Image from 'next/image';
import { agentNetwork } from '../content';
import type { AgentEntry } from '../content';
import s from './island.module.css';
import { SectionHead, StatusChip } from './parts';

const LABEL: Record<AgentEntry['status'], string> = {
  live: 'Live',
  scheduled: 'Scheduled',
  paused: 'Paused',
  'in-dev': 'In development',
};

export default function Systems() {
  const o = agentNetwork.orchestrator;
  return (
    <section id="systems" className={`${s.section} ${s.sectionAlt}`} aria-labelledby="systems-title">
      <div className={s.container}>
        <SectionHead
          id="systems-title"
          eyebrow="Systems"
          title="A team of specialist agents"
          lead={agentNetwork.intro}
        />

        <div className={`${s.orch} ${s.reveal}`}>
          <div className={s.orchArt}>
            <Image
              src="/alfred-orchestrator.webp"
              alt="Illustration of Alfred, a robot butler, at the top of an org chart directing nine specialist agents"
              fill
              sizes="(min-width: 960px) 860px, 92vw"
              className={s.orchImg}
            />
          </div>
          <div>
            <p className={s.orchLabel}>Orchestrator</p>
            <h3 className={s.orchName}>{o.name}</h3>
            <p className={s.orchRole}>{o.role}</p>
          </div>
          <div className={s.orchSide}>
            <StatusChip status={o.status} label={LABEL[o.status]} />
            {o.cadence ? <span className={s.orchCadence}>{o.cadence}</span> : null}
          </div>
        </div>

        <ul className={s.agentGrid}>
          {agentNetwork.agents.map((a) => (
            <li key={a.name} className={`${s.agent} ${s.reveal}`}>
              <div className={s.agentTop}>
                <h3 className={s.agentName}>{a.name}</h3>
                <StatusChip status={a.status} label={LABEL[a.status]} />
              </div>
              <p className={s.agentRole}>{a.role}</p>
            </li>
          ))}
        </ul>

        <h3 className={`${s.subHead} ${s.reveal}`}>Infrastructure underneath</h3>
        <ul className={s.infra}>
          {agentNetwork.infrastructure.map((i) => (
            <li key={i} className={s.infraPill}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
