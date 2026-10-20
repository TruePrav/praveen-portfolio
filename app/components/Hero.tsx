import Image from 'next/image';
import { hero, site } from '../content';
import s from './island.module.css';
import { ArrowRight, Pin } from './icons';

// Design choice: this phrase of the headline is set in coral italic serif.
// If content.ts changes and the phrase is gone, the headline renders plain.
const HIGHLIGHT = 'multi-agent systems';

function Headline({ text }: { text: string }) {
  const i = text.indexOf(HIGHLIGHT);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <em className={s.heroEm}>{HIGHLIGHT}</em>
      {text.slice(i + HIGHLIGHT.length)}
    </>
  );
}

export default function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={`${s.container} ${s.heroGrid}`}>
        <div className={s.heroCopy}>
          <p className={s.pill}>{hero.eyebrow}</p>
          <h1 id="hero-title" className={s.h1}>
            <span className={s.heroName}>{site.name}</span>
            <span className={s.heroHeadline}>
              <Headline text={hero.headline} />
            </span>
          </h1>
          <p className={s.heroSub}>{hero.sub}</p>

          <div className={s.ctaRow}>
            <a href={`#${hero.primaryCta.target}`} className={s.btnPrimary}>
              {hero.primaryCta.label}
              <ArrowRight />
            </a>
            <a href={`#${hero.secondaryCta.target}`} className={s.btnOutline}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className={s.where}>
            <span className={s.dot} aria-hidden="true" />
            {site.availability}
          </p>

          {hero.stats.length > 0 ? (
            <dl className={s.heroStats} style={{ ['--n' as string]: hero.stats.length }}>
              {hero.stats.map((st) => (
                <div key={st.label} className={s.heroStat}>
                  <dt className={s.heroStatLabel}>{st.label}</dt>
                  <dd className={s.heroStatValue}>{st.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <div className={s.heroArt}>
          <div className={s.archFrame}>
            <Image
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 960px) 420px, 80vw"
              className={s.archImg}
            />
          </div>
          <div className={s.floatCard}>
            <span className={s.floatIcon} aria-hidden="true">
              <Pin />
            </span>
            <div>
              <p className={s.floatTitle}>{site.location}</p>
              <p className={s.floatSub}>{site.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
