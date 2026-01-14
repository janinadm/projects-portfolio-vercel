<template>
  <div class="about-page">
    <div class="about-hero">
      <div class="about-content">
        <h1>About Me</h1>
        <p class="intro">
          Frontend developer passionate about creating beautiful, performant web experiences 
          using modern technologies like Vue 3, TypeScript, and Nuxt.
        </p>
      </div>
    </div>

    <section class="about-section">
      <h2>Technical Skills</h2>
      <div class="skills-list">
        <div class="skill-group">
          <h3>Frontend</h3>
          <ul>
            <li>Vue 3 &amp; Nuxt 3</li>
            <li>TypeScript</li>
            <li>Vuetify Components</li>
            <li>SCSS &amp; CSS</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>Tools &amp; Testing</h3>
          <ul>
            <li>Pinia State Management</li>
            <li>Vitest &amp; Unit Testing</li>
            <li>Git &amp; Version Control</li>
            <li>Figma Design Tools</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>AI Integration</h3>
          <ul>
            <li>API Integration</li>
            <li>Data Analysis Optimization</li>
            <li>Content Optimization</li>
            <li>Performance Enhancement</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2>Experience</h2>
      <div class="experience-item">
        <h3>Frontend Developer</h3>
        <p class="role-meta">Current Role | Web Development</p>
        <p>
          Developing responsive, accessible web applications using Vue 3 and TypeScript. 
          Leveraging AI tools to optimize performance and improve development workflows.
        </p>
      </div>
    </section>

    <section class="about-section">
      <h2>Approach to Development</h2>
      <p>
        I believe in writing clean, maintainable code that balances performance with developer experience. 
        My approach combines:
      </p>
      <ul class="approach-list">
        <li>Modern component architecture with Vue 3 Composition API</li>
        <li>Type-safe development with TypeScript</li>
        <li>Thoughtful UI/UX design informed by user needs</li>
        <li>Strategic AI integration for efficiency gains</li>
        <li>Comprehensive testing and quality assurance</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>

<style scoped lang="scss">
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.about-hero {
  margin-bottom: 4rem;
  text-align: center;
}

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--c-text-primary);
}

.intro {
  font-size: 1.25rem;
  color: var(--c-text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.about-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--c-panel-bg);
  border: 1px solid var(--c-border);
  border-radius: 8px;

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: var(--c-text-primary);
  }

  h3 {
    font-size: 1.125rem;
    color: var(--c-text-primary);
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--c-text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-group {
  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.5rem 0;
      color: var(--c-text-secondary);
      position: relative;
      padding-left: 1.25rem;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--c-accent);
      }
    }
  }
}

.experience-item {
  margin-bottom: 2rem;

  .role-meta {
    color: var(--c-text-tertiary);
    font-size: 0.875rem;
    margin: 0.5rem 0 1rem 0;
  }
}

.approach-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    padding: 0.75rem 0;
    color: var(--c-text-secondary);
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--c-accent);
      font-weight: bold;
    }
  }
}

@media (max-width: 768px) {
  .about-page {
    padding: 1rem;
  }

  .about-hero h1 {
    font-size: 2rem;
  }

  .about-section {
    padding: 1.5rem;
  }

  .skills-list {
    grid-template-columns: 1fr;
  }
}
</style>
