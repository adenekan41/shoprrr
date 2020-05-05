import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FALIURE:
    case UserActionTypes.SIGN_OUT_FALIURE:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
