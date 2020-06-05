const CHANGE_ARRAY = 'CHANGE_ARRAY';
const CHANGE_ARRAY_ITEMS = 'CHANGE_ARRAY_ITEMS';
const CHANGE_MAIN_INDEX = 'CHANGE_MAIN_INDEX';
const CHANGE_MIN_IPHONES = 'CHANGE_MIN_IPHONES';
const CHANGE_MAX_IPHONES = 'CHANGE_MAX_IPHONES';
const CHANGE_STATUS_UP = 'CHANGE_STATUS_UP';
const CHANGE_STATUS_DAWN = 'CHANGE_STATUS_DAWN';
const CHANGE_MAIN_COLOR = 'CHANGE_MAIN_COLOR';
const CHANGE_NUMBER_CLICK_DOWN = 'CHANGE_NUMBER_CLICK_DOWN';
const CHANGE_ADMIN_INDEX = 'CHANGE_ADMIN_INDEX';
const CHANGE_KEY_OF_ITEMS = 'CHANGE_KEY_OF_ITEMS';
const CHANGE_STATUS_OF_ITEM_PHONE = 'CHANGE_STATUS_OF_ITEM_PHONE';
const CHANGE_INDEX_OF_PHOTO = 'CHANGE_INDEX_OF_PHOTO';
const CHANGE_INDEX_OF_COLOR = 'CHANGE_INDEX_OF_COLOR';
const CHANGE_STATUS_OF_OPTION_BUTTON_IPHONE = 'CHANGE_STATUS_OF_OPTION_BUTTON_IPHONE';

let initialDate ={
    iPhones: [],
    indexOfMainArray: 0,
    indexOfPhoto: 1,
    indexOfColor: 0,
    min: 0,
    max: 3,
    statusUp: false,
    statusDawn: true,
    numberClickDown: 3,
    adminIndex: 0,
    statusOfOptionButton: false,
}

const IphoneReducer = (state=initialDate,action) =>{
    switch (action.type) {
        case CHANGE_ARRAY:{
            return {
                ...state,
                iPhones: action.array
            }
        }
        case CHANGE_MIN_IPHONES:{
            return{
                ...state,
                min: action.value
            }
        }
        case CHANGE_MAX_IPHONES:{
            return{
                ...state,
                max: action.value
            }
        }
        case CHANGE_STATUS_UP:{
            return{
                ...state,
                statusUp: action.status
            }
        }
        case CHANGE_STATUS_DAWN:{
            return{
                ...state,
                statusDawn: action.status
            }
        }
        case CHANGE_MAIN_COLOR:{
            return{
                ...state,
                iPhones: {
                    ...state.iPhones,
                    mainColor:action.color
                }
            }
        }
        case CHANGE_NUMBER_CLICK_DOWN:{
            return{
                ...state,
                numberClickDown:action.number
            }
        }
        case CHANGE_ADMIN_INDEX:{
            return{
                ...state,
                adminIndex:action.index
            }
        }
        case CHANGE_KEY_OF_ITEMS:{
            return{
                ...state,
                key: action.key
            }
        }
        case CHANGE_MAIN_INDEX:{
            return{
                ...state,
                indexOfMainArray: action.index
            }
        }
        case CHANGE_INDEX_OF_PHOTO: {
            return {
                ...state,
                indexOfPhoto: action.newIndex
            }
        }
        case CHANGE_INDEX_OF_COLOR:{
            return{
                ...state,
                indexOfColor:action.newIndex
            }
        }
        case CHANGE_STATUS_OF_OPTION_BUTTON_IPHONE:{
            return{
                ...state,
                statusOfOptionButton: action.upStatus
            }
        }
    }
    return state;
}

export const changeMainArray = (newArray) =>({type:CHANGE_ARRAY,array:newArray})
export const changeAdminIndex = (index) =>({type:CHANGE_ADMIN_INDEX,index:index})
export const changeKeyOfItems = (key) =>({type:CHANGE_KEY_OF_ITEMS,key:key})

export default IphoneReducer;
