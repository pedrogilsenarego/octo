export const productsTypes = {
  ADD_PRODUCT: "ADD_PRODUCT",
};

export interface Products {
  products: Product[];
}

export interface Product {
  category: string;
  pattern: string;
  fotos: string[];
  price: number;
  discount?: number;
  icon: string;
}
