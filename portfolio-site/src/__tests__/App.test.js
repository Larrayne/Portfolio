import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App.vue', () => {
  const mountApp = () => mount(App, {
    global: {
      stubs: {
        RouterLink: {
          props: ['to'],
          emits: ['click'],
          template: '<a :data-to="to" @click="$emit(\'click\', $event)"><slot /></a>',
        },
        RouterView: {
          template: '<div data-test="route-view" />',
        },
      },
    },
  })

  it('renders the four configured navigation links', () => {
    const wrapper = mountApp()

    expect(wrapper.find('nav[aria-label="Main navigation"]').exists()).toBe(true)
    const links = wrapper.findAll('nav a')
    expect(links.map((link) => link.attributes('data-to'))).toEqual([
      '/',
      '/projects',
      '/about',
      '/contact',
    ])
    expect(wrapper.find('[data-test="route-view"]').exists()).toBe(true)
  })

  it('toggles the mobile navigation and closes it after a link is selected', async () => {
    const wrapper = mountApp()
    const toggle = wrapper.get('.nav-toggle')
    const navigation = wrapper.get('#primary-navigation')

    expect(toggle.attributes('aria-expanded')).toBe('false')
    expect(navigation.classes()).not.toContain('is-open')

    await toggle.trigger('click')
    expect(toggle.attributes('aria-expanded')).toBe('true')
    expect(navigation.classes()).toContain('is-open')

    await wrapper.get('nav a[data-to="/projects"]').trigger('click')
    expect(toggle.attributes('aria-expanded')).toBe('false')
    expect(navigation.classes()).not.toContain('is-open')
  })
})
