import { all, call } from 'redux-saga/effects';

import { shopSagas } from 'redux/saga/shop.saga';
import { userSagas } from 'redux/saga/user.saga';
import { cartSagas } from 'redux/saga/cart.saga';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
