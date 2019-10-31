import logger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const middlewears = [thunk]

if(process.env.NODE_ENV === "development"){
    middlewears.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewears))
export const persistor = persistStore(store)
export default {store, persistor};