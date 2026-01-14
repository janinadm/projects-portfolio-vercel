<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <div class="app-header__container container">
        <div class="app-header__brand">
          <NuxtLink to="/" class="app-header__logo">
            Portfolio
          </NuxtLink>
        </div>
        
        <ul class="app-header__menu">
          <li class="app-header__item">
            <NuxtLink to="/" class="app-header__link">
              Home
            </NuxtLink>
          </li>
          <li class="app-header__item">
            <NuxtLink to="/projects" class="app-header__link">
              Projects
            </NuxtLink>
          </li>
          <li class="app-header__item">
            <NuxtLink to="/about" class="app-header__link">
              About
            </NuxtLink>
          </li>
          <li class="app-header__item">
            <NuxtLink to="/contact" class="app-header__link">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Header component with navigation
// Uses BEM naming and semantic HTML
// Styles are defined globally in assets/scss/_components.scss
</script>
