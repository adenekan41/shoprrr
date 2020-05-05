import { takeLatest, call, put, all } from 'redux-saga/effects';
import shopTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put({
      type: shopTypes.SHOP_FETCHING_SUCCESS,
      payload: collectionsMap,
    });
  } catch (err) {
    yield put({
      type: shopTypes.SHOP_FETCHING_FALIURE,
      payload: err.message,
    });
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(shopTypes.SHOP_FETCHING_START, fetchCollectionsStartAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
