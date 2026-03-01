import { Metadata } from 'next';
import Nav from './components/nav';
import Hero from './components/hero';
import LiveSystems from './components/live-systems';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

export const metadata: Metadata = {
  title: 'Praveen Mahtani — AI Systems Builder',
  description:
    'Technical Operations Manager building multi-agent AI systems, automation pipelines, and full-stack products. PLAY Barbados, Digisales, ailevelup.ca.',
};

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0D1117' }}>
      <Nav />
      <Hero />
      <LiveSystems />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

