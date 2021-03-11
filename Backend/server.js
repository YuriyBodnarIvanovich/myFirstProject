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
            return res.status(400).json({
                message: 'Bad',
                textErr:err.originalError.response.body.error
            });
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
            return res.status(err.statusCode).json({
                err: err.originalError.response.text
            });
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

    let idCharacters;
    let idPrice;

    const dataOfCharacters = `INSERT INTO characters(BasicCamera,Bluetooth,FrontCamera,InternalMemory, 
                              KindOfProduct,Notifications,OperationSystem,processor,RAM,remainder,screen,SSD,
                              videoCard,WorkingTime) VALUES(
                                 '${request.body.item.character.camera.basicCamera}',
                                 '${request.body.item.character.Bluetooth}',
                                 '${request.body.item.character.camera.frontCamera}',
                                 '${request.body.item.character.internalMemory}',
                                 '${request.body.item.character.KindOfProduct}',
                                 '${request.body.item.character.Notifications}',
                                 '${request.body.item.character.OperationSystem}',
                                 '${request.body.item.character.processor}',
                                 '${ request.body.item.character.RAM}',
                                 '${request.body.item.character.remainder}',
                                 '${request.body.item.character.screen}',
                                 '${request.body.item.character.camera.SSD}',
                                 '${request.body.item.character.camera.videoCard}',
                                 '${ request.body.item.character.camera.WorkingTime}'
                              );`;
    connectionBD.promisePool.query( dataOfCharacters,function (err,result) {//write characters to BD
        addItemToProduct(result.insertId,'idcharacters');//get characters id
        if(err){
            console.log(err);
        }
    });

    connectionBD.promisePool.query(`INSERT INTO prices (Price) VALUES (${request.body.item.price});`,function (err,result){//write price to BD
        addItemToProduct(result.insertId,'idPrice');// get price id
        if(err){
            console.log(err);
        }
    });


    function addItemToProduct(value,kindOfField){
        if(kindOfField === 'idcharacters'){//get character id and price id
            idCharacters = value
        }
        else if(kindOfField === 'idPrice'){
            idPrice = value
        }
        if(idCharacters !==undefined && idPrice !==undefined){//write product to BD
            connectionBD.promisePool.query(`INSERT INTO products(name,idPrice, idCharacters)
                                            VALUES('${request.body.item.name}', '${idPrice}', '${idCharacters}')`,
                function (err,result){
                    if(err){
                        console.log(err)
                    }
                    setDataPhoto(result.insertId);
                }
            )
         }
    }

    let idProduct;

    async function setDataPhoto(value){
        idProduct = value;
        request.body.item.photo.forEach((item,index)=>{
            setColor(item.color,index);//set color from front-end
        });
    }

    function setColor(color,indexOfColor){
        connectionBD.promisePool.query(`SELECT idColorOfPhoto, color FROM colorOfPhoto WHERE color = '${color}'`,//check or exist this color in Bd
            function (err,result){
                if(result.length === 0){
                    connectionBD.promisePool.query(`INSERT INTO colorOfPhoto(color) VALUES('${color}')`,//add color to BD
                        function (errColor,resultColor){
                            setPhoto(resultColor.insertId,indexOfColor)//send color to photo
                        }
                    )
                }else {
                    setPhoto(result[0].idColorOfPhoto,indexOfColor)//fun for write photo to BD
                }
            }
        )
    }

    function setPhoto(idColorOfBD, indexOfPhoto){
        request.body.item.photo[indexOfPhoto].imgSrc.forEach((item)=>{
           connectionBD.promisePool.query(`INSERT INTO catalogOfPhoto(srcOfPhoto) VALUES('${item}')`,function (err,resultPhoto){
               if(err){
                   console.log(err)
               }
                connectionBD.promisePool.query(`INSERT INTO photo(idProduct,idColorOfPhoto,idSrcOfPhoto) 
                VALUES(${idProduct},${idColorOfBD},${resultPhoto.insertId})`,
                    function (err,result){
                        if(err){
                            console.log(err)
                        }
                    }
                )
           });
        });
    }

});

app.post('/deleteProduct',passport.authenticate('jwt',{session:false}),async (req,res)=>{
    connectionBD.promisePool.query(`SELECT idProduct, name, idPrice, idCharacters FROM products
                                    WHERE name = '${req.body.name}'`,
        function (err,result) {
            deleteProduct(result[0]);//get data about product
            res.json({message: "Success!"});
        }
    )

    function deleteProduct(value) {

        connectionBD.promisePool.query(`SELECT idPhoto, idProduct, idSrcOfPhoto, idColorOfPhoto 
                                        FROM photo 
                                        WHERE idProduct = ${value.idProduct}`,//get data id of photo
            function (err,resultPhoto){
                if(err){
                    console.log(err);
                }
                resultPhoto.forEach((item)=>{//delete photo src
                   connectionBD.promisePool.query(`DELETE FROM catalogOfPhoto WHERE idSrcOfPhoto = ${item.idSrcOfPhoto}`,
                       function (err,resultDeleteOfCatalog){
                            if(err){
                                console.log(err);
                            }
                       }
                   )
                });
                resultPhoto.forEach((item)=>{//delete photo
                    connectionBD.promisePool.query(`DELETE FROM photo WHERE idProduct = ${item.idProduct}`,
                        function (err,resultDeleteOfCatalog){
                            if(err){
                                console.log(err);
                            }
                        }
                    )
                });
            }

        );
        connectionBD.promisePool.query(`DELETE FROM characters WHERE idcharacters = ${value.idCharacters}`,
            function (err,result){
                if(err){
                    console.log(err);
                }
            }
        );
        connectionBD.promisePool.query(`DELETE FROM prices WHERE idPrice = ${value.idPrice}`,
            function (err,result){
                if(err){
                    console.log(err);
                }
            }
        );
        connectionBD.promisePool.query(`DELETE FROM products WHERE idProduct = ${value.idProduct}`,
            function (err,result){
                if(err){
                    console.log(err);
                }
            }
        );
    }
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

app.post('/deleteFromCard',passport.authenticate('jwt', { session: false }),(req,res)=>{
    connectionBD.promisePool.query(`DELETE FROM cart WHERE idcart = ${req.body.idCard}`,function (err,result){
        if(err){
            console.log(err);
        }else {
            res.json({message: "Success!"});
        }
    });
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
