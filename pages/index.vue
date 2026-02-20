<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-background">
        <img src="/images/hero-real.png" alt="Janina" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text">
          <div class="greeting reveal">
            <h2>{{ $t('home.greeting') }}</h2>
          </div>
          <h1 class="reveal">{{ $t('home.headline') }}</h1>
          <p class="reveal">
            {{ $t('home.intro') }}
          </p>
          <div class="hero-actions reveal">
            <NuxtLink to="/projects" class="btn btn-primary">{{ $t('home.seeProjects') }}</NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary">{{ $t('home.letsTalk') }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights">
      <h2 class="reveal">{{ $t('home.whatIDo') }}</h2>
      <div class="highlights-grid">
        <div class="highlight-card reveal">
          <span class="icon">🎨</span>
          <h3>{{ $t('home.uiDev') }}</h3>
          <p>{{ $t('home.uiDevDesc') }}</p>
        </div>
        <div class="highlight-card reveal">
          <span class="icon">⚡</span>
          <h3>{{ $t('home.performance') }}</h3>
          <p>{{ $t('home.performanceDesc') }}</p>
        </div>
        <div class="highlight-card reveal">
          <span class="icon">🔄</span>
          <h3>{{ $t('home.legacyMigration') }}</h3>
          <p>{{ $t('home.legacyMigrationDesc') }}</p>
        </div>
        <div class="highlight-card reveal">
          <span class="icon">🛠️</span>
          <h3>{{ $t('home.fullStack') }}</h3>
          <p>{{ $t('home.fullStackDesc') }}</p>
        </div>
      </div>
    </section>

    <section class="featured-projects">
      <h2 class="reveal">{{ $t('home.featuredProjects') }}</h2>
      <div class="projects-preview">
        <component
          v-for="project in featured"
          :key="project.slug"
          :is="project.liveUrl ? 'a' : 'NuxtLink'"
          :to="!project.liveUrl ? `/projects/${project.slug}` : undefined"
          :href="project.liveUrl || undefined"
          class="project-preview reveal"
          target="_blank"
          rel="noopener"
        >
          <div class="project-preview-image" :style="project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
            <span v-if="!project.image">{{ project.icon }}</span>
          </div>
          <h3>{{ $t(project.title) }}</h3>
          <p>{{ $t(project.summary) }}</p>
        </component>
      </div>
      <div class="view-all reveal">
        <NuxtLink to="/projects">{{ $t('home.viewAllProjects') }}</NuxtLink>
      </div>
    </section>

    <section class="tech-stack">
      <h2 class="reveal">{{ $t('home.techStack') }}</h2>
      <div class="tech-grid">
        <div class="tech-item reveal">
          <strong>{{ $t('home.frontend') }}</strong>
          <p>{{ $t('home.frontendTech') }}</p>
        </div>
        <div class="tech-item reveal">
          <strong>{{ $t('home.styling') }}</strong>
          <p>{{ $t('home.stylingTech') }}</p>
        </div>
        <div class="tech-item reveal">
          <strong>{{ $t('home.stateManagement') }}</strong>
          <p>{{ $t('home.stateManagementTech') }}</p>
        </div>
        <div class="tech-item reveal">
          <strong>{{ $t('home.testing') }}</strong>
          <p>{{ $t('home.testingTech') }}</p>
        </div>
        <div class="tech-item reveal">
          <strong>{{ $t('home.backend') }}</strong>
          <p>{{ $t('home.backendTech') }}</p>
        </div>
        <div class="tech-item reveal">
          <strong>{{ $t('home.tools') }}</strong>
          <p>{{ $t('home.toolsTech') }}</p>
        </div>
      </div>
    </section>

    <section class="cta-section reveal">
      <h2>{{ $t('home.ctaTitle') }}</h2>
      <p>{{ $t('home.ctaSubtitle') }}</p>
      <NuxtLink to="/contact" class="btn btn-primary">{{ $t('home.contactMe') }}</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { personalProjects } from '@/composables/projects';
import { useScrollReveal } from '@/composables/useScrollReveal';

const featured = personalProjects;
useScrollReveal();
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
  border-radius: var(--radius-lg);
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
      box-shadow: 0 8px 16px rgba(224, 168, 46, 0.25);
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
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--glass-border);
  transition: all 0.4s ease;
  text-align: center;
  box-shadow: var(--glass-shadow);

  &:hover {
    border-color: var(--c-accent);
    box-shadow: 0 12px 40px rgba(224, 168, 46, 0.12);
    transform: translateY(-6px);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin: 0 auto 1rem;
    font-size: 1.75rem;
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, rgba(224, 168, 46, 0.15) 0%, rgba(255, 200, 87, 0.08) 100%);
    border: 1px solid rgba(224, 168, 46, 0.2);
    box-shadow: 0 4px 12px rgba(224, 168, 46, 0.1);
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
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  text-decoration: none;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  box-shadow: var(--glass-shadow);

  &:hover {
    border-color: var(--c-accent);
    box-shadow: 0 12px 40px rgba(224, 168, 46, 0.12);
    transform: translateY(-6px);
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
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--glass-border);
  text-align: center;
  box-shadow: var(--glass-shadow);
  transition: all 0.4s ease;

  &:hover {
    border-color: var(--c-accent);
    transform: translateY(-4px);
  }

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
.cta-section {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  max-width: 900px;
  margin: 4rem auto 2rem;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: var(--glass-shadow);
  position: relative;
  overflow: hidden;

  /* Subtle golden glow behind CTA */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -20%;
    width: 140%;
    height: 200%;
    background: radial-gradient(ellipse at center, rgba(224, 168, 46, 0.06) 0%, transparent 60%);
    pointer-events: none;
  }

  h2 {
    font-size: 2rem;
    color: var(--c-text-primary);
    margin-bottom: 0.75rem;
    position: relative;
  }

  p {
    color: var(--c-text-secondary);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    position: relative;
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
