import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter, Playfair_Display, Caveat } from 'next/font/google'
import './globals.css'

// Google fonts per spec
const interFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '400', '500', '600', '700', '800', '900'],
});

const playfairFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

const caveatFont = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'AKARSA',
  description: 'We Don\'t Just Create — We Redefine. Premium digital agency specializing in design, development, and strategy.',
  generator: 'v0.app',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0C' },
    { media: '(prefers-color-scheme: light)', color: '#0A0A0C' },
  ],
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en"
      className={`${interFont.variable} ${playfairFont.variable} ${caveatFont.variable}`}
    >
      <body className="font-sans antialiased bg-bg-primary text-text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
