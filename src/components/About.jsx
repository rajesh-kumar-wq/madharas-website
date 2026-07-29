import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { images } from '../utils/content'

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="container-fluid grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center relative">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                A house built for
                <br />
                <span className="text-gold">every scale of celebration</span>
              </>
            }
          />

          <div className="mt-8 space-y-6 max-w-xl text-smoke text-base md:text-lg leading-relaxed font-body">
            <p>
              MADHARAS Caterers &amp; Banquet Halls caters to social and corporate events of every size —
              from a starting crowd of 150 up to a maximum of 5,000. It's a range few venues in Chennai
              can promise, and one we've built our kitchens and halls around.
            </p>
            <p>
              Our banquet hall in T. Nagar is a large-format space with theatre-style seating for 350 and
              room for a floating crowd of 500. Whether it's a wedding reception, a corporate conference,
              or a milestone birthday, the hall opens its doors to functions starting from 100 guests
              onward.
            </p>
            <p className="text-parchment font-display text-xl md:text-2xl italic leading-snug pt-2">
              "Make every event memorable — with MADHARAS Outdoor Catering &amp; Banquet Halls."
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ['5000', 'max guests'],
              ['350', 'theatre seats'],
              ['500', 'floating crowd'],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-gold/25 pl-4">
                <p className="font-display text-3xl md:text-4xl text-gold">{n}</p>
                <p className="text-xs text-smoke uppercase tracking-widest2 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img
              src={images.facadeFloral}
              alt="Jasmine-covered entrance arch at MADHARAS banquet halls"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute -bottom-10 -left-10 w-2/3 aspect-[5/4] rounded-sm overflow-hidden glass-card shadow-glass"
          >
            <img
              src={images.cateringBuffet}
              alt="Catering buffet line set up inside MADHARAS banquet hall"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
