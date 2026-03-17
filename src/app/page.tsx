import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const featuredProjects = projects.filter((projects) => projects.featured)

  return (
    <>
      <section className="flex flex-col items-center space-y-16 text-center">
        <h1 className="text-center text-3xl font-bold">
          Manny Ventura - Software Engineer | Web Developer
        </h1>
        <p className="text-center text-lg">
          I am a Software Engineer and full-stack web developer. I have architectured, created, and
          deployed production-level applications.
        </p>
        <p className="text-lg">
          I build responsive, accessible web applications with modern technologies.
        </p>
      </section>

      <section className="flex flex-col items-center space-y-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid grid-flow-row gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center space-y-16">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-lg">
          I'm a passionate full-stack web developer with experience in building modern web
          applications using Python, HTMX, React, Next.js, and TypeScript.
        </p>
        <a
          className="duration:150 space-y-2 rounded-md border border-[var(--border)] bg-[var(--surface)] p-2 transition-colors hover:bg-[var(--bg)]"
          href="/about"
        >
          Learn more about me.
        </a>
      </section>
    </>
  )
}
