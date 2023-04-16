import productTypes from "./products.types";
import bookTypes from "./products.types";

const INITIAL_STATE = {
  products: [],
  product: {},
  progress:0
};

interface Action {
  type: string;
  payload: any;
}

const productsReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case productTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case bookTypes.SET_PRODUCT:
      return {
        ...state,
       product: action.payload,
      };
     
        case productTypes.UPDATE_PROGRESS:
          return {
            ...state,
            progress: action.payload,
          };

    default:
      return state;
  }
};

export default productsReducer;
