const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_USERNAME = 'CHANGE_USERNAME';
const CHANGE_STATUS_AUTHENTICATION = 'CHANGE_STATUS_AUTHENTICATION';
const CHANGE_STATUS_SIGNED_IN = 'CHANGE_STATUS_SIGNED_IN';
const SAVED_NAME = 'CHANGE_SAVED_NAME';
const SAVED_EMAIL = 'CHANGE_SAVED_EMAIL';
const SAVED_PASSWORD = 'CHANGE_SAVED_PASSWORD';
const CHANGE_EXCEPTION = 'CHANGE_EXCEPTION';
const HIDE_INPUT_BOX = 'HIDE_INPUT_BOX';


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
    name:'',
    email: '',
    password:'',

    authentication: false,
    signedIn: false,
    exception: true,

    savedName: '',
    savedEmail: '',
    savedPassword: '',


    hideInputBox: true

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
        case CHANGE_USERNAME:{
            console.log(action.UserName)
            return {
                ...state,
                name: action.UserName
            }
        }
        case CHANGE_STATUS_AUTHENTICATION:{
            return{
                ...state,
                authentication: action.authentication
            }
        }
        case CHANGE_STATUS_SIGNED_IN:{
            return{
                ...state,
                signedIn: action.signedIn
            }
        }
        case SAVED_NAME:{
            return{
                ...state,
                savedName: action.savedName
            }
        }
        case SAVED_EMAIL:{
            console.log(action.savedEmail)
            return{
                ...state,
                savedEmail: action.savedEmail
            }
        }
        case SAVED_PASSWORD:{
            return {
                ...state,
                savedPassword: action.savedPassword
            }
        }
        case CHANGE_EXCEPTION:{
            return{
                ...state,
                exception: action.exception
            }
        }
        case HIDE_INPUT_BOX:{
            return{
                ...state,
                hideInputBox: action.hideInputBox
            }
        }

    }
    return state;
}

export const inputEmail= (upEmail) =>({type: CHANGE_EMAIL, emailAdr:upEmail})
export const inputPassword = (upPassword) =>({type:CHANGE_PASSWORD, PasswordUser:upPassword})
export const inputUserName = (upName) =>({type:CHANGE_USERNAME,UserName:upName})
export const changeAuthentication =  (upStatus) =>({type:CHANGE_STATUS_AUTHENTICATION,authentication:upStatus})
export const changeStatusSignedIn = (upStatusSigned) =>({type:CHANGE_STATUS_SIGNED_IN,signedIn: upStatusSigned})
export const saveUserName = (savedName) =>({type:SAVED_NAME,savedName:savedName})
export const saveUserEmail = (savedEmail) =>({type:SAVED_EMAIL,savedEmail:savedEmail})
export const saveUserPassword = (savedPassword) =>({type:SAVED_PASSWORD,savedPassword:savedPassword})
export const changeStateException = (exception)=>({type:CHANGE_EXCEPTION,exception:exception})
export const hideInputBox = (status) =>({type:HIDE_INPUT_BOX,activeButton:status})
export default AppleReducer;