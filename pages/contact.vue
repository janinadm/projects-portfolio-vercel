<template>
  <div class="contact-page">
    <div class="contact-hero reveal">
      <h1>{{ $t('contact.title') }}</h1>
      <p>{{ $t('contact.subtitle') }}</p>
    </div>

    <div class="contact-container reveal">
      <div class="contact-form-section">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">{{ $t('contact.name') }}</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              :placeholder="$t('contact.namePlaceholder')"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">{{ $t('contact.email') }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              :placeholder="$t('contact.emailPlaceholder')"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">{{ $t('contact.subject') }}</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              :placeholder="$t('contact.subjectPlaceholder')"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">{{ $t('contact.message') }}</label>
            <textarea
              id="message"
              v-model="form.message"
              :placeholder="$t('contact.messagePlaceholder')"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? $t('contact.sending') : $t('contact.send') }}
          </button>
        </form>

        <div v-if="submitMessage" :class="['submit-message', submitStatus]">
          {{ submitMessage }}
        </div>
      </div>

      <div class="contact-info-section">
        <h2>{{ $t('contact.otherWays') }}</h2>
        <div class="contact-methods">
          <a href="mailto:jaanina.drbtu@gmail.com" class="contact-method">
            <span class="icon gmail" aria-hidden="true">
              <img src="/icons/gmail.svg" alt="Gmail" class="icon-img" />
            </span>
            <div>
              <h3>{{ $t('contact.emailLabel') }}</h3>
              <p>jaanina.drbtu@gmail.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/janina-dorobantu-b204b9192/" target="_blank" rel="noopener" class="contact-method">
            <span class="icon linkedin" aria-hidden="true">
              <FontAwesomeIcon :icon="['fab','linkedin']" />
            </span>
            <div>
              <h3>{{ $t('contact.linkedinLabel') }}</h3>
              <p>{{ $t('contact.linkedinText') }}</p>
            </div>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener" class="contact-method">
            <span class="icon github" aria-hidden="true">
              <FontAwesomeIcon :icon="['fab','github']" />
            </span>
            <div>
              <h3>{{ $t('contact.githubLabel') }}</h3>
              <p>{{ $t('contact.githubText') }}</p>
            </div>
          </a>

          <a href="https://wa.me/34628946280" target="_blank" rel="noopener" class="contact-method">
            <span class="icon whatsapp" aria-hidden="true">
              <FontAwesomeIcon :icon="['fab','whatsapp']" />
            </span>
            <div>
              <h3>{{ $t('contact.whatsappLabel') }}</h3>
              <p>+34 628 946 280</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useScrollReveal } from '@/composables/useScrollReveal';

const { t } = useI18n();

definePageMeta({
  layout: 'default',
});

useScrollReveal();

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitMessage = ref('');
const submitStatus = ref<'success' | 'error' | ''>('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = '';

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    submitMessage.value = t('contact.successMessage');
    submitStatus.value = 'success';

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = '';
    }, 5000);
  } catch (error) {
    submitMessage.value = 'Something went wrong. Please try again.';
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped lang="scss">
.contact-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-hero {
  margin-bottom: 4rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--c-text-primary);
  }

  p {
    font-size: 1.125rem;
    color: var(--c-text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
}

.contact-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
}

.contact-form-section {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  padding: 2rem;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--glass-shadow);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--c-text-primary);
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid var(--c-border);
    border-radius: var(--radius-sm);
    font-family: inherit;
    font-size: 1rem;
    color: var(--c-text-primary);
    background: var(--c-bg-primary);
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--c-accent);
      box-shadow: 0 0 0 3px var(--c-accent-subtle);
    }

    &::placeholder {
      color: var(--c-text-tertiary);
    }
  }

  textarea {
    resize: vertical;
  }
}

.submit-btn {
  padding: 0.875rem 1.5rem;
  background: var(--c-accent);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background: var(--c-accent-hover);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    background: var(--c-accent-active);
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.submit-message {
  padding: 1rem;
  border-radius: var(--radius-sm);
  text-align: center;
  font-weight: 500;

  &.success {
    background: rgba(52, 199, 89, 0.1);
    color: #34c759;
  }

  &.error {
    background: rgba(255, 59, 48, 0.1);
    color: #ff3b30;
  }
}

.contact-info-section {
  h2 {
    font-size: 1.5rem;
    color: var(--c-text-primary);
    margin-bottom: 1.5rem;
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: var(--glass-shadow);

  &:hover {
    border-color: var(--c-accent);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(224, 168, 46, 0.1);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    min-width: 52px;
    border-radius: var(--radius-lg);
    font-size: 1.4rem;
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.1);
  }

  /* Colorful icon backgrounds */
  .icon.gmail {
    background: linear-gradient(135deg, #EA4335 0%, #FBBC05 100%);
    color: #fff;
  }

  .icon.linkedin {
    background: linear-gradient(135deg, #0A66C2 0%, #0084FF 100%);
    color: #fff;
  }

  .icon.github {
    background: linear-gradient(135deg, #333 0%, #555 100%);
    color: #fff;
  }

  .icon.whatsapp {
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    color: #fff;
  }

  .icon svg {
    width: 1.2em;
    height: 1.2em;
  }

  .icon-img {
    width: 1.3em;
    height: 1.3em;
    display: block;
    filter: brightness(0) invert(1);
  }

  h3 {
    font-size: 1rem;
    color: var(--c-text-primary);
    margin: 0 0 0.25rem 0;
    font-weight: 600;
  }

  p {
    font-size: 0.875rem;
    color: var(--c-text-secondary);
    margin: 0;
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 1rem;
  }

  .contact-hero h1 {
    font-size: 2rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-form-section {
    padding: 1.5rem;
  }
}

.contact-page {
  padding-top: 6rem; /* Space for navbar */
}
</style>
