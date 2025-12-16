import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BasketState, BasketItem } from '../../types';

const initialState: BasketState = {
  items: [],
};

/**
 * Basket slice - ONLY handles state mutations
 * Selectors are in a separate file (SRP)
 */
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    /**
     * Add one item to basket
     * Respects basketLimit - won't add if at limit
     */
    addToBasket: (
      state,
      action: PayloadAction<{ sku: number; basketLimit: number }>
    ) => {
      const { sku, basketLimit } = action.payload;
      const existingItem = state.items.find(item => item.sku === sku);

      if (existingItem) {
        if (existingItem.quantity < basketLimit) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({ sku, quantity: 1 });
      }
    },

    /**
     * Remove one item from basket
     * Removes item entirely if quantity reaches 0
     */
    removeFromBasket: (state, action: PayloadAction<number>) => {
      const sku = action.payload;
      const existingItem = state.items.find(item => item.sku === sku);

      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.sku !== sku);
        }
      }
    },

    /**
     * Set exact quantity for an item
     * Used by checkout quantity dropdown
     */
    setQuantity: (
      state,
      action: PayloadAction<{ sku: number; quantity: number }>
    ) => {
      const { sku, quantity } = action.payload;
      const existingItem = state.items.find(item => item.sku === sku);

      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }
    },

    /**
     * Remove all of a specific product from basket
     * Used by "Remove All" button in checkout
     */
    removeAllOfProduct: (state, action: PayloadAction<number>) => {
      const sku = action.payload;
      state.items = state.items.filter(item => item.sku !== sku);
    },

    /**
     * Clear entire basket
     * Used after successful checkout
     */
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  setQuantity,
  removeAllOfProduct,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;