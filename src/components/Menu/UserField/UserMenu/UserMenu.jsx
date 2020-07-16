import React from "react";
import UserMenuStyle from './UserMenu.module.css';
import MenuStyle from "../../Menu.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const UserMenu = () =>{
    const dataApple = useSelector(state =>state.ApplePage);
    const dispatch = useDispatch();
    function exitUser() {
        dispatch({type:'CHANGE_SAVED_NAME',savedName:'' });
        dispatch({type:'CHANGE_SAVED_EMAIL',savedEmail:'' });
        dispatch({type:'CHANGE_SAVED_PASSWORD',savedPassword:'' });
        dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:false});
        dispatch({type:'CHANGE_STATUS_OF_USER_MENU',status:false});
    }
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
                <p onClick={exitUser}>Exit</p>
            </div>
        </div>
    )
}
export default UserMenu;
