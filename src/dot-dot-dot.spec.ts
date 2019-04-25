import dotDotDot from './dot-dot-dot';


describe('dot-dot-dot', () => {
  const result = dotDotDot();

  it('should return a string', () => {
    expect(typeof result).toBe('string');
  });

  it('should end with an ellipsis', () => {
    expect(result.endsWith('...')).toBe(true);
  });
});
