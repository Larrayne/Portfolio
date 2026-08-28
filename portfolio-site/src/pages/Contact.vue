<template>
  <section class="page">
    <div class="page-container">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-start">
        <div>
          <h1 class="title">Let’s Connect</h1>
          <p class="subtitle">I’d love to hear from you. Whether it’s a project idea, collaboration or a quick hello, I’m always open to new conversations.</p>

          <div class="glass contact-info p-8 mt-10">
            <p class="text-sm uppercase tracking-[0.18em] text-pink-200/80">Reach out</p>

            <p class="mt-4 text-white">Email</p>
            <a href="mailto:lorrainerangolo@gmail.com" class="text-muted hover:text-pink-300 transition-colors">lorrainerangolo@gmail.com</a>

            <p class="mt-6 text-white">Location</p>
            <p class="text-muted">Pretoria, South Africa</p>

            <div class="mt-8 flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="btn-outline px-4 py-2 text-sm">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="btn-outline px-4 py-2 text-sm">GitHub</a>
            </div>
          </div>
        </div>

        <div class="glass p-8 shadow-xl">
          <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <div>
              <label for="contact-name" class="block text-sm text-pink-100 mb-2">Name</label>
              <input id="contact-name" v-model="form.name" type="text" class="input-field" placeholder="Your Name" />
            </div>

            <div>
              <label for="contact-email" class="block text-sm text-pink-100 mb-2">Email</label>
              <input id="contact-email" v-model="form.email" type="email" class="input-field" placeholder="you@example.com" />
            </div>

            <div>
              <label for="contact-message" class="block text-sm text-pink-100 mb-2">Message</label>
              <textarea id="contact-message" v-model="form.message" class="input-field min-h-[140px]" placeholder="Tell me about your project"></textarea>
            </div>

            <button type="submit" class="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="popup.visible" :class="['status-popup', popup.type]" role="status" aria-live="polite">
      <strong>{{ popup.title }}</strong>
      <span>{{ popup.message }}</span>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const popup = reactive({
  visible: false,
  type: 'success',
  title: 'Message sent',
  message: 'Thanks! Your message is ready to go.'
})

const handleSubmit = () => {
  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())

  popup.type = isValid ? 'success' : 'error'
  popup.title = isValid ? 'Message sent' : 'Message not sent'
  popup.message = isValid
    ? 'Thanks! I will get back to you soon.'
    : 'Please fill in your name, a valid email, and a short message.'
  popup.visible = true

  window.setTimeout(() => {
    popup.visible = false
  }, 2800)
}
</script>