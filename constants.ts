import { Project, Skill, SocialLink, Experience } from './types';

export const PORTFOLIO_OWNER = "Alex Dev";
export const HERO_TITLE = "Building Digital Experiences";
export const HERO_SUBTITLE = "Senior Frontend Engineer specializing in React, TypeScript, and Generative AI integrations.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers.',
    longDescription: 'This project provides real-time insights into sales performance, inventory levels, and customer demographics. Built with performance in mind using React and D3.js for visualizations.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'D3.js', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    repoUrl: 'https://github.com/alexdev/dashboard',
    liveUrl: 'https://dashboard-demo.vercel.app',
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'Generative AI tool for creating blog posts and social media captions.',
    longDescription: 'Leverages the Gemini API to assist content creators. Features include tone adjustment, length control, and multi-language support.',
    technologies: ['React', 'Gemini API', 'Express', 'MongoDB'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    repoUrl: 'https://github.com/alexdev/ai-gen',
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'HealthTrack Mobile App',
    description: 'Cross-platform fitness tracking application.',
    longDescription: 'Allows users to track workouts, monitor nutrition, and visualize progress over time. Offline-first architecture.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    repoUrl: 'https://github.com/alexdev/healthtrack',
    liveUrl: 'https://healthtrack.app'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'GraphQL', level: 75, category: 'Backend' },
  { name: 'Gemini API', level: 85, category: 'AI/ML' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Docker', level: 70, category: 'Tools' },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "TechNova Solutions",
    role: "Senior Frontend Engineer",
    period: "2021 - Present",
    description: "Leading the frontend team in rebuilding the core legacy application using Next.js and React Server Components."
  },
  {
    company: "Creative Studio",
    role: "Full Stack Developer",
    period: "2018 - 2021",
    description: "Developed and maintained multiple client websites and e-commerce platforms using the MERN stack."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];