import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
export const metadata: Metadata = {
  title: 'Manny Ventura | Fullstack Engineer',
  description: 'My updated Portfolio. Python & Cloud-focused developer.',
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">{children}</main>
      </body>
    </html>
  )
}
