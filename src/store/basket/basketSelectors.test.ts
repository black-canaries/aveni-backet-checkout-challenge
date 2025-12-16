import {
  selectTotalItems,
  selectTotalCost,
  selectQuantityBySku,
} from './basketSelectors';
import type { BasketState, Product } from '../../types';

const mockProducts: Product[] = [
  { sku: 1, name: 'Red', description: '', price: 1.01, basketLimit: 5 },
  { sku: 2, name: 'Orange', description: '', price: 2.02, basketLimit: 4 },
];

describe('basket selectors', () => {
  describe('selectTotalItems', () => {
    it('sums all quantities', () => {
      const state: BasketState = {
        items: [
          { sku: 1, quantity: 3 },
          { sku: 2, quantity: 2 },
        ],
      };

      expect(selectTotalItems(state)).toBe(5);
    });

    it('returns 0 for empty basket', () => {
      const state: BasketState = { items: [] };
      expect(selectTotalItems(state)).toBe(0);
    });
  });

  describe('selectTotalCost', () => {
    it('calculates correct total', () => {
      const state: BasketState = {
        items: [
          { sku: 1, quantity: 2 }, // 2 * 1.01 = 2.02
          { sku: 2, quantity: 1 }, // 1 * 2.02 = 2.02
        ],
      };

      expect(selectTotalCost(state, mockProducts)).toBeCloseTo(4.04);
    });
  });

  describe('selectQuantityBySku', () => {
    it('returns quantity for existing item', () => {
      const state: BasketState = {
        items: [{ sku: 1, quantity: 3 }],
      };

      expect(selectQuantityBySku(state, 1)).toBe(3);
    });

    it('returns 0 for non-existing item', () => {
      const state: BasketState = { items: [] };
      expect(selectQuantityBySku(state, 1)).toBe(0);
    });
  });
});