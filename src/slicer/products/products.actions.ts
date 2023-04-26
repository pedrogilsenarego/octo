import { Product, productsTypes } from "./products.types";

export const addProduct = (product: Product) => ({
  type: productsTypes.ADD_PRODUCT,
  payload: product,
});