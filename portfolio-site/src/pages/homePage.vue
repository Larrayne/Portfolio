<template>
  <div class="page text-center">
    
    <div class="inline-block px-4 py-1 mb-4 rounded-full glass text-sm">
      Software Developer • QA • DevOps
    </div>

    <h1 class="title">
      Hi, I'm Larrayne 👩🏽‍💻
    </h1>

    <p class="subtitle">
      I build clean, elegant, and functional digital experiences.
    </p>

    <div class="mt-10 flex justify-center gap-4">
      
      <router-link 
        to="/projects"
        class="px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition shadow-lg">
        View Projects
      </router-link>

      <router-link 
        to="/contact"
        class="px-6 py-3 rounded-xl border border-pink-400 text-pink-500 hover:bg-pink-100 transition">
        Contact Me
      </router-link>

    </div>

  </div>
</template>