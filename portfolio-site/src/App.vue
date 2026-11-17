<template>
  <div class="min-h-screen">
    <header class="navbar">
      <RouterLink to="/" class="brand" aria-label="Larrayne, home" @click="closeMenu">
        <svg class="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path class="brand-wings" d="M24 33C19 27 9 23 10 14c.5-5 5-6 9-2 2 2 4 5 5 9 1-4 3-7 5-9 4-4 8.5-3 9 2 1 9-9 13-14 19Z" stroke="currentColor" stroke-width="1.25" />
          <path d="M20 14v20h10M17 37h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="brand-copy">
          <span class="brand-title">Larrayne<span class="brand-accent">.dev</span></span>
          <span class="brand-subtitle">QA & software developer</span>
        </span>
      </RouterLink>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="menuOpen = !menuOpen"
      >
        <span aria-hidden="true">{{ menuOpen ? 'Close' : 'Menu' }}</span>
      </button>

      <nav
        id="primary-navigation"
        class="nav-menu"
        :class="{ 'is-open': menuOpen }"
        aria-label="Main navigation"
      >
        <RouterLink to="/" class="nav-link" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/projects" class="nav-link" @click="closeMenu">Projects</RouterLink>
        <RouterLink to="/about" class="nav-link" @click="closeMenu">About</RouterLink>
        <RouterLink to="/contact" class="nav-link nav-link-contact" @click="closeMenu">Contact</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <footer class="site-footer">
      <div>
        <p class="footer-kicker">Thoughtful by design <span aria-hidden="true">✦</span></p>
        <p class="footer-brand">Larrayne<span>.dev</span></p>
        <p class="footer-note">QA & software development · Pretoria, South Africa</p>
      </div>
      <div class="footer-links">
        <RouterLink to="/projects">Explore my work</RouterLink>
        <RouterLink to="/contact">Get in touch</RouterLink>
        <a href="https://github.com/Larrayne" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>