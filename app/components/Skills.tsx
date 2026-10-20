import { exploring, skills } from '../content';
import s from './island.module.css';
import { SectionHead } from './parts';

export default function Skills() {
  return (
    <section id="skills" className={s.section} aria-labelledby="skills-title">
      <div className={s.container}>
        <SectionHead id="skills-title" eyebrow="Skills" title="What I work with" />
        <div className={s.skillGrid}>
          {skills.map((g) => (
            <div key={g.category} className={`${s.skillCard} ${s.reveal}`}>
              <h3 className={s.skillTitle}>{g.category}</h3>
              <ul className={s.pills}>
                {g.items.map((it) => (
                  <li key={it} className={s.skillPill}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {exploring.length > 0 ? (
            <div className={`${s.skillCard} ${s.exploreCard} ${s.reveal}`}>
              <h3 className={s.skillTitle}>Currently exploring</h3>
              <ul className={s.pills}>
                {exploring.map((it) => (
                  <li key={it} className={s.explorePill}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
