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
        // Clean Warm Cream Athletic Sports Retailer Palette
        'surface': '#FAF7F2',
        'surface-dim': '#F3EEE5',
        'surface-container-low': '#FAF7F2',
        'surface-container': '#F3EEE5',
        'surface-container-high': '#E8E1D3',
        'surface-container-highest': '#DCD3C1',
        'cream': {
          DEFAULT: '#FAF7F2',
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F3EEE5',
          300: '#E8E1D3',
          400: '#DCD3C1',
          500: '#C5B79F',
        },
        'gold-accent': '#d97706',
        'gold-light': '#b45309',
        'gold-glow': 'transparent',
        'on-surface': '#0f172a',
        'on-surface-variant': '#475569',
        'border-subtle': '#E8E1D3',
        'border-medium': '#DCD3C1',
        brand: {
          primary: '#0B3D91',
          accent: '#d97706',
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
        bebas: ['var(--font-bebas)', 'Bebas Neue', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
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
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

