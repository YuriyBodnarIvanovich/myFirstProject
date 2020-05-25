const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let  imgData = [
        {id: 0, imgSrc: "https://i8.rozetka.ua/goods/17179027/apple_muhr2_images_17179027048.jpg", name:"Apple MacBook Pro 13", price: 50999,
            onePhoto: "https://i2.rozetka.ua/goods/17178612/apple_muhp2_images_17178612984.jpg", twoPhoto:"https://i8.rozetka.ua/goods/17171769/191882174_images_17171769931.jpg",
            characteristics: "Экран 13.3\" IPS (2560x1600), глянцевый / Intel Core i5-8257U (1.4 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel Iris Plus Graphics 645 / Wi-Fi / Bluetooth / MacOS Mojave / 1.37 кг / серебристый"},
        {id: 1, imgSrc: "https://i2.rozetka.ua/goods/10747076/apple_mpxq2ua_a_images_10747076260.jpg", name:"Apple A1708 MacBook Pro Retina 13", price: 42238,
            onePhoto: "https://i2.rozetka.ua/goods/2039400/copy_apple_a1708_macbook_pro_13_mll42ua_a_5938218bbf3b1_images_2039400576.jpg",twoPhoto:"https://i2.rozetka.ua/goods/2039400/copy_apple_a1708_macbook_pro_13_mll42ua_a_5938218bbf3b1_images_2039400654.jpg",
            characteristics:"Экран 13.3\" IPS (2560x1600) Retina, глянцевый / Intel Core i5 (2.3 - 3.6 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel Iris Plus Graphics 640 / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Sierra / 1.37 кг / космический серый"},
        {id: 2, imgSrc: "https://i8.rozetka.ua/goods/17134424/apple_macbook_air_13_128gb_2019_mvfm2_gold_images_17134424644.jpg", name:"Apple MacBook Air 13", price: 30999,
            onePhoto: "https://i8.rozetka.ua/goods/17747610/apple_macbook_air_2020_256_gold_images_17747610619.jpg",twoPhoto:"https://i2.rozetka.ua/goods/17747608/apple_macbook_air_2020_256_gold_images_17747608435.jpg",
            characteristics:"Экран 13.3\" IPS (2560x1600), глянцевый / Intel Core i3 (1.1 - 3.2 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel Iris Plus Graphics / Wi-Fi / Bluetooth / macOS Catalina / 1.29 кг / золотой"},
        {id: 3, imgSrc: "https://i2.rozetka.ua/goods/17171766/191882167_images_17171766242.jpg", name:"Apple MacBook Pro 16", price: 96488,
            onePhoto: "https://i2.rozetka.ua/goods/17171769/191882167_images_17171769420.jpg",twoPhoto:"https://i8.rozetka.ua/goods/17171772/191882167_images_17171772444.jpg",
            characteristics:"Экран 16\" IPS (3072x1920), глянцевый / Intel Core i9-9880H (2.3 - 4.8 ГГц) / RAM 16 ГБ / SSD 1 ТБ / AMD Radeon Pro 5500M, 4 ГБ / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Catalina / 2.0 кг / серебристый"},
        {id: 4, imgSrc: "https://i2.rozetka.ua/goods/17179035/apple_mv9a2_images_17179035119.jpg", name:"Apple MacBook Pro 13 Retina 512GB", price: 66999,
            onePhoto: "https://i8.rozetka.ua/goods/17178969/apple_mv9a2_images_17178969781.jpg",twoPhoto:"https://i2.rozetka.ua/goods/17171771/191882209_images_17171771786.jpg",
            characteristics:"Экран 13.3\" IPS (2560x1600), глянцевый / Intel Core i5-8279U (2.4 - 4.1 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel Iris Plus Graphics 655 / Wi-Fi / Bluetooth / macOS Mojave / 1.37 кг / серебристый"},
        {id: 5, imgSrc: "https://i2.rozetka.ua/goods/10747074/apple_mqd42ua_a_images_10747074820.jpg", name:"AApple A1466 MacBook Air 13", price: 45000,
            onePhoto: "https://i1.rozetka.ua/goods/2039361/copy_apple_macbook_air_13_z0tb000jc_593804497bad1_images_2039361498.jpg",twoPhoto:"https://i2.rozetka.ua/goods/2039361/copy_apple_macbook_air_13_z0tb000jc_593804497bad1_images_2039361888.jpg",
            characteristics:"Экран 13.3\" (1440x900) WXGA+ LED, глянцевый / Intel Core i5 (1.8 - 2.9 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel HD Graphics 6000 / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Sierra / 1.35 кг"},
        {id: 6, imgSrc: "https://i8.rozetka.ua/goods/17747521/apple_macbook_air_2020_512_space_gray_images_17747521555.jpg", name:"Apple MacBook Air 13\" 512GB 2020 Space Gray", price: 34000,
            onePhoto: "https://i2.rozetka.ua/goods/17747521/apple_macbook_air_2020_512_space_gray_images_17747521699.jpg",twoPhoto:"https://i2.rozetka.ua/goods/17747521/apple_macbook_air_2020_512_space_gray_images_17747521945.jpg",
            characteristics:"Экран 13.3\" IPS (2560x1600), глянцевый / Intel Core i5 (1.1 - 3.5 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel Iris Plus Graphics / Wi-Fi / Bluetooth / macOS Catalina / 1.29 кг / серый"},
        {id: 7, imgSrc: "https://i1.rozetka.ua/goods/10844865/apple_z0rf00266_images_10844865087.jpg", name:"Apple A1398 MacBook Pro Retina 15", price: 71000,
            onePhoto: "https://i8.rozetka.ua/goods/17171770/191882181_images_17171770120.jpg",twoPhoto:"https://i8.rozetka.ua/goods/17171775/191882181_images_17171775608.jpg",
            characteristics:"Экран 13.3\" IPS (2560x1600), глянцевый / Intel Core i5-8257U (1.4 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel Iris Plus Graphics 645 / Wi-Fi / Bluetooth / MacOS Mojave / 1.37 кг / серебристый"},
        {id: 8, imgSrc: "https://i1.rozetka.ua/goods/10844865/apple_z0rf00266_images_10844865087.jpg", name:"Apple A1398 MacBook Pro Retina 15", price: 71000,
            onePhoto: "https://i8.rozetka.ua/goods/17171770/191882181_images_17171770120.jpg",twoPhoto:"https://i8.rozetka.ua/goods/17171775/191882181_images_17171775608.jpg",
            characteristics:"Экран 13.3\" IPS (2560x1600), глянцевый / Intel Core i5-8257U (1.4 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel Iris Plus Graphics 645 / Wi-Fi / Bluetooth / MacOS Mojave / 1.37 кг / серебристый"},
    ];
let iPhones = [
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
                color: '#E8A038',
                imgSrc:[
                    {src:'https://i1.rozetka.ua/goods/1757072/apple_iphone_7_32gb_gold_images_1757072500.jpg'},
                    {src:'https://i1.rozetka.ua/goods/1748261/apple_iphone_7_32gb_gold_images_1748261418.jpg'},
                    {src:'https://i2.rozetka.ua/goods/1748261/apple_iphone_7_32gb_gold_images_1748261600.jpg'},
                ],
            },
            {
                color: '#000000',
                imgSrc:[
                    {src:'https://i1.rozetka.ua/goods/1757072/apple_iphone_7_32gb_black_images_1757072045.jpg'},
                    {src:'https://i1.rozetka.ua/goods/1748262/apple_iphone_7_32gb_black_images_1748262601.jpg'},
                    {src:'https://i2.rozetka.ua/goods/1748262/apple_iphone_7_32gb_black_images_1748262783.jpg'},
                ],
            },
            {
                color: '#F39191',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/1757073/apple_iphone_7_32gb_rose_gold_images_1757073228.jpg'},
                    {src:'https://i1.rozetka.ua/goods/1748260/apple_iphone_7_32gb_rose_gold_images_1748260508.jpg'},
                    {src:'https://i2.rozetka.ua/goods/1748260/apple_iphone_7_32gb_rose_gold_images_1748260872.jpg'},
                ],
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
                color: '#E7A4B0',
                imgSrc:[
                    {src:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298777.jpg'},
                    {src:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298881.jpg'},
                    {src:'https://i1.rozetka.ua/goods/2356298/apple_iphone_8_64gb_gold_images_2356298985.jpg'},
                ],
            },
            {
                color: '#EDD9DD',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299193.jpg'},
                    {src:'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299297.jpg'},
                    {src:'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_silver_images_2356299401.jpg'},
                ],
            },
            {
                color: '#000000',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299609.jpg'},
                    {src:'https://i2.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299713.jpg'},
                    {src:'https://i1.rozetka.ua/goods/2356299/apple_iphone_8_64gb_space_gray_images_2356299817.jpg'},
                ],
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
                color:'#000000',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865069.jpg'},
                    {src:'https://i2.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865202.png'},
                    {src:'https://i1.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865307.jpg'},
                ],
            },
            {
                color:'#5B937A',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/14907028/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907028830.jpg'},
                    {src:'https://i1.rozetka.ua/goods/14907029/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907029180.jpg'},
                    {src:'https://i2.rozetka.ua/goods/14907029/copy_apple_iphone_11_pro_64gb_midnight_green1_5dc0401a48850_images_14907029866.jpg'},
                ],
            },
            {
                color:'#FFE4B5',
                imgSrc:[
                    {src:'https://i1.rozetka.ua/goods/14907014/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907014382.jpg'},
                    {src:'https://i1.rozetka.ua/goods/14907016/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907016608.png'},
                    {src:'https://i1.rozetka.ua/goods/14907018/copy_apple_iphone_11_pro_64gb_gold_5dc03fd32fe51_images_14907018099.jpg'},
                ],
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
                color:'#444243',
                imgSrc:[
                    {src:'https://i8.rozetka.ua/goods/16325894/copy_apple_iphone_xs_64_gb_space_gray_5e1d9b20d628e_images_16325894376.jpg'},
                    {src:'https://i8.rozetka.ua/goods/16327526/apple_iphone_xs_64gb_space_gray_images_16327526580.jpg'},
                    {src:'https://i8.rozetka.ua/goods/16327528/apple_iphone_xs_64gb_space_gray_images_16327528106.jpg'},
                ],
            },
            {
                color:'#C6C6C6',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/16325892/copy_apple_iphone_xs_64_gb_silver_5e1d9b1f6c3f7_images_16325892143.jpg'},
                    {src:'https://i8.rozetka.ua/goods/16327349/apple_iphone_xs_64gb_silver_images_16327349522.jpg'},
                    {src:'https://i8.rozetka.ua/goods/16327349/apple_iphone_xs_64gb_silver_images_16327349676.jpg'},
                ],
            },
            {
                color:'#FFE4B5',
                imgSrc:[
                    {src:'https://i8.rozetka.ua/goods/16325891/copy_apple_iphone_xs_64_gb_gold_5e1d9b1e19f76_images_16325891576.jpg'},
                    {src:'https://i8.rozetka.ua/goods/16327178/apple_iphone_xs_64gb_gold_images_16327178582.jpg'},
                    {src:'https://i8.rozetka.ua/goods/16327178/apple_iphone_xs_64gb_gold_images_16327178855.jpg'},
                ],
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
                color:'#ffffff',
                imgSrc:[
                    {src:'https://i8.rozetka.ua/goods/17801797/apple_iphone_se_64gb_white_images_17801797603.png'},
                    {src:'https://i8.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432701.jpg'},
                    {src:'https://i2.rozetka.ua/goods/17831429/apple_iphone_se_64gb_white_images_17831429131.jpg'},
                ],
            },
            {
                color:'#000000',
                imgSrc:[
                    {src:'https://i8.rozetka.ua/goods/17801465/apple_iphone_se_64gb_black_images_17801465989.png'},
                    {src:'https://i8.rozetka.ua/goods/17831037/apple_iphone_se_64gb_black_images_17831037745.jpg'},
                    {src:'https://i2.rozetka.ua/goods/17831035/apple_iphone_se_64gb_black_images_17831035207.jpg'},
                ],
            },
            {
                color:'#FF0000',
                imgSrc:[
                    {src:'https://i8.rozetka.ua/goods/17802037/apple_iphone_se_64gb__product__red_images_17802037279.png'},
                    {src:'https://i8.rozetka.ua/goods/17831638/apple_iphone_se_64gb__product__red_images_17831638471.jpg'},
                    {src:'https://i2.rozetka.ua/goods/17831638/apple_iphone_se_64gb__product__red_images_17831638315.jpg'},
                ],
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
                color:'#FF0000',
                imgSrc:[
                    {src:'https://i1.rozetka.ua/goods/14762258/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762258688.png'},
                    {src:'https://i1.rozetka.ua/goods/14762259/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762259654.jpg'},
                    {src:'https://i2.rozetka.ua/goods/14762260/copy_apple_iphone_11_128gb_red_5db814d987ff2_images_14762260382.jpg'},
                ],
            },
            {
                color:'#FFFB03',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/14906707/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906707061.jpg'},
                    {src:'https://i1.rozetka.ua/goods/14906707/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906707397.png'},
                    {src:'https://i1.rozetka.ua/goods/14906708/copy_apple_iphone_11_128gb_yellow_5dc03c6870a8c_images_14906708832.jpg'},
                ],
            },
            {
                color:'#A088D0',
                imgSrc:[
                    {src:'https://i1.rozetka.ua/goods/14906735/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906735103.jpg'},
                    {src:'https://i1.rozetka.ua/goods/14906735/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906735775.jpg'},
                    {src:'https://i2.rozetka.ua/goods/14906736/copy_apple_iphone_11_128gb_purple_5dc03ccfc8be4_images_14906736804.jpg'},
                ],
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
                color:'#FFE4B5',
                imgSrc:[
                    {src:'https://i8.rozetka.ua/goods/16327049/copy_apple_iphone_xs_max_256_gb_gold_5e1dad97d9101_images_16327049117.jpg'},
                    {src:'https://i8.rozetka.ua/goods/16327741/apple_iphone_xs_max_256gb_gold_images_16327741116.jpg'},
                    {src:'https://i2.rozetka.ua/goods/16327741/apple_iphone_xs_max_256gb_gold_images_16327741746.jpg'},
                ],
            },
            {
                color:'#000000',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/16327049/copy_apple_iphone_xs_max_256_gb_space_gray_5e1dad95c3c7d_images_16327049005.jpg'},
                    {src:'https://i2.rozetka.ua/goods/16327815/apple_iphone_xs_max_256gb_space_gray_images_16327815743.jpg'},
                    {src:'https://i2.rozetka.ua/goods/16327815/apple_iphone_xs_max_256gb_space_gray_images_16327815029.jpg'},
                ],
            },
            {
                color:'#DAD6E3',
                imgSrc:[
                    {src:'https://i2.rozetka.ua/goods/16327050/copy_apple_iphone_xs_max_256_gb_silver_5e1dada1f2b38_images_16327050237.jpg'},
                    {src:'https://i2.rozetka.ua/goods/16327785/apple_iphone_xs_max_256gb_silver_images_16327785734.jpg'},
                    {src:'https://i2.rozetka.ua/goods/16327786/apple_iphone_xs_max_256gb_silver_images_16327786343.jpg'},
                ],
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
                color:'#000000',
                imgSrc:[
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_2.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_1.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423091_3.jpg'},
                ],
            },
            {
                color:'#F4F3F6',
                imgSrc:[
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423093_2.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423093_1.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423093_3.jpg'},
                ],
            },
            {
                color:'#FF0000',
                imgSrc:[
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_1.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_1.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6423096_2.jpg'},
                ],
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
                RAM: {value:'',price:2200},
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
                color:'#F4EDFF',
                imgSrc:[
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_1.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_2.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307826_0.jpg'},
                ],
            },
            {
                color:'#000000',
                imgSrc:[
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307829_1.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307829_0.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307829_2.jpg'},
                ],
            },
            {
                color:'#F0FF00',
                imgSrc:[
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_1.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_0.jpg'},
                    {src:'https://i1.foxtrot.com.ua/product/MediumImages/6307827_2.jpg'},
                ],
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
];

app.get('/mac',function(request,response){
    // response.status(200).json({data: {name: 'Yura', surname: 'PIDAR'}});
    // response.status(200).json(initialState);
    response.send(imgData);
});

app.get('/iPhone',function(request,response){
    // response.status(200).json({data: {name: 'Yura', surname: 'PIDAR'}});
    // response.status(200).json(initialState);
    response.send(iPhones);
});

app.listen(3001);