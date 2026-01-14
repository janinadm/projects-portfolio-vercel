<template>
  <div class="projects-page">
    <div class="projects-hero">
      <h1>Projects</h1>
      <p>
        A selection of projects showcasing my skills with Vue 3, TypeScript, and modern web technologies.
      </p>
    </div>

    <div class="projects-grid">
      <div v-for="project in projectsList" :key="project.id" class="project-card">
        <div class="project-image-placeholder">
          {{ project.icon }}
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="problem">{{ project.problem }}</p>
          <p class="description">{{ project.description }}</p>
          
          <div class="technologies">
            <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
              {{ tech }}
            </span>
          </div>

          <div class="project-results">
            <h4>Results</h4>
            <ul>
              <li v-for="result in project.results" :key="result">
                {{ result }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

interface Project {
  id: number;
  icon: string;
  title: string;
  problem: string;
  description: string;
  technologies: string[];
  results: string[];
}

const projectsList: Project[] = [
  {
    id: 1,
    icon: '📦',
    title: 'Stock Management System',
    problem: 'Manual stock tracking was error-prone and time-consuming.',
    description:
      'Built a comprehensive stock management system using Vue 3, TypeScript, and Pinia for state management. Implemented real-time updates and data visualization.',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'SCSS'],
    results: [
      'Reduced stock management time by 60%',
      'Achieved 99.9% accuracy in inventory tracking',
      'Decreased manual errors by 95%',
      'Improved team productivity with intuitive UI'
    ]
  },
  {
    id: 2,
    icon: '⚡',
    title: 'High-Performance API Dashboard',
    problem: 'Slow API response times affecting user experience.',
    description:
      'Developed a performance-optimized dashboard using Nuxt 3 with server-side rendering and smart caching strategies. Integrated AI-powered analytics.',
    technologies: ['Nuxt 3', 'TypeScript', 'SSR', 'API Integration'],
    results: [
      'Page load time reduced from 8s to 1.2s',
      'API response time improved by 70%',
      'Increased user engagement by 45%',
      'Better SEO performance with SSR'
    ]
  },
  {
    id: 3,
    icon: '🛍️',
    title: 'E-Commerce Platform',
    problem: 'Need for a modern, scalable e-commerce solution.',
    description:
      'Created a full-featured e-commerce platform with Vuetify components, comprehensive testing with Vitest, and type-safe development practices.',
    technologies: ['Vue 3', 'Vuetify', 'TypeScript', 'Vitest'],
    results: [
      'Shipped with 95% test coverage',
      'Reduced bugs in production by 80%',
      'Improved code maintainability significantly',
      'Enhanced UX with accessible components'
    ]
  }
];
</script>

<style scoped lang="scss">
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.projects-hero {
  margin-bottom: 4rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--c-text-primary);
  }

  p {
    font-size: 1.125rem;
    color: var(--c-text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--c-panel-bg);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--c-accent);
    box-shadow: 0 10px 30px rgba(0, 122, 255, 0.1);
    transform: translateY(-4px);
  }
}

.project-image-placeholder {
  background: linear-gradient(135deg, var(--c-bg-gradient-start), var(--c-bg-gradient-end));
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--c-text-tertiary);
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.25rem;
    color: var(--c-text-primary);
    margin-bottom: 0.75rem;
  }

  .problem {
    font-size: 0.875rem;
    color: var(--c-accent);
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  .description {
    color: var(--c-text-secondary);
    line-height: 1.6;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
  }
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  display: inline-block;
  background: var(--c-accent-subtle);
  color: var(--c-accent);
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-results {
  margin-top: auto;

  h4 {
    font-size: 0.875rem;
    color: var(--c-text-primary);
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: var(--c-text-secondary);
      font-size: 0.85rem;
      padding: 0.35rem 0;
      position: relative;
      padding-left: 1.125rem;
      line-height: 1.4;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--c-accent);
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 768px) {
  .projects-page {
    padding: 1rem;
  }

  .projects-hero h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
