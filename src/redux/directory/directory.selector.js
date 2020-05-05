import { createSelector } from 'reselect';

const selectDirectory = state => state.dir;
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
