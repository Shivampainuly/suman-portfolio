import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          PRIMARY: '#0A0F1A',
          SECONDARY: '#111827',
          TERTIARY: '#1F2937',
          HOVER: '#374151',
        },
        fg: {
          PRIMARY: '#F9FAFB',
          SECONDARY: '#D1D5DB',
          MUTED: '#9CA3AF',
          COMMENT: '#6B7280',
        },
        accent: {
          cyan: {
            DEFAULT: '#00E5CC',
            GLOW: 'rgba(0, 229, 204, 0.4)',
            DIM: 'rgba(0, 229, 204, 0.1)',
          },
          amber: {
            DEFAULT: '#FFB800',
            GLOW: 'rgba(255, 184, 0, 0.4)',
          },
          red: {
            DEFAULT: '#FF4D4D',
          },
          green: {
            DEFAULT: '#00FF88',
          },
        },
        border: 'rgba(255, 255, 255, 0.08)',
      },

      fontFamily: {
        sans: [
          'var(--font-ibm-plex-sans)',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'var(--font-jetbrains-mono)',
          'monospace',
        ],
        display: [
          'var(--font-space-grotesk)',
          'sans-serif',
        ],
      },

      boxShadow: {
        'glow-cyan':
          '0 0 20px rgba(0, 229, 204, 0.3), 0 0 40px rgba(0, 229, 204, 0.1)',
        'glow-amber':
          '0 0 20px rgba(255, 184, 0, 0.3)',
        card:
          '0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
        'card-hover':
          '0 12px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 229, 204, 0.2)',
      },

      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0, 229, 204, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 204, 0.03) 1px, transparent 1px)',

        'radial-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 229, 204, 0.15), transparent)',
      },

      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
}

export default config
