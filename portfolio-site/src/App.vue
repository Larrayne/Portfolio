<template>
  <div>
    <nav class="flex justify-between items-center px-8 py-4 glass mx-6 mt-6">
      
      <h1 class="text-xl font-bold text-pink-500">
        Larrayne 💗.dev
      </h1>

      <div class="flex gap-6 text-gray-700">
        <router-link to="/" class="hover:text-pink-500 transition">Home</router-link>
        <router-link to="/projects" class="hover:text-pink-500 transition">Projects</router-link>
        <router-link to="/about" class="hover:text-pink-500 transition">Products</router-link>
        <router-link to="/about" class="hover:text-pink-500 transition">About</router-link>
        <router-link to="/contact" class="hover:text-pink-500 transition">Contact</router-link>
      </div>

    </nav>

    <router-view />
  </div>
</template>