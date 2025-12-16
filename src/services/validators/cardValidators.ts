/**
 * Card validator function signature
 * Each validator checks one rule
 */
export type CardValidator = (cardNumber: string) => boolean;

/**
 * Individual validation rules - easy to add more
 */
export const isCorrectLength: CardValidator = (card) =>
  card.length === 16;

export const isDigitsOnly: CardValidator = (card) =>
  /^\d+$/.test(card);

export const isNotEmpty: CardValidator = (card) =>
  card.trim().length > 0;

/**
 * Collection of all validators
 * Add new validators here without modifying validation logic
 */
export const cardValidators: CardValidator[] = [
  isNotEmpty,
  isCorrectLength,
  isDigitsOnly,
];