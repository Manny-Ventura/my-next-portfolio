import Image from "next/image"
import Hero from "@/components/Hero"
import { projects } from "@/data/projects"

export default function Home() {
  const featuredProjects = projects.filter((projects) => projects.featured);
  
  return (
    <section className="space-y-16">
      <Hero />

      <h1 className="text-3xl font-bold">
        Manny Ventura - Full-stack Web Developer
      </h1>
  );
}
