import React from 'react';
import { useBasketTotals } from '../../hooks';
import { NavLink } from '../common';

interface HeaderProps {
  showTotalCost?: boolean; // Product view shows cost, checkout doesn't
}

export const Header: React.FC<HeaderProps> = ({ showTotalCost = true }) => {
  const { totalItems, totalCost } = useBasketTotals();

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  return (
    <header className="flex justify-end gap-4 p-4 border-b border-gray-200 bg-white">
      <NavLink to="/checkout" className="flex items-center gap-2">
        <span className="bg-purple-500 text-white px-3 py-1 rounded">
          Total items
        </span>
        <span className="font-medium">{totalItems}</span>
      </NavLink>

      {showTotalCost && (
        <NavLink to="/checkout" className="flex items-center gap-2">
          <span className="bg-purple-500 text-white px-3 py-1 rounded">
            Total cost
          </span>
          <span className="font-medium">{formatPrice(totalCost)}</span>
        </NavLink>
      )}
    </header>
  );
};