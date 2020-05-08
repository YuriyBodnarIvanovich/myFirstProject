const CHANGE_MIN ='CHANGE_MIN';
const CHANGE_MAX ='CHANGE_MAX';
const CHANGE_STATE_OF_CONTENT = 'CHANGE_STATE_OF_CONTENT';

let initialState = {
    imgData: [
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


    ],
    page: [
        {id: 0, imgSrc: "https://i8.rozetka.ua/goods/17179027/apple_muhr2_images_17179027048.jpg", name:"Apple MacBook Pro 13", price: 50999,
            onePhoto: "https://i2.rozetka.ua/goods/17178612/apple_muhp2_images_17178612984.jpg", twoPhoto:"https://i8.rozetka.ua/goods/17171769/191882174_images_17171769931.jpg",
            characteristics: "Экран 13.3\" IPS (2560x1600), глянцевый / Intel Core i5-8257U (1.4 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel Iris Plus Graphics 645 / Wi-Fi / Bluetooth / MacOS Mojave / 1.37 кг / серебристый"},
        {id: 1, imgSrc: "https://i2.rozetka.ua/goods/10747076/apple_mpxq2ua_a_images_10747076260.jpg", name:"Apple A1708 MacBook Pro Retina 13", price: 42238,
            onePhoto: "https://i2.rozetka.ua/goods/2039400/copy_apple_a1708_macbook_pro_13_mll42ua_a_5938218bbf3b1_images_2039400576.jpg",twoPhoto:"https://i2.rozetka.ua/goods/2039400/copy_apple_a1708_macbook_pro_13_mll42ua_a_5938218bbf3b1_images_2039400654.jpg",
            characteristics:"Экран 13.3\" IPS (2560x1600) Retina, глянцевый / Intel Core i5 (2.3 - 3.6 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel Iris Plus Graphics 640 / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Sierra / 1.37 кг / космический серый"},
        {id: 2, imgSrc: "https://i8.rozetka.ua/goods/17134424/apple_macbook_air_13_128gb_2019_mvfm2_gold_images_17134424644.jpg", name:"Apple MacBook Air 13", price: 30999,
            onePhoto: "https://i8.rozetka.ua/goods/17747610/apple_macbook_air_2020_256_gold_images_17747610619.jpg",twoPhoto:"https://i2.rozetka.ua/goods/17747608/apple_macbook_air_2020_256_gold_images_17747608435.jpg",
            characteristics:"Экран 13.3\" IPS (2560x1600), глянцевый / Intel Core i3 (1.1 - 3.2 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel Iris Plus Graphics / Wi-Fi / Bluetooth / macOS Catalina / 1.29 кг / золотой"},
    ],
    min: 0,
    max: 3,
    centerContentShow:true
};
const macReducer = (state= initialState,action) =>{
    switch(action.type){
        case CHANGE_MIN:{
            return{
                ...state,
                min: action.min,
            };
        }
        case CHANGE_MAX:{
            return{
                ...state,
                max: action.max,
            };
        }
        case CHANGE_STATE_OF_CONTENT:{
            return{
                ...state,
                centerContentShow: action.showContent,
            };
        }
        default:
            return state;
    }
}

export default macReducer;