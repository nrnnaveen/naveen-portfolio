'use client'
import { useEffect, useRef } from 'react'

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; color: string

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        const colors = ['#00d4ff', '#7c3aed', '#00f5d4', '#f72585']
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
      }

      draw() {
        ctx!.save()
        ctx!.globalAlpha = this.opacity
        ctx!.fillStyle = this.color
        ctx!.shadowBlur = 6
        ctx!.shadowColor = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.restore()
      }
    }

    // Initialize particles
    for (let i = 0; i < 80; i++) particles.push(new Particle())

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 120) * 0.1
            ctx.strokeStyle = '#00d4ff'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      connectParticles()
      animId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
