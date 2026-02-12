<template>
  <div class="projects-page">
    <div class="projects-hero">
      <h1>Projects</h1>
      <p>
        Personal projects built to learn, showcase skills, and explore in-demand technologies. Each one solves a real problem and demonstrates clean code, thoughtful UX, and modern best practices.
      </p>
    </div>

    <div class="projects-grid">
      <div v-for="project in projectsList" :key="project.slug" class="project-card">
        <div class="project-image-placeholder" :style="project.image && project.slug === 'breviolink' ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'top center' } : {}">
          <span v-if="!project.image || project.slug !== 'breviolink'">{{ project.icon }}</span>
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="problem">{{ project.summary }}</p>
          <p class="description">{{ project.description }}</p>
          
          <div class="technologies">
            <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
              {{ tech }}
            </span>
          </div>

          <div class="project-results">
            <h4>Highlights</h4>
            <ul>
              <li v-for="result in project.highlights" :key="result">
                {{ result }}
              </li>
            </ul>
          </div>

          <div class="view-details">
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener"
            >
              View live →
            </a>
            <NuxtLink v-else :to="`/projects/${project.slug}`">View details →</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { personalProjects, type PersonalProject } from '@/composables/projects';

definePageMeta({
  layout: 'default',
});

const projectsList: PersonalProject[] = personalProjects;
</script>

<style scoped lang="scss">
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 8rem; /* Space for navbar */
  position: relative;
  padding-bottom: 8rem; /* More space for the smoother fade */

  /* Fade out inferior suavizado y alargado */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30vh; /* Taller fade area (30% of viewport height) */
    background: linear-gradient(to bottom, 
      rgba(var(--c-bg-primary-rgb), 0) 0%, 
      var(--c-bg-primary) 100%
    );
    pointer-events: none;
    z-index: 10;
  }
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

.view-details {
  margin-top: 1rem;
  a,
  a:visited {
    color: var(--c-accent);
    text-decoration: none;
    font-weight: 500;
  }

  a:hover,
  a:focus {
    transform: translateX(3px);
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

