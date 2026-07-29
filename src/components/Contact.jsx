import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { contact, hours } from '../utils/content'

export default function Contact() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-ink">
      <div className="container-fluid">
        <SectionHeading
          eyebrow="Visit Us"
          title="Plan a walkthrough of the hall"
          description="Come see the ballroom, the forecourt, and the kitchen before you decide. We're open seven days a week."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="glass-card rounded-sm p-7 flex gap-5">
              <MapPin className="text-gold shrink-0" size={22} strokeWidth={1.4} />
              <div>
                <p className="font-utility text-[11px] uppercase tracking-widest2 text-gold mb-2">Address</p>
                {contact.addressLines.map((line) => (
                  <p key={line} className="text-parchment text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            </div>

            <a href={contact.phoneHref} className="glass-card rounded-sm p-7 flex gap-5 transition-colors duration-300 hover:border-gold/50">
              <Phone className="text-gold shrink-0" size={22} strokeWidth={1.4} />
              <div>
                <p className="font-utility text-[11px] uppercase tracking-widest2 text-gold mb-2">Phone</p>
                <p className="text-parchment text-sm">{contact.phone}</p>
              </div>
            </a>

            <a href={`mailto:${contact.email}`} className="glass-card rounded-sm p-7 flex gap-5 transition-colors duration-300 hover:border-gold/50">
              <Mail className="text-gold shrink-0" size={22} strokeWidth={1.4} />
              <div>
                <p className="font-utility text-[11px] uppercase tracking-widest2 text-gold mb-2">Email</p>
                <p className="text-parchment text-sm">{contact.email}</p>
              </div>
            </a>

            <div className="glass-card rounded-sm p-7 flex gap-5">
              <Clock className="text-gold shrink-0" size={22} strokeWidth={1.4} />
              <div className="w-full">
                <p className="font-utility text-[11px] uppercase tracking-widest2 text-gold mb-3">Hours</p>
                <div className="space-y-1.5">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between text-sm ${
                        h.day === today ? 'text-gold' : 'text-smoke'
                      }`}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 min-h-[420px] rounded-sm overflow-hidden border border-gold/15 relative"
          >
            <iframe
              title="MADHARAS Banquet Halls location on Google Maps"
              src={contact.mapEmbed}
              className="h-full w-full min-h-[420px] grayscale contrast-125 opacity-90"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
