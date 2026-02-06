import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react'

/**
 * Footer Component - Clean, Minimal Design
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Why Choose Us', path: '/why-choose-us' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Income Tax Filing', path: '/services' },
      { name: 'GST Services', path: '/services' },
      { name: 'Audit & Assurance', path: '/services' },
      { name: 'Company Registration', path: '/services' },
    ],
  }

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-neutral-900 font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-white text-lg">XYZ & Associates</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Trusted CA firm in Ahmedabad serving businesses since 2005.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-neutral-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-neutral-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors">
                  <Phone size={16} />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@xyzassociates.com" className="flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors">
                  <Mail size={16} />
                  info@xyzassociates.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>CG Road, Ahmedabad 380009</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {currentYear} XYZ & Associates. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
