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

    return iPhoneArr
}
module.exports.openIphone = openIphone;