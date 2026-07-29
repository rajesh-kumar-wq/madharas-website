import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { gallery } from '../utils/content'

const spanClass = {
  tall: 'lg:row-span-2',
  wide: 'lg:col-span-2',
  normal: '',
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-ink">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Gallery"
            title="Every corner, dressed to impress"
            description="A walk through the façade, the ballroom, and the tables in between."
          />
        </div>
      </div>

      <div className="container-fluid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-4 md:gap-5">
          {gallery.map((item, i) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-sm ${spanClass[item.span] || ''}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-500" />

              <figcaption className="absolute inset-x-0 bottom-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-display text-xl text-parchment">{item.title}</p>
                <p className="mt-1 text-sm text-smoke opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                  {item.caption}
                </p>
              </figcaption>

              <span className="absolute top-5 right-5 h-2 w-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
