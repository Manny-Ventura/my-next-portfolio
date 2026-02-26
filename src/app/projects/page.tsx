import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Page() {
  return (
    <>
      <h1 className="text-center text-lg">Projects</h1>

      <section className="grid-flow-column grid gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </>
  )
}
