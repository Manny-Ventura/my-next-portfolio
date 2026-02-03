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
    Managed CI/CD and aided in Containerization setup to two seperate Environments for the Project.
    Interface was used to land a client resulting in 200k yearly contract.`,
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
    ],
    liveUrl: 'https://tenantdetective.plow.net/',
    featured: true,
  },

  {
    slug: 'ava-ai',
    title: 'Ava AI',
    description: `AI Ticketing Assistant and Internal Analytics Tool.
                  GPT-communicating Agent designed to automatically handle Autotask Ticket Routing when receiving Cloud Service incident report from Customers of a Cloud Service Provider.
                  Led interface creation and aided in architecturing and building for visualizing ticket routing logic, flagging incorrect assignments, and tracking agent performance.
                  Developed UI for displaying user availability in real-time based on Teams scheduling data.
                  Designed dashboard using Chart.js to display skill ratings based on ticket history, integrated with backend app and CosmosDB.`,
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
