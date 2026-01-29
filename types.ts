export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  repoUrl: string;
  liveUrl?: string;
  downloadUrl?: string; // For downloadable assets
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI/ML';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}