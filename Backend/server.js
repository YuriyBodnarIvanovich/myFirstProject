const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let  imgData = [
        {
            id: 0,  name:"Apple MacBook Pro 13", price: 50999,
            photo:[
                {src:"https://i8.rozetka.ua/goods/17179027/apple_muhr2_images_17179027048.jpg"},
                {src:"https://i2.rozetka.ua/goods/17178612/apple_muhp2_images_17178612984.jpg"},
                {src:"https://i8.rozetka.ua/goods/17171769/191882174_images_17171769931.jpg"},
            ],
            characters:{
                screen: 'Экран 13.3\" IPS (2560x1600), глянцевый', processor: 'Intel Core i5-8257U (1.4 - 3.9 ГГц)',
                RAM: '8 ГБ', SSD: '256 ГБ', videoCard: 'Intel Iris Plus Graphics 645',
                remainder:'Wi-Fi / Bluetooth / MacOS Mojave / 1.37 кг'
            },
        },
        {
            id: 1, name:'Apple A1708 MacBook Pro Retina 13',price: 42238,
            photo:[
                {src:'https://i2.rozetka.ua/goods/10747076/apple_mpxq2ua_a_images_10747076260.jpg'},
                {src:'https://i2.rozetka.ua/goods/2039400/copy_apple_a1708_macbook_pro_13_mll42ua_a_5938218bbf3b1_images_2039400576.jpg'},
                {src:'https://i2.rozetka.ua/goods/2039400/copy_apple_a1708_macbook_pro_13_mll42ua_a_5938218bbf3b1_images_2039400654.jpg'},
            ],
            characters: {
                screen: 'Экран 13.3\\" IPS (2560x1600) Retina',processor: 'Intel Core i5 (2.3 - 3.6 ГГц)',
                RAM: '8 ГБ', SSD: '128 ГБ', videoCard: 'Intel Iris Plus Graphics 640',
                remainder: 'Wi-Fi / Bluetooth / веб-камера / macOS Sierra / 1.37 кг',
            },
        },
        {
            id: 2, name:'Apple MacBook Air 13',price: 30999,
            photo:[
                {src:'https://i8.rozetka.ua/goods/17134424/apple_macbook_air_13_128gb_2019_mvfm2_gold_images_17134424644.jpg'},
                {src:'https://i8.rozetka.ua/goods/17747610/apple_macbook_air_2020_256_gold_images_17747610619.jpg'},
                {src:'https://i2.rozetka.ua/goods/17747608/apple_macbook_air_2020_256_gold_images_17747608435.jpg'},
            ],
            characters: {
                screen: 'Экран 13.3\\" IPS (2560x1600)',processor: 'Intel Core i3 (1.1 - 3.2 ГГц)',
                RAM: '8 ГБ', SSD: '256 ГБ', videoCard: 'Intel Iris Plus Graphics',
                remainder: 'Wi-Fi / Bluetooth / macOS Catalina / 1.29 кг',
            },
        },
        {
            id: 3, name:'Apple MacBook Pro 16',price: 96488,
            photo:[
                {src:'https://i2.rozetka.ua/goods/17171766/191882167_images_17171766242.jpg'},
                {src:'https://i2.rozetka.ua/goods/17171769/191882167_images_17171769420.jpg'},
                {src:'https://i8.rozetka.ua/goods/17171772/191882167_images_17171772444.jpg'},
            ],
            characters: {
                screen: 'Экран 16\\" IPS (3072x1920)',processor: 'Intel Core i9-9880H (2.3 - 4.8 ГГц)',
                RAM: '16 ГБ', SSD: '1 ТБ', videoCard: 'AMD Radeon Pro 5500M',
                remainder: 'Wi-Fi / Bluetooth / веб-камера / macOS Catalina / 2.0 кг',
            },
        },
        {
            id: 3, name:'Apple MacBook Pro 13 Retina',price: 66999,
            photo:[
                {src:'https://i2.rozetka.ua/goods/17179035/apple_mv9a2_images_17179035119.jpg'},
                {src:'https://i8.rozetka.ua/goods/17178969/apple_mv9a2_images_17178969781.jpg'},
                {src:'https://i2.rozetka.ua/goods/17171771/191882209_images_17171771786.jpg'},
            ],
            characters: {
                screen: 'Экран 13.3\\" IPS (2560x1600)',processor: 'Intel Core i5-8279U (2.4 - 4.1 ГГц)',
                RAM: '8 ГБ', SSD: '512 ГБ', videoCard: 'Intel Iris Plus Graphics 655',
                remainder: 'Wi-Fi / Bluetooth / macOS Mojave / 1.37 кг',
            },
        },
        {
            id: 5, name:'Apple A1466 MacBook Air 13',price: 45000,
            photo:[
                {src:'https://i2.rozetka.ua/goods/10747074/apple_mqd42ua_a_images_10747074820.jpg'},
                {src:'https://i1.rozetka.ua/goods/2039361/copy_apple_macbook_air_13_z0tb000jc_593804497bad1_images_2039361498.jpg'},
                {src:'https://i2.rozetka.ua/goods/2039361/copy_apple_macbook_air_13_z0tb000jc_593804497bad1_images_2039361888.jpg'},
            ],
            characters: {
                screen: 'Экран 13.3\\" (1440x900) WXGA+ LED',processor: 'Intel Core i5 (1.8 - 2.9 ГГц)',
                RAM: '8 ГБ', SSD: '128 ГБ', videoCard: 'Intel HD Graphics 6000',
                remainder: 'Wi-Fi / Bluetooth / веб-камера / macOS Sierra / 1.35 кг',
            },
        },
        {
            id: 6, name:'Apple MacBook Air 13  Space Gray',price: 34000,
            photo:[
                {src:'https://i8.rozetka.ua/goods/17747521/apple_macbook_air_2020_512_space_gray_images_17747521555.jpg'},
                {src:'https://i2.rozetka.ua/goods/17747521/apple_macbook_air_2020_512_space_gray_images_17747521699.jpg'},
                {src:'https://i2.rozetka.ua/goods/17747521/apple_macbook_air_2020_512_space_gray_images_17747521945.jpg'},
            ],
            characters: {
                screen: 'Экран 13.3\\" IPS (2560x1600)',processor: 'Intel Core i5 (1.1 - 3.5 ГГц)',
                RAM: '8 ГБ', SSD: '512 ГБ', videoCard: 'Intel Iris Plus Graphics',
                remainder: 'Wi-Fi / Bluetooth / macOS Catalina / 1.29 кг',
            },
        },
        {
            id: 7, name:'Apple A1398 MacBook Pro Retina 15',price: 71000,
            photo:[
                {src:'https://i1.rozetka.ua/goods/10844865/apple_z0rf00266_images_10844865087.jpg'},
                {src:'https://i8.rozetka.ua/goods/17171770/191882181_images_17171770120.jpg'},
                {src:'https://i8.rozetka.ua/goods/17171775/191882181_images_17171775608.jpg'},
            ],
            characters: {
                screen: 'Экран 13.3\\" IPS (2560x1600)',processor: 'Intel Core i5-8257U (1.4 - 3.9 ГГц)',
                RAM: '8 ГБ', SSD: '256 ГБ', videoCard: 'Intel Iris Plus Graphics 645',
                remainder: 'Wi-Fi / Bluetooth / MacOS Mojave / 1.37 кг',
            },
        },
        {
            id: 8, name:'Apple A1398 MacBook Pro Retina 15',price: 71000,
            photo:[
                {src:'https://i1.rozetka.ua/goods/10844865/apple_z0rf00266_images_10844865087.jpg'},
                {src:'https://i8.rozetka.ua/goods/17171770/191882181_images_17171770120.jpg'},
                {src:'https://i8.rozetka.ua/goods/17171775/191882181_images_17171775608.jpg'},
            ],
            characters: {
                screen: 'Экран 13.3\\" IPS (2560x1600)',processor: 'Intel Core i5-8257U (1.4 - 3.9 ГГц)',
                RAM: '8 ГБ', SSD: '256 ГБ', videoCard: 'Intel Iris Plus Graphics 645',
                remainder: 'Wi-Fi / Bluetooth / MacOS Mojave / 1.37 кг',
            },
        },
    ];


let iPhonesDB = [];


const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "bond",
    database: "IPHONES_V_1_1",
    password: "pass"
});

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
app.get('/mac',function(request,response){
    // response.status(200).json({data: {name: 'Yura', surname: 'PIDAR'}});
    // response.status(200).json(initialState);
    response.send(imgData);
});


connection.query("SELECT idiphones, name, Price, \n" +
    "\tscreen, processor, RAM, InternalMemory, operatingSystem, remainder, BasicCamera, FrontCamera,\n" +
    "\tFirstPhoto, SecondPhoto, ThirdPhoto, color\n" +
    "FROM iphones\n" +
    "\tINNER JOIN prices\n" +
    "\t\tUSING(idPrice)\n" +
    "\tINNER JOIN charecters\n" +
    "\t\tUSING(idcharecters)\n" +
    "\tINNER JOIN photo\n" +
    "\t\tUSING(idiphones)\n" +
    "\tINNER JOIN colorOfPhoto\n" +
    "\t\tUSING(idcolor)",
    function(err, results) {
        function onlyUnique(value, index, arr) {
            return arr.map(function(e) { return e.name; }).indexOf(value.name) === index;
        }
        iPhonesDB = results.filter(onlyUnique).map((p)=>{
            return {
                id: p.idiphones,
                name: p.name, price: p.Price,
                character: {
                    screen: p.screen, processor: p.processor,
                    RAM: p.RAM, internalMemory: p.InternalMemory,
                    operatingSystem: p.operatingSystem, remainder: p.remainder,
                    camera:{
                        basicCamera: p.BasicCamera,
                        frontCamera: p.FrontCamera,
                    },
                },
                stateColorIphone7: p.FirstPhoto,
                mainColor: p.color,
                status: true,
                photo:[],
            };
        })
        iPhonesDB.forEach(function (item,index) {
            item.photo = results.filter((r)=>{return item.name === r.name}).map((p)=>{
                    return{
                        color: p.color,
                        imgSrc:[
                            {src:p.FirstPhoto},
                            {src:p.SecondPhoto},
                            {src:p.ThirdPhoto},
                        ],
                    }
            })
        })
        console.log("Array was got");
        console.log(iPhonesDB.length);
    });


app.get('/iPhone',function(request,response){
    response.send(iPhonesDB);
});

app.listen(3001);