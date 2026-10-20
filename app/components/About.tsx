import { about } from '../content';
import s from './island.module.css';
import { ArrowUpRight } from './icons';

export default function About() {
  return (
    <section id="about" className={`${s.section} ${s.sectionAlt}`} aria-labelledby="about-title">
      <div className={`${s.container} ${s.aboutGrid}`}>
        <div className={s.reveal}>
          <p className={s.eyebrow}>About</p>
          <h2 id="about-title" className={s.h2}>
            {about.heading}
          </h2>
          <div className={s.prose}>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <aside className={`${s.facts} ${s.reveal}`} aria-label="Quick facts">
          <dl>
            {about.facts.map((f) => (
              <div key={f.label} className={s.fact}>
                <dt>{f.label}</dt>
                <dd>
                  {f.href ? (
                    <a href={f.href} target="_blank" rel="noopener noreferrer" className={s.inlineLink}>
                      {f.value}
                      <ArrowUpRight />
                      <span className={s.srOnly}> (opens in a new tab)</span>
                    </a>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
