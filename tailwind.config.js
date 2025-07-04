/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // CaseClosed Brand Colors
      colors: {
        // Primary brand colors
        'caseclosed-navy': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#032440', // Primary navy
          950: '#021a2d',
        },
        'caseclosed-gold': {
          50: '#fefaf0',
          100: '#fef3d9',
          200: '#fde5a7',
          300: '#fcd265',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#cb9628', // Primary gold
          700: '#a67c00',
          800: '#8b5a00',
          900: '#713f12',
          950: '#5a2a00',
        },
        
        // Christopher AI Avatar Colors
        'christopher-classic': '#4f46e5',
        'christopher-professional': '#1f2937',
        'christopher-bilingual': '#059669',
        'christopher-tech': '#6366f1',
        'christopher-experienced': '#7c3aed',
        'christopher-approachable': '#ec4899',
        'christopher-international': '#0891b2',
        'christopher-community': '#dc2626',
        
        // Nevada State Colors
        'nevada-blue': '#003f7f',
        'nevada-silver': '#c0c0c0',
        
        // Legal Status Colors
        'legal-compliant': '#10b981',
        'legal-pending': '#f59e0b',
        'legal-violation': '#ef4444',
        'legal-review': '#8b5cf6',
        
        // Semantic Colors
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#3b82f6',
        
        // Background Colors
        'bg-primary': '#ffffff',
        'bg-secondary': '#f8fafc',
        'bg-tertiary': '#f1f5f9',
        'bg-dark': '#032440',
        'bg-dark-secondary': '#1e293b',
        
        // Text Colors
        'text-primary': '#1f2937',
        'text-secondary': '#6b7280',
        'text-tertiary': '#9ca3af',
        'text-inverse': '#ffffff',
        
        // Border Colors
        'border-primary': '#e5e7eb',
        'border-secondary': '#d1d5db',
        'border-accent': '#cb9628',
      },
      
      // Typography
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': ['Georgia', ...defaultTheme.fontFamily.serif],
        'mono': ['Menlo', ...defaultTheme.fontFamily.mono],
        'legal': ['Georgia', 'Times New Roman', ...defaultTheme.fontFamily.serif],
        'christopher': ['Inter', 'system-ui', ...defaultTheme.fontFamily.sans],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        
        // Christopher AI specific sizes
        'christopher-sm': ['0.9375rem', { lineHeight: '1.375rem' }],
        'christopher-base': ['1.0625rem', { lineHeight: '1.625rem' }],
        'christopher-lg': ['1.1875rem', { lineHeight: '1.875rem' }],
        
        // Legal document sizes
        'legal-caption': ['0.8125rem', { lineHeight: '1.125rem' }],
        'legal-body': ['1.0625rem', { lineHeight: '1.625rem' }],
        'legal-heading': ['1.25rem', { lineHeight: '1.75rem' }],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        
        // Christopher AI specific spacing
        'christopher-xs': '0.375rem',
        'christopher-sm': '0.75rem',
        'christopher-md': '1.125rem',
        'christopher-lg': '1.75rem',
        'christopher-xl': '2.25rem',
        
        // Nevada specific spacing
        'nevada-gutter': '1.5rem',
        'nevada-section': '3rem',
        'nevada-hero': '6rem',
      },
      
      // Shadows
      boxShadow: {
        'christopher': '0 4px 12px rgba(203, 150, 40, 0.15)',
        'christopher-hover': '0 8px 24px rgba(203, 150, 40, 0.25)',
        'nevada': '0 4px 12px rgba(3, 36, 64, 0.15)',
        'nevada-hover': '0 8px 24px rgba(3, 36, 64, 0.25)',
        'legal': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'legal-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'modal': '0 25px 50px rgba(0, 0, 0, 0.25)',
      },
      
      // Border Radius
      borderRadius: {
        'christopher': '0.75rem',
        'nevada': '0.5rem',
        'legal': '0.25rem',
      },
      
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
        'fade-in-down': 'fadeInDown 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'christopher-glow': 'christopherGlow 2s ease-in-out infinite alternate',
        'nevada-shine': 'nevadaShine 3s ease-in-out infinite',
        'legal-highlight': 'legalHighlight 1s ease-in-out',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        christopherGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(203, 150, 40, 0.4)' },
          '100%': { boxShadow: '0 0 0 10px rgba(203, 150, 40, 0)' },
        },
        nevadaShine: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        legalHighlight: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(203, 150, 40, 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#cb9628' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      
      // Gradient Backgrounds
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'caseclosed-gradient': 'linear-gradient(135deg, #032440 0%, #1e3a8a 100%)',
        'christopher-gradient': 'linear-gradient(135deg, #cb9628 0%, #fbbf24 100%)',
        'nevada-gradient': 'linear-gradient(135deg, #003f7f 0%, #032440 100%)',
        'legal-gradient': 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
        'hero-gradient': 'linear-gradient(135deg, #032440 0%, #1e3a8a 50%, #6366f1 100%)',
      },
      
      // Screen Sizes
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        
        // Christopher AI specific breakpoints
        'christopher-sm': '600px',
        'christopher-md': '900px',
        'christopher-lg': '1200px',
        
        // Mobile first approach
        'mobile': {'max': '767px'},
        'tablet': {'min': '768px', 'max': '1023px'},
        'desktop': {'min': '1024px'},
      },
      
      // Z-Index
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
      
      // Aspect Ratios
      aspectRatio: {
        'christopher': '4/3',
        'video': '16/9',
        'square': '1/1',
        'portrait': '3/4',
        'landscape': '4/3',
      },
      
      // Backdrop Blur
      backdropBlur: {
        'christopher': '8px',
        'nevada': '12px',
        'legal': '4px',
      },
      
      // Custom Utilities
      content: {
        'empty': '""',
        'space': '" "',
        'nevada-star': '"★"',
        'christopher-icon': '"🤖"',
        'legal-icon': '"⚖️"',
      },
    },
  },
  
  // Plugins
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    
    // Custom plugin for CaseClosed components
    function({ addComponents, theme }) {
      addComponents({
        // Christopher AI Components
        '.christopher-avatar': {
          width: theme('spacing.16'),
          height: theme('spacing.16'),
          borderRadius: theme('borderRadius.full'),
          border: `2px solid ${theme('colors.caseclosed-gold.600')}`,
          boxShadow: theme('boxShadow.christopher'),
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: theme('boxShadow.christopher-hover'),
            transform: 'scale(1.05)',
          },
        },
        
        '.christopher-card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.christopher'),
          boxShadow: theme('boxShadow.card'),
          border: `1px solid ${theme('colors.border-primary')}`,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: theme('boxShadow.card-hover'),
            borderColor: theme('colors.caseclosed-gold.600'),
          },
        },
        
        // Nevada Components
        '.nevada-hero': {
          background: theme('backgroundImage.nevada-gradient'),
          color: theme('colors.text-inverse'),
          padding: theme('spacing.nevada-hero'),
          borderRadius: theme('borderRadius.nevada'),
        },
        
        '.nevada-section': {
          padding: theme('spacing.nevada-section'),
          marginBottom: theme('spacing.nevada-section'),
        },
        
        // Legal Components
        '.legal-document': {
          fontFamily: theme('fontFamily.legal'),
          fontSize: theme('fontSize.legal-body'),
          lineHeight: theme('lineHeight.relaxed'),
          color: theme('colors.text-primary'),
        },
        
        '.legal-heading': {
          fontFamily: theme('fontFamily.legal'),
          fontSize: theme('fontSize.legal-heading'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.caseclosed-navy.900'),
          marginBottom: theme('spacing.4'),
        },
        
        // Button Components
        '.btn-primary': {
          backgroundColor: theme('colors.caseclosed-navy.900'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: theme('colors.caseclosed-navy.800'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.lg'),
          },
        },
        
        '.btn-secondary': {
          backgroundColor: theme('colors.caseclosed-gold.600'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: theme('colors.caseclosed-gold.700'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.lg'),
          },
        },
        
        '.btn-outline': {
          backgroundColor: 'transparent',
          color: theme('colors.caseclosed-navy.900'),
          border: `2px solid ${theme('colors.caseclosed-navy.900')}`,
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: theme('colors.caseclosed-navy.900'),
            color: theme('colors.white'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.lg'),
          },
        },
        
        // Form Components
        '.form-input': {
          width: '100%',
          padding: theme('spacing.3'),
          border: `1px solid ${theme('colors.border-primary')}`,
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.base'),
          transition: 'all 0.2s ease',
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.caseclosed-gold.600'),
            boxShadow: `0 0 0 3px ${theme('colors.caseclosed-gold.600')}20`,
          },
        },
        
        '.form-label': {
          display: 'block',
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.text-primary'),
          marginBottom: theme('spacing.1'),
        },
        
        // Loading States
        '.loading-spinner': {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          border: `2px solid ${theme('colors.border-primary')}`,
          borderTop: `2px solid ${theme('colors.caseclosed-gold.600')}`,
          borderRadius: theme('borderRadius.full'),
          animation: theme('animation.spin'),
        },
        
        // Responsive Container
        '.container-custom': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@screen sm': {
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
        },
      })
    },
    
    // Custom plugin for utilities
    function({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          textWrap: 'balance',
        },
        '.text-pretty': {
          textWrap: 'pretty',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.glass-effect': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
      })
    },
  ],
}
