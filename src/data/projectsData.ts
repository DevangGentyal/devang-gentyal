import { ReactNode } from 'react';

interface Project {
  title: string;
  description: string;
  icon: ReactNode;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

export const projectsData: Project[] = [
  {
    title: 'Aanya – Dynamic Multimodal AI',
    description: 'AI Agent built with Flutter, Gemini, Supabase',
    icon: '🧠',
    technologies: ['Flutter', 'AI', 'Gemini', 'Supabase'],
    githubLink: 'https://github.com',
    liveLink: 'https://aanya-ai.example.com'
  },
  {
    title: 'Toxic Comment Detection for Hinglish',
    description: 'Built with Python, Machine Learning, Data Science',
    icon: '☣️',
    technologies: ['Python', 'ML', 'NLP', 'Data Science'],
    githubLink: 'https://github.com'
  },
  {
    title: 'NexRise – AI Personal Branding Assistant',
    description: 'Stack: Next.js, Tailwind CSS, Prisma, MySQL, Scraping',
    icon: '🚀',
    technologies: ['Next.js', 'Tailwind CSS', 'AI', 'MySQL'],
    githubLink: 'https://github.com',
    liveLink: 'https://nexrise.example.com'
  }
];