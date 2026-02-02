import Image from 'next/image'

export type Project = {
  slug: string
  title: string
  description: string
  stack: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A personal portfolio website to showcase my projects and skills as a full-stack developer.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    slug: 'tenant-detective',
    title: 'Tenant Detective™',
    description: `Microsoft 365 optimization application that breaks down your licensing, usage, and security posture. 
    Lead Frontend and Assistant Lead on Backend Design. 
    Managed CI/CD and aided in Containerization setup to two seperate Environments for the Project.`,
    stack: [
      'Python',
      'HTMX',
      'FastAPI',
      'Flask',
      'GitHubActions',
      'Azure',
      'NoSQL',
      'Docker',
      'JS',
      'ChartJS',
    ],
    liveUrl: 'https://tenantdetective.plow.net/',
    featured: true,
  },
]
