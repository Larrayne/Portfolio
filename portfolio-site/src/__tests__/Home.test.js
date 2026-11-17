import { afterEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../pages/homePage.vue'

describe('home number game', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('introduces the developer and previews selected work', () => {
    const wrapper = mount(Home)

    expect(wrapper.get('h1').text()).toContain('Thoughtful')
    expect(wrapper.text()).toContain('Hello, I’m Larrayne.')
    expect(wrapper.findAll('.work-preview')).toHaveLength(3)
    expect(wrapper.text()).toContain('Waste Sorting App')
    expect(wrapper.text()).toContain('Testing')
  })

  it('gives a higher-or-lower hint for a valid guess', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3)
    const wrapper = mount(Home)

    await wrapper.get('#number-guess').setValue('4')
    await wrapper.get('.mini-game-form').trigger('submit')

    expect(wrapper.get('#game-feedback').text()).toBe('A little higher! Try again.')
  })

  it('celebrates a correct guess and lets the visitor start again', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3)
    const wrapper = mount(Home)

    await wrapper.get('#number-guess').setValue('7')
    await wrapper.get('.mini-game-form').trigger('submit')

    expect(wrapper.get('#game-feedback').text()).toBe('You got it in 1 guess! Nice one.')
    expect(wrapper.get('#number-guess').element.disabled).toBe(true)

    await wrapper.get('button[type="button"]').trigger('click')

    expect(wrapper.get('#game-feedback').text()).toBe('Pick a number from 1 to 20.')
    expect(wrapper.get('#number-guess').element.disabled).toBe(false)
  })

  it('rejects guesses outside the game range', async () => {
    const wrapper = mount(Home)

    await wrapper.get('#number-guess').setValue('21')
    await wrapper.get('.mini-game-form').trigger('submit')

    expect(wrapper.get('#game-feedback').text()).toBe('Enter a whole number from 1 to 20.')
  })
})
