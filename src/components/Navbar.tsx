import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-around p-4">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
