/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        neon: {
          blue: '#00d4ff',
          purple: '#7c3aed',
          pink: '#f72585',
          cyan: '#00f5d4',
        },
        dark: {
          900: '#020408',
          800: '#050d15',
          700: '#0a1628',
          600: '#0f1f38',
          500: '#162540',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s ease infinite',
        'border-dance': 'border-dance 4s linear infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { 'box-shadow': '0 0 60px rgba(0,212,255,0.8), 0 0 100px rgba(124,58,237,0.4)' },
        },
        'text-shimmer': {
          '0%': { 'background-position': '-200% center' },
          '100%': { 'background-position': '200% center' },
        },
        'border-dance': {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '400% 0%' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundSize: {
        '400%': '400%',
        '200%': '200%',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)',
        'neon-purple': '0 0 20px rgba(124,58,237,0.5), 0 0 40px rgba(124,58,237,0.2)',
        'neon-pink': '0 0 20px rgba(247,37,133,0.5), 0 0 40px rgba(247,37,133,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}
