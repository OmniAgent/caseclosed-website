/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic Next.js configuration for CaseClosed
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Image optimization for Christopher AI avatars
  images: {
    domains: [
      'caseclosed.com',
      'images.unsplash.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Basic security headers
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
            key: 'X-Legal-Compliance',
            value: 'Nevada State Bar Compliant',
          },
          {
            key: 'X-Christopher-AI',
            value: '8 Cultural Avatars',
          },
        ],
      },
    ]
  },
  
  // Basic redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/christopher',
        destination: '/christopher-ai',
        permanent: true,
      },
    ]
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Trailing slash configuration
  trailingSlash: false,
  
  // Output configuration for Netlify
  output: 'standalone',
}

module.exports = nextConfig
