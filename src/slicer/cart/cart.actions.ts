import  cartTypes, { CartProduct } from "./cart.types";


export const addProductToCart = (product: CartProduct) => ({
  type: cartTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});

