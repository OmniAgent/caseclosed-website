#!/bin/bash

# =============================================================================
# CASECLOSED WEBSITE REPOSITORY SETUP SCRIPT
# =============================================================================
# Creates complete Next.js website with attorney and client portals
# Repository: caseclosed-website (Public/Deployable)

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
    echo -e "${BLUE}==============================================================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}==============================================================================${NC}"
}

print_section() {
    echo -e "${CYAN}📁 Creating: $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

create_dir() {
    if [ ! -d "$1" ]; then
        mkdir -p "$1"
        print_success "Created directory: $1"
    else
        print_warning "Directory already exists: $1"
    fi
}

create_file() {
    if [ ! -f "$1" ]; then
        touch "$1"
        print_success "Created file: $1"
    else
        print_warning "File already exists: $1"
    fi
}

# =============================================================================
# REPOSITORY INITIALIZATION
# =============================================================================

print_header "CASECLOSED WEBSITE REPOSITORY SETUP"
echo -e "${PURPLE}Revolutionary legal technology website with Christopher AI showcase${NC}"
echo -e "${PURPLE}Marketing website + Attorney portal + Client portal${NC}"
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
    print_success "Git repository initialized"
fi

# =============================================================================
# PROJECT STRUCTURE
# =============================================================================

print_section "Next.js Project Structure"

# Root directories
create_dir "src"
create_dir "src/pages"
create_dir "src/components"
create_dir "src/styles"
create_dir "src/lib"
create_dir "src/hooks"
create_dir "src/utils"
create_dir "src/types"
create_dir "public"
create_dir "public/images"
create_dir "public/icons"
create_dir "public/avatars"

# Marketing Website Pages
print_section "Marketing Website Pages"
create_dir "src/pages/api"
create_dir "src/components/marketing"
create_dir "src/components/marketing/hero"
create_dir "src/components/marketing/features"
create_dir "src/components/marketing/pricing"
create_dir "src/components/marketing/testimonials"
create_dir "src/components/marketing/demo"

# Attorney Portal
print_section "Attorney Portal"
create_dir "src/pages/dashboard"
create_dir "src/pages/dashboard/cases"
create_dir "src/pages/dashboard/clients"
create_dir "src/pages/dashboard/communications"
create_dir "src/pages/dashboard/revenue"
create_dir "src/pages/dashboard/compliance"
create_dir "src/pages/dashboard/settings"
create_dir "src/components/portal"
create_dir "src/components/portal/attorney"
create_dir "src/components/portal/sidebar"
create_dir "src/components/portal/dashboard"

# Client Portal
print_section "Client Portal"
create_dir "src/pages/client"
create_dir "src/pages/client/case"
create_dir "src/pages/client/documents"
create_dir "src/pages/client/communications"
create_dir "src/pages/client/billing"
create_dir "src/components/portal/client"

# Authentication
print_section "Authentication System"
create_dir "src/pages/auth"
create_dir "src/components/auth"

# Christopher AI Components
print_section "Christopher AI Interface"
create_dir "src/components/christopher"
create_dir "src/components/christopher/avatars"
create_dir "src/components/christopher/chat"
create_dir "src/components/christopher/video"

# Shared Components
print_section "Shared UI Components"
create_dir "src/components/ui"
create_dir "src/components/ui/buttons"
create_dir "src/components/ui/forms"
create_dir "src/components/ui/cards"
create_dir "src/components/ui/modals"
create_dir "src/components/ui/navigation"

# Legal Specific Components
create_dir "src/components/legal"
create_dir "src/components/legal/compliance"
create_dir "src/components/legal/nevada"

# =============================================================================
# CONFIGURATION FILES
# =============================================================================

print_section "Configuration Files"

# Package.json
cat > package.json << 'EOF'
{
  "name": "caseclosed-website",
  "version": "0.1.0",
  "description": "Revolutionary legal technology website with Christopher AI avatars",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "analyze": "cross-env ANALYZE=true next build",
    "export": "next export"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "5.3.3",
    "@types/node": "20.10.5",
    "@types/react": "18.2.45",
    "@types/react-dom": "18.2.18",
    "tailwindcss": "3.3.6",
    "autoprefixer": "10.4.16",
    "postcss": "8.4.32",
    "@headlessui/react": "1.7.17",
    "@heroicons/react": "2.0.18",
    "clsx": "2.0.0",
    "framer-motion": "10.16.16",
    "react-hook-form": "7.48.2",
    "@hookform/resolvers": "3.3.2",
    "zod": "3.22.4",
    "next-auth": "4.24.5",
    "axios": "1.6.2",
    "swr": "2.2.4",
    "date-fns": "2.30.0",
    "react-hot-toast": "2.4.1",
    "lucide-react": "0.294.0"
  },
  "devDependencies": {
    "eslint": "8.56.0",
    "eslint-config-next": "14.0.4",
    "@tailwindcss/forms": "0.5.7",
    "@tailwindcss/typography": "0.5.10",
    "cross-env": "7.0.3",
    "@next/bundle-analyzer": "14.0.4"
  },
  "keywords": [
    "legal-technology",
    "nevada-attorneys",
    "christopher-ai",
    "attorney-portal",
    "legal-practice-management",
    "nevada-bar-compliance",
    "ai-avatars",
    "legal-automation"
  ],
  "author": {
    "name": "CaseClosed, Inc.",
    "email": "dev@caseclosed.com",
    "url": "https://caseclosed.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/OmniAgent/caseclosed-website.git"
  },
  "homepage": "https://caseclosed.com",
  "license": "UNLICENSED"
}
EOF
print_success "Created package.json"

# Next.js Configuration
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: 'CaseClosed',
    NEXT_PUBLIC_APP_VERSION: '0.1.0',
  },
  
  // Image optimization
  images: {
    domains: [
      'caseclosed.com',
      'cdn.caseclosed.com',
      'api.caseclosed.com',
      'avatars.caseclosed.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // API routes
  async rewrites() {
    return [
      {
        source: '/api/christopher/:path*',
        destination: `${process.env.CHRISTOPHER_AI_URL || 'http://localhost:8001'}/:path*`,
      },
      {
        source: '/api/platform/:path*',
        destination: `${process.env.API_URL || 'http://localhost:5000'}/:path*`,
      },
    ]
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Build optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig
EOF
print_success "Created next.config.js"

# Tailwind Configuration with CaseClosed Branding
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* CaseClosed Brand Colors */
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#648199',
          600: '#4a6741',
          700: '#324d5c',
          800: '#1a3441',
          900: '#032440',  // CaseClosed Primary Navy
          950: '#021a2e',
        },
        accent: {
          50: '#fefcf0',
          100: '#fef7d3',
          200: '#fdeaa6',
          300: '#fbdc79',
          400: '#f8ce4c',
          500: '#f5c01f',
          600: '#e2a512',
          700: '#cb9628',  // CaseClosed Accent Gold
          800: '#a67920',
          900: '#7d5c18',
          950: '#543f10',
        },
        /* Professional Neutral Palette */
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        /* Legal Status Colors */
        legal: {
          active: '#10b981',
          pending: '#f59e0b',
          urgent: '#ef4444',
          complete: '#06b6d4',
          draft: '#6b7280',
        },
        /* Christopher AI Avatar Colors */
        christopher: {
          classic: '#3b82f6',
          professional: '#1f2937',
          bilingual: '#059669',
          tech: '#8b5cf6',
          experienced: '#92400e',
          approachable: '#f97316',
          international: '#0891b2',
          community: '#b45309',
        },
      },
      
      /* Typography for Legal Documents */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        legal: ['Times New Roman', 'serif'],
        display: ['Poppins', 'sans-serif'],
      },
      
      /* Professional Spacing */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
      
      /* Professional Shadows */
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'modal': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'dropdown': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'legal': '0 4px 6px -1px rgb(3 36 64 / 0.1), 0 2px 4px -2px rgb(3 36 64 / 0.1)',
      },
      
      /* Professional Border Radius */
      borderRadius: {
        'card': '0.5rem',
        'button': '0.375rem',
      },
      
      /* Animations for Christopher AI */
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'christopher-appear': 'christopherAppear 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        christopherAppear: {
          '0%': { transform: 'scale(0.8) translateY(20px)', opacity: '0' },
          '50%': { transform: 'scale(1.05) translateY(-5px)', opacity: '0.8' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
      },
      
      /* Gradient Definitions */
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #032440 0%, #648199 100%)',
        'gradient-accent': 'linear-gradient(135deg, #cb9628 0%, #f5c01f 100%)',
        'gradient-legal': 'linear-gradient(135deg, #032440 0%, #cb9628 100%)',
        'gradient-hero': 'linear-gradient(135deg, #032440 0%, #1f2937 50%, #cb9628 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    
    /* Custom CaseClosed Plugin */
    function({ addUtilities, addComponents, theme }) {
      /* Professional Card Components */
      addComponents({
        '.professional-card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.card'),
          boxShadow: theme('boxShadow.card'),
          padding: theme('spacing.6'),
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: theme('boxShadow.lg'),
            transform: 'translateY(-2px)',
          },
        },
        '.legal-button': {
          backgroundColor: theme('colors.primary.900'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.button'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: theme('colors.primary.800'),
            transform: 'translateY(-1px)',
          },
        },
        '.accent-button': {
          backgroundColor: theme('colors.accent.700'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.button'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: theme('colors.accent.800'),
            transform: 'translateY(-1px)',
          },
        },
        '.christopher-avatar': {
          width: '3rem',
          height: '3rem',
          borderRadius: theme('borderRadius.full'),
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.medium'),
          boxShadow: theme('boxShadow.md'),
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.primary.600'),
            boxShadow: theme('boxShadow.lg'),
            transform: 'scale(1.05)',
          },
        },
      });
    },
  ],
  
  /* Safelist for Dynamic Classes */
  safelist: [
    'bg-christopher-classic',
    'bg-christopher-professional',
    'bg-christopher-bilingual',
    'bg-christopher-tech',
    'bg-christopher-experienced',
    'bg-christopher-approachable',
    'bg-christopher-international',
    'bg-christopher-community',
    'animate-christopher-appear',
    'animate-fade-in',
    'animate-slide-up',
  ],
}
EOF
print_success "Created tailwind.config.js"

