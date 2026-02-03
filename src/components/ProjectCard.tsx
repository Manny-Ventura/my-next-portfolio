import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="space-y-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h3 className="text-center text-lg font-semibold">{project.title}</h3>
      <p className="text-[var(--text-secondary)]">{project.description}</p>
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          See in Github
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          View Live Site
        </a>
      )}
    </article>
  )
}
