import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from 'redux/saga/shop.saga';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
