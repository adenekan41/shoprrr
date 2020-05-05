import shopTypes from './shop.types';
import { firestore } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: shopTypes.SHOP_FETCHING_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopTypes.SHOP_FETCHING_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = error => ({
  type: shopTypes.SHOP_FETCHING_FALIURE,
  payload: error,
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(err => {
        dispatch(fetchCollectionsFailure(err.message));
      });
  };
};
