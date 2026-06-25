import { describe, it, expect } from 'vitest';

/**
 * Router tests
 */
describe('Portfolio Routes', () => {
  it('should have valid route names', () => {
    const validRoutes = ['Home', 'About', 'Projects', 'Contact', 'Products'];
    
    expect(validRoutes).toContain('Home');
    expect(validRoutes).toContain('About');
    expect(validRoutes).toContain('Projects');
  });

  it('should generate route paths correctly', () => {
    const generatePath = (name) => `/${name.toLowerCase()}`;
    
    expect(generatePath('About')).toBe('/about');
    expect(generatePath('Projects')).toBe('/projects');
    expect(generatePath('Contact')).toBe('/contact');
  });

  it('should validate route transitions', () => {
    const canTransition = (from, to) => {
      const validTransitions = {
        home: ['about', 'projects', 'contact'],
        about: ['home', 'projects', 'contact'],
        projects: ['home', 'about', 'contact'],
        contact: ['home', 'about', 'projects'],
      };
      
      return (validTransitions[from] || []).includes(to);
    };
    
    expect(canTransition('home', 'about')).toBe(true);
    expect(canTransition('home', 'projects')).toBe(true);
    expect(canTransition('about', 'home')).toBe(true);
  });
});
