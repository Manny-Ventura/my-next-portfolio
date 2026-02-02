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
        description: 'A personal portfolio website to showcase my projects and skills as a full-stack developer.',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com/yourusername/portfolio',
    },
    {
        slug: 'tenant-detective',
        title: 'Tenant Detective',
        description: 'Microsoft 365 optimization application that breaks down your licensing, usage, and security posture.',
        stack: ['Python', 'FastAPI', 'Flask', 'GitHubActions', 'Azure', 'NoSQL', 'Docker'],
        liveUrl: 'https://tenantdetective.plow.net/',
        featured: true,
    }
]