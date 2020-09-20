const CHANGE_STATUS_OF_USER = 'CHANGE_STATUS_OF_USER';
const CHANGE_ARRAY_OF_USERS = 'CHANGE_ARRAY_OF_USERS';
const CHANGE_INDEX_OF_USER = 'CHANGE_INDEX_OF_USER';
const CHANGE_INDEX_OF_SLIDE = 'CHANGE_INDEX_OF_SLIDE';

const SHOW_INPUT_BOX = 'SHOW_INPUT_BOX';
const SHOW_SING_UP = 'SHOW_SING_UP';
const SHOW_SING_IN = 'SHOW_SING_IN';

const FILL_USER_NAME = 'FILL_USER_NAME';
const FILL_EMAIL = 'FILL_EMAIL';
const FILL_PASSWORD = 'FILL_PASSWORD';
const Show_Left_Menu = 'Show_Left_Menu';
const SHOW_RIGHT_CART = 'SHOW_RIGHT_CART';
const SHOW_MENU_BLOCK = 'SHOW_MENU_BLOCK';
const STATUS_OF_ROLE_ADMIN = 'STATUS_OF_ROLE_ADMIN';
const STATUS_OF_ROLE_USER = 'STATUS_OF_ROLE_USER';
const STATUS_OF_ADMIN_PAGE = 'STATUS_OF_ADMIN_PAGE';


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

    indexOfUsers: 0,

    indexOfSlide: 0,

    ShowBox: false,
    ShowSingIn: false,
    ShowSingUp: true,

    userName:'',
    email:'',
    password:'',
    userStatus:false,

    showLeftMenu: false,
    showRightCart: false,
    showMenuBlock:false,

    roleOfAdmin:false,
    roleOfUser:false,

    openAdminPage: false



};

const AppleReducer = (state = Date,action) =>{
    switch (action.type) {
        case CHANGE_STATUS_OF_USER:{
            return {
                ...state,
                userStatus: action.userStatus
            }
        }
        case CHANGE_ARRAY_OF_USERS:{
            console.log(action.array);
            return{
                ...state,
                Users: action.array
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
        case FILL_USER_NAME:{
            return {
                ...state,
                userName:action.userName
            }
        }
        case FILL_EMAIL:{
            return {
                ...state,
                email:action.email
            }
        }
        case FILL_PASSWORD:{
            return {
                ...state,
                password:action.password
            }
        }
        case Show_Left_Menu:{
            return {
                ...state,
                showLeftMenu: action.status
            }
        }
        case SHOW_MENU_BLOCK:{
            return {
                ...state,
                showMenuBlock: action.status
            }
        }
        case SHOW_RIGHT_CART:{
            return {
                ...state,
                showRightCart: action.status
            }
        }
        case STATUS_OF_ROLE_ADMIN:{
            return {
                ...state,
                roleOfAdmin: action.status
            }
        }
        case STATUS_OF_ROLE_USER:{
            return {
                ...state,
                roleOfUser: action.status
            }
        }
        case STATUS_OF_ADMIN_PAGE:{
            return{
                ...state,
                openAdminPage: action.status
            }
        }

    }
    return state;
}

export default AppleReducer;