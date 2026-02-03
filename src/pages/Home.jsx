import { Link } from 'react-router-dom'
import {
  ArrowRight,
  FileText,
  Receipt,
  ClipboardCheck,
  Building2,
  Calculator,
  ShieldCheck,
  Users,
  Trophy,
  TrendingUp,
  Phone,
  Star,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'

/**
 * Home Page - Modern, Premium Design
 */
const Home = () => {
  // Services data
  const services = [
    {
      icon: FileText,
      title: 'Income Tax',
      description: 'Expert ITR filing with maximum deductions',
    },
    {
      icon: Receipt,
      title: 'GST Services',
      description: 'Registration, returns & compliance',
    },
    {
      icon: ClipboardCheck,
      title: 'Audit & Assurance',
      description: 'Statutory and internal audits',
    },
    {
      icon: Building2,
      title: 'Company Registration',
      description: 'Pvt Ltd, LLP & OPC incorporation',
    },
    {
      icon: Calculator,
      title: 'Accounting',
      description: 'Bookkeeping & financial statements',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance',
      description: 'ROC filings & regulatory advisory',
    },
  ]

  // Why choose us
  const features = [
    { icon: Trophy, title: '20+ Years', subtitle: 'Experience' },
    { icon: Users, title: '5000+', subtitle: 'Happy Clients' },
    { icon: TrendingUp, title: '99%', subtitle: 'Retention Rate' },
    { icon: ShieldCheck, title: '100%', subtitle: 'Compliance' },
  ]

  // Testimonials with placeholder images
  const testimonials = [
    {
      quote: 'Professional team with excellent tax planning advice. Saved us significantly on taxes.',
      author: 'Rajesh Patel',
      role: 'MD, Patel Industries',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      quote: 'Seamless company registration process. They handle all our compliance needs efficiently.',
      author: 'Priya Sharma',
      role: 'Founder, TechStart',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      quote: 'Best CA firm in Ahmedabad. Always available and explain complex matters simply.',
      author: 'Amit Mehta',
      role: 'Mehta Textiles',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
  ]

  return (
    <div className="pt-20">
      {/* ===== HERO SECTION - Same layout as About & Services ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-[300px] sm:min-h-[360px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="Office meeting"
            className="img-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium text-neutral-700">Trusted Since 2005</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-6">
              Financial clarity
              <br />
              <span className="text-neutral-600">for your business</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-800 max-w-xl mb-10 leading-relaxed">
              Expert CA services in taxation, audit & compliance.
              Helping Gujarat businesses thrive since 2005.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Book Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-neutral-200">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-200 flex items-center justify-center">
                    <item.icon size={18} className="text-neutral-700" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">{item.title}</p>
                    <p className="text-xs text-neutral-900">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Services</p>
              <h2 className="section-title">What we do</h2>
              <p className="section-subtitle">Comprehensive CA services for businesses of all sizes</p>
            </div>
            <Link to="/services" className="btn-secondary hidden md:inline-flex">
              View All
              <ArrowUpRight className="ml-2" size={16} />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group bg-white rounded-2xl p-7 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <div className="icon-container mb-5">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 md:hidden text-center">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowUpRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">Why Us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Your trusted financial partner
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                We combine decades of expertise with modern technology 
                to deliver exceptional results for our clients.
              </p>

              <div className="space-y-5">
                {[
                  'ICAI certified practicing CA firm',
                  'Dedicated relationship manager',
                  'Digital-first, paperless processes',
                  '24/7 client support available',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                    </div>
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/why-choose-us" className="btn-accent">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-neutral-800/50 backdrop-blur rounded-3xl p-8 md:p-10 border border-neutral-700/50">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '20+', label: 'Years Experience' },
                  { value: '5000+', label: 'Clients Served' },
                  { value: '50K+', label: 'Returns Filed' },
                  { value: '99%', label: 'Client Retention' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-sm text-neutral-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="section-title">Client feedback</h2>
            <p className="section-subtitle mx-auto">What our clients say about working with us</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="card-elevated">
                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-600 leading-relaxed mb-6">
                  "{item.quote}"
                </p>

                {/* Author with Image */}
                <div className="flex items-center gap-4 pt-5 border-t border-neutral-100">
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

      {/* ===== CTA SECTION ===== */}
      <section className="pb-20 md:pb-28">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80"
                alt="Office meeting"
                className="img-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-700 mb-6 leading-tight">
                Ready to get started?
              </h2>
              <p className="text-neutral-700 text-lg mb-10 max-w-xl mx-auto">
                Schedule a free consultation with our expert team
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-accent text-base px-8 py-4">
                  Book Free Consultation
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <a href="tel:+919876543210" className="btn-secondary-blue">
                  <Phone className="mr-2 text-white" size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
