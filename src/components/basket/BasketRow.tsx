import React from 'react';
import type { BasketItemWithProduct } from '../../types';
import { QuantitySelect } from './QuantitySelect';
import { ActionButton } from '../common';
import { useBasketActions } from '../../hooks';

interface BasketRowProps {
  item: BasketItemWithProduct;
}

/**
 * Single row in the basket table
 */
export const BasketRow: React.FC<BasketRowProps> = ({ item }) => {
  const { updateQuantity, removeAll } = useBasketActions();

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const handleQuantityChange = (quantity: number) => {
    updateQuantity(item.sku, quantity);
  };

  return (
    <tr className="border-b">
      <td className="py-4">{item.name}</td>
      <td className="py-4 text-center">
        <QuantitySelect
          value={item.quantity}
          max={item.basketLimit}
          onChange={handleQuantityChange}
        />
      </td>
      <td className="py-4 text-center">{formatPrice(item.price)}</td>
      <td className="py-4 text-center">{formatPrice(item.lineTotal)}</td>
      <td className="py-4 text-center">
        <ActionButton
          variant="danger"
          onClick={() => removeAll(item.sku)}
        >
          Remove all
        </ActionButton>
      </td>
    </tr>
  );
};