import { useAppSelector } from '../store/hooks';
import { selectBasketWithProducts, selectIsBasketEmpty } from '../store/basket';
import { useProducts } from './useProducts';
import type { BasketItemWithProduct } from '../types';

/**
 * Hook for checkout view - gets basket items with product details
 */
export const useBasketItems = (): BasketItemWithProduct[] => {
  const products = useProducts();
  return useAppSelector(state => selectBasketWithProducts(state.basket, products));
};

/**
 * Hook to check if basket is empty
 */
export const useIsBasketEmpty = (): boolean => {
  return useAppSelector(state => selectIsBasketEmpty(state.basket));
};