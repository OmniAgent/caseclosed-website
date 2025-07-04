/** @type {import('next').NextConfig} */
const nextConfig = {
  // Application configuration
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Environment and build configuration
  env: {
    APP_NAME: 'CaseClosed',
    APP_VERSION: '1.0.0',
    CHRISTOPHER_AI_VERSION: '1.0.0',
    NEVADA_COMPLIANCE_VERSION: '1.0.0',
  },
  
  // Performance optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    turbotrace: {
      logLevel: 'error',
    },
  },
  
  // Image optimization for Christopher AI avatars and marketing
  images: {
    domains: [
      'caseclosed.com',
      'api.caseclosed.com',
      'christopher-ai.caseclosed.com',
      'cdn.caseclosed.com',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
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
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.hotjar.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://api.caseclosed.com https://christopher-ai.caseclosed.com https://www.google-analytics.com https://vitals.vercel-insights.com https://static.hotjar.com wss://static.hotjar.com",
              "frame-src 'self' https://www.youtube.com https://player.vimeo.com",
              "worker-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          {
            key: 'X-Legal-Compliance',
            value: 'Nevada State Bar Compliant',
          },
          {
            key: 'X-Attorney-Client-Privilege',
            value: 'Protected',
          },
          {
            key: 'X-Christopher-AI',
            value: '8 Cultural Avatars',
          },
        ],
      },
      // Cache headers for static assets
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/avatars/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icons/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // API headers
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
          {
            key: 'X-Legal-API',
            value: 'Attorney-Client Privilege Protected',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO and user experience
  async redirects() {
    return [
      // Redirect old paths to new structure
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/attorney-dashboard',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/christopher',
        destination: '/christopher-ai',
        permanent: true,
      },
      {
        source: '/nevada',
        destination: '/nevada-advantage',
        permanent: true,
      },
      // Redirect common typos
      {
        source: '/case-closed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/caseclosed',
        destination: '/',
        permanent: true,
      },
      // Legal compliance redirects
      {
        source: '/terms',
        destination: '/legal/terms-of-service',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
    ]
  },
  
  // Rewrites for API proxy and Christopher AI
  async rewrites() {
    return [
      // Proxy API requests to backend
      {
        source: '/api/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/:path*`,
      },
      // Proxy Christopher AI requests
      {
        source: '/api/christopher/:path*',
        destination: `${process.env.NEXT_PUBLIC_CHRISTOPHER_AI_URL}/api/:path*`,
      },
      // SEO-friendly URLs
      {
        source: '/attorneys/:path*',
        destination: '/dashboard/:path*',
      },
      {
        source: '/clients/:path*',
        destination: '/client/:path*',
      },
      // Christopher AI demo paths
      {
        source: '/try-christopher',
        destination: '/demo',
      },
      {
        source: '/ai-demo',
        destination: '/demo',
      },
    ]
  },
  
  // Webpack configuration for optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize Christopher AI modules
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    
    // Bundle analyzer in development
    if (dev && !isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.BUILD_ID': JSON.stringify(buildId),
          'process.env.BUILD_TIME': JSON.stringify(new Date().toISOString()),
        })
      )
    }
    
    // Optimize for production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
          },
          christopher: {
            test: /[\\/]christopher[\\/]/,
            name: 'christopher-ai',
            priority: 20,
          },
          legal: {
            test: /[\\/]legal[\\/]/,
            name: 'legal-components',
            priority: 15,
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
          },
        },
      }
    }
    
    // Ignore certain files to reduce bundle size
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      })
    )
    
    return config
  },
  
  // Output configuration
  output: 'standalone',
  
  // Compression
  compress: true,
  
  // Internationalization for multi-language support
  i18n: {
    locales: ['en', 'es', 'ar', 'zh', 'it'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src', 'pages', 'components', 'lib', 'utils'],
  },
  
  // Trailing slash configuration
  trailingSlash: false,
  
  // Build configuration
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  
  // Custom build ID for Christopher AI versioning
  generateBuildId: async () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    return `caseclosed-${timestamp}`
  },
  
  // Runtime configuration for client-side access
  publicRuntimeConfig: {
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'CaseClosed',
    APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    CHRISTOPHER_DEFAULT_AVATAR: process.env.NEXT_PUBLIC_CHRISTOPHER_DEFAULT_AVATAR || 'christopher_classic',
    SUPPORTED_LANGUAGES: process.env.NEXT_PUBLIC_SUPPORTED_LANGUAGES || 'en,es,ar,zh,it',
    NEVADA_COMPLIANCE_MODE: process.env.NEXT_PUBLIC_NEVADA_COMPLIANCE_MODE === 'true',
    ENABLE_CHRISTOPHER_CHAT: process.env.NEXT_PUBLIC_ENABLE_CHRISTOPHER_CHAT === 'true',
    ENABLE_DEMO_BOOKING: process.env.NEXT_PUBLIC_ENABLE_DEMO_BOOKING === 'true',
  },
  
  // Server runtime configuration
  serverRuntimeConfig: {
    API_URL: process.env.API_URL,
    CHRISTOPHER_AI_URL: process.env.CHRISTOPHER_AI_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
  },
  
  // Page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Custom error handling
  onError: (err, errorInfo) => {
    // Log errors to monitoring service
    console.error('Next.js Application Error:', err, errorInfo)
    
    // Send to external monitoring if in production
    if (process.env.NODE_ENV === 'production') {
      // Integration with error tracking service
      // sendToErrorTracking(err, errorInfo)
    }
  },
  
  // Development configuration
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  
  // Analytics and monitoring
  analyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  
  // Custom server configuration for Christopher AI
  async customServer() {
    return {
      hostname: 'localhost',
      port: 3000,
    }
  },
  
  // PWA configuration placeholder
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  
  // Sitemap generation
  async generateSitemap() {
    return {
      siteUrl: 'https://caseclosed.com',
      generateRobotsTxt: true,
      exclude: ['/dashboard/*', '/client/*', '/admin/*'],
      additionalPaths: async (config) => [
        await config.transform(config, '/christopher-ai'),
        await config.transform(config, '/nevada-advantage'),
        await config.transform(config, '/pricing'),
        await config.transform(config, '/demo'),
      ],
    }
  },
}

module.exports = nextConfig
