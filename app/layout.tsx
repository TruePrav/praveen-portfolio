import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Praveen Mahtani — AI Systems Builder',
  description: 'AI Agent Engineer building multi-agent AI systems, automation pipelines, and full-stack products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className} style={{ background: '#0D1117', margin: 0, padding: 0 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
