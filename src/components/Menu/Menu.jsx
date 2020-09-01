import React from "react";
import MenuStyle from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import UserField from "./UserField/UserField";


const Menu = () =>{
    const data = useSelector(state=> state.ApplePage);
    const dispatch = useDispatch();
    function openSingBox(){
        dispatch({type:'SHOW_INPUT_BOX',status:true});
    }
    return(
        <div className={MenuStyle.main}>
            <div className={MenuStyle.menu}>
                <div className={MenuStyle.logo}>
                    <div>
                        <NavLink to='/Apple' activeClassName={MenuStyle.active}>
                            <img src={'https://image.flaticon.com/icons/svg/37/37150.svg'} alt={'apple'}/>
                        </NavLink>

                    </div>
                </div>
                <div className={MenuStyle.nameCompany}>
                    <p>Your apple</p>
                </div>
                <div className={MenuStyle.items}>
                    <div>
                        <img src={'https://image.flaticon.com/icons/svg/149/149309.svg'} alt={''}/>
                    </div>
                    <div>
                        <img src={'https://image.flaticon.com/icons/svg/848/848043.svg'} alt={''}
                        onClick={openSingBox}/>
                    </div>
                    <div>
                        <img src={'https://image.flaticon.com/icons/svg/833/833314.svg'} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;