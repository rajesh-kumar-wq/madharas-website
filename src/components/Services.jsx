import { motion } from 'framer-motion'
import { Heart, Briefcase, PartyPopper, UtensilsCrossed, ArrowUpRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { services } from '../utils/content'

const ICONS = {
  Weddings: Heart,
  Corporate: Briefcase,
  Celebrations: PartyPopper,
  Catering: UtensilsCrossed,
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-ink">
      <div className="container-fluid">
        <SectionHeading
          eyebrow="Services"
          title="One roof, four kinds of occasion"
          description="Every service draws on the same hall, kitchen, and decor team — so the standard never shifts, whatever the occasion."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = ICONS[s.tag] || Heart
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-card rounded-sm p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-gold/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Icon size={22} strokeWidth={1.4} />
                  </div>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.3}
                    className="text-smoke opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-gold transition-all duration-500"
                  />
                </div>

                <p className="mt-8 font-utility text-[11px] uppercase tracking-widest2 text-gold">
                  {s.tag}
                </p>
                <h3 className="mt-3 font-display text-2xl md:text-3xl text-parchment">
                  {s.title}
                </h3>
                <p className="mt-4 text-smoke leading-relaxed max-w-md">
                  {s.description}
                </p>

                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-all duration-700 group-hover:bg-gold/10" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
