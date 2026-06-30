'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RevealOnScroll from '../components/RevealOnScroll'
import {
  SiPython, SiMysql, SiPostgresql, SiGit, SiGithub,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa'

const skillCategories = [
  {
    label: 'Programming Languages',
    icon: <FaCode />,
    color: '#00d4ff',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 80, color: '#3776ab' },
      { name: 'SQL', icon: <FaDatabase />, level: 78, color: '#8b5cf6' },
      { name: 'JavaScript', icon: <FaCode />, level: 65, color: '#f7df1e' },
      { name: 'HTML', icon: <FaCode />, level: 72, color: '#e34f26' },
      { name: 'CSS', icon: <FaCode />, level: 70, color: '#1572b6' },
    ]
  },
  {
    label: 'Backend',
    icon: <FaServer />,
    color: '#7c3aed',
    skills: [
      { name: 'Flask', icon: <FaServer />, level: 68, color: '#ffffff' },
      { name: 'FastAPI', icon: <FaServer />, level: 66, color: '#05998b' },
    ]
  },
  {
    label: 'Databases',
    icon: <FaDatabase />,
    color: '#7c3aed',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 74, color: '#336791' },
      { name: 'SQLite', icon: <FaDatabase />, level: 68, color: '#64748b' },
      { name: 'MySQL', icon: <SiMysql />, level: 70, color: '#4479a1' },
    ]
  },
  {
    label: 'Data Engineering',
    icon: <FaServer />,
    color: '#00f5d4',
    skills: [
      { name: 'Pandas', icon: <FaServer />, level: 75, color: '#130754' },
      { name: 'NumPy', icon: <FaServer />, level: 72, color: '#4dabcf' },
      { name: 'ETL', icon: <FaServer />, level: 73, color: '#f59e0b' },
      { name: 'Data Cleaning', icon: <FaServer />, level: 76, color: '#22c55e' },
    ]
  },
  {
    label: 'Tools',
    icon: <FaTools />,
    color: '#f72585',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 65, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub />, level: 65, color: '#f0f6fc' },
      { name: 'VS Code', icon: <VscVscode />, level: 75, color: '#007acc' },
      { name: 'Docker', icon: <FaTools />, level: 52, color: '#0ea5e9' },
    ]
  },
]

const currentlyLearning = [
  'Data Engineering',
  'Apache Spark',
  'Apache Airflow',
  'dbt',
  'Docker',
  'Kubernetes',
  'AWS',
  'Data Warehousing',
  'ETL Pipelines',
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="section-padding max-w-7xl mx-auto" ref={ref}>
      <RevealOnScroll className="text-center mb-16">
        <span className="badge mb-4">WHAT I KNOW</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="mt-4 font-body text-slate-400 max-w-xl mx-auto">
          A focused overview of the tools, languages, and data engineering foundations I use to build practical systems.
        </p>
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <h3 className="font-display font-semibold text-lg text-slate-300 mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-purple-400" />
          Technical Categories
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="glass-card p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: `${cat.color}15`, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <h4 className="font-display font-semibold text-white">{cat.label}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    <span style={{ color: skill.color }}>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3} className="mt-10">
        <div className="glass-card p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5" />
          <div className="relative z-10 flex flex-col gap-5">
            <div>
              <div className="font-mono text-xs text-cyan-400 tracking-widest mb-1">CURRENTLY LEARNING</div>
              <div className="font-display font-bold text-2xl text-white">Sharpening the data stack</div>
            </div>
            <div className="flex flex-wrap gap-3">
              {currentlyLearning.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg font-mono text-xs text-cyan-200 border border-cyan-400/20 bg-cyan-400/10"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(34,211,238,0.5)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  )
}
