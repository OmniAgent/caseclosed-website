export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #3730a3 100%)',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Header */}
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
            <a href="#features" style={{ 
              color: 'rgba(255,255,255,0.9)', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Features</a>
            <a href="#christopher" style={{ 
              color: 'rgba(255,255,255,0.9)', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Christopher AI</a>
            <a href="#nevada" style={{ 
              color: 'rgba(255,255,255,0.9)', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Nevada Advantage</a>
            <a href="#pricing" style={{ 
              color: 'rgba(255,255,255,0.9)', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Pricing</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ 
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
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
              color: '#1e3a8a',
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
            color: '#cb9628'
          }}>
            Meet Christopher AI - 8 Cultural Avatars
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                name: "Christopher Classic",
                appearance: "Caucasian, late 30s, friendly everyman",
                specialization: "General practice, suburban/rural markets",
                personality: "Warm, neighborly, guy-next-door relatability"
              },
              {
                name: "Christopher Professional", 
                appearance: "African American, early 40s, polished professional",
                specialization: "Urban practices, corporate clients",
                personality: "Authoritative but approachable"
              },
              {
                name: "Christopher Bilingual",
                appearance: "Hispanic/Latino, mid-30s, family-focused",
                specialization: "Spanish-speaking clients, family law",
                personality: "Culturally sensitive, community-oriented"
              },
              {
                name: "Christopher Tech-Forward",
                appearance: "Asian American, early 30s, modern professional",
                specialization: "Tech industry clients, younger demographics", 
                personality: "Efficient, detail-oriented, innovation-focused"
              },
              {
                name: "Christopher Experienced",
                appearance: "Caucasian, early 50s, distinguished professional",
                specialization: "High-net-worth clients, luxury real estate",
                personality: "Wisdom-focused, trustworthy"
              },
              {
                name: "Christopher Approachable",
                appearance: "Mixed/Multiracial, late 20s, energetic",
                specialization: "First-time buyers, millennials",
                personality: "Contemporary, peer-to-peer relatability"
              },
              {
                name: "Christopher International",
                appearance: "Middle Eastern/South Asian, mid-30s",
                specialization: "International clients, investment properties",
                personality: "Culturally sophisticated, diplomatic"
              },
              {
                name: "Christopher Community",
                appearance: "Native American, late 30s, community-focused",
                specialization: "Community-based transactions, cultural sensitivity",
                personality: "Respectful, traditional values with modern expertise"
              }
            ].map((avatar, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.2s, background 0.2s',
                textAlign: 'left'
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(135deg, #cb9628 0%, #fbbf24 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  🤖
                </div>
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
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: '700', 
            margin: '0 0 2rem 0',
            color: '#cb9628'
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
              <h4 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0 0 1rem 0', color: '#fbbf24' }}>
                🏠 Real Estate Law
              </h4>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                Dual attorney-broker licensing allows you to represent clients in both legal and real estate transactions, 
                maximizing revenue per case.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0 0 1rem 0', color: '#fbbf24' }}>
                🌍 Multi-Cultural Market
              </h4>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                Nevada's diverse population needs Christopher AI's cultural intelligence to serve Spanish, Arabic, 
                Chinese, and other language communities effectively.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0 0 1rem 0', color: '#fbbf24' }}>
                💼 Business Growth
              </h4>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                Unique positioning in Nevada's competitive market with AI-powered client communication 
                and cultural sensitivity gives you a decisive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: '700', 
            margin: '0 0 3rem 0',
            color: '#cb9628'
          }}>
            Choose Your Plan
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                name: "Starter",
                price: "$399",
                period: "/month",
                features: [
                  "2 Christopher AI Avatars",
                  "Basic Multi-Language Support",
                  "Standard Video Messages",
                  "Email Support",
                  "Nevada Legal Templates"
                ],
                popular: false
              },
              {
                name: "Professional", 
                price: "$599",
                period: "/month",
                features: [
                  "5 Christopher AI Avatars",
                  "Advanced Multi-Language",
                  "Custom Video Messages",
                  "Priority Support",
                  "Attorney-Broker Tools",
                  "Advanced Analytics"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$899", 
                period: "/month",
                features: [
                  "All 8 Christopher AI Avatars",
                  "Complete Cultural Intelligence",
                  "Unlimited Video Messages",
                  "White-Glove Support",
                  "Custom Integrations",
                  "Advanced Compliance Tools",
                  "Team Management"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} style={{
                background: plan.popular 
                  ? 'linear-gradient(135deg, rgba(203, 150, 40, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: plan.popular 
                  ? '2px solid #cb9628' 
                  : '1px solid rgba(255, 255, 255, 0.2)',
                position: 'relative',
                transition: 'transform 0.2s',
                textAlign: 'center'
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-0.75rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #cb9628 0%, #fbbf24 100%)',
                    color: '#1e3a8a',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '2rem',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Most Popular
                  </div>
                )}
                
                <h4 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  margin: '0 0 1rem 0',
                  color: plan.popular ? '#cb9628' : 'white'
                }}>
                  {plan.name}
                </h4>
                
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700',
                    color: '#cb9628'
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ 
                    fontSize: '1.1rem', 
                    opacity: 0.8
                  }}>
                    {plan.period}
                  </span>
                </div>
                
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: '0 0 2rem 0',
                  textAlign: 'left'
                }}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ 
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ color: '#22c55e', fontSize: '1.2rem' }}>✓</span>
                      <span style={{ opacity: 0.9 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button style={{
                  width: '100%',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #cb9628 0%, #fbbf24 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: plan.popular ? '#1e3a8a' : 'white',
                  border: plan.popular ? 'none' : '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '0.75rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, background 0.2s'
                }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem',
        opacity: 0.8,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{ margin: 0, fontSize: '1rem' }}>
          © 2025 CaseClosed, Inc. | Revolutionizing Legal Technology with Christopher AI | Nevada State Bar Compliant
        </p>
      </footer>
    </div>
  )
}
