import { AlertActionTypes } from './alert.types';

export const setAlert = (msg, alertType, id) => ({
  type: AlertActionTypes.SET_ALERT,
  payload: { msg, alertType, id },
});

export const removeAlert = id => ({
  type: AlertActionTypes.REMOVE_ALERT,
  payload: id,
});
