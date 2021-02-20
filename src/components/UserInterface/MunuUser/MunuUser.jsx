import React, {useState} from "react";
import Style from './MunuUser.module.css';
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card/Card";

const MenuUser = () =>{
    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();

    const [showCard,setStatusOfCard] = useState(false);

    function exit(){
        dispatch({type:"CHANGE_STATUS_OF_USER",userStatus:false});
        localStorage.removeItem('token');
    }

    return(
        <div className={Style.container}>
            <p>Info</p>
            {data.roleOfAdmin ? <p>Admin</p> : null}
            <p onClick={()=>{setStatusOfCard(true)}}>Card</p>
            {showCard ? <Card setStatusOfCard={setStatusOfCard} /> : null}
            <p onClick={()=>{exit()}}>Exit</p>
        </div>
    )
}

export default MenuUser;
