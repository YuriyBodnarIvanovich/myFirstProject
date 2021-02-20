import React from "react";
import Style from './Card.module.css';
import {useDispatch, useSelector} from "react-redux";


const Card = (props) =>{

    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();


    const catalog = data.Users[0].CartList.map((item,index)=>{
        return(
            <tr>
                <td style={{width:"40px"}}>{index + 1}</td>
                <td className={Style.name}>{item.name}</td>
                <td className={Style.price}>{item.price}</td>
                <td className={Style.color}>
                    <div style={{backgroundColor:`${item.color}`, width:'14px',height:'14px',
                        borderRadius:"5px"}}/>
                </td>
            </tr>
        )
    })
    return(
        <div className={Style.container}>
            <div className={Style.container_of_card}>
                <div className={Style.top}>
                    <div className={Style.exit}>
                        <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfCard(false)}}/>
                    </div>
                </div>
                <div className={Style.container_of_table}>
                    <div className={Style.tbl_header}>
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                            <tr>
                                <th style={{width:"40px"}}>№</th>
                                <th className={Style.name}>Name</th>
                                <th className={Style.price}>Price</th>
                                <th className={Style.color}>Color</th>
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
