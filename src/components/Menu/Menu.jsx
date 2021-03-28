import React from "react";
import MenuStyle from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import UserInterface from "../UserInterface/UserInterface";


const Menu = (props) =>{
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
                    {data.darkTheme ? <h3 style={{color:"white"}}>Apple device</h3>
                        :   <img src={'http://134976.lp.tobiz.net/img/400x0/e82506fcf71d9af9f785610ca969d08e.png'}/>
                    }

                </div>
                <div className={MenuStyle.menu_logo}>
                    {
                        data.darkTheme ? <p style={{color:"white"}}>Menu</p> :
                            <img src="https://img.icons8.com/ios-filled/64/000000/menu--v1.png"/>
                    }
                </div>
                <div className={MenuStyle.add_information_container}>
                    <div className={`${data.darkTheme ? MenuStyle.add_information_dark : MenuStyle.add_information}`}>
                        <NavLink to='/'>
                            <p>Main Page</p>
                        </NavLink>
                        <p>·</p>
                        <NavLink to='/CatalogOfGoods'>
                            <p>Goods</p>
                        </NavLink>
                        <p>·</p>
                        <p>Reviews</p>
                        <p>·</p>
                        <p>Payment and delivery</p>
                        <p>·</p>
                        <NavLink to='/Contact'>
                            <p>Contacts</p>
                        </NavLink>
                    </div>
                    <div className={MenuStyle.number_of_phone_container}>
                       <div className={`${data.darkTheme ? MenuStyle.number_of_phone_dark : MenuStyle.number_of_phone}`}>
                           {
                               data.darkTheme ?
                                   <img  className={MenuStyle.numberOfPhoneIMG} src="https://www.flaticon.com/svg/vstatic/svg/2948/2948005.svg?token=exp=1616859060~hmac=1db4a27b6966a4b71bf8203d2277b73f"/>
                                   :
                                   <img  className={MenuStyle.numberOfPhoneIMG} src="https://img.icons8.com/android/24/000000/phone.png"/>
                           }


                           <p>+38 099 999 9999</p>
                           {/*<button onClick={()=>{dispatch({type:"SET_DARK_THEME",status: ! data.darkTheme})}}>dark Theme</button>*/}
                           {data.userStatus ? <UserInterface/> :  <button onClick={()=>{props.setStatusOfInputBox(true)}}>Sing in</button> }
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;
