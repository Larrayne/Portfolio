import { describe, it, expect } from 'vitest';

/**
 * Utility functions tests
 */

describe('Portfolio Utils', () => {
  it('should validate email format', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    expect(emailRegex.test('user@example.com')).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
  });

  it('should format date correctly', () => {
    const date = new Date('2024-01-15');
    const formatted = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    
    expect(formatted).toContain('2024');
    expect(formatted).toContain('January');
    expect(formatted).toContain('15');
  });

  it('should generate slug from title', () => {
    const generateSlug = (title) => 
      title.toLowerCase().trim().replace(/\s+/g, '-');
    
    expect(generateSlug('My Portfolio Project')).toBe('my-portfolio-project');
    expect(generateSlug('Hello World')).toBe('hello-world');
  });

  it('should truncate text with ellipsis', () => {
    const truncate = (text, maxLength) => 
      text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    
    expect(truncate('Hello World', 5)).toBe('Hello...');
    expect(truncate('Hi', 5)).toBe('Hi');
  });
});
