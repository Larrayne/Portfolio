import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Contact from '../pages/Contact.vue'

describe('Contact.vue', () => {
  it('prompts the visitor to correct invalid details', async () => {
    const wrapper = mount(Contact)

    await wrapper.find('form').trigger('submit')

    expect(wrapper.get('[role="status"]').text()).toContain('Please fill in your name')
    expect(wrapper.find('a.underline[href^="mailto:"]').exists()).toBe(false)
  })

  it('prepares an email draft without claiming it was sent', async () => {
    const wrapper = mount(Contact)

    await wrapper.get('#contact-name').setValue('Taylor Example')
    await wrapper.get('#contact-email').setValue('taylor@example.com')
    await wrapper.get('#contact-message').setValue('I would like to discuss a project.')
    await wrapper.find('form').trigger('submit')

    const draftLink = wrapper.get('a.underline[href^="mailto:"]')
    expect(draftLink.text()).toBe('Open email draft')
    expect(decodeURIComponent(draftLink.attributes('href'))).toContain('subject=Portfolio enquiry from Taylor Example')
    expect(decodeURIComponent(draftLink.attributes('href'))).toContain('Reply to: taylor@example.com')
    expect(wrapper.get('[role="status"]').text()).toContain('Review and send it there.')
    expect(wrapper.get('[role="status"]').text()).not.toContain('Message sent')
  })
})
