<template>
  <div class="min-h-screen">
    <nav class="navbar mx-6 mt-6 rounded-3xl">
      <div>
        <h1 class="text-xl font-bold tracking-tight text-white">Larrayne 💗.dev</h1>
        <p class="text-sm text-pink-200/80">Full-stack portfolio with personality</p>
      </div>

      <div class="flex flex-wrap gap-4 items-center">
        <router-link to="/" class="btn-outline px-4 py-2">Home</router-link>
        <router-link to="/projects" class="btn-outline px-4 py-2">Projects</router-link>
        <router-link to="/products" class="btn-outline px-4 py-2">Products</router-link>
        <router-link to="/about" class="btn-outline px-4 py-2">About</router-link>
        <router-link to="/contact" class="btn-outline px-4 py-2">Contact</router-link>
      </div>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>