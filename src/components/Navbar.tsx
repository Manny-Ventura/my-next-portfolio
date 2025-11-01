import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  )
}
