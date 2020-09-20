const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const AuthenticationClient = require('auth0').AuthenticationClient;
const app = express();
const strategy = require('./passport').strategy;
const passport = require("passport");
const dataBD = require('./connectionBD');

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

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
    console.log(req.body.name + " " + req.body.email + ' ' + req.body.password);
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
                        return res.status(200).json({
                            message: 'Good'
                        });
                    })
                }
            }
        }
    });
});



app.post('/authorize',(req,res)=>{
    const data = {
        username: req.body.email,
        password: req.body.password,
        realm: 'Username-Password-Authentication', // Optional field.
    };
    auth0.oauth.passwordGrant(data,async function (err, userData) {

        if (err) {
            console.log(err);
        }
        else{
            const Users = await dataBD.openUsers(req.body.email);
            console.log('UserData: ' + JSON.stringify(Users));
            for(let user of Users){
                if(req.body.email === user.email){
                    console.log('UserData: ' + JSON.stringify(Users));
                    return res.status(200).json({
                        token: userData,
                        Users: Users
                    });
                }
            }
        }
    });
});

app.post('/checkJWT',passport.authenticate('jwt', { session: false }), async (req,res)=>{
    const Users = await dataBD.openUsers(req.user.userData.email);
    console.log('UserData: ' + JSON.stringify(Users));
    res.json({message: "Success!",userData:Users});
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

app.post('/addToCart',passport.authenticate('jwt', { session: false }), (req, res) => {
    let idUser;
    let idProduct;
    let idColor;
    let idCart;
   connection.query("SELECT idusers\n" +
       "FROM users\n" +
       "INNER join email\n" +
       "\tUSING(idemail)\n" +
       "WHERE email = '"+req.user.userData.email +"'",function (err,result) {
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
            console.log('idUser ' + idUser +  'idProduct ' + idProduct + 'idColor ' + idColor + 'idCart' + idCart );
            const fieldCart = [idCart,idProduct,idColor,idUser]
            const sql = "INSERT INTO cart( idcart, idProduct, idColorOfPhoto, idusers) VALUES(?,?,?,?)"
            connection.query( sql,fieldCart,function (err,result) {
                if(err) console.log(err);
                else console.log("Данные добавлены");
            });
        }
    }
});

app.get('/mac',async function(request,response){
    const arr =  await dataBD.openMac();
    response.send(arr);
});

app.get('/iPhone', async function(request,response){
    const arr = await dataBD.openIphone();
    response.send(arr);
    console.log('iPhones Opens!!!')
});

app.listen(3001);