import React from "react";
import CartStyle from './Cart.module.css';
import Table from "./Table/Table";
import {useDispatch, useSelector} from "react-redux";

const Cart = () =>{
    const dataApple = useSelector(state => state.ApplePage);
    const dispatch = useDispatch();

    let catalog = dataApple.Users[dataApple.indexOfUsers].CartList.map((p,index)=><Table name={p.name} price={p.price} index={index} color={p.color}/>)
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