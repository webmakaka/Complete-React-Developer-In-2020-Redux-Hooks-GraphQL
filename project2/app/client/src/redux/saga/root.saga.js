import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from 'redux/saga/shop.saga';
import { userSagas } from 'redux/saga/user.saga';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
