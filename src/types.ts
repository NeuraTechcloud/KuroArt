export interface CourseModule {
  number: string;
  title: string;
  description: string;
  lessonsCount: number;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  badge?: string;
  level: string;
  duration: string;
  lessonsTotal: number;
  price: number;
  originalPrice: number;
  installments: string;
  image: string;
  highlights: string[];
  targetAudience: string;
  defaultHotmartLink: string;
  modules: CourseModule[];
  bonuses: string[];
}

export interface HotmartConfig {
  links: Record<string, string>;
  globalAffiliateCode: string;
  instagramUrl: string;
  supportEmail: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'lineart' | 'painting' | 'character' | 'concept';
  image: string;
  software: string;
  description: string;
  tags: string[];
}

export interface StudentEvolution {
  id: string;
  name: string;
  achievement: string;
  monthsInCourse: string;
  beforeStory: string;
  afterStory: string;
  quote: string;
  keySkillsGained: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
