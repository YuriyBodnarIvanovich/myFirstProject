const CHANGE_ARRAY = 'CHANGE_ARRAY';
const CHANGE_ARRAY_ITEMS = 'CHANGE_ARRAY_ITEMS';
const CHANGE_MAIN_INDEX = 'CHANGE_MAIN_INDEX';

let initialDate ={
     iPhones: [
        {
            key: 0,
            name: 'Apple iPhone 7', price:'10499',
            character: {
                screen: '(4.7", IPS, 1334x750)',processor:'Apple A10 Fusion',
                RAM:'2 ГБ',internalMemory:'32 ГБ',
                operatingSystem:'iOS 10',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                camera:{
                    basicCamera:'12 Мп',
                    frontCamera:'7 Мп'
                },
            },
            photo:[
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

            buttonTextOfCameraOptionsNormal: '12 and 7',
            buttonTextOfCameraOptionsPrime: '14 and 9',

            buttonTextOfMemoryNormal: '64 Гб',
            buttonTextOfMemoryPrime: '128 Гб',

            buttonTextOfRAMNormal:'4',
            buttonTextOfRAMPrime:'6'


        },
         {
             key: 1,
             name: 'Apple iPhone 8', price:13999,
             character: {
                 screen: '(4.7", IPS, 1334х750)',processor:'Apple A11 Bionic',
                 RAM:'2 ГБ',internalMemory:'64 ГБ',
                 operatingSystem:'iOS 11',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                 camera:{
                     basicCamera:'12 Мп',
                     frontCamera:'7 Мп'
                 },
             },
             photo:[
                 {
                     id:'Golden',imgUrlOne: 'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298777.jpg',
                     imgUrlTwo:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298881.jpg',
                     imgUrlThree:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298985.jpg',
                 },
                 {
                     id:'Black',imgUrlOne: 'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299193.jpg',
                     imgUrlTwo: 'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299297.jpg',
                     imgUrlThree: 'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299401.jpg',
                 },
                 {
                     id:'Rose',imgUrlOne:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299609.jpg',
                     imgUrlTwo:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299713.jpg',
                     imgUrlThree:'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299817.jpg',
                 }
             ],
             stateColorIphone7:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298777.jpg',

             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             buttonTextOfCameraOptionsNormal: '14 and 9',
             buttonTextOfCameraOptionsPrime: '16 and 9',

             buttonTextOfMemoryNormal: '128 Гб',
             buttonTextOfMemoryPrime: '264 Гб',

             buttonTextOfRAMNormal:'6',
             buttonTextOfRAMPrime:'7'
         },
         {
             key:2,
             name: 'Apple iPhone 11 Pro', price:32999,
             character: {
                 screen: '(5.8", OLED (Super Retina XDR)',processor:'Apple A13 Bionic',
                 RAM:'4 ГБ',internalMemory:'64 ГБ',
                 operatingSystem:'iOS 13',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                 camera:{
                     basicCamera:'12 Мп',
                     frontCamera:'12 Мп'
                 },
             },
             photo:[
                 {
                     id:'Golden',imgUrlOne: 'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865069.jpg',
                     imgUrlTwo:'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865202.png',
                     imgUrlThree:'https://i1.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865307.jpg',
                 },
                 {
                     id:'Black',imgUrlOne: 'https://i2.rozetka.ua/goods/14907028/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907028830.jpg',
                     imgUrlTwo: 'https://i1.rozetka.ua/goods/14907029/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907029180.jpg',
                     imgUrlThree: 'https://i2.rozetka.ua/goods/14907029/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907029866.jpg',
                 },
                 {
                     id:'Rose',imgUrlOne:'https://i1.rozetka.ua/goods/14907014/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907014382.jpg',
                     imgUrlTwo:'https://i1.rozetka.ua/goods/14907016/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907016608.png',
                     imgUrlThree:'https://i1.rozetka.ua/goods/14907018/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907018099.jpg',
                 }
             ],
             stateColorIphone7:'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865069.jpg',

             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             buttonTextOfCameraOptionsNormal: '14 and 14',
             buttonTextOfCameraOptionsPrime: '16 and 16',

             buttonTextOfMemoryNormal: '128 Гб',
             buttonTextOfMemoryPrime: '256 Гб',

             buttonTextOfRAMNormal:'6',
             buttonTextOfRAMPrime:'8'
         },
         {
             key: 3,//false not active
             name: 'Apple iPhone 7', price:10499,
             character: {
                 screen: '(4.7", IPS, 1334x750)',processor:'Apple A10 Fusion',
                 RAM:'2 ГБ',internalMemory:'32 ГБ',
                 operatingSystem:'iOS 10',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                 camera:{
                     basicCamera:'12 Мп',
                     frontCamera:'7 Мп'
                 },
             },
             photo:[
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
         },
    ],

    iPhonesItems:[
        {
            key:0,
            name: 'Apple iPhone 7', price:10499,
            character: {
                screen: '(4.7", IPS, 1334x750)',processor:'Apple A10 Fusion',
                RAM:'2 ГБ',internalMemory:'32 ГБ',
                operatingSystem:'iOS 10',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                camera:{
                    basicCamera:'12 Мп',
                    frontCamera:'7 Мп'
                },
            },
            photo:[
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
        },
        {
            key:1,
            name: 'Apple iPhone 8', price:13999,
            character: {
                screen: '(4.7", IPS, 1334х750)',processor:'Apple A11 Bionic',
                RAM:'2 ГБ',internalMemory:'64 ГБ',
                operatingSystem:'iOS 11',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                camera:{
                    basicCamera:'12 Мп',
                    frontCamera:'7 Мп'
                },
            },
            photo:[
                {
                    id:'Golden',imgUrlOne: 'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298777.jpg',
                    imgUrlTwo:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298881.jpg',
                    imgUrlThree:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298985.jpg',
                },
                {
                    id:'Black',imgUrlOne: 'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299193.jpg',
                    imgUrlTwo: 'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299297.jpg',
                    imgUrlThree: 'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299401.jpg',
                },
                {
                    id:'Rose',imgUrlOne:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299609.jpg',
                    imgUrlTwo:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299713.jpg',
                    imgUrlThree:'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299817.jpg',
                }
            ],
            stateColorIphone7:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298777.jpg',

            buttonNormalPrimeStatus: true,
            buttonCameraPrimeStatus: true,
            buttonMemoryNormalStatus:true,
            buttonMemoryPrimeStatus:true,
            buttonRAM_NormalStatus:true,
            buttonRAM_PrimeStatus:true,
        },
        {
            key:2,
            name: 'Apple iPhone 11 Pro', price:32999,
            character: {
                screen: '(5.8", OLED (Super Retina XDR)',processor:'Apple A13 Bionic',
                RAM:'4 ГБ',internalMemory:'64 ГБ',
                operatingSystem:'iOS 13',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                camera:{
                    basicCamera:'12 Мп + 12Мп + 12 Мп',
                    frontCamera:'12 Мп'
                },
            },
            photo:[
                {
                    id:'Golden',imgUrlOne: 'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865069.jpg',
                    imgUrlTwo:'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865202.png',
                    imgUrlThree:'https://i1.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865307.jpg',
                },
                {
                    id:'Black',imgUrlOne: 'https://i2.rozetka.ua/goods/14907028/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907028830.jpg',
                    imgUrlTwo: 'https://i1.rozetka.ua/goods/14907029/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907029180.jpg',
                    imgUrlThree: 'https://i2.rozetka.ua/goods/14907029/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907029866.jpg',
                },
                {
                    id:'Rose',imgUrlOne:'https://i1.rozetka.ua/goods/14907014/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907014382.jpg',
                    imgUrlTwo:'https://i1.rozetka.ua/goods/14907016/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907016608.png',
                    imgUrlThree:'https://i1.rozetka.ua/goods/14907018/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907018099.jpg',
                }
            ],
            stateColorIphone7:'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865069.jpg',

            buttonNormalPrimeStatus: true,
            buttonCameraPrimeStatus: true,
            buttonMemoryNormalStatus:true,
            buttonMemoryPrimeStatus:true,
            buttonRAM_NormalStatus:true,
            buttonRAM_PrimeStatus:true,
        },
    ],


    indexOfMainArray: 0

}

const IphoneReducer = (state=initialDate,action) =>{
    switch (action.type) {
        case CHANGE_ARRAY:{
            return {
                ...state,
                iPhones: action.array
            }
        }
        case CHANGE_ARRAY_ITEMS:{
            return {
                ...state,
                iPhonesItems: action.array
            }
        }
        case CHANGE_MAIN_INDEX:{
            return{
                ...state,
                indexOfMainArray: action.newIndex
            }
        }
    }
    return state;
}

export const changeMainArray = (newArray) =>({type:CHANGE_ARRAY,array:newArray})
export const changeIphoneItemsArray = (newArray) =>({type:CHANGE_ARRAY_ITEMS,array:newArray})
export const changeMainIndex = (newIndex) =>({type:CHANGE_MAIN_INDEX,newIndex:newIndex})

export default IphoneReducer;
