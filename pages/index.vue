<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-background">
        <img src="/images/hero-real.png" alt="Janina" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text">
          <div class="greeting">
            <h2>Hi, I'm Janina</h2>
          </div>
          <h1>Frontend Developer · Building products that users love</h1>
          <p>
            I transform complex requirements into clean, accessible, and performant interfaces. Specialized in Vue 2/3, TypeScript, and Nuxt, with real production experience in insurtech, edtech, and personal SaaS projects.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/projects" class="btn btn-primary">See Projects</NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary">Let's Talk</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights">
      <h2>What I Do</h2>
      <div class="highlights-grid">
        <div class="highlight-card">
          <span class="icon">🎨</span>
          <h3>UI Development</h3>
          <p>Building intuitive, accessible interfaces with Vue, Vuetify, and modern component patterns.</p>
        </div>
        <div class="highlight-card">
          <span class="icon">⚡</span>
          <h3>Performance</h3>
          <p>Optimizing applications for speed with Nuxt 3, lazy loading, and efficient state management.</p>
        </div>
        <div class="highlight-card">
          <span class="icon">🔄</span>
          <h3>Legacy Migration</h3>
          <p>Modernizing legacy code to Vue 3 + TypeScript while maintaining business continuity.</p>
        </div>
        <div class="highlight-card">
          <span class="icon">🛠️</span>
          <h3>Full-Stack Basics</h3>
          <p>Integrating APIs, working with Supabase/PHP backends, and deploying to Vercel.</p>
        </div>
      </div>
    </section>

    <section class="featured-projects">
      <h2>Featured Projects</h2>
      <div class="projects-preview">
        <component
          v-for="project in featured"
          :key="project.slug"
          :is="project.liveUrl ? 'a' : 'NuxtLink'"
          :to="!project.liveUrl ? `/projects/${project.slug}` : undefined"
          :href="project.liveUrl || undefined"
          class="project-preview"
          target="_blank"
          rel="noopener"
        >
          <div class="project-preview-image" :style="project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
            <span v-if="!project.image">{{ project.icon }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.summary }}</p>
        </component>
      </div>
      <div class="view-all">
        <NuxtLink to="/projects">View All Projects →</NuxtLink>
      </div>
    </section>

    <section class="tech-stack">
      <h2>Tech Stack</h2>
      <div class="tech-grid">
        <div class="tech-item">
          <strong>Frontend</strong>
          <p>Vue 3 • Nuxt 3 • TypeScript</p>
        </div>
        <div class="tech-item">
          <strong>Styling</strong>
          <p>SCSS • Vuetify • CSS3</p>
        </div>
        <div class="tech-item">
          <strong>State Management</strong>
          <p>Pinia • Composition API</p>
        </div>
        <div class="tech-item">
          <strong>Testing</strong>
          <p>Vitest • Unit Testing</p>
        </div>
        <div class="tech-item">
          <strong>Backend</strong>
          <p>Supabase • PHP/Laravel • REST APIs</p>
        </div>
        <div class="tech-item">
          <strong>Tools</strong>
          <p>Git • Figma • Jira • Vitest</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2>Ready to Start Your Project?</h2>
      <p>Let's collaborate and build something great together.</p>
      <NuxtLink to="/contact" class="btn btn-primary">Contact Me</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { personalProjects } from '@/composables/projects';

const featured = personalProjects;
</script>

<style scoped lang="scss">
.home-page {
  background: var(--c-bg-primary);
}

// Hero Section
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0;
  
  /* Ensure text visibility on dark overlay */
  --c-text-primary: #ffffff;
  --c-text-secondary: rgba(255, 255, 255, 0.9);
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* Overlay principal para texto */
  .hero-overlay {
    position: absolute;
    inset: 0;
    /* Gradiente ajustado: más limpio a la izquierda para la cara, oscuro a la derecha para texto */
    background: linear-gradient(
      90deg, 
      transparent 0%,
      rgba(0, 0, 0, 0.1) 30%, 
      rgba(0, 0, 0, 0.6) 60%, 
      rgba(0, 0, 0, 0.9) 100%
    );
    
    @media (max-width: 768px) {
      background: linear-gradient(
        0deg, 
        transparent 0%, 
        rgba(0, 0, 0, 0.5) 50%, 
        rgba(0, 0, 0, 0.85) 80%
      );
    }
  }

  /* Máscara inferior para evitar el corte brusco */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, transparent, var(--c-bg-primary));
    pointer-events: none;
    z-index: 2;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alineación a la derecha */
}

