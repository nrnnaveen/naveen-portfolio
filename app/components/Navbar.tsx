'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.slice(1))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'glass-card py-3 px-6 rounded-2xl mx-4 shadow-glass'
              : ''
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home') }}
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-neon-blue">
                <span className="font-display font-black text-white text-lg">N</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-sm">Naveen M</span>
                <div className="font-mono text-[9px] text-cyan-400 tracking-widest">DATA ENGINEER</div>
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                className={`relative px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors duration-200 group ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    className="absolute inset-0 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
                    layoutId="nav-active"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}
            <motion.a
              href="/NAVEEN.pdf"
              download
              className="ml-3 px-5 py-2 rounded-lg font-body text-sm font-semibold text-white border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/70 transition-all duration-200 glow-btn"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              Resume ↓
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 glass-card rounded-l-2xl p-6 pt-20 flex flex-col gap-2"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                  className={`px-4 py-3 rounded-xl font-body font-medium text-lg transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="/NAVEEN.pdf"
                  download
                  className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
