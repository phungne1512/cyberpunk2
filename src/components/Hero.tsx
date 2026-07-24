import { useEffect, useState } from 'react';
import { ChevronDown, Skull, Zap } from 'lucide-react';

const ROTATING_WORDS = ['CYBERPSYCHO', 'SAMURAI', 'EDGERUNNER', 'NIGHT CITY', 'WAKE UP'];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING_WORDS.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-5 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        {/* Warning badge */}
        <div className="mb-8 inline-flex items-center gap-2 border border-cyber-yellow/50 bg-cyber-yellow/10 px-4 py-1.5 font-mono text-[11px] tracking-widest text-cyber-yellow animate-flicker">
          <Skull className="h-4 w-4" />
          WARNING: CYBERPSYCHO RISK LEVEL — CRITICAL
        </div>

        {/* Title */}
        <h1 className="font-display text-6xl font-black leading-none tracking-tighter text-white sm:text-8xl md:text-9xl">
          <span className="glitch-text text-glow-yellow" data-text="CHOOM">CHOOM</span>
          <span className="text-cyber-magenta text-glow-magenta">COIN</span>
        </h1>

        {/* Rotating subtitle */}
        <div className="mt-6 h-10 overflow-hidden">
          <div
            className="font-display text-xl font-bold tracking-[0.3em] text-cyber-cyan text-glow-cyan transition-all duration-500"
            key={idx}
          >
            <span className="animate-rise inline-block">// {ROTATING_WORDS[idx]}</span>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-gray-300">
          The meme coin forged in the neon-soaked gutters of Night City. No team. No roadmap. No hope.
          Just vibes, chrome, and a one-way ticket to the moon — or a flatline.{' '}
          <span className="text-cyber-yellow font-semibold">Wake the f*** up, samurai.</span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#buy"
            className="clip-cyber group relative flex items-center gap-2 bg-cyber-yellow px-8 py-4 font-display text-sm font-bold tracking-widest text-cyber-dark transition-all hover:bg-cyber-cyan box-glow-yellow"
          >
            <Zap className="h-5 w-5 fill-cyber-dark" />
            BUY $CHOOM NOW
          </a>
          <a
            href="#about"
            className="clip-cyber flex items-center gap-2 border border-cyber-cyan/50 bg-cyber-panel/40 px-8 py-4 font-display text-sm font-bold tracking-widest text-cyber-cyan transition-all hover:bg-cyber-cyan/10"
          >
            READ THE DOSSIER
          </a>
        </div>

        {/* Contract address */}
        <div className="mx-auto mt-10 max-w-md">
          <div className="font-mono text-[10px] tracking-widest text-gray-500">CONTRACT ADDRESS</div>
          <div className="mt-1 truncate border border-cyber-magenta/30 bg-cyber-dark/60 px-3 py-2 font-mono text-xs text-cyber-magenta">
            0xCH00M...wAk3UpS4muR4i...d34d
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-center gap-1 text-cyber-cyan/60">
          <span className="font-mono text-[10px] tracking-widest">SCROLL TO JACK IN</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
