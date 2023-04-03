import { Product } from "../../constants/category";
import  cartTypes from "./cart.types";


export const addProductToCart = (product: Product[]) => ({
  type: cartTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART
});

