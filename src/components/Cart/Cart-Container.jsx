import React from "react";
import Cart from "./Cart";
import {connect} from "react-redux";
import {changeIndex} from "../../Redux/Cart-reducer";


const mapStateToProps = (state) =>{
    return{
        arrayOfProducts: state.CartPage.Product,
    }
}
const mapDispatchToProps = (dispatch) =>{return{}}

const CartContainer = connect(mapStateToProps,mapDispatchToProps)(Cart);
export default CartContainer;