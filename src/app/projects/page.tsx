import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Page() {
  return (
    <>
      <h1 className="text-center text-lg">Projects</h1>

      <section className="grid grid-flow-col grid-rows-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </>
  )
}
