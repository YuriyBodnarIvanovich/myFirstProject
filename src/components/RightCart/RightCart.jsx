import React from "react";
import CartStyle from './RightCart.module.css';
import {useSelector} from "react-redux";
import TableOfCart from "./Table/TableOfCart";
import Table from "../Cart/Table/Table";

const RightCart  = () =>{
    const dataUser = useSelector(state=>state.ApplePage);

    const catalog = dataUser.Users[0].CartList.map((e,index)=>{
        return(
            <TableOfCart index={index}  name={e.name} color={e.color} price={e.price}  />
        )
    })

    return(
        <div className={CartStyle.container}>
            <div className={CartStyle.logo}>
                <h1>
                    Your Cart
                </h1>
            </div>
            <div className={CartStyle.logoOfTableCart}>
                <div><p>№</p></div>
                <div><p>Name of product</p></div>
                <div><p>Color</p></div>
                <div><p>Price</p></div>
            </div>
            <div className={CartStyle.scroll}>
                {catalog}
            </div>

        </div>
    )
}

export default RightCart;