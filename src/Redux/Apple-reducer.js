const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_STATUS_OF_SHOW_INPUT_BOX = 'CHANGE_STATUS_OF_SHOW_INPUT_BOX';
const CHANGE_STATUS_OF_SING = 'CHANGE_STATUS_OF_SING';
const CHANGE_STATUS_OF_ERROR_SING_IN = 'CHANGE_STATUS_OF_ERROR_SING_IN';
const CHANGE_STATUS_OF_USER = 'CHANGE_STATUS_OF_USER';
const CHANGE_STATUS_OF_USER_MENU = 'CHANGE_STATUS_OF_USER_MENU';
const CHANGE_STATUS_OF_PROFILE_SETTING = "CHANGE_STATUS_OF_PROFILE_SETTING";
const CHANGE_STATUS_OF_CART_ADDITIONALLY = "CHANGE_STATUS_OF_CART_ADDITIONALLY";
const CHANGE_STATUS_OF_DELIVERY = 'CHANGE_STATUS_OF_DELIVERY';
const CHANGE_ARRAY_OF_USERS = 'CHANGE_ARRAY_OF_USERS';
const CHANGE_FIELD_OF_NEW_USER = 'CHANGE_FIELD_OF_NEW_USER';
const CHANGE_INDEX_OF_USER = 'CHANGE_INDEX_OF_USER';
const CHANGE_INDEX_OF_SLIDE = 'CHANGE_INDEX_OF_SLIDE';

const SHOW_INPUT_BOX = 'SHOW_INPUT_BOX';
const SHOW_SING_UP = 'SHOW_SING_UP';
const SHOW_SING_IN = 'SHOW_SING_IN';

const Date = {
    slideData:[
        {
            photo:'https://jabko.ua/image/cachewebp/cataloge-2/slider/pc/%D1%81%D0%B0%D0%B9%D1%82%2010.2-02%20(1)-max-400.webp',
            textOfButton:'Open'
        },
        {
            photo:'https://jabko.ua/image/cachewebp/cataloge-2/slider/pc/321-max-400.webp',
            textOfButton:'Open'
        },
        {
            photo:'https://jabko.ua/image/cachewebp/cataloge-2/slider/pc/%D1%81%D0%B0%D0%B9%D1%82%201-4_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%201-max-400.webp',
            textOfButton:'Open'
        },
        {
            photo:'https://jabko.ua/image/cachewebp/cataloge-2/slider/pc/%D1%81%D0%B0%D0%B9%D1%82%2010.2-2-max-400.webp',
            textOfButton:'Open'
        }
    ],
    Users:[],
    newItemsOfCart:[
        {
            name:'',
            color:'',
            price:''
        }
    ],
    newElement: [
        {
            name:'',
            email:'',
            password:'',
            mainPhoto:'',
            adminStatus: false,
            CartList:[]
        },
    ],

    email: '',//дані які порівнюються при вході 'sing', тобто дані самого користувача
    password:'',
    userStatus:false,
    exception:false,

    indexOfUsers: 0,

    showInputBox: false,//для загальної компоненти вводу даних
    singStatus: true,//для вибору реєстрації чи входу

    userMenuStatus:false,

    profileSettingStatus: true,
    cartAdditionallyStatus: false,
    delivery:false,

    indexOfSlide: 0,

    ShowBox: true,//SingIn or SingUp
    ShowSingIn: false,
    ShowSingUp: true

};

const AppleReducer = (state = Date,action) =>{
    switch (action.type) {
        case CHANGE_EMAIL:{
            console.log(action.emailAdr)
            return {
                ...state,
                email: action.emailAdr
            }
        }
        case CHANGE_PASSWORD:{

            return{
                ...state,
                password: action.PasswordUser
            }
        }

        case CHANGE_STATUS_OF_SHOW_INPUT_BOX:{//new items
            return{
                ...state,
                showInputBox: action.status
            }
        }
        case CHANGE_STATUS_OF_SING:{
            return {
                ...state,
                singStatus:action.status
            }
        }
        case CHANGE_STATUS_OF_ERROR_SING_IN:{
            return{
                ...state,
                exception: action.exception
            }
        }
        case CHANGE_STATUS_OF_USER:{
            return {
                ...state,
                userStatus: action.userStatus
            }
        }
        case CHANGE_STATUS_OF_USER_MENU:{
            return {
                ...state,
                userMenuStatus: action.status
            }
        }
        case CHANGE_STATUS_OF_PROFILE_SETTING:{
            return{
                ...state,
                profileSettingStatus: action.status
            }
        }
        case CHANGE_STATUS_OF_CART_ADDITIONALLY:{
            return{
                ...state,
                cartAdditionallyStatus: action.status
            }
        }
        case CHANGE_STATUS_OF_DELIVERY:{
            return {
                ...state,
                delivery:action.status
            }
        }
        case CHANGE_ARRAY_OF_USERS:{
            return{
                ...state,
                Users: action.newArray
            }
        }
        case CHANGE_FIELD_OF_NEW_USER:{
            return{
                ...state,
                newElement: action.newElement
            }
        }
        case CHANGE_INDEX_OF_USER:{
            return{
                ...state,
                indexOfUsers: action.newIndex
            }
        }
        case CHANGE_INDEX_OF_SLIDE:{
            return{
                ...state,
                indexOfSlide: action.index
            }
        }
        case SHOW_INPUT_BOX:{
            return {
                ...state,
                ShowBox: action.status
            }
        }
        case SHOW_SING_UP:{
            return {
                ...state,
                ShowSingUp: action.status
            }
        }
        case SHOW_SING_IN:{
            return {
                ...state,
                ShowSingIn: action.status
            }
        }
    }
    return state;
}

export default AppleReducer;