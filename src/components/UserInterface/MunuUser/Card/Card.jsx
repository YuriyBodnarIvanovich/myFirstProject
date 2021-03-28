import React, {useEffect, useState} from "react";
import Style from './Card.module.css';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Confirm from "./Confirm/Confirm";


const Card = (props) =>{

    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();


    const ItemOfTable = (propsItem) =>{
        const [showConfirm,setStatusOfConfirm] = useState(false);
        function deleteItem(){
            console.log(propsItem.idCard);
            axios.post('http://localhost:3001/deleteFromCard', {
                idCard: propsItem.idCard
            }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
                .then(function (response) {
                    console.log(response);
                    let upDateUser = JSON.parse(JSON.stringify(data.Users));
                    upDateUser[0].CartList =  data.Users[0].CartList.filter((itemCard)=>itemCard.idCard !== propsItem.idCard).map(itemCard=>{
                        return itemCard;
                    });
                    dispatch({type:"CHANGE_ARRAY_OF_USERS",array:upDateUser});
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

        function confirm(){
            setStatusOfConfirm(true);
        }

        return(
            <tr>

                <td style={{width:"40px"}}>{propsItem.index + 1}</td>
                <td className={Style.name}>{propsItem.name}</td>
                <td className={Style.price}>{propsItem.price}</td>
                <td className={Style.color}>
                    <div style={{backgroundColor:`${propsItem.color}`, width:'14px',height:'14px',
                        borderRadius:"5px"}}/>
                </td>
                <td><img className={Style.delete_button} style={{marginLeft:"13px"}}
                         src="https://img.icons8.com/officel/40/000000/delete-sign.png"
                         onClick={deleteItem}/></td>
                <td><img className={Style.delete_button} onClick={()=>{confirm()}}
                         src="https://img.icons8.com/color/48/000000/checked-radio-button--v1.png"/></td>
                {showConfirm ? <Confirm setStatusOfConfirm={setStatusOfConfirm}
                                        idCard={propsItem.idCard} data={data} dispatch={dispatch}/> : null}

            </tr>
        )
    }

    const catalog = data.Users[0].CartList.map((item,index)=>{
        return(
            <ItemOfTable idCard={item.idCard} index={index} name={item.name} price={item.price} color={item.color}/>
        )
    })
    return(
        <div className={`${data.darkTheme ? Style.container_dark : Style.container}`}>
            <div className={Style.container_of_card}>

                <div className={Style.top}>
                    <div className={Style.exit}>
                        <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfCard(false)}}/>
                    </div>
                </div>
                <div className={`${data.darkTheme ? Style.container_of_table_dark : Style.container_of_table}`}>
                    <div className={Style.tbl_header}>
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                            <tr>
                                <th style={{width:"40px"}}>№</th>
                                <th className={Style.name}>Name</th>
                                <th className={Style.price}>Price</th>
                                <th className={Style.color}>Color</th>
                                <th>Delete</th>
                                <th>Buy</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div className={Style.tbl_content}>
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                            {catalog}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
