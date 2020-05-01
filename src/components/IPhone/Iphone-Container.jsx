import React from 'react';
import Iphone from "./Iphone";
import {connect} from "react-redux";
import {changeIphoneItemsArray, changeMainArray, changeMainIndex} from "../../Redux/Iphone-reducer";

const mapStateToProps= (state) =>{
    return{
        data:{
            array: state.IphonePage.iPhones,
            arrayItems: state.IphonePage.iPhonesItems,
            index: state.IphonePage.indexOfMainArray
        },
        textOfButton:{
            buttonTextOfCameraOptionsNormal: state.IphonePage.iPhones.buttonTextOfCameraOptionsNormal,
            buttonTextOfCameraOptionsPrime: state.IphonePage.iPhones.buttonTextOfCameraOptionsPrime,
            buttonTextOfMemoryNormal:state.IphonePage.iPhones.buttonTextOfMemoryNormal,
            buttonTextOfMemoryPrime: state.IphonePage.iPhones.buttonTextOfMemoryPrime,
            buttonTextOfRAMNormal: state.IphonePage.iPhones.buttonTextOfRAMNormal,
            buttonTextOfRAMPrime: state.IphonePage.iPhones.buttonTextOfRAMPrime
        }
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeMainArray: (newArray) =>{dispatch(changeMainArray(newArray))},
        changeIphoneItemsArray: (newArray) =>{dispatch(changeIphoneItemsArray(newArray))},
        changeMainIndexOfArray: (newIndex) =>{dispatch(changeMainIndex(newIndex))}
    }
}
const IphoneContainer = connect(mapStateToProps,mapDispatchToProps)(Iphone);

export default IphoneContainer;
