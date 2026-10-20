import Link from 'next/link';
import { site } from '../content';
import s from './island.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`${s.container} ${s.footerRow}`}>
        <div>
          <p className={s.footerName}>{site.name}</p>
          <p className={s.footerSub}>
            {site.role}, {site.location}
          </p>
        </div>
        <nav aria-label="Footer" className={s.footerLinks}>
          <a href="#top">Back to top</a>
          <Link href="/resume">Resume</Link>
          {site.socials.map((so) => (
            <a key={so.label} href={so.href} target="_blank" rel="noopener noreferrer">
              {so.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
