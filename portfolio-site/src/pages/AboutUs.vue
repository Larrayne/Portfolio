<script setup>
const skillGroups = [
  { label: 'Frontend', skills: ['Vue', 'Tailwind'] },
  { label: 'Backend', skills: ['C#', '.NET'] },
  { label: 'Quality & exploration', skills: ['Testing', 'Agentic AI'] },
]
const strengths = [
  { label: 'Design with purpose', value: 'Build clear, approachable interfaces with attention to the details.' },
  { label: 'Think across the stack', value: 'Bring frontend experiences and backend foundations together.' },
  { label: 'Keep improving', value: 'Learn through iteration, testing, and thoughtful feedback.' },
]
</script>

<template>
  <section class="page">
    <div class="page-container">
      <div class="about-layout">
        <div class="about-intro glass">
          <p class="section-eyebrow">A little about me</p>
          <h1 class="title">Good software is thoughtful software.</h1>
          <p class="subtitle">
            I’m Larrayne, a QA and software developer in Pretoria, South Africa. I’m interested in the full experience of building a product: how it feels to use, how it works behind the scenes, and how confidently it can change over time.
          </p>
          <RouterLink to="/contact" class="btn-primary about-cta">Let’s connect <span aria-hidden="true">→</span></RouterLink>
        </div>

        <div class="about-details">
          <section class="about-panel glass" aria-labelledby="skills-heading">
            <p class="section-eyebrow">Tools & skills</p>
            <h2 id="skills-heading" class="section-title">What I work with</h2>
            <div class="skill-groups">
              <div v-for="group in skillGroups" :key="group.label" class="skill-group">
                <h3>{{ group.label }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in group.skills" :key="skill" class="skill-pill">{{ skill }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="about-panel glass" aria-labelledby="approach-heading">
            <p class="section-eyebrow">My approach</p>
            <h2 id="approach-heading" class="section-title">What I bring</h2>
            <div class="strength-list">
              <div v-for="(item, index) in strengths" :key="item.label" class="strength-item">
                <span class="strength-number" aria-hidden="true">0{{ index + 1 }}</span>
                <div>
                  <h3>{{ item.label }}</h3>
                  <p>{{ item.value }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>