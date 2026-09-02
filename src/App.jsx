import AnnouncementBar from './components/AnnouncementBar.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import DemoPlayer from './components/DemoPlayer.jsx';
import LogoStrip from './components/LogoStrip.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Pushback from './components/Pushback.jsx';
import Connections from './components/Connections.jsx';
import Security from './components/Security.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import FinalCta from './components/FinalCta.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <DemoPlayer />
        <LogoStrip />
        <HowItWorks />
        <Pushback />
        <Connections />
        <Security />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
