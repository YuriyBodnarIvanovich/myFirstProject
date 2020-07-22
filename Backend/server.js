const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json())

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

app.get('',function (request,response) {
    console.log('Users open!');
    response.send(Users);
});

app.post('/some', (req, res) => {
    let idUser;
    let idProduct;
    let idColor;
    let idCart;
   connection.query("SELECT idusers\n" +
       "FROM users\n" +
       "INNER join email\n" +
       "\tUSING(idemail)\n" +
       "WHERE email = '"+req.body.userEmail+"'",function (err,result) {
       addData(result[0].idusers,'idUser');
   });

    connection.query("SELECT idProduct\n" +
        "FROM products\n" +
        "WHERE name = '"+ req.body.name +"'",function (err, result) {
        addData( result[0].idProduct,'idProduct');

    });

    connection.query("SELECT idColorOfPhoto\n" +
        "FROM colorOfPhoto\n" +
        "WHERE color = '"+ req.body.color+"'",function (err,result) {
        addData(result[0].idColorOfPhoto,'idColor');
    });

    connection.query("SELECT COUNT(*) AS Number \n" +
        "FROM cart",function (err,result) {
        addData(result[0].Number,'idCart');

    });
    function addData(data,kindData) {
        if(kindData==='idUser'){
            idUser = data;
        }else if(kindData==='idProduct'){
            idProduct = data;
        }else if(kindData==='idColor'){
            idColor = data;
        }else {
            idCart = data + 1;
        }
        if(idUser !==undefined && idProduct !==undefined && idColor !==undefined && idCart !==undefined){
            const fieldCart = [idCart,idProduct,idColor,idUser]
            const sql = "INSERT INTO cart( idcart, idProduct, idColorOfPhoto, idusers) VALUES(?,?,?,?)"
            connection.query( sql,fieldCart,function (err,result) {
                if(err) console.log(err);
                else console.log("Данные добавлены");
            });
        }
    }

});

connection.query("SELECT name, price,\n" +
    "kindOfProduct, screen, processor, RAM, remainder, SSD, videoCard, FirstPhoto, SecondPhoto, ThirdPhoto\n" +
    "FROM products\n" +
    "INNER JOIN prices\n" +
    "\tUSING(idPrice)\n" +
    "INNER JOIN characters\n" +
    "\tUSING(idcharacters)\n" +
    "INNER JOIN photo\n" +
    "\tUSING(idProduct)\n" +
    "WHERE kindOfProduct = 'MAC'",function (err,result) {

    imgData = result.filter((p)=>{return p.kindOfProduct === 'MAC'}).map((p,index)=>{
        return{
            id: index, name:p.name, price: p.price,
            photo:[
                {src:p.FirstPhoto},
                {src:p.SecondPhoto},
                {src:p.ThirdPhoto},
            ],
            characters:{
                screen: p.screen, processor:p.processor,
                RAM: p.RAM, SSD: p.SSD, videoCard: p.videoCard,
                remainder:p.remainder
            },
        }
    })
    console.log("Mac Book was got!!!")
})

app.get('/mac',function(request,response){
    response.send(imgData);
});

connection.query("SELECT name, price,\n" +
    "kindOfProduct, screen, processor, RAM, InternalMemory, OperationSystem, remainder, BasicCamera, FrontCamera,   FirstPhoto, SecondPhoto, ThirdPhoto, color\n" +
    "FROM products\n" +
    "INNER JOIN prices\n" +
    "\tUSING(idPrice)\n" +
    "INNER JOIN characters\n" +
    "\tUSING(idcharacters)\n" +
    "INNER JOIN photo\n" +
    "\tUSING(idProduct)\n" +
    "INNER JOIN colorOfPhoto\n" +
    "\tUSING(idColorOfPhoto)\n" +
    "WHERE kindOfProduct = 'IPHONE'",
    function(err, results) {
        function onlyUnique(value, index, arr) {
            return arr.map(function(e) { return e.name; }).indexOf(value.name) === index;
        }
        iPhonesDB = results.filter(onlyUnique).map((p,index)=>{
            return {
                id: index,
                name: p.name, price: p.price,
                character: {
                    screen: p.screen, processor: p.processor,
                    RAM: p.RAM, internalMemory: p.InternalMemory,
                    operatingSystem: p.OperationSystem, remainder: p.remainder,
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
        console.log("IPhones was got!!!");
    });

app.get('/iPhone',function(request,response){
    response.send(iPhonesDB);
});

app.listen(3001);