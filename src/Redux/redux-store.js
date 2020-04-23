import {combineReducers, createStore} from 'redux';
import macReducer from './Mac-reducer';
import AppleReducer from "./Apple-reducer";

let reducer = combineReducers({
    macPage: macReducer,
    ApplePage: AppleReducer,
});
let store = createStore(reducer);

window.store = store;

export default store;
