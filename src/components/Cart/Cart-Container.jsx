import React from "react";
import Cart from "./Cart";
import {connect} from "react-redux";
import {changeIndex} from "../../Redux/Cart-reducer";
import {changeKeyOfItems} from "../../Redux/Iphone-reducer";


const mapStateToProps = (state) =>{
    return{
        arrayOfProducts: state.CartPage.Product,
    }
}
const mapDispatchToProps = (dispatch) =>{return{
    changeKeyOfItems: (key) =>{dispatch(changeKeyOfItems(key))}
}}

const CartContainer = connect(mapStateToProps,mapDispatchToProps)(Cart);
export default CartContainer;