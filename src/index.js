import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch, Route, BrowserRouter } from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/store';
ReactDOM.render(
<Provider store={store}>
    <PersistGate persistor={persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        
    </PersistGate>
</Provider>, document.getElementById('root'));
