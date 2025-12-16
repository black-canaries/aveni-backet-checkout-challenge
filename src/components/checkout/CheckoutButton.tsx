import React from 'react';
import { ActionButton } from '../common';
import { useBasketActions, useIsBasketEmpty } from '../../hooks';

interface CheckoutButtonProps {
  isCardValid: boolean;
  onCheckoutSuccess: () => void;
}

/**
 * Checkout button with validation logic
 */
export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  isCardValid,
  onCheckoutSuccess,
}) => {
  const isBasketEmpty = useIsBasketEmpty();
  const { emptyBasket } = useBasketActions();

  const isDisabled = isBasketEmpty || !isCardValid;

  const handleCheckout = () => {
    // Mock checkout - just clear basket and show success
    emptyBasket();
    onCheckoutSuccess();
  };

  return (
    <ActionButton
      onClick={handleCheckout}
      disabled={isDisabled}
      variant="primary"
    >
      Checkout
    </ActionButton>
  );
};