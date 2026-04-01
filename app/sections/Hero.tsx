'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown, HiDownload } from 'react-icons/hi'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center section-padding grid-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner accents */}
        <div className="absolute top-24 left-8 w-24 h-24 border-l-2 border-t-2 border-cyan-400/20 rounded-tl-2xl" />
        <div className="absolute top-24 right-8 w-24 h-24 border-r-2 border-t-2 border-purple-500/20 rounded-tr-2xl" />
        <div className="absolute bottom-12 left-8 w-24 h-24 border-l-2 border-b-2 border-cyan-400/20 rounded-bl-2xl" />
        <div className="absolute bottom-12 right-8 w-24 h-24 border-r-2 border-b-2 border-purple-500/20 rounded-br-2xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400 tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="font-mono text-slate-400 text-lg mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="font-display font-black text-6xl md:text-7xl lg:text-8xl text-white leading-none mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Naveen
            <span className="block gradient-text">M</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="font-display text-xl md:text-2xl text-slate-300 mb-6 h-9 flex items-center justify-center lg:justify-start gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-slate-500">→</span>
            <TypeAnimation
              sequence={[
                'Aspiring Data Engineer',
                2000,
                'AI & Data Science Enthusiast',
                2000,
                'Prompt Engineering Expert',
                2000,
                'Future Tech Entrepreneur',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="neon-text-blue font-semibold"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="font-body text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Pursuing B.Tech in AI & Data Science at Stella Mary's College of Engineering, Kanyakumari.
            Passionate about building{' '}
            <span className="text-cyan-400 font-medium">scalable data systems</span> and solving real-world problems with AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-xl font-body font-semibold text-white relative overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, #00d4ff20, #7c3aed20)', border: '1px solid rgba(0,212,255,0.4)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>

            <a
              href="/NAVEEN.pdf"
              download
              className="px-7 py-3.5 rounded-xl font-body font-semibold text-slate-200 border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              <HiDownload className="group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-5 mt-8 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: <FaGithub size={22} />, href: 'https://github.com/nrnnaveen', label: 'GitHub', color: 'hover:text-white' },
              { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/naveen-m-354887375', label: 'LinkedIn', color: 'hover:text-cyan-400' },
            ].map(item => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-500 ${item.color} transition-all duration-200 p-2 rounded-lg hover:bg-white/5`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
            <div className="h-6 w-px bg-white/10 self-center" />
            <span className="font-mono text-xs text-slate-500 self-center">Gobichettipalayam, India</span>
          </motion.div>
        </div>

        {/* Right: Visual element */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative">
            {/* Main card */}
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* Rotating rings */}
              <motion.div
                className="absolute -inset-6 rounded-full border border-dashed border-cyan-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full border border-dashed border-purple-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center content */}
              <div className="absolute inset-0 glass-card flex flex-col items-center justify-center gap-4 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: 'radial-gradient(circle at 50% 50%, #00d4ff, transparent 70%)' }}
                />
                {/* Avatar / Monogram */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-neon-blue">
                  <span className="font-display font-black text-5xl text-white">N</span>
                </div>
                <div className="text-center relative z-10">
                  <div className="font-display font-bold text-white text-lg">Naveen M</div>
                  <div className="font-mono text-xs text-cyan-400 tracking-wider mt-0.5">Data Engineer</div>
                </div>
                {/* Tech badges */}
                <div className="flex gap-2 flex-wrap justify-center px-4">
                  {['Python', 'SQL', 'AI', 'IoT'].map(tech => (
                    <span key={tech} className="badge text-[10px]">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -right-8 -top-4 glass-card px-3 py-2 text-center min-w-[80px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="stat-number text-xl">5+</div>
                <div className="font-mono text-[9px] text-slate-400">Projects</div>
              </motion.div>

              <motion.div
                className="absolute -left-10 -bottom-4 glass-card px-3 py-2 text-center min-w-[80px]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="stat-number text-xl">4+</div>
                <div className="font-mono text-[9px] text-slate-400">Hackathons</div>
              </motion.div>

              <motion.div
                className="absolute -left-6 top-6 glass-card px-3 py-2 text-center min-w-[76px]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="stat-number text-xl">AI</div>
                <div className="font-mono text-[9px] text-slate-400">Focused</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-mono text-xs text-slate-500 tracking-widest">SCROLL</span>
        <motion.div
          className="w-5 h-9 rounded-full border border-slate-600 flex justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-cyan-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
