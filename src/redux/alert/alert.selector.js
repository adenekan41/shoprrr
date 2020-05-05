import { createSelector } from 'reselect';

const selectAlert = state => state.alerts;

export const selectAlertItems = createSelector([selectAlert], alert => alert);
