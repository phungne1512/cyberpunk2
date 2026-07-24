import { Cpu, Heart, Skull, Crosshair } from 'lucide-react';

const FEATURES = [
  {
    icon: Cpu,
    title: 'CHROME-Grade TOKENOMICS',
    body: 'Deflationary burns hotter than a Sandevistan overclock. Every transaction scorches supply. Every holder gets harder, better, faster, stronger.',
    color: 'cyan',
  },
  {
    icon: Heart,
    title: 'ZERO RUGZONE',
    body: 'Liquidity locked tighter than Arasaka HQ. Renounced contract. No dev wallet. No escape hatch. Just the streets and the chrome.',
    color: 'magenta',
  },
  {
    icon: Skull,
    title: 'CYBERPSYCHO BURNS',
    body: 'A 6.9% tax feeds the burn vault. When the meter hits critical, we torch a chunk of supply live on-chain. Watch your bags get rarer in real time.',
    color: 'yellow',
  },
  {
    icon: Crosshair,
    title: 'BOUNTY REWARDS',
    body: 'Memes, raids, and content get paid in $CYBER. The best street artists in Night City earn chrome for spreading the gospel.',
    color: 'green',
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  cyan: { text: 'text-cyber-cyan', border: 'border-cyber-cyan/40', bg: 'hover:bg-cyber-cyan/5', glow: 'box-glow-cyan' },
  magenta: { text: 'text-cyber-magenta', border: 'border-cyber-magenta/40', bg: 'hover:bg-cyber-magenta/5', glow: '' },
  yellow: { text: 'text-cyber-yellow', border: 'border-cyber-yellow/40', bg: 'hover:bg-cyber-yellow/5', glow: '' },
  green: { text: 'text-cyber-green', border: 'border-cyber-green/40', bg: 'hover:bg-cyber-green/5', glow: '' },
};

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <div className="font-mono text-xs tracking-[0.4em] text-cyber-magenta">// THE DOSSIER</div>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
            WHAT IS <span className="text-cyber-yellow text-glow-yellow">CYBERCOIN?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray-400">
            Born in a back-alley ripperdoc clinic somewhere between Watson and Westbrook,
            $CYBER is the native currency of the streets. It doesn't have utility. It has{' '}
            <span className="text-cyber-cyan">attitude</span>.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => {
            const c = colorMap[f.color];
            return (
              <div
                key={i}
                className={`clip-cyber group relative border ${c.border} bg-cyber-panel/50 p-7 transition-all duration-300 ${c.bg} ${c.glow}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center border ${c.border} bg-cyber-dark ${c.text}`}>
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className={`font-display text-lg font-bold tracking-wide ${c.text}`}>{f.title}</h3>
                </div>
                <p className="font-body text-base leading-relaxed text-gray-300">{f.body}</p>
                <div className={`absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 ${c.border}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
