import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { contact } from '../utils/content'
import ThemeToggle from './ui/ThemeToggle'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Capacity', href: '#capacity' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-gold/10 py-4' : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <nav className="container-fluid flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="font-display text-xl md:text-2xl tracking-widest2 text-parchment"
          >
            MA<span className="text-gold">&middot;</span>DHA<span className="text-gold">&middot;</span>RAS
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative font-utility text-[12px] uppercase tracking-widest2 text-smoke transition-colors duration-300 hover:text-gold group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <ThemeToggle />
            <a href={contact.phoneHref} className="flex items-center gap-2 text-gold text-sm font-utility tracking-wide">
              <Phone size={14} strokeWidth={1.5} />
              {contact.phone}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-gold !py-2.5 !px-6 !text-[11px]"
            >
              Book a Visit
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="text-parchment"
              aria-label="Open menu"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="container-fluid flex items-center justify-between py-6">
              <span className="font-display text-xl tracking-widest2 text-parchment">
                MA<span className="text-gold">&middot;</span>DHA<span className="text-gold">&middot;</span>RAS
              </span>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-parchment">
                  <X size={26} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center container-fluid gap-2">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="font-display text-4xl sm:text-5xl text-parchment py-3 border-b border-gold/10 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="container-fluid py-8 flex items-center justify-between border-t border-gold/10">
              <a href={contact.phoneHref} className="text-gold font-utility tracking-wide">{contact.phone}</a>
              <span className="text-smoke text-sm font-utility">T. Nagar, Chennai</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
