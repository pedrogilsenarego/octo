import { all, call } from "redux-saga/effects";
import cartSagas from "../slicer/cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(cartSagas)]);
}
