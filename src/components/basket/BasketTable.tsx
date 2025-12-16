import React from 'react';
import { useBasketItems } from '../../hooks';
import { BasketRow } from './BasketRow';

/**
 * Table displaying all basket items
 */
export const BasketTable: React.FC = () => {
  const items = useBasketItems();

  if (items.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        Your basket is empty
      </p>
    );
  }

  return (
    <table className="w-full text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-4">Product name</th>
          <th className="py-3 px-4 text-center">Quantity</th>
          <th className="py-3 px-4 text-center">Unit price</th>
          <th className="py-3 px-4 text-center">Total price</th>
          <th className="py-3 px-4 text-center"></th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <BasketRow key={item.sku} item={item} />
        ))}
      </tbody>
    </table>
  );
};