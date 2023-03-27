export const cartTypes = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART"
  
};

export interface CartState {
  cartProducts: CartProduct[]
}

export interface CartProduct {
  uid:string
  fabric:string
  amount:number
}





export default cartTypes;
