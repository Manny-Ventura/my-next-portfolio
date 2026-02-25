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
    description: `Microsoft 365 optimization application that breaks down your licensing, usage, and security posture as well as optimized cost and recommendations. 
    Application was used to land a client resulting in 200k yearly contract.`,
    stack: [
      'Python',
      'HTMX',
      'FastAPI',
      'Flask',
      'Github',
      'GitHubActions',
      'Azure',
      'NoSQL',
      'Docker',
      'Javascript',
      'ChartJS',
      'Celery',
      'Redis',
      'Flower',
    ],
    liveUrl: 'https://tenantdetective.plow.net/',
    featured: true,
  },

  {
    slug: 'ava-ai',
    title: 'Ava AI',
    description: `GPT-communicating AI Ticketing Assistant designed to automatically handle Autotask Ticket Routing when receiving Cloud Service incident report from Customers of a Cloud Service Provider.
                  Led interface creation and aided in architecturing and building for visualizing ticket routing logic, flagging incorrect assignments, tracking agent performance, and employee skill rating based on ticket history.`,
    stack: [
      'FastAPI',
      'HTMX',
      'ChartJS',
      'NoSQL',
      'Microsoft Teams API',
      'Azure',
      'DevOps',
      'Github Actions',
    ],
    featured: true,
  },
]
