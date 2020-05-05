import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFaliure = err => ({
  type: UserActionTypes.SIGN_IN_FALIURE,
  payload: err.message,
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = err => ({
  type: UserActionTypes.SIGN_OUT_FALIURE,
  payload: err,
});

export const signupStart = userData => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userData,
});
export const signupSuccess = userData => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: userData,
});
export const signupFailure = err => ({
  type: UserActionTypes.SIGN_UP_FALIURE,
  payload: err,
});
