import cartTypes, { CartState } from "./cart.types";

const INITIAL_STATE: CartState = {
  cartProducts: []
};

interface Action {
  type: string;
  payload: any;
}

//TODO o cart tem de ter em conta se ja existe os produtos 

const shopReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload]
      };

    default:
      return state;
  }
};

export default shopReducer;
