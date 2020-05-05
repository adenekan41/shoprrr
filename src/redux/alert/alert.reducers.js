import { AlertActionTypes } from './alert.types';
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AlertActionTypes.SET_ALERT:
      return [...state, payload];
    case AlertActionTypes.REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
