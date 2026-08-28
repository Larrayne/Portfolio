<template>
  <section class="page">
    <div class="page-container">
      <div class="glass p-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <div class="badge">QA • Software Developer </div>

          <h1 class="title mt-6">Hi, I'm Larrayne 👩🏽‍💻</h1>

          <p class="subtitle mt-4">
            I build clean, memorable digital experiences with Vue, .NET, and modern design systems.
            My focus is on delightful visuals, smooth interactions, and polished user journeys.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <router-link to="/projects" class="btn-primary">View Projects</router-link>
            <router-link to="/contact" class="btn-outline">Contact Me</router-link>
          </div>
        </div>

        <div class="stats-grid">
          <div class="hero-visual p-8">
            <div class="hero-accent" aria-hidden="true"></div>
            <div class="hero-visual-card">
              <span class="text-sm uppercase tracking-[0.24em] text-pink-100/80">Tech stack</span>
              <h2 class="mt-3 text-xl font-semibold text-white">Tools I work with</h2>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="tag">Vue 3</span>
                <span class="tag">.NET 8</span>
                <span class="tag">C#</span>
                <span class="tag">Tailwind</span>
                <span class="tag">Vite</span>
                <span class="tag">SQL</span>
                <span class="tag">Docker</span>
                <span class="tag">CI/CD</span>
              </div>
            </div>

            <div class="mt-8 grid gap-4">
              <div class="hero-stat-card">
                <p class="font-semibold text-xl text-white">8+</p>
                <p class="text-muted mt-1">Projects on GitHub</p>
              </div>
              <div class="hero-stat-card">
                <p class="font-semibold text-xl text-white">3+</p>
                <p class="text-muted mt-1">Years experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div class="feature-card text-left">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>
          </div>
          <h3>Clean UI</h3>
          <p>Interfaces that feel modern, warm, and easy to use on every screen.</p>
        </div>
        <div class="feature-card text-left">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
          </div>
          <h3>Fast frontend</h3>
          <p>Optimized builds, smooth transitions, and responsive layouts across devices.</p>
        </div>
        <div class="feature-card text-left">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
          </div>
          <h3>Backend-ready</h3>
          <p>Full-stack solutions built with maintainable APIs, hosting and automation in mind.</p>
        </div>
      </div>
    </div>
  </section>
</template>