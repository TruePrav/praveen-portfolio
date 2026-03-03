import { Metadata } from 'next';
import Nav from './components/nav';
import Hero from './components/hero';
import LiveSystems from './components/live-systems';
import Projects from './components/projects';
import Skills from './components/skills';
import About from './components/about';
import Contact from './components/contact';

export const metadata: Metadata = {
  title: 'Praveen Mahtani — AI Systems Builder',
  description:
    'Technical Operations Manager based in Toronto. Building multi-agent AI systems, automation pipelines, and full-stack products.',
};

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0D1117' }}>
      <Nav />
      <Hero />
      <LiveSystems />  {/* id="agents" */}
      <Projects />     {/* id="projects" */}
      <Skills />       {/* id="skills" */}
      <About />        {/* id="about" */}
      <Contact />      {/* id="contact" */}
    </main>
  );
}
