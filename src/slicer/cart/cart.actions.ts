import { Product } from "../../constants/category";
import  cartTypes from "./cart.types";


export const addProductToCart = (product: Product[]) => ({
  type: cartTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});

export const updateCart = (value:number, id:string) => ({
  type:cartTypes.UPDATE_CART,
  payload:{value, id}
})

export const deleteProductCart = (id:string) => ({
  type:cartTypes.DELETE_PRODUCT,
  payload:id
})

export const changeValueProductCart = (value:number,id:string) =>({
type:cartTypes.CHANGE_VALUE,
payload:{value,id}
})


export const clearCart = () => ({
  type: cartTypes.CLEAR_CART
});

