import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <div className="flex justify-around">
      <div className="text-[var(--text-secondary)]">Manny Ventura © 2026</div>
      <div className="flex">
        <a
          href="https://github.com/Manny-Ventura"
          target="_blank"
          className="px-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/manny-ventura-048573169/"
          target="_blank"
          className="px-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  )
}
