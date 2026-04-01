import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Naveen M | Aspiring Data Engineer',
  description: 'Portfolio of Naveen M — Aspiring Data Engineer & AI Enthusiast pursuing B.Tech in Artificial Intelligence and Data Science at Stella Mary\'s College of Engineering.',
  keywords: ['Naveen M', 'Data Engineer', 'AI', 'Data Science', 'Python', 'SQL', 'Portfolio', 'Machine Learning'],
  authors: [{ name: 'Naveen M' }],
  creator: 'Naveen M',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://naveen-portfolio.vercel.app',
    title: 'Naveen M | Aspiring Data Engineer',
    description: 'Portfolio of Naveen M — Aspiring Data Engineer & AI Enthusiast',
    siteName: 'Naveen M Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Naveen M Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naveen M | Aspiring Data Engineer',
    description: 'Portfolio of Naveen M — Aspiring Data Engineer & AI Enthusiast',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#020408',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-900 text-slate-200 antialiased">
        {children}
      </body>
    </html>
  )
}
