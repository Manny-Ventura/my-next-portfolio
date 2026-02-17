import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Manny Ventura - Software Engineer',
  description: 'Backend-leaning full-stack developer building Python, data, and cloud systems.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <header className="bg-[var(--surface)]">
          <Navbar />
        </header>

        <main className="mx-auto max-w-7xl grow space-y-24 px-6 py-12">{children}</main>

        <footer className="h-full bg-[var(--surface)] p-10 text-center">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
