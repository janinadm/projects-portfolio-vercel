export interface PersonalProject {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string;
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    slug: 'breviolink',
    icon: '🔗',
    title: 'projects.breviolink.title',
    summary: 'projects.breviolink.summary',
    description: 'projects.breviolink.description',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Supabase', 'Stripe', 'SCSS', 'Vercel'],
    highlights: 'projects.breviolink.highlights' as any,
    image: '/images/projects/breviolink.png',
    liveUrl: 'https://brevio.ink',
    repoUrl: ''
  },
  {
    slug: 'headless-ecommerce-storefront',
    icon: '🛍️',
    title: 'projects.ecommerce.title',
    summary: 'projects.ecommerce.summary',
    description: 'projects.ecommerce.description',
    technologies: ['Nuxt 3', 'TypeScript', 'Pinia', 'Stripe', 'SCSS', 'Vitest'],
    highlights: 'projects.ecommerce.highlights' as any,
    image: '/images/projects/ecommerce.png',
    liveUrl: '',
    repoUrl: ''
  },
  {
    slug: 'image-provenance-verifier',
    icon: '🖼️',
    title: 'projects.verifier.title',
    summary: 'projects.verifier.summary',
    description: 'projects.verifier.description',
    technologies: ['Nuxt 3', 'TypeScript', 'Web APIs', 'SCSS'],
    highlights: 'projects.verifier.highlights' as any,
    image: '/images/projects/image-verifier.png',
    liveUrl: '',
    repoUrl: ''
  },
  {
    slug: 'learning-hub-quizzes-progress',
    icon: '🎓',
    title: 'projects.learning.title',
    summary: 'projects.learning.summary',
    description: 'projects.learning.description',
    technologies: ['Nuxt 3', 'TypeScript', 'Pinia', 'SCSS', 'Form UX'],
    highlights: 'projects.learning.highlights' as any,
    image: '/images/projects/learning-hub.png',
    liveUrl: '',
    repoUrl: ''
  }
];
