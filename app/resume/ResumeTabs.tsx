'use client';

import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { Experience } from '../content';
import s from '../components/island.module.css';
import { LogoTile } from '../components/parts';
import r from './resume.module.css';

export interface ResumeGroup {
  id: string;
  label: string;
  entries: Experience[];
}

function Entry({ e }: { e: Experience }) {
  return (
    <li className={r.entry}>
      <div className={r.entryHead}>
        {e.logo ? (
          <div className={r.entryLogo}>
            <LogoTile logo={e.logo} name={e.company} size="xs" />
          </div>
        ) : null}
        <div className={r.entryTitle}>
          <h3 className={r.role}>{e.role}</h3>
          <p className={r.company}>{e.company}</p>
        </div>
        <p className={r.period}>{e.period}</p>
      </div>
      <ul className={r.resp}>
        {e.responsibilities.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <ul className={`${s.pills} ${r.tools}`} aria-label="Tools">
        {e.tools.map((t) => (
          <li key={t} className={s.stackPill}>
            {t}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function ResumeTabs({ groups }: { groups: ResumeGroup[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    const n = (i + groups.length) % groups.length;
    setActive(n);
    const el = tabRefs.current[n];
    if (el) el.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      select(i + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      select(i - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      select(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      select(groups.length - 1);
    }
  };

  return (
    <div>
      <div role="tablist" aria-label="Experience" className={r.tablist}>
        {groups.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${g.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${g.id}`}
            tabIndex={i === active ? 0 : -1}
            className={r.tab}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {g.label}
          </button>
        ))}
      </div>

      {groups.map((g, i) => (
        <div
          key={g.id}
          role="tabpanel"
          id={`panel-${g.id}`}
          aria-labelledby={`tab-${g.id}`}
          tabIndex={0}
          hidden={i !== active}
          className={r.panel}
        >
          <h2 className={r.printHeading}>{g.label}</h2>
          <ul className={r.entries}>
            {g.entries.map((e) => (
              <Entry key={`${e.company}-${e.role}-${e.period}`} e={e} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
