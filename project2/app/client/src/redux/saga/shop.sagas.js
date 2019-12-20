import { takeEvery } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../types/shop.types';

export function* fetchCollectionsAsync() {
  yield console.log('I am fired');
}

export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
