'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RevealOnScroll from '../components/RevealOnScroll'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

const projects = [
  {
    title: 'All Cutoff Calculator',
    description: 'A comprehensive web application to calculate academic cutoffs for various engineering admissions. Helps students plan and navigate the college admission process efficiently.',
    tech: ['Python', 'Streamlit', 'Data Analysis'],
    live: 'https://cutoff-calculator-g2xzipk2xcfzkw6kkndwed.streamlit.app/',
    color: '#00d4ff',
    gradient: 'from-cyan-400/20 to-blue-600/10',
    icon: '🎯',
    tag: 'Education Tech',
  },
  {
    title: 'Gen AI Assistant',
    description: 'A Generative AI powered Q&A application leveraging large language models to provide intelligent answers and insights on user queries.',
    tech: ['Python', 'Streamlit', 'GenAI', 'LLM'],
    live: 'https://dkaz5fxkmycxtyzxqlzkum.streamlit.app/#answer',
    color: '#7c3aed',
    gradient: 'from-purple-500/20 to-violet-800/10',
    icon: '🤖',
    tag: 'Generative AI',
  },
  {
    title: 'SQL Mobile Playground',
    description: 'An interactive SQL practice environment optimized for mobile devices. Users can write, execute, and learn SQL queries right from their smartphones.',
    tech: ['SQL', 'Node.js', 'React', 'PostgreSQL'],
    live: 'https://sql-practice-mobile-playground.onrender.com',
    color: '#f72585',
    gradient: 'from-pink-500/20 to-rose-800/10',
    icon: '💾',
    tag: 'Developer Tools',
  },
  {
    title: 'Frequency Analyzer Web',
    description: 'A browser-based sound analysis tool that visualizes audio frequencies in real-time. Useful for audio engineers, musicians, and sound researchers.',
    tech: ['Python', 'Streamlit', 'Web Audio API', 'Signal Processing'],
    live: 'https://sound-lab-m5jujhneooqpsuxgtcvhvd.streamlit.app/',
    color: '#00f5d4',
    gradient: 'from-teal-400/20 to-emerald-700/10',
    icon: '🎵',
    tag: 'Audio Tech',
  },
  {
    title: 'Guardian AI',
    description: 'An AI-powered safety and security solution built for Gen Z. Leverages generative AI to provide protective features and smart monitoring capabilities.',
    tech: ['Python', 'Streamlit', 'Gen AI', 'Safety Systems'],
    live: 'https://guardianai-gen-z-coders-gfkaghsbjgkygydkwh5uux.streamlit.app/',
    color: '#fb923c',
    gradient: 'from-orange-400/20 to-amber-700/10',
    icon: '🛡️',
    tag: 'AI Safety',
    featured: true,
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <div className="section-padding max-w-7xl mx-auto" ref={ref}>
      <RevealOnScroll className="text-center mb-16">
        <span className="badge mb-4">WHAT I BUILT</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="mt-4 font-body text-slate-400 max-w-lg mx-auto">
          Explore my portfolio of live applications spanning AI, data tools, and developer utilities.
        </p>
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className={`project-card glass-card overflow-hidden group relative flex flex-col ${
              project.featured ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            {/* Gradient top bar */}
            <div
              className="h-1 w-full"
              style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
            />

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-orange-400/20 border border-orange-400/30">
                <HiSparkles size={10} className="text-orange-400" />
                <span className="font-mono text-[9px] text-orange-400">FEATURED</span>
              </div>
            )}

            {/* Card content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Icon + Tag */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${project.color}15` }}
                >
                  {project.icon}
                </div>
                <span
                  className="font-mono text-[10px] px-2 py-1 rounded-full border"
                  style={{ color: project.color, borderColor: `${project.color}30`, background: `${project.color}10` }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-xl text-white mb-2 group-hover:transition-colors duration-200"
                style={{ '--hover': project.color } as any}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-white/5">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-1 justify-center py-2.5 rounded-xl font-body text-sm font-medium text-white transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                    border: `1px solid ${project.color}30`,
                  }}
                  whileHover={{
                    backgroundColor: `${project.color}30`,
                    boxShadow: `0 0 20px ${project.color}30`,
                  }}
                >
                  <FiExternalLink size={14} style={{ color: project.color }} />
                  Live Demo
                </motion.a>
              </div>
            </div>

            {/* Hover gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
            />
          </motion.div>
        ))}
      </div>

      {/* GitHub CTA */}
      <RevealOnScroll delay={0.4} className="mt-12 text-center">
        <motion.a
          href="https://github.com/nrnnaveen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass-card font-body font-medium text-slate-200 hover:text-white border-white/10 hover:border-cyan-400/30 transition-all"
          whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,212,255,0.15)' }}
        >
          <FiGithub size={20} className="text-cyan-400" />
          View All Projects on GitHub
          <span className="text-cyan-400">→</span>
        </motion.a>
      </RevealOnScroll>
    </div>
  )
}
