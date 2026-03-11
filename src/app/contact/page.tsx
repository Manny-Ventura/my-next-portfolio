import { Mail, Linkedin, Github } from 'lucide-react'

export default function Page() {
  return (
    <div className="text-center">
      <h1>Contact Me!</h1>
      <section className="items-left mx-auto flex w-fit flex-col gap-5 space-y-6 py-15 text-center">
        <a
          className="ml-[8%] flex w-auto items-center gap-3"
          href="mailto:mannyventura9@yahoo.com"
          rel="noreferrer"
        >
          <Mail /> <span className="font-bold">Email</span>
        </a>
        <a
          className="ml-[8%] flex w-auto items-center gap-3"
          href="https://github.com/Manny-Ventura"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
          <span className="font-bold">GitHub</span>
        </a>
        <a
          className="ml-[8%] flex w-auto items-center gap-3"
          href="https://www.linkedin.com/in/manny-ventura-048573169/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin /> <span className="font-bold"> LinkedIn</span>
        </a>
      </section>
    </div>
  )
}
