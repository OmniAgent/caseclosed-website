export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
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

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Revolutionary
              <br />
              <span className="text-yellow-400">Legal Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your Nevada legal practice with Christopher AI's 8 cultural avatars, 
              attorney-broker advantage, and multi-language client communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-secondary text-lg px-8 py-4 rounded-full">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all px-8 py-4 rounded-full text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Christopher AI Showcase */}
          <div id="christopher" className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Meet Christopher AI
              <span className="text-yellow-400"> Avatars</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
              {[
                { name: 'Classic', specialty: 'General Practice', color: 'bg-blue-500' },
                { name: 'Professional', specialty: 'Corporate Law', color: 'bg-gray-700' },
                { name: 'Bilingual', specialty: 'Family Law', color: 'bg-green-500' },
                { name: 'Tech-Forward', specialty: 'Tech Industry', color: 'bg-purple-500' },
                { name: 'Experienced', specialty: 'High Net Worth', color: 'bg-indigo-600' },
                { name: 'Approachable', specialty: 'Millennials', color: 'bg-pink-500' },
                { name: 'International', specialty: 'Global Clients', color: 'bg-cyan-500' },
                { name: 'Community', specialty: 'Tribal Law', color: 'bg-red-500' },
              ].map((avatar, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`w-20 h-20 ${avatar.color} rounded-full mx-auto mb-3 christopher-avatar group-hover:christopher-glow flex items-center justify-center`}>
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
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8">
                Nevada Attorney-Broker
                <span className="text-yellow-400"> Advantage</span>
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
            <h2 className="text-4xl font-bold text-white mb-12">Revolutionary Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🌍', title: 'Multi-Language', desc: 'English, Spanish, Arabic, Chinese, Italian' },
                { icon: '🎥', title: 'AI Videos', desc: 'Personalized client communications' },
                { icon: '📱', title: 'Mobile First', desc: 'Attorney and client mobile access' },
                { icon: '🔒', title: 'Legal Grade', desc: 'Attorney-client privilege protected' },
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-200">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12">Nevada Attorney Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Professional', price: '$399', features: ['25 videos/month', 'Basic Christopher', 'Nevada compliance'] },
                { name: 'Firm', price: '$599', features: ['75 videos/month', 'All Christopher avatars', 'Multi-language support'], popular: true },
                { name: 'Enterprise', price: '$899', features: ['200 videos/month', 'White-label options', 'Priority support'] },
              ].map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center ${plan.popular ? 'ring-2 ring-yellow-400 bg-white/20' : ''}`}>
                  {plan.popular && (
                    <div className="bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-6">{plan.price}<span className="text-lg text-blue-200">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-blue-200">✓ {feature}</li>
                    ))}
                  </ul>
                  <button className="btn-secondary w-full py-3 rounded-xl">
                    Start Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
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
