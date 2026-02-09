export interface PersonalProject {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    slug: 'breviolink',
    icon: '🔗',
    title: 'BrevioLink',
    summary: 'URL shortener & bio pages with analytics, auth, and Stripe subscriptions.',
    description:
      'A full-featured SaaS application offering URL shortening and customizable bio pages ("link in bio"). Includes real-time click analytics, user authentication with email verification, and Stripe-powered Pro subscriptions. Built from scratch as a personal project to showcase modern frontend and backend-as-a-service patterns.',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Supabase', 'Stripe', 'SCSS', 'Vercel'],
    highlights: [
      'Complete auth flow: signup, email verification, password recovery',
      'URL shortening with click analytics (browser, country, referrer)',
      'Bio Pages with themes (light/dark) and unlimited links',
      'Stripe integration for Pro tier ($9/month)',
      'Row Level Security (RLS) for data protection'
    ],
    image: '/images/projects/breviolink.png',
    liveUrl: 'https://brevio.ink',
    repoUrl: ''
  },
  {
    slug: 'headless-ecommerce-storefront',
    icon: '🛍️',
    title: 'Headless E‑Commerce Storefront',
    summary: 'Fast storefront with product catalog, cart, and Stripe checkout.',
    description:
      'A modern storefront showcasing SSR, caching, and a delightful cart experience. Product data is fetched from a headless source (Stripe products or a lightweight CMS). Emphasis on accessibility, performance budgets, and testing.',
    technologies: ['Nuxt 3', 'TypeScript', 'Pinia', 'Stripe', 'SCSS', 'Vitest'],
    highlights: [
      'SSR product listing and detail pages',
      'Cart with persistence and edge-case handling',
      'Checkout integration with Stripe',
      'Lighthouse-friendly performance and a11y checks'
    ],
    image: '/images/projects/ecommerce.png',
    liveUrl: '',
    repoUrl: ''
  },
  {
    slug: 'image-provenance-verifier',
    icon: '🖼️',
    title: 'Image Provenance Verifier',
    summary: 'Practical demo to inspect EXIF, hashes, and simple tamper signals.',
    description:
      'A learning project to explore image integrity. Extracts EXIF metadata, computes perceptual hashes client-side, and highlights potential changes between versions. Presents a clean, educational UI for non-technical users.',
    technologies: ['Nuxt 3', 'TypeScript', 'Web APIs', 'SCSS'],
    highlights: [
      'EXIF/metadata inspection with clear UX',
      'Perceptual hash comparison (pHash-like) concept',
      'Side-by-side diff preview and reporting',
      'Shareable verification reports'
    ],
    image: '/images/projects/image-verifier.png',
    liveUrl: '',
    repoUrl: ''
  },
  {
    slug: 'learning-hub-quizzes-progress',
    icon: '🎓',
    title: 'Learning Hub – Quizzes & Progress',
    summary: 'Mini‑LMS with modules, quizzes, progress tracking, and admin authoring.',
    description:
      'A focused education hub that turns unstructured content into a composable learning experience. Modules, lessons, quizzes, and progress tracking—plus a small admin area for content authoring. Great to showcase state management and UX for forms.',
    technologies: ['Nuxt 3', 'TypeScript', 'Pinia', 'SCSS', 'Form UX'],
    highlights: [
      'Module/lesson structure with completion states',
      'Quiz engine (single/multi-choice) with scoring',
      'Admin authoring screens with validation',
      'Persisted progress and friendly empty/error states'
    ],
    image: '/images/projects/learning-hub.png',
    liveUrl: '',
    repoUrl: ''
  }
];
