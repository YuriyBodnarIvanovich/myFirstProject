const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_ADMIN_STATUS = 'CHANGE_ADMIN_STATUS';
const CHANGE_STATUS_OF_SHOW_INPUT_BOX = 'CHANGE_STATUS_OF_SHOW_INPUT_BOX';
const CHANGE_STATUS_OF_SING = 'CHANGE_STATUS_OF_SING';
const CHANGE_SAVED_NAME = 'CHANGE_SAVED_NAME';
const CHANGE_SAVED_EMAIL = 'CHANGE_SAVED_EMAIL';
const CHANGE_SAVED_PASSWORD = 'CHANGE_SAVED_PASSWORD';
const CHANGE_STATUS_OF_ERROR_SING_IN = 'CHANGE_STATUS_OF_ERROR_SING_IN';
const CHANGE_STATUS_OF_USER = 'CHANGE_STATUS_OF_USER';
const CHANGE_STATUS_OF_SING_COMPONENTS ='CHANGE_STATUS_OF_SING_COMPONENTS';
const CHANGE_STATUS_OF_REGISTRATION = 'CHANGE_STATUS_OF_REGISTRATION';


let Date = {
    video: "https://ak7.picdn.net/shutterstock/videos/1023583117/preview/stock-footage-online-banking-with-smart-phone-lifestyle-easy-pay-using-smart-phone-or-digital-device.webm",
    extraInformation: "Apple Inc. is an American multinational technology company headquartered in Cupertino," +
        "                                                    California, that designs, develops, and sells consumer electronics," +
        "                                                    computer software, and online services" +
        "                                                    It is considered one of the Big Four technology companies," +
        "                                                 alongside Amazon, Google, and Microsoft.",
    topPrograms: [
        {imgSrc:"https://a4.mzstatic.com/Purple123/v4/73/e8/5a/73e85a22-f932-d205-9fcb-1f52c8f262d8/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png",
            nameProgram:"Spectre Camera", hrefOfCite:"https://apps.apple.com/us/app/spectre-camera/id1450074595",
            secondName:"Lux Optics LLC", hrefOfCiteSecond:"https://developer.apple.com/app-store/best-of-2019/lux-optics-llc",
            nomination:"iPhone App of the Year",
        },
        {
            imgSrc: "https://a4.mzstatic.com/Purple113/v4/06/48/4d/06484d02-eb27-833b-8949-aaa84fd4432d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png",
            nameProgram: "Flow by Moleskine", hrefOfCite: "https://apps.apple.com/us/app/flow-by-moleskine/id1271361459",
            secondName: "Molskine Srel", hrefOfCiteSecond:"https://developer.apple.com/app-store/best-of-2019/moleskine-srl",
            nomination: "iPad App of the Year",
        },
        {
            imgSrc: "https://a1.mzstatic.com/Purple113/v4/98/1f/a3/981fa3e8-4ff0-efe5-6c20-85b38d7bca83/AppIcon-0-85-220-4-2x.png",
            nameProgram: "Affinity Publisher", hrefOfCite: "https://apps.apple.com/us/app/spectre-camera/id1450074595",
            secondName: "Serif Labs", hrefOfCiteSecond:"https://developer.apple.com/app-store/best-of-2019/lux-optics-llc",
            nomination: "Mac App of the Year",
        },
        {
            imgSrc: "https://developer.apple.com/app-store/best-of-2019/images/the_explorers_r.png",
            nameProgram: "The Explorers", hrefOfCite: "https://apps.apple.com/us/app/the-explorers/id1436285774",
            secondName: "The Explorers Network", hrefOfCiteSecond:"https://developer.apple.com/app-store/best-of-2019/the-explorers-network",
            nomination: "Apple TV App of the Year",
        }
    ],

    savedName: '',//для збереження даних з реєстрації про користувача
    savedEmail: '',
    savedPassword: '',

    email: '',//дані які порівнюються при вході 'sing', тобто дані самого користувача
    password:'',
    userStatus:false,

    adminName: 'adminApple',//admin data for
    passwordAdmin: 'gg',
    adminStatus: false,

    exception:false,

    showInputBox: false,//для загальної компоненти вводу даних
    singStatus: true,//для вибору реєстрації чи входу

    singStatusOfComponent: false,
    registrationStatusOfComponent: false,
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
        case CHANGE_ADMIN_STATUS:{
            return {
                ...state,
                adminStatus: action.status
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
        case CHANGE_SAVED_NAME:{
            return {
                ...state,
                savedName:action.savedName
            }
        }
        case CHANGE_SAVED_EMAIL:{
            return {
                ...state,
                savedEmail:action.savedEmail
            }
        }
        case CHANGE_SAVED_PASSWORD:{
            return{
                ...state,
                savedPassword: action.savedPassword
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
        case CHANGE_STATUS_OF_SING_COMPONENTS:{
            return {
                ...state,
                singStatusOfComponent: action.status
            }
        }
        case  CHANGE_STATUS_OF_REGISTRATION:{
            return{
                ...state,
                registrationStatusOfComponent: action.status
            }
        }

    }
    return state;
}

export default AppleReducer;