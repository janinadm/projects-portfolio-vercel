<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-image">
          <img src="/images/hero-profile.png" alt="Janina" />
        </div>
        <div class="hero-text">
          <div class="greeting">
            <h2>Hello, I'm Janina</h2>
          </div>
          <h1>Frontend Developer &amp; Designer</h1>
          <p>
            I craft beautiful, performant web experiences using Vue 3, TypeScript, and modern web technologies.
            Passionate about clean code, user experience, and leveraging AI to enhance development workflows.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/projects" class="btn btn-primary">View My Work</NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary">Get In Touch</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights">
      <h2>What I Do</h2>
      <div class="highlights-grid">
        <div class="highlight-card">
          <span class="icon">🎨</span>
          <h3>UI/UX Design</h3>
          <p>Creating intuitive, accessible interfaces with Vuetify and modern design principles.</p>
        </div>
        <div class="highlight-card">
          <span class="icon">⚡</span>
          <h3>Performance</h3>
          <p>Optimizing applications for speed with Nuxt 3 and strategic AI integration.</p>
        </div>
        <div class="highlight-card">
          <span class="icon">🧪</span>
          <h3>Quality Assurance</h3>
          <p>Ensuring reliability with comprehensive testing using Vitest and TypeScript.</p>
        </div>
        <div class="highlight-card">
          <span class="icon">🤖</span>
          <h3>AI Integration</h3>
          <p>Leveraging AI tools for enhanced efficiency and smarter solutions.</p>
        </div>
      </div>
    </section>

    <section class="featured-projects">
      <h2>Featured Projects</h2>
      <div class="projects-preview">
        <NuxtLink to="/projects" class="project-preview">
          <div class="project-preview-image">📦</div>
          <h3>Stock Management</h3>
          <p>Real-time inventory tracking with Vue 3 &amp; TypeScript</p>
        </NuxtLink>
        <NuxtLink to="/projects" class="project-preview">
          <div class="project-preview-image">⚡</div>
          <h3>API Dashboard</h3>
          <p>Performance-optimized dashboard with Nuxt 3 &amp; SSR</p>
        </NuxtLink>
        <NuxtLink to="/projects" class="project-preview">
          <div class="project-preview-image">🛍️</div>
          <h3>E-Commerce</h3>
          <p>Full-featured platform with Vuetify &amp; Vitest</p>
        </NuxtLink>
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
      </div>
    </section>

    <section class="cta-section">
      <h2>Ready to Start Your Project?</h2>
      <p>Let's collaborate and create something amazing together.</p>
      <NuxtLink to="/contact" class="btn btn-primary">Contact Me</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
// Page setup
</script>

<style scoped lang="scss">
.home-page {
  background: var(--c-bg-primary);
}

// Hero Section
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  overflow: visible;
  min-height: auto;
}

.hero-content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  border-radius: 12px;
  padding: 3rem;
  transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 0 0 2px rgba(214, 76, 143, 0.5), 0 0 25px rgba(214, 76, 143, 0.2);
  }
}

.hero-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 2;
  order: -1;
  pointer-events: none;

  img {
    width: 100%;
    max-width: 750px;
    height: auto;
    opacity: 0.4;
    filter: grayscale(20%) drop-shadow(0 12px 36px rgba(214, 76, 143, 0.25));
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 8px;
    pointer-events: auto;
  }

  .hero-content:hover & img {
    transform: scale(0.98);
    opacity: 0.6;
    filter: grayscale(0%) drop-shadow(0 12px 36px rgba(214, 76, 143, 0.4));
  }
}

.hero-text {
  position: relative;
  z-index: 3;
  text-align: left;
  max-width: none;
  padding: 0;
  background: transparent;
  border-radius: 0;
  pointer-events: none;
  margin-right: 0;
  margin-left: 0;

  * {
    pointer-events: auto;
  }
}

.greeting {
  margin-bottom: 1rem;

  h2 {
    font-size: 1.25rem;
    color: var(--c-accent);
    font-weight: 500;
    letter-spacing: 0.05em;
    text-shadow: 0 0 10px rgba(214, 76, 143, 0.3);
  }
}

.hero h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--c-text-primary);
}

.hero p {
  font-size: 1.125rem;
  color: var(--c-text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

// Responsive
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-image {
    order: 0;
    max-width: 500px;
    margin: 0 auto;

    img {
      max-width: 100%;
    }
  }

  .hero-text {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 3rem 1.5rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .hero-image {
    max-width: 400px;

    img {
      max-width: 100%;
    }
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1rem;
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
    color: white;

    &:hover {
      background: var(--c-accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 122, 255, 0.2);
    }
  }

  &.btn-secondary {
    background: transparent;
    color: var(--c-accent);
    border: 2px solid var(--c-accent);

    &:hover {
      background: var(--c-accent-subtle);
      transform: translateY(-2px);
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
.cta-section {
  background: linear-gradient(135deg, var(--c-bg-gradient-start), var(--c-bg-gradient-end));
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 3rem 2rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--c-border);

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
