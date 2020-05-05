import React from "react";
import CartStyle from './Cart.module.css';
import Table from "./Table/Table";

const Cart = (props) =>{
    let catalog = props.arrayOfProducts.map((p,index)=><Table name={p.name} price={p.price} index={index} color={p.mainColor}/>)
    return(
        <div className={CartStyle.main}>
            <table style={{overflowX: 'auto'}}>
                <tr>
                    <th>№</th>
                    <th>Name of product</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>
                {catalog}
            </table>

        </div>
    )
}
export default Cart;