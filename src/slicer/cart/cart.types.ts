import { Product } from "../../constants/category";

export const cartTypes = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  CLEAR_CART:"CLEAR_CART"
  
};

export interface CartProduct {
  product:Product;
  value:number
}

export interface CartState {
  cartItems: CartProduct[]
}





export default cartTypes;
