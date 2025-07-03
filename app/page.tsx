import { Metadata } from 'next';
import Nav from './components/nav';
import Hero from './components/hero';

export const metadata: Metadata = {
  title: 'Praveen Mahtani | IT Specialist | AI & Automation Enthusiast | Web3 Builder',
  description: 'Community-first Web3 builder and automation consultant based in Toronto',
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1">
        <Hero />
        <section className="container mx-auto px-4 py-2 mt-4">
          <p className="text-text-secondary mb-8">
          Lifelong tech enthusiast and IT Specialist with a passion for customer service, automation, and helping companies work smarter. From a young age, I’ve been driven to understand how systems work, and now I use that curiosity to improve workflows, support teams, and grow alongside the businesses I serve.
          </p>
        </section>
      </div>
    </main>
  );
}
