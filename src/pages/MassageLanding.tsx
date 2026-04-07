import React from 'react'
import { Phone, MapPin, Clock, Leaf, Wind, Droplets, Sparkles, Heart } from 'lucide-react'

export default function MassageLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-black/50 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold">Serenity</span>
          </div>
          <a href="#book" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold transition">
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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

      {/* Stats */}
      <section className="py-12 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { label: '8K+ Happy Clients', value: '8,000+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Treatment Types', value: '12' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
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
                  className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/20 rounded-lg p-6 hover:border-emerald-500/50 transition"
                >
                  <Icon className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                  <div className="text-emerald-400 font-bold">{service.price}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Membership Packages</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Single Session', price: '$60', sessions: '1', popular: false },
              { name: 'Starter', price: '$149', sessions: '3', popular: false },
              { name: 'Premium', price: '$289', sessions: '6', popular: true },
              { name: 'VIP Annual', price: '$999', sessions: 'Unlimited', popular: false },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg p-8 text-center transition ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-emerald-600 to-cyan-600 border-2 border-emerald-300 transform scale-105'
                    : 'bg-purple-900/50 border border-purple-500/20'
                }`}
              >
                {pkg.popular && <div className="text-sm font-bold mb-2 text-white">MOST POPULAR</div>}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-4">{pkg.price}</div>
                <div className="text-lg mb-6 opacity-90">{pkg.sessions} sessions</div>
                <button className="w-full bg-white text-gray-900 font-bold py-2 rounded-lg hover:bg-gray-100 transition">
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Therapists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Elena Rodriguez', specialty: 'Swedish & Hot Stone', rate: '$70/hr', image: '👩‍⚕️' },
              { name: 'Sarah Chen', specialty: 'Thai & Reflexology', rate: '$65/hr', image: '👩‍⚕️' },
              { name: 'Marcus Johnson', specialty: 'Deep Tissue & Sports', rate: '$75/hr', image: '👨‍⚕️' },
            ].map((therapist) => (
              <div
                key={therapist.name}
                className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/20 rounded-lg overflow-hidden hover:border-emerald-500/50 transition"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-32 flex items-center justify-center text-6xl">
                  {therapist.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{therapist.name}</h3>
                  <p className="text-emerald-400 mb-4">{therapist.specialty}</p>
                  <p className="text-gray-400 text-sm mb-4">Private sessions available</p>
                  <div className="text-emerald-400 font-bold">{therapist.rate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              '🧖 Private treatment rooms with soft lighting',
              '🎵 Ambient soundscapes & calming music',
              '💧 Steam room & sauna access',
              '🫖 Complimentary herbal tea & water',
              '🕯️ Premium oils & natural balms',
              '🧘 Meditation lounge',
              '💆 Couple massage suites',
              '🌿 Aromatherapy diffusers',
            ].map((amenity) => (
              <div key={amenity} className="flex items-center gap-4 text-lg">
                <div className="text-3xl">{amenity.split(' ')[0]}</div>
                <span>{amenity.slice(2)}</span>
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
                <p className="font-bold text-lg">Serenity Wellness Center</p>
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
      <footer className="bg-black/80 py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-4">© 2026 Serenity Wellness. All rights reserved.</p>
          <p className="text-sm">Heal • Relax • Transform</p>
        </div>
      </footer>
    </div>
  )
}
