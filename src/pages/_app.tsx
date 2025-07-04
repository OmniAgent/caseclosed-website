import { AppProps } from 'next/app'
import Head from 'next/head'

// Styles - make sure this path exists
import '../styles/globals.css'

function CaseClosedApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Basic meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#032440" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* SEO */}
        <title>CaseClosed - Revolutionary Legal Technology</title>
        <meta name="description" content="Revolutionary legal technology platform with Christopher AI avatars for Nevada attorneys" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CaseClosed - Revolutionary Legal Technology" />
        <meta property="og:description" content="Christopher AI avatars with Nevada attorney-broker advantage" />
        <meta property="og:type" content="website" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default CaseClosedApp
