import { motion } from 'framer-motion'
import { images } from '../utils/content'

export default function BookingCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.ballroomWedding}
          alt="MADHARAS grand ballroom set for a wedding reception"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/70" />
      </div>

      <div className="container-fluid relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="eyebrow before:hidden justify-center mb-6"
        >
          Reserve Your Date
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-parchment max-w-3xl mx-auto leading-[1.1]"
        >
          Let's make your next event <span className="text-gold">unforgettable</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-smoke text-base md:text-lg max-w-xl mx-auto"
        >
          Tell us the date and the headcount — we'll handle the hall, the seating, and the menu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#contact" className="btn-gold">Enquire Now</a>
          <a href="tel:+918056020701" className="btn-ghost">Call 080560 20701</a>
        </motion.div>
      </div>
    </section>
  )
}
