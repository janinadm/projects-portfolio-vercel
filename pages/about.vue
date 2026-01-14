<template>
  <div class="about-page">
    <div class="about-hero">
      <div class="about-content">
        <h1>About Me</h1>
        <p class="intro">
          I'm a frontend developer with hands‑on experience building product interfaces and migrating legacy systems.
          I enjoy turning complex requirements into clear, accessible, and fast UIs using Vue 2/3, TypeScript, and Nuxt.
        </p>
      </div>
    </div>

    <section class="about-section">
      <h2>Technical Skills</h2>
      <div class="skills-list">
        <div class="skill-group">
          <h3>Frontend</h3>
          <ul>
            <li>Vue 2/3 &amp; Nuxt</li>
            <li>TypeScript</li>
            <li>Pinia, Vue Router, Vuetify</li>
            <li>SCSS &amp; CSS</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>Tools &amp; QA</h3>
          <ul>
            <li>Scrum with Jira</li>
            <li>Functional QA and incident reporting</li>
            <li>Git &amp; version control</li>
            <li>Figma &amp; interface design</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>Services</h3>
          <ul>
            <li>API integrations</li>
            <li>Service creation from scratch</li>
            <li>Debugging &amp; performance with DevTools</li>
            <li>Best practices for performance</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2>Experience</h2>
      <div class="experience-item">
        <h3>eBroker · Frontend Developer</h3>
        <p class="role-meta">Jun 2023 – Feb/Mar 2025 · Insurtech · Merlin multi‑quoting platform</p>
        <p>
          Worked in a Scrum team using Jira and the internal frontend framework for Merlin.
          Handled incident triage, task writing/assignment, QA, and new feature development.
          Highlights: tailored insurer customizations for brands like Comunidades de Occident, Asisa Salud, and Generali Autos; 
          close collaboration with backend to align integrations and ship safely.
        </p>
      </div>
      <div class="experience-item">
        <h3>EvolMind · Frontend Engineer</h3>
        <p class="role-meta">EdTech · Legacy migration to Vue 3 + TypeScript + Pinia</p>
        <p>
          Migrated pages and features from PHP/jQuery/unstructured HTML to a modern Vue 3 codebase.
          Clear workflow with scope drafting, iterative migration, and continuous QA through internal releases.
          Turned disorganized code into a composable, maintainable system.
        </p>
      </div>
      <div class="experience-item">
        <h3>CheckPon · Collaboration</h3>
        <p class="role-meta">Startup · Image verification platform and commercial API</p>
        <p>
          Supported the platform and API development to verify images against editing or AI tampering.
          Focused on clear endpoints, traceability, and practical UX for clients needing verifiable records.
        </p>
      </div>
    </section>

    <section class="about-section">
      <h2>How I Work</h2>
      <p>
        Clean code, clear communication, and user focus. I rely on:
      </p>
      <ul class="approach-list">
        <li>Component architecture with Composition API</li>
        <li>Strict typing with TypeScript</li>
        <li>Accessible, thoughtful UI/UX</li>
        <li>Continuous QA and reliability</li>
        <li>Team collaboration and product mindset</li>
      </ul>
    </section>

    <section class="about-section">
      <h2>Beyond Work</h2>
      <p>
        🌍 I love immersive travel, local city events, 📚 reading, and 🎬 cinema (Tim Burton and Christopher Nolan fan; 
        favorite movie: V for Vendetta — and during the holidays I still enjoy the classic cheesy ones).
        💙 Ravenclaw spirit, curious and adventurous. I prefer ♟️ board games, enjoy chess, and creating a home around my people.
      </p>
      <p>
        🤝 I thrive in teams and also value focused solo time. If I were an animal: a 🐬 dolphin — sometimes a 🐼 panda.
        🏡 I care about aesthetics, interior design, and keeping things clean and organized.
      </p>
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
