import React from "react";
import MenuStyle from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";
import UserField from "./UserField/UserField";

const Menu = () =>{
    const data = useSelector(state=> state.ApplePage);
    return(
        <div className={MenuStyle.menu}>
            <div className={MenuStyle.forItems}>
                <div className={MenuStyle.item}>
                    <NavLink to='/Apple' activeClassName={MenuStyle.active}>
                        <img className={MenuStyle.logo} src={"http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png"}
                             alt={'apple'}/>
                    </NavLink>
                </div>
                <div className={MenuStyle.item}>
                    <NavLink to='/Mac' activeClassName={MenuStyle.active}>Mac</NavLink>
                </div>
                <div className={MenuStyle.item}>
                    <NavLink to='/IPhone' activeClassName={MenuStyle.active}>IPhone</NavLink>
                </div>
                <div className={MenuStyle.item} >
                    {data.userStatus ? <NavLink to='/Cart' activeClassName={MenuStyle.active}>Cart</NavLink> : ''}
                </div>
                <div className={MenuStyle.item} >
                    {data.adminStatus ?  <NavLink to='/Admin' activeClassName={MenuStyle.active}>Admin</NavLink> : ''}
                </div>
            </div>

            <div className={MenuStyle.itemUserField}>
                <UserField />
            </div>
        </div>
    );

}
export default Menu;