<template>
  <section class="page">
    <div class="page-container">
      <div class="glass p-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <div class="badge">QA • Software Developer •  DevOps</div>

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
              <span class="text-sm uppercase tracking-[0.24em] text-pink-100/80">Featured panel</span>
              <h2 class="mt-4 text-3xl font-semibold text-white">A polished brand experience</h2>
              <p class="mt-3 text-muted">A modern portfolio hero surface with depth, soft gradients, and glass-inspired contrast.</p>
            </div>

            <div class="mt-8 grid gap-4">
              <div class="hero-stat-card">
                <p class="font-semibold text-xl text-white">12+</p>
                <p class="text-muted mt-1">Project highlights</p>
              </div>
              <div class="hero-stat-card">
                <p class="font-semibold text-xl text-white">8</p>
                <p class="text-muted mt-1">Core skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div class="feature-card text-left">
          <h3>Clean UI</h3>
          <p>Interfaces that feel modern, warm, and easy to use on every screen.</p>
        </div>
        <div class="feature-card text-left">
          <h3>Fast frontend</h3>
          <p>Optimized builds, smooth transitions, and responsive layouts across devices.</p>
        </div>
        <div class="feature-card text-left">
          <h3>Backend-ready</h3>
          <p>Full-stack solutions built with maintainable APIs, hosting and automation in mind.</p>
        </div>
      </div>
    </div>
  </section>
</template>