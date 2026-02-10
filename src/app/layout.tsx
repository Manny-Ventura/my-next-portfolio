import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Manny Ventura - Full-Stack Developer',
  description: 'Backend-leaning full-stack developer building Python, data, and cloud systems.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-[var(--surface)]">
          <Navbar />
        </header>

        <main className="mx-auto max-w-7xl space-y-24 px-6 py-12">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
