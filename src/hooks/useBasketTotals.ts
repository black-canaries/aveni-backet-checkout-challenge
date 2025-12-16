import { useAppSelector } from '../store/hooks';
import { selectBasketTotals } from '../store/basket';
import { useProducts } from './useProducts';
import type { BasketTotals } from '../types';

/**
 * Hook for components that only need basket totals
 * Interface Segregation: provides just totalItems and totalCost
 */
export const useBasketTotals = (): BasketTotals => {
  const products = useProducts();
  const totals = useAppSelector(state => selectBasketTotals(state.basket, products));
  return totals;
};