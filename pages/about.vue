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
          <h3>Backend &amp; Services</h3>
          <ul>
            <li>Supabase (Auth, DB, RLS)</li>
            <li>REST API integrations</li>
            <li>PHP/Laravel basics</li>
            <li>Vercel deployment</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2>Experience</h2>
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/logos/ebroker.png" alt="eBroker" onerror="this.style.display='none'" />
          <div class="fallback-logo">EB</div>
        </div>
        <div class="experience-content">
          <h3>eBroker Insurance Technology · Frontend Developer</h3>
          <p class="role-meta">April 2023 – February 2025 · Insurtech · <a href="https://www.youtube.com/watch?v=ApEriaqkRKQ&t=2s" target="_blank" rel="noopener">Watch Merlin demo →</a></p>
          <p>
            Worked in a Scrum team maintaining and enhancing a high-complexity insurance pricing tool.
            Implemented business logic and user interfaces using Vue 2 and TypeScript.
            Developed frontend unit tests and integrated REST APIs in close collaboration with backend teams.
          </p>
        </div>
      </div>
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/logos/checkpon.png" alt="CheckPon" onerror="this.style.display='none'" />
          <div class="fallback-logo">CP</div>
        </div>
        <div class="experience-content">
          <h3>CheckPon · Product Developer & UI Designer</h3>
          <p class="role-meta">September 2025 – December 2025 · Part-time · <a href="https://apps.apple.com/es/app/checkpon/id6738854080" target="_blank" rel="noopener">View on App Store →</a></p>
          <p>
            Designed user interfaces and navigation flows for an image verification platform.
            Collaborated with the development team on technical feasibility and created the design system and visual identity.
          </p>
        </div>
      </div>
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/logos/evolmind.png" alt="EvolMind" onerror="this.style.display='none'" />
          <div class="fallback-logo">EM</div>
        </div>
        <div class="experience-content">
          <h3>EvolMind · Frontend Developer</h3>
          <p class="role-meta">February 2025 – January 2026 · EdTech · <a href="https://youtube.com/playlist?list=PLlRhPlWYR4GAr7bSXLf16gx8MHWgg6Oij" target="_blank" rel="noopener">View tutorials →</a></p>
          <p>
            Developing and maintaining a production educational platform using Vue 3 and TypeScript.
            Migrating legacy PHP/jQuery code to modern frontend architecture.
            Optimizing frontend components for performance and scalability. Working within agile SCRUM environment.
          </p>
        </div>
      </div>
      <div class="experience-item">
        <div class="company-logo">
          <div class="fallback-logo">BL</div>
        </div>
        <div class="experience-content">
          <h3>BrevioLink · Personal SaaS Project</h3>
          <p class="role-meta">November 2025 – Present · Side project · <a href="https://brevio.ink" target="_blank" rel="noopener">brevio.ink</a></p>
          <p>
            Built a complete URL shortener and bio pages SaaS from scratch. Implemented authentication with Supabase,
            real-time analytics, Stripe subscriptions, and Row Level Security. Deployed on Vercel.
          </p>
        </div>
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
        favorite movie: Contact by Robert Zemeckis — and during the holidays I still enjoy the classic cheesy ones).
        💙 Ravenclaw spirit, curious and adventurous. I prefer ♟️ board games, enjoy chess, and creating a home around my people.
      </p>
      <p>
        🤝 I thrive in teams and also value focused solo time. If I were an animal: a 🐬 dolphin — sometimes a 🐼 panda.
        🏡 I care about aesthetics, interior design, and keeping things clean and organized.
      </p>
      
      <div class="personal-gallery">
        <div class="gallery-column">
          <div class="image-wrapper">
             <img src="/images/personal/photo1.jpg" alt="Personal photo 1" class="gallery-image" onerror="this.onerror=null;this.parentElement.classList.add('no-image');" />
             <div class="placeholder-text">Photo 1 (Portrait)<br>/images/personal/photo1.jpg</div>
          </div>
        </div>
        <div class="gallery-column">
          <div class="image-wrapper">
            <img src="/images/personal/photo2.jpg" alt="Personal photo 2" class="gallery-image" onerror="this.onerror=null;this.parentElement.classList.add('no-image');" />
            <div class="placeholder-text">Photo 2 (Portrait)<br>/images/personal/photo2.jpg</div>
          </div>
        </div>
      </div>
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
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.company-logo {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--c-border);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;

  img {
    width: 60%;
    height: auto;
    object-fit: contain;
    z-index: 2;
  }

  .fallback-logo {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-panel-bg);
    color: var(--c-accent);
    font-weight: 700;
    font-size: 1.25rem;
    z-index: 1;
  }
}

.experience-content {
  flex: 1;
}

.role-meta {
  color: var(--c-text-tertiary);
  font-size: 0.875rem;
  margin: 0.5rem 0 1rem 0;

  a {
    color: var(--c-accent);
    text-decoration: none;
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
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


.personal-gallery {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
}

.gallery-image {
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  filter: grayscale(20%);
  aspect-ratio: 3/4;
  display: block;

  &:hover {
    transform: translateY(-5px);
    filter: grayscale(0%);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--c-panel-bg);
  min-height: 400px;
  
  &.no-image {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed var(--c-border);
    
    img {
      display: none;
    }
    
    .placeholder-text {
      display: block;
    }
  }
}

.placeholder-text {
  display: none;
  text-align: center;
  color: var(--c-text-tertiary);
  font-family: monospace;
  padding: 1rem;
}

@media (max-width: 768px) {
  .personal-gallery {
    grid-template-columns: 1fr;
  }
}



@media (max-width: 768px) {
  .about-page {
    padding: 1rem;
    padding-top: 6rem; /* Top padding for responsive */
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

<style lang="scss" scoped>
.about-page {
  position: relative;
  padding-bottom: 8rem;
  padding-top: 8rem; /* Add space at top for navbar */

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    background: linear-gradient(to bottom, 
      rgba(var(--c-bg-primary-rgb), 0) 0%, 
      var(--c-bg-primary) 100%
    );
    pointer-events: none;
    z-index: 10;
  }
}
</style>
