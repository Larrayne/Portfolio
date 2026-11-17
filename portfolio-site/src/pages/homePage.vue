<template>
  <section class="page home-page">
    <div class="page-container">
      <div class="hero-layout">
        <div class="hero-copy">
          <p class="hero-index"><span aria-hidden="true">✦</span> Portfolio / QA & software development</p>
          <h1 class="title">Thoughtful <em>by design.</em></h1>
          <p class="hero-statement">
            Hello, I’m Larrayne.
          </p>
          <p class="subtitle">
            I bring a QA mindset to software development, creating thoughtful digital experiences and reliable code.
          </p>
          <p class="hero-stack">Vue / C# / .NET / Testing / CI/CD</p>

          <div class="hero-actions">
            <router-link to="/projects" class="btn-primary">Explore my work <span aria-hidden="true">↗</span></router-link>
            <router-link to="/contact" class="hero-text-link">Let’s connect <span aria-hidden="true">→</span></router-link>
          </div>
          <p class="hero-location">Based in Pretoria, South Africa <span aria-hidden="true">✦</span></p>
        </div>

        <div class="hero-art" aria-hidden="true">
          <div class="art-frame">
            <div class="art-frame-top"><span>L / DEV</span><span>CREATIVE & TECHNICAL</span></div>
            <div class="art-orbit art-orbit-one"></div>
            <div class="art-orbit art-orbit-two"></div>
            <span class="art-monogram">L<span>.</span></span>
            <span class="art-star">✦</span>
            <span class="art-star art-star-small">✧</span>
            <div class="art-frame-bottom"><span>THE DETAILS MATTER</span><span>01 / 03</span></div>
          </div>
          <span class="art-caption">A little creativity. A lot of intention.</span>
        </div>
      </div>

      <div class="expertise-strip" aria-label="Areas of expertise">
        <span>Quality assurance</span><span aria-hidden="true">✦</span>
        <span>Software development</span><span aria-hidden="true">✦</span>
        <span>Thoughtful experiences</span>
      </div>

      <section class="selected-work" aria-labelledby="selected-work-title">
        <div class="selected-work-heading">
          <div>
            <p class="section-eyebrow">The work / A closer look</p>
            <h2 id="selected-work-title">Made with <em>intention.</em></h2>
          </div>
          <router-link to="/projects" class="selected-work-link">All projects <span aria-hidden="true">↗</span></router-link>
        </div>
        <div class="work-preview-grid">
          <router-link to="/projects" class="work-preview work-preview-portfolio">
            <span class="work-number">01 / WEB & QUALITY</span>
            <span class="work-art work-art-interface" aria-hidden="true"><span>L<span>.</span></span></span>
            <span class="work-name">Portfolio Site <span aria-hidden="true">↗</span></span>
            <span class="work-caption">Vue · Testing · CI/CD</span>
          </router-link>
          <router-link to="/projects" class="work-preview work-preview-api">
            <span class="work-number">02 / BACKEND</span>
            <span class="work-art work-art-api" aria-hidden="true"><span>{ }</span></span>
            <span class="work-name">Waste Sorting App <span aria-hidden="true">↗</span></span>
            <span class="work-caption">Java · Spring Boot · REST API</span>
          </router-link>
          <router-link to="/projects" class="work-preview work-preview-tools">
            <span class="work-number">03 / DEVELOPER TOOLS</span>
            <span class="work-art work-art-tools" aria-hidden="true"><span>_</span></span>
            <span class="work-name">PC Setup Assistant <span aria-hidden="true">↗</span></span>
            <span class="work-caption">Node.js · CLI · CI/CD</span>
          </router-link>
        </div>
      </section>

      <section class="mini-game glass" aria-labelledby="mini-game-title">
        <div class="mini-game-copy">
          <p class="section-eyebrow">Take a quick break</p>
          <h2 id="mini-game-title">Guess my number</h2>
          <p>I'm thinking of a number from 1 to 20. Can you find it?</p>
        </div>
        <form class="mini-game-form" @submit.prevent="checkGuess">
          <label for="number-guess">Your guess</label>
          <div class="mini-game-controls">
            <input
              id="number-guess"
              v-model="guess"
              type="number"
              min="1"
              max="20"
              inputmode="numeric"
              placeholder="1–20"
              :disabled="gameWon"
              aria-describedby="game-feedback"
            />
            <button type="submit" class="btn-primary" :disabled="gameWon">Guess</button>
            <button v-if="gameWon" type="button" class="btn-outline" @click="startNewGame">Play again</button>
          </div>
          <p id="game-feedback" class="game-feedback" :class="{ 'game-feedback-won': gameWon }" aria-live="polite">
            {{ gameMessage }}
          </p>
        </form>
      </section>

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
          <h3>Quality by design</h3>
          <p>A QA mindset, automated tests and iteration to help make changes dependable.</p>
        </div>
        <div class="feature-card text-left">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
          </div>
          <h3>Engineering, end to end</h3>
          <p>From reusable interfaces to REST APIs and maintainable backend code.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const makeTarget = () => Math.floor(Math.random() * 20) + 1

const guess = ref('')
const attempts = ref(0)
const targetNumber = ref(makeTarget())
const gameWon = ref(false)
const gameMessage = ref('Pick a number from 1 to 20.')

const checkGuess = () => {
  const value = Number(guess.value)

  if (!Number.isInteger(value) || value < 1 || value > 20) {
    gameMessage.value = 'Enter a whole number from 1 to 20.'
    return
  }

  attempts.value += 1

  if (value === targetNumber.value) {
    gameWon.value = true
    gameMessage.value = `You got it in ${attempts.value} ${attempts.value === 1 ? 'guess' : 'guesses'}! Nice one.`
  } else {
    gameMessage.value = value < targetNumber.value ? 'A little higher! Try again.' : 'A little lower! Try again.'
  }

  guess.value = ''
}

const startNewGame = () => {
  targetNumber.value = makeTarget()
  guess.value = ''
  attempts.value = 0
  gameWon.value = false
  gameMessage.value = 'Pick a number from 1 to 20.'
}
</script>