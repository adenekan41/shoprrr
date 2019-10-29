import { UserActionTypes } from "./user.types"

 const INITIAL_STATE = {
     currentUser: null
 }

 const userReducer = (state = INITIAL_STATE , action) => {
    const {type, payload} = action
    switch(type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
 }

 export default userReducer