import type { BasketState, BasketItem, BasketItemWithProduct, BasketTotals, Product } from '../../types';

/**
 * Select raw basket items
 */
export const selectBasketItems = (state: BasketState): BasketItem[] =>
  state.items;

/**
 * Select quantity for a specific SKU
 * Returns 0 if item not in basket
 */
export const selectQuantityBySku = (state: BasketState, sku: number): number => {
  const item = state.items.find(item => item.sku === sku);
  return item?.quantity ?? 0;
};

/**
 * Check if basket is empty
 */
export const selectIsBasketEmpty = (state: BasketState): boolean =>
  state.items.length === 0;

/**
 * Calculate total item count
 */
export const selectTotalItems = (state: BasketState): number =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

/**
 * Calculate total cost
 * Requires products array to look up prices
 */
export const selectTotalCost = (
  state: BasketState,
  products: Product[]
): number => {
  return state.items.reduce((sum, item) => {
    const product = products.find(p => p.sku === item.sku);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
};

/**
 * Get basket totals object
 * Combines totalItems and totalCost
 */
export const selectBasketTotals = (
  state: BasketState,
  products: Product[]
): BasketTotals => ({
  totalItems: selectTotalItems(state),
  totalCost: selectTotalCost(state, products),
});

/**
 * Get basket items with full product details
 * Used in checkout view for display
 */
export const selectBasketWithProducts = (
  state: BasketState,
  products: Product[]
): BasketItemWithProduct[] => {
  return state.items
    .map(item => {
      const product = products.find(p => p.sku === item.sku);
      if (!product) return null;

      return {
        ...item,
        name: product.name,
        price: product.price,
        basketLimit: product.basketLimit,
        lineTotal: item.quantity * product.price,
      };
    })
    .filter((item): item is BasketItemWithProduct => item !== null);
};