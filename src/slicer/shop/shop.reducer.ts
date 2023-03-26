import shopTypes, { ShopState } from "./shop.types";

const INITIAL_STATE: ShopState = {
  filters: {
    category: "",
    fabric: [],
  },
};

interface Action {
  type: string;
  payload: any;
}

const shopReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case shopTypes.UPDATE_SHOP_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
