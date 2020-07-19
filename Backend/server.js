const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let  imgData = [];
let iPhonesDB = [];
let Users =[];

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "bond",
    database: "PRODUCTS_NEW",
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

connection.query("SELECT  products.name AS ProductName, prices.Price,colorOfPhoto.color,\n" +
    "\tnameOfUser.name, password.password, email.email, avatarPhoto.avatarPhotoUser,\n" +
    "    cart.idusers AS cartId, users.idusers AS usersId\n" +
    "FROM products\n" +
    "INNER JOIN cart\n" +
    "\tUSING(idProduct)\n" +
    "INNER JOIN colorOfPhoto\n" +
    "\tUSING(idcolorOfPhoto)\n" +
    "INNER JOIN prices\n" +
    "\tUSING(idPrice)\n" +
    "INNER JOIN users\n" +
    "\tUSING(idusers)\n" +
    "INNER JOIN nameOfUser\n" +
    "\tUSING(idnameOfUser)\n" +
    "INNER JOIN password\n" +
    "\tUSING(idpassword)\n" +
    "INNER JOIN email\n" +
    "\tUSING(idemail)\n" +
    "INNER JOIN avatarPhoto\n" +
    "\tUSING(idavatarPhoto)",function (err,result) {

    function onlyUnique(value, index, arr) {
        return arr.map(function(e) { return e.name; }).indexOf(value.name) === index;
    }
    Users = result.filter(onlyUnique).map((element,index)=>{
        return{
            idUser: element.usersId,
            name: element.name,
            email: element.email,
            password: element.password,
            mainPhoto: element.avatarPhotoUser,
            CartList:[]
        }
    });
    Users.forEach(function (item,index) {
        item.CartList = result.filter((element)=>{return item.idUser === element.cartId}).map((p)=>{
            return{
                name: p.ProductName,
                price: p.Price,
                color: p.color
            }
        })

    })
})


app.get('/Apple',function (request,response) {
    console.log('Users open!');
    response.send(Users);
});

// connection.query("SELECT name,price, kindOfProduct,\n" +
//     " screen, processor, RAM, remainder, SSD, videoCard,\n" +
//     " FirstPhoto, SecondPhoto, ThirdPhoto\n" +
//     "FROM products\n" +
//     "INNER JOIN prices\n" +
//     "\tUSING(idPrice)\n" +
//     "INNER JOIN photo\n" +
//     "\tUSING(idProduct)\n" +
//     "INNER JOIN characters\n" +
//     "\tUSING(idCharacters)",function (err,result) {
//
//     imgData = result.filter((p)=>{return p.kindOfProduct === 'MAC'}).map((p,index)=>{
//         return{
//             id: index, name:p.name, price: p.price,
//             photo:[
//                 {src:p.FirstPhoto},
//                 {src:p.SecondPhoto},
//                 {src:p.ThirdPhoto},
//             ],
//             characters:{
//                 screen: p.screen, processor:p.processor,
//                 RAM: p.RAM, SSD: p.SSD, videoCard: p.videoCard,
//                 remainder:p.remainder
//             },
//         }
//     })
//     console.log("Mac Book was got!!!")
// })

app.get('/mac',function(request,response){
    response.send(imgData);
});

// connection.query("SELECT idProduct, name, Price, kindOfProduct,\n" +
//     "    screen, processor, RAM, InternalMemory, OperationSystem, remainder, BasicCamera, FrontCamera,\n" +
//     "    FirstPhoto, SecondPhoto, ThirdPhoto, color\n" +
//     "    FROM products\n" +
//     "    INNER JOIN prices\n" +
//     "    USING(idPrice)\n" +
//     "    INNER JOIN characters\n" +
//     "    USING(idCharacters)\n" +
//     "    INNER JOIN photo\n" +
//     "    USING(idProduct)\n" +
//     "    INNER JOIN colorOfPhoto\n" +
//     "    USING(idColorOfPhoto)\n" +
//     "    WHERE kindOfProduct  = 'IPHONE';",
//     function(err, results) {
//         function onlyUnique(value, index, arr) {
//             return arr.map(function(e) { return e.name; }).indexOf(value.name) === index;
//         }
//         iPhonesDB = results.filter(onlyUnique).map((p,index)=>{
//             return {
//                 id: index,
//                 name: p.name, price: p.Price,
//                 character: {
//                     screen: p.screen, processor: p.processor,
//                     RAM: p.RAM, internalMemory: p.InternalMemory,
//                     operatingSystem: p.operatingSystem, remainder: p.remainder,
//                     camera:{
//                         basicCamera: p.BasicCamera,
//                         frontCamera: p.FrontCamera,
//                     },
//                 },
//                 stateColorIphone7: p.FirstPhoto,
//                 mainColor: p.color,
//                 status: true,
//                 photo:[],
//             };
//         })
//         iPhonesDB.forEach(function (item,index) {
//             item.photo = results.filter((r)=>{return item.name === r.name}).map((p)=>{
//                     return{
//                         color: p.color,
//                         imgSrc:[
//                             {src:p.FirstPhoto},
//                             {src:p.SecondPhoto},
//                             {src:p.ThirdPhoto},
//                         ],
//                     }
//             })
//         })
//         console.log("IPhones was got!!!");
//     });


app.get('/iPhone',function(request,response){
    response.send(iPhonesDB);
});

app.listen(3001);