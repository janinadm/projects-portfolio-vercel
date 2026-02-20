<template>
  <div class="about-page">
    <div class="about-hero reveal">
      <div class="about-content">
        <h1>{{ $t('about.title') }}</h1>
        <p class="intro">{{ $t('about.intro') }}</p>
      </div>
    </div>

    <section class="about-section reveal">
      <h2>{{ $t('about.technicalSkills') }}</h2>
      <div class="skills-list">
        <div class="skill-group">
          <h3>{{ $t('about.frontend') }}</h3>
          <ul>
            <li v-for="skill in $tm('about.frontendSkills')" :key="skill">{{ $rt(skill) }}</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>{{ $t('about.toolsQa') }}</h3>
          <ul>
            <li v-for="skill in $tm('about.toolsQaSkills')" :key="skill">{{ $rt(skill) }}</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>{{ $t('about.backendServices') }}</h3>
          <ul>
            <li v-for="skill in $tm('about.backendSkills')" :key="skill">{{ $rt(skill) }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section reveal">
      <h2>{{ $t('about.experience') }}</h2>
      
      <!-- EvolMind -->
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/logos/evolmind.png" alt="EvolMind" onerror="this.style.display='none'" />
          <div class="fallback-logo">EM</div>
        </div>
        <div class="experience-content">
          <h3>{{ $t('about.evolmindTitle') }}</h3>
          <p class="role-meta">
            {{ $t('about.evolmindMeta') }} · 
            <a href="https://youtube.com/playlist?list=PLlRhPlWYR4GAr7bSXLf16gx8MHWgg6Oij" target="_blank" rel="noopener">{{ $t('about.evolmindLink') }}</a>
          </p>
          <p>{{ $t('about.evolmindDesc') }}</p>
        </div>
      </div>

      <!-- eBroker -->
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/logos/ebroker.png" alt="eBroker" onerror="this.style.display='none'" />
          <div class="fallback-logo">EB</div>
        </div>
        <div class="experience-content">
          <h3>{{ $t('about.ebrokerTitle') }}</h3>
          <p class="role-meta">
            {{ $t('about.ebrokerMeta') }} · 
            <a href="https://www.youtube.com/watch?v=ApEriaqkRKQ&t=2s" target="_blank" rel="noopener">{{ $t('about.ebrokerDemo') }}</a>
          </p>
          <p>{{ $t('about.ebrokerDesc') }}</p>
        </div>
      </div>

      <!-- CheckPon -->
      <div class="experience-item">
        <div class="company-logo">
          <img src="/images/logos/checkpon.png" alt="CheckPon" onerror="this.style.display='none'" />
          <div class="fallback-logo">CP</div>
        </div>
        <div class="experience-content">
          <h3>{{ $t('about.checkponTitle') }}</h3>
          <p class="role-meta">
            {{ $t('about.checkponMeta') }} · 
            <a href="https://apps.apple.com/es/app/checkpon/id6738854080" target="_blank" rel="noopener">{{ $t('about.checkponLink') }}</a>
          </p>
          <p>{{ $t('about.checkponDesc') }}</p>
        </div>
      </div>

      <!-- BrevioLink -->
      <div class="experience-item">
        <div class="company-logo">
          <div class="fallback-logo">BL</div>
        </div>
        <div class="experience-content">
          <h3>{{ $t('about.breviolinkTitle') }}</h3>
          <p class="role-meta">
            {{ $t('about.breviolinkMeta') }} · 
            <a href="https://brevio.ink" target="_blank" rel="noopener">brevio.ink</a>
          </p>
          <p>{{ $t('about.breviolinkDesc') }}</p>
        </div>
      </div>
    </section>

    <section class="about-section reveal">
      <h2>{{ $t('about.howIWork') }}</h2>
      <p>{{ $t('about.howIWorkIntro') }}</p>
      <ul class="approach-list">
        <li v-for="item in $tm('about.howIWorkList')" :key="item">{{ $rt(item) }}</li>
      </ul>
    </section>

    <section class="about-section reveal">
      <h2>{{ $t('about.beyondWork') }}</h2>
      <p>{{ $t('about.beyondWork1') }}</p>
      <p>{{ $t('about.beyondWork2') }}</p>
      
      <div class="personal-gallery">
        <div class="gallery-column">
          <div class="image-wrapper">
             <img src="/images/personal/photo1.jpg" alt="Personal photo 1" class="gallery-image" onerror="this.onerror=null;this.parentElement.classList.add('no-image');" />
             <div class="placeholder-text">Photo 1 (Portrait)</div>
          </div>
        </div>
        <div class="gallery-column">
          <div class="image-wrapper">
            <img src="/images/personal/photo2.jpg" alt="Personal photo 2" class="gallery-image" onerror="this.onerror=null;this.parentElement.classList.add('no-image');" />
            <div class="placeholder-text">Photo 2 (Portrait)</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal';

definePageMeta({
  layout: 'default',
});

useScrollReveal();
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
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--glass-shadow);
  transition: all 0.4s ease;

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
  border-radius: var(--radius-xl);
  overflow: hidden;
  background-color: var(--glass-bg);
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
  padding-top: 8rem; /* Add space at top for navbar */
  padding-bottom: 4rem;
}
</style>