.hero-text {
  max-width: 600px;
  text-align: right; /* Texto alineado a la derecha */
  
  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--c-text-primary);
    text-shadow: 0 2px 20px rgba(0,0,0,0.1); /* Sutil sombra para contraste */
  }

  p {
    font-size: 1.125rem;
    color: var(--c-text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
    font-weight: 500;
  }
}

.greeting {
  margin-bottom: 1rem;
  
  h2 {
    font-size: 1.25rem;
    color: var(--c-accent);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end; /* Botones a la derecha */
}

// Responsive adjustments
@media (max-width: 1024px) {
  .hero-text {
     max-width: 500px;
     
     h1 {
       font-size: 3rem;
     }
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
    align-items: flex-end; /* Texto abajo en móvil para dejar ver la foto arriba */
    padding-bottom: 4rem;
  }

  .hero-background img {
    object-position: top center;
  }

  .hero-content {
    padding: 0 1.5rem;
  }

  .hero-text {
    max-width: 100%;
    
    h1 {
      font-size: 2.5rem;
    }
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    
    .btn {
      width: 100%;
      text-align: center;
    }
  }
}

.btn {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

    &.btn-primary {
    background: var(--c-accent);
    color: #ffffff; /* Texto siempre blanco en botón primario */

    &:hover {
      background: var(--c-accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(224, 168, 46, 0.25); /* Sombra dorada */
    }
  }

  &.btn-secondary {
    background: transparent;
    color: #ffffff; /* Texto siempre blanco */
    border: 2px solid #ffffff; /* Borde blanco para contraste */

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      border-color: var(--c-accent);
      color: var(--c-accent);
    }
  }
}

// Highlights Section
.highlights {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--c-text-primary);
  }
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.highlight-card {
  background: var(--c-panel-bg);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--c-border);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: var(--c-accent);
    box-shadow: 0 10px 30px rgba(0, 122, 255, 0.08);
    transform: translateY(-4px);
  }

  .icon {
    display: block;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    color: var(--c-text-primary);
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--c-text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
  }
}

// Featured Projects
.featured-projects {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--c-text-primary);
  }
}

.projects-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.project-preview {
  background: var(--c-panel-bg);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--c-accent);
    box-shadow: 0 10px 30px rgba(0, 122, 255, 0.1);
    transform: translateY(-4px);
  }
}

.project-preview-image {
  background: linear-gradient(135deg, var(--c-bg-gradient-start), var(--c-bg-gradient-end));
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.project-preview h3 {
  color: var(--c-text-primary);
  padding: 1.5rem 1.5rem 0.5rem;
  font-size: 1.125rem;
}

.project-preview p {
  color: var(--c-text-secondary);
  padding: 0 1.5rem 1.5rem;
  font-size: 0.9rem;
}

.view-all {
  text-align: center;

  a {
    display: inline-block;
    color: var(--c-accent);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(4px);
    }
  }
}

// Tech Stack
.tech-stack {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--c-text-primary);
  }
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  background: var(--c-panel-bg);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--c-border);
  text-align: center;

  strong {
    display: block;
    color: var(--c-text-primary);
    margin-bottom: 0.5rem;
    font-size: 1.025rem;
  }

  p {
    color: var(--c-text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

// CTA Section
// CTA Section
.cta-section {
  background: linear-gradient(135deg, var(--c-bg-gradient-start), var(--c-bg-gradient-end));
  max-width: 100%; /* Full width integration */
  margin: 0; /* Remove margin to touch footer */
  padding: 6rem 2rem 8rem; /* Extra padding bottom for fade */
  text-align: center;
  border: none; /* Remove border for seamless look */
  position: relative;
  
  /* Fade out inferior */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    background: linear-gradient(to bottom, transparent, var(--c-bg-primary));
    pointer-events: none;
  }

  h2 {
    font-size: 2rem;
    color: var(--c-text-primary);
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--c-text-secondary);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
  }
}

// Responsive
@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-text {
    text-align: center;
  }

  .hero-image {
    order: -1;
  }

  .hero-image img {
    max-width: 300px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .highlights,
  .featured-projects,
  .tech-stack {
    padding: 2rem 1rem;

    h2 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  }

  .cta-section {
    margin: 0 1rem 2rem;
    padding: 2rem 1rem;
  }
}
</style>
