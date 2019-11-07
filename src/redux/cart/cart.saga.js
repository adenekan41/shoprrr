import { takeLatest, put, call, all } from 'redux-saga/effects'
import { CartActionTypes } from './cart.types'
import { functions } from 'firebase'
import { UserActionTypes } from '../user/user.types'
import { onclearCart } from './cart.actions'
import uuid from 'uuid'
import { addAlert } from '../alert/alert.saga'
export function* clearCart(){
    try {
        yield put(onclearCart())
    } catch (e) {
        yield console.error(e)
    }
}

// function* twoSeconds () {
//     yield new Promise(resolve => {
//         setTimeout(() => {
//             alert('Hello Hell Fire!');
//         }, 2000);
//     });
// }

export function* onSIgnOutSuccess (){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCart
    )
}
export function* onCartItemAdd () {
    yield takeLatest ( 
        CartActionTypes.ADD_ITEM,
        addAlert,
        'Item Has Been Successfully added to cart', 'success'
    )
}
export function* onCartItemRemove () {
    yield takeLatest ( 
        CartActionTypes.REMOVE_ITEM,
        addAlert,
        'Item Has Been Successfully removed from cart', 'success'
    )
}
export function* cartSagas(){
    yield all([
        call(onSIgnOutSuccess),
        call(onCartItemAdd),
        call(onCartItemRemove)
    ])
}