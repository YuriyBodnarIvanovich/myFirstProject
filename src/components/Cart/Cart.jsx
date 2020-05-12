import React from "react";
import CartStyle from './Cart.module.css';
import Table from "./Table/Table";
import {useDispatch, useSelector} from "react-redux";

const Cart = () =>{
    const dataCart = useSelector(state =>state.CartPage);
    const dispatch = useDispatch();

    let catalog = dataCart.Product.map((p,index)=><Table name={p.name} price={p.price} index={index} color={p.mainColor}/>)
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