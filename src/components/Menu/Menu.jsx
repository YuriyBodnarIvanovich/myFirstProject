import React from "react";
import MenuStyle from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";


const Menu = () =>{
    const data = useSelector(state=> state.ApplePage);
    const dispatch = useDispatch();
    function openSingBox(){
        dispatch({type:'SHOW_INPUT_BOX',status:true});
    }

    function exit(){
        dispatch({type:'SHOW_MENU_BLOCK',status:false});
        dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:false});
        dispatch({type:'CHANGE_ARRAY_OF_USERS',array:[]});
        localStorage.removeItem('token');
    }
    function openAdminPage(){
        dispatch({type:'STATUS_OF_ADMIN_PAGE',status:true});
    }
    return(
        <div className={MenuStyle.main_Container}>
            <div className={MenuStyle.main}>
                <div className={MenuStyle.logo}>
                    <img src={'http://134976.lp.tobiz.net/img/400x0/e82506fcf71d9af9f785610ca969d08e.png'}/>
                </div>
                <div className={MenuStyle.menu_logo}>
                    <img src="https://img.icons8.com/ios-filled/64/000000/menu--v1.png"/>
                </div>
                <div className={MenuStyle.add_information_container}>
                    <div className={MenuStyle.add_information}>
                        <p>Main Page</p>
                        <p>·</p>
                        <p>Goods</p>
                        <p>·</p>
                        <p>Reviews</p>
                        <p>·</p>
                        <p>Payment and delivery</p>
                        <p>·</p>
                        <p>Contacts</p>
                    </div>
                    <div className={MenuStyle.number_of_phone_container}>
                       <div className={MenuStyle.number_of_phone}>
                           <img src="https://img.icons8.com/android/24/000000/phone.png"/>
                           <p>+38 099 999 9999</p>
                           <button>manager</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;
