import React from "react";
import CartItemStyle from '../RightCart.module.css';
import TableStyle from "../../Cart/Table/Table.module.css";

const TableOfCart  = (props) =>{
    return(
        <div className={CartItemStyle.containerOfItems}>
            <div><p>{props.index + 1}</p></div>
            <div><p>{props.name}</p></div>
            <p> <div className={TableStyle.color} style={{backgroundColor: props.color}}> </div> </p>
            <div><p>{props.price}</p></div>
        </div>
    )
}

export default TableOfCart;