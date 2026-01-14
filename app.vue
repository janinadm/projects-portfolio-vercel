<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <nav class="navbar">
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
          <img v-if="isDark" src="/icons/sun.svg" alt="Light mode" class="theme-icon" />
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

const isDark = ref(false)
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
  const theme = localStorage.getItem('theme') || 'light'
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
  background: var(--c-panel-bg);
  border-top: 1px solid var(--c-border);
  margin-top: 4rem;
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

/* Welcome Dialog Styles */
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
  background: var(--c-bg-primary);
  border-radius: 12px;
  padding: 2rem;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: slideUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  border: 1px solid var(--c-border);
}

.dialog-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--c-text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--c-accent);
  }
}

.dialog-header {
  margin-bottom: 1rem;

  h2 {
    font-size: 1.75rem;
    color: var(--c-text-primary);
    margin: 0;
  }
}

.dialog-body {
  margin-bottom: 1.5rem;

  p {
    font-size: 0.95rem;
    color: var(--c-text-secondary);
    line-height: 1.6;
    margin: 0 0 0.75rem 0;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      color: var(--c-accent);
      font-weight: 600;
    }
  }
}

.dialog-action {
  width: 100%;
  padding: 0.85rem;
  background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-hover) 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(214, 76, 143, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(214, 76, 143, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Responsive
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .nav-menu {
    gap: 1rem;
    font-size: 0.9rem;
  }

  .nav-logo {
    font-size: 1.25rem;
  }

  .dialog-content {
    padding: 1.5rem;
  }

  .dialog-header h2 {
    font-size: 1.5rem;
  }

  .dialog-body p {
    font-size: 0.95rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}

// Link styles for NuxtLink
a {
  color: var(--c-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
