# 🚀 Naveen M — Portfolio Website

A world-class, production-ready personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- 🌙 Dark theme with neon blue/purple gradients
- 🎆 Animated particle background
- 🖱️ Custom glow cursor
- 📊 Scroll progress bar
- ⚡ Framer Motion page & section animations
- 🃏 Glassmorphism cards with hover effects
- 📱 Fully responsive — mobile-first
- 🔠 Typewriter hero animation
- 🐙 GitHub Stats API integration
- 📬 Floating contact modal
- 🔢 Animated skill bars
- 🏆 Achievements timeline
- 📄 Resume download button
- 🔍 Full SEO meta tags

---

## 🗂️ Project Structure

```
naveen-portfolio/
├── app/
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── FloatingContact.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticlesBg.tsx
│   │   ├── RevealOnScroll.tsx
│   │   └── ScrollProgress.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── GitHubStats.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── NAVEEN.pdf         ← Place your resume PDF here
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Add your resume

Place your resume PDF at:
```
public/NAVEEN.pdf
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Option B — Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repository
4. Click **Deploy** — done!

### Option C — One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## ⚙️ Customization

| File | What to change |
|------|---------------|
| `app/sections/Hero.tsx` | Name, title, bio, CTAs |
| `app/sections/About.tsx` | About text, college info |
| `app/sections/Skills.tsx` | Skill names, levels |
| `app/sections/Projects.tsx` | Project titles, links, descriptions |
| `app/sections/Achievements.tsx` | Awards, hackathons |
| `app/sections/GitHubStats.tsx` | GitHub username |
| `app/sections/Contact.tsx` | Contact details |
| `app/layout.tsx` | SEO metadata |
| `styles/globals.css` | Colors, fonts, CSS variables |

---

## 🎨 Color System

| Variable | Value | Usage |
|----------|-------|-------|
| `--neon-blue` | `#00d4ff` | Primary accent |
| `--neon-purple` | `#7c3aed` | Secondary accent |
| `--neon-pink` | `#f72585` | Tertiary accent |
| `--neon-cyan` | `#00f5d4` | Highlight |
| `--dark-900` | `#020408` | Background |

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Typewriter**: react-type-animation
- **Scroll detection**: react-intersection-observer
- **Language**: TypeScript

---

## 📬 Contact Form Setup

The contact form currently simulates a submission. To make it functional, integrate one of:

- **[Resend](https://resend.com)** — Modern email API
- **[EmailJS](https://emailjs.com)** — Client-side email
- **[Formspree](https://formspree.io)** — Form backend

---

## 📄 License

MIT © Naveen M — Free to use, customize, and deploy.
