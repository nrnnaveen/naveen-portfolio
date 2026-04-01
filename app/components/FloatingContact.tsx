'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMail, HiX, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const contactItems = [
  {
    icon: <HiMail size={20} />,
    label: 'Email',
    value: 'naveen.ai25@stellamaryscoe.edu.in',
    href: 'mailto:naveen.ai25@stellamaryscoe.edu.in',
    color: '#00d4ff',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'naveen-m-354887375',
    href: 'https://www.linkedin.com/in/naveen-m-354887375',
    color: '#0077b5',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'nrnnaveen',
    href: 'https://github.com/nrnnaveen',
    color: '#f0f6fc',
  },
]

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* FAB */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-neon-blue"
        style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(0,212,255,0.6)' }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HiMail size={24} />
        {/* Ping */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: 'rgba(0,212,255,0.4)' }} />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-end pb-28 pr-8 modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}
          >
            <motion.div
              className="glass-card p-6 w-80 relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', bounce: 0.25 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <HiX size={20} />
              </button>

              <h3 className="font-display font-bold text-xl text-white mb-1">Let's Connect</h3>
              <p className="font-body text-sm text-slate-400 mb-5">Open to collaborations & opportunities</p>

              <div className="flex flex-col gap-3">
                {contactItems.map(item => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: `${item.color}20`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-body text-xs text-slate-400">{item.label}</div>
                      <div className="font-body text-sm text-white truncate">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="font-mono text-xs text-center text-slate-500">
                  📍 Gobichettipalayam, Erode, India
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
