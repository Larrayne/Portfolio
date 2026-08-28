<script setup>
const projects = [
  {
    title: 'Portfolio Site',
    description: 'Full-stack personal portfolio with a Vue 3 frontend, .NET backend, and CI/CD pipeline. Features glassmorphism UI, Vue Router, and Tailwind styling.',
    tags: ['Vue', 'C#', '.NET', 'Tailwind', 'CI/CD'],
    github: 'https://github.com/Larrayne/Portfolio',
    live: null,
  },
  {
    title: 'Quasar Journal',
    description: 'A full-featured journal app with Firebase authentication, Firestore, theme customisation, and an integrated AI chat assistant.',
    tags: ['Quasar', 'Vue', 'Firebase', 'Firestore'],
    github: 'https://github.com/Larrayne/quasar-moneyballs',
    live: null,
  },
  {
    title: 'PC Setup Assistant',
    description: 'A Node.js CLI that launches your entire development environment in one command. Powered by Inquirer with a GitHub Actions CI pipeline across Node 20 and 22.',
    tags: ['Node.js', 'CLI', 'JavaScript', 'CI/CD'],
    github: 'https://github.com/Larrayne/PC-Setup-Assistant',
    live: null,
  },
  {
    title: 'Waste Sorting App',
    description: 'Spring Boot REST API for managing waste categories, disposal guidelines, and recycling tips — with full CRUD endpoints and input validation.',
    tags: ['Java', 'Spring Boot', 'REST API'],
    github: 'https://github.com/Larrayne/waste_SortingApp',
    live: null,
  },
  {
    title: 'Cycle Tracker',
    description: 'A health tracking app for monitoring menstruation cycles, built with a focus on privacy and a clean, approachable UI.',
    tags: ['Health', 'Tracking', 'UI'],
    github: 'https://github.com/Larrayne/menstruation_Cycle-',
    live: null,
  },
  {
    title: 'Number Guess Game',
    description: 'A browser-based number guessing game built with HTML and CSS, with a GitHub Actions pipeline for automated deployment.',
    tags: ['HTML', 'CSS', 'JavaScript', 'CI/CD'],
    github: 'https://github.com/Larrayne/number_Guess_Game',
    live: null,
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Console-based Rock Paper Scissors game built in C# .NET. First player to reach 3 points wins, with score tracking and replay support.',
    tags: ['C#', '.NET', 'Console'],
    github: 'https://github.com/Larrayne/RockPprScissor',
    live: null,
  },
  {
    title: 'Simple Login',
    description: 'A clean login page built with HTML and CSS, paired with a JavaScript number guessing game — one of the first full web projects.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Larrayne/simpleLogin',
    live: null,
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

          <div class="mt-6 flex gap-3">
            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="btn-outline px-4 py-2 text-sm">GitHub →</a>
            <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer" class="btn-primary px-4 py-2 text-sm">Live</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>