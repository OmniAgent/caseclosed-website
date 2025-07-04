import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// Styles
import '../styles/globals.css'

// Authentication context
import { AuthProvider } from '../lib/auth'

// Analytics
import { trackPageView } from '../lib/analytics'

// Create a React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

function CaseClosedApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Track page views for analytics
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Preload critical resources
  useEffect(() => {
    // Preload Christopher AI avatar images
    const avatarImages = [
      '/avatars/christopher/classic.jpg',
      '/avatars/christopher/professional.jpg',
      '/avatars/christopher/bilingual.jpg',
      '/avatars/christopher/tech-forward.jpg',
      '/avatars/christopher/experienced.jpg',
      '/avatars/christopher/approachable.jpg',
      '/avatars/christopher/international.jpg',
      '/avatars/christopher/community.jpg',
    ]

    avatarImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <>
      <Head>
        {/* Global meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#032440" />
        <meta name="msapplication-TileColor" content="#032440" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.caseclosed.com" />
        <link rel="preconnect" href="https://christopher-ai.caseclosed.com" />
        
        {/* Load fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
        {/* Global site tag (gtag.js) - Google Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_title: 'CaseClosed - Revolutionary Legal Technology',
                    page_location: window.location.href,
                    content_group1: 'Legal Technology',
                    content_group2: 'Nevada Attorneys',
                    content_group3: 'Christopher AI'
                  });
                `,
              }}
            />
          </>
        )}
        
        {/* Hotjar Tracking Code */}
        {process.env.NEXT_PUBLIC_HOTJAR_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
        )}
      </Head>

      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <div className="min-h-screen bg-white">
            <Component {...pageProps} />
            
            {/* Toast notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#032440',
                  color: '#ffffff',
                  border: '1px solid #cb9628',
                },
                success: {
                  style: {
                    background: '#059669',
                    color: '#ffffff',
                  },
                },
                error: {
                  style: {
                    background: '#dc2626',
                    color: '#ffffff',
                  },
                },
              }}
            />
          </div>
        </AuthProvider>
        
        {/* React Query DevTools - only in development */}
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </>
  )
}

export default CaseClosedApp
