import { afterEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Projects from '../pages/Projects.vue'

const mountProjects = () => mount(Projects, {
  global: {
    stubs: {
      TransitionGroup: false,
    },
  },
})

describe('Projects.vue', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('shows project types, source links, and no placeholder live demos', () => {
    const wrapper = mountProjects()
    const cards = wrapper.findAll('.project-card')

    expect(cards).toHaveLength(15)
    expect(cards[0].text()).toContain('Portfolio website')
    expect(cards[0].get('.project-link').text()).toContain('View source')
    expect(wrapper.findAll('.project-link-live')).toHaveLength(0)
    expect(wrapper.text()).not.toContain('recent builds')
  })

  it('provides a code preview and original file link for every project', () => {
    const wrapper = mountProjects()
    const cards = wrapper.findAll('.project-card')

    expect(wrapper.findAll('.code-preview')).toHaveLength(15)
    for (const card of cards) {
      expect(card.get('summary').text()).toContain('Peek at the code')
      expect(card.get('pre code').text().length).toBeGreaterThan(0)
      expect(card.get('.code-source-link').attributes('href')).toContain('/blob/HEAD/')
    }

    expect(cards[0].get('pre code').text()).toContain("name: 'projects'")
    expect(cards[3].get('pre code').text()).toContain('@PostMapping')
    expect(cards[3].get('.code-source-link').attributes('href')).toContain('WasteManagementController.java')
    expect(cards.map((card) => card.text())).toEqual(expect.arrayContaining([
      expect.stringContaining('CareerGPS'),
      expect.stringContaining('With Love, Always'),
      expect.stringContaining('Waste Management Assessment'),
      expect.stringContaining('Our Little Universe'),
      expect.stringContaining('Digital Scrapbook'),
      expect.stringContaining('HerGuard'),
      expect.stringContaining('ChatBotAi'),
    ]))
  })

  it('filters projects by category and search query', async () => {
    const wrapper = mountProjects()

    await wrapper.get('[role="group"][aria-label="Filter projects by category"]')
      .findAll('button')[2]
      .trigger('click')

    expect(wrapper.findAll('.project-card')).toHaveLength(1)
    expect(wrapper.find('.project-card').text()).toContain('PC Setup Assistant')
    expect(wrapper.get('.project-result-count').text()).toBe('1 project to explore')

    await wrapper.get('input[type="search"]').setValue('no match')
    expect(wrapper.findAll('.project-card')).toHaveLength(0)
    expect(wrapper.get('.project-empty-state').exists()).toBe(true)
    expect(wrapper.get('.surprise-button').attributes('disabled')).toBeDefined()
  })

  it('can pick a random project and link to its source', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    const wrapper = mountProjects()

    await wrapper.get('.surprise-button').trigger('click')

    expect(wrapper.get('.surprise-pick').text()).toContain('Portfolio Site')
    expect(wrapper.get('.surprise-pick a').attributes('href')).toBe('https://github.com/Larrayne/Portfolio')
    expect(wrapper.get('.project-card-picked').text()).toContain('Portfolio Site')
  })
})
