import Background from './components/Background';
import Navbar from './components/Navbar';
import Ticker, { MiniStats } from './components/Ticker';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import CyberpsychoMeter from './components/CyberpsychoMeter';
import Roadmap from './components/Roadmap';
import Quotes from './components/Quotes';
import HowToBuy from './components/HowToBuy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <div className="mx-auto max-w-6xl px-5 py-8">
          <MiniStats />
        </div>
        <About />
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
