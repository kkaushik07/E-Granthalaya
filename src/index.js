import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {persistStore} from 'redux-persist'
import {PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk'


import './index.css';
import App from './App';
import reducers from './redux/reducers/userReducers'

const store = createStore(reducers,applyMiddleware(thunk))
const persistor = persistStore(store)

ReactDOM.render(
<Provider  store={store} >
<PersistGate persistor={persistor}>
<App /> 
</PersistGate>
</Provider>
,document.getElementById('root'));


