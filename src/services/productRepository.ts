import type { ProductRepository } from '../interfaces/repositories';
import type { Product } from '../types';
import productsData from '../data/products.json';

/**
 * ProductRepository interface
 */
export const jsonProductRepository: ProductRepository = {
  getAll: (): Product[] => {
    return productsData as Product[];
  },

  getById: (sku: number): Product | undefined => {
    return (productsData as Product[]).find(p => p.sku === sku);
  },
};

export default jsonProductRepository;