'use client';

import { useState } from 'react';
import Link from 'next/link';
import s from './island.module.css';
import { Close, Menu } from './icons';

export interface NavLink {
  href: string;
  label: string;
}

// `base` is '' on the home page and '/' elsewhere, so anchors become '/#work'.
export default function Nav({
  name,
  links,
  base = '',
  resumeCurrent = false,
}: {
  name: string;
  links: NavLink[];
  base?: string;
  resumeCurrent?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.headerRow}`}>
        <a href={`${base}#top`} className={s.brand} onClick={close}>
          {name}
        </a>

        <nav aria-label="Primary" className={s.navDesktop}>
          {links.map((l) => (
            <a key={l.href} href={`${base}${l.href}`} className={s.navLink}>
              {l.label}
            </a>
          ))}
          <Link href="/resume" className={s.navResume} aria-current={resumeCurrent ? 'page' : undefined}>
            Resume
          </Link>
        </nav>

        <button
          type="button"
          className={s.menuBtn}
          aria-expanded={open}
          aria-controls="island-mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <nav
        id="island-mobile-nav"
        aria-label="Mobile"
        className={`${s.navMobile} ${open ? s.navMobileOpen : ''}`}
        hidden={!open}
      >
        {links.map((l) => (
          <a key={l.href} href={`${base}${l.href}`} className={s.navMobileLink} onClick={close}>
            {l.label}
          </a>
        ))}
        <Link href="/resume" className={s.navMobileLink} onClick={close} aria-current={resumeCurrent ? 'page' : undefined}>
          Resume
        </Link>
      </nav>
    </header>
  );
}
