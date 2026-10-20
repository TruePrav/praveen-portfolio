import type { Metadata } from 'next';
import s from '../components/island.module.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { NAV_LINKS } from '../components/nav-links';
import { resume, site } from '../content';
import ResumeTabs from './ResumeTabs';
import r from './resume.module.css';

export const metadata: Metadata = {
  title: 'Resume | Praveen Mahtani',
  description: site.description,
};

export default function ResumePage() {
  const groups = [
    { id: 'web2', label: 'Web2', entries: resume.web2 },
    { id: 'web3', label: 'Web3', entries: resume.web3 },
  ];

  return (
    <div className={r.page}>
      <div className={r.noPrint}>
        <a href="#main" className={s.skip}>
          Skip to content
        </a>
        <div id="top" />
        <Nav name={site.name} links={NAV_LINKS} base="/" resumeCurrent />
      </div>

      <main id="main" className={r.main}>
        <div className={s.container}>
          <header className={r.head}>
            <p className={s.eyebrow}>Resume</p>
            <h1 className={r.h1}>{site.name}</h1>
            <p className={r.sub}>
              {site.role}, {site.location}
            </p>
            <ul className={r.contactRow}>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.socials.map((so) => (
                <li key={so.label}>
                  <a href={so.href} target="_blank" rel="noopener noreferrer">
                    {so.label}: {so.handle}
                    <span className={s.srOnly}> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <ResumeTabs groups={groups} />

          {resume.certifications.length > 0 ? (
            <section className={r.certs} aria-labelledby="certs-title">
              <h2 id="certs-title" className={r.h2}>
                Certifications
              </h2>
              <ul className={r.certList}>
                {resume.certifications.map((c) => (
                  <li key={c.name} className={r.cert}>
                    <h3 className={r.certName}>{c.name}</h3>
                    <p className={r.certMeta}>
                      {c.issuer}, {c.date}
                    </p>
                    <p className={r.certDetail}>{c.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </main>

      <div className={r.noPrint}>
        <Footer />
      </div>
    </div>
  );
}
