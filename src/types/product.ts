export interface ProductDisplay {
  name: string;
  description: string;
  price: number;
}

export interface ProductBasketInfo {
  sku: number;
  basketLimit: number;
}

export interface Product extends ProductDisplay, ProductBasketInfo {}