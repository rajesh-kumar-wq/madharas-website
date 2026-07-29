import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { features, images } from '../utils/content'

export default function Features() {
  return (
    <section id="capacity" className="relative py-28 md:py-40 bg-ink-soft bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.ballroomTheatre}
          alt=""
          className="h-full w-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      </div>

      <div className="container-fluid relative">
        <SectionHeading
          eyebrow="Capacity"
          title="A single hall, built to scale"
          description="Most venues pick a size and stay there. Ours flexes — from a family gathering of a hundred to a wedding of thousands, without losing the room's proportions."
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-ink p-8 md:p-10 flex flex-col justify-between min-h-[280px] transition-colors duration-500 hover:bg-ink-raised"
            >
              <div>
                <span className="font-utility text-xs text-smoke tracking-widest2 uppercase">
                  0{i + 1}
                </span>
                <p className="mt-6 font-display text-4xl md:text-5xl text-gold leading-none">
                  {f.value}
                </p>
                <p className="mt-2 font-utility text-[11px] uppercase tracking-widest2 text-gold-bright">
                  {f.unit}
                </p>
              </div>
              <div>
                <p className="mt-6 font-display text-lg text-parchment">{f.label}</p>
                <p className="mt-3 text-sm text-smoke leading-relaxed">{f.detail}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
