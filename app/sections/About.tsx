'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RevealOnScroll from '../components/RevealOnScroll'
import { FaUniversity, FaMapMarkerAlt, FaEnvelope, FaBrain, FaRocket, FaLightbulb } from 'react-icons/fa'

const highlights = [
  { icon: <FaBrain size={18} />, label: 'AI & Data Science', color: '#00d4ff' },
  { icon: <FaRocket size={18} />, label: 'Future Entrepreneur', color: '#7c3aed' },
  { icon: <FaLightbulb size={18} />, label: 'Problem Solver', color: '#f72585' },
]

const infoItems = [
  { icon: <FaUniversity />, label: 'College', value: "Stella Mary's College of Engineering" },
  { icon: <FaBrain />, label: 'Degree', value: 'B.Tech AI & Data Science' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Gobichettipalayam, Erode, India' },
  { icon: <FaEnvelope />, label: 'Email', value: 'naveen.ai25@stellamaryscoe.edu.in' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div className="section-padding max-w-7xl mx-auto">
      {/* Section Header */}
      <RevealOnScroll className="text-center mb-16">
        <span className="badge mb-4">WHO AM I</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </RevealOnScroll>

      <div className="grid lg:grid-cols-2 gap-12 items-start" ref={ref}>
        {/* Left: Story */}
        <div>
          <RevealOnScroll delay={0.1} direction="left">
            <div className="terminal mb-8">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#febc2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="font-mono text-xs text-slate-500 ml-3">naveen.py</span>
              </div>
              <div className="p-5 font-mono text-sm leading-7">
                <div><span className="text-purple-400">class</span> <span className="text-cyan-300">Naveen</span><span className="text-slate-400">:</span></div>
                <div className="pl-4">
                  <div><span className="text-purple-400">def</span> <span className="text-cyan-400">__init__</span><span className="text-slate-400">(self):</span></div>
                  <div className="pl-6">
                    <div><span className="text-slate-500">self</span><span className="text-slate-400">.</span><span className="text-green-400">passion</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">&quot;Data Engineering&quot;</span></div>
                    <div><span className="text-slate-500">self</span><span className="text-slate-400">.</span><span className="text-green-400">goal</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">&quot;Build Scalable Systems&quot;</span></div>
                    <div><span className="text-slate-500">self</span><span className="text-slate-400">.</span><span className="text-green-400">dream</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">&quot;Tech Entrepreneur&quot;</span></div>
                    <div><span className="text-slate-500">self</span><span className="text-slate-400">.</span><span className="text-green-400">status</span> <span className="text-slate-400">=</span> <span className="text-cyan-300">True</span> <span className="text-slate-600"># available</span></div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} direction="left">
            <div className="space-y-5 text-slate-300 font-body leading-relaxed">
              <p>
                I&apos;m <span className="text-cyan-400 font-semibold">Naveen M</span>, an aspiring Data Engineer currently pursuing my B.Tech in Artificial Intelligence and Data Science at Stella Mary&apos;s College of Engineering, Kanyakumari.
              </p>
              <p>
                My journey into technology began with a deep fascination for how data shapes the world. I am passionate about <span className="text-purple-400 font-medium">AI, Data Science, Databases</span>, and the Internet of Things — building bridges between raw information and meaningful insights.
              </p>
              <p>
                My ultimate goal is to engineer <span className="text-cyan-400 font-medium">scalable data pipelines and systems</span> that power intelligent applications. Beyond technical expertise, I envision starting my own <span className="text-pink-400 font-medium">tech-driven business</span> that solves real-world challenges using data and AI.
              </p>
            </div>
          </RevealOnScroll>

          {/* Highlights */}
          <RevealOnScroll delay={0.35} direction="left">
            <div className="flex flex-wrap gap-3 mt-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{ borderColor: `${h.color}30` }}
                >
                  <span style={{ color: h.color }}>{h.icon}</span>
                  <span className="font-body text-sm text-slate-200">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Right: Info cards */}
        <RevealOnScroll delay={0.2} direction="right">
          <div className="space-y-4">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-card p-5 flex items-start gap-4 group hover:border-cyan-400/30 transition-colors"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-body text-slate-200 text-sm">{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              className="glass-card p-5 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              style={{ borderColor: 'rgba(124,58,237,0.3)' }}
            >
              <div className="absolute top-3 left-4 text-5xl text-purple-500/20 font-display font-black leading-none">&quot;</div>
              <p className="font-body text-slate-300 italic text-sm leading-relaxed relative z-10 pt-4 pl-2">
                Data is the new oil, but only when refined into actionable insights does it truly power innovation.
              </p>
              <div className="mt-3 pt-3 border-t border-white/5">
                <span className="font-mono text-xs text-purple-400">— Naveen M</span>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