# PostCSS Configuration
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF
print_success "Created postcss.config.js"

# TypeScript Configuration
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF
print_success "Created tsconfig.json"

# Environment Variables Template
cat > .env.example << 'EOF'
# =============================================================================
# CASECLOSED WEBSITE ENVIRONMENT CONFIGURATION
# =============================================================================
# Copy this file to .env.local and update with your actual values

# Application Configuration
NEXT_PUBLIC_APP_NAME="CaseClosed"
NEXT_PUBLIC_APP_URL="https://caseclosed.com"
NEXT_PUBLIC_APP_VERSION="0.1.0"

# API Endpoints
NEXT_PUBLIC_API_URL="https://api.caseclosed.com"
NEXT_PUBLIC_CHRISTOPHER_AI_URL="https://christopher-ai.caseclosed.com"
CHRISTOPHER_AI_URL="http://localhost:8001"
API_URL="http://localhost:5000"

# Authentication (NextAuth.js)
NEXTAUTH_URL="https://caseclosed.com"
NEXTAUTH_SECRET="your_nextauth_secret_here"

# Database (if needed for sessions)
DATABASE_URL="postgresql://user:password@localhost:5432/caseclosed_website"

# Christopher AI Demo Configuration
NEXT_PUBLIC_DEMO_MODE="true"
NEXT_PUBLIC_DEMO_AVATAR="christopher_classic"

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="GA-your_tracking_id"
NEXT_PUBLIC_HOTJAR_ID="your_hotjar_id"

# Marketing
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/caseclosed-demo"
NEXT_PUBLIC_SUPPORT_EMAIL="support@caseclosed.com"
NEXT_PUBLIC_SALES_EMAIL="sales@caseclosed.com"

# Nevada Compliance
NEXT_PUBLIC_NEVADA_BAR_COMPLIANT="true"
NEXT_PUBLIC_NEVADA_DISCLAIMER="true"

# Feature Flags
NEXT_PUBLIC_ENABLE_CHRISTOPHER_DEMO="true"
NEXT_PUBLIC_ENABLE_ATTORNEY_SIGNUP="true"
NEXT_PUBLIC_ENABLE_CLIENT_PORTAL="true"
NEXT_PUBLIC_MAINTENANCE_MODE="false"

# Social Media
NEXT_PUBLIC_TWITTER_URL="https://twitter.com/caseclosed"
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/company/caseclosed"

