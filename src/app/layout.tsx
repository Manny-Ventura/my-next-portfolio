import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Manny Ventura - Full-Stack Developer',
  description: 'Backend-leaning full-stack developer building Python, data, and cloud systems.',
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <header>
          <Navbar />
        </header>

        <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">{children}</main>
        
        <footer>
          <Footer />
        </footer> 
      </body>
    </html>
  )
}
