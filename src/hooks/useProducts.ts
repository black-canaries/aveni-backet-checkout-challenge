import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import type { Product } from '../types';

/**
 * Hook to access products from the repository
 * Abstracts data source - components don't know if it's JSON or API
 */
export const useProducts = (): Product[] => {
  const repository = useContext(ProductContext);

  if (!repository) {
    throw new Error('useProducts must be used within ProductProvider');
  }

  return repository.getAll();
};

/**
 * Hook to get single product by SKU
 */
export const useProductBySku = (sku: number): Product | undefined => {
  const repository = useContext(ProductContext);

  if (!repository) {
    throw new Error('useProductBySku must be used within ProductProvider');
  }

  return repository.getById(sku);
};