<script setup>
const skills = ['Vue', 'C#', '.NET', 'Tailwind', 'Azure', 'Testing', 'DevOps']
const strengths = [
  { label: 'Design-led development', value: 'Intuitive layouts and polished visual language' },
  { label: 'Reliable engineering', value: 'Component-driven code with reusable patterns' },
  { label: 'Growth mindset', value: 'Iterative improvements and user-focused updates' },
]
</script>

<template>
  <section class="page">
    <div class="page-container">
      <div class="glass p-10">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-start">
          <div>
            <h1 class="title">About Me</h1>
            <p class="subtitle max-w-2xl">
              I’m a software developer who blends frontend polish with backend stability.
              My work is motivated by beautiful interactions, approachable experiences, and code that grows with the product.
            </p>

            <div class="mt-10 grid gap-4 sm:grid-cols-2">
              <div v-for="skill in skills" :key="skill" class="skill-pill">{{ skill }}</div>
            </div>
          </div>

          <div class="glass p-8 shadow-xl">
            <h2 class="text-2xl font-semibold mb-5">What I bring</h2>
            <div class="space-y-4">
              <div v-for="item in strengths" :key="item.label" class="strength-block">
                <p class="font-semibold">{{ item.label }}</p>
                <p class="text-muted mt-1">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>