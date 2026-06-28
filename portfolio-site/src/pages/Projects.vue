<script setup>
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A polished personal brand site with Vue, Tailwind, and smooth page transitions.',
    tags: ['Vue', 'Tailwind', 'Design'],
  },
  {
    title: 'Task Manager',
    description: 'A productivity app built with Vue and .NET to organize work and automate tasks.',
    tags: ['Vue', '.NET', 'API'],
  },
  {
    title: 'Shop Experience',
    description: 'A lightweight product showcase with fast interactions and mobile-first layout.',
    tags: ['Vue', 'UI', 'E-commerce'],
  },
]
</script>

<template>
  <section class="page">
    <div class="page-container">
      <div class="glass p-10">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 class="title">Featured Projects</h1>
            <p class="subtitle">A selection of recent builds that combine polished UI with solid frontend architecture.</p>
          </div>
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-3 mt-10">
        <div v-for="project in projects" :key="project.title" class="glass project-card p-8 hover:-translate-y-2 transition-transform duration-300">
          <h2 class="text-2xl font-semibold text-white">{{ project.title }}</h2>
          <p class="text-muted mt-3">{{ project.description }}</p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>