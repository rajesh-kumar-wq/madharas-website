import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'
import ParticleField from './ui/ParticleField'
import { images } from '../utils/content'
import { useTheme } from '../hooks/useTheme.jsx'

export default function Hero() {
  const scope = useRef(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.set('.hero-word', { yPercent: 120 })
        .set(['.hero-tagline', '.hero-eyebrow', '.hero-cta', '.hero-scroll'], { opacity: 0, y: 24 })
        .set('.hero-bg', { scale: 1.18, opacity: 0 })
        .set('.hero-veil', { scaleX: 1 })

        .to('.hero-bg', { opacity: 1, duration: 1.6, ease: 'power2.out' }, 0.1)
        .to('.hero-veil', { scaleX: 0, duration: 1.1, ease: 'power3.inOut', transformOrigin: 'right' }, 0.15)
        .to('.hero-bg', { scale: 1, duration: 3.2, ease: 'power2.out' }, 0.1)
        .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.9 }, 0.9)
        .to('.hero-word', { yPercent: 0, duration: 1.1, stagger: 0.09 }, 1.05)
        .to('.hero-tagline', { opacity: 1, y: 0, duration: 1 }, 1.7)
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.9 }, 1.95)
        .to('.hero-scroll', { opacity: 1, y: 0, duration: 0.8 }, 2.2)
    }, scope)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={scope}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div className="hero-bg absolute inset-0">
        <img
          src={isLight ? images.facadeDusk : images.facadeNight}
          alt="MADHARAS banquet hall entrance illuminated in T. Nagar, Chennai"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* Wipe veil transition element */}
      <div className="hero-veil absolute inset-0 z-20 bg-ink" />

      {/* Ambient particles */}
      <ParticleField
        className="absolute inset-0 z-10 opacity-70"
        count={220}
        color={isLight ? 0xa87a21 : 0xd4af37}
      />

      {/* Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="hero-eyebrow eyebrow before:hidden justify-center mb-8">
          T. Nagar &middot; Chennai &middot; Est. Banquet House
        </p>

        <h1 className="font-display font-normal text-parchment leading-[0.92] select-none">
          <span className="block overflow-hidden text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[8.5vw]">
            <span className="hero-word inline-block">MADHARAS</span>
          </span>
        </h1>

        <div className="hero-tagline mt-8 flex flex-col items-center gap-4">
          <div className="gold-hairline max-w-[220px]" />
          <p className="font-utility text-sm sm:text-base md:text-lg uppercase tracking-widest2 text-gold-bright">
            Luxury Banquet Hall &amp; Outdoor Catering
          </p>
          <p className="max-w-xl text-smoke text-sm md:text-base font-body leading-relaxed">
            Social and corporate events, from an intimate 150 to a five-thousand-strong celebration —
            hosted or catered, without compromise.
          </p>
        </div>

        <div className="hero-cta mt-10 flex flex-col sm:flex-row items-center gap-5">
          <a href="#contact" className="btn-gold">Book a Visit</a>
          <a href="#gallery" className="btn-ghost">View the Halls</a>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-smoke">
        <span className="font-utility text-[10px] uppercase tracking-widest2">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" strokeWidth={1.3} />
      </div>
    </section>
  )
}
