'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiDownload } from 'react-icons/fi'
import RevealOnScroll from '../components/RevealOnScroll'

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: '2026',
    credential: 'Coming Soon',
    image: '/assets/certificates/google-data-analytics.png',
    alt: 'Google Data Analytics Professional Certificate placeholder',
  },
  {
    title: 'Python Programming Certificate',
    issuer: 'Coursera',
    date: '2026',
    credential: 'Coming Soon',
    image: '/assets/certificates/python.png',
    alt: 'Python Programming Certificate placeholder',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="section-padding max-w-7xl mx-auto" ref={ref}>
      <RevealOnScroll className="text-center mb-14">
        <span className="badge mb-4">CREDENTIALS</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          Certifications
        </h2>
        <p className="mt-4 font-body text-slate-400 max-w-2xl mx-auto">
          A focused collection of verified learning and upcoming credentials aligned with data engineering and Python development.
        </p>
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.article
            key={cert.title}
            className="glass-card overflow-hidden group flex flex-col h-full"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 * i, duration: 0.55 }}
            whileHover={{ y: -4 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950/70 border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={cert.image}
                alt={cert.alt}
                fill
                className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
              <div className="absolute top-4 right-4 rounded-full border border-cyan-400/20 bg-slate-950/70 px-3 py-1 text-[10px] font-mono tracking-widest text-cyan-300">
                CERTIFICATE
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-5 space-y-2">
                <h3 className="font-display text-xl font-bold text-white leading-tight">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                  <span>{cert.issuer}</span>
                  <span className="text-slate-600">•</span>
                  <span>{cert.date}</span>
                </div>
                <div className="text-xs font-mono text-slate-500">
                  Credential: {cert.credential}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-5 border-t border-white/5">
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-300 opacity-70 transition-colors cursor-not-allowed"
                  aria-label={`${cert.title} verification link coming soon`}
                >
                  <FiExternalLink size={14} />
                  Verify Certificate
                </button>
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-400 opacity-60 cursor-not-allowed"
                >
                  <FiDownload size={14} />
                  Download
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}