import { motion } from 'framer-motion'

/**
 * Section heading built around MADHARAS's own signage motif —
 * a gold dot used as a divider between words, echoing the brand's
 * ".MA.DHA.RAS." wordmark seen on the physical signboard.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left'}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className={`eyebrow mb-5 ${align === 'center' ? 'justify-center before:hidden' : ''}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-normal text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-parchment"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-base md:text-lg text-smoke font-body leading-relaxed max-w-xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export function DotMark({ className = '' }) {
  return <span className={`dot-mark ${className}`}>&middot;</span>
}
