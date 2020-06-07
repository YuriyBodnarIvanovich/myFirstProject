import React from "react";
import UserMenuStyle from './UserMenu.module.css';
import MenuStyle from "../../Menu.module.css";
import {NavLink} from "react-router-dom";

const UserMenu = () =>{
    return(
        <div className={UserMenuStyle.menuBox}>
            <div className={MenuStyle.item}>
            <NavLink to='/Profile' activeClassName={MenuStyle.active}>Profile</NavLink>
            </div>
            <hr/>
            <div className={MenuStyle.item}>
            <NavLink to='/Cart' activeClassName={MenuStyle.active}>Cart</NavLink>
            </div>
            <hr/>
            <div className={MenuStyle.item}>
            <NavLink to='/Exit' activeClassName={MenuStyle.active}>Exit</NavLink>
            </div>
        </div>
    )
}
export default UserMenu;
