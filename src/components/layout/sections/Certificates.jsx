import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Maximize2, X, FileText } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import { certificates } from '../../../data/certificates'

export default function Certificates() {
  const [active, setActive] = useState(null)

  // Close the lightbox with Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active])

  return (
    <section id="certificates" className="py-24 max-w-5xl mx-auto px-6">
      <SectionTitle
        title="Certificates"
        subtitle="Courses and programs I've completed"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
        {certificates.map((cert, index) => (
          <ScrollReveal key={cert.id} delay={(index % 4) * 0.08}>
            {cert.type === 'pdf' ? (
              <motion.a
                href={cert.src}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex aspect-square w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/5 p-4 text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label={`Open ${cert.title} (PDF)`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-400/10 text-primary-400 transition-colors duration-300 group-hover:bg-primary-400/20">
                  <FileText className="h-8 w-8" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-gray-200">
                  {cert.title}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-gray-500">
                  PDF
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-[1.3rem] ring-0 ring-primary-400/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary-400/50" />
              </motion.a>
            ) : (
              <motion.button
                type="button"
                onClick={() => setActive(cert)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative block aspect-square w-full overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label={`View ${cert.title}`}
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                {/* Gradient + icon overlay on hover */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-primary-400/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                    View
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-[1.3rem] ring-0 ring-primary-400/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary-400/50" />
              </motion.button>
            )}
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
            <motion.img
              key={active.id}
              src={active.src}
              alt={active.title}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="max-h-[85vh] max-w-full rounded-[1.3rem] border border-white/10 object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
