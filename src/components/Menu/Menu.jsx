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
    return(
        <div className={MenuStyle.main}>
            <div className={MenuStyle.menu}>
                <div className={MenuStyle.logo}>
                    <div>
                        <img onClick={()=>dispatch({type:'Show_Left_Menu',status:true})}
                             src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAOUlEQVRoge3XMQEAIAwDwYB/zyCiQ4beKciPSWC3k+S1R0zc9oApAQAAsJdH1iYAAAD28sjaBABdHy9wAxMK014vAAAAAElFTkSuQmCC'} alt={'apple'}/>
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
                    <div className={MenuStyle.forAccountItemContainer}>
                        {data.userStatus ?
                            <div style={{width:'100%'}}>
                                <div className={MenuStyle.forAccountItem}>
                                    <img src={'https://image.flaticon.com/icons/svg/848/848043.svg'} alt={''}
                                         onClick={()=>dispatch({type:'SHOW_MENU_BLOCK',status: !data.showMenuBlock})}
                                    />
                                </div>
                                {
                                    data.showMenuBlock
                                        ?
                                    <div className={MenuStyle.menuBlock}>
                                        <p onClick={exit}>Exit</p>
                                    </div>
                                    :
                                    <div style={{display:'none'}}> </div>
                                }
                            </div>
                            :
                            <img src={'https://image.flaticon.com/icons/svg/848/848043.svg'} alt={''}
                                                               onClick={openSingBox}/>
                        }
                    </div>
                    <div>
                        {data.userStatus ? <img src={'https://image.flaticon.com/icons/svg/833/833314.svg'} alt={''}
                            onClick={()=>dispatch({type:'SHOW_RIGHT_CART',status:true})}/>
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