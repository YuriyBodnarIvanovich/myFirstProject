import React from "react";
import ButtonOptionStyle from './ButtonOptionItems.module.css';
const ButtonOptionItem = (props) =>{
    function addPrice() {
        let array = [];
        array=[...props.data.iPhones];
        if(props.option === 'RAM'){
            array[props.data.indexOfMainArray].startPriceRAM = props.price;
            array[props.data.indexOfMainArray].price =
                array[props.data.indexOfMainArray].startPrice +
                array[props.data.indexOfMainArray].startPriceRAM
                + array[props.data.indexOfMainArray].startPriceInternalMemory
                + array[props.data.indexOfMainArray].startPriceFrontCamera
                + array[props.data.indexOfMainArray].startPriceBasicCamera;
        }
        else if(props.option === 'InternalMemory'){
            array[props.data.indexOfMainArray].startPriceInternalMemory = props.price;
            array[props.data.indexOfMainArray].price =
                array[props.data.indexOfMainArray].startPrice +
                array[props.data.indexOfMainArray].startPriceRAM
                + array[props.data.indexOfMainArray].startPriceInternalMemory
                + array[props.data.indexOfMainArray].startPriceFrontCamera
                + array[props.data.indexOfMainArray].startPriceBasicCamera;
        }
        else if(props.option ==='FrontCamera'){
            array[props.data.indexOfMainArray].startPriceFrontCamera = props.price;
            array[props.data.indexOfMainArray].price =
                array[props.data.indexOfMainArray].startPrice +
                array[props.data.indexOfMainArray].startPriceRAM
                + array[props.data.indexOfMainArray].startPriceInternalMemory
                + array[props.data.indexOfMainArray].startPriceFrontCamera
                + array[props.data.indexOfMainArray].startPriceBasicCamera;
        }
        else {
            array[props.data.indexOfMainArray].startPriceBasicCamera = props.price;
            array[props.data.indexOfMainArray].price =
                array[props.data.indexOfMainArray].startPrice +
                array[props.data.indexOfMainArray].startPriceRAM
                + array[props.data.indexOfMainArray].startPriceInternalMemory
                + array[props.data.indexOfMainArray].startPriceFrontCamera
                + array[props.data.indexOfMainArray].startPriceBasicCamera;
        }
        props.dispatch({type:'CHANGE_ARRAY',array:array});
    }
    return(
        <button onClick={addPrice} className={ButtonOptionStyle.button}>{props.name}</button>
    )
}
export default ButtonOptionItem;