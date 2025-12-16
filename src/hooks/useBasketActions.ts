import { useCallback } from 'react';
import { useAppDispatch } from '../store/hooks';
import {
  addToBasket,
  removeFromBasket,
  setQuantity,
  removeAllOfProduct,
  clearBasket,
} from '../store/basket';

/**
 * Hook that encapsulates all basket dispatch actions
 * Components don't need to know about dispatch or action creators
 */
export const useBasketActions = () => {
  const dispatch = useAppDispatch();

  const addItem = useCallback(
    (sku: number, basketLimit: number) => {
      dispatch(addToBasket({ sku, basketLimit }));
    },
    [dispatch]
  );

  const removeItem = useCallback(
    (sku: number) => {
      dispatch(removeFromBasket(sku));
    },
    [dispatch]
  );

  const updateQuantity = useCallback(
    (sku: number, quantity: number) => {
      dispatch(setQuantity({ sku, quantity }));
    },
    [dispatch]
  );

  const removeAll = useCallback(
    (sku: number) => {
      dispatch(removeAllOfProduct(sku));
    },
    [dispatch]
  );

  const emptyBasket = useCallback(() => {
    dispatch(clearBasket());
  }, [dispatch]);

  return {
    addItem,
    removeItem,
    updateQuantity,
    removeAll,
    emptyBasket,
  };
};