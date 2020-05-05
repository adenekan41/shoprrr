import { createSelector } from 'reselect';
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
export const selectisLoading = createSelector(
  [selectShop],
  shop => shop.isLoading
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    Object.keys(collections).map(key => {
      return collections[key];
    })
);
export const selectCollection = collectionUrlParam => {
  return createSelector([selectCollections], collections => {
    console.log(collections);
    return collections ? collections[collectionUrlParam] : null;
  });
};
