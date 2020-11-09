const mysql = require("mysql2");
const pool = mysql.createPool({host:'youriphone.zzz.com.ua', user: 'YuriiBond',  password:'greedisGood20', database: 'y_bond'});
const promisePool = pool.promise();
const createBD = require('./createBD');
const connectionBD = require("./connectionToHost");

pool.getConnection( (err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }else{
        console.log('Mysql connection is good!');
    }
});

try {
    console.log('Create BD');
    // promisePool.query("CREATE TABLE IF NOT EXISTS `avatarPhoto`( `idavatarPhoto` INT NOT NULL, `avatarPhotoUser` VARCHAR(150) DEFAULT NULL, PRIMARY KEY(`idavatarPhoto`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `cart`( `idcart` INT NOT NULL AUTO_INCREMENT, `idProduct` INT NOT NULL, `idColorOfPhoto` INT DEFAULT NULL, `idusers` INT NOT NULL, PRIMARY KEY(`idcart`), KEY `fk_cart_colorOfPhoto1_idx`(`idColorOfPhoto`), KEY `fk_cart_products1_idx`(`idProduct`), KEY `fk_cart_users1_idx`(`idusers`), CONSTRAINT `fk_cart_colorOfPhoto1` FOREIGN KEY(`idColorOfPhoto`) REFERENCES `colorOfPhoto`(`idColorOfPhoto`), CONSTRAINT `fk_cart_products1` FOREIGN KEY(`idProduct`) REFERENCES `products`(`idProduct`), CONSTRAINT `fk_cart_users1` FOREIGN KEY(`idusers`) REFERENCES `users`(`idusers`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `characters`( `idcharacters` INT NOT NULL AUTO_INCREMENT, `screen` VARCHAR(150) DEFAULT NULL, `processor` VARCHAR(150) DEFAULT NULL, `RAM` VARCHAR(150) DEFAULT NULL, `InternalMemory` VARCHAR(150) DEFAULT NULL, `BasicCamera` VARCHAR(150) DEFAULT NULL, `FrontCamera` VARCHAR(150) DEFAULT NULL, `SSD` VARCHAR(150) DEFAULT NULL, `videoCard` VARCHAR(150) DEFAULT NULL, `WorkingTime` VARCHAR(150) DEFAULT NULL, `Bluetooth` VARCHAR(150) DEFAULT NULL, `Notifications` VARCHAR(100) DEFAULT NULL, `remainder` VARCHAR(100) DEFAULT NULL, `OperationSystem` VARCHAR(45) DEFAULT NULL, `KindOfProduct` VARCHAR(45) NOT NULL, PRIMARY KEY(`idcharacters`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `colorOfPhoto`( `idColorOfPhoto` INT NOT NULL AUTO_INCREMENT, `color` VARCHAR(15) NOT NULL, PRIMARY KEY(`idColorOfPhoto`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `email`( `idemail` INT NOT NULL, `email` VARCHAR(45) NOT NULL, PRIMARY KEY(`idemail`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `nameOfUser`( `idnameOfUser` INT NOT NULL, `name` VARCHAR(45) DEFAULT NULL, PRIMARY KEY(`idnameOfUser`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `password`( `idpassword` INT NOT NULL, `password` VARCHAR(45) DEFAULT NULL, PRIMARY KEY(`idpassword`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `photo`( `idPhoto` INT NOT NULL AUTO_INCREMENT, `FirstPhoto` VARCHAR(150) DEFAULT NULL, `SecondPhoto` VARCHAR(150) DEFAULT NULL, `ThirdPhoto` VARCHAR(150) DEFAULT NULL, `idProduct` INT NOT NULL, `idColorOfPhoto` INT DEFAULT NULL, PRIMARY KEY(`idPhoto`), KEY `fk_photo_iphones1_idx`(`idProduct`), KEY `fk_photo_colorOfPhoto1_idx`(`idColorOfPhoto`), CONSTRAINT `fk_photo_colorOfPhoto1` FOREIGN KEY(`idColorOfPhoto`) REFERENCES `colorOfPhoto`(`idColorOfPhoto`), CONSTRAINT `fk_photo_iphones1` FOREIGN KEY(`idProduct`) REFERENCES `products`(`idProduct`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `prices`( `idPrice` INT NOT NULL AUTO_INCREMENT, `Price` INT DEFAULT NULL, PRIMARY KEY(`idPrice`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `products`( `idProduct` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NOT NULL, `idPrice` INT NOT NULL, `idCharacters` INT NOT NULL, PRIMARY KEY(`idProduct`), KEY `fk_iphones_prices_idx`(`idPrice`), KEY `fk_iphones_charecters1_idx`(`idCharacters`), CONSTRAINT `fk_iphones_charecters1` FOREIGN KEY(`idCharacters`) REFERENCES `characters`(`idcharacters`), CONSTRAINT `fk_iphones_prices` FOREIGN KEY(`idPrice`) REFERENCES `prices`(`idPrice`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `rating`( `idrating` INT NOT NULL AUTO_INCREMENT, `ratingOfBuy` INT DEFAULT NULL, `products_idiphones` INT NOT NULL, PRIMARY KEY(`idrating`), KEY `fk_rating_products1_idx`(`products_idiphones`), CONSTRAINT `fk_rating_products1` FOREIGN KEY(`products_idiphones`) REFERENCES `products`(`idProduct`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `RolesOfUsers`( `idRoles` INT NOT NULL AUTO_INCREMENT, `nameOfRole` VARCHAR(45) NOT NULL, `idUser` INT NOT NULL, PRIMARY KEY(`idRoles`), KEY `fk_RolesOfUsers_1_idx`(`idUser`), CONSTRAINT `fk_RolesOfUsers_1` FOREIGN KEY(`idUser`) REFERENCES `users`(`idusers`) )\n");
    // promisePool.query("CREATE TABLE IF NOT EXISTS `users`( `idusers` INT NOT NULL AUTO_INCREMENT, `idnameOfUser` INT NOT NULL, `idemail` INT NOT NULL, `idavatarPhoto` INT NOT NULL, `subOfAuth0` VARCHAR(70) DEFAULT NULL, PRIMARY KEY(`idusers`), KEY `fk_users_nameOfUser1_idx`(`idnameOfUser`), KEY `fk_users_email1_idx`(`idemail`), KEY `fk_users_avatarPhoto1_idx`(`idavatarPhoto`), CONSTRAINT `fk_users_avatarPhoto1` FOREIGN KEY(`idavatarPhoto`) REFERENCES `avatarPhoto`(`idavatarPhoto`), CONSTRAINT `fk_users_email1` FOREIGN KEY(`idemail`) REFERENCES `email`(`idemail`), CONSTRAINT `fk_users_nameOfUser1` FOREIGN KEY(`idnameOfUser`) REFERENCES `nameOfUser`(`idnameOfUser`) )\n");
    createBD.comandForCreatBD();

} catch (err){
    console.log('error of Create BD');
  console.log(err)
}


module.exports.promisePool = promisePool;