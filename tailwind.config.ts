import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        surface: {
          DEFAULT: '#f7f9ff',
          dim: '#c6dcf6',
          bright: '#f7f9ff',
          'container-lowest': '#ffffff',
          'container-low': '#edf4ff',
          container: '#e3efff',
          'container-high': '#d9eaff',
          'container-highest': '#cfe5ff',
          variant: '#cfe5ff',
        },
        'on-surface': {
          DEFAULT: '#051d30',
          variant: '#424751',
        },
        'inverse-surface': '#1d3246',
        'inverse-on-surface': '#e8f2ff',
        outline: {
          DEFAULT: '#727782',
          variant: '#c2c6d3',
        },
        'surface-tint': '#225eab',
        background: '#f7f9ff',
        'on-background': '#051d30',

        // Primary — Deep Blue (Work)
        primary: {
          DEFAULT: '#003d7c',
          container: '#1254a1',
          fixed: '#d6e3ff',
          'fixed-dim': '#a9c7ff',
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#afcbff',
          fixed: '#001b3d',
          'fixed-variant': '#00468c',
        },
        'inverse-primary': '#a9c7ff',

        // Secondary — Sky Blue (Create)
        secondary: {
          DEFAULT: '#006687',
          container: '#60cdff',
          fixed: '#c1e8ff',
          'fixed-dim': '#74d1ff',
        },
        'on-secondary': {
          DEFAULT: '#ffffff',
          container: '#005572',
          fixed: '#001e2b',
          'fixed-variant': '#004d67',
        },

        // Tertiary — Marigold (Gather + Availability Signal)
        tertiary: {
          DEFAULT: '#5e3300',
          container: '#7f4700',
          fixed: '#ffdcc0',
          'fixed-dim': '#ffb874',
        },
        'on-tertiary': {
          DEFAULT: '#ffffff',
          container: '#ffbc7e',
          fixed: '#2d1600',
          'fixed-variant': '#6b3b00',
        },

        // Trade — Market Green
        trade: {
          DEFAULT: '#1e6b45',
          container: '#a8f2c6',
        },
        'on-trade': {
          DEFAULT: '#ffffff',
          container: '#00391f',
        },

        // Park — Slate Blue
        park: {
          DEFAULT: '#44506b',
          container: '#dbe2f5',
        },
        'on-park': {
          DEFAULT: '#ffffff',
          container: '#1c2436',
        },

        // Wellness — Soft Lavender
        wellness: {
          DEFAULT: '#5d5a8c',
          container: '#e4dfff',
        },
        'on-wellness': {
          DEFAULT: '#ffffff',
          container: '#25215c',
        },

        // Availability signal (semantic alias for marigold)
        available: {
          DEFAULT: '#ffb874',
          strong: '#7f4700',
        },
        'on-available': {
          DEFAULT: '#2d1600',
          strong: '#ffffff',
        },

        // Semantic
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        'on-error': {
          DEFAULT: '#ffffff',
          container: '#93000a',
        },
        success: {
          DEFAULT: '#1e6b45',
          container: '#a8f2c6',
        },
        'on-success': {
          DEFAULT: '#ffffff',
          container: '#00391f',
        },
        warning: {
          DEFAULT: '#7f4700',
          container: '#ffdcc0',
        },
        'on-warning': {
          DEFAULT: '#ffffff',
          container: '#2d1600',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '34px', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'data-md': ['14px', { lineHeight: '20px', fontWeight: '500' }],
      },
      spacing: {
        xs: '4px',
        sm: '12px',
        md: '24px',
        lg: '48px',
        xl: '80px',
        gutter: '16px',
        'margin-mobile': '20px',
        'margin-desktop': '64px',
        'dense-xs': '2px',
        'dense-sm': '6px',
        'dense-md': '12px',
        'dense-lg': '24px',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      maxWidth: {
        content: '1280px',
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
        slow: '320ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        emphasized: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
        exit: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
      },
      boxShadow: {
        // Tinted with primary blue at 8-12% opacity per design.md
        'level-1': 'none',
        'level-2': '0 4px 12px 0 rgba(18, 84, 161, 0.10)',
        'level-3': '0 8px 24px 0 rgba(18, 84, 161, 0.12)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
