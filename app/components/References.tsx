import { references } from '../content';
import s from './island.module.css';
import { LogoTile, SectionHead } from './parts';
import { ArrowUpRight } from './icons';

export default function References() {
  return (
    <section id="references" className={`${s.section} ${s.refSection} ${s.sectionAlt}`} aria-labelledby="references-title">
      <div className={s.container}>
        <SectionHead id="references-title" eyebrow="Reference work" title="Businesses I build for" />
        <ul className={s.refGrid}>
          {references.map((r, i) => {
            const featured = i === 0; // the first reference is the featured card on wide screens
            return (
              <li key={r.slug} className={`${s.refCard} ${featured ? s.refFeatured : ''} ${s.reveal}`}>
                <LogoTile logo={r.logo} name={r.name} size={featured ? 'lg' : 'md'} />
                <div className={s.refBody}>
                  <h3 className={s.refName}>
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className={s.stretch}>
                        {r.name}
                        <ArrowUpRight className={s.refArrow} />
                        <span className={s.srOnly}> (opens in a new tab)</span>
                      </a>
                    ) : (
                      r.name
                    )}
                  </h3>
                  <p className={s.refRel}>{r.relationship}</p>
                  <p className={s.refSummary}>{r.summary}</p>
                  {r.period ? <p className={s.refPeriod}>{r.period}</p> : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
