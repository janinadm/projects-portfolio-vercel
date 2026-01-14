<template>
  <div class="contact-page">
    <div class="contact-hero">
      <h1>Get In Touch</h1>
      <p>
        I'm always interested in hearing about new projects and opportunities. 
        Feel free to reach out!
      </p>
    </div>

    <div class="contact-container">
      <div class="contact-form-section">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              placeholder="Project inquiry"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Tell me about your project..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <div v-if="submitMessage" :class="['submit-message', submitStatus]">
          {{ submitMessage }}
        </div>
      </div>

      <div class="contact-info-section">
        <h2>Other Ways to Connect</h2>
        <div class="contact-methods">
          <a href="mailto:jaanina.drbtu@gmail.com" class="contact-method">
            <span class="icon gmail" aria-hidden="true">
              <img src="/icons/gmail.svg" alt="Gmail" class="icon-img" />
            </span>
            <div>
              <h3>Email</h3>
              <p>jaanina.drbtu@gmail.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/janina-dorobantu-b204b9192/" target="_blank" rel="noopener" class="contact-method">
            <span class="icon linkedin" aria-hidden="true">
              <FontAwesomeIcon :icon="['fab','linkedin']" />
            </span>
            <div>
              <h3>LinkedIn</h3>
              <p>LinkedIn Profile</p>
            </div>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener" class="contact-method">
            <span class="icon github" aria-hidden="true">
              <FontAwesomeIcon :icon="['fab','github']" />
            </span>
            <div>
              <h3>GitHub</h3>
              <p>My Projects</p>
            </div>
          </a>

          <a href="https://wa.me/34628946280" target="_blank" rel="noopener" class="contact-method">
            <span class="icon whatsapp" aria-hidden="true">
              <FontAwesomeIcon :icon="['fab','whatsapp']" />
            </span>
            <div>
              <h3>WhatsApp</h3>
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

definePageMeta({
  layout: 'default',
});

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

    submitMessage.value = 'Thank you! I\'ll get back to you soon.';
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
  background: var(--c-panel-bg);
  padding: 2rem;
  border: 1px solid var(--c-border);
  border-radius: 8px;
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
    border-radius: 4px;
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
  border-radius: 4px;
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
  border-radius: 4px;
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
  gap: 1rem;
  padding: 1rem;
  background: var(--c-panel-bg);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--c-accent);
    background: var(--c-surface-hover);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    min-width: 50px;
  }

  /* Per-icon brand colors and WhatsApp circular background */
  .icon.gmail {
    color: #DB4437;
  }

  .icon.linkedin {
    color: #0A66C2;
  }

  .icon.github {
    color: #111111;
  }

  .icon.whatsapp {
    color: #25D366;
  }

  .icon svg {
    width: 1.1em;
    height: 1.1em;
  }

  .icon-img {
    width: 1.1em;
    height: 1.1em;
    display: block;
  }

  h3 {
    font-size: 0.95rem;
    color: var(--c-text-primary);
    margin: 0 0 0.25rem 0;
  }

  p {
    font-size: 0.85rem;
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
</style>
