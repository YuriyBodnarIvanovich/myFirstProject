const CHANGE_ARRAY = 'CHANGE_ARRAY';
const CHANGE_ARRAY_ITEMS = 'CHANGE_ARRAY_ITEMS';
const CHANGE_MAIN_INDEX = 'CHANGE_MAIN_INDEX';
const CHANGE_MIN = 'CHANGE_MIN';
const CHANGE_MAX = 'CHANGE_MAX';
const CHANGE_STATUS_UP = 'CHANGE_STATUS_UP';
const CHANGE_STATUS_DAWN = 'CHANGE_STATUS_DAWN';

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
            buttonTextOfRAMPrime:'6',

            firstColor: '#E8A038',
            secondColor: '#000000',
            thirdColor: '#F39191'

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
             buttonTextOfRAMPrime:'7',

             firstColor: '#E7A4B0',
             secondColor: '#EDD9DD',
             thirdColor: '#000000'

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
             buttonTextOfRAMPrime:'8',

             firstColor: '#000000',
             secondColor: '#5B937A',
             thirdColor: '#FFE4B5'

         },
         {
             key: 3,
             name: 'Apple iPhone Xs', price:20499,
             character: {
                 screen: '(5.8", OLED (Super Retina HD),',processor:'Apple A12 Bionic',
                 RAM:'2 ГБ',internalMemory:'64 ГБ',
                 operatingSystem:'iOS',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                 camera:{
                     basicCamera:'12 Мп',
                     frontCamera:'7 Мп'
                 },
             },
             photo:[
                 {
                     id:'Golden',imgUrlOne: 'https://i8.rozetka.ua/goods/16325894/copy_apple_iphone_xs_64_gb_space_gray_5e1d9b20d628e_images_16325894376.jpg',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/16327526/apple_iphone_xs_64gb_space_gray_images_16327526580.jpg',
                     imgUrlThree:'https://i8.rozetka.ua/goods/16327528/apple_iphone_xs_64gb_space_gray_images_16327528106.jpg',
                 },
                 {
                     id:'Black',imgUrlOne: 'https://i2.rozetka.ua/goods/16325892/copy_apple_iphone_xs_64_gb_silver_5e1d9b1f6c3f7_images_16325892143.jpg',
                     imgUrlTwo: 'https://i8.rozetka.ua/goods/16327349/apple_iphone_xs_64gb_silver_images_16327349522.jpg',
                     imgUrlThree: 'https://i8.rozetka.ua/goods/16327349/apple_iphone_xs_64gb_silver_images_16327349676.jpg',
                 },
                 {
                     id:'Rose',imgUrlOne:'https://i8.rozetka.ua/goods/16325891/copy_apple_iphone_xs_64_gb_gold_5e1d9b1e19f76_images_16325891576.jpg',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/16327178/apple_iphone_xs_64gb_gold_images_16327178582.jpg',
                     imgUrlThree:'https://i8.rozetka.ua/goods/16327178/apple_iphone_xs_64gb_gold_images_16327178855.jpg',
                 }
             ],
             stateColorIphone7:'https://i8.rozetka.ua/goods/16325894/copy_apple_iphone_xs_64_gb_space_gray_5e1d9b20d628e_images_16325894376.jpg',

             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             firstColor: '#444243',
             secondColor: '#C6C6C6',
             thirdColor: '#FFE4B5'

         },
         {
             key: 4,
             name: 'Apple iPhone SE', price:14500,
             character: {
                 screen: '(4.7", IPS, 1334x750)',processor:'Apple A10 Fusion',
                 RAM:'2 ГБ',internalMemory:'64 ГБ',
                 operatingSystem:'iOS 10',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                 camera:{
                     basicCamera:'12 Мп',
                     frontCamera:'7 Мп'
                 },
             },
             photo:[
                 {
                     id:'Golden',imgUrlOne: 'https://i8.rozetka.ua/goods/17801797/apple_iphone_se_64gb_white_images_17801797603.png',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432701.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/17831429/apple_iphone_se_64gb_white_images_17831429131.jpg',
                 },
                 {
                     id:'Black',imgUrlOne: 'https://i8.rozetka.ua/goods/17801465/apple_iphone_se_64gb_black_images_17801465989.png',
                     imgUrlTwo: 'https://i8.rozetka.ua/goods/17831037/apple_iphone_se_64gb_black_images_17831037745.jpg',
                     imgUrlThree: 'https://i2.rozetka.ua/goods/17831035/apple_iphone_se_64gb_black_images_17831035207.jpg',
                 },
                 {
                     id:'Rose',imgUrlOne:'https://i8.rozetka.ua/goods/17802037/apple_iphone_se_64gb__product__red_images_17802037279.png',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/17831638/apple_iphone_se_64gb__product__red_images_17831638471.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/17831638/apple_iphone_se_64gb__product__red_images_17831638315.jpg',
                 }
             ],
             stateColorIphone7:'https://i8.rozetka.ua/goods/17801797/apple_iphone_se_64gb_white_images_17801797603.png',

             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             firstColor: '#ffffff',
             secondColor: '#000000',
             thirdColor: '#FF0000'

         },
         {
             key: 5,
             name: 'Apple iPhone 11', price:25000,
             character: {
                 screen: '(6.1", IPS (Liquid Retina HD)',processor:'Apple A13 Bionic',
                 RAM:'4 ГБ',internalMemory:'128 ГБ',
                 operatingSystem:'iOS 13',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                 camera:{
                     basicCamera:'12 Мп',
                     frontCamera:'12 Мп'
                 },
             },
             photo:[
                 {
                     id:'Golden',imgUrlOne: 'https://i1.rozetka.ua/goods/14762258/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762258688.png',
                     imgUrlTwo:'https://i1.rozetka.ua/goods/14762259/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762259654.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/14762260/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762260382.jpg',
                 },
                 {
                     id:'Black',imgUrlOne: 'https://i2.rozetka.ua/goods/14906707/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906707061.jpg',
                     imgUrlTwo: 'https://i1.rozetka.ua/goods/14906707/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906707397.png',
                     imgUrlThree: 'https://i1.rozetka.ua/goods/14906708/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906708832.jpg',
                 },
                 {
                     id:'Rose',imgUrlOne:'https://i1.rozetka.ua/goods/14906735/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906735103.jpg',
                     imgUrlTwo:'https://i1.rozetka.ua/goods/14906735/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906735775.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/14906736/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906736804.jpg',
                 }
             ],
             stateColorIphone7:'https://i1.rozetka.ua/goods/14762258/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762258688.png',

             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             firstColor: '#FF0000',
             secondColor: '#FFFB03',
             thirdColor: '#A088D0'

         },
         {
             key: 6,
             name: 'Apple iPhone Xs Max', price:27000,
             character: {
                 screen: '(6.5", OLED (Super Retina HD)',processor:'Apple A10 Fusion',
                 RAM:'2 ГБ',internalMemory:'32 ГБ',
                 operatingSystem:'iOS 10',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                 camera:{
                     basicCamera:'12 Мп',
                     frontCamera:'7 Мп'
                 },
             },
             photo:[
                 {
                     id:'Golden',imgUrlOne: 'https://i8.rozetka.ua/goods/16327049/copy_apple_iphone_xs_max_256_gb_gold_5e1dad97d9101_images_16327049117.jpg',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/16327741/apple_iphone_xs_max_256gb_gold_images_16327741116.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/16327741/apple_iphone_xs_max_256gb_gold_images_16327741746.jpg',
                 },
                 {
                     id:'Black',imgUrlOne: 'https://i2.rozetka.ua/goods/16327049/copy_apple_iphone_xs_max_256_gb_space_gray_5e1dad95c3c7d_images_16327049005.jpg',
                     imgUrlTwo: 'https://i2.rozetka.ua/goods/16327815/apple_iphone_xs_max_256gb_space_gray_images_16327815743.jpg',
                     imgUrlThree: 'https://i2.rozetka.ua/goods/16327815/apple_iphone_xs_max_256gb_space_gray_images_16327815029.jpg',
                 },
                 {
                     id:'Rose',imgUrlOne:'https://i2.rozetka.ua/goods/16327050/copy_apple_iphone_xs_max_256_gb_silver_5e1dada1f2b38_images_16327050237.jpg',
                     imgUrlTwo:'https://i2.rozetka.ua/goods/16327785/apple_iphone_xs_max_256gb_silver_images_16327785734.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/16327786/apple_iphone_xs_max_256gb_silver_images_16327786343.jpg',
                 }
             ],
             stateColorIphone7:'https://i8.rozetka.ua/goods/16327049/copy_apple_iphone_xs_max_256_gb_gold_5e1dad97d9101_images_16327049117.jpg',

             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             firstColor: '#FFE4B5',
             secondColor: '#000000',
             thirdColor: '#DAD6E3'

         },
         {
             key: 7,
             name: 'iPhone Xr', price:18500,
             character: {
                 screen: '(6.1", IPS, 1792х828)',processor:'Apple A12 Bionic',
                 RAM:'2 ГБ',internalMemory:'64 ГБ',
                 operatingSystem:'iOS 10',remainder:'3G/ LTE/ GPS/ Nano-SIM/',
                 camera:{
                     basicCamera:'12 Мп',
                     frontCamera:'7 Мп'
                 },
             },
             photo:[
                 {
                     id:'Golden',imgUrlOne: 'https://i1.foxtrot.com.ua/product/MediumImages/6423091_2.jpg',
                     imgUrlTwo:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_1.jpg',
                     imgUrlThree:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_3.jpg',
                 },
                 {
                     id:'Black',imgUrlOne: 'https://i1.foxtrot.com.ua/product/MediumImages/6423093_2.jpg',
                     imgUrlTwo: 'https://i1.foxtrot.com.ua/product/MediumImages/6423093_1.jpg',
                     imgUrlThree: 'https://i1.foxtrot.com.ua/product/MediumImages/6423093_3.jpg',
                 },
                 {
                     id:'Rose',imgUrlOne:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_1.jpg',
                     imgUrlTwo:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_1.jpg',
                     imgUrlThree:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_2.jpg',
                 }
             ],
             stateColorIphone7:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_1.jpg',

             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             firstColor: '#000000',
             secondColor: '#F4F3F6',
             thirdColor: '#FF0000'

         },
         {
             key: 8,//false not active
             name: 'iPhone 7 Plus', price:13500,
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
                     id:'Golden',imgUrlOne: 'https://i1.foxtrot.com.ua/product/MediumImages/6307826_1.jpg',
                     imgUrlTwo:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_2.jpg',
                     imgUrlThree:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_0.jpg',
                 },
                 {
                     id:'Black',imgUrlOne: 'https://i1.foxtrot.com.ua/product/MediumImages/6307829_1.jpg',
                     imgUrlTwo: 'https://i1.foxtrot.com.ua/product/MediumImages/6307829_0.jpg',
                     imgUrlThree: 'https://i1.foxtrot.com.ua/product/MediumImages/6307829_2.jpg',
                 },
                 {
                     id:'Rose',imgUrlOne:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_1.jpg',
                     imgUrlTwo:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_0.jpg',
                     imgUrlThree:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_2.jpg',
                 }
             ],
             stateColorIphone7:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_1.jpg',

             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             firstColor: '#F4EDFF',
             secondColor: '#000000',
             thirdColor: '#F0FF00'

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

            firstColor: '#E8A038',
            secondColor: '#000000',
            thirdColor: '#F39191'

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

            firstColor: '#E7A4B0',
            secondColor: '#EDD9DD',
            thirdColor: '#000000'

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

            firstColor: '#000000',
            secondColor: '#5B937A',
            thirdColor: '#FFE4B5'

        },
    ],

    indexOfMainArray: 0,

    min: 0,
    max: 3,

    statusUp: false,
    statusDawn: true

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
        case CHANGE_MIN:{
            return{
                ...state,
                min: action.value
            }
        }
        case CHANGE_MAX:{
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
    }
    return state;
}


export const changeMainArray = (newArray) =>({type:CHANGE_ARRAY,array:newArray})
export const changeIphoneItemsArray = (newArray) =>({type:CHANGE_ARRAY_ITEMS,array:newArray})
export const changeMainIndex = (newIndex) =>({type:CHANGE_MAIN_INDEX,newIndex:newIndex})
export const  changeMin = (value) =>({type:CHANGE_MIN, value: value})
export const changeMax = (value) =>({type:CHANGE_MAX,value: value})
export const changeStatusOfButtonDawn = (status) =>({type:CHANGE_STATUS_DAWN,status:status})
export const changeStatusOfButtonUp = (status) =>({type:CHANGE_STATUS_UP,status:status})

export default IphoneReducer;
