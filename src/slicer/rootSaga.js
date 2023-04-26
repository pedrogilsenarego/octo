import { all, call } from "redux-saga/effects";
import cartSagas from "../slicer/cart/cart.sagas";
// import productSagas from "./products/products.sagas";
import userSagas from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(cartSagas), call(userSagas)]);
}
