// import SHOP_DATA from "../../pages/shop/shopData"
import { shopTypes } from "./shop.types"

const initialState = {
    collections: {}
}

const shopReducer = (state = initialState, action) =>{
    switch(action.type){
        case shopTypes.UPDATE_SHOP_DATA: 
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default shopReducer