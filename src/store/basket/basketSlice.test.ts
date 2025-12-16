import basketReducer, {
  addToBasket,
  removeFromBasket,
  setQuantity,
  removeAllOfProduct,
  clearBasket,
} from './basketSlice';
import type { BasketState } from '../../types';

describe('basketSlice', () => {
  const initialState: BasketState = { items: [] };

  describe('addToBasket', () => {
    it('adds new item with quantity 1', () => {
      const result = basketReducer(
        initialState,
        addToBasket({ sku: 1, basketLimit: 5 })
      );
      expect(result.items).toHaveLength(1);
      expect(result.items[0]).toEqual({ sku: 1, quantity: 1 });
    });

    it('increments existing item quantity', () => {
      const state: BasketState = { items: [{ sku: 1, quantity: 2 }] };
      const result = basketReducer(
        state,
        addToBasket({ sku: 1, basketLimit: 5 })
      );
      expect(result.items[0].quantity).toBe(3);
    });

    it('does not exceed basketLimit', () => {
      const state: BasketState = { items: [{ sku: 1, quantity: 5 }] };
      const result = basketReducer(
        state,
        addToBasket({ sku: 1, basketLimit: 5 })
      );
      expect(result.items[0].quantity).toBe(5);
    });
  });

  describe('removeFromBasket', () => {
    it('decrements quantity', () => {
      const state: BasketState = { items: [{ sku: 1, quantity: 3 }] };
      const result = basketReducer(state, removeFromBasket(1));
      expect(result.items[0].quantity).toBe(2);
    });

    it('removes item when quantity reaches 0', () => {
      const state: BasketState = { items: [{ sku: 1, quantity: 1 }] };
      const result = basketReducer(state, removeFromBasket(1));
      expect(result.items).toHaveLength(0);
    });
  });

  describe('setQuantity', () => {
    it('sets exact quantity', () => {
      const state: BasketState = { items: [{ sku: 1, quantity: 2 }] };
      const result = basketReducer(
        state,
        setQuantity({ sku: 1, quantity: 4 })
      );
      expect(result.items[0].quantity).toBe(4);
    });
  });

  describe('removeAllOfProduct', () => {
    it('removes item entirely', () => {
      const state: BasketState = {
        items: [
          { sku: 1, quantity: 3 },
          { sku: 2, quantity: 2 },
        ],
      };
      const result = basketReducer(state, removeAllOfProduct(1));
      expect(result.items).toHaveLength(1);
      expect(result.items[0].sku).toBe(2);
    });
  });

  describe('clearBasket', () => {
    it('empties all items', () => {
      const state: BasketState = {
        items: [
          { sku: 1, quantity: 3 },
          { sku: 2, quantity: 2 },
        ],
      };
      const result = basketReducer(state, clearBasket());
      expect(result.items).toHaveLength(0);
    });
  });
});