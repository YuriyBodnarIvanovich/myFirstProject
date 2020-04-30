const CHANGE_COLOR = 'CHANGE_COLOR';
const CHANGE_FRONT_CAMERA = 'CHANGE_FRONT_CAMERA';
const CHANGE_BASIC_CAMERA = 'CHANGE_BASIC_CAMERA';
const CHANGE_INTERNAL_MEMORY = 'CHANGE_INTERNAL_MEMORY';
const CHANGE_RAM = 'CHANGE_RAM';
const CHANGE_PRICE = 'CHANGE_PRICE';

const CHANGE_NORMAL_BUTTON = 'CHANGE_NORMAL_BUTTON';//Change name!!!

const CHANGE_PRIME_BUTTON_CAMERA = 'CHANGE_PRIME_BUTTON_CAMERA';

const CHANGE_NORMAL_BUTTON_MEMORY = 'CHANGE_NORMAL_BUTTON_MEMORY';
const CHANGE_PRIME_BUTTON_MEMORY = 'CHANGE_PRIME_BUTTON_MEMORY';

const CHANGE_NORMAL_BUTTON_RAM = 'CHANGE_NORMAL_BUTTON_RAM';
const CHANGE_PRIME_BUTTON_RAM = 'CHANGE_PRIME_BUTTON_RAM';

let initialDate = {
    iphone7: {
        name:'Apple iPhone 7', price:10499,
        character: {
            screen: '(4.7", IPS, 1334x750)',processor:'Apple A10 Fusion',
            RAM:'2 ГБ',internalMemory:'32 ГБ',
            operatingSystem:'iOS 10',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
            camera:{
                basicCamera:'12 Мп',
                frontCamera:'7 Мп'
            },
        },
    },
    iphone7Color:[
        {
            id:'Golden',imgUrlOne: 'https://i1.rozetka.ua/goods/1757072/apple_iphone_7_32gb_gold_images_1757072500.jpg',
            imgUrlTwo:'https://i1.rozetka.ua/goods/1748261/apple_iphone_7_32gb_gold_images_1748261418.jpg',
            imgUrlThree:'https://i2.rozetka.ua/goods/1748261/apple_iphone_7_32gb_gold_images_1748261600.jpg',
        },
        {
            id:'Black',imgUrlOne: 'https://i1.rozetka.ua/goods/1757072/apple_iphone_7_32gb_black_images_1757072045.jpg',
            imgUrlTwo: 'https://i1.rozetka.ua/goods/1748262/apple_iphone_7_32gb_black_images_1748262601.jpg',
            imgUrlThree: 'https://i2.rozetka.ua/goods/1748262/apple_iphone_7_32gb_black_images_1748262783.jpg',
        },
        {
            id:'Rose',imgUrlOne:'https://i2.rozetka.ua/goods/1757073/apple_iphone_7_32gb_rose_gold_images_1757073228.jpg',
            imgUrlTwo:'https://i1.rozetka.ua/goods/1748260/apple_iphone_7_32gb_rose_gold_images_1748260508.jpg',
            imgUrlThree:'https://i2.rozetka.ua/goods/1748260/apple_iphone_7_32gb_rose_gold_images_1748260872.jpg',
        }
    ],
    stateColorIphone7:'https://i1.rozetka.ua/goods/1757072/apple_iphone_7_32gb_gold_images_1757072500.jpg',

    buttonNormalPrimeStatus: true,
    buttonCameraPrimeStatus: true,

    buttonMemoryNormalStatus:true,
    buttonMemoryPrimeStatus:true,

    buttonRAM_NormalStatus:true,
    buttonRAM_PrimeStatus:true,
}

const IphoneReducer = (state=initialDate,action) =>{
    switch (action.type) {
        case CHANGE_COLOR:{
            return {
                ...state,
                stateColorIphone7: action.stateColorIphone7
            }
        }
        case CHANGE_FRONT_CAMERA:{
            return {
                ...state,
                iphone7: {
                    ...state.iphone7,
                    character: {
                        ...state.iphone7.character,
                        camera:{
                            ...state.iphone7.character.camera,
                            frontCamera: action.cameraFront,
                        }
                    }
                }
            }
        }
        case CHANGE_BASIC_CAMERA:{
            return{
                ...state,
                iphone7: {
                    ...state.iphone7,
                    character: {
                        ...state.iphone7.character,
                        camera:{
                            ...state.iphone7.character.camera,
                            basicCamera: action.cameraBasic,
                        }
                    }
                }
            }
        }
        case CHANGE_INTERNAL_MEMORY:{
            return{
                ...state,
                iphone7: {
                    ...state.iphone7,
                    character: {
                        ...state.iphone7.character,
                        internalMemory: action.memory
                    }
                }
            }
        }
        case CHANGE_RAM:{
            return{
                ...state,
                iphone7: {
                    ...state.iphone7,
                    character: {
                        ...state.iphone7.character,
                        RAM: action.ram
                    }
                }
            }
        }
        case CHANGE_PRICE:{
            return {
                ...state,
                iphone7: {
                    ...state.iphone7,
                    price: action.price
                }
            }
        }
        case CHANGE_NORMAL_BUTTON:{
            return{
                ...state,
                buttonNormalPrimeStatus: action.status
            }
        }
        case CHANGE_PRIME_BUTTON_CAMERA:{
            return{
                ...state,
                buttonCameraPrimeStatus: action.status
            }
        }
        case CHANGE_NORMAL_BUTTON_MEMORY:{
            return{
                ...state,
                buttonMemoryNormalStatus: action.status
            }
        }
        case CHANGE_PRIME_BUTTON_MEMORY:{
            return{
                ...state,
                buttonMemoryPrimeStatus:action.status
            }
        }
        case CHANGE_NORMAL_BUTTON_RAM:{
            return{
                ...state,
                buttonRAM_NormalStatus: action.status
            }
        }
        case CHANGE_PRIME_BUTTON_RAM:{
            return{
                ...state,
                buttonRAM_PrimeStatus: action.status
            }
        }
    }
    return state;
}

export const changeColor = (color) => ({type:CHANGE_COLOR,stateColorIphone7: color})
export const changeFrontCamera  = (camera) => ({type:CHANGE_FRONT_CAMERA, cameraFront:camera})
export const changeBasicCamera  = (camera) => ({type:CHANGE_BASIC_CAMERA, cameraBasic:camera})
export const changeInternalMemory  = (memory) => ({type:CHANGE_INTERNAL_MEMORY, memory:memory})
export const changeRAM  = (ram) => ({type:CHANGE_RAM, ram:ram})
export const changePrice = (price) =>({type:CHANGE_PRICE,price:price})
export const changeNormalButton = (status)=>({type:CHANGE_NORMAL_BUTTON,status:status})
export const changeStatusPrimeButtonCamera = (status)=>({type:CHANGE_PRIME_BUTTON_CAMERA,status:status})
export const changeStatusOfMemoryButtonNormal = (status)=>({type:CHANGE_NORMAL_BUTTON_MEMORY,status:status})
export const changeStatusOfMemoryButtonPrime = (status)=>({type:CHANGE_PRIME_BUTTON_MEMORY,status:status})
export const changeStatusOfRAM_NormalButton = (status)=>({type:CHANGE_NORMAL_BUTTON_RAM,status:status})
export const changeStatusOfRAM_PrimeButton = (status)=>({type:CHANGE_PRIME_BUTTON_RAM,status:status})
export default IphoneReducer;