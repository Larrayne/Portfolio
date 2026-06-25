import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App.vue', () => {
  it('renders the main App component with navigation', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    expect(wrapper.find('nav').exists()).toBe(true);
    expect(wrapper.findAll('router-link-stub').length).toBeGreaterThanOrEqual(1);
  });

  it('component should have required navigation links', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    const links = wrapper.findAll('router-link-stub');
    expect(links).toHaveLength(5);
    expect(wrapper.find('router-view-stub').exists()).toBe(true);
  });

  it('should mount without errors', () => {
    expect(() => {
      mount(App, {
        global: {
          stubs: ['router-link', 'router-view'],
        },
      });
    }).not.toThrow();
  });
});
