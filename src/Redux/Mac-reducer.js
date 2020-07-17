const CHANGE_MIN ='CHANGE_MIN';
const CHANGE_MAX ='CHANGE_MAX';
const CHANGE_STATE_OF_CONTENT = 'CHANGE_STATE_OF_CONTENT';
const PUT_ARRAY = 'PUT_ARRAY';
const CHANGE_ID_OF_ITEM_SHOW = 'CHANGE_ID_OF_ITEM_SHOW';
const CHANGE_STATUS_OF_ITEM_SHOW = 'CHANGE_STATUS_OF_ITEM_SHOW';
const CHANGE_STATUS_OF_MODAL_PHOTO = 'CHANGE_STATUS_OF_MODAL_PHOTO';
const CHANGE_INDEX_OF_MODAL_PHOTO = 'CHANGE_INDEX_OF_MODAL_PHOTO';

let initialState = {
    imgData: [],
    min: 0,
    max: 3,
    centerContentShow:true,

    itemsStatusShow: false,
    idItemsShow: 0,
    statusOfModalWindow: false,
    indexOfModalPhoto: 0,

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
        case CHANGE_STATUS_OF_MODAL_PHOTO:{
            return{
                ...state,
                statusOfModalWindow: action.status
            }
        }
        case CHANGE_INDEX_OF_MODAL_PHOTO:{
            return{
                ...state,
                indexOfModalPhoto: action.newIndex
            }
        }
        default:
            return state;
    }
}

export default macReducer;