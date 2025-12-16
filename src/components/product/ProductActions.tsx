import React from 'react';
import type { ProductBasketInfo } from '../../types';
import { ActionButton } from '../common';
import { useBasketActions } from '../../hooks';
import { useProductQuantity } from '../../hooks';

interface ProductActionsProps {
  product: ProductBasketInfo; // Only sku + basketLimit (ISP)
}

/**
 * Action buttons for product
 * Single Responsibility: only handles add/remove actions
 * Interface Segregation: only receives basket-related data
 */
export const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { sku, basketLimit } = product;
  const quantity = useProductQuantity(sku);
  const { addItem, removeItem } = useBasketActions();

  const isAtLimit = quantity >= basketLimit;
  const isInBasket = quantity > 0;

  return (
    <div className="flex gap-2">
      <ActionButton
        onClick={() => addItem(sku, basketLimit)}
        disabled={isAtLimit}
        variant="primary"
      >
        Add to basket
      </ActionButton>

      <ActionButton
        onClick={() => removeItem(sku)}
        disabled={!isInBasket}
        variant="danger"
      >
        Remove from basket
      </ActionButton>
    </div>
  );
};