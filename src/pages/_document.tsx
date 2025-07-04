import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://api.caseclosed.com" />
        <link rel="dns-prefetch" href="https://christopher-ai.caseclosed.com" />
        
        {/* Preload critical CSS */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </noscript>
        
        {/* Favicon and PWA icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme colors for different browsers */}
        <meta name="theme-color" content="#032440" />
        <meta name="msapplication-TileColor" content="#032440" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* SEO and social media meta tags */}
        <meta name="application-name" content="CaseClosed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CaseClosed" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Default Open Graph tags */}
        <meta property="og:site_name" content="CaseClosed" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="CaseClosed - Revolutionary Legal Technology with Christopher AI" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CaseClosedAI" />
        <meta name="twitter:creator" content="@CaseClosedAI" />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
        
        {/* Legal and compliance meta tags */}
        <meta name="legal-compliance" content="Nevada State Bar Compliant" />
        <meta name="attorney-client-privilege" content="Protected" />
        <meta name="hipaa-compliance" content="Enabled" />
        <meta name="nevada-bar-integration" content="NRS 7.107" />
        
        {/* Christopher AI meta tags */}
        <meta name="christopher-ai" content="8 Cultural Avatars" />
        <meta name="supported-languages" content="English, Spanish, Arabic, Chinese, Italian" />
        <meta name="ai-capabilities" content="Video Generation, Voice Synthesis, Cultural Intelligence" />
        
        {/* Structured data for legal services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'CaseClosed',
              description: 'Revolutionary legal technology platform with Christopher AI avatars for Nevada attorneys',
              applicationCategory: 'Legal Technology',
              operatingSystem: 'Web',
              url: 'https://caseclosed.com',
              author: {
                '@type': 'Organization',
                name: 'CaseClosed, Inc.',
                url: 'https://caseclosed.com',
                logo: 'https://caseclosed.com/logo.png',
              },
              offers: {
                '@type': 'Offer',
                price: '399',
                priceCurrency: 'USD',
                priceValidUntil: '2025-12-31',
                availability: 'https://schema.org/InStock',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '127',
                bestRating: '5',
              },
              featureList: [
                'Christopher AI Avatars',
                'Nevada Attorney-Broker Integration',
                'Multi-Language Support',
                'Cultural Intelligence',
                'Professional Service Coordination',
                'Legal Compliance Monitoring',
                'Revenue Optimization',
                'Mobile-First Design',
              ],
            }),
          }}
        />
        
        {/* Structured data for legal organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CaseClosed, Inc.',
              url: 'https://caseclosed.com',
              logo: 'https://caseclosed.com/logo.png',
              sameAs: [
                'https://www.linkedin.com/company/caseclosed',
                'https://twitter.com/CaseClosedAI',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-702-555-0123',
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: ['English', 'Spanish', 'Arabic', 'Chinese', 'Italian'],
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89101',
                addressCountry: 'US',
              },
              description: 'Revolutionary legal technology platform leveraging Nevada attorney-broker advantage with Christopher AI cultural intelligence for enhanced client communication and practice management.',
            }),
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/christopher/classic.jpg" as="image" />
        <link rel="preload" href="/images/nevada/state-outline.svg" as="image" />
        <link rel="preload" href="/logo.png" as="image" />
        
        {/* Legal disclaimer and compliance */}
        <meta name="legal-disclaimer" content="Legal technology platform for Nevada attorneys. Not a substitute for legal advice." />
        <meta name="bar-compliance" content="Nevada State Bar Rules of Professional Conduct" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance optimization */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        
        {/* Christopher AI preload hints */}
        <link rel="modulepreload" href="/js/christopher-ai.js" />
        <link rel="prefetch" href="/api/christopher/avatars" />
        
        {/* Critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for initial render */
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #1f2937;
                background-color: #ffffff;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              
              /* Prevent flash of unstyled content */
              .hero-section {
                min-height: 100vh;
                background: linear-gradient(135deg, #032440 0%, #1e3a8a 100%);
              }
              
              /* Christopher AI avatar loading states */
              .christopher-avatar {
                border-radius: 50%;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(203, 150, 40, 0.3);
              }
              
              /* Nevada gold accent */
              .nevada-gold {
                color: #cb9628;
              }
              
              /* Professional navy */
              .professional-navy {
                color: #032440;
              }
              
              /* Loading spinner for Christopher AI */
              .christopher-loading {
                animation: spin 1s linear infinite;
              }
              
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              
              /* Ensure proper font loading */
              @font-face {
                font-family: 'Inter';
                font-display: swap;
                src: url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
              }
            `,
          }}
        />
      </Head>
      
      <body className="antialiased">
        <Main />
        <NextScript />
        
        {/* Fallback for no JavaScript */}
        <noscript>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            textAlign: 'center',
            padding: '20px',
          }}>
            <div>
              <h1>CaseClosed - Revolutionary Legal Technology</h1>
              <p>JavaScript is required to experience Christopher AI and all platform features.</p>
              <p>Please enable JavaScript in your browser to continue.</p>
            </div>
          </div>
        </noscript>
      </body>
    </Html>
  )
}
