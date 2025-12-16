/**
 * Single item in the basket
 */
export interface BasketItem {
  sku: number;
  quantity: number;
}

/**
 * Complete basket state
 */
export interface BasketState {
  items: BasketItem[];
}

/**
 * Basket item used in checkout view
 */
export interface BasketItemWithProduct extends BasketItem {
  name: string;
  price: number;
  basketLimit: number;
  lineTotal: number;
}

/**
 * Basket totals for header display
 */
export interface BasketTotals {
  totalItems: number;
  totalCost: number;
}