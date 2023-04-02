
import cartTypes, { CartState } from "./cart.types";
import { handleAddToCart } from "./cart.utils";

const INITIAL_STATE: CartState = {
  cartItems: []
};

interface Action {
  type: string;
  payload: any;
} 

const cartReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT_TO_CART:
      return {
				...state,
				cartItems: handleAddToCart({
					prevCartItems: state.cartItems,
					nextCartItems: action.payload
				})
			};

    default:
      return state;
  }
};

export default cartReducer;
