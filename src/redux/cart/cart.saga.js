import { takeLatest, put, call, all } from 'redux-saga/effects'
import { CartActionTypes } from './cart.types'
import { functions } from 'firebase'
import { UserActionTypes } from '../user/user.types'
import { onclearCart } from './cart.actions'

export function* clearCart(){
    try {
        yield put(onclearCart())
    } catch (e) {
        yield console.error(e)
    }
}
export function* onSIgnOutSuccess (){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCart
    )
}
export function* cartSagas(){
    yield all([
        call(onSIgnOutSuccess)
    ])
}