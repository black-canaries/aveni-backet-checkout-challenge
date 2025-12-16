import React from 'react';
import { Header } from '../components/layout';
import { ProductList } from '../components/product';
import { NavButton } from '../components/common';

/**
 * Product List View - main shopping page
 */
export const ProductListView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header showTotalCost={true} />

      <main className="max-w-4xl mx-auto p-4">
        <ProductList />

        <div className="flex justify-end mt-6">
          <NavButton to="/checkout">
            Proceed to checkout
          </NavButton>
        </div>
      </main>
    </div>
  );
};

export default ProductListView;