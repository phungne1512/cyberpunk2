import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import DataStream from './components/DataStream';
import Navbar from './components/Navbar';
import Ticker, { MiniStats } from './components/Ticker';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Tokenomics from './components/Tokenomics';
import CyberpsychoMeter from './components/CyberpsychoMeter';
import Roadmap from './components/Roadmap';
import Quotes from './components/Quotes';
import HowToBuy from './components/HowToBuy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useScrollReveal } from './lib/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen">
      <Background />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <div className="mx-auto max-w-6xl px-5 py-8">
          <MiniStats />
        </div>
        <About />
        <Gallery />
        <Tokenomics />
        <CyberpsychoMeter />
        <Roadmap />
        <Quotes />
        <HowToBuy />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
