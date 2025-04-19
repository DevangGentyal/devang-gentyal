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
    technologies: ['Flutter', 'Gemini', 'Supabase'],
    githubLink: 'https://github.com/DevangGentyal/aanya',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  },
  {
    title: 'Toxic Comment Detection for Hinglish Language',
    description: 'Built with Python, Machine Learning, Data Science, Java',
    icon: '☣️',
    technologies: ['Python', 'Machine Learning', 'Data Science', 'Java'],
    githubLink: 'https://github.com/DevangGentyal/toxic-comment-detection',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  },
  {
    title: 'Women and Child Safety App',
    description: 'Stack: Flutter, Dart, OpenStreetMaps, Firebase',
    icon: '🛡️',
    technologies: ['Flutter', 'Dart', 'OpenStreetMaps', 'Firebase'],
    githubLink: 'https://github.com/DevangGentyal/women-safety',
    liveLink: 'https://safetyapp.example.com'
  },
  {
    title: 'Fashion Trend Predictor',
    description: 'Stack: Python, Flask, React, JS, ML, DS',
    icon: '👗',
    technologies: ['Python', 'Flask', 'React', 'JavaScript', 'ML', 'DS'],
    githubLink: 'https://github.com/DevangGentyal/fashion-trend',
    liveLink: 'https://fashionpredictor.example.com'
  },
  {
    title: 'MetaStore Viewer for Lakehouse Data',
    description: 'Stack: AWS, Lakehouse, NextJS, Tailwind CSS, Prisma, MySQL',
    icon: '📊',
    technologies: ['AWS', 'Lakehouse', 'NextJS', 'Tailwind CSS', 'Prisma', 'MySQL'],
    githubLink: 'https://github.com/rugvedi20/metastore-viewer',
    liveLink: 'https://metastore.example.com'
  },
  {
    title: 'SnapMeal – Advanced Calorie Tracker & Meal Planner',
    description: 'Stack: Flutter, Firebase, Gemini Vision, Lallma',
    icon: '🍔',
    technologies: ['Flutter', 'Firebase', 'Gemini Vision', 'Lallma'],
    githubLink: 'https://github.com/DevangGentyal/snap_meal',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  },
  {
    title: 'Team and Projects Management App',
    description: 'Stack: Python, Machine Learning, Data Science',
    icon: '📁',
    technologies: ['Python', 'Machine Learning', 'Data Science'],
    githubLink: 'https://github.com/DevangGentyal/project-hub',
    liveLink: 'https://youtu.be/0iZPshAPWwc'
  },
  {
    title: 'PictoPair – A Memory Game',
    description: 'Built with Java Swing UI framework',
    icon: '🧩',
    technologies: ['Java', 'Swing'],
    githubLink: 'https://github.com/Mayuresh-22/PictoPair',
    liveLink: 'https://darshangentyal02.wixsite.com/pictopair-memorygame'
  },
  {
    title: 'NexRise – AI Personal Branding Assistant',
    description: 'Stack: NextJS, Tailwind CSS, Prisma, MySQL, Scraping',
    icon: '🚀',
    technologies: ['NextJS', 'Tailwind CSS', 'Prisma', 'MySQL', 'Scraping'],
    githubLink: 'https://github.com/DevangGentyal/nexrise',
    liveLink: 'https://nexrise.example.com'
  },

  
];
