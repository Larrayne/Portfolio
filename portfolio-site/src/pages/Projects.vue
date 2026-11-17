<script setup>
import { computed, ref } from 'vue'

const projects = [
  {
    title: 'Portfolio Site',
    type: 'Portfolio website',
    category: 'Web apps',
    description: 'A personal portfolio built with Vue 3, Vue Router, and Tailwind. Automated tests and GitHub Actions support continuous integration and deployment.',
    tags: ['Vue', 'C#', '.NET', 'Testing', 'Tailwind', 'CI/CD'],
    github: 'https://github.com/Larrayne/Portfolio',
    code: {
      path: 'portfolio-site/src/router/index.js',
      language: 'JavaScript',
      excerpt: `const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
]`,
    },
    live: null,
  },
  {
    title: 'Quasar Journal',
    type: 'Journal app',
    category: 'Web apps',
    description: 'A full-featured journal app with Firebase authentication, Firestore, theme customisation, and an integrated AI chat assistant.',
    tags: ['Quasar', 'Vue', 'Firebase', 'Firestore'],
    github: 'https://github.com/Larrayne/quasar-moneyballs',
    code: {
      path: 'src/composables/useUserPreferences.js',
      language: 'JavaScript',
      excerpt: `const DEFAULT_PREFERENCES = {
  themeColor: 'light',
  fontSize: 'medium',
  fontStyle: 'Arial',
  journalView: 'list',
};`,
    },
    live: null,
  },
  {
    title: 'PC Setup Assistant',
    type: 'Developer CLI',
    category: 'Developer tools',
    description: 'A Node.js CLI that launches your entire development environment in one command. Powered by Inquirer with a GitHub Actions CI pipeline across Node 20 and 22.',
    tags: ['Node.js', 'CLI', 'JavaScript', 'CI/CD'],
    github: 'https://github.com/Larrayne/PC-Setup-Assistant',
    code: {
      path: 'launcher.js',
      language: 'JavaScript',
      excerpt: `    const answer = await inquirer.prompt([
        {
            type:"select",
            name:"workspace",
            message:"Choose a workspace:",
            choices:[
                "Development",
                "Study",
                "Entertainment",
                "Open Everything",
                "System Information",
                "Exit"
            ]
        }
    ]);`,
    },
    live: null,
  },
  {
    title: 'Waste Sorting App',
    type: 'REST API',
    category: 'APIs',
    description: 'Spring Boot REST API for managing waste categories, disposal guidelines, and recycling tips — with full CRUD endpoints and input validation.',
    tags: ['Java', 'Spring Boot', 'REST API'],
    github: 'https://github.com/Larrayne/waste_SortingApp',
    code: {
      path: 'com.enviro.assessment.grad001.LarrayneRangolo/waste_management/src/main/java/com/enviro365/waste_management/controller/WasteManagementController.java',
      language: 'Java',
      excerpt: `    @PostMapping
    public ResponseEntity<WasteCategory> createWasteCategory(@Validated @RequestBody WasteCategory category) {
        WasteCategory createdCategory = service.save(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
    }`,
    },
    live: null,
  },
  {
    title: 'Cycle Tracker',
    type: 'Health tracking app',
    category: 'Web apps',
    description: 'A health tracking app for monitoring menstruation cycles, built with a focus on privacy and a clean, approachable UI.',
    tags: ['Health', 'Tracking', 'UI'],
    github: 'https://github.com/Larrayne/menstruation_Cycle-',
    code: {
      path: 'pythonperiod/period_tracker.py',
      language: 'Python',
      excerpt: `def next_period_date( start_date, cycle_length, period_length):
    start_date = datetime.strptime(start_date,'%Y-%m-%d')

    next_period_start = start_date + timedelta(days=cycle_length)
    next_period_end = next_period_start + timedelta(days=period_length-1)

    return next_period_start.strftime('%Y-%m-%d'), next_period_end.strftime('%Y-%m-%d')`,
    },
    live: null,
  },
  {
    title: 'Number Guess Game',
    type: 'Browser game',
    category: 'Games',
    description: 'A browser-based number guessing game built with HTML and CSS, with a GitHub Actions pipeline for automated deployment.',
    tags: ['HTML', 'CSS', 'JavaScript', 'CI/CD'],
    github: 'https://github.com/Larrayne/number_Guess_Game',
    code: {
      path: 'website/guess.html',
      language: 'JavaScript',
      excerpt: `            if (isNaN(guess) || guess < 1 || guess > 100) {
                message.textContent = 'Please enter a valid number between 1 and 100.';
                return;
            }

            attempts++;`,
    },
    live: null,
  },
  {
    title: 'Rock Paper Scissors',
    type: 'Desktop game',
    category: 'Games',
    description: 'A Rock Paper Scissors desktop game built with C# and Windows Forms. First to reach 3 points wins, with score tracking and replay support.',
    tags: ['C#', '.NET', 'Windows Forms'],
    github: 'https://github.com/Larrayne/RockPprScissor',
    code: {
      path: 'RockPprScc/Program.cs',
      language: 'C#',
      excerpt: `    [STAThread]
    private static void Main()
    {
        ApplicationConfiguration.Initialize();
        Application.Run(new MainForm());
    }`,
    },
    live: null,
  },
  {
    title: 'Simple Login',
    type: 'Web project',
    category: 'Web apps',
    description: 'A clean login page built with HTML and CSS, paired with a JavaScript number guessing game — one of the first full web projects.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Larrayne/simpleLogin',
    code: {
      path: 'guess.html',
      language: 'JavaScript',
      excerpt: `            if (guess === randomNumber) {
                message.textContent = \`Congratulations! You guessed the correct number \${randomNumber} in \${attempts} attempts.\`;
            } else if (guess < randomNumber) {
                message.textContent = 'Too low. Try again.';
            } else {
                message.textContent = 'Too high. Try again.';
            }`,
    },
    live: null,
  },
  {
    title: 'CareerGPS',
    type: 'Career guidance platform',
    category: 'Web apps',
    description: 'An AI-powered career guidance platform for exploring career paths and building a clearer direction from your experience and skills.',
    tags: ['Next.js', 'React', 'TypeScript', 'PDF.js', 'Career tools'],
    github: 'https://github.com/Larrayne/CareerGPS',
    code: {
      path: 'app/page.tsx',
      language: 'TypeScript',
      excerpt: `const [profile, setProfile] = useState(() => analyzeProfile(sampleCv));
const [selectedDestination, setSelectedDestination] = useState("I don't know yet");`,
    },
    live: null,
  },
  {
    title: 'With Love, Always',
    type: 'Candle gift website',
    category: 'Web apps',
    description: 'A front-end candle and gift storefront concept with product browsing and personalised gift options. The enquiry form is a prototype; payment is not enabled.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
    github: 'https://github.com/Larrayne/With_Love.Always',
    code: {
      path: 'index.html',
      language: 'HTML',
      excerpt: `<section class="hero" id="home">
  <div class="hero-copy">
    <h1>A little light.<br><em>A lot of love.</em></h1>
  </div>
</section>`,
    },
    live: null,
  },
  {
    title: 'Waste Management Assessment',
    type: 'Spring Boot API',
    category: 'APIs',
    description: 'A Java REST API for managing waste categories, disposal guidance, and recycling tips, with CRUD operations and input validation.',
    tags: ['Java', 'Spring Boot', 'REST API', 'Validation'],
    github: 'https://github.com/Larrayne/com.enviro.assessment.grad001.LarrayneRangolo',
    code: {
      path: 'com.enviro.assessment.grad001.LarrayneRangolo/waste_management/src/main/java/com/enviro365/waste_management/controller/WasteManagementController.java',
      language: 'Java',
      excerpt: `@PostMapping
public ResponseEntity<WasteCategory> createWasteCategory(@Validated @RequestBody WasteCategory category) {
    WasteCategory createdCategory = service.save(category);
    return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
}`,
    },
    live: null,
  },
  {
    title: 'Our Little Universe',
    type: 'Interactive experience',
    category: 'Web apps',
    description: 'A playful, heart-themed interactive website that welcomes visitors into a sequence of questions and responses.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Interactive'],
    github: 'https://github.com/Larrayne/our_little_universe',
    code: {
      path: 'index.html',
      language: 'HTML',
      excerpt: `<main class="welcome" id="welcomeScreen">
  <h1>Welcome to our little universe 💜</h1>
  <button class="heart-button" id="heartButton">❤️</button>
</main>`,
    },
    live: null,
  },
  {
    title: 'Digital Scrapbook',
    type: 'Memory book website',
    category: 'Web apps',
    description: 'A scrapbook-style interactive memory book with a photo cover and pages for collecting shared memories.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web design'],
    github: 'https://github.com/Larrayne/digital_scrapbook',
    code: {
      path: 'index.html',
      language: 'HTML',
      excerpt: `<section class="cover">
  <p class="small-title">A LITTLE BOOK OF</p>
  <h1>Our<br>Memories</h1>
  <button id="openBook">Open Our Book 📖</button>
</section>`,
    },
    live: null,
  },
  {
    title: 'HerGuard',
    type: 'Personal safety app',
    category: 'Web apps',
    description: 'A personal safety app concept with safe route planning, real-time alerts, community reporting, and emergency contacts.',
    tags: ['React', 'Firebase', 'Maps', 'Personal safety'],
    github: 'https://github.com/Larrayne/HerGuard',
    code: {
      path: 'Frontend/src/Home.js',
      language: 'JavaScript',
      excerpt: `<ul>
  <li>Safe Route Planning</li>
  <li>Real-Time Alerts</li>
  <li>Community Reporting</li>
  <li>Emergency Contacts</li>
</ul>`,
    },
    live: null,
  },
  {
    title: 'ChatBotAi',
    type: 'AI chat prototype',
    category: 'Web apps',
    description: 'A small Flask chat application with a browser interface and an OpenAI-powered response endpoint.',
    tags: ['Python', 'Flask', 'OpenAI', 'REST API'],
    github: 'https://github.com/Larrayne/ChatBotAi',
    code: {
      path: 'app.py',
      language: 'Python',
      excerpt: `@app.route('/api', methods=['POST'])
def chat():
    data = request.json
    message = data.get('message')
    if not message:
        return jsonify({'error': 'No message provided'}), 400`,
    },
    live: null,
  },
]

