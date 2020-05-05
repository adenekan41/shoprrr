import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';
import {
  signInSuccess,
  signInFaliure,
  signOutFailure,
  signOutSuccess,
  signupSuccess,
  signupFailure,
} from './user.actions';
import { addAlert } from '../alert/alert.saga';

export function* getSnapshotData(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
    yield call(addAlert, 'Login Succcessfull', 'success');
  } catch (err) {
    yield put(signInFaliure(err));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotData(user);
  } catch (err) {
    yield call(addAlert, err.message, 'danger');
    yield console.log(err);
  }
}

export function* isUserAuth() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield call(getSnapshotData, userAuth);
  } catch (e) {
    yield call(addAlert, e.message, 'danger');
    yield put(signInFaliure(e));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuth);
}

export function* signUserOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield call(addAlert, e.message, 'danger');
    yield put(signOutFailure(e));
  }
}

export function* onSignout() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signUserOut);
}
export function* signInWithEmailAndPassword({ payload }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(
      payload.email,
      payload.password
    );
    yield getSnapshotData(user);
  } catch (err) {
    yield call(addAlert, err.message, 'danger');
    yield console.log(err);
  }
}
export function* signUpUserSuccess({ payload }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(
      payload.email,
      payload.password
    );
    yield call(addAlert, 'Register Succcessful', 'success');
    yield getSnapshotData(user);
  } catch (err) {
    yield call(addAlert, err.message, 'danger');
    yield console.log(err);
  }
}
export function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}
export function* signUpUser({ payload }) {
  const { email, password, displayName } = payload;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(createUserProfileDocument, user, {
      displayName,
    });
    yield put(signupSuccess({ email, password }));
  } catch (err) {
    yield call(addAlert, err.message, 'danger');
    yield put(signupFailure(err));
  }
}
export function* onUserSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser);
}
export function* onUserSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signUpUserSuccess);
}
export function* onUserSignUpFailure() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_FALIURE,
    addAlert,
    'An error occured while trying to create account',
    'danger'
  );
}
export function* onUserSignInFailure() {
  yield takeLatest(
    UserActionTypes.SIGN_IN_FALIURE,
    addAlert,
    'Invalid Credentials',
    'danger'
  );
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignout),
    call(onUserSignUp),
    call(onUserSignUpSuccess),
    call(onUserSignUpFailure),
    call(onUserSignInFailure),
  ]);
}
