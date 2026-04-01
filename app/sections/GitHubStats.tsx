'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import RevealOnScroll from '../components/RevealOnScroll'
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const GITHUB_USER = 'nrnnaveen'

const githubLinks = [
  {
    label: 'Profile',
    href: `https://github.com/${GITHUB_USER}`,
    icon: <FaGithub />,
    color: '#f0f6fc',
  },
]

export default function GitHubStats() {
  return (
    <div className="section-padding max-w-7xl mx-auto">
      <RevealOnScroll className="text-center mb-16">
        <span className="badge mb-4">OPEN SOURCE</span>
        <h2 className="section-title text-4xl md:text-5xl text-white mt-3">
          GitHub <span className="gradient-text">Activity</span>
        </h2>
        <p className="mt-4 font-body text-slate-400 max-w-lg mx-auto">
          Building in public. Every commit is a step forward.
        </p>
        <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </RevealOnScroll>

      {/* GitHub Username Card */}
      <RevealOnScroll delay={0.1} className="mb-10">
        <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center flex-shrink-0">
            <FaGithub size={36} className="text-white" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="font-mono text-xs text-slate-500 tracking-widest mb-1">GITHUB PROFILE</div>
            <div className="font-display font-bold text-2xl text-white">@{GITHUB_USER}</div>
            <div className="font-body text-sm text-slate-400 mt-1">Building AI tools & data projects</div>
          </div>
          <motion.a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-body text-sm font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all flex-shrink-0 flex items-center gap-2"
            whileHover={{ scale: 1.04 }}
          >
            <FaGithub size={16} />
            View Profile
          </motion.a>
        </div>
      </RevealOnScroll>

      {/* Stats Images from GitHub Readme Stats API */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <RevealOnScroll delay={0.15} direction="left">
          <motion.div
            className="glass-card p-4 overflow-hidden group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <HiCode className="text-cyan-400" />
              GitHub Stats
            </div>
            <div className="relative w-full" style={{ minHeight: 150 }}>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=transparent&hide_border=true&title_color=00d4ff&icon_color=7c3aed&text_color=94a3b8&bg_color=00000000`}
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} direction="right">
          <motion.div
            className="glass-card p-4 overflow-hidden group"
            whileHover={{ scale: 1.01 }}
          >
            <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              Top Languages
            </div>
            <div className="relative w-full" style={{ minHeight: 150 }}>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=transparent&hide_border=true&title_color=00d4ff&text_color=94a3b8&bg_color=00000000`}
                alt="Top Languages"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>

      {/* Streak Stats */}
      <RevealOnScroll delay={0.25} className="mb-6">
        <motion.div
          className="glass-card p-4 overflow-hidden"
          whileHover={{ scale: 1.005 }}
        >
          <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <FaCodeBranch className="text-purple-400" />
            Contribution Streak
          </div>
          <div className="flex justify-center">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USER}&theme=transparent&hide_border=true&ring=00d4ff&fire=f72585&currStreakLabel=00d4ff&sideLabels=94a3b8&dates=64748b&stroke=ffffff10`}
              alt="GitHub Streak"
              className="w-full max-w-2xl rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </RevealOnScroll>

      {/* CTA */}
      <RevealOnScroll delay={0.3} className="text-center mt-10">
        <motion.a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-body font-semibold text-white"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
            border: '1px solid rgba(0,212,255,0.25)',
          }}
          whileHover={{
            scale: 1.04,
            boxShadow: '0 0 40px rgba(0,212,255,0.2)',
          }}
        >
          <FaGithub size={20} />
          Follow on GitHub
          <span className="text-cyan-400">→</span>
        </motion.a>
      </RevealOnScroll>
    </div>
  )
}
