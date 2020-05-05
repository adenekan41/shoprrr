import { put, call } from 'redux-saga/effects';
import { setAlert, removeAlert } from '../alert/alert.actions';
import uuid from 'uuid';

let to;

function* sleep(time) {
  yield new Promise(resolve => {
    to = setTimeout(resolve, time);
  });
}
function* clear() {
  yield new Promise(resolve => {
    clearTimeout(to);
    resolve();
  });
}
function* updateAlert(id) {
  yield call(clear);
  yield call(sleep, 4000);
  yield put(removeAlert(id));
}

export function* addAlert(msg, type) {
  const id = uuid.v4();
  try {
    yield put(setAlert(msg, type, id));
    yield updateAlert(id);
  } catch (e) {
    yield console.error(e);
  }
}
