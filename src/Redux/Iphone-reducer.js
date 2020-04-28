const CHANGE_COLOR = 'CHANGE_COLOR';

let initialDate = {
    iphone7:[
        {name:'Apple iPhone 7', price:10499,
            character:'Экран (4.7", IPS, 1334x750)/ Apple A10 Fusion/ основная камера: 12 Мп, фронтальная камера: ' +
                '7 Мп/ RAM 2 ГБ/ 32 ГБ встроенной памяти/ 3G/ LTE/ GPS/ Nano-SIM/ iOS 10'
        }
    ],
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
}

const IphoneReducer = (state=initialDate,action) =>{
    switch (action.type) {
        case CHANGE_COLOR:{
            console.log(action.stateColorIphone7)
            return {
                ...state,
                stateColorIphone7: action.stateColorIphone7
            }
        }
    }
    return state;

}

export const changeColor = (color) => ({type:CHANGE_COLOR,stateColorIphone7: color})
export default IphoneReducer;