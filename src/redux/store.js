import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewears = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewears.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewears));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default { store, persistor };
