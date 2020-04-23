import React from "react";
import MenuStyle from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = () =>{
    return(
        <div className={MenuStyle.menu}>
            <div className={MenuStyle.item}>
                <NavLink to='/Apple' activeClassName={MenuStyle.active}>
                    <img className={MenuStyle.logo} src={"http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png"} />
                </NavLink>
            </div>
            <div className={MenuStyle.item}>
                <NavLink to='/Mac' activeClassName={MenuStyle.active}>Mac</NavLink>
            </div>

        </div>
    );

}
export default Menu;