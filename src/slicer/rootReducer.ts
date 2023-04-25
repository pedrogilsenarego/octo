import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import cartReducer from "./cart/cart.reducer";
import generalReducer from "./general/general.reducer";
import shopReducer from "./shop/shop.reducer";
import productsReducer from "./products/products.reducer";
import userReducer from "./user/user.reducer";

export const rootReducer = combineReducers({
  general: generalReducer,
  shop: shopReducer,
  cart: cartReducer,
  products: productsReducer,
  user: userReducer
  
});

const configStorage = {
  key: "root",
  storage,
};

export default persistReducer(configStorage, rootReducer);