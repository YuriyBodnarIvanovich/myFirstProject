const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const AuthenticationClient = require('auth0').AuthenticationClient;
const app = express();
const strategy = require('./passport').strategy;
const passport = require("passport");

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

passport.use(strategy);

const connection = mysql.createConnection({
    host: "localhost",
    user: "bond",
    database: "PRODUCTS_NEW",
    password: "pass"
});
const auth0 = new AuthenticationClient({
    domain: 'dev-uwll33xb.eu.auth0.com',
    clientId: 'j5ou2Xj09ajlhSZLM57f68nqPBj9RN7G',
    clientSecret: 'T9SNiX6na8Sshg6qeFQVXjzsz5GA5hx-AgWsLyD05TOXjYwzyDsr9M-htlStDQ4H',
    scope: 'read:users update:users',
});

app.post('/singUp',(req,res)=>{
    console.log("Name: "+ req.body.name + " email: "  + req.body.email + " pass: " + req.body.password);
    const data = {
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
        connection: 'Username-Password-Authentication' // Optional field.
    };

    auth0.database.signUp(data, function (err, userData) {
        if (err) {
            console.log(err);
        }
        else{
            connection.query("SELECT COUNT(*) AS Number\n" +
                "FROM nameOfUser",function (err,result) {
                addData(result[0].Number+1,'idNameOfUser');
            });
            connection.query("SELECT COUNT(*) AS Number\n" +
                "FROM email",function(err,result){
                addData(result[0].Number+1,'idEmail')
            });
            connection.query("SELECT COUNT(*) AS Number\n" +
                "FROM avatarPhoto",function(err,result){
                addData(result[0].Number+1,'idAvatarPhoto')
            });
            let idNameOfUser;
            let idEmail;
            let idAvatarPhoto;

            function addData(data,kindOfData){
                if(kindOfData==='idNameOfUser'){
                    idNameOfUser = data;
                    const fieldName = [idNameOfUser,req.body.name]
                    const sql = "INSERT INTO nameOfUser(idnameOfUser,name) VALUES(?,?)"
                    connection.query(sql,fieldName,function (err,result) {
                        if(err) console.log(err);
                        else console.log("Данные добавлены");
                    })
                }
                else if(kindOfData==='idEmail'){
                    idEmail =data;
                    const fieldName = [idEmail,req.body.email]
                    const sql = "INSERT INTO email(idemail,email) VALUES(?,?)"
                    connection.query(sql,fieldName,function (err,result) {
                        if(err) console.log(err);
                        else console.log("Данные добавлены");
                    })
                }
                else{
                    idAvatarPhoto = data;
                    const fieldName = [idAvatarPhoto,req.body.avatarPhoto]
                    const sql = "INSERT INTO avatarPhoto(idavatarPhoto,avatarPhotoUser) VALUES(?,?)"
                    connection.query(sql,fieldName,function (err,result) {
                        if(err) console.log(err);
                        else console.log("Данные добавлены");
                    })
                }

                if(idNameOfUser !== undefined && idEmail !== undefined  && idAvatarPhoto !== undefined && userData._id !== undefined){
                    const fieldUser = [idNameOfUser,idEmail,idAvatarPhoto,userData._id]
                    const sql = "INSERT INTO users(idnameOfUser,idemail,idavatarPhoto,subOfAuth0) VALUES(?,?,?,?)"
                    connection.query(sql,fieldUser,function (err,result) {
                        if(err) console.log(err);
                        else console.log("Users Данные добавлены");
                    })
                }
            }
        }
    });
});
connection.query("SELECT idusers, name,email, avatarPhotoUser, subOfAuth0 AS idAuth\n" +
    "    FROM users\n" +
    "    INNER JOIN nameOfUser\n" +
    "    USING(idnameOfUser)\n" +
    "    INNER JOIN email\n" +
    "    USING(idemail)\n" +
    "    INNER JOIN(avatarPhoto)\n" +
    "    USING(idavatarPhoto)",function (err,result) {
    function onlyUnique(value, index, arr) {
        return arr.map(function(e) { return e.name; }).indexOf(value.name) === index;
    }
    Users = result.filter(onlyUnique).map((element,index)=>{
        return{
            idUser: element.idusers,
            idAuth0:element.idAuth,
            name: element.name,
            email: element.email,
            mainPhoto: element.avatarPhotoUser,
            CartList:[]
        }
    });
    console.log("Users Open!!!")
    console.log(Users)
});
app.post('/authorize',(req,res)=>{
    console.log("Name: "+ req.body.name + " email: "  + req.body.email + " pass: " + req.body.password);
    const data = {
        username: req.body.email,
        password: req.body.password,
        realm: 'Username-Password-Authentication', // Optional field.
    };

    auth0.oauth.passwordGrant(data, function (err, userData) {
        if (err) {
            console.log(err);
        }
        else{
            console.log('user data:' + userData);
            console.log(userData.id_token);
            for(let user of Users){
                if(req.body.email === user.email){
                    return res.status(200).json({
                        token: userData
                    });
                }
            }
        }
    });
});

app.use(passport.initialize());
app.use(passport.session());

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

connection.query("SELECT idcart, products.name AS ProductName,  prices.Price AS Price,  colorOfPhoto.color AS color, idusers\n" +
        "FROM cart\n" +
        "INNER JOIN products\n" +
        "\tUSING(idProduct)\n" +
        "INNER JOIN colorOfPhoto\n" +
        "\tUSING(idColorOfPhoto)\n" +
        "INNER JOIN prices\n" +
        "\tON products.idPrice = prices.idPrice",function(err,resultCart) {
    Users.forEach(function (item, index) {
        item.CartList = resultCart.filter((element) =>
        {return item.idUser === element.idusers}).map((p) => {
            return {
                name: p.ProductName,
                price: p.Price,
                color: p.color
            };
        });
    });
});


app.get('/users',function (request,response) {
    console.log('Users open!');
    response.send(Users);
});

app.post('/addToCart',passport.authenticate('jwt', { session: false }), (req, res) => {
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
    res.json({message: "Success!"});
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