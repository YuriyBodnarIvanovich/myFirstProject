const mysql = require("mysql2");

const pool = mysql.createPool({host:'localhost', user: 'bond', database: 'PRODUCTS_NEW', password:'pass'});

async function openIphone(){

    let iPhoneArr = [];
    const promisePool = pool.promise();
    const result  =  await promisePool.query("SELECT name, price,\n" +
        "kindOfProduct, screen, processor, RAM, InternalMemory, OperationSystem, remainder, " +
        "BasicCamera, FrontCamera,   FirstPhoto, SecondPhoto, ThirdPhoto, color\n" +
        "FROM products\n" +
        "INNER JOIN prices\n" +
        "\tUSING(idPrice)\n" +
        "INNER JOIN characters\n" +
        "\tUSING(idcharacters)\n" +
        "INNER JOIN photo\n" +
        "\tUSING(idProduct)\n" +
        "INNER JOIN colorOfPhoto\n" +
        "\tUSING(idColorOfPhoto)\n" +
        "WHERE kindOfProduct = 'IPHONE'");

    function onlyUnique(value, index, arr) {
        return arr.map(function(e) { return e.name; }).indexOf(value.name) === index;
    }

    iPhoneArr =  result[0].filter(onlyUnique).map((p,index)=>{
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
    iPhoneArr.forEach(function (item,index) {
        item.photo =   result[0].filter((r)=>{return item.name === r.name}).map((p)=>{
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
    console.log(iPhoneArr);

    return iPhoneArr
}

async function openMac(){

    let macArray = [];
    const promisePool = pool.promise();
    const result = await promisePool.query("SELECT name, price,\n" +
        "kindOfProduct, screen, processor, RAM, remainder, SSD, videoCard, FirstPhoto, SecondPhoto, ThirdPhoto\n" +
        "FROM products\n" +
        "INNER JOIN prices\n" +
        "\tUSING(idPrice)\n" +
        "INNER JOIN characters\n" +
        "\tUSING(idcharacters)\n" +
        "INNER JOIN photo\n" +
        "\tUSING(idProduct)\n" +
        "WHERE kindOfProduct = 'MAC'");

    macArray = result[0].filter((p)=>{return p.kindOfProduct === 'MAC'}).map((p,index)=>{
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
    return macArray
}

async function openUsers(idAuth){
    let user = [];
    const promisePool = pool.promise();
    const result = await promisePool.query("SELECT idusers, name,email, avatarPhotoUser, subOfAuth0 AS idAuth\n" +
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

    const resultCart = await promisePool.query("SELECT idcart, products.name AS ProductName,  prices.Price AS Price,  colorOfPhoto.color AS color, idusers\n" +
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
                name: p.ProductName,
                price: p.Price,
                color: p.color
            };
        });
    });

    const resultRoles = await promisePool.query("SELECT name, nameOfRole, subOfAuth0\n" +
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