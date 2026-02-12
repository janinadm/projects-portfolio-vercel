<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <nav class="navbar" :class="{ 'home-nav': $route.path === '/' }">
      <div class="nav-container">
        <button class="nav-logo" @click="navigateTo('/')">
          <span class="logo-icon">
            JD
            <button v-if="showBadge" class="logo-badge" @click.stop="openWelcomeDialog" title="Welcome">
              <FontAwesomeIcon :icon="['fas', 'bell']" class="bell-icon" />
            </button>
          </span>
        </button>
        <ul class="nav-menu">
          <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
          <li><NuxtLink to="/projects" class="nav-link">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
        </ul>
        <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <FontAwesomeIcon v-else :icon="['fas','moon']" />
        </button>
      </div>
    </nav>

    <main class="main-content">
      <NuxtPage />
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2026 Janina Dorobantu. All rights reserved.</p>
        <div class="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/janina-dorobantu-b204b9192/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://wa.me/34628946280" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </footer>

    <!-- Welcome Dialog -->
    <Teleport to="body">
      <div v-if="showWelcomeDialog" class="dialog-overlay" @click="closeWelcomeDialog">
        <div class="dialog-content" @click.stop>
          <button class="dialog-close" @click="closeWelcomeDialog">
            <FontAwesomeIcon :icon="['fas', 'times']" />
          </button>
          <div class="dialog-header">
            <h2>Hey there! 👋</h2>
          </div>
          <div class="dialog-body">
            <p>I'm so glad you stopped by! This is my little corner of the web where I share my projects, ideas, and passion for frontend development.</p>
            <p>Feel free to explore, and if you have any questions or just want to chat about code, design, or anything else, <strong>don't hesitate to reach out</strong>. 😊</p>
            <p>Enjoy the journey!</p>
          </div>
          <button class="dialog-action" @click="closeWelcomeDialog">Let's go</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true) // Default to true (Dark Mode)
const showWelcomeDialog = ref(false)
const showBadge = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const openWelcomeDialog = () => {
  showWelcomeDialog.value = true
}

const closeWelcomeDialog = () => {
  showWelcomeDialog.value = false
  showBadge.value = false
  localStorage.setItem('welcomeDialogSeen', 'true')
}

const navigateTo = (path: string) => {
  useRouter().push(path)
}

onMounted(() => {
  // Check local storage, default to 'dark' if not found
  const theme = localStorage.getItem('theme') || 'dark'
  isDark.value = theme === 'dark'
  document.documentElement.setAttribute('data-theme', theme)
})
</script>

<style lang="scss">
@use './assets/scss/main.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background: var(--c-bg-primary);
  color: var(--c-text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

// Navigation Styles
.navbar {
  background: var(--c-panel-bg);
  border-bottom: 1px solid var(--c-border);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  
  &.home-nav {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
    border-bottom: none;
    position: absolute;
    width: 100%;
    padding-top: 1rem;
    
    .nav-logo {
      color: #ffffff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .nav-link {
      color: rgba(255, 255, 255, 0.9);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      
      &:hover, &.router-link-active {
        color: var(--c-accent);
      }
    }
  }
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--c-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: var(--c-accent);
  }

  &:active {
    transform: scale(0.95);
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-hover) 100%);
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    box-shadow: 0 4px 12px rgba(214, 76, 143, 0.3);
    transition: all 0.4s ease;
    perspective: 1000px;
    transform-style: preserve-3d;
    position: relative;
    
    .nav-logo:hover & {
      transform: rotateX(10deg) rotateY(-10deg);
      box-shadow: 0 8px 24px rgba(214, 76, 143, 0.5);
    }

    .nav-logo:active & {
      transform: scale(0.9);
    }

    .logo-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, #22c55e 0%, #eab308 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.7rem;
      box-shadow: 0 2px 8px rgba(34, 197, 94, 0.4);
      animation: bounceIcon 2s ease-in-out infinite;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;

      .bell-icon {
        font-size: 0.65rem;
      }

      &:hover {
        transform: scale(1.15);
        box-shadow: 0 4px 16px rgba(34, 197, 94, 0.6);
        animation: bounceIconFast 0.6s ease-in-out infinite;
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .nav-logo:hover & .logo-badge {
      animation: bounceIconFast 0.6s ease-in-out infinite;
    }
  }
}

@keyframes bounceIcon {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes bounceIconFast {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.1);
  }
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 2rem;

  .nav-link {
    text-decoration: none;
    color: var(--c-text-secondary);
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;

    &:hover {
      color: var(--c-accent);
    }

    &.router-link-active {
      color: var(--c-accent);

      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--c-accent);
      }
    }
  }
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--c-accent);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  border-radius: var(--radius-xs);

  &:hover {
    background: var(--c-accent-subtle);
    transform: rotate(20deg);
  }

  &:active {
    transform: rotate(25deg) scale(0.95);
  }

  .theme-icon {
    width: 1.25em;
    height: 1.25em;
    color: var(--c-accent);
  }
}

// Main Content
.main-content {
  flex: 1;
  padding: 0;
}

// Footer Styles
.footer {
  background: transparent;
  border-top: none;
  margin-top: 0;
  padding-top: 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--c-text-secondary);
    font-size: 0.875rem;
  }
}

.footer-links {
  display: flex;
  gap: 1.5rem;

  a {
    color: var(--c-text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--c-accent);
    }
  }
}

// Welcome Dialog Styles
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.dialog-content {
  background: var(--c-panel-bg);
  border: 1px solid var(--c-border);
  padding: 2rem;
  border-radius: 16px;
  max-width: 480px;
  width: 90%;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  transform-origin: center;
  animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dialog-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--c-text-tertiary);
  cursor: pointer;
  padding: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    color: var(--c-accent);
    transform: rotate(90deg);
  }
}

.dialog-header h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--c-text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dialog-body {
  color: var(--c-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: var(--c-accent);
  }
}

.dialog-action {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-hover) 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(214, 76, 143, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(214, 76, 143, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .nav-menu {
    gap: 1rem;

    .nav-link {
      font-size: 0.9rem;
    }
  }
  
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
</style>
