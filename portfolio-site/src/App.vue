<template>
  <div class="min-h-screen">
    <header class="navbar mx-6 mt-6 rounded-3xl">
      <RouterLink to="/" class="brand" aria-label="Larrayne, home" @click="closeMenu">
        <span class="brand-title">Larrayne<span class="brand-accent">.dev</span></span>
        <span class="brand-subtitle">QA & software developer</span>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>