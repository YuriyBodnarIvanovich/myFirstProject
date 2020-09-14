import React from "react";
import LeftMenuStyle from './LeftMenu.module.css';

const LeftMenu = () =>{
    return(
        <div className={LeftMenuStyle.container}>
            <div className={LeftMenuStyle.logo}>
                <h1>Your Iphone</h1>
            </div>
            <p>Каталог</p>
            <p>Про компанію</p>
            <p>Контакти</p>
            <p>Блог</p>
            <p>Доставка і оплата</p>
            <p>Оплата</p>
        </div>

    )
}
export default LeftMenu;