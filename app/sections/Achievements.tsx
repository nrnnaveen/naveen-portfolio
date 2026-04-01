'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RevealOnScroll from '../components/RevealOnScroll'
import { HiStar, HiLightningBolt } from 'react-icons/hi'
import { FaAward, FaMedal, FaBrain, FaCode } from 'react-icons/fa'

const achievements = [
  {
    title: 'Smart India Hackathon',
    subtitle: 'SIH 2025',
    description: 'Participated in India\'s biggest hackathon — Smart India Hackathon 2025. Collaborated with a team to build an innovative solution addressing national-level challenges.',
    icon: <HiStar size={26} />,
    color: '#f59e0b',
    year: '2025',
    tag: 'National Level',
    badge: '🏆',
  },
  {
    title: 'IIC Hackathon',
    subtitle: 'Institution Innovation Council',
    description: 'Competed in the IIC Hackathon hosted by the Institution\'s Innovation Council. Developed creative tech solutions within a competitive timeframe.',
    icon: <FaAward size={26} />,
    color: '#00d4ff',
    year: '2024',
    tag: 'Institutional',
    badge: '🥇',
  },
  {
    title: 'NimirnthuNil Hackathon',
    subtitle: 'Community Hackathon',
    description: 'Participated in the NimirnthuNil Hackathon, a community-driven innovation challenge. Built impactful solutions addressing local and social problems.',
    icon: <FaMedal size={26} />,
    color: '#7c3aed',
    year: '2024',
    tag: 'Community',
    badge: '🌟',
  },
  {
    title: 'AI Powered Solution Expo',
    subtitle: 'Technology Showcase',
    description: 'Showcased an AI-powered project at a technology expo. Demonstrated live AI capabilities and received recognition for innovative application of machine learning.',
    icon: <FaBrain size={26} />,
    color: '#f72585',
    year: '2024',
    tag: 'AI Expo',
    badge: '🤖',
  },
]

const stats = [
  { label: 'Hackathons', value: '4+', icon: <HiLightningBolt />, color: '#f59e0b' },
  { label: 'Projects Built', value: '5+', icon: <FaCode />, color: '#00d4ff' },
  { label: 'Domains', value: '4+', icon: <FaBrain />, color: '#7c3aed' },
  { label: 'Awards', value: '4+', icon: <HiStar />, color: '#f72585' },
]

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="section-padding max-w-7xl mx-auto" ref={ref}>
      <RevealOnScroll className="text-center mb-16">
        <span className="badge mb-4">RECOGNITION</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          Achievements &amp; <span className="gradient-text">Awards</span>
        </h2>
        <p className="mt-4 font-body text-slate-400 max-w-lg mx-auto">
          Recognition from hackathons, expos, and innovation challenges across India.
        </p>
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      </RevealOnScroll>

      {/* Stats row */}
      <RevealOnScroll delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="glass-card p-5 text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 * i }}
            whileHover={{ y: -4, scale: 1.03 }}
          >
            <div
              className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg"
              style={{ background: `${stat.color}20`, color: stat.color }}
            >
              {stat.icon}
            </div>
            <div className="stat-number text-3xl font-black">{stat.value}</div>
            <div className="font-body text-xs text-slate-400 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </RevealOnScroll>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={ach.title}
            className="glass-card p-6 group relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 * i, duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            {/* Background glow */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: ach.color }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform"
                  style={{ background: `${ach.color}15`, color: ach.color, boxShadow: `0 0 20px ${ach.color}20` }}
                >
                  {ach.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-bold text-lg text-white">{ach.title}</h3>
                    <span className="text-lg">{ach.badge}</span>
                  </div>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">{ach.subtitle}</div>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span
                    className="font-mono text-[10px] px-2 py-1 rounded-full border"
                    style={{ color: ach.color, borderColor: `${ach.color}30`, background: `${ach.color}10` }}
                  >
                    {ach.tag}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{ach.year}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-slate-400 leading-relaxed">{ach.description}</p>

              {/* Bottom bar */}
              <div
                className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2"
              >
                <div
                  className="h-1 rounded-full flex-1"
                  style={{ background: `linear-gradient(90deg, ${ach.color}, transparent)` }}
                />
                <span className="font-mono text-[10px] text-slate-500">ACHIEVEMENT UNLOCKED</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom motivational quote */}
      <RevealOnScroll delay={0.4} className="mt-12">
        <div
          className="glass-card p-8 text-center relative overflow-hidden"
          style={{ borderColor: 'rgba(245,158,11,0.2)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5" />
          <div className="relative z-10">
            <div className="text-4xl mb-4">🚀</div>
            <p className="font-display font-semibold text-xl text-white mb-2">
            &quot;Every hackathon is a launchpad.&quot;
            </p>
            <p className="font-body text-sm text-slate-400">
              Each competition sharpened skills, expanded network, and brought me closer to my dream of building impactful tech.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  )
}
