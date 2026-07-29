/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)',
          soft: 'rgb(var(--c-ink-soft) / <alpha-value>)',
          raised: 'rgb(var(--c-ink-raised) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--c-gold) / <alpha-value>)',
          bright: 'rgb(var(--c-gold-bright) / <alpha-value>)',
          dim: 'rgb(var(--c-gold-dim) / <alpha-value>)',
        },
        parchment: 'rgb(var(--c-parchment) / <alpha-value>)',
        smoke: 'rgb(var(--c-smoke) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
        utility: ['"Jost"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
        widest3: '0.5em',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, rgb(var(--c-gold)), transparent)',
        'radial-fade': 'radial-gradient(circle at 50% 30%, rgb(var(--c-gold) / 0.10), transparent 60%)',
      },
      boxShadow: {
        gold: '0 0 40px rgb(var(--c-gold) / 0.15)',
        glass: '0 8px 32px var(--shadow-glass)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
      },
    },
  },
  plugins: [],
}
