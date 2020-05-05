import {combineReducers, createStore} from 'redux';
import macReducer from './Mac-reducer';
import AppleReducer from "./Apple-reducer";
import IphoneReducer from "./Iphone-reducer";
import CartReducer from "./Cart-reducer";

let reducer = combineReducers({
    macPage: macReducer,
    ApplePage: AppleReducer,
    IphonePage: IphoneReducer,
    CartPage: CartReducer
});
let store = createStore(reducer);

window.store = store;

export default store;
