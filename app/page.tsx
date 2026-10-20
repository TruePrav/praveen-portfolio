import s from './components/island.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import { NAV_LINKS } from './components/nav-links';
import References from './components/References';
import Skills from './components/Skills';
import Systems from './components/Systems';
import Work from './components/Work';
import { site } from './content';

export default function Home() {
  return (
    <>
      <a href="#main" className={s.skip}>
        Skip to content
      </a>
      <div id="top" />
      <Nav name={site.name} links={NAV_LINKS} />
      <main id="main">
        <Hero />
        <References />
        <Work />
        <Systems />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
