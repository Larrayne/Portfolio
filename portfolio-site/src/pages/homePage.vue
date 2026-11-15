<template>
  <section class="page home-page">
    <div class="page-container">
      <div class="hero-layout">
        <div class="hero-copy">
          <div class="badge"><span class="availability-dot" aria-hidden="true"></span> QA & software developer</div>

          <h1 class="title mt-6">Hi, I’m Larrayne.</h1>

          <p class="hero-statement">
            I build thoughtful digital experiences, bringing together clear interfaces and reliable code.
          </p>
          <p class="subtitle">
            I work across frontend and backend, with Vue, C# and .NET. I care about the details that make software easier to use and maintain.
          </p>

          <div class="hero-actions">
            <router-link to="/projects" class="btn-primary">View Projects</router-link>
            <router-link to="/contact" class="btn-outline">Contact Me</router-link>
          </div>

          <p class="hero-location"><span aria-hidden="true">⌖</span> Pretoria, South Africa</p>
        </div>

        <div class="hero-visual">
          <div class="hero-accent" aria-hidden="true"></div>
          <div class="hero-visual-card">
            <p class="hero-card-kicker">The toolkit</p>
            <h2>Ideas to implementation.</h2>
            <p class="text-muted">A few of the tools I use to build and test.</p>

            <div class="tool-group">
              <span class="tool-group-label">Frontend</span>
              <div class="flex flex-wrap gap-2">
                <span class="tag">Vue 3</span>
                <span class="tag">Tailwind</span>
                <span class="tag">Vite</span>
              </div>
            </div>

            <div class="tool-group">
              <span class="tool-group-label">Backend & workflow</span>
              <div class="flex flex-wrap gap-2">
                <span class="tag">C#</span>
                <span class="tag">.NET</span>
                <span class="tag">SQL</span>
                <span class="tag">Docker</span>
                <span class="tag">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-features">
        <div class="home-section-heading">
          <p class="section-eyebrow">How I work</p>
          <h2 class="section-title">Thoughtful at every layer.</h2>
        </div>

        <div class="feature-card text-left">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>
          </div>
          <h3>Clear interfaces</h3>
          <p>Approachable layouts with the details and feedback people need.</p>
        </div>
        <div class="feature-card text-left">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
          </div>
          <h3>Careful testing</h3>
          <p>Testing and iteration to help make changes dependable.</p>
        </div>
        <div class="feature-card text-left">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
          </div>
          <h3>Maintainable code</h3>
          <p>Reusable patterns and a considered approach from frontend through backend.</p>
        </div>
      </div>
    </div>
  </section>
</template>