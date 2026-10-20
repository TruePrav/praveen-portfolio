import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { site } from './content';
import s from './components/island.module.css';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const SITE_URL = site.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.title,
  description: site.description,
  openGraph: {
    type: 'website',
    title: site.title,
    description: site.description,
    url: SITE_URL,
    images: [{ url: site.photo, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.photo],
  },
};

// Structured profile for search engines and AI readers.
const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  url: SITE_URL,
  image: `${SITE_URL}${site.photo}`,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Toronto', addressCountry: 'CA' },
  worksFor: { '@type': 'Organization', name: 'LevelUp Enterprises Inc.', url: 'https://ailevelup.ca' },
  sameAs: site.socials.map((so) => so.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} ${s.root}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
