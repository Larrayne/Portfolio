import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Projects from '../pages/Projects.vue'

describe('Projects.vue', () => {
  it('shows project types, source links, and no placeholder live demos', () => {
    const wrapper = mount(Projects)
    const cards = wrapper.findAll('.project-card')

    expect(cards).toHaveLength(8)
    expect(cards[0].text()).toContain('Portfolio website')
    expect(cards[0].get('a').text()).toContain('View source')
    expect(wrapper.findAll('.project-link-live')).toHaveLength(0)
    expect(wrapper.text()).not.toContain('recent builds')
  })
})
