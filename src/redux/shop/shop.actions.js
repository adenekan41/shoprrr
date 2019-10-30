import { shopTypes } from "./shop.types";


export const updateShopData = (shopdata) => ({
    type: shopTypes.UPDATE_SHOP_DATA,
    payload: shopdata
})
