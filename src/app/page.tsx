import Image from 'next/image'
import Hero from '@/components/Hero'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const featuredProjects = projects.filter((projects) => projects.featured)
  return (
    <>
      <section className="flex flex-col items-center space-y-16">
        <h1 className="text-center text-3xl font-bold">Manny Ventura - Full-stack Web Developer</h1>
        <p className="text-lg">
          I build responsive, accessible web applications with modern technologies.
        </p>
        <p className="text-center text-lg">
          I am a Software Engineer and full-stack web developer. I have architectured and created
          production-level applications in various programming languages.
        </p>
      </section>

      <section className="flex flex-col items-center space-y-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center space-y-16">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-lg">
          I'm a passionate full-stack web developer with experience in building modern web
          applications using React, Next.js, and TypeScript.
        </p>
      </section>
    </>
  )
}
