import getMessage, {getMessageEvery} from './dot-dot-dot';


describe('getMessage', () => {
  const result = getMessage();

  it('should return a string', () => {
    expect(typeof result).toBe('string');
  });
});


describe('getMessageEvery', () => {
  let NOW = Date.now();

  beforeEach(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => NOW);
  });

  it('should return a function that produces a new message after the provided TTL', () => {
    const getMessageEveryTenSeconds = getMessageEvery(10000);

    const result1 = getMessageEveryTenSeconds();
    const result2 = getMessageEveryTenSeconds();

    // Advance time by 11 seconds.
    NOW = NOW + 11000;

    const result3 = getMessageEveryTenSeconds();
    const result4 = getMessageEveryTenSeconds();

    expect(result1).toEqual(result2);
    expect(result3).toEqual(result4);
    expect(result3).not.toEqual(result1);
  });

  describe('providing invalid arguments', () => {
    it('should throw an error', () => {
      expect(() => {
        // @ts-ignore
        getMessageEvery(false);
      }).toThrow();
    });
  });
});
