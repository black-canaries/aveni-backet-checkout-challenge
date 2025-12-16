import { cardValidators, type CardValidator } from './cardValidators';

/**
 * Compose validators - runs all validators and returns result
 * Open for extension: add validators to array without modifying this function
 */
export const validateCard = (cardNumber: string): boolean => {
  return cardValidators.every(validate => validate(cardNumber));
};

/**
 * Get specific validation errors for UI feedback
 */
export const getCardValidationErrors = (cardNumber: string): string[] => {
  const errors: string[] = [];

  if (cardNumber.trim().length === 0) {
    errors.push('Card number is required');
  } else {
    if (!/^\d+$/.test(cardNumber)) {
      errors.push('Card number must contain only digits');
    }
    if (cardNumber.length !== 16) {
      errors.push('Card number must be exactly 16 digits');
    }
  }

  return errors;
};

export type { CardValidator };