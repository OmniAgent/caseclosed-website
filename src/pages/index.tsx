import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Gavel, 
  Users, 
  Globe, 
  Video, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  Star,
  PlayCircle,
  Calendar,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  BarChart3,
  MessageSquare,
  Zap,
  Award,
  Building,
  Heart,
  Home
} from 'lucide-react';

// Christopher Avatar Data
const christopherAvatars = [
  {
    id: 'christopher_classic',
    name: 'Christopher Classic',
    appearance: 'Caucasian, late 30s, friendly everyman',
    specialization: 'General practice, suburban/rural markets',
    personality: 'Warm, neighborly, "guy next door" relatability',
    color: 'bg-blue-500',
    languages: ['English'],
    practiceAreas: ['General Practice', 'Real Estate', 'Family Law']
  },
  {
    id: 'christopher_professional',
    name: 'Christopher Professional',
    appearance: 'African American, early 40s, polished professional',
    specialization: 'Urban practices, corporate clients',
    personality: 'Authoritative but approachable',
    color: 'bg-gray-700',
    languages: ['English'],
    practiceAreas: ['Corporate Law', 'Real Estate', 'Estate Planning']
  },
  {
    id: 'christopher_bilingual',
    name: 'Christopher Bilingual',
    appearance: 'Hispanic/Latino, mid-30s, family-focused',
    specialization: 'Spanish-speaking clients, family law',
    personality: 'Culturally sensitive, community-oriented',
    color: 'bg-green-600',
    languages: ['English', 'Spanish'],
    practiceAreas: ['Family Law', 'Immigration', 'Real Estate']
  },
  {
    id: 'christopher_tech',
    name: 'Christopher Tech-Forward',
    appearance: 'Asian American, early 30s, modern professional',
    specialization: 'Tech industry clients, younger demographics',
    personality: 'Efficient, detail-oriented, innovation-focused',
    color: 'bg-purple-600',
    languages: ['English'],
    practiceAreas: ['IP Law', 'Corporate Law', 'Real Estate']
  },
  {
    id: 'christopher_experienced',
    name: 'Christopher Experienced',
    appearance: 'Caucasian, early 50s, distinguished professional',
    specialization: 'High-net-worth clients, luxury real estate',
    personality: 'Wisdom-focused, trustworthy',
    color: 'bg-amber-700',
    languages: ['English'],
    practiceAreas: ['Estate Planning', 'Luxury Real Estate', 'Wealth Management']
  },
  {
    id: 'christopher_approachable',
    name: 'Christopher Approachable',
    appearance: 'Mixed/Multiracial, late 20s, energetic',
    specialization: 'First-time buyers, millennials',
    personality: 'Contemporary, peer-to-peer relatability',
    color: 'bg-orange-500',
    languages: ['English'],
    practiceAreas: ['Real Estate', 'Personal Injury', 'Consumer Protection']
  },
  {
    id: 'christopher_international',
    name: 'Christopher International',
    appearance: 'Middle Eastern/South Asian, mid-30s',
    specialization: 'International clients, investment properties',
    personality: 'Culturally sophisticated, diplomatic',
    color: 'bg-cyan-600',
    languages: ['English', 'Arabic'],
    practiceAreas: ['International Law', 'Investment Real Estate', 'Immigration']
  },
  {
    id: 'christopher_community',
    name: 'Christopher Community',
    appearance: 'Native American, late 30s, community-focused',
    specialization: 'Community-based transactions, cultural sensitivity',
    personality: 'Respectful, traditional values with modern expertise',
    color: 'bg-amber-600',
    languages: ['English'],
    practiceAreas: ['Tribal Law', 'Land Rights', 'Community Development']
  }
];

// Pricing Plans
const pricingPlans = [
  {
    name: 'Professional',
    price: '$399',
    period: '/month',
    description: 'Perfect for solo practitioners',
    features: [
      '25 Christopher AI videos/month',
      'General practice management',
      'Nevada Bar compliance',
      'Basic client communication',
      'Revenue tracking',
      '20% platform fee'
    ],
    color: 'border-gray-200',
    buttonColor: 'btn-outline',
    popular: false
  },
  {
    name: 'Firm',
    price: '$599',
    period: '/month',
    description: 'Ideal for small-medium firms',
    features: [
      '75 Christopher AI videos/month',
      'Multi-attorney management',
      'Advanced Nevada compliance',
      'Professional service coordination',
      'Client portal access',
      'Advanced analytics',
      '22% platform fee'
    ],
    color: 'border-accent-400 ring-2 ring-accent-400',
    buttonColor: 'btn-accent',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$899',
    period: '/month',
    description: 'For large firms & high-volume practices',
    features: [
      '200 Christopher AI videos/month',
      'Unlimited attorney seats',
      'Full Nevada attorney-broker advantage',
      'White-label client portal',
      'Custom integrations',
      'Dedicated success manager',
      '25% platform fee'
    ],
    color: 'border-primary-300',
    buttonColor: 'btn-primary',
    popular: false
  }
];

// Testimonials
const testimonials = [
  {
    name: 'Sarah Martinez',
    title: 'Nevada Real Estate Attorney',
    location: 'Las Vegas, NV',
    quote: "Christopher Bilingual has revolutionized how I serve my Hispanic clients. The cultural sensitivity and bilingual communication has increased my client satisfaction by 90%.",
    avatar: 'SM',
    rating: 5
  },
  {
    name: 'David Thompson',
    title: 'Personal Injury Attorney',
    location: 'Reno, NV',
    quote: "The Nevada attorney-broker integration has added $50K monthly to my practice. Christopher Classic handles all the coordination while I focus on legal work.",
    avatar: 'DT',
    rating: 5
  },
  {
    name: 'Jennifer Chen',
    title: 'Corporate Attorney',
    location: 'Henderson, NV',
    quote: "Christopher Tech-Forward speaks the language of my tech industry clients. The efficiency gains and AI automation have transformed my practice.",
    avatar: 'JC',
    rating: 5
  }
];

export default function LandingPage() {
  const [selectedAvatar, setSelectedAvatar] = useState(christopherAvatars[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <>
      <Head>
        <title>CaseClosed - Revolutionary Legal Technology for Nevada Attorneys</title>
        <meta name="description" content="Leverage Nevada's unique attorney-broker advantage with AI-powered Christopher avatars. 8 culturally-intelligent personalities serving diverse clients in 5 languages." />
        <meta name="keywords" content="Nevada attorney, legal technology, AI avatars, attorney-broker, Christopher AI, legal practice management" />
        <meta property="og:title" content="CaseClosed - Revolutionary Legal Technology" />
        <meta property="og:description" content="Transform your Nevada legal practice with Christopher AI avatars and attorney-broker advantage" />
        <meta property="og:image" content="/images/caseclosed-og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-width">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center mr-3">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary-900">CaseClosed</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-primary-900 transition-colors">
                Features
              </Link>
              <Link href="#christopher" className="text-gray-700 hover:text-primary-900 transition-colors">
                Christopher AI
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-primary-900 transition-colors">
                Pricing
              </Link>
              <Link href="#nevada" className="text-gray-700 hover:text-primary-900 transition-colors">
                Nevada Advantage
              </Link>
              <Link href="/auth/login" className="text-primary-900 hover:text-primary-800 transition-colors">
                Login
              </Link>
              <Link href="/auth/register" className="btn-primary">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-700 text-white text-sm font-semibold">
                  <Award className="w-4 h-4 mr-2" />
                  Nevada's Unique Attorney-Broker Advantage
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Revolutionary 
                <span className="text-accent-300"> Legal Technology</span> 
                <br />with <span className="text-accent-300">Christopher AI</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Leverage <strong>Nevada's NRS 7.107 attorney-broker advantage</strong> with 
                <strong> 8 culturally-intelligent Christopher AI avatars</strong> serving 
                diverse clients in 5 languages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/auth/register" className="btn-accent text-lg px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="btn-outline text-white border-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4 flex items-center justify-center"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Christopher Demo
                </button>
              </div>
              
              <div className="flex items-center text-gray-200">
                <div className="flex items-center mr-6">
                  <Star className="w-5 h-5 text-accent-400 mr-1" />
                  <span>4.9/5 Attorney Satisfaction</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-400 mr-1" />
                  <span>Nevada Bar Compliant</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="christopher-container backdrop-blur-sm bg-white/10 border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Meet Christopher Classic</h3>
                  <p className="text-gray-200">Your AI legal assistant with cultural intelligence</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-professional">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Christopher Classic</div>
                      <div className="text-sm text-gray-600">General Practice • Warm & Neighborly</div>
                    </div>
                  </div>
                  
                  <div className="christopher-message">
                    <p className="text-gray-800 mb-3">
                      "Hi! I just wanted to update you on your real estate closing. 
                      The title search came back clean, and we're on track for your 
                      Friday closing. I've coordinated with the title company and 
                      your lender - everything is moving smoothly!"
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>🎥 Video message sent</span>
                      <span>2 minutes ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="feature-card"
            >
              <div className="text-3xl font-bold text-primary-900 mb-2">$2.8B</div>
              <div className="text-gray-600">Nevada Legal Market</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="feature-card"
            >
              <div className="text-3xl font-bold text-accent-700 mb-2">8</div>
              <div className="text-gray-600">Christopher AI Avatars</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="feature-card"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">Languages Supported</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="feature-card"
            >
              <div className="text-3xl font-bold text-primary-900 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Christopher AI Showcase */}
      <section id="christopher" className="bg-gray-50 section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Meet the <span className="text-gradient-primary">Christopher AI Family</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                8 culturally-intelligent AI avatars, each with distinct personalities, 
                specializations, and cultural sensitivity to serve Nevada's diverse legal market.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-4">
                {christopherAvatars.map((avatar, index) => (
                  <motion.button
                    key={avatar.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setSelectedAvatar(avatar)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedAvatar.id === avatar.id 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-gray-200 bg-white hover:border-primary-300'
                    }`}
                  >
                    <div className={`w-10 h-10 ${avatar.color} rounded-full flex items-center justify-center mb-3`}>
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{avatar.name}</div>
                    <div className="text-xs text-gray-600 line-clamp-2">{avatar.specialization}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                key={selectedAvatar.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="christopher-container h-full"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${selectedAvatar.color} rounded-full flex items-center justify-center mr-4`}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedAvatar.name}</h3>
                    <p className="text-gray-600">{selectedAvatar.appearance}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
                    <p className="text-gray-700">{selectedAvatar.specialization}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personality</h4>
                    <p className="text-gray-700">{selectedAvatar.personality}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAvatar.languages.map((lang) => (
                        <span key={lang} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Practice Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAvatar.practiceAreas.map((area) => (
                        <span key={area} className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="btn-primary w-full">
                    <Video className="w-5 h-5 mr-2" />
                    Generate Christopher Video Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Nevada Advantage Section */}
      <section id="nevada" className="bg-primary-900 text-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-700 text-white text-sm font-semibold">
                  <Award className="w-4 h-4 mr-2" />
                  Exclusive Nevada Advantage
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Nevada's <span className="text-accent-300">Attorney-Broker</span> 
                <br />Competitive Advantage
              </h2>
              
              <p className="text-xl text-gray-200 mb-8">
                Nevada Revised Statute <strong>NRS 7.107</strong> allows attorneys to act as 
                real estate brokers - a unique competitive advantage that CaseClosed helps you leverage.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-accent-400 mr-4" />
                  <span className="text-lg">Legal + Real Estate services in one practice</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-accent-400 mr-4" />
                  <span className="text-lg">Additional $720K+ annual revenue potential</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-accent-400 mr-4" />
                  <span className="text-lg">Christopher AI coordinates all services seamlessly</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-accent-400 mr-4" />
                  <span className="text-lg">Professional service network integration</span>
                </div>
              </div>

              <Link href="/nevada-advantage" className="btn-accent">
                Learn More About Nevada Advantage
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Revenue Transformation</h3>
              
              <div className="space-y-6">
                <div className="border border-white/20 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200">Real Estate Law</span>
                    <span className="text-white font-semibold">$32,000/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-accent-300">
                    <span>+ Attorney-Broker Services</span>
                    <span className="font-semibold">+$45,000/mo</span>
                  </div>
                </div>

                <div className="border border-white/20 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200">Estate Planning</span>
                    <span className="text-white font-semibold">$25,000/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-accent-300">
                    <span>+ Real Estate Coordination</span>
                    <span className="font-semibold">+$15,000/mo</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-white">Total Annual Potential</span>
                    <span className="text-accent-300">$2.36M</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Revolutionary <span className="text-gradient-primary">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete legal practice transformation with AI-powered automation, 
                cultural intelligence, and Nevada's unique competitive advantages.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: '8 Christopher AI Avatars',
                description: 'Culturally-intelligent personalities serving diverse Nevada clients with professional communication.',
                color: 'text-blue-500'
              },
              {
                icon: Globe,
                title: 'Multi-Language Support',
                description: 'English, Spanish, Arabic, Chinese, and Italian communication for Nevada\'s diverse population.',
                color: 'text-green-500'
              },
              {
                icon: Video,
                title: 'AI Video Generation',
                description: 'Personalized video messages from Christopher avatars with professional voice synthesis.',
                color: 'text-purple-500'
              },
              {
                icon: Shield,
                title: 'Nevada Bar Compliance',
                description: 'Automated compliance monitoring, professional responsibility tracking, and ethics protection.',
                color: 'text-red-500'
              },
              {
                icon: Building,
                title: 'Attorney-Broker Integration',
                description: 'Leverage Nevada NRS 7.107 for legal + real estate services in one practice.',
                color: 'text-amber-500'
              },
              {
                icon: TrendingUp,
                title: 'Revenue Optimization',
                description: 'Track commissions, platform fees, and revenue across multiple practice areas.',
                color: 'text-cyan-500'
              },
              {
                icon: MessageSquare,
                title: 'Professional Coordination',
                description: 'Seamless coordination with title companies, lenders, inspectors, and photographers.',
                color: 'text-indigo-500'
              },
              {
                icon: Zap,
                title: 'Milestone Automation',
                description: 'AI-powered detection of legal milestones with automated client communication.',
                color: 'text-yellow-500'
              },
              {
                icon: Heart,
                title: 'Cultural Intelligence',
                description: 'Adaptive communication based on client demographics and cultural backgrounds.',
                color: 'text-pink-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card text-center"
              >
                <div className={`w-16 h-16 ${feature.color} bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Nevada Attorney <span className="text-gradient-primary">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent pricing designed for Nevada attorneys leveraging the attorney-broker advantage. 
                No hidden fees, just revolutionary legal technology.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`pricing-card relative ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-primary-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${plan.buttonColor}`}>
                  Start {plan.name} Plan
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include Nevada State Bar compliance, Christopher AI access, and professional support.
            </p>
            <Link href="/pricing" className="text-primary-900 hover:text-primary-800 font-semibold">
              View detailed pricing comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Nevada Attorneys <span className="text-gradient-primary">Love CaseClosed</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Nevada attorneys are transforming their practices with Christopher AI 
                and the attorney-broker advantage.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="professional-card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Revolutionize Your <span className="text-accent-300">Nevada Legal Practice?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join Nevada attorneys who are leveraging Christopher AI and the attorney-broker advantage 
              to transform their practices and serve diverse clients with cultural intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/auth/register" className="btn-accent text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/demo" className="btn-outline text-white border-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-gray-200">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-2" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-2" />
                <span>Nevada Bar compliant</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent-400 mr-2" />
                <span>Setup in 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-16">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-accent-700 rounded-lg flex items-center justify-center mr-3">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">CaseClosed</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Revolutionary legal technology platform leveraging Nevada's attorney-broker advantage 
                with Christopher AI avatars and cultural intelligence.
              </p>
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span>Nevada State Bar Compliant</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/features" className="hover:text-accent-300 transition-colors">Features</Link></li>
                <li><Link href="/christopher" className="hover:text-accent-300 transition-colors">Christopher AI</Link></li>
                <li><Link href="/pricing" className="hover:text-accent-300 transition-colors">Pricing</Link></li>
                <li><Link href="/nevada-advantage" className="hover:text-accent-300 transition-colors">Nevada Advantage</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:hello@caseclosed.com" className="hover:text-accent-300 transition-colors">
                    hello@caseclosed.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+1-702-555-0123" className="hover:text-accent-300 transition-colors">
                    (702) 555-0123
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Las Vegas, Nevada</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 sm:mb-0">
              © 2025 CaseClosed, Inc. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-300">
              <Link href="/legal/privacy" className="hover:text-accent-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="hover:text-accent-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/nevada-compliance" className="hover:text-accent-300 transition-colors">
                Nevada Compliance
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
