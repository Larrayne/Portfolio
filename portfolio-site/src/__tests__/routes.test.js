import { describe, it, expect } from 'vitest'
import router from '../router'

describe('Portfolio routes', () => {
  it('registers the pages available in the navigation', () => {
    const routes = router.getRoutes()
      .map(({ name, path }) => [name, path])
      .sort(([firstName], [secondName]) => firstName.localeCompare(secondName))

    expect(routes).toEqual([
      ['about', '/about'],
      ['contact', '/contact'],
      ['home', '/'],
      ['projects', '/projects'],
    ])
  })
})
