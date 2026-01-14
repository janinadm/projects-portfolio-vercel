<template>
  <div class="project-detail" v-if="project">
    <div class="hero">
      <div class="icon">{{ project.icon }}</div>
      <h1>{{ project.title }}</h1>
      <p class="summary">{{ project.summary }}</p>
    </div>

    <div class="content">
      <div class="left">
        <p class="description">{{ project.description }}</p>

        <h2>Highlights</h2>
        <ul class="highlights">
          <li v-for="h in project.highlights" :key="h">{{ h }}</li>
        </ul>
      </div>
      <aside class="right">
        <h3>Tech</h3>
        <div class="tech">
          <span v-for="t in project.technologies" :key="t" class="badge">{{ t }}</span>
        </div>
      </aside>
    </div>

    <div class="back">
      <NuxtLink to="/projects">← Back to Projects</NuxtLink>
    </div>
  </div>
  <div v-else class="project-detail"><p>Project not found.</p></div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { personalProjects } from '@/composables/projects';

const route = useRoute();
const slug = route.params.slug as string;
const project = personalProjects.find(p => p.slug === slug);

definePageMeta({ layout: 'default' });
</script>

<style scoped lang="scss">
.project-detail {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;

  .icon { font-size: 3rem; }
  h1 { color: var(--c-text-primary); margin: 0.5rem 0; }
  .summary { color: var(--c-text-secondary); }
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.description { color: var(--c-text-secondary); line-height: 1.7; }

.highlights { list-style: none; padding: 0; margin: 1rem 0 0; }
.highlights li { padding: 0.4rem 0 0.4rem 1.2rem; position: relative; color: var(--c-text-secondary); }
.highlights li::before { content: '→'; position: absolute; left: 0; color: var(--c-accent); }

.right {
  background: var(--c-panel-bg);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 1rem;
}
.tech { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.badge { background: var(--c-accent-subtle); color: var(--c-accent); padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.8rem; }

.back { margin-top: 2rem; text-align: center; }
.back a { color: var(--c-accent); text-decoration: none; font-weight: 500; }

@media (max-width: 768px) {
  .content { grid-template-columns: 1fr; }
}
</style>
