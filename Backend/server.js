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

    let idCharacters;
    let idPrice;
    // console.log(request.body.item);

    const charactersFields =  [request.body.item.character.camera.basicCamera,request.body.item.character.Bluetooth,
        request.body.item.character.camera.frontCamera,request.body.item.character.internalMemory,
        request.body.item.character.KindOfProduct,request.body.item.character.Notifications,
        request.body.item.character.OperationSystem,request.body.item.character.processor,
        request.body.item.character.RAM,request.body.item.character.remainder,
        request.body.item.character.screen, request.body.item.character.camera.SSD,
        request.body.item.character.camera.videoCard, request.body.item.character.camera.WorkingTime];

    const dataOfCharacters = "INSERT INTO characters(BasicCamera,Bluetooth,FrontCamera,InternalMemory,\n" +
        "                      KindOfProduct,Notifications,OperationSystem,processor,RAM,remainder,screen,SSD" +
        ",videoCard,WorkingTime) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    connectionBD.promisePool.query( dataOfCharacters,charactersFields,function (err,result) {
        if(err){
            console.log(err);
        }
        console.log("Characters is good!");
    });
    connectionBD.promisePool.query("SELECT idcharacters FROM characters" +
        " WHERE idcharacters=(SELECT max(idcharacters) FROM characters);\n",async function (err,result){
        await addItemToProduct(result[0].idcharacters, 'idcharacters');
    });

    const insertIntoPrices = "INSERT INTO prices(Price) VALUES(?)";

    connectionBD.promisePool.query(insertIntoPrices,[request.body.item.price],function (err,result){
        if(err){
            console.log(err);
        }
        console.log("Price is good!");
    });

    connectionBD.promisePool.query("SELECT idPrice FROM prices" +
        " WHERE idPrice=(SELECT max(idPrice) FROM prices);\n",async function (err,result){
        await addItemToProduct(result[0].idPrice, 'idPrice');
    });






    function addItemToProduct(value,kindOfField){
        if(kindOfField === 'idcharacters'){
            idCharacters = value
        }
        else if(kindOfField === 'idPrice'){
            idPrice = value
        }

        // console.log("id Characters: " + idCharacters);
        // console.log("id Price: " + idPrice);

        if(idCharacters !==undefined && idPrice !==undefined){
            const dataInsetIntoProducts = "INSERT INTO products(name,idPrice, idCharacters) VALUES(?, ?, ?)"

            connectionBD.promisePool.query(dataInsetIntoProducts,[request.body.item.name, idPrice, idCharacters],
                function (err,result){
                    if(err){
                        console.log(err)
                    }
                    console.log(result)
                }
            )
         }
        console.log("Inset Into products");

    }



    let lengthOfColor = request.body.item.photo.length;
    let lengthOfPhoto = 0;
    // console.log("length Color: " + lengthOfColor)

    for(let i = 0; i<request.body.item.photo.length;i++){
        lengthOfPhoto+= request.body.item.photo[i].imgSrc.length
    }

    // console.log("lenght Photo: " + lengthOfPhoto);


    for(let i = 0;i<lengthOfColor;i++){
        // console.log("color:")
        // console.log(request.body.item.photo[i].color);
        connectionBD.promisePool.query(`INSERT INTO colorOfPhoto(color) VALUES(?)`,[request.body.item.photo[i].color],
            function (err,result){
                if(err){
                    console.log(err);
                }
            }
        );
    }


    for(let i = 0;i<lengthOfColor;i++){
        // console.log("color index: " + i);
        // console.log("color: " +  request.body.item.photo[i].color);
        const lengthOfPhotoColor = request.body.item.photo[i].imgSrc.length;
        for(let y = 0;y < lengthOfPhotoColor;y++){
            // console.log("photo index: " + y);
            // console.log("color: " +  request.body.item.photo[i].imgSrc[y]);
           await connectionBD.promisePool.query(`INSERT INTO catalogOfPhoto(srcOfPhoto) VALUES(?)`,[request.body.item.photo[i].imgSrc[y]],
                function (err,result){
                    if(err){
                        console.log(err);
                    }
                }
            );
        }
    }


    connectionBD.promisePool.query("SELECT idProduct FROM products" +
        " WHERE idProduct=(SELECT max(idProduct) FROM products);\n",async function (err,result){
        console.log("--------------------------------------------------")
        console.log(result[0].idProduct);
        await setDataPhoto(result[0].idProduct, 'idProduct');
    });

    let idProduct;
    async function setDataPhoto(value,kindOfField){

        if(kindOfField === 'idProduct'){
            idProduct = value;
        }

        console.log("idProductr")
        console.log("idProduct: " + idProduct);

        const arrOfIdPhoto = [];//фото які потрібно засунути в таблицю photos

        for(let i = 0;i<lengthOfColor;i++){
            const lengthOfPhotoColor = request.body.item.photo[i].imgSrc.length;
            for(let y = 0;y < lengthOfPhotoColor;y++){
                console.log('Src From: ' + request.body.item.photo[i].imgSrc[y])
                const resultPhoto = await connectionBD.promisePool.query(`SELECT idSrcOfPhoto, srcOfPhoto FROM catalogOfPhoto
                WHERE srcOfPhoto = '${request.body.item.photo[i].imgSrc[y]}' `);

                console.log("idPhoto from BD: " + JSON.stringify(resultPhoto[0][0].idSrcOfPhoto) );
                arrOfIdPhoto.push(resultPhoto[0][0].idSrcOfPhoto);
            }
        }

        console.log(arrOfIdPhoto);


        for(let i = 0; i < arrOfIdPhoto.length;i++){
            for(let j = 0; j< request.body.item.photo.length;j++){
                for(let y = 0; y < request.body.item.photo[j].imgSrc.length; y++){
                    const resultSrcOfPhoto = await connectionBD.promisePool.query(`SELECT idSrcOfPhoto, srcOfPhoto
                           FROM catalogOfPhoto WHERE idSrcOfPhoto = '${arrOfIdPhoto[i]}' `);
                    if(resultSrcOfPhoto[0][0].srcOfPhoto === request.body.item.photo[j].imgSrc[y]){
                        console.log(request.body.item.photo[j].color);
                        const resultColor = await connectionBD.promisePool.query(`SELECT idColorOfPhoto, color FROM colorOfPhoto
                        WHERE color = '${request.body.item.photo[j].color}' `);

                        connectionBD.promisePool.query(`INSERT INTO photo(idProduct,idColorOfPhoto,idSrcOfPhoto) VALUES(?,?,?)`,
                            [idProduct,resultColor[0][0].idColorOfPhoto, arrOfIdPhoto[i]],function (err,result){
                                if(err){
                                    console.log(err);
                                }
                            });

                    }
                }
            }
        }
    }

});

app.post('/deleteProduct',passport.authenticate('jwt',{session:false}),async (req,res)=>{
   await connectionBD.promisePool.query(`SELECT idProduct, name, idPrice, idCharacters FROM products 
                                    WHERE name = '${req.body.name}'`,
        function (err,result) {
            deleteProduct(result[0], 'idUser')
        }
    )



    async function deleteProduct(value){
        await connectionBD.promisePool.query(`DELETE FROM products WHERE idProduct = '${value.idProduct}'`,
            function (err,result) {
               if(err){
                   console.log(err)
               }
            }
        );

        await connectionBD.promisePool.query(`DELETE FROM prices WHERE idcharacters = '${value.idcharacters}'`,
            function (err,result) {
                if(err){
                    console.log(err)
                }
            }
        );

        await connectionBD.promisePool.query(`DELETE FROM characters WHERE idPrice = '${value.idPrice}'`,
            function (err,result) {
                if(err){
                    console.log(err)
                }
            }
        );

        await connectionBD.promisePool.query(`SELECT idPhoto, idProduct, idSrcOfPhoto, idColorOfPhoto FROM photo 
                                                WHERE idProduct = '${value.idProduct}'`,
            function (err,result) {
                deletePhoto(result[0]);
            }
        );

    }

    async function deletePhoto(value){
        await connectionBD.promisePool.query(`DELETE FROM photo WHERE idProduct = '${value.idProduct}'`,
            function (err,result) {
                if(err){
                    console.log(err)
                }
            }
        );

        await connectionBD.promisePool.query(`DELETE FROM catalogOfPhoto WHERE idSrcOfPhoto = '${value.idSrcOfPhoto}'`,
            function (err,result) {
                if(err){
                    console.log(err)
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
