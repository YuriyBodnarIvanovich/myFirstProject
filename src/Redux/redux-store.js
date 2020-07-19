import {combineReducers, createStore} from 'redux';
import macReducer from './Mac-reducer';
import AppleReducer from "./Apple-reducer";
import IphoneReducer from "./Iphone-reducer";
import AdminReducer from "./Admin-reducer";

let reducer = combineReducers({
    macPage: macReducer,
    ApplePage: AppleReducer,
    IphonePage: IphoneReducer,
    AdminPage: AdminReducer
});
let store = createStore(reducer);

window.store = store;

export default store;
