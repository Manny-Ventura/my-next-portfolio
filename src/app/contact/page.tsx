import { Mail, Linkedin, Github } from 'lucide-react'

type ContactItemProps = {}

export default function Page() {
  return (
    <>
      <h1>Contact Me!</h1>
      <section className="grid grid-rows-2 gap-4">
        <div className="flex">
          <span className="mr-2 font-bold">Email:</span>
          <a href="mailto:mannyventura9@yahoo.com, mventuraprogramming@gmail.com"></a>
        </div>
      </section>
    </>
  )
}
