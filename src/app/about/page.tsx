export default function Page() {
  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <h1>About Me...</h1>
      <h2>Hello, my name is Manuel Ventura!</h2>
      <p className="md:w-md lg:w-lg">I am a Software Developer out of upstate South Carolina.
        I began my programming journey during COVID, and have continued building my skills since.
        I earned my Microcomputer Programming Certificate from my local college, then immediately went professional.
        I have since been hired as a Full-Stack Web Developer, leading front-end development for projects with a MSP.
        I have also worked with backend-design including API Development & Management, as well as automated deployment and configuration.
        I have professional experience with Python, React, HTMX, NoSQL, Javascript, and more. 
        I am always looking to expand my skillset and learn new technologies.
      </p>
  
      <a href="/contact" className="space-y-2 rounded-md border border-[var(--border)] bg-[var(--surface)] p-2 hover:bg-[var(--bg)] transition-colors duration:150">Get in Contact</a>

    </div>
  )
}