const categories = ['All projects', 'Web apps', 'Developer tools', 'APIs', 'Games']
const selectedCategory = ref('All projects')
const searchQuery = ref('')
const surprisePick = ref(null)

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return projects.filter((project) => {
    const matchesCategory = selectedCategory.value === 'All projects' ||
      project.category === selectedCategory.value
    const searchableText = [project.title, project.type, project.description, ...project.tags]
      .join(' ')
      .toLowerCase()

    return matchesCategory && searchableText.includes(query)
  })
})

const selectCategory = (category) => {
  selectedCategory.value = category
}

const isPicked = (project) => surprisePick.value?.title === project.title

const chooseSurprise = () => {
  const picks = filteredProjects.value.filter((project) => project.title !== surprisePick.value?.title)
  const choices = picks.length ? picks : filteredProjects.value

  if (!choices.length) return

  surprisePick.value = choices[Math.floor(Math.random() * choices.length)]
}
</script>

<template>
  <section class="page">
    <div class="page-container">
      <div class="glass project-intro p-10">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="section-eyebrow">Selected work / 01—15</p>
            <h1 class="title">Projects</h1>
            <p class="subtitle">A closer look at the interfaces, APIs, automated tests, and experiments behind the work. Find a favorite or let curiosity choose.</p>
          </div>
        </div>
      </div>

      <div class="project-explorer">
        <div class="project-filter-row">
          <div class="project-filters" role="group" aria-label="Filter projects by category">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="filter-chip"
              :class="{ 'filter-chip-active': selectedCategory === category }"
              :aria-pressed="selectedCategory === category"
              @click="selectCategory(category)"
            >
              {{ category }}
            </button>
          </div>
          <button type="button" class="surprise-button" :disabled="!filteredProjects.length" @click="chooseSurprise">
            <span aria-hidden="true">🎲</span> Surprise me
          </button>
        </div>

        <label class="project-search">
          <span>Search projects</span>
          <input v-model="searchQuery" type="search" placeholder="Try Vue, games, or CI/CD…" />
        </label>

        <p class="project-result-count" aria-live="polite">
          {{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'project' : 'projects' }} to explore
        </p>

        <div v-if="surprisePick" class="surprise-pick" aria-live="polite">
          <span class="surprise-pick-label">Your random pick</span>
          <strong>{{ surprisePick.title }}</strong>
          <a :href="surprisePick.github" target="_blank" rel="noopener noreferrer" class="project-link">
            Take a look <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div v-if="filteredProjects.length" class="projects-grid">
          <article
            v-for="project in filteredProjects"
            :key="project.title"
            class="glass project-card"
            :class="{
              'project-card-featured': projects.indexOf(project) < 3,
              'project-card-picked': isPicked(project),
            }"
          >
            <div class="project-card-topline">
              <span class="project-type">{{ project.type }}</span>
              <span v-if="projects.indexOf(project) < 3" class="project-featured">Selected</span>
            </div>
            <h2>{{ project.title }}</h2>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <details class="code-preview">
              <summary>Peek at the code <span aria-hidden="true">+</span></summary>
              <div class="code-preview-body">
                <p class="code-preview-label">{{ project.code.language }} / {{ project.code.path.split('/').pop() }}</p>
                <pre tabindex="0"><code>{{ project.code.excerpt }}</code></pre>
                <a :href="`${project.github}/blob/HEAD/${project.code.path}`" target="_blank" rel="noopener noreferrer" class="code-source-link">
                  View original file <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>

            <div class="project-links">
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">View source <span aria-hidden="true">↗</span></a>
              <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer" class="project-link project-link-live">Live demo <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
        <p v-else class="project-empty-state" role="status">No projects match that search yet. Try another word or category.</p>
      </div>
    </div>
  </section>
</template>