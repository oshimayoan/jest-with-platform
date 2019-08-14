import {withPlatform} from '../';

describe('withPlatform', () => {
  it('should use android platform', () => {
    const chosenPlatform = 'android';
    withPlatform(chosenPlatform, jest.fn(), platform => {
      expect(platform).toBe(chosenPlatform);
    });
  });

  it('should use ios platform', () => {
    const chosenPlatform = 'ios';
    withPlatform(chosenPlatform, jest.fn(), platform => {
      expect(platform).toBe(chosenPlatform);
    });
  });

  it('should use web platform', () => {
    const chosenPlatform = 'web';
    withPlatform(chosenPlatform, jest.fn(), platform => {
      expect(platform).toBe(chosenPlatform);
    });
  });
});
