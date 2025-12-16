import React from 'react';
import type { Product } from '../../types';
import { ProductInfo } from './ProductInfo';
import { ProductActions } from './ProductActions';

interface ProductCardProps {
  product: Product;
}

/**
 * Composed product card
 * Combines ProductInfo and ProductActions
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <ProductInfo product={product} />
      <ProductActions product={product} />
    </div>
  );
};