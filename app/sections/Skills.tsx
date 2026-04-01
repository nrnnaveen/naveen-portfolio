'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RevealOnScroll from '../components/RevealOnScroll'
import {
  SiPython, SiMysql, SiPostgresql, SiGit, SiGithub,
  SiVisualstudio, SiMicrosoftword,
} from 'react-icons/si'
import { FaBrain, FaDatabase, FaWifi, FaRobot, FaServer, FaCloud } from 'react-icons/fa'

const skillCategories = [
  {
    label: 'Programming',
    icon: <FaServer />,
    color: '#00d4ff',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 60, color: '#3776ab' },
    ]
  },
  {
    label: 'Databases',
    icon: <FaDatabase />,
    color: '#7c3aed',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, level: 60, color: '#4479a1' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 55, color: '#336791' },
    ]
  },
  {
    label: 'Tools',
    icon: <FaCloud />,
    color: '#f72585',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 65, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub />, level: 65, color: '#f0f6fc' },
      { name: 'VS Code', icon: <SiVisualstudio />, level: 75, color: '#007acc' },
      { name: 'GitHub Copilot', icon: <FaRobot />, level: 70, color: '#a78bfa' },
      { name: 'MS Office', icon: <SiMicrosoftword />, level: 70, color: '#d83b01' },
    ]
  },
]

const domains = [
  { name: 'Artificial Intelligence', icon: <FaBrain size={24} />, color: '#00d4ff', desc: 'ML, Deep Learning, LLMs' },
  { name: 'Data Science', icon: <FaDatabase size={24} />, color: '#7c3aed', desc: 'Analytics, Visualization, Pipelines' },
  { name: 'IoT', icon: <FaWifi size={24} />, color: '#f72585', desc: 'Sensors, Edge Computing' },
  { name: 'Prompt Engineering', icon: <FaRobot size={24} />, color: '#00f5d4', desc: 'LLM Optimization, RAG' },
]

function SkillBar({ name, icon, level, color, inView }: any) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span style={{ color }}>{icon}</span>
          <span className="font-body text-sm text-slate-200">{name}</span>
        </div>
        <span className="font-mono text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          style={{
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="section-padding max-w-7xl mx-auto" ref={ref}>
      <RevealOnScroll className="text-center mb-16">
        <span className="badge mb-4">WHAT I KNOW</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </RevealOnScroll>

      {/* Domain Cards */}
      <RevealOnScroll delay={0.1} className="mb-14">
        <h3 className="font-display font-semibold text-lg text-slate-300 mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-cyan-400" />
          Core Domains
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.name}
              className="glass-card p-5 text-center group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{ '--hover-color': domain.color } as any}
            >
              <div
                className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: `${domain.color}15`, color: domain.color, boxShadow: `0 0 20px ${domain.color}20` }}
              >
                {domain.icon}
              </div>
              <div className="font-display font-semibold text-sm text-white mb-1">{domain.name}</div>
              <div className="font-body text-xs text-slate-500">{domain.desc}</div>
            </motion.div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Skill bars */}
      <RevealOnScroll delay={0.2}>
        <h3 className="font-display font-semibold text-lg text-slate-300 mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-purple-400" />
          Technical Proficiency
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="glass-card p-6"
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
              {cat.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Currently Learning */}
      <RevealOnScroll delay={0.3} className="mt-10">
        <div className="glass-card p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="font-mono text-xs text-cyan-400 tracking-widest mb-1">CURRENTLY LEARNING</div>
              <div className="font-display font-bold text-2xl text-white">Level Up Mode 🚀</div>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Apache Spark', 'Apache Kafka', 'dbt', 'Airflow', 'Data Warehousing', 'Cloud (AWS/GCP)'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg font-mono text-xs text-purple-300 border border-purple-500/30 bg-purple-500/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(167,139,250,0.6)' }}
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
