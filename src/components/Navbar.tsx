import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-around p-4">
      <div>
        <h3>Manny Ventura</h3>
      </div>
      <Link
        href="/"
        className="duration:150 border-b-2 border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
      >
        Home
      </Link>
      <Link
        className="duration:150 border-b-2 border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className="duration:150 border-b-2 border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
        href="/about"
      >
        About
      </Link>
      <Link
        className="duration:150 border-b-2 border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  )
}
