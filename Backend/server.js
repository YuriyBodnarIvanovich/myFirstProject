const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const AuthenticationClient = require('auth0').AuthenticationClient;
const app = express();
const strategy = require('./passport').strategy;
const passport = require("passport");
const dataBD = require('./connectionBD');
const connectionBD = require("./connectionToHost");

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

passport.use(strategy);

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
            connectionBD.promisePool.query("SELECT COUNT(*) AS Number\n" +
                "FROM nameOfUser",function (err,result) {
                addData(result[0].Number+1,'idNameOfUser');
            });
            connectionBD.promisePool.query("SELECT COUNT(*) AS Number\n" +
                "FROM email",function(err,result){
                addData(result[0].Number+1,'idEmail')
            });
            connectionBD.promisePool.query("SELECT COUNT(*) AS Number\n" +
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
                    connectionBD.promisePool.query(sql,fieldName,function (err,result) {
                        if(err) console.log(err);
                        else console.log("Данные добавлены");
                    })
                }
                else if(kindOfData==='idEmail'){
                    idEmail =data;
                    const fieldName = [idEmail,req.body.email]
                    const sql = "INSERT INTO email(idemail,email) VALUES(?,?)"
                    connectionBD.promisePool.query(sql,fieldName,function (err,result) {
                        if(err) console.log(err);
                        else console.log("Данные добавлены");
                    })
                }
                else{
                    idAvatarPhoto = data;
                    const fieldName = [idAvatarPhoto,req.body.avatarPhoto]
                    const sql = "INSERT INTO avatarPhoto(idavatarPhoto,avatarPhotoUser) VALUES(?,?)"
                    connectionBD.promisePool.query(sql,fieldName,function (err,result) {
                        if(err) console.log(err);
                        else console.log("Данные добавлены");
                    })
                }

                if(idNameOfUser !== undefined && idEmail !== undefined  && idAvatarPhoto !== undefined && userData._id !== undefined){
                    const fieldUser = [idNameOfUser,idEmail,idAvatarPhoto,userData._id]
                    const sql = "INSERT INTO users(idnameOfUser,idemail,idavatarPhoto,subOfAuth0) VALUES(?,?,?,?)"
                    connectionBD.promisePool.query(sql,fieldUser,function (err,result) {
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


app.post('/AddItemToBD', async function (request,response){
    const charactersFields =    [request.body.item.character.screen,request.body.item.character.processor,
                                request.body.item.character.RAM,request.body.item.character.internalMemory,
                                request.body.item.character.remainder,request.body.item.character.SSD,
                                request.body.item.character.videoCard,request.body.item.character.WorkingTime,
                                request.body.item.character.Bluetooth,request.body.item.character.Notifications,
                                request.body.item.character.OperationSystem, request.body.item.character.camera.basicCamera,
                                request.body.item.character.camera.frontCamera];

    const dataOfCharacters = "INSERT INTO characters(screen,processor,RAM,InternalMemory,remainder,SSD," +
            " videoCard,WorkingTime,Bluetooth,Notifications,OperationSystem,BasicCamera,FrontCamera) " +
            " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
    connectionBD.promisePool.query( dataOfCharacters,charactersFields,function (err,result) {
        if(err){
            console.log(err);
        }
    });


    const priceProductSql = "INSERT INTO prices(Price) VALUES("+ request.body.item.price +")";
    connectionBD.promisePool.query(priceProductSql,function (err,result){
        if(err) console.log(err);
        else console.log("price done");
    });

    let idCharacters;
    let idPrice;
    const idPriceSQL = "SELECT idPrice FROM prices  \n" +
        "ORDER BY idPrice DESC  \n" +
        "LIMIT 1;";
    const idCharactersSql = "SELECT idcharacters FROM characters  \n" +
        "ORDER BY idcharacters DESC  \n" +
        "LIMIT 1;";
    connectionBD.promisePool.query(idCharactersSql,function (err,result){
        if(err){
            console.log(err);
        }else {
            console.log(result[0].idcharacters);
        }
    });

    connectionBD.promisePool.query(idCharactersSql,function (err,result){
        if(err) console.log(err);
        else{
            addData(result[0].idcharacters,'idCharacters');
            console.log(result);
            console.log(result[0]);
        }
    });

    connectionBD.promisePool.query(idPriceSQL,function (err,result){
        if(err) console.log(err);
        else addData(result[0].idPrice,'idPrice');
    });

    const addData = (data,kindOfData) =>{
        if(kindOfData==='idCharacters'){
            idCharacters = data;
        }else if(kindOfData==='idPrice') {
            idPrice = data;
        }
        if(idCharacters !==undefined && idPrice !==undefined){
            console.log('idCharacters ' + idCharacters +  'idPrice ' + idPrice );
            const fieldCart = [idCharacters,idPrice,request.body.item.name];
            const sql = "INSERT INTO products(idCharacters,idPrice,name) VALUES(?,?,?)"
            connectionBD.promisePool.query( sql,fieldCart,function (err,result) {
                if(err) console.log(err);
                else console.log("Products add done!");
            });
        }
    };

    const elementOfColors = request.body.item.photo.filter((item)=>{
        return item.color !=='';
    }).map((item)=>{
        return item.color;
    })

    const colorAddSql = "INSERT INTO colorOfPhoto(color) VALUES(?)";
    elementOfColors.map((item)=>{
        connectionBD.promisePool.query(colorAddSql,item,function (err,result){
            if(err) console.log(err);
            else console.log(result);
        });
    });
    console.log("Colors" + elementOfColors.length + ",  " + elementOfColors);

    //////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let idColors = [];

    const getIdColorsSql = "SELECT idColorOfPhoto FROM colorOfPhoto  \n" +
        "ORDER BY idColorOfPhoto DESC  \n" +
        "LIMIT "+ elementOfColors.length +";"

    connectionBD.promisePool.query(getIdColorsSql,function (err,result){
        console.log("Colors:");
        console.log(result);
    });
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    const elementsOfPhoto = request.body.item.photo.map((item)=>{
        return item.imgSrc.filter((item)=>{
            return item.src !=='';
        }).map((itemSrs)=>{
            return itemSrs.src;
        });
    });
    elementsOfPhoto.splice(-1,1);
    console.log("Photos: ");
    console.log(elementsOfPhoto);


    const photoAddSql = "INSERT INTO photo(FirstPhoto, SecondPhoto, ThirdPhoto, idProduct, idColorOfPhoto) " +
        "VALUES(?,?,?,?,?,)";
    elementsOfPhoto.map((item)=>{
        // connectionBD.promisePool.query()
    });


});

app.post('/addToCart',passport.authenticate('jwt', { session: false }), (req, res) => {
    let idUser;
    let idProduct;
    let idColor;
    let idCart;
    connectionBD.promisePool.query("SELECT idusers\n" +
       "FROM users\n" +
       "INNER join email\n" +
       "\tUSING(idemail)\n" +
       "WHERE email = '"+req.user.userData.email +"'",function (err,result) {
       addData(result[0].idusers,'idUser');
   });

    connectionBD.promisePool.query("SELECT idProduct\n" +
        "FROM products\n" +
        "WHERE name = '"+ req.body.name +"'",function (err, result) {
        addData( result[0].idProduct,'idProduct');
    });

    connectionBD.promisePool.query("SELECT idColorOfPhoto\n" +
        "FROM colorOfPhoto\n" +
        "WHERE color = '"+ req.body.color+"'",function (err,result) {
        addData(result[0].idColorOfPhoto,'idColor');
    });

    connectionBD.promisePool.query("SELECT COUNT(*) AS Number \n" +
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
            connectionBD.promisePool.query( sql,fieldCart,function (err,result) {
                if(err) console.log(err);
                else console.log("Данные добавлены");
            });
        }
    }
});

app.get('/mac',async function(request,response){
    const arr =  await dataBD.openMac();
    console.log("Mac object!")
    console.log(arr);
    response.send(arr);
});

app.get('/iPhone', async function(request,response){
    const arr = await dataBD.openIphone();
    response.send(arr);
    console.log('iPhones Opens!!!')
});


app.listen(3001);
