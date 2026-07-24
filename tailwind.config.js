/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          yellow: '#FFE600',
          cyan: '#00F0FF',
          magenta: '#FF00A8',
          green: '#39FF14',
          red: '#FF2D2D',
          dark: '#0A0A0F',
          darker: '#050507',
          panel: '#11111A',
          steel: '#1A1A24',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Rajdhani"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'flicker': 'flicker 3s linear infinite',
        'scan': 'scan 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 2.5s infinite',
        'glitch-skew': 'glitch-skew 2.5s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'ticker': 'ticker 30s linear infinite',
        'rise': 'rise 0.8s ease-out forwards',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-skew': {
          '0%, 100%': { transform: 'skewX(0deg)' },
          '48%, 52%': { transform: 'skewX(10deg)' },
          '49%, 51%': { transform: 'skewX(-10deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'blur(8px)' },
          '50%': { opacity: '1', filter: 'blur(12px)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 50px' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
