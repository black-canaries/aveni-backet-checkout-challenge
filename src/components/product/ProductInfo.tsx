import React from 'react';
import type { ProductDisplay } from '../../types';

interface ProductInfoProps {
  product: ProductDisplay; // Only display fields (ISP)
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  return (
    <div className="flex-1">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-medium mt-1">{formatPrice(product.price)}</p>
    </div>
  );
};