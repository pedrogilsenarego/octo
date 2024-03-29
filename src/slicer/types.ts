
import { CartState } from "./cart/cart.types"
import { GeneralState } from "./general/general.types"
import { Products } from "./products/products.types"
import { ShopState } from "./shop/shop.types"
import { User } from "./user/user.types"

export interface State {
  general: GeneralState
  shop:ShopState
  cart:CartState
  user:User
  products:Products
  
}