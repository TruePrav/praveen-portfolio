import Image from 'next/image';
import type { Logo } from '../content';
import s from './island.module.css';

export type TileSize = 'xs' | 'sm' | 'md' | 'lg';

// Dark-tone logos (white ink) sit on a dark plate, light-tone logos (dark ink)
// on a light plate; `logo.plate`, when set, is the brand plate colour and wins. Without a logo the name is set as a serif wordmark.
export function LogoTile({ logo, name, size = 'md' }: { logo?: Logo; name: string; size?: TileSize }) {
  const tone = logo ? (logo.tone === 'dark' ? s.tileDark : s.tileLight) : s.tileWord;
  return (
    <div
      className={`${s.tile} ${s[`tile_${size}`]} ${tone} ${logo && logo.art ? s.tileArt : ''}`}
      style={logo && logo.plate ? { background: logo.plate } : undefined}
    >
      {logo ? (
        <span className={s.tileInner}>
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            unoptimized
            sizes="(min-width: 1024px) 320px, 80vw"
            className={s.tileImg}
          />
        </span>
      ) : (
        <span className={s.wordmark}>{name}</span>
      )}
    </div>
  );
}

const GOOD = ['live', 'production', 'shipped'];

export function StatusChip({ status, label }: { status: string; label: string }) {
  const tone = GOOD.indexOf(status) >= 0 ? s.chipGood : status === 'paused' ? s.chipMuted : s.chipWarm;
  return (
    <span className={`${s.chip} ${tone}`}>
      <span className={s.chipDot} aria-hidden="true" />
      {label}
    </span>
  );
}

export function SectionHead({
  id,
  eyebrow,
  title,
  lead,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className={`${s.sectionHead} ${s.reveal}`}>
      <p className={s.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={s.h2}>
        {title}
      </h2>
      {lead ? <p className={s.lead}>{lead}</p> : null}
    </header>
  );
}
