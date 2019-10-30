import { createSelector } from "reselect"

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneaker:2,
//     jackets:3,
//     womens: 4,
//     mens:5 
// }
const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => {
        console.log(collections)
        return(
            collections[key]
        )}
        )
)
export const selectCollection = collectionUrlParam => {
    // console.log(collectionUrlParam)
    return (
        createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
        // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    ))
    }
