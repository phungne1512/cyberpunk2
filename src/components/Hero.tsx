import { useEffect, useState } from 'react';
import { ChevronDown, Skull, Zap } from 'lucide-react';

const VIDEO_SRC =
  'https://cdn-cf-east.streamable.com/video/mp4/jd2qgp.mp4?Expires=1785162716479&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=i1jf1Xe3rG1VTPqKRdDddqxqcNoXP2XP-xvCchCuptdKdv4wngJxEopg5TIfUbLPdxJ~xc4TZVePoNleGRT-mthpBZnARTwZyX-ZsgEUKRPcgDj7S~03U~q-xfgmW8~vB5SgjmuhNTfR0eTvWM~1pxJLcAvgO0jAGxUKSQccWq7d9QuHdq0QQXVjQ6-mwpVJ4TIFOVxAWzVDHt8d5AtPqgnxVIth7ghGOFdWysciczGh~NH9Gu2HedHMBezp03Sfukk5~EdhqR9CclUefGZLwtWXIX-WtCIOytb0qnUZ0OiHR~OJoW7ceLerTim7gBimlkVbmc13MSgFapet4O79iQ__';

const ROTATING_WORDS = ['CYBERPSYCHO', 'SAMURAI', 'EDGERUNNER', 'NIGHT CITY', 'WAKE UP'];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING_WORDS.length), 1800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24">
      {/* Background video */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ filter: 'contrast(1.1) saturate(1.2) brightness(0.7)' }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/60 via-cyber-darker/30 to-cyber-darker" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-magenta/10 via-transparent to-cyber-cyan/10" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        {/* Warning badge */}
        <div className="mb-8 inline-flex items-center gap-2 border border-cyber-yellow/50 bg-cyber-yellow/10 px-4 py-1.5 font-mono text-[11px] tracking-widest text-cyber-yellow animate-flicker backdrop-blur-sm">
          <Skull className="h-4 w-4" />
          WARNING: CYBERPSYCHO RISK LEVEL — CRITICAL
        </div>

        {/* Title */}
        <h1 className="font-display text-6xl font-black leading-none tracking-tighter text-white sm:text-8xl md:text-9xl">
          <span className="glitch-text text-glow-yellow" data-text="CYBER">CYBER</span>
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

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#buy"
            className="clip-cyber group relative flex items-center gap-1.5 bg-cyber-yellow px-5 py-2.5 font-display text-xs font-bold tracking-widest text-cyber-dark transition-all hover:bg-cyber-cyan box-glow-yellow"
          >
            <Zap className="h-3.5 w-3.5 fill-cyber-dark" />
            BUY $CYBER NOW
          </a>
          <a
            href="#about"
            className="clip-cyber flex items-center gap-1.5 border border-cyber-cyan/50 bg-cyber-panel/40 px-5 py-2.5 font-display text-xs font-bold tracking-widest text-cyber-cyan backdrop-blur-sm transition-all hover:bg-cyber-cyan/10"
          >
            READ THE DOSSIER
          </a>
        </div>

        {/* Contract address */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="font-mono text-[10px] tracking-widest text-gray-500">CONTRACT ADDRESS</div>
          <div className="mt-1 truncate border border-cyber-magenta/30 bg-cyber-dark/60 px-3 py-2 font-mono text-xs text-cyber-magenta backdrop-blur-sm">
            0xCH00M...wAk3UpS4muR4i...d34d
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-14 flex flex-col items-center gap-1 text-cyber-cyan/60">
          <span className="font-mono text-[10px] tracking-widest">SCROLL TO JACK IN</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
