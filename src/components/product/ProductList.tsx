import React from 'react';
import { useProducts } from '../../hooks';
import { ProductCard } from './ProductCard';

/**
 * List of all products
 */
export const ProductList: React.FC = () => {
  const products = useProducts();

  return (
    <div className="divide-y divide-gray-200">
      {products.map(product => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </div>
  );
};