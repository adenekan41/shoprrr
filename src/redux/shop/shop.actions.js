import { shopTypes } from "./shop.types";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";


/**
 * 
 * @param {MyOWNWAY} dispatch 
 */
export const updateShopData = () => dispatch => {
    dispatch({
        type: shopTypes.SHOP_FETCHING_START
    })
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch({
            type: shopTypes.SHOP_FETCHING_SUCCESS,
            payload: collectionsMap
        })
    }).catch(err => {
        dispatch({
            type:shopTypes.SHOP_FETCHING_FALIURE,
            payload: err
        })
    })
    /**
     * 
     * @param {MyOWNWAY} Using try and catch method
     */
    // try {
    //     dispatch({
    //         type: shopTypes.SHOP_FETCHING_START
    //     })
    //     const collection = await firestore.collection('collections').get()
    //     const collectionsMap = convertCollectionsSnapshotToMap(collection)
    //     dispatch({
    //         type: shopTypes.SHOP_FETCHING_SUCCESS,
    //         payload: collectionsMap
    //     })

    // } catch (e) {
    //     dispatch({
    //         type:shopTypes.SHOP_FETCHING_FALIURE,
    //         payload: e
    //     })
    // }
   
    
}

// /**
//  * 
//  * @param {YIUAH'SWAY} dispatch 
//  */
// export const fetchCollectionsStart = () => ({
//     type: shopTypes.SHOP_FETCHING_START
// })

// export const fetchCollectionsSuccess = collectionsMap => ({
//     type: shopTypes.SHOP_FETCHING_SUCCESS,
//     payload: collectionsMap
// })

// export const fetchCollectionsFailure = error => ({
//     type: shopTypes.SHOP_FETCHING_FALIURE,
//     payload: error
// })

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectionRef.get().then(snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//             dispatch(fetchCollectionsSuccess(collectionsMap))
//         }).catch(err => {
//             dispatch(fetchCollectionsFailure(err.message))
//         })

//     }
// }