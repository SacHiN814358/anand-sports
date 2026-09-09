import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Stitch Design System Colors
        'surface': '#090c10',
        'surface-dim': '#0c1017',
        'surface-container-low': '#11151e',
        'surface-container': '#161b26',
        'surface-container-high': '#1e2432',
        'surface-container-highest': '#283042',
        'gold-accent': '#f59e0b',
        'gold-light': '#fbbf24',
        'gold-glow': 'rgba(245, 158, 11, 0.15)',
        'on-surface': '#e6edf8',
        'on-surface-variant': '#94a3b8',
        'border-subtle': 'rgba(255, 255, 255, 0.07)',
        'border-medium': 'rgba(255, 255, 255, 0.12)',
        brand: {
          primary: '#0B3D91',
          accent: '#FF6B00',
          charcoal: '#1F2937',
          dark: '#0A0A0F',
          'dark-card': '#12121A',
          'dark-border': '#1E1E2A',
          'dark-surface': '#16161F',
        },
        success: '#16A34A',
        error: '#DC2626',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
        headline: ['var(--font-syne)', 'Syne', 'sans-serif'],
        body: ['var(--font-geist)', 'Geist', 'sans-serif'],
        caps: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'ambient-slow': 'ambientSlow 14s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 107, 0, 0.3)' },
        },
        ambientSlow: {
          '0%, 100%': { opacity: '0.28', transform: 'translate(0, 0) scale(1)' },
          '50%': { opacity: '0.45', transform: 'translate(20px, -20px) scale(1.08)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

