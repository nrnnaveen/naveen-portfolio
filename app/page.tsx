'use client'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import ParticlesBg from './components/ParticlesBg'
import FloatingContact from './components/FloatingContact'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import GitHubStats from './sections/GitHubStats'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ParticlesBg />
      <div className="noise-overlay" />
      
      {/* Ambient Orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: 'var(--neon-blue)', top: '-100px', right: '-100px' }} />
      <div className="orb" style={{ width: 500, height: 500, background: 'var(--neon-purple)', bottom: '20%', left: '-150px', animationDelay: '2s' }} />
      <div className="orb" style={{ width: 400, height: 400, background: 'var(--neon-pink)', top: '60%', right: '10%', animationDelay: '4s', opacity: 0.08 }} />

      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="achievements"><Achievements /></section>
          <section id="github"><GitHubStats /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>

      <FloatingContact />
    </>
  )
}
