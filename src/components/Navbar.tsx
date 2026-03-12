'use client'

import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function toggleMenu() {
    setOpen(!open)
  }

  return (
    <div className="flex flex-grow items-center justify-around px-5 py-5">
      <nav className="w-full">
        <div className="flex w-full justify-around">
          <div className="px-auto hidden md:flex">
            <h3>Manny Ventura</h3>
          </div>
          <Link
            href="/"
            className="duration:150 hidden border-b-2 border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)] md:flex"
          >
            Home
          </Link>
          <Link
            className="duration:150 hidden border-b-2 border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)] md:flex"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="duration:150 hidden border-b-2 border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)] md:flex"
            href="/about"
          >
            About
          </Link>
          <Link
            className="duration:150 hidden border-b-2 border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)] md:flex"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-between md:hidden">
          <h1 className="p-3">Manny Ventura</h1>
          <button className="justify-self-end md:hidden" onClick={toggleMenu}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="flex flex-col items-center">
            <a
              className="duration:150 w-full border-2 border-[var(--border)] border-transparent bg-[var(--surface)] p-2 text-center transition-colors hover:bg-[var(--bg)]"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="duration:150 w-full border-2 border-[var(--border)] border-transparent bg-[var(--surface)] p-2 text-center transition-colors hover:bg-[var(--bg)]"
              href="/about"
            >
              About
            </a>
            <a
              className="duration:150 w-full border-2 border-[var(--border)] border-transparent bg-[var(--surface)] p-2 text-center transition-colors hover:bg-[var(--bg)]"
              href="/contact"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}
