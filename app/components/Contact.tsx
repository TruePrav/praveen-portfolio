import { contact, site } from '../content';
import s from './island.module.css';
import CopyButton from './CopyButton';
import { ArrowRight } from './icons';

export default function Contact() {
  return (
    <section id="contact" className={s.section} aria-labelledby="contact-title">
      <div className={s.container}>
        <div className={`${s.contactPanel} ${s.reveal}`}>
          <p className={s.contactEyebrow}>Contact</p>
          <h2 id="contact-title" className={s.contactTitle}>
            {contact.heading}
          </h2>
          <p className={s.contactBlurb}>{contact.blurb}</p>

          <div className={s.contactActions}>
            <a href={`mailto:${site.email}`} className={s.btnLight}>
              {site.email}
              <ArrowRight />
            </a>
            <CopyButton text={site.email} />
          </div>

          <ul className={s.socials} aria-label="Social profiles">
            {site.socials.map((so) => (
              <li key={so.label}>
                <a href={so.href} target="_blank" rel="noopener noreferrer" className={s.socialLink}>
                  <span className={s.socialLabel}>{so.label}</span>
                  <span>{so.handle}</span>
                  <span className={s.srOnly}> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
