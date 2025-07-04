import { useState, useEffect } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  // Christopher avatars data with real info
  const christopherAvatars = [
    {
      id: 1,
      name: "Christopher Classic",
      image: "/avatars/christopher-classic.jpg", // Will be the first image you showed
      appearance: "Caucasian, late 30s, friendly everyman",
      specialization: "General practice, suburban/rural markets",
      personality: "Warm, neighborly, guy-next-door relatability"
    },
    {
      id: 2,
      name: "Christopher Professional", 
      image: "/avatars/christopher-professional.jpg", // Will be the second image you showed
      appearance: "African American, early 40s, polished professional",
      specialization: "Urban practices, corporate clients",
      personality: "Authoritative but approachable"
    },
    {
      id: 3,
      name: "Christopher Bilingual",
      image: "/avatars/christopher-bilingual.jpg", // Will be the third image you showed
      appearance: "Hispanic/Latino, mid-30s, family-focused",
      specialization: "Spanish-speaking clients, family law",
      personality: "Culturally sensitive, community-oriented"
    },
    {
      id: 4,
      name: "Christopher Tech-Forward",
      image: "/avatars/christopher-tech-forward.jpg", // Placeholder for now
      appearance: "Asian American, early 30s, modern professional",
      specialization: "Tech industry clients, younger demographics",
      personality: "Efficient, detail-oriented, innovation-focused"
    },
    {
      id: 5,
      name: "Christopher Experienced",
      image: "/avatars/christopher-experienced.jpg", // Placeholder for now
      appearance: "Caucasian, early 50s, distinguished professional",
      specialization: "High-net-worth clients, luxury real estate",
      personality: "Wisdom-focused, trustworthy"
    },
    {
      id: 6,
      name: "Christopher Approachable",
      image: "/avatars/christopher-approachable.jpg", // Placeholder for now
      appearance: "Mixed/Multiracial, late 20s, energetic",
      specialization: "First-time buyers, millennials",
      personality: "Contemporary, peer-to-peer relatability"
    },
    {
      id: 7,
      name: "Christopher International",
      image: "/avatars/christopher-international.jpg", // Placeholder for now
      appearance: "Middle Eastern/South Asian, mid-30s",
      specialization: "International clients, investment properties",
      personality: "Culturally sophisticated, diplomatic"
    },
    {
      id: 8,
      name: "Christopher Community",
      image: "/avatars/christopher-community.jpg", // Placeholder for now
      appearance: "Native American, late 30s, community-focused",
      specialization: "Community-based transactions, cultural sensitivity",
      personality: "Respectful, traditional values with modern expertise"
    }
  ]

  // Floating animation for Christopher avatars
  const FloatingChristophers = () => {
    return (
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {christopherAvatars.map((avatar, index) => (
          <div
            key={avatar.id}
            style={{
              position: 'absolute',
              top: `${20 + (index * 10)}%`,
              left: '100%',
              animation: `floatAcross ${30 + (index * 2)}s linear infinite`,
              animationDelay: `${index * 3}s`,
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: '0.75rem',
              borderRadius: '2rem',
              border: '1px solid rgba(203, 150, 40, 0.3)',
              whiteSpace: 'nowrap'
            }}
          >
            <img 
              src={avatar.image}
              alt={avatar.name}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #cb9628',
                animation: 'bounce 2s ease-in-out infinite'
              }}
            />
            <span style={{
              color: '#cb9628',
              fontWeight: '600',
              fontSize: '1.1rem',
              animation: 'textBounce 2s ease-in-out infinite'
            }}>
              {avatar.name}
            </span>
          </div>
        ))}
        
        <style jsx>{`
          @keyframes floatAcross {
            0% {
              transform: translateX(0) translateY(0);
            }
            25% {
              transform: translateX(-25vw) translateY(-10px);
            }
            50% {
              transform: translateX(-50vw) translateY(0);
            }
            75% {
              transform: translateX(-75vw) translateY(-10px);
            }
            100% {
              transform: translateX(-100vw) translateY(0);
            }
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          
          @keyframes textBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-3px);
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #032440 0%, #1e3a8a 50%, #032440 100%)', // Updated to brand navy
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Christopher Animation */}
      <FloatingChristophers />
      
      {/* Header with Dropdown Menus */}
      <header style={{ 
        position: 'relative', 
        zIndex: 10, 
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              background: '#cb9628',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>
              ⚖️
            </div>
            <h1 style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
              fontWeight: '700', 
              margin: 0,
              background: 'linear-gradient(135deg, #ffffff 0%, #cb9628 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              CaseClosed
            </h1>
          </div>
          
          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Features Dropdown */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setDropdownOpen(dropdownOpen === 'features' ? null : 'features')}
                style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  background: 'none',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Features ▼
              </button>
              {dropdownOpen === 'features' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  background: 'rgba(3, 36, 64, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(203, 150, 40, 0.3)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  minWidth: '200px',
                  zIndex: 1000
                }}>
                  <a href="#ai-avatars" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>AI Avatars</a>
                  <a href="#multi-language" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Multi-Language</a>
                  <a href="#video-messaging" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Video Messaging</a>
                  <a href="#case-management" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Case Management</a>
                </div>
              )}
            </div>

            {/* Christopher AI Dropdown */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setDropdownOpen(dropdownOpen === 'christopher' ? null : 'christopher')}
                style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  background: 'none',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Christopher AI ▼
              </button>
              {dropdownOpen === 'christopher' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  background: 'rgba(3, 36, 64, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(203, 150, 40, 0.3)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  minWidth: '200px',
                  zIndex: 1000
                }}>
                  <a href="#christopher-classic" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Christopher Classic</a>
                  <a href="#christopher-professional" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Christopher Professional</a>
                  <a href="#christopher-bilingual" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Christopher Bilingual</a>
                  <a href="#all-avatars" style={{ display: 'block', color: '#cb9628', textDecoration: 'none', padding: '0.5rem 0' }}>View All 8 Avatars</a>
                </div>
              )}
            </div>

            {/* Nevada Advantage Dropdown */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setDropdownOpen(dropdownOpen === 'nevada' ? null : 'nevada')}
                style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  background: 'none',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Nevada Advantage ▼
              </button>
              {dropdownOpen === 'nevada' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  background: 'rgba(3, 36, 64, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(203, 150, 40, 0.3)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  minWidth: '200px',
                  zIndex: 1000
                }}>
                  <a href="#attorney-broker" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Attorney-Broker License</a>
                  <a href="#multicultural-market" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Multicultural Market</a>
                  <a href="#competitive-edge" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Competitive Edge</a>
                  <a href="#compliance" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Nevada Compliance</a>
                </div>
              )}
            </div>

            {/* Portal Access */}
            <a href="/portal" style={{ 
              color: '#cb9628', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: '1px solid #cb9628',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.2s'
            }}>
              Attorney Portal
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ 
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: '700', 
            margin: '0 0 1.5rem 0',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #ffffff 0%, #cb9628 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Revolutionary Legal Technology
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
            margin: '0 0 2rem 0',
            opacity: 0.95,
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.4'
          }}>
            Transform your Nevada legal practice with Christopher AI's 8 cultural avatars, 
            attorney-broker advantage, and multi-language intelligence.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <button style={{ 
              background: 'linear-gradient(135deg, #cb9628 0%, #fbbf24 100%)',
              color: '#032440',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 8px 32px rgba(203, 150, 40, 0.3)'
            }}>
              Start Free Trial
            </button>
            <button style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
              backdropFilter: 'blur(10px)'
            }}>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Christopher AI Avatars Section */}
        <section id="christopher" style={{ marginBottom: '5rem' }}>
          <h3 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: '700', 
            margin: '0 0 3rem 0',
            background: 'linear-gradient(135deg, #ffffff 0%, #cb9628 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Meet Christopher AI - 8 Cultural Avatars
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {christopherAvatars.map((avatar, index) => (
              <div key={avatar.id} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(203, 150, 40, 0.3)',
                transition: 'transform 0.2s, background 0.2s',
                textAlign: 'center'
              }}>
                <img 
                  src={avatar.image}
                  alt={avatar.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #cb9628',
                    marginBottom: '1.5rem',
                    transition: 'transform 0.2s'
                  }}
                />
                <h4 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  margin: '0 0 0.5rem 0',
                  color: '#cb9628'
                }}>
                  {avatar.name}
                </h4>
                <p style={{ 
                  fontSize: '0.95rem', 
                  margin: '0 0 0.75rem 0',
                  opacity: 0.9,
                  lineHeight: '1.4'
                }}>
                  {avatar.appearance}
                </p>
                <p style={{ 
                  fontSize: '0.9rem', 
                  margin: '0 0 0.75rem 0',
                  opacity: 0.8,
                  fontStyle: 'italic'
                }}>
                  {avatar.specialization}
                </p>
                <p style={{ 
                  fontSize: '0.85rem', 
                  margin: 0,
                  color: '#93c5fd',
                  fontWeight: '500'
                }}>
                  {avatar.personality}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Nevada Advantage Section */}
        <section id="nevada" style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '2rem',
          padding: '3rem',
          margin: '0 0 5rem 0',
          border: '1px solid rgba(203, 150, 40, 0.3)'
        }}>
          <h3 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: '700', 
            margin: '0 0 2rem 0',
            background: 'linear-gradient(135deg, #ffffff 0%, #cb9628 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Nevada Attorney-Broker Advantage
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'left'
          }}>
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0 0 1rem 0', color: '#cb9628' }}>
                🏠 Real Estate Law
              </h4>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                Dual attorney-broker licensing allows you to represent clients in both legal and real estate transactions, 
                maximizing revenue per case.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0 0 1rem 0', color: '#cb9628' }}>
                🌍 Multi-Cultural Market
              </h4>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                Nevada's diverse population needs Christopher AI's cultural intelligence to serve Spanish, Arabic, 
                Chinese, and other language communities effectively.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0 0 1rem 0', color: '#cb9628' }}>
                💼 Business Growth
              </h4>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                Unique positioning in Nevada's competitive market with AI-powered client communication 
                and cultural sensitivity gives you a decisive advantage.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem',
        opacity: 0.8,
        borderTop: '1px solid rgba(203, 150, 40, 0.3)',
        position: 'relative',
        zIndex: 2
      }}>
        <p style={{ margin: 0, fontSize: '1rem' }}>
          © 2025 CaseClosed, Inc. | Revolutionizing Legal Technology with Christopher AI | Nevada State Bar Compliant
        </p>
      </footer>
    </div>
  )
}
