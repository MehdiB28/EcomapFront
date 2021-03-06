import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
import reduxPromise from 'redux-promise'

import dataCard from './reducers/cards_reducers';



const reducers=combineReducers({dataCard: dataCard})

const middleware=applyMiddleware(logger,reduxPromise)
    
ReactDOM.render(
<Provider store={createStore(reducers,{},middleware)}>
    <App />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




