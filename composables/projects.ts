export interface PersonalProject {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    slug: 'saas-starter-teams-billing',
    icon: '🧩',
    title: 'SaaS Starter – Teams & Billing',
    summary: 'Multi-tenant starter with auth, roles, team invites, and Stripe billing.',
    description:
      'A pragmatic SaaS starter that demonstrates real-world patterns: email/password auth, role-based access control (RBAC), team workspaces, invitations, settings, and Stripe subscriptions. Focused on clean UX, SSR performance, and robust state management.',
    technologies: ['Nuxt 3', 'TypeScript', 'Pinia', 'Stripe', 'Supabase/Auth', 'SCSS'],
    highlights: [
      'Role & permission model (owner/admin/member)',
      'Team invites via email and membership management',
      'Stripe checkout, webhooks-ready structure, and plan tiers',
      'Optimistic UI, error states, and accessibility'
    ],
    image: '/images/projects/saas-starter.png'
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
    image: '/images/projects/ecommerce.png'
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
    image: '/images/projects/image-verifier.png'
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
    image: '/images/projects/learning-hub.png'
  }
];
