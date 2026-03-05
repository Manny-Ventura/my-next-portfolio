import Image from 'next/image'
import Hero from '@/components/Hero'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const featuredProjects = projects.filter((projects) => projects.featured)
  return (
    <>
      <section className="flex flex-col items-center space-y-16">
        <h1 className="text-center text-3xl font-bold">
          Manny Ventura - Software Engineer | Web Developer
        </h1>
        <p className="text-lg">
          I build responsive, accessible web applications with modern technologies.
        </p>
        <p className="text-center text-lg">
          I am a Software Engineer and full-stack web developer. I have architectured, created, and
          deployed production-level applications.
        </p>
      </section>

      <section className="flex flex-col items-center space-y-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid-flow-col">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center space-y-16">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-lg">
          I'm a passionate full-stack web developer with experience in building modern web
          applications using Python, HTMX, React, Next.js, and TypeScript. Feel free to learn more{' '}
          <a href="/about">about me.</a>
        </p>
      </section>
    </>
  )
}
