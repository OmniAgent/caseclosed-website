export default function Home() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #3730a3 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#fbbf24' }}
            >
              <span className="text-blue-900 font-bold text-xl">⚖️</span>
            </div>
            <span className="text-white text-2xl font-bold">CaseClosed</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-white hover:text-yellow-400 transition-colors">Features</a>
            <a href="#christopher" className="text-white hover:text-yellow-400 transition-colors">Christopher AI</a>
            <a href="#nevada" className="text-white hover:text-yellow-400 transition-colors">Nevada Advantage</a>
            <a href="#pricing" className="text-white hover:text-yellow-400 transition-colors">Pricing</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-16">
            <h1 
              className="font-bold text-white mb-8 leading-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
            >
              Revolutionary
              <br />
              <span style={{ color: '#fbbf24' }}>Legal Technology</span>
            </h1>
            <p 
              className="text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(1.125rem, 2.5vw, 2rem)' }}
            >
              Transform your Nevada legal practice with Christopher AI's 8 cultural avatars, 
              attorney-broker advantage, and multi-language client communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
                style={{ 
                  backgroundColor: '#fbbf24', 
                  color: '#1e3a8a',
                  boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
                }}
              >
                Start Free Trial
              </button>
              <button 
                className="border-2 text-white hover:bg-white transition-all px-8 py-4 rounded-full text-lg"
                style={{ 
                  borderColor: '#ffffff',
                  '&:hover': { color: '#1e3a8a' }
                }}
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Christopher AI Showcase */}
          <div id="christopher" className="mb-20">
            <h2 
              className="font-bold text-white mb-12"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
            >
              Meet Christopher AI
              <span style={{ color: '#fbbf24' }}> Avatars</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
              {[
                { name: 'Classic', specialty: 'General Practice', color: '#3b82f6' },
                { name: 'Professional', specialty: 'Corporate Law', color: '#374151' },
                { name: 'Bilingual', specialty: 'Family Law', color: '#059669' },
                { name: 'Tech-Forward', specialty: 'Tech Industry', color: '#7c3aed' },
                { name: 'Experienced', specialty: 'High Net Worth', color: '#4f46e5' },
                { name: 'Approachable', specialty: 'Millennials', color: '#ec4899' },
                { name: 'International', specialty: 'Global Clients', color: '#0891b2' },
                { name: 'Community', specialty: 'Tribal Law', color: '#dc2626' },
              ].map((avatar, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center transition-all transform group-hover:scale-110"
                    style={{ 
                      backgroundColor: avatar.color,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{avatar.name}</h3>
                  <p className="text-blue-200 text-xs">{avatar.specialty}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nevada Advantage */}
          <div id="nevada" className="mb-20">
            <div 
              className="rounded-3xl p-12 max-w-4xl mx-auto"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <h2 
                className="font-bold text-white mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
              >
                Nevada Attorney-Broker
                <span style={{ color: '#fbbf24' }}> Advantage</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Legal Practice</h3>
                  <p className="text-blue-200">Full-service legal representation</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real Estate</h3>
                  <p className="text-blue-200">Licensed broker capabilities</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Revenue</h3>
                  <p className="text-blue-200">Dual income streams</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div id="features" className="mb-20">
            <h2 
              className="font-bold text-white mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
            >
              Revolutionary Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🌍', title: 'Multi-Language', desc: 'English, Spanish, Arabic, Chinese, Italian' },
                { icon: '🎥', title: 'AI Videos', desc: 'Personalized client communications' },
                { icon: '📱', title: 'Mobile First', desc: 'Attorney and client mobile access' },
                { icon: '🔒', title: 'Legal Grade', desc: 'Attorney-client privilege protected' },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl p-6 text-center transition-all transform hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-200">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="mb-20">
            <h2 
              className="font-bold text-white mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
            >
              Nevada Attorney Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Professional', price: '$399', features: ['25 videos/month', 'Basic Christopher', 'Nevada compliance'] },
                { name: 'Firm', price: '$599', features: ['75 videos/month', 'All Christopher avatars', 'Multi-language support'], popular: true },
                { name: 'Enterprise', price: '$899', features: ['200 videos/month', 'White-label options', 'Priority support'] },
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl p-8 text-center transition-all transform hover:scale-105 ${
                    plan.popular ? 'ring-2' : ''
                  }`}
                  style={{ 
                    backgroundColor: plan.popular ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    ringColor: plan.popular ? '#fbbf24' : 'transparent'
                  }}
                >
                  {plan.popular && (
                    <div 
                      className="text-sm font-bold px-4 py-1 rounded-full mb-4 inline-block"
                      style={{ backgroundColor: '#fbbf24', color: '#1e3a8a' }}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div 
                    className="font-bold mb-6"
                    style={{ fontSize: '3rem', color: '#fbbf24' }}
                  >
                    {plan.price}
                    <span className="text-lg text-blue-200">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-blue-200">✓ {feature}</li>
                    ))}
                  </ul>
                  <button 
                    className="w-full py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
                    style={{ backgroundColor: '#fbbf24', color: '#1e3a8a' }}
                  >
                    Start Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#fbbf24' }}
            >
              <span className="text-blue-900 font-bold">⚖️</span>
            </div>
            <span className="text-white text-xl font-bold">CaseClosed</span>
          </div>
          <p className="text-blue-200 mb-4">
            Revolutionary legal technology with Christopher AI cultural intelligence
          </p>
          <p className="text-blue-300 text-sm">
            © 2025 CaseClosed, Inc. Nevada State Bar Compliant. Attorney-Client Privilege Protected.
          </p>
        </div>
      </footer>
    </div>
  )
}