# Legal Disclaimers
NEXT_PUBLIC_PRIVACY_POLICY_URL="/legal/privacy"
NEXT_PUBLIC_TERMS_OF_SERVICE_URL="/legal/terms"
NEXT_PUBLIC_NEVADA_COMPLIANCE_URL="/legal/nevada-compliance"
EOF
print_success "Created .env.example"

# ESLint Configuration
cat > .eslintrc.json << 'EOF'
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}
EOF
print_success "Created .eslintrc.json"

# Git Ignore
cat > .gitignore << 'EOF'
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Temporary folders
tmp/
temp/
EOF
print_success "Created .gitignore"

# =============================================================================
# BASIC FILE STRUCTURE
# =============================================================================

print_section "Basic File Structure"

# Global Styles
cat > src/styles/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CaseClosed Global Styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap');

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply font-sans text-neutral-900 antialiased;
  }
  
  /* Professional Legal Typography */
  .legal-text {
    @apply font-legal leading-relaxed text-neutral-800;
  }
  
  .display-text {
    @apply font-display font-semibold;
  }
}

@layer components {
  /* Professional Button Styles */
  .btn-primary {
    @apply legal-button;
  }
  
  .btn-accent {
    @apply accent-button;
  }
  
  .btn-outline {
    @apply border-2 border-primary-900 text-primary-900 px-6 py-3 rounded-button font-medium transition-all duration-200 hover:bg-primary-900 hover:text-white;
  }
  
  /* Christopher AI Styles */
  .christopher-container {
    @apply bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200;
  }
  
  .christopher-message {
    @apply bg-white rounded-lg p-4 shadow-sm border border-primary-100;
  }
  
  /* Professional Card Styles */
  .feature-card {
    @apply professional-card border border-neutral-200 hover:border-primary-300 transition-all duration-300;
  }
  
  .pricing-card {
    @apply professional-card border-2 border-neutral-200 hover:border-accent-400 hover:shadow-xl transition-all duration-300;
  }
  
  .portal-card {
    @apply bg-white rounded-lg shadow-card p-6 border border-neutral-200;
  }
}

@layer utilities {
  /* Professional Gradients */
  .gradient-primary {
    @apply bg-gradient-primary;
  }
  
  .gradient-accent {
    @apply bg-gradient-accent;
  }
  
  .gradient-hero {
    @apply bg-gradient-hero;
  }
  
  /* Text Gradients */
  .text-gradient-primary {
    @apply bg-gradient-to-r from-primary-900 to-accent-700 bg-clip-text text-transparent;
  }
  
  /* Professional Spacing */
  .section-padding {
    @apply py-16 px-4 sm:px-6 lg:px-8;
  }
  
  .container-width {
    @apply max-w-7xl mx-auto;
  }
  
  /* Legal Document Styles */
  .legal-document {
    @apply font-legal text-base leading-relaxed text-neutral-900 max-w-4xl;
  }
}

/* Professional Scroll Styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-neutral-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-primary-300 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-primary-400;
}

/* Professional Focus Styles */
*:focus {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2;
}

/* Professional Loading Animation */
.loading-spinner {
  @apply animate-spin rounded-full h-6 w-6 border-b-2 border-primary-900;
}

/* Christopher AI Animation */
.christopher-typing {
  @apply animate-pulse;
}

.christopher-avatar-bounce:hover {
  @apply animate-bounce;
}

/* Professional Shadows */
.shadow-professional {
  box-shadow: 0 10px 25px -5px rgba(3, 36, 64, 0.1), 0 4px 6px -2px rgba(3, 36, 64, 0.05);
}

/* Nevada Gold Accent */
.nevada-accent {
  @apply text-accent-700 font-semibold;
}

.nevada-border {
  @apply border-l-4 border-accent-600;
}
EOF
print_success "Created src/styles/globals.css"

# =============================================================================
# README FOR WEBSITE REPOSITORY
# =============================================================================

cat > README.md << 'EOF'
# CaseClosed Website

> Revolutionary legal technology website with Christopher AI avatars

## 🌟 Website Features

