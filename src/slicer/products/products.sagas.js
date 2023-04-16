import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  setProducts,
  setProduct,
  fetchProducts,
  updateProgress,
} from "./products.actions";
import {
  handleFetchProducts,
  handleFetchProduct,
  handleAddProduct,
  handleDeleteProduct,
} from "./products.helpers";
import productTypes from "./products.types";
import {
  updateSuccessNotification,
  updateFailNotification,
  enableLoading,
  disableLoading,
} from "../general/general.actions";
import { i18n } from "../../translations/i18n";
import { store } from "../createStore";

function* sagaFetchProducts({ payload }) {
  try {
    yield put(enableLoading());
    const products = yield handleFetchProducts(payload);
    yield put(setProducts({ ...products }));
    yield put(disableLoading());
  } catch (err) {
    yield put(
      updateFailNotification(i18n.t("notifications.fail.fetchStories"))
    );
  }
}

export function* onFetchProducts() {
  yield takeLatest(productTypes.FETCH_PRODUCTS, sagaFetchProducts);
}

function* sagaFetchProduct({ payload }) {
  try {
    yield put(enableLoading());
    const product = yield handleFetchProduct(payload);
    yield put(setProduct({ ...product }));
    yield put(disableLoading());
  } catch (err) {
    yield put(updateFailNotification(i18n.t("notifications.fail.newBook")));
  }
}

export function* onFetchProduct() {
  yield takeLatest(productTypes.FETCH_PRODUCT, sagaFetchProduct);
}

function* sagaAddProduct({ payload }) {
  try {
    yield put(enableLoading());
    const timestamp = new Date();
    const { title, content } = payload;

    const onProgressUpdate = (progress) => {
      console.log(progress);
      store.dispatch(updateProgress(progress));
    };

    const content2 = yield call(title, content, onProgressUpdate);

    delete payload.content;

    yield handleAddProduct({
      ...payload,
      content2,
      active: false,
      createdDate: timestamp,
    });
    yield put(
      updateSuccessNotification(i18n.t("notifications.success.newBook"))
    );
    yield put(updateProgress(0));
    yield put(disableLoading());
  } catch (err) {
    yield put(updateFailNotification(i18n.t("notifications.fail.newBook")));
  }
}

export function* onAddProduct() {
  yield takeLatest(productTypes.ADD_PRODUCT, sagaAddProduct);
}

//

function* sagaDeleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload.documentID);

    yield put(fetchProducts());

    yield put(
      updateSuccessNotification(
        i18n.t("notifications.success.updateCarroussell")
      )
    );
  } catch (err) {
    yield put(
      updateFailNotification(i18n.t("notifications.fail.updateCarroussell"))
    );
  }
}

export function* onDeleteProduct() {
  yield takeLatest(productTypes.DELETE_STORY, sagaDeleteProduct);
}
//

export default function* productSagas() {
  yield all([
    call(onFetchProducts),
    call(onFetchProduct),
    call(onAddProduct),

    call(onDeleteProduct),
  ]);
}
