import { projects } from '../content';
import type { Project } from '../content';
import s from './island.module.css';
import { LogoTile, SectionHead, StatusChip } from './parts';
import { ArrowUpRight, Check } from './icons';

// Status groups drive the layout; never slugs.
const SHIPPED = ['live', 'production', 'shipped'];
const isShipped = (p: Project) => SHIPPED.indexOf(p.status) >= 0;
const isInProgress = (p: Project) => p.status === 'in-dev';

// A detail of a sentence or two reads inline; longer ones keep a label or a toggle.
const SHORT_DETAIL = 380;
const isShort = (detail: string) => detail.length <= SHORT_DETAIL;

function host(url: string) {
  return url.replace(/^https?:\/\//, '');
}

function Outcomes({ items }: { items: string[] }) {
  return (
    <ul className={s.checks}>
      {items.map((o) => (
        <li key={o}>
          <span className={s.checkIcon} aria-hidden="true">
            <Check />
          </span>
          {o}
        </li>
      ))}
    </ul>
  );
}

// Items past `limit` stay in the HTML (screen readers and AI readers get the full stack)
// but are visually collapsed behind a "+N" pill until the list is hovered.
function Stack({ items, limit }: { items: string[]; limit?: number }) {
  const cut = limit && items.length > limit ? limit : items.length;
  const rest = items.slice(cut);
  return (
    <ul className={s.pills} aria-label="Stack">
      {items.map((t, i) => (
        <li key={t} className={i < cut ? s.stackPill : `${s.stackPill} ${s.stackExtra}`}>
          {t}
        </li>
      ))}
      {rest.length > 0 ? (
        <li className={`${s.stackPill} ${s.stackMore}`} aria-hidden="true" title={rest.join(', ')}>
          {`+${rest.length}`}
        </li>
      ) : null}
    </ul>
  );
}

function Visit({ url }: { url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={s.textLink}>
      Visit {host(url)}
      <ArrowUpRight />
      <span className={s.srOnly}> (opens in a new tab)</span>
    </a>
  );
}

function Story({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1 ? s.storyFlip : '';

  // Featured with a logo: logo tile beside the story.
  if (p.logo) {
    return (
      <article className={`${s.story} ${flip} ${s.reveal}`}>
        <div className={s.storyVisual}>
          <LogoTile logo={p.logo} name={p.title} size="lg" />
          {p.period ? <p className={s.period}>{p.period}</p> : null}
        </div>
        <div className={s.storyBody}>
          <div className={s.storyMeta}>
            <span className={s.kind}>{p.kind}</span>
            <StatusChip status={p.status} label={p.statusLabel} />
          </div>
          <h3 className={s.h3}>{p.title}</h3>
          <p className={s.storySummary}>{p.summary}</p>
          {isShort(p.detail) ? null : <h4 className={s.h4}>What I built</h4>}
          <p className={isShort(p.detail) ? s.storyDetailShort : s.storyDetail}>{p.detail}</p>
          <Outcomes items={p.outcomes} />
          <Stack items={p.stack} />
          {p.url ? <Visit url={p.url} /> : null}
        </div>
      </article>
    );
  }

  // Featured without a logo: full-width card with an "At a glance" panel.
  const tints = [s.glanceTeal, s.glanceCoral, s.glanceSand];
  return (
    <article className={`${s.story} ${s.storyGlance} ${flip} ${s.reveal}`}>
      <div className={`${s.storyBody} ${s.storyBodyFlex}`}>
        <h3 className={`${s.h3} ${s.h3First}`}>{p.title}</h3>
        <p className={s.storySummary}>{p.summary}</p>
        {isShort(p.detail) ? null : <h4 className={s.h4}>What I built</h4>}
        <p className={isShort(p.detail) ? s.storyDetailShort : s.storyDetail}>{p.detail}</p>
        <Stack items={p.stack} />
        {p.url ? <Visit url={p.url} /> : null}
      </div>
      <aside className={`${s.glance} ${tints[index % tints.length]}`} aria-label={`${p.title} at a glance`}>
        <h4 className={s.glanceTitle}>At a glance</h4>
        <dl className={s.glanceRows}>
          <div>
            <dt>Kind</dt>
            <dd>{p.kind}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <StatusChip status={p.status} label={p.statusLabel} />
            </dd>
          </div>
          {p.period ? (
            <div>
              <dt>Period</dt>
              <dd>{p.period}</dd>
            </div>
          ) : null}
        </dl>
        <Outcomes items={p.outcomes} />
      </aside>
    </article>
  );
}

function Mini({ p }: { p: Project }) {
  // Compact cards stay to one line of what it does; the detail is for featured stories.
  return (
    <article className={`${s.mini} ${s.reveal}`}>
      {p.logo ? <LogoTile logo={p.logo} name={p.title} size="sm" /> : null}
      <div className={s.storyMeta}>
        <span className={s.kind}>{p.kind}</span>
        <StatusChip status={p.status} label={p.statusLabel} />
      </div>
      <h3 className={s.h3Small}>{p.title}</h3>
      <p className={s.miniSummary}>{p.summary}</p>
      <Stack items={p.stack} limit={5} />
      {p.url ? <Visit url={p.url} /> : null}
    </article>
  );
}

export default function Work() {
  const shipped = projects.filter(isShipped);
  const stories = shipped.filter((p) => p.featured);
  const alsoShipped = shipped.filter((p) => !p.featured);
  const inProgress = projects.filter(isInProgress);
  return (
    <section id="work" className={s.section} aria-labelledby="work-title">
      <div className={s.container}>
        <SectionHead id="work-title" eyebrow="Selected work" title="Systems in production" />
        <div className={s.stories}>
          {stories.map((p, i) => (
            <Story key={p.slug} p={p} index={i} />
          ))}
        </div>

        {alsoShipped.length > 0 ? (
          <>
            <h3 className={`${s.subHead} ${s.reveal}`}>More shipped work</h3>
            <div className={s.miniGrid}>
              {alsoShipped.map((p) => (
                <Mini key={p.slug} p={p} />
              ))}
            </div>
          </>
        ) : null}

        {inProgress.length > 0 ? (
          <section className={s.workNext} aria-labelledby="inprogress-title">
            <SectionHead id="inprogress-title" eyebrow="In progress" title="In the works" />
            <div className={s.miniGrid}>
              {inProgress.map((p) => (
                <Mini key={p.slug} p={p} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