- **Marketing Website** - Professional landing page with Christopher AI showcase
- **Attorney Portal** - Complete practice management dashboard
- **Client Portal** - Client communication and case access
- **Christopher AI Demo** - Interactive AI avatar demonstration
- **Nevada Compliance** - Legal compliance and professional responsibility

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:3000
```

## 🎨 Design System

### Colors
- **Primary Navy**: #032440 (CaseClosed brand)
- **Accent Gold**: #cb9628 (Nevada legal gold)
- **Professional Grays**: Neutral palette for legal content

### Christopher AI Avatars
- 8 distinct avatar personalities
- Multi-cultural and multi-language support
- Professional legal communication

## 📁 Project Structure

```
src/
├── pages/              # Next.js pages (marketing + portals)
├── components/         # React components
│   ├── marketing/      # Marketing website components
│   ├── portal/         # Attorney and client portals
│   ├── christopher/    # Christopher AI interface
│   └── ui/            # Shared UI components
├── styles/            # Global CSS and Tailwind
├── lib/               # Utilities and API clients
└── types/             # TypeScript definitions
```

## 🔧 Development

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run type-check   # TypeScript checking
```

## 🚀 Deployment

This website is designed to be deployed on:
- **Netlify** (recommended for marketing site)
- **Vercel** (alternative with excellent Next.js support)
- **AWS Amplify** (enterprise deployment)

## 🔗 API Integration

The website connects to the private CaseClosed platform:
- **Christopher AI Service**: AI avatar communication
- **Main API**: Case management and attorney portal
- **Authentication**: NextAuth.js with secure sessions

## ⚖️ Legal Compliance

- Nevada State Bar compliance monitoring
- Attorney-client privilege protection
- Professional responsibility guidelines
- GDPR and privacy compliance

---

**© 2025 CaseClosed, Inc. - Revolutionizing legal practice through AI innovation**
EOF
print_success "Created README.md"

# =============================================================================
# PLACEHOLDER FILES
# =============================================================================

print_section "Creating Placeholder Files"

# Create basic placeholder files
create_file "src/pages/index.tsx"
create_file "src/pages/_app.tsx"
create_file "src/pages/_document.tsx"
create_file "src/pages/about.tsx"
create_file "src/pages/pricing.tsx"
create_file "src/pages/demo.tsx"
create_file "src/pages/dashboard/index.tsx"
create_file "src/pages/client/index.tsx"
create_file "src/pages/auth/login.tsx"
create_file "src/pages/auth/register.tsx"

# Component placeholders
create_file "src/components/marketing/Hero.tsx"
create_file "src/components/marketing/Features.tsx"
create_file "src/components/marketing/Pricing.tsx"
create_file "src/components/christopher/AvatarDemo.tsx"
create_file "src/components/portal/attorney/Dashboard.tsx"
create_file "src/components/portal/client/Dashboard.tsx"

# =============================================================================
# FINAL SETUP
# =============================================================================

print_section "Final Setup"

# Make sure package.json is executable
chmod 644 package.json

print_header "CASECLOSED WEBSITE SETUP COMPLETE"

echo -e "${GREEN}🎉 CaseClosed website repository created successfully!${NC}"
echo ""
echo -e "${CYAN}📊 Structure Summary:${NC}"
echo -e "  • ${YELLOW}Next.js 14${NC} with TypeScript and Tailwind CSS"
echo -e "  • ${YELLOW}Marketing Website${NC} with Christopher AI showcase"
echo -e "  • ${YELLOW}Attorney Portal${NC} for practice management"
echo -e "  • ${YELLOW}Client Portal${NC} for client communication"
echo -e "  • ${YELLOW}Christopher AI Demo${NC} with 8 avatar personalities"
echo -e "  • ${YELLOW}Nevada Branding${NC} with professional navy/gold design"
echo ""
echo -e "${CYAN}🚀 Next Steps:${NC}"
echo -e "  1. Install dependencies: ${YELLOW}npm install${NC}"
echo -e "  2. Set up environment: ${YELLOW}cp .env.example .env.local${NC}"
echo -e "  3. Start development: ${YELLOW}npm run dev${NC}"
echo -e "  4. Build landing page with Christopher AI showcase"
echo -e "  5. Deploy to Netlify for public access"
echo ""
echo -e "${PURPLE}🤖 Christopher AI Ready:${NC}"
echo -e "  • 8 avatar personalities with cultural intelligence"
echo -e "  • Nevada legal branding and compliance features"
echo -e "  • Professional attorney and client portals"
echo -e "  • Marketing website for customer acquisition"
echo ""
echo -e "${BLUE}⚖️  Ready to revolutionize Nevada legal practice! 🚀${NC}"
