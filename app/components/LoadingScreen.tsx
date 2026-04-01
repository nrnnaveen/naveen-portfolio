'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = ['Initializing...', 'Loading Assets...', 'Rendering World...', 'Welcome']

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + Math.random() * 4 + 1
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress > 25 && phase === 0) setPhase(1)
    if (progress > 60 && phase === 1) setPhase(2)
    if (progress > 90 && phase === 2) setPhase(3)
  }, [progress, phase])

  return (
    <div className="loading-screen grid-pattern">
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-scan absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      </div>

      <motion.div
        className="flex flex-col items-center gap-8 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo / Monogram */}
        <div className="relative">
          <motion.div
            className="w-24 h-24 rounded-2xl border-2 border-cyan-400/30 flex items-center justify-center relative overflow-hidden"
            animate={{ boxShadow: ['0 0 20px rgba(0,212,255,0.2)', '0 0 60px rgba(0,212,255,0.6)', '0 0 20px rgba(0,212,255,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10" />
            <span className="font-display text-4xl font-black gradient-text relative z-10">N</span>
          </motion.div>
          {/* Rotating ring */}
          <motion.div
            className="absolute -inset-3 rounded-[20px] border border-dashed border-cyan-400/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -inset-6 rounded-[28px] border border-dashed border-purple-500/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Name */}
        <div className="text-center">
          <motion.h1
            className="font-display text-3xl font-black text-white tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            NAVEEN M
          </motion.h1>
          <motion.p
            className="font-mono text-xs text-cyan-400 mt-1 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Aspiring Data Engineer
          </motion.p>
        </div>

        {/* Progress bar */}
        <div className="w-72">
          <div className="flex justify-between mb-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={phase}
                className="font-mono text-xs text-slate-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                {phases[phase]}
              </motion.span>
            </AnimatePresence>
            <span className="font-mono text-xs text-cyan-400">{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="h-[2px] bg-dark-600 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #7c3aed, #f72585)',
                boxShadow: '0 0 10px rgba(0,212,255,0.6)',
              }}
              animate={{ width: `${Math.min(100, progress)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          {/* Binary decoration */}
          <div className="mt-3 flex gap-1 justify-center flex-wrap opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.span
                key={i}
                className="font-mono text-[8px] text-cyan-400"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
