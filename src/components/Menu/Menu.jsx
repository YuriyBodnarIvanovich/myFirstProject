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
                        <img src={'https://image.flaticon.com/icons/svg/37/37150.svg'} alt={'apple'}/>
                    </div>
                </div>
                <div className={MenuStyle.nameCompany}>
                    <NavLink to='/Apple'>
                        <p>Your apple</p>
                    </NavLink>
                </div>
                <div className={MenuStyle.items}>
                    <div>
                        <img src={'https://image.flaticon.com/icons/svg/149/149309.svg'} alt={''}/>
                    </div>
                    <div>
                        {data.userStatus ? <img src={'https://image.flaticon.com/icons/svg/848/848043.svg'} alt={''}/>
                            :
                            <img src={'https://image.flaticon.com/icons/svg/848/848043.svg'} alt={''}
                                                               onClick={openSingBox}/>
                        }
                    </div>
                    <div>
                        {data.userStatus ? <img src={'https://image.flaticon.com/icons/svg/833/833314.svg'} alt={''}/>
                            :
                            <img src={'https://image.flaticon.com/icons/svg/833/833314.svg'} alt={''}
                                 onClick={openSingBox}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;