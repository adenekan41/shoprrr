import { combineReducers } from 'redux';

import userReducer from './user/user.reducers';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import alertReducers from './alert/alert.reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};
export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  alerts: alertReducers,
  shop: shopReducer,
  dir: directoryReducer,
});
export default persistReducer(persistConfig, rootReducer);
