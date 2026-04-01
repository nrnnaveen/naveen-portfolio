'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RevealOnScroll from '../components/RevealOnScroll'
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const contactDetails = [
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
    value: 'linkedin.com/in/naveen-m-354887375',
    href: 'https://www.linkedin.com/in/naveen-m-354887375',
    color: '#0077b5',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/nrnnaveen',
    href: 'https://github.com/nrnnaveen',
    color: '#f0f6fc',
  },
  {
    icon: <HiLocationMarker size={20} />,
    label: 'Location',
    value: 'Gobichettipalayam, Erode, Tamil Nadu, India',
    href: 'https://maps.google.com/?q=Gobichettipalayam',
    color: '#f72585',
  },
]

type FormState = { name: string; email: string; subject: string; message: string }
type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission - replace with actual API call (e.g. Resend, EmailJS, Formspree)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <div className="section-padding max-w-7xl mx-auto" ref={ref}>
      <RevealOnScroll className="text-center mb-16">
        <span className="badge mb-4">GET IN TOUCH</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="mt-4 font-body text-slate-400 max-w-md mx-auto">
          Open to internships, collaborations, and exciting data engineering opportunities.
        </p>
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </RevealOnScroll>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact info */}
        <RevealOnScroll delay={0.1} direction="left">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Ready to build something great?
            </h3>
            <p className="font-body text-slate-400 mb-8 leading-relaxed">
              Whether you have a project idea, internship opportunity, or just want to talk data — my inbox is always open. I'll respond within 24 hours.
            </p>

            <div className="space-y-4">
              {contactDetails.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label !== 'Email' && item.label !== 'Location' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card group hover:border-white/20 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xs text-slate-500">{item.label}</div>
                    <div className="font-body text-sm text-slate-200 truncate">{item.value}</div>
                  </div>
                  <div className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0">→</div>
                </motion.a>
              ))}
            </div>

            {/* Availability notice */}
            <motion.div
              className="mt-8 p-4 glass-card flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              style={{ borderColor: 'rgba(0,245,212,0.2)' }}
            >
              <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="font-mono text-xs text-teal-400">AVAILABLE FOR OPPORTUNITIES</div>
                <div className="font-body text-xs text-slate-400 mt-0.5">Internships · Freelance · Collaborations</div>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>

        {/* Right: Contact form */}
        <RevealOnScroll delay={0.2} direction="right">
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-xs text-slate-400 tracking-wider uppercase mb-2 block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-body text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-slate-400 tracking-wider uppercase mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-body text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs text-slate-400 tracking-wider uppercase mb-2 block">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-body text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-all"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-slate-400 tracking-wider uppercase mb-2 block">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-body text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full py-3.5 rounded-xl font-body font-semibold text-white flex items-center justify-center gap-3 relative overflow-hidden disabled:opacity-70 transition-all"
              style={{
                background: status === 'sent'
                  ? 'linear-gradient(135deg, #00f5d4, #00d4ff)'
                  : 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              }}
              whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.4)' } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
            >
              {status === 'idle' && (
                <>
                  <HiPaperAirplane size={18} className="-rotate-45" />
                  Send Message
                </>
              )}
              {status === 'sending' && (
                <>
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  />
                  Sending...
                </>
              )}
              {status === 'sent' && (
                <>
                  <span className="text-lg">✓</span>
                  Message Sent! I'll respond soon.
                </>
              )}
              {status === 'error' && '❌ Something went wrong. Try again.'}
            </motion.button>
          </form>
        </RevealOnScroll>
      </div>
    </div>
  )
}
