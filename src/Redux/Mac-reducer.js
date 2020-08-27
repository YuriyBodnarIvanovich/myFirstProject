const CHANGE_MIN ='CHANGE_MIN';
const CHANGE_MAX ='CHANGE_MAX';
const CHANGE_STATE_OF_CONTENT = 'CHANGE_STATE_OF_CONTENT';
const PUT_ARRAY = 'PUT_ARRAY';
const CHANGE_ID_OF_ITEM_SHOW = 'CHANGE_ID_OF_ITEM_SHOW';
const CHANGE_STATUS_OF_ITEM_SHOW = 'CHANGE_STATUS_OF_ITEM_SHOW';
const OPEN_MACBOOK = 'OPEN_MACBOOK';
const CHANGE_STATUS_DESCRIPTION = 'CHANGE_STATUS_DESCRIPTION';
const CHANGE_INDEX_OF_MAIN_PHOTO = 'CHANGE_INDEX_OF_MAIN_PHOTO';

let initialState = {
    description:'Ноутбуки MacBook, Air и Pro\n' +
        '                            MacBook – это один из представителей ноутбуков Apple. Впервые был выпущен в 2006 году в корпусе из черного и белого поликарбоната. Позже модели данной линейки стали выпускать в алюминиевых корпусах, после чего продажу предыдущей версии в черном цвете полностью прекратили.\n' +
        '                            Такой ноутбук уже тогда имел глянцевый экран, не механическую защелку и слегка утопленную клавиатуру. К 2010 году характеристика MacBook выглядела примерно так: процессор Core 2 Duo, видеокарта GeForce 320M, жидкокристаллический тринадцатидюймовый экран с разрешением 1280х800, Wi-Fi и Bluetooth, аналоговые и оптические аудиовходы и аудиовыходы.',

    imgData: [],
    min: 0,
    max: 3,
    centerContentShow:true,

    itemsStatusShow: false,
    idItemsShow: 0,

    macbookOpen: false,
    descriptionStatus: true,

    indexOfMainPhoto: 0

};

const macReducer = (state=initialState,action) =>{
    switch(action.type){
        case CHANGE_MIN:{
            return{
                ...state,
                min: action.min,
            };
        }
        case CHANGE_MAX:{
            return{
                ...state,
                max: action.max,
            };
        }
        case CHANGE_STATE_OF_CONTENT:{
            return{
                ...state,
                centerContentShow: action.showContent,
            };
        }
        case PUT_ARRAY:{
            return{
                ...state,
                imgData: action.newArray
            };
        }
        case CHANGE_ID_OF_ITEM_SHOW:{
            return{
                ...state,
                idItemsShow: action.newId
            }
        }
        case CHANGE_STATUS_OF_ITEM_SHOW:{
            return {
                ...state,
                itemsStatusShow: action.status
            }
        }
        case OPEN_MACBOOK:{
            return {
                ...state,
                macbookOpen: action.status
            }
        }
        case CHANGE_STATUS_DESCRIPTION:{
            return{
                ...state,
                descriptionStatus:action.status
            }
        }
        case CHANGE_INDEX_OF_MAIN_PHOTO:{
            return {
                ...state,
                indexOfMainPhoto: action.index
            }
        }
        default:
            return state;
    }
}

export default macReducer;