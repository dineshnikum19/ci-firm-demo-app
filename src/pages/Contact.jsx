import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react'

/**
 * Contact Page - Clean, Premium Design
 */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setIsSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: Mail, label: 'Email', value: 'info@shahassociates.com', href: 'mailto:info@shahassociates.com' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
    { icon: MapPin, label: 'Office', value: 'CG Road, Ahmedabad 380009', href: 'https://maps.google.com' },
  ]

  const services = ['Income Tax Filing', 'GST Services', 'Audit & Assurance', 'Company Registration', 'Accounting', 'Compliance', 'Other']

  return (
    <div className="pt-20">
      {/* Hero with Background */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-[300px] sm:min-h-[360px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop"
            alt="Contact"
            className="img-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Let's talk
            </h1>
            <p className="text-lg text-neutral-800 leading-relaxed mt-5 mb-10">
              Have questions? We're here to help. Reach out through any channel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pt-28">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.label === 'WhatsApp' ? '_blank' : undefined}
                rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="card group text-center hover:border-neutral-200"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center mx-auto mb-4 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                  <item.icon size={20} />
                </div>
                <p className="text-xs text-neutral-500 mb-1">{item.label}</p>
                <p className="font-medium text-neutral-900 text-sm">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Get in Touch</p>
              <h2 className="section-title mb-8">Send us a message</h2>

              {isSubmitted ? (
                <div className="bg-white rounded-2xl border border-neutral-200 p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-2">Message Sent!</h3>
                  <p className="text-neutral-500">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm bg-white"
                      >
                        <option value="">Select service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm resize-none"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full mt-6">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="ml-2" size={16} />}
                  </button>
                </form>
              )}
            </div>

            {/* Office Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 sticky top-28">
                <h3 className="font-semibold text-neutral-900 mb-6">Office Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-neutral-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">Location</p>
                      <p className="text-neutral-500 text-sm">301, Corporate Tower, CG Road, Ahmedabad 380009</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-neutral-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">Working Hours</p>
                      <p className="text-neutral-500 text-sm">Mon - Sat: 10 AM - 7 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <p className="text-sm font-medium text-neutral-900 mb-4">Quick Contact</p>
                  <div className="space-y-3">
                    <a href="tel:+919876543210" className="flex items-center gap-3 p-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors">
                      <Phone size={16} className="text-neutral-600" />
                      <span className="text-sm text-neutral-700">+91 98765 43210</span>
                    </a>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
                      <MessageCircle size={16} className="text-emerald-600" />
                      <span className="text-sm text-emerald-700">WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map with Overlay */}
      <section className="relative h-64 sm:h-80 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
          alt="Ahmedabad city"
          className="absolute inset-0 img-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-neutral-900/60 flex items-center justify-center">
          <div className="text-center text-white">
            <MapPin size={32} className="mx-auto mb-3 text-white/80" />
            <p className="font-medium mb-2">CG Road, Ahmedabad</p>
            <a 
              href="https://maps.google.com/?q=CG+Road+Ahmedabad" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
