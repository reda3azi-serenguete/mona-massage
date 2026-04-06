import React from 'react'
import { Calendar, Users, MapPin, Star, ChevronRight, Clock, DollarSign } from 'lucide-react'

export default function LandingHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">5E</span>
            </div>
            <h1 className="text-white font-bold text-xl hidden sm:block">5 Elements Hot Yoga</h1>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Body Fit,<br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Happy Mind
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Hottest yoga studio in Phuket. Transform your body & mind through powerful hot yoga sessions in a heated sanctuary overlooking the ocean.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105">
                Book Your Class →
              </button>
              <button className="border-2 border-blue-400 text-blue-300 hover:text-blue-200 px-8 py-3 rounded-lg font-bold transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Users, label: '5,260+ Members', value: '5K+' },
              { icon: Calendar, label: 'Classes/Week', value: '25+' },
              { icon: Clock, label: 'Hours/Day', value: '11am-8pm' },
              { icon: MapPin, label: 'Location', value: 'Phuket' }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-4 text-center">
                <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-white font-bold text-lg">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Preview */}
      <section className="py-20 px-4 bg-slate-800/40 border-y border-blue-500/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Weekly Schedule</h3>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-white text-sm">
              <thead>
                <tr className="border-b border-blue-500/30">
                  <th className="text-left py-4 px-4 font-bold text-blue-300">Time</th>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <th key={day} className="text-center py-4 px-2 font-bold text-blue-300">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '11:30-12:30', classes: ['Stretching', 'Stretching', 'Stretching', 'Stretching', 'Stretching', 'Stretching', 'Open'] },
                  { time: '1:30-2:30', classes: ['Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private'] },
                  { time: '5:00-6:00', classes: ['5 Elem', 'Vinyasa', 'Vinyasa', 'Vinyasa', 'Vinyasa', 'Yoga', 'Yoga'] },
                  { time: '6:30-7:30', classes: ['Wellness', 'Wellness', 'Wellness', 'Wellness', 'Wellness', 'Private', 'Healing'] }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-blue-500/10">
                    <td className="py-4 px-4 font-bold text-blue-300">{row.time}</td>
                    {row.classes.map((cls, j) => (
                      <td key={j} className="text-center py-4 px-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                          cls === 'Stretching' ? 'bg-green-500/30 text-green-200' :
                          cls === 'Private' ? 'bg-pink-500/30 text-pink-200' :
                          cls === '5 Elem' || cls === 'Vinyasa' ? 'bg-orange-500/30 text-orange-200' :
                          cls === 'Wellness' ? 'bg-purple-500/30 text-purple-200' :
                          cls === 'Yoga' ? 'bg-blue-500/30 text-blue-200' :
                          'bg-slate-500/30 text-slate-200'
                        }`}>
                          {cls}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center text-gray-300 text-sm">
            ⏰ 24-hour advance booking required • Classes fill up fast!
          </div>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Our Class Types</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '5 Elements', desc: '26 postures in heated room', temp: '105°F', icon: '🔥' },
              { name: 'Vinyasa Flow', desc: 'Dynamic flowing sequences', temp: '90-95°F', icon: '🌊' },
              { name: 'Stretching', desc: 'Recovery & flexibility', temp: 'Room temp', icon: '🧘' },
              { name: 'Wellness', desc: 'Therapeutic focus', temp: '85°F', icon: '💆' },
              { name: 'Aerial Yoga', desc: 'Suspended anti-gravity', temp: 'Room temp', icon: '✈️' },
              { name: 'Power Yoga', desc: 'Vigorous & intense', temp: '100°F', icon: '💪' },
              { name: 'Yin Yoga', desc: 'Deep holds & meditation', temp: '80°F', icon: '🌙' },
              { name: 'Sound Healing', desc: 'Relaxation & soundbath', temp: 'Room temp', icon: '🎵' }
            ].map((cls, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition">
                <div className="text-4xl mb-3">{cls.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{cls.name}</h4>
                <p className="text-gray-400 text-sm mb-3">{cls.desc}</p>
                <p className="text-blue-300 text-xs font-semibold">{cls.temp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-20 px-4 bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Stay & Practice</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Deluxe Room', guests: 1, price: '$45', img: '🏨' },
              { name: 'Standard Villa', guests: 2, price: '$65', img: '🏡' },
              { name: 'Ocean View Suite', guests: 2, price: '$95', img: '🏝️' }
            ].map((room, i) => (
              <div key={i} className="bg-slate-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition">
                <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                  {room.img}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{room.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">Up to {room.guests} {room.guests === 1 ? 'guest' : 'guests'}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300 font-bold text-lg">{room.price}/night</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition">
                      Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-3">Yoga Retreat Packages</h4>
            <p className="text-blue-100 mb-6">Classes + Accommodation + Meals bundles starting from $500 (5 days)</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              View Retreat Packages →
            </button>
          </div>
        </div>
      </section>

      {/* Instructor Spotlight */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Meet the Team</h3>
          
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-96 flex items-center justify-center text-8xl">
              👩‍🏫
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-2">Chaliesa</h4>
              <p className="text-blue-300 text-lg font-semibold mb-4">Head Instructor & Studio Founder</p>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">
                  With over 15 years of yoga experience, Chaliesa specializes in hot yoga, vinyasa flow, and wellness therapy. Her dynamic teaching style combines tradition with modern techniques.
                </p>
                
                <div className="space-y-2">
                  <p className="text-gray-400"><span className="text-blue-300 font-bold">Specialties:</span> 5 Elements, Vinyasa, Private Sessions</p>
                  <p className="text-gray-400"><span className="text-blue-300 font-bold">Certifications:</span> RYT-500, Yoga Alliance</p>
                  <p className="text-gray-400"><span className="text-blue-300 font-bold">Private Session:</span> $70 USD or 2,500 THB</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2">
                  Book Private Session <ChevronRight size={18} />
                </button>
                <button className="border border-blue-400 text-blue-300 hover:text-blue-200 px-6 py-2 rounded-lg font-semibold transition">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Simple, Transparent Pricing</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Drop-in Class', price: '$18', per: 'per class', color: 'from-blue-500' },
              { title: '10-Class Pack', price: '$140', per: 'save $40', color: 'from-purple-500' },
              { title: 'Monthly Unlimited', price: '$95', per: 'unlimited access', color: 'from-pink-500', popular: true },
              { title: '5-Day Retreat', price: '$599', per: 'classes + rooms', color: 'from-orange-500' }
            ].map((plan, i) => (
              <div key={i} className={`bg-gradient-to-br ${plan.color} to-slate-900 rounded-lg p-6 border border-blue-500/20 ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''} transition`}>
                {plan.popular && <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Most Popular</span>}
                <h4 className="text-lg font-bold text-white mb-2">{plan.title}</h4>
                <p className="text-3xl font-bold text-white mb-1">{plan.price}</p>
                <p className="text-gray-300 text-sm mb-6">{plan.per}</p>
                <button className="w-full bg-white text-slate-900 hover:bg-gray-100 py-2 rounded-lg font-bold transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">How It Works</h3>
          
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Browse', desc: 'View our full schedule & class types' },
              { step: '2', title: 'Book', desc: 'Reserve your spot (24hrs in advance)' },
              { step: '3', title: 'Pay', desc: 'Secure online payment or local methods' },
              { step: '4', title: 'Arrive', desc: 'Show up 15 min early, transform your life' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{item.step}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900 border-t border-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of members experiencing the power of hot yoga in paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Book Your First Class 🚀
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">About</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300">Story</a></li>
                <li><a href="#" className="hover:text-blue-300">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Classes</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-300">Schedule</a></li>
                <li><a href="#" className="hover:text-blue-300">Instructors</a></li>
                <li><a href="#" className="hover:text-blue-300">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Accommodations</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-300">Rooms</a></li>
                <li><a href="#" className="hover:text-blue-300">Packages</a></li>
                <li><a href="#" className="hover:text-blue-300">Retreats</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-300">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-300">WhatsApp</a></li>
                <li><a href="#" className="hover:text-blue-300">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-500/10 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2026 5 Elements Hot Yoga. Located in Phuket, Thailand. Body Fit, Happy Mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
