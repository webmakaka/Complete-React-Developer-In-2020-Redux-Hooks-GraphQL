import { all, call, takeLatest, put } from 'redux-saga/effects';

import { SIGN_OUT_SUCCESS } from 'redux/types/user.types';

import { clearCart } from 'redux/actions/cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSugnOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSugnOutSuccess)]);
}
