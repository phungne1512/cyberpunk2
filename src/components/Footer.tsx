import { Twitter, MessageCircle, Send, Github, Zap } from 'lucide-react';

const SOCIALS = [
  { icon: Twitter, label: 'X / TWITTER', href: '#' },
  { icon: MessageCircle, label: 'DISCORD', href: '#' },
  { icon: Send, label: 'TELEGRAM', href: '#' },
  { icon: Github, label: 'GITHUB', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cyber-cyan/20 bg-cyber-darker px-5 py-16">
      <div className="mx-auto max-w-5xl">
        {/* CTA */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-5xl">
            THE STREET IS <span className="text-cyber-yellow text-glow-yellow">WATCHING</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-gray-400">
            Jack in or get left in the rain. Night City waits for no one, choom.
          </p>
          <a
            href="#buy"
            className="clip-cyber mt-6 inline-flex items-center gap-2 bg-cyber-yellow px-8 py-4 font-display text-sm font-bold tracking-widest text-cyber-dark transition-all hover:bg-cyber-cyan box-glow-yellow"
          >
            <Zap className="h-5 w-5 fill-cyber-dark" />
            BUY $CHOOM NOW
          </a>
        </div>

        {/* Socials */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              className="clip-cyber-sm flex h-12 w-12 items-center justify-center border border-cyber-cyan/30 bg-cyber-panel text-cyber-cyan transition-all hover:bg-cyber-cyan/10 hover:box-glow-cyan"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mx-auto max-w-3xl border-t border-cyber-cyan/10 pt-8 text-center">
          <p className="font-mono text-xs leading-relaxed text-gray-500">
            $CHOOM is a meme coin with no intrinsic value, no expectation of profit, and no utility.
            This is not financial advice. Crypto is volatile and you may lose everything.
            Nothing here is affiliated with, endorsed by, or connected to CD Projekt Red, Studio Trigger,
            or the Cyberpunk franchise. We\'re just chooms who love the vibe. DYOR. Stay chrome.
          </p>
          <div className="mt-6 font-display text-sm font-bold tracking-widest text-cyber-yellow">
            $CHOOM © 2077 — NIGHT CITY
          </div>
        </div>
      </div>
    </footer>
  );
}
