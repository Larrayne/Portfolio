<template>
  <section class="page">
    <div class="page-container">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-start">
        <div>
          <h1 class="title">Let’s Connect</h1>
          <p class="subtitle">I’d love to hear from you. Whether it’s a project idea, collaboration or a quick hello, I’m always open to new conversations.</p>

          <div class="glass contact-info p-8 mt-10">
            <p class="contact-accent">Reach out</p>

            <p class="mt-4 contact-key">Email</p>
            <a href="mailto:lorrainerangolo@gmail.com" class="contact-email">lorrainerangolo@gmail.com</a>

            <p class="mt-6 contact-key">Location</p>
            <p class="text-muted">Pretoria, South Africa</p>

            <a href="https://github.com/Larrayne" target="_blank" rel="noopener noreferrer" class="btn-outline mt-8 inline-flex px-4 py-2 text-sm">GitHub</a>
          </div>
        </div>

        <div class="glass p-8 shadow-xl">
          <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <div>
              <label for="contact-name" class="contact-label">Name</label>
              <input id="contact-name" v-model="form.name" type="text" class="input-field" placeholder="Your Name" autocomplete="name" required />
            </div>

            <div>
              <label for="contact-email" class="contact-label">Email</label>
              <input id="contact-email" v-model="form.email" type="email" class="input-field" placeholder="you@example.com" autocomplete="email" required />
            </div>

            <div>
              <label for="contact-message" class="contact-label">Message</label>
              <textarea id="contact-message" v-model="form.message" class="input-field min-h-[140px]" placeholder="Tell me about your project" required></textarea>
            </div>

            <button type="submit" class="btn-primary w-full">Prepare Email</button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="popup.visible" :class="['status-popup', popup.type]" role="status" aria-live="polite">
      <strong>{{ popup.title }}</strong>
      <span>{{ popup.message }}</span>
      <a v-if="popup.emailDraftHref" :href="popup.emailDraftHref" class="underline">Open email draft</a>
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
  title: '',
  message: '',
  emailDraftHref: ''
})

const handleSubmit = () => {
  const isValid = Boolean(
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  )

  popup.visible = true
  popup.type = isValid ? 'success' : 'error'
  popup.title = isValid ? 'Email draft ready' : 'Check your details'
  popup.message = isValid
    ? 'Your email app will open with this message. Review and send it there.'
    : 'Please fill in your name, a valid email, and a short message.'

  popup.emailDraftHref = isValid
    ? `mailto:lorrainerangolo@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`)}&body=${encodeURIComponent(`${form.message.trim()}\n\nReply to: ${form.email.trim()}`)}`
    : ''
}
</script>