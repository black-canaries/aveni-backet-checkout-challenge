import React, { useState } from 'react';
import { Header } from '../components/layout';
import { BasketTable } from '../components/basket';
import { CreditCardInput, CheckoutButton } from '../components/checkout';
import { NavButton } from '../components/common';
import { useBasketTotals } from '../hooks';

/**
 * Checkout View - review basket and complete purchase
 */
export const CheckoutView: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isCardValid, setIsCardValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { totalCost } = useBasketTotals();

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const handleCheckoutSuccess = () => {
    setShowSuccess(true);
    setCardNumber('');
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Thanks for your order!
          </h1>
          <NavButton to="/">
            Continue shopping
          </NavButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showTotalCost={false} />

      <main className="max-w-4xl mx-auto p-4">
        <BasketTable />

        <div className="flex justify-end mt-4 text-xl">
          <span className="text-purple-600 mr-2">Basket Total Cost:</span>
          <span className="font-bold">{formatPrice(totalCost)}</span>
        </div>

        <div className="mt-8 max-w-md mx-auto">
          <CreditCardInput
            value={cardNumber}
            onChange={setCardNumber}
            onValidityChange={setIsCardValid}
          />
        </div>

        <div className="flex justify-between mt-8">
          <NavButton to="/">
            Continue shopping
          </NavButton>

          <CheckoutButton
            isCardValid={isCardValid}
            onCheckoutSuccess={handleCheckoutSuccess}
          />
        </div>
      </main>
    </div>
  );
};

export default CheckoutView;