import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk'


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extensnion del navegador => REDUX D

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))); // Esta linea nos permite hacer peticiones a un servidor

/* import {createStore, applyMidleware, compose} from "redux"
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMidleware(thunkMiddleware))
)
*/

export default store; 