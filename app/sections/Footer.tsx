'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/nrnnaveen', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/naveen-m-354887375', label: 'LinkedIn' },
  { icon: <HiMail size={18} />, href: 'mailto:naveen.ai25@stellamaryscoe.edu.in', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-neon-blue">
                <span className="font-display font-black text-white text-xl">N</span>
              </div>
              <div>
                <div className="font-display font-bold text-white">Naveen M</div>
                <div className="font-mono text-[9px] text-cyan-400 tracking-widest">DATA ENGINEER</div>
              </div>
            </div>
            <p className="font-body text-sm text-slate-500 leading-relaxed max-w-xs">
              Aspiring Data Engineer passionate about building scalable data systems and solving real-world problems with AI.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">Quick Links</div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-body text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">Current Status</div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="font-body text-sm text-slate-300">Open to opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="font-body text-sm text-slate-300">Studying B.Tech AI & DS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
                <span className="font-body text-sm text-slate-300">Building data projects</span>
              </div>
              <div className="mt-4">
                <a
                  href="/NAVEEN.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-body text-xs font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                >
                  📄 Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-body text-xs text-slate-600 flex items-center gap-1.5 flex-wrap justify-center">
            <span>© {year} Naveen M. Built with</span>
            <FaHeart size={10} className="text-pink-500 animate-pulse" />
            <span>using Next.js, Tailwind & Framer Motion.</span>
          </div>
          <div className="font-mono text-xs text-slate-600">
            Gobichettipalayam, India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  )
}
