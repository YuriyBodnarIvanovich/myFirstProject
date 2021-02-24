import React, {useState} from "react";
import Style from './MunuUser.module.css';
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card/Card";
import Admin from './Admin/Admin';

const MenuUser = () =>{
    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();

    const [showCard,setStatusOfCard] = useState(false);
    const [showAdmin,setStatusOfAdmin] = useState(false);

    function exit(){
        dispatch({type:"CHANGE_STATUS_OF_USER",userStatus:false});
        localStorage.removeItem('token');
    }

    return(
        <div className={Style.container}>
            <p className={Style.items}>Info</p>
            {data.roleOfAdmin ? <p className={Style.items} onClick={()=>{setStatusOfAdmin(true)}}>Admin</p> : null}
            {showAdmin ? <Admin className={Style.items} setStatusOfAdmin={setStatusOfAdmin}/> : null}
            <p className={Style.items} onClick={()=>{setStatusOfCard(true)}}>Card</p>
            {showCard ? <Card setStatusOfCard={setStatusOfCard} /> : null}
            <p className={Style.items} onClick={()=>{exit()}}>Exit</p>
        </div>
    )
}

export default MenuUser;
