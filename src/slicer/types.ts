
import { CartState } from "./cart/cart.types"
import { GeneralState } from "./general/general.types"
import { ShopState } from "./shop/shop.types"

export interface State {
  general: GeneralState
  shop:ShopState
  cart:CartState
  
}