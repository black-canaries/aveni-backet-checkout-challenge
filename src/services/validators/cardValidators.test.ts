import { validateCard, getCardValidationErrors } from './index';

describe('card validation', () => {
  describe('validateCard', () => {
    it('returns true for valid 16-digit number', () => {
      expect(validateCard('1234567890123456')).toBe(true);
    });

    it('returns false for too short', () => {
      expect(validateCard('123456789012345')).toBe(false);
    });

    it('returns false for too long', () => {
      expect(validateCard('12345678901234567')).toBe(false);
    });

    it('returns false for non-digits', () => {
      expect(validateCard('123456789012345a')).toBe(false);
    });

    it('returns false for empty string', () => {
      expect(validateCard('')).toBe(false);
    });
  });

  describe('getCardValidationErrors', () => {
    it('returns empty array for valid card', () => {
      expect(getCardValidationErrors('1234567890123456')).toHaveLength(0);
    });

    it('returns error for empty input', () => {
      const errors = getCardValidationErrors('');
      expect(errors).toContain('Card number is required');
    });

    it('returns error for non-digits', () => {
      const errors = getCardValidationErrors('12345678901234ab');
      expect(errors).toContain('Card number must contain only digits');
    });
  });
});