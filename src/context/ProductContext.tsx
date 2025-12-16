import React, { createContext, type ReactNode } from 'react';
import type { ProductRepository } from '../interfaces/repositories';
import { jsonProductRepository } from '../services/productRepository';

/**
 * Context for product repository injection
 * Allows swapping implementations without changing components
 */

// TODO: Move to separate file
export const ProductContext = createContext<ProductRepository | null>(null);

interface ProductProviderProps {
  children: ReactNode;
  repository?: ProductRepository; // Allow custom repo for testing
}

/**
 * Provider component - wraps app and provides product repository
 */
export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
  repository = jsonProductRepository,
}) => {
  return (
    <ProductContext.Provider value={repository}>
      {children}
    </ProductContext.Provider>
  );
};