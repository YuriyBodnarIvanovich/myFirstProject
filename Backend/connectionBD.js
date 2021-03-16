const connectionBD = require("./connectionToHost");

async function openIphone(){

    let iPhoneArr = [];
    const result  =  await connectionBD.promisePool.query("SELECT idProduct, name, price, idAuthor, kindOfProduct, screen, processor, RAM, InternalMemory, OperationSystem, remainder, BasicCamera, FrontCamera\n" +
        "\tFROM products \n" +
        "\t\tINNER JOIN prices \n" +
        "        \tUSING(idPrice) \n" +
        "        INNER JOIN characters \n" +
        "\t        USING(idcharacters) \n" +
        "WHERE kindOfProduct = 'IPHONE'");

    function onlyUnique(value, index, arr) {
        return arr.map(function(e) { return e.name; }).indexOf(value.name) === index;
    }
    iPhoneArr =  result[0].filter(onlyUnique).map((p,index)=>{
        return {
            id: p.idProduct,
            name: p.name, price: p.price,
            idAuthor:p.idAuthor,
            character: {
                screen: p.screen, processor: p.processor,
                RAM: p.RAM, internalMemory: p.InternalMemory,
                operatingSystem: p.OperationSystem, remainder: p.remainder,
                camera:{
                    basicCamera: p.BasicCamera,
                    frontCamera: p.FrontCamera,
                },
            },
            status: true,
            photo:[],
        };
    });
    const resultOfColor = await connectionBD.promisePool.query("SELECT idProduct, color FROM colorOfPhoto " +
        "INNER JOIN photo USING(idColorOfPhoto) GROUP BY idProduct, color\n");
    // console.log(resultOfColor[0])

    iPhoneArr.forEach(function (item,index) {
        item.photo =   resultOfColor[0].filter(el=>el.idProduct === item.id).map((result)=>{
            return{
                color: result.color,
                imgSrc:[],
            }
        })
    });
    console.log(iPhoneArr);

    const resultOfPhoto = await connectionBD.promisePool.query("SELECT idProduct, color, srcOfPhoto\n" +
        "        FROM photo\n" +
        "        INNER JOIN colorOfPhoto\n" +
        "          USING(idColorOfPhoto)\n" +
        "        INNER JOIN catalogOfPhoto\n" +
        "          USING(idSrcOfPhoto)\n" +
        "ORDER BY idProduct" );

    // console.log(resultOfPhoto[0]);

    iPhoneArr.forEach(function (item,index) {
        item.photo.map((itemPhoto)=>{
            resultOfPhoto[0].map((result)=>{
                if(item.id === result.idProduct){
                    if(itemPhoto.color === result.color){
                        itemPhoto.imgSrc.push(result.srcOfPhoto);
                    }
                }
            });
        })

    });
    // console.log(iPhoneArr);
    return iPhoneArr
}

async function openMac(){
    let macArray = [];
    const result = await connectionBD.promisePool.query("SELECT idProduct, name, price,idAuthor, kindOfProduct, screen, processor, RAM, remainder, SSD, videoCard\n" +
        "FROM products\n" +
        "     INNER JOIN prices\n" +
        "        USING(idPrice)\n" +
        "     INNER JOIN characters\n" +
        "        USING(idcharacters)\n" +
        "WHERE kindOfProduct = 'MAC'");

    macArray = result[0].filter((p)=>{return p.kindOfProduct === 'MAC'}).map((p,index)=>{
        return{
            id: p.idProduct, name:p.name, price: p.price,
            idAuthor:p.idAuthor,
            photo:[],
            characters:{
                screen: p.screen, processor:p.processor,
                RAM: p.RAM, SSD: p.SSD, videoCard: p.videoCard,
                remainder:p.remainder
            },
        }
    });

    const resultOfPhoto = await connectionBD.promisePool.query("SELECT idProduct, srcOfPhoto\n" +
        "FROM photo\n" +
        "INNER JOIN catalogOfPhoto\n" +
        "\tUSING(idSrcOfPhoto)\n");


    macArray.map((macItem,indexOfMac)=>{

           resultOfPhoto[0].map((itemOfMacBDPhoto)=>{
                if(macItem.id === itemOfMacBDPhoto.idProduct){
                    console.log("good")
                    macItem.photo.push(itemOfMacBDPhoto.srcOfPhoto);
                }
           });
    });
    console.log('Mac Open!!!')

    return macArray
}

async function openUsers(idAuth){
    let user = [];
    const result = await connectionBD.promisePool.query("SELECT idusers, name,email, avatarPhotoUser, subOfAuth0 AS idAuth\n" +
        "        FROM users\n" +
        "        INNER JOIN nameOfUser\n" +
        "        USING(idnameOfUser)\n" +
        "        INNER JOIN email\n" +
        "        USING(idemail)\n" +
        "        INNER JOIN(avatarPhoto)\n" +
        "        USING(idavatarPhoto)\n" +
        "        WHERE email ='" + idAuth + "'");

    user =  result[0].map((element,index)=>{
        return{
            idUser: element.idusers,
            idAuth0:element.idAuth,
            name: element.name,
            email: element.email,
            mainPhoto: element.avatarPhotoUser,
            CartList:[],
            Roles:[]
        }
    });

    const resultCart = await connectionBD.promisePool.query("SELECT idcart, products.name AS ProductName,  prices.Price AS Price,  colorOfPhoto.color AS color, idusers\n" +
        "        FROM cart\n" +
        "        INNER JOIN products\n" +
        "        USING(idProduct)\n" +
        "        INNER JOIN colorOfPhoto\n" +
        "        USING(idColorOfPhoto)\n" +
        "        INNER JOIN prices\n" +
        "        ON products.idPrice = prices.idPrice\n" +
        "        WHERE idusers ='" + user[0].idUser + "'");

    user.forEach(function (item, index) {
        item.CartList = resultCart[0].filter((element) =>
        {return item.idUser === element.idusers}).map((p) => {
            return {
                idCard: p.idcart,
                name: p.ProductName,
                price: p.Price,
                color: p.color
            };
        });
    });

    const resultRoles = await connectionBD.promisePool.query("SELECT name, nameOfRole, subOfAuth0\n" +
        "FROM RolesOfUsers\n" +
        "INNER JOIN users\n" +
        "\tON RolesOfUsers.idUser = users.idusers\n" +
        "INNER JOIN nameOfUser\n" +
        "\tUSING(idnameOfUser);");
    user.forEach(function (item,index){
        item.Roles = resultRoles[0].filter((element)=>{return item.idAuth0 === element.subOfAuth0}).map((p)=>{
            return{
                role: p.nameOfRole
            }
        });
    });

    return user
}

module.exports.openIphone = openIphone;
module.exports.openMac = openMac;
module.exports.openUsers = openUsers;
