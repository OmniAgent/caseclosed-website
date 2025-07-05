import { useState } from 'react'

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  // Christopher avatars data with personal perspectives
  const christopherAvatars = [
    {
      id: 1,
      name: "Christopher Classic",
      image: "/avatars/christopher-classic.png",
      personalIntro: "Hi, I'm Christopher Classic. I make complex legal processes feel simple and personal.",
      expertise: "I excel at breaking down complicated real estate transactions into clear, manageable steps for clients who've never bought property before.",
      howIHelp: "I handle all the coordination details so you can focus on the legal protection your clients need, while I make sure nothing falls through the cracks."
    },
    {
      id: 2,
      name: "Christopher Professional", 
      image: "/avatars/christopher-professional.png",
      personalIntro: "I'm Christopher Professional. I bring corporate-level precision to every transaction.",
      expertise: "My strength is managing high-stakes deals with multiple parties, tight deadlines, and complex financing structures.",
      howIHelp: "I coordinate with corporate clients, lenders, and title companies using their preferred communication styles, ensuring your legal expertise shines through every interaction."
    },
    {
      id: 3,
      name: "Christopher Bilingual",
      image: "/avatars/christopher-bilingual.png",
      personalIntro: "Soy Christopher Bilingual. I bridge language gaps and build trust across cultures.",
      expertise: "I specialize in clear communication and cultural sensitivity, ensuring every family understands their legal rights and real estate options.",
      howIHelp: "I handle multilingual client communication and cultural nuances, so you can provide comprehensive legal services to diverse communities with confidence."
    },
    {
      id: 4,
      name: "Christopher Tech-Forward",
      image: "/avatars/christopher-tech-forward.png",
      personalIntro: "I'm Christopher Tech-Forward. I speak fluent technology and make innovation accessible.",
      expertise: "I excel at digital-first processes, virtual closings, and tech-savvy clients who expect seamless, efficient experiences.",
      howIHelp: "I streamline technology integration and digital workflows, allowing you to offer cutting-edge legal services while maintaining personal attorney-client relationships."
    },
    {
      id: 5,
      name: "Christopher Experienced",
      image: "/avatars/christopher-experienced.png",
      personalIntro: "I'm Christopher Experienced. I've seen it all and know how to navigate any situation.",
      expertise: "My expertise is in complex estates, luxury properties, and situations requiring discretion and sophisticated problem-solving.",
      howIHelp: "I anticipate potential issues before they arise and coordinate with high-net-worth clients, ensuring your legal wisdom guides sophisticated transactions smoothly."
    },
    {
      id: 6,
      name: "Christopher Approachable",
      image: "/avatars/christopher-approachable.png",
      personalIntro: "Hey, I'm Christopher Approachable. I make legal processes feel less intimidating and more collaborative.",
      expertise: "I connect naturally with first-time buyers and younger clients, making complex legal concepts accessible and stress-free.",
      howIHelp: "I create comfortable, transparent communication that helps your clients feel confident in their decisions while ensuring they understand the legal protection you provide."
    },
    {
      id: 7,
      name: "Christopher International",
      image: "/avatars/christopher-international.png",
      personalIntro: "I'm Christopher International. I understand global perspectives and cross-cultural business practices.",
      expertise: "I specialize in international transactions, investment properties, and clients with diverse cultural backgrounds and business expectations.",
      howIHelp: "I navigate cultural communication styles and international business practices, ensuring your legal expertise translates effectively across different cultural contexts."
    },
    {
      id: 8,
      name: "Christopher Community",
      image: "/avatars/christopher-community.png",
      personalIntro: "I'm Christopher Community. I understand the importance of relationships, traditions, and doing right by everyone involved.",
      expertise: "I excel at community-focused transactions where relationships, trust, and honoring commitments are as important as the legal details.",
      howIHelp: "I foster genuine connections and respect cultural values, ensuring your legal services strengthen community relationships while protecting everyone's interests."
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
        {christopherAvatars.map((avatar) => (
          <div
            key={avatar.id}
            style={{
              position: 'absolute',
              top: `${20 + (avatar.id * 10)}%`,
              left: '100%',
              animation: `floatAcross ${30 + (avatar.id * 2)}s linear infinite`,
              animationDelay: `${avatar.id * 3}s`,
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
            <img 
              src="/logo/caseclosed-logo.png"
              alt="CaseClosed Logo" 
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.5rem',
                objectFit: 'contain'
              }}
            />
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
            {/* Revenue Calculator Dropdown */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setDropdownOpen(dropdownOpen === 'revenue' ? null : 'revenue')}
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
                Revenue Calculator ▼
              </button>
              {dropdownOpen === 'revenue' && (
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
                  <a href="#lost-revenue" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Calculate Lost Revenue</a>
                  <a href="#roi-projections" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>ROI Projections</a>
                  <a href="#attorney-broker-income" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Attorney-Broker Income</a>
                  <a href="#case-studies" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Success Stories</a>
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

            {/* State Laws Dropdown */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setDropdownOpen(dropdownOpen === 'states' ? null : 'states')}
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
                State Laws ▼
              </button>
              {dropdownOpen === 'states' && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  background: 'rgba(3, 36, 64, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(203, 150, 40, 0.3)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  minWidth: '250px',
                  zIndex: 1000
                }}>
                  <div style={{ borderBottom: '1px solid rgba(203, 150, 40, 0.3)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cb9628', fontSize: '0.9rem', fontWeight: '600' }}>NEVADA - Full Attorney-Broker</span>
                  </div>
                  <a href="https://www.leg.state.nv.us/nrs/nrs-007.html#NRS7Sec107" target="_blank" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.3rem 0' }}>Nevada NRS § 7.107</a>
                  <a href="#nevada-advantage" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.3rem 0' }}>Nevada Opportunities</a>
                  <a href="#nevada-compliance" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.3rem 0' }}>Nevada Compliance</a>
                  
                  <div style={{ borderBottom: '1px solid rgba(203, 150, 40, 0.3)', paddingBottom: '0.5rem', marginBottom: '0.5rem', marginTop: '1rem' }}>
                    <span style={{ color: '#cb9628', fontSize: '0.9rem', fontWeight: '600' }}>TEXAS - Attorney-Enhanced Services</span>
                  </div>
                  <a href="https://www.trec.texas.gov/sites/default/files/pdf-forms/rules-regulations/22_TAC_535.pdf" target="_blank" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.3rem 0' }}>Texas Admin Code § 535.31</a>
                  <a href="#texas-advantage" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.3rem 0' }}>Texas Opportunities</a>
                  <a href="#texas-compliance" style={{ display: 'block', color: 'white', textDecoration: 'none', padding: '0.3rem 0' }}>Texas Compliance</a>
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
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: '700', 
            margin: '0 0 1.5rem 0',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #ffffff 0%, #cb9628 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center'
          }}>
            Texas & Nevada Attorneys: Stop Losing $100K+ Annual Revenue
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
            margin: '0 0 2rem 0',
            opacity: 0.95,
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.4',
            textAlign: 'center'
          }}>
            You didn't go to law school to sell houses - but Texas and Nevada laws let you capture real estate revenue WITHOUT becoming a real estate expert. Christopher AI handles the complexity while you provide legal oversight.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <a href="/calculate-revenue" style={{ textDecoration: 'none' }}>
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
                Calculate Revenue by State
              </button>
            </a>
            <a href="/christopher-demo" style={{ textDecoration: 'none' }}>
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
                Watch Christopher Demo
              </button>
            </a>
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
            backgroundClip: 'text',
            textAlign: 'center'
          }}>
            Christopher AI: Texas & Nevada's Real Estate Expert
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {christopherAvatars.map((avatar) => (
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
                  fontSize: '1rem', 
                  margin: '0 0 1rem 0',
                  opacity: 0.95,
                  lineHeight: '1.4',
                  fontStyle: 'italic',
                  color: '#fbbf24'
                }}>
                  "{avatar.personalIntro}"
                </p>
                <p style={{ 
                  fontSize: '0.9rem', 
                  margin: '0 0 1rem 0',
                  opacity: 0.9,
                  lineHeight: '1.4'
                }}>
                  <strong>My Expertise:</strong> {avatar.expertise}
                </p>
                <p style={{ 
                  fontSize: '0.85rem', 
                  margin: 0,
                  color: '#93c5fd',
                  fontWeight: '500',
                  lineHeight: '1.4'
                }}>
                  <strong>How I Help You:</strong> {avatar.howIHelp}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Two-State Advantage Section */}
        <section id="states" style={{ 
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
            backgroundClip: 'text',
            textAlign: 'center'
          }}>
            Two States, Two Powerful Opportunities
          </h3>
          
          {/* Nevada Section */}
          <div style={{ marginBottom: '3rem' }}>
            <h4 style={{ fontSize: '1.8rem', fontWeight: '600', margin: '0 0 1.5rem 0', color: '#cb9628' }}>
              🌟 Nevada: Full Attorney-Broker Platform
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'left',
              marginBottom: '2rem'
            }}>
              <div>
                <h5 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#fbbf24' }}>
                  Nevada NRS § 7.107 (2009)
                </h5>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5', fontSize: '0.95rem' }}>
                  Most permissive attorney exemption in the U.S. Full real estate broker functions without separate licensing. 
                  Single oversight by Nevada State Bar.
                </p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#fbbf24' }}>
                  What Nevada Attorneys Can Do
                </h5>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5', fontSize: '0.95rem' }}>
                  ✅ List properties ✅ Market real estate ✅ Negotiate transactions ✅ Earn commissions 
                  ✅ Operate independently ✅ Handle multiple clients
                </p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#fbbf24' }}>
                  Revenue Opportunity
                </h5>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5', fontSize: '0.95rem' }}>
                  Capture $50K-200K+ in annual real estate commissions you're currently referring away. 
                  Christopher AI handles complexity while you provide legal oversight.
                </p>
              </div>
            </div>
          </div>

          {/* Texas Section */}
          <div>
            <h4 style={{ fontSize: '1.8rem', fontWeight: '600', margin: '0 0 1.5rem 0', color: '#cb9628' }}>
              ⭐ Texas: Attorney-Enhanced Real Estate Services
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'left'
            }}>
              <div>
                <h5 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#fbbf24' }}>
                  Texas Admin Code § 535.31
                </h5>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5', fontSize: '0.95rem' }}>
                  Well-established exemption since 1976. Individual real estate activities permitted with 
                  dual oversight by TREC and Texas State Bar.
                </p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#fbbf24' }}>
                  What Texas Attorneys Can Do
                </h5>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5', fontSize: '0.95rem' }}>
                  ✅ Handle own transactions ✅ Represent clients ✅ Negotiate deals ✅ Earn fees 
                  ✅ Draft contracts ✅ Conduct closings
                </p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#fbbf24' }}>
                  Massive Market Scale
                </h5>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5', fontSize: '0.95rem' }}>
                  100,000+ attorneys in diverse real estate markets. Proven legal framework 
                  with established compliance procedures and precedent.
                </p>
              </div>
            </div>
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'rgba(203, 150, 40, 0.1)',
            borderRadius: '1rem',
            border: '1px solid rgba(203, 150, 40, 0.3)'
          }}>
            <p style={{ 
              margin: 0, 
              fontSize: '1.1rem', 
              fontWeight: '600',
              color: '#cb9628'
            }}>
              Christopher AI Platform: Designed for Both State Regulatory Frameworks
            </p>
            <p style={{ 
              margin: '0.5rem 0 0 0', 
              opacity: 0.9,
              fontSize: '0.95rem'
            }}>
              Automatic compliance, state-specific features, and cultural intelligence that works across Texas and Nevada markets
            </p>
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
          © 2025 CaseClosed, Inc. | Revolutionizing Legal Technology with Christopher AI | Nevada State Bar & Texas State Bar Compliant
        </p>
      </footer>
    </div>
  )
}
