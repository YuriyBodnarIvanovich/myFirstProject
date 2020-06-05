import React from "react";
import ButtonOptionStyle from './ButtonOptionItems.module.css';
const ButtonOptionItem = (props) =>{
    function addPrice() {
        let array = [];
        array=[...props.data.iPhones];
        array[props.data.indexOfMainArray][props.option] = props.price;

        array[props.data.indexOfMainArray].price = Number(array[props.data.indexOfMainArray].startPrice) +
            Number(array[props.data.indexOfMainArray].startPriceRAM)
        + Number(array[props.data.indexOfMainArray].startPriceInternalMemory)
        + Number(array[props.data.indexOfMainArray].startPriceFrontCamera)
        + Number(array[props.data.indexOfMainArray].startPriceBasicCamera);
        
        props.dispatch({type:'CHANGE_ARRAY',array:array});
    }
    function nothing() {
        return(
            <div> </div>
        )
    }
    function button() {
        return(
            <button onClick={addPrice} className={ButtonOptionStyle.button}>{props.name}</button>
        )
    }

    if(props.name !==''){
        return button();
    }else{
        return nothing();
    }

}
export default ButtonOptionItem;