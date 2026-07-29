import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { testimonials } from '../utils/content'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="relative py-28 md:py-40 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="container-fluid relative">
        <SectionHeading eyebrow="Reviews" title="What the room remembers" align="center" />

        <div className="mt-16 max-w-3xl mx-auto relative">
          <Quote className="mx-auto text-gold/40 mb-8" size={40} strokeWidth={1} />

          <div className="relative min-h-[220px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-2xl md:text-3xl leading-snug text-parchment">
                  &ldquo;{testimonials[index].quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="text-gold font-utility uppercase tracking-widest2 text-sm">
                    {testimonials[index].name}
                  </p>
                  <p className="text-smoke text-sm mt-1">{testimonials[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 bg-gold' : 'w-1.5 bg-gold/25'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
