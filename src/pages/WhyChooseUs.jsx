import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Trophy,
  Users,
  ShieldCheck,
  Clock,
  Headphones,
  Laptop,
  CheckCircle2,
  Star,
  Zap,
} from 'lucide-react'

/**
 * Why Choose Us Page - Clean, Premium Design
 */
const WhyChooseUs = () => {
  const differentiators = [
    { icon: Trophy, title: '20+ Years', desc: 'Trusted expertise since 2005', highlight: 'Experience' },
    { icon: Users, title: '15+ Experts', desc: 'Qualified CA professionals', highlight: 'Team' },
    { icon: ShieldCheck, title: '100% Compliance', desc: 'Zero default history', highlight: 'Reliability' },
    { icon: Clock, title: 'On-Time', desc: 'Guaranteed timely delivery', highlight: 'Delivery' },
    { icon: Headphones, title: '24/7 Support', desc: 'Always here when you need', highlight: 'Support' },
    { icon: Laptop, title: 'Digital First', desc: 'Paperless, secure processes', highlight: 'Modern' },
  ]

  const comparison = [
    { feature: 'Experienced CA Team', us: true, others: false },
    { feature: 'Dedicated Manager', us: true, others: false },
    { feature: 'Digital Documents', us: true, others: false },
    { feature: 'Proactive Tax Planning', us: true, others: false },
    { feature: '24/7 Support', us: true, others: false },
    { feature: 'Transparent Pricing', us: true, others: false },
  ]

  const testimonials = [
    { 
      quote: 'Their proactive tax planning saved us significantly.', 
      author: 'Vikram Patel', 
      role: 'CEO, Patel Exports',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face'
    },
    { 
      quote: 'Incredibly responsive and knowledgeable team.', 
      author: 'Anita Desai', 
      role: 'CFO, Desai Manufacturing',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face'
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero with Background */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-[300px] sm:min-h-[360px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Business consultation"
            className="img-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">Why Choose Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Your success is our commitment
            </h1>
            <p className="text-lg text-neutral-800 leading-relaxed">
              Discover why thousands of businesses trust us for their financial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Differentiators</p>
            <h2 className="section-title">What sets us apart</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="card group">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold mb-4">
                  {item.highlight}
                </span>
                <div className="icon-container mb-4">
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-xl text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-neutral-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Happy Clients' },
              { value: '50K+', label: 'Returns Filed' },
              { value: '99%', label: 'Retention Rate' },
              { value: '24hrs', label: 'Response Time' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-neutral-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Compare</p>
            <h2 className="section-title">How we stand out</h2>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-neutral-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-neutral-900 text-white p-4 font-semibold text-sm">
              <div>Feature</div>
              <div className="text-center">Us</div>
              <div className="text-center">Others</div>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 text-sm ${index % 2 === 0 ? 'bg-neutral-100' : ''}`}>
                <div className="text-neutral-700">{row.feature}</div>
                <div className="text-center">
                  <CheckCircle2 size={18} className="text-emerald-500 mx-auto" />
                </div>
                <div className="text-center text-neutral-400">—</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Images */}
      <section className="bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="section-title">Client feedback</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((item, index) => (
              <div key={index} className="card-elevated">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-600 mb-6">"{item.quote}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-12 h-12 img-avatar"
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">{item.author}</p>
                    <p className="text-sm text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mx-auto mb-6">
              <Zap size={32} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Commitment</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              Timely filing, accurate calculations, complete transparency. 
              We cover any penalties from our errors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Timely Filing', 'Accuracy Assured', 'Transparent Pricing'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28 bg-neutral-100">
        <div className="container-custom text-center">
          <h2 className="section-title mb-4">Experience the difference</h2>
          <p className="section-subtitle mx-auto mb-8">
            Join thousands of satisfied clients today.
          </p>
          <Link to="/contact" className="btn-primary">
            Book Free Consultation
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUs
