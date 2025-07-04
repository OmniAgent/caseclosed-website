import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#032440" />
        <meta name="msapplication-TileColor" content="#032440" />
        
        {/* SEO and legal meta tags */}
        <meta name="application-name" content="CaseClosed" />
        <meta name="legal-compliance" content="Nevada State Bar Compliant" />
        <meta name="attorney-client-privilege" content="Protected" />
        <meta name="christopher-ai" content="8 Cultural Avatars" />
        
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
              },
              offers: {
                '@type': 'Offer',
                price: '399',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
              featureList: [
                'Christopher AI Avatars',
                'Nevada Attorney-Broker Integration',
                'Multi-Language Support',
                'Cultural Intelligence',
                'Professional Service Coordination',
              ],
            }),
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
