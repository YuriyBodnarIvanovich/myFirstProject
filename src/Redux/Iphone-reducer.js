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
let initialDate ={
     iPhones: [
        {
            key: 0,
            name: 'Apple iPhone 7', price:10499,
            startPrice:10499,
            startPriceRAM:0,
            startPriceInternalMemory: 0,
            startPriceBasicCamera: 0,
            startPriceFrontCamera: 0,
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
                    color: '#E8A038',imgUrlOne: 'https://i1.rozetka.ua/goods/1757072/apple_iphone_7_32gb_gold_images_1757072500.jpg',
                    imgUrlTwo:'https://i1.rozetka.ua/goods/1748261/apple_iphone_7_32gb_gold_images_1748261418.jpg',
                    imgUrlThree:'https://i2.rozetka.ua/goods/1748261/apple_iphone_7_32gb_gold_images_1748261600.jpg',
                },
                {
                    color: '#000000',imgUrlOne: 'https://i1.rozetka.ua/goods/1757072/apple_iphone_7_32gb_black_images_1757072045.jpg',
                    imgUrlTwo: 'https://i1.rozetka.ua/goods/1748262/apple_iphone_7_32gb_black_images_1748262601.jpg',
                    imgUrlThree: 'https://i2.rozetka.ua/goods/1748262/apple_iphone_7_32gb_black_images_1748262783.jpg',
                },
                {
                    color: '#F39191',imgUrlOne:'https://i2.rozetka.ua/goods/1757073/apple_iphone_7_32gb_rose_gold_images_1757073228.jpg',
                    imgUrlTwo:'https://i1.rozetka.ua/goods/1748260/apple_iphone_7_32gb_rose_gold_images_1748260508.jpg',
                    imgUrlThree:'https://i2.rozetka.ua/goods/1748260/apple_iphone_7_32gb_rose_gold_images_1748260872.jpg',
                }
            ],
            stateColorIphone7:'https://i1.rozetka.ua/goods/1757072/apple_iphone_7_32gb_gold_images_1757072500.jpg',
            buttonOption:[
                {
                    RAM: {value:'2 Гб',price:0},
                    internalMemory:{value:'32 Гб',price:0},
                    basicCamera:{value:'12 Мп',price:0},
                    frontCamera:{value:'7 Мп',price:0},
                },
                {
                    RAM: {value:'3 Гб',price:1000},
                    internalMemory:{value:'64 Гб',price:1200},
                    basicCamera:{value:'13 Мп',price:700},
                    frontCamera:{value:'8 Мп',price:500},
                },
                {
                    RAM: {value:'4 Гб',price:2000},
                    internalMemory:{value:'128 Гб',price:2500},
                    basicCamera:{value:'16 Мп',price:2000},
                    frontCamera:{value:'12 Мп',price: 1700},
                },
            ],

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
            mainColor: '#E8A038',
            status: true,

        },
         {
             key: 1,
             name: 'Apple iPhone 8', price:13999,
             startPrice:13999,
             startPriceRAM:0,
             startPriceInternalMemory: 0,
             startPriceBasicCamera: 0,
             startPriceFrontCamera: 0,
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
                     color: '#E7A4B0',imgUrlOne: 'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298777.jpg',
                     imgUrlTwo:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298881.jpg',
                     imgUrlThree:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298985.jpg',
                 },
                 {
                     color: '#EDD9DD',imgUrlOne: 'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299193.jpg',
                     imgUrlTwo: 'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299297.jpg',
                     imgUrlThree: 'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299401.jpg',
                 },
                 {
                     color: '#000000',imgUrlOne:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299609.jpg',
                     imgUrlTwo:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299713.jpg',
                     imgUrlThree:'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299817.jpg',
                 }
             ],
             stateColorIphone7:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298777.jpg',
             buttonOption:[
                 {
                     RAM: {value:'2 Гб',price:0},
                     internalMemory:{value:'64 Гб',price:0},
                     basicCamera:{value:'12 Мп',price:0},
                     frontCamera:{value:'7 Мп',price:0},
                 },
                 {
                     RAM: {value:'3 Гб',price:750},
                     internalMemory:{value:'128 Гб',price:900},
                     basicCamera:{value:'14 Мп',price:1200},
                     frontCamera:{value:'8 Мп',price:1000},
                 },
                 {
                     RAM: {value:'4 Гб',price:1500},
                     internalMemory:{value:'264 Гб',price:1800},
                     basicCamera:{value:'16 Мп',price:2400},
                     frontCamera:{value:'12 Мп',price:2400},
                 },
             ],

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
             mainColor: '#E7A4B0',
             status: true,

         },
         {
             key:2,
             name: 'Apple iPhone 11 Pro', price:32999,
             startPrice:32999,
             startPriceRAM:0,
             startPriceInternalMemory: 0,
             startPriceBasicCamera: 0,
             startPriceFrontCamera: 0,
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
                     color:'#000000',imgUrlOne: 'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865069.jpg',
                     imgUrlTwo:'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865202.png',
                     imgUrlThree:'https://i1.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865307.jpg',
                 },
                 {
                     color:'#5B937A',imgUrlOne: 'https://i2.rozetka.ua/goods/14907028/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907028830.jpg',
                     imgUrlTwo: 'https://i1.rozetka.ua/goods/14907029/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907029180.jpg',
                     imgUrlThree: 'https://i2.rozetka.ua/goods/14907029/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907029866.jpg',
                 },
                 {
                     color:'#FFE4B5',imgUrlOne:'https://i1.rozetka.ua/goods/14907014/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907014382.jpg',
                     imgUrlTwo:'https://i1.rozetka.ua/goods/14907016/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907016608.png',
                     imgUrlThree:'https://i1.rozetka.ua/goods/14907018/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907018099.jpg',
                 }
             ],

             stateColorIphone7:'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865069.jpg',
             buttonOption:[
                 {
                     RAM: {value:'4 Гб',price:0},
                     internalMemory:{value:'64 Гб',price:0},
                     basicCamera:{value:'12 Мп',price:0},
                     frontCamera:{value:'12 Мп',price:0},
                 },
                 {
                     RAM: {value:'6 Гб',price:2500},
                     internalMemory:{value:'128 Гб',price:1800},
                     basicCamera:{value:'14 Мп',price:2000},
                     frontCamera:{value:'14 Мп',price:2000},
                 },
                 {
                     RAM: {value:'8 Гб',price:8000},
                     internalMemory:{value:'264 Гб',price:3600},
                     basicCamera:{value:'16 Мп',price:4000},
                     frontCamera:{value:'16 Мп',price:4000},
                 },
             ],
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
             mainColor: '#000000',
             status: true,

         },
         {
             key: 3,
             name: 'Apple iPhone Xs', price:20499,
             startPrice:20499,
             startPriceRAM: 0,
             startPriceInternalMemory: 0,
             startPriceBasicCamera: 0,
             startPriceFrontCamera: 0,
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
                     color:'#444243',imgUrlOne: 'https://i8.rozetka.ua/goods/16325894/copy_apple_iphone_xs_64_gb_space_gray_5e1d9b20d628e_images_16325894376.jpg',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/16327526/apple_iphone_xs_64gb_space_gray_images_16327526580.jpg',
                     imgUrlThree:'https://i8.rozetka.ua/goods/16327528/apple_iphone_xs_64gb_space_gray_images_16327528106.jpg',
                 },
                 {
                     color:'#C6C6C6',imgUrlOne: 'https://i2.rozetka.ua/goods/16325892/copy_apple_iphone_xs_64_gb_silver_5e1d9b1f6c3f7_images_16325892143.jpg',
                     imgUrlTwo: 'https://i8.rozetka.ua/goods/16327349/apple_iphone_xs_64gb_silver_images_16327349522.jpg',
                     imgUrlThree: 'https://i8.rozetka.ua/goods/16327349/apple_iphone_xs_64gb_silver_images_16327349676.jpg',
                 },
                 {
                     color:'#FFE4B5',imgUrlOne:'https://i8.rozetka.ua/goods/16325891/copy_apple_iphone_xs_64_gb_gold_5e1d9b1e19f76_images_16325891576.jpg',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/16327178/apple_iphone_xs_64gb_gold_images_16327178582.jpg',
                     imgUrlThree:'https://i8.rozetka.ua/goods/16327178/apple_iphone_xs_64gb_gold_images_16327178855.jpg',
                 }
             ],
             stateColorIphone7:'https://i8.rozetka.ua/goods/16325894/copy_apple_iphone_xs_64_gb_space_gray_5e1d9b20d628e_images_16325894376.jpg',
             buttonOption:[
                 {
                     RAM: {value:'2 Гб',price:0},
                     internalMemory:{value:'64 Гб',price:0},
                     basicCamera:{value:'12 Мп',price:0},
                     frontCamera:{value:'7 Мп',price:0},
                 },
                 {
                     RAM: {value:'3 Гб',price:1000},
                     internalMemory:{value:'128 Гб',price:900},
                     basicCamera:{value:'14 Мп',price:1500},
                     frontCamera:{value:'8 Мп',price:1200},
                 },
                 {
                     RAM: {value:'4 Гб',price:2000},
                     internalMemory:{value:'264 Гб',price: 1800},
                     basicCamera:{value:'16 Мп ',price:3000},
                     frontCamera:{value:'10 Мп',price:2400},
                 },
             ],
             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,

             mainColor: '#444243',
             status: true,

         },
         {
             key: 4,
             name: 'Apple iPhone SE', price:14500,
             startPrice:14500,
             startPriceRAM:0,
             startPriceInternalMemory: 0,
             startPriceBasicCamera: 0,
             startPriceFrontCamera: 0,
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
                     color:'#ffffff',imgUrlOne: 'https://i8.rozetka.ua/goods/17801797/apple_iphone_se_64gb_white_images_17801797603.png',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432701.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/17831429/apple_iphone_se_64gb_white_images_17831429131.jpg',
                 },
                 {
                     color:'#000000',imgUrlOne: 'https://i8.rozetka.ua/goods/17801465/apple_iphone_se_64gb_black_images_17801465989.png',
                     imgUrlTwo: 'https://i8.rozetka.ua/goods/17831037/apple_iphone_se_64gb_black_images_17831037745.jpg',
                     imgUrlThree: 'https://i2.rozetka.ua/goods/17831035/apple_iphone_se_64gb_black_images_17831035207.jpg',
                 },
                 {
                     color:'#FF0000',imgUrlOne:'https://i8.rozetka.ua/goods/17802037/apple_iphone_se_64gb__product__red_images_17802037279.png',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/17831638/apple_iphone_se_64gb__product__red_images_17831638471.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/17831638/apple_iphone_se_64gb__product__red_images_17831638315.jpg',
                 }
             ],
             stateColorIphone7:'https://i8.rozetka.ua/goods/17801797/apple_iphone_se_64gb_white_images_17801797603.png',
             buttonOption:[
                 {
                     RAM: {value:'2 Гб',price:0},
                     internalMemory:{value:'64 Гб',price:0},
                     basicCamera:{value:'12 Мп',price:0},
                     frontCamera:{value:'7 Мп',price:0},
                 },
                 {
                     RAM: {value:'3 Гб',price:1000},
                     internalMemory:{value:'128 Гб',price:900},
                     basicCamera:{value:'14 Мп',price:1500},
                     frontCamera:{value:'8 Мп',price:1200},
                 },
                 {
                     RAM: {value:'4 Гб',price:2000},
                     internalMemory:{value:'264 Гб',price: 1800},
                     basicCamera:{value:'16 Мп ',price:3000},
                     frontCamera:{value:'10 Мп',price:2400},
                 },
             ],
             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,
             mainColor: '#ffffff',
             status: true,

         },
         {
             key: 5,
             name: 'Apple iPhone 11', price:25000,
             startPrice:25000,
             startPriceRAM:0,
             startPriceInternalMemory: 0,
             startPriceBasicCamera: 0,
             startPriceFrontCamera: 0,
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
                     color:'#FF0000',imgUrlOne: 'https://i1.rozetka.ua/goods/14762258/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762258688.png',
                     imgUrlTwo:'https://i1.rozetka.ua/goods/14762259/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762259654.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/14762260/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762260382.jpg',
                 },
                 {
                     color:'#FFFB03',imgUrlOne: 'https://i2.rozetka.ua/goods/14906707/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906707061.jpg',
                     imgUrlTwo: 'https://i1.rozetka.ua/goods/14906707/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906707397.png',
                     imgUrlThree: 'https://i1.rozetka.ua/goods/14906708/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906708832.jpg',
                 },
                 {
                     color:'#A088D0',imgUrlOne:'https://i1.rozetka.ua/goods/14906735/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906735103.jpg',
                     imgUrlTwo:'https://i1.rozetka.ua/goods/14906735/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906735775.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/14906736/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906736804.jpg',
                 }
             ],
             stateColorIphone7:'https://i1.rozetka.ua/goods/14762258/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762258688.png',
             buttonOption:[
                 {
                     RAM: {value:'4 Гб',price:0},
                     internalMemory:{value:'128 Гб',price:0},
                     basicCamera:{value:'12 Мп',price:0},
                     frontCamera:{value:'12 Мп',price:0},
                 },
                 {
                     RAM: {value:'5 Гб',price:1000},
                     internalMemory:{value:'264 Гб',price: 1400},
                     basicCamera:{value:'14 Мп',price:1800},
                     frontCamera:{value:'14 Мп',price:1800},
                 },
                 {
                     RAM: {value:'6 Гб',price:2000},
                     internalMemory:{value:'528 Гб',price:3000},
                     basicCamera:{value:'16 Мп',price:3600},
                     frontCamera:{value:'16 Мп',price:3600},
                 },
             ],
             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,
             mainColor: '#FF0000',
             status: true,

         },
         {
             key: 6,
             name: 'Apple iPhone Xs Max', price:27000,
             startPrice:27000,
             startPriceRAM:0,
             startPriceInternalMemory: 0,
             startPriceBasicCamera: 0,
             startPriceFrontCamera: 0,
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
                     color:'#FFE4B5',imgUrlOne: 'https://i8.rozetka.ua/goods/16327049/copy_apple_iphone_xs_max_256_gb_gold_5e1dad97d9101_images_16327049117.jpg',
                     imgUrlTwo:'https://i8.rozetka.ua/goods/16327741/apple_iphone_xs_max_256gb_gold_images_16327741116.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/16327741/apple_iphone_xs_max_256gb_gold_images_16327741746.jpg',
                 },
                 {
                     color:'#000000',imgUrlOne: 'https://i2.rozetka.ua/goods/16327049/copy_apple_iphone_xs_max_256_gb_space_gray_5e1dad95c3c7d_images_16327049005.jpg',
                     imgUrlTwo: 'https://i2.rozetka.ua/goods/16327815/apple_iphone_xs_max_256gb_space_gray_images_16327815743.jpg',
                     imgUrlThree: 'https://i2.rozetka.ua/goods/16327815/apple_iphone_xs_max_256gb_space_gray_images_16327815029.jpg',
                 },
                 {
                     color:'#DAD6E3',imgUrlOne:'https://i2.rozetka.ua/goods/16327050/copy_apple_iphone_xs_max_256_gb_silver_5e1dada1f2b38_images_16327050237.jpg',
                     imgUrlTwo:'https://i2.rozetka.ua/goods/16327785/apple_iphone_xs_max_256gb_silver_images_16327785734.jpg',
                     imgUrlThree:'https://i2.rozetka.ua/goods/16327786/apple_iphone_xs_max_256gb_silver_images_16327786343.jpg',
                 }
             ],
             stateColorIphone7:'https://i8.rozetka.ua/goods/16327049/copy_apple_iphone_xs_max_256_gb_gold_5e1dad97d9101_images_16327049117.jpg',
             buttonOption:[
                 {
                     RAM: {value:'2 Гб',price:0},
                     internalMemory:{value:'32 Гб',price:0},
                     basicCamera:{value:'12 Гб',price:0},
                     frontCamera:{value:'7 Гб',price:0},
                 },
                 {
                     RAM: {value:'3 Гб',price:1100},
                     internalMemory:{value:'64 Гб',price:1000},
                     basicCamera:{value:'13 Мп',price:1500},
                     frontCamera:{value:'8 Мп',price:1300},
                 },
                 {
                     RAM: {value:'4 Гб',price:2200},
                     internalMemory:{value:'128 Гб',price:2500},
                     basicCamera:{value:'14 Мп',price:3000},
                     frontCamera:{value:'10 Мп',price:3400},
                 },
             ],
             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,
             mainColor: '#FFE4B5',
             status: true,

         },
         {
             key: 7,
             name: 'iPhone Xr', price:18500,
             startPrice:18500,
             startPriceRAM:0,
             startPriceInternalMemory: 0,
             startPriceBasicCamera: 0,
             startPriceFrontCamera: 0,
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
                     color:'#000000',imgUrlOne: 'https://i1.foxtrot.com.ua/product/MediumImages/6423091_2.jpg',
                     imgUrlTwo:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_1.jpg',
                     imgUrlThree:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_3.jpg',
                 },
                 {
                     color:'#F4F3F6',imgUrlOne: 'https://i1.foxtrot.com.ua/product/MediumImages/6423093_2.jpg',
                     imgUrlTwo: 'https://i1.foxtrot.com.ua/product/MediumImages/6423093_1.jpg',
                     imgUrlThree: 'https://i1.foxtrot.com.ua/product/MediumImages/6423093_3.jpg',
                 },
                 {
                     color:'#FF0000',imgUrlOne:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_1.jpg',
                     imgUrlTwo:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_1.jpg',
                     imgUrlThree:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_2.jpg',
                 }
             ],
             stateColorIphone7:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_1.jpg',
             buttonOption:[
                 {
                     RAM: {value:'2 Гб',price:0},
                     internalMemory:{value:'64 Гб',price:0},
                     basicCamera:{value:'12 Гб',price:0},
                     frontCamera:{value:'7 Гб',price:0},
                 },
                 {
                     RAM: {value:'3 Гб',price:1100},
                     internalMemory:{value:'128 Гб',price:1000},
                     basicCamera:{value:'13 Мп',price:1500},
                     frontCamera:{value:'8 Мп',price:1300},
                 },
                 {
                     RAM: {value:'4 Гб',price:2200},
                     internalMemory:{value:'264 Гб',price:2500},
                     basicCamera:{value:'14 Мп',price:3000},
                     frontCamera:{value:'10 Мп',price:3400},
                 },
             ],
             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,
             mainColor: '#000000',
             status: true,

         },
         {
             key: 8,//false not active
             name: 'iPhone 7 Plus', price:13500,
             startPrice:13500,
             startPriceRAM:0,
             startPriceInternalMemory: 0,
             startPriceBasicCamera: 0,
             startPriceInternalFrontCamera: 0,
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
                     color:'#F4EDFF',imgUrlOne: 'https://i1.foxtrot.com.ua/product/MediumImages/6307826_1.jpg',
                     imgUrlTwo:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_2.jpg',
                     imgUrlThree:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_0.jpg',
                 },
                 {
                     color:'#000000',imgUrlOne: 'https://i1.foxtrot.com.ua/product/MediumImages/6307829_1.jpg',
                     imgUrlTwo: 'https://i1.foxtrot.com.ua/product/MediumImages/6307829_0.jpg',
                     imgUrlThree: 'https://i1.foxtrot.com.ua/product/MediumImages/6307829_2.jpg',
                 },
                 {
                     color:'#F0FF00',imgUrlOne:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_1.jpg',
                     imgUrlTwo:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_0.jpg',
                     imgUrlThree:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_2.jpg',
                 }
             ],
             stateColorIphone7:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_1.jpg',
             buttonOption:[
                 {
                     RAM: {value:'2 Гб',price:0},
                     internalMemory:{value:'32 Гб',price:0},
                     basicCamera:{value:'12 Гб',price:0},
                     frontCamera:{value:'7 Гб',price:0},
                 },
                 {
                     RAM: {value:'3 Гб',price:1100},
                     internalMemory:{value:'64 Гб',price:1000},
                     basicCamera:{value:'13 Мп',price:1500},
                     frontCamera:{value:'8 Мп',price:1300},
                 },
                 {
                     RAM: {value:'4 Гб',price:2200},
                     internalMemory:{value:'128 Гб',price:2500},
                     basicCamera:{value:'14 Мп',price:3000},
                     frontCamera:{value:'10 Мп',price:3400},
                 },
             ],
             buttonNormalPrimeStatus: true,
             buttonCameraPrimeStatus: true,
             buttonMemoryNormalStatus:true,
             buttonMemoryPrimeStatus:true,
             buttonRAM_NormalStatus:true,
             buttonRAM_PrimeStatus:true,
             mainColor: '#F4EDFF',
             status: true,

         },
    ],
    indexOfMainArray: 0,
    min: 0,
    max: 3,
    statusUp: false,
    statusDawn: true,
    numberClickDown: 3,
    adminIndex: 0
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
    }
    return state;
}

export const changeMainArray = (newArray) =>({type:CHANGE_ARRAY,array:newArray})
// export const changeIphoneItemsArray = (newArray) =>({type:CHANGE_ARRAY_ITEMS,array:newArray})
// export const changeMainIndex = (newIndex) =>({type:CHANGE_MAIN_INDEX,newIndex:newIndex})
// export const  changeMin = (value) =>({type:CHANGE_MIN, value: value})
// export const changeMax = (value) =>({type:CHANGE_MAX,value: value})
// export const changeStatusOfButtonDawn = (status) =>({type:CHANGE_STATUS_DAWN,status:status})
// export const changeStatusOfButtonUp = (status) =>({type:CHANGE_STATUS_UP,status:status})
// export const changeMainColor = (color)=>({type:CHANGE_MAIN_COLOR,color:color})
// export const changeNumberClickDown = (number)=>({type:CHANGE_NUMBER_CLICK_DOWN,number:number})
export const changeAdminIndex = (index) =>({type:CHANGE_ADMIN_INDEX,index:index})
export const changeKeyOfItems = (key) =>({type:CHANGE_KEY_OF_ITEMS,key:key})

export default IphoneReducer;
