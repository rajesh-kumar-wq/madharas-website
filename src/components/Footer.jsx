import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'
import { contact } from '../utils/content'

const handleNavClick = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-gold/10 pt-20 pb-8">
      <div className="container-fluid grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="font-display text-2xl tracking-widest2 text-parchment"
          >
            MA<span className="text-gold">&middot;</span>DHA<span className="text-gold">&middot;</span>RAS
          </a>
          <p className="mt-5 text-smoke text-sm leading-relaxed max-w-xs">
            Luxury banquet halls and outdoor catering in T. Nagar, Chennai — hosting social and
            corporate events from 150 to 5,000 guests.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="h-9 w-9 flex items-center justify-center rounded-full border border-gold/25 text-gold hover:bg-gold hover:text-ink transition-colors duration-300">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 flex items-center justify-center rounded-full border border-gold/25 text-gold hover:bg-gold hover:text-ink transition-colors duration-300">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-6">
          <p className="font-utility text-[11px] uppercase tracking-widest2 text-gold mb-5">Explore</p>
          <ul className="space-y-3 text-sm text-smoke">
            {[
              ['About', '#about'],
              ['Capacity', '#capacity'],
              ['Gallery', '#gallery'],
              ['Services', '#services'],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={(e) => handleNavClick(e, href)} className="hover:text-gold transition-colors duration-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-utility text-[11px] uppercase tracking-widest2 text-gold mb-5">Occasions</p>
          <ul className="space-y-3 text-sm text-smoke">
            <li>Wedding Events</li>
            <li>Corporate Events</li>
            <li>Birthday Parties</li>
            <li>Outdoor Catering</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-utility text-[11px] uppercase tracking-widest2 text-gold mb-5">Reach Us</p>
          <ul className="space-y-4 text-sm text-smoke">
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" strokeWidth={1.4} />
              <span>{contact.addressLines.join(', ')}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-gold shrink-0" strokeWidth={1.4} />
              <a href={contact.phoneHref} className="hover:text-gold transition-colors duration-300">{contact.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-gold shrink-0" strokeWidth={1.4} />
              <a href={`mailto:${contact.email}`} className="hover:text-gold transition-colors duration-300">{contact.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-fluid mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-smoke">
        <p>&copy; {new Date().getFullYear()} MADHARAS Banquet Halls. All rights reserved.</p>
        <p className="font-utility uppercase tracking-widest2">Crafted for celebrations that last</p>
      </div>
    </footer>
  )
}
