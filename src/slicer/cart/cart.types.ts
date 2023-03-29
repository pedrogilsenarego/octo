export const cartTypes = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART"
  
};

export interface CartState {
  cartProducts: CartProduct[]
}

export interface CartProduct {
  uid:string
  name:string
  fabric:string
  amount:number
  price:number
}





export default cartTypes;
