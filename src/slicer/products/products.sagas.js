import { takeLatest, put, all, call } from "redux-saga/effects";
import { handleAddProduct } from "./products.helpers";
import {
  updateSuccessNotification,
  updateFailNotification,
  enableLoading,
  disableLoading,
} from "../general/general.actions";

import { productsTypes } from "./products.types";

function* sagaAddProduct({ payload }) {
  try {
    yield put(enableLoading());
    const timestamp = new Date();

    yield handleAddProduct({
      ...payload,
      createdDate: timestamp,
    });
    yield put(updateSuccessNotification("Produto Adicionado"));
    yield put(disableLoading());
  } catch (err) {
    yield put(updateFailNotification("Produto não adicionado"));
  }
}

export function* onAddProduct() {
  yield takeLatest(productsTypes.ADD_PRODUCT, sagaAddProduct);
}

export default function* productsSagas() {
  yield all([call(onAddProduct)]);
}
