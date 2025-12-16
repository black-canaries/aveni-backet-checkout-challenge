import type { Product } from '../types';

/**
 * Abstract interface to allow different product data sources
 */
export interface ProductRepository {
  getAll(): Product[];
  getById(sku: number): Product | undefined;
}