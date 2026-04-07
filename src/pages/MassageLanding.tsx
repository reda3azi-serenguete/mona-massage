import React, { useState } from 'react'
import { Phone, MapPin, Clock, Leaf, Wind, Droplets, Sparkles, Heart, MessageCircle, Gift, Users, Star, Check, ChevronDown, ChevronUp, Play, Mail } from 'lucide-react'

export default function MassageLanding() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* WhatsApp Chat Button */}
      <a 
        href="https://wa.me/5551234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg z-50 transition transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* First-Time Visitor Discount Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 text-white py-3 px-4 text-center font-bold sticky top-0 z-40">
        🎉 NEW CLIENTS: Get 20% OFF your first session! Use code: WELCOME20
      </div>

      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold">Mona Massage</span>
          </div>
          <a href="#book" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold transition">
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400">
            Restore Balance
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Holistic wellness through therapeutic massage & ancient healing practices
          </p>
          <p className="text-gray-400 mb-8">
            Expert therapists • Premium oils • Serene environment
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
            Schedule Your Session
          </button>
        </div>
      </section>

      {/* Trust Badges & Certifications */}
      <section className="py-8 px-4 bg-black/30 border-y border-purple-500/20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🏆', label: '50+ Awards', sub: 'Industry Recognition' },
            { icon: '✓', label: 'Licensed', sub: 'Professional Therapists' },
            { icon: '⭐', label: '4.9/5 Stars', sub: '800+ Reviews' },
            { icon: '🛡️', label: 'Certified', sub: 'Health & Safety' },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="font-bold text-sm">{badge.label}</div>
              <div className="text-gray-400 text-xs">{badge.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { label: 'Happy Clients', value: '8,000+' },
            { label: 'Years Excellence', value: '15+' },
            { label: 'Treatment Types', value: '12' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience Our Spa</h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-purple-900 to-slate-900 h-96 flex items-center justify-center border-2 border-emerald-500/30">
              <div className="text-center">
                <Play className="w-24 h-24 text-emerald-400 mx-auto mb-4" />
                <p className="text-xl text-gray-300">Watch our spa tour</p>
                <p className="text-sm text-gray-500 mt-2">30 seconds • No sound required</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-110 transition">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Massage Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wind, name: 'Swedish Massage', desc: 'Classic relaxation technique', price: '$60' },
              { icon: Droplets, name: 'Hot Stone', desc: 'Warm stone therapy', price: '$70' },
              { icon: Leaf, name: 'Thai Massage', desc: 'Traditional stretching therapy', price: '$65' },
              { icon: Sparkles, name: 'Deep Tissue', desc: 'Intense muscle relief', price: '$75' },
              { icon: Heart, name: 'Aromatherapy', desc: 'Essential oil treatments', price: '$65' },
              { icon: Leaf, name: 'Reflexology', desc: 'Foot & pressure point therapy', price: '$55' },
            ].map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.name}
                  className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/20 rounded-lg p-6 hover:border-emerald-500/50 transition hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <Icon className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                  <div className="text-emerald-400 font-bold text-lg">{service.price}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Transformation Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                before: '😰 Stressed & Tense', 
                after: '😌 Relaxed & Balanced', 
                time: 'One 60-min session',
                rating: 5
              },
              { 
                before: '🤕 Chronic Pain', 
                after: '💪 Pain-Free', 
                time: 'Three 90-min sessions',
                rating: 5
              },
              { 
                before: '😴 Poor Sleep', 
                after: '✨ Deep Restful Sleep', 
                time: 'Six sessions weekly',
                rating: 5
              },
            ].map((story, idx) => (
              <div key={idx} className="bg-gradient-to-r from-purple-900/50 to-slate-900/50 border border-cyan-500/30 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-red-600/20 to-red-900/20 p-8 flex flex-col items-center justify-center">
                    <div className="text-5xl mb-3">{story.before.split(' ')[0]}</div>
                    <p className="text-center text-sm">{story.before}</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-900/20 p-8 flex flex-col items-center justify-center">
                    <div className="text-5xl mb-3">{story.after.split(' ')[0]}</div>
                    <p className="text-center text-sm">{story.after}</p>
                  </div>
                </div>
                <div className="p-6 bg-black/30">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">{story.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Membership Packages</h2>
          <p className="text-center text-gray-400 mb-12">Flexible plans to match your wellness journey</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Single Session', price: '$60', sessions: '1', popular: false, savings: 'Standard rate' },
              { name: 'Starter', price: '$149', sessions: '3', popular: false, savings: 'Save 10%' },
              { name: 'Premium', price: '$289', sessions: '6', popular: true, savings: 'Save 20%' },
              { name: 'VIP Annual', price: '$999', sessions: 'Unlimited', popular: false, savings: 'Save 40%' },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg p-8 text-center transition relative ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-emerald-600 to-cyan-600 border-2 border-emerald-300 transform scale-105'
                    : 'bg-purple-900/50 border border-purple-500/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-400 text-emerald-900 px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                <div className="text-sm mb-6 opacity-90">{pkg.sessions} sessions</div>
                <div className={`text-sm font-semibold mb-6 ${pkg.popular ? 'text-white' : 'text-emerald-400'}`}>
                  ✓ {pkg.savings}
                </div>
                <button className={`w-full font-bold py-2 rounded-lg transition ${
                  pkg.popular 
                    ? 'bg-white text-emerald-600 hover:bg-gray-100' 
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Sarah Johnson', 
                avatar: '👩‍🦱', 
                rating: 5,
                quote: 'Absolutely life-changing. I came in tense and left feeling like I was floating on clouds!',
                service: 'Swedish Massage',
                featured: true
              },
              { 
                name: 'Marcus Chen', 
                avatar: '👨‍💼', 
                rating: 5,
                quote: 'Best investment in my health. The therapists really know what they\'re doing.',
                service: 'Deep Tissue',
                featured: false
              },
              { 
                name: 'Elena Rodriguez', 
                avatar: '👩‍🦨', 
                rating: 5,
                quote: 'My chronic back pain is finally gone. Highly recommend to everyone!',
                service: 'Hot Stone + Massage',
                featured: false
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className={`rounded-lg p-8 border transition ${
                  testimonial.featured
                    ? 'bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 border-emerald-500/50'
                    : 'bg-purple-900/40 border-purple-500/30'
                } hover:border-emerald-500/50`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.service}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <Gift className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Gift Cards Available</h2>
          <p className="text-gray-300 mb-8">
            Give the gift of wellness. Perfect for birthdays, anniversaries, or just because.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { amount: '$100', value: 'For 1-2 sessions' },
              { amount: '$250', value: 'Perfect for couples' },
              { amount: 'Custom', value: 'Any amount you choose' },
            ].map((card) => (
              <div key={card.amount} className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-emerald-500/30 rounded-lg p-6 hover:border-emerald-500/50 transition">
                <div className="text-3xl font-bold text-emerald-400 mb-2">{card.amount}</div>
                <p className="text-gray-300">{card.value}</p>
              </div>
            ))}
          </div>
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-3 rounded-lg font-bold transition">
            Buy Gift Card
          </button>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Refer a Friend</h2>
          <p className="text-gray-300 mb-8">
            Share the wellness love and earn rewards!
          </p>
          <div className="bg-gradient-to-r from-purple-900/50 to-slate-900/50 border border-purple-500/30 rounded-lg p-8 mb-8">
            <p className="text-gray-300 mb-6">
              <Check className="w-5 h-5 text-emerald-400 inline mr-2" />
              You refer → Your friend gets $20 OFF
            </p>
            <p className="text-gray-300 mb-6">
              <Check className="w-5 h-5 text-emerald-400 inline mr-2" />
              You get $20 CREDIT for each referral
            </p>
            <p className="text-gray-300">
              <Check className="w-5 h-5 text-emerald-400 inline mr-2" />
              Unlimited referrals = Unlimited rewards!
            </p>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-bold transition">
            Share & Earn
          </button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Wellness Tips & Exclusive Offers</h2>
          <p className="text-center text-gray-400 mb-8">
            Get monthly wellness tips and be first to hear about our exclusive promotions
          </p>
          <form className="flex gap-3" onSubmit={(e) => { e.preventDefault(); setEmail('') }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-bold transition flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Subscribe
            </button>
          </form>
          <p className="text-center text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { 
                q: 'What should I bring to my appointment?', 
                a: 'Just bring yourself! We provide fresh linens, towels, and our premium oils. Arrive 10 minutes early to settle in.'
              },
              { 
                q: 'How long does a typical massage last?', 
                a: 'Sessions range from 30-90 minutes. Most clients start with 60 minutes to fully relax and benefit from the treatment.'
              },
              { 
                q: 'Are your therapists licensed?', 
                a: 'Yes! All our therapists are state-licensed, certified, and background-checked. We maintain the highest professional standards.'
              },
              { 
                q: 'Can I book the same therapist for repeat visits?', 
                a: 'Absolutely. We encourage building a relationship with your therapist. Just note your preference when booking.'
              },
              { 
                q: 'Do you offer couples massages?', 
                a: 'Yes! Our couples massage suites let you both relax together. Perfect for anniversaries or special occasions.'
              },
              { 
                q: 'What if I have an injury or medical condition?', 
                a: 'Tell us upon arrival. Our therapists are trained to modify treatments. Consult your doctor if unsure.'
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-purple-900/40 border border-purple-500/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-900/60 transition"
                >
                  <span className="font-bold text-left">{faq.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-black/30 border-t border-purple-500/20 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Therapists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Elena Rodriguez', specialty: 'Swedish & Hot Stone', rate: '$70/hr', image: '👩‍⚕️', expertise: '12 years' },
              { name: 'Sarah Chen', specialty: 'Thai & Reflexology', rate: '$65/hr', image: '👩‍⚕️', expertise: '10 years' },
              { name: 'Marcus Johnson', specialty: 'Deep Tissue & Sports', rate: '$75/hr', image: '👨‍⚕️', expertise: '15 years' },
            ].map((therapist) => (
              <div
                key={therapist.name}
                className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/20 rounded-lg overflow-hidden hover:border-emerald-500/50 transition hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-40 flex items-center justify-center text-7xl">
                  {therapist.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{therapist.name}</h3>
                  <p className="text-emerald-400 mb-2">{therapist.specialty}</p>
                  <p className="text-gray-400 text-sm mb-4">{therapist.expertise} of experience</p>
                  <div className="text-emerald-400 font-bold mb-4">{therapist.rate}</div>
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 rounded transition">
                    Book Private Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Location</h2>
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg">Mona Massage Center</p>
                <p className="text-gray-400">258 Healing Lane</p>
                <p className="text-gray-400">Wellness City, ST 12345</p>
                <p className="text-emerald-400 font-semibold mt-2">(555) 123-4567</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Hours</h2>
            <div className="space-y-2">
              {[
                'Monday - Friday: 10am - 8pm',
                'Saturday: 9am - 7pm',
                'Sunday: 10am - 6pm',
                'Holidays: Call for hours',
              ].map((hour) => (
                <div key={hour} className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span>{hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Relax?</h2>
          <p className="text-lg mb-8 text-white/90">
            Book your therapeutic massage session today and experience ultimate wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
              Book Online
            </button>
            <button className="bg-white/20 hover:bg-white/30 border-2 border-white font-bold py-3 px-8 rounded-lg transition flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-12 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-emerald-400" />
                <span className="font-bold">Mona Massage</span>
              </div>
              <p className="text-sm text-gray-400">Wellness • Healing • Transformation</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Services</a></li>
                <li><a href="#" className="hover:text-emerald-400">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400">Therapists</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Instagram</a></li>
                <li><a href="#" className="hover:text-emerald-400">Facebook</a></li>
                <li><a href="#" className="hover:text-emerald-400">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Mona Massage. All rights reserved.</p>
            <p className="mt-2">Heal • Relax • Transform</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
