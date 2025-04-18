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
    title: 'Aanya – Dynamic Multimodal AI (Completed)',
    description: 'AI Agent built with Flutter, Gemini, Supabase',
    icon: '🧠',
    technologies: ['Flutter', 'Gemini', 'Supabase'],
    githubLink: 'https://github.com/DevangGentyal/aanya',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  },
  {
    title: 'Toxic Comment Detection for Hinglish Language (Completed)',
    description: 'Built with Python, Machine Learning, Data Science, Java',
    icon: '☣️',
    technologies: ['Python', 'Machine Learning', 'Data Science', 'Java'],
    githubLink: 'https://github.com/DevangGentyal/toxic-comment-detection',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  },
  {
    title: 'PictoPair – A Memory Game (Completed)',
    description: 'Built with Java Swing UI framework',
    icon: '🧩',
    technologies: ['Java', 'Swing'],
    githubLink: 'https://github.com/DevangGentyal',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  },
  {
    title: 'NexRise – AI Personal Branding Assistant (Pending)',
    description: 'Stack: NextJS, Tailwind CSS, Prisma, MySQL, Scraping',
    icon: '🚀',
    technologies: ['NextJS', 'Tailwind CSS', 'Prisma', 'MySQL', 'Scraping'],
    githubLink: 'https://github.com/DevangGentyal/nexrise',
    liveLink: 'https://nexrise.example.com'
  },
  {
    title: 'SnapMeal – Advanced Calorie Tracker & Meal Planner (Pending)',
    description: 'Stack: Flutter, Firebase, Gemini Vision, Lallma',
    icon: '🍔',
    technologies: ['Flutter', 'Firebase', 'Gemini Vision', 'Lallma'],
    githubLink: 'https://github.com/DevangGentyal',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  },
  {
    title: 'ToolGenie – AI Powered Tool/App Finder (Pending)',
    description: 'Stack: NextJS, Tailwind CSS, Prisma, MySQL, Scraping',
    icon: '🤖',
    technologies: ['NextJS', 'Tailwind CSS', 'Prisma', 'MySQL', 'Scraping'],
    githubLink: 'https://github.com/DevangGentyal',
    liveLink: 'https://toolgenie.example.com'
  },
  {
    title: 'MetaStore Viewer for Lakehouse Data (Partial)',
    description: 'Stack: AWS, Lakehouse, NextJS, Tailwind CSS, Prisma, MySQL',
    icon: '📊',
    technologies: ['AWS', 'Lakehouse', 'NextJS', 'Tailwind CSS', 'Prisma', 'MySQL'],
    githubLink: 'https://github.com/DevangGentyal',
    liveLink: 'https://metastore.example.com'
  },
  {
    title: 'Women and Child Safety App (Partial)',
    description: 'Stack: Flutter, Dart, OpenStreetMaps, Firebase',
    icon: '🛡️',
    technologies: ['Flutter', 'Dart', 'OpenStreetMaps', 'Firebase'],
    githubLink: 'https://github.com/DevangGentyal',
    liveLink: 'https://safetyapp.example.com'
  },
  {
    title: 'Fashion Trend Predictor (Partial)',
    description: 'Stack: Python, Flask, React, JS, ML, DS',
    icon: '👗',
    technologies: ['Python', 'Flask', 'React', 'JavaScript', 'ML', 'DS'],
    githubLink: 'https://github.com/DevangGentyal',
    liveLink: 'https://fashionpredictor.example.com'
  },
  {
    title: 'Team and Projects Management App (Partial)',
    description: 'Stack: Python, Machine Learning, Data Science',
    icon: '📁',
    technologies: ['Python', 'Machine Learning', 'Data Science'],
    githubLink: 'https://github.com/DevangGentyal',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  }
];
