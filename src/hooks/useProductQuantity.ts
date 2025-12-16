import { useAppSelector } from '../store/hooks';
import { selectQuantityBySku } from '../store/basket';

/**
 * Hook to get quantity of a specific product in basket
 * Interface Segregation: single-purpose hook
 */
export const useProductQuantity = (sku: number): number => {
  return useAppSelector(state => selectQuantityBySku(state.basket, sku));
};