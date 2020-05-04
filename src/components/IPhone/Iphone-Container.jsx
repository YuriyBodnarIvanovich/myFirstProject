import React from 'react';
import Iphone from "./Iphone";
import {connect} from "react-redux";
import {
    changeIphoneItemsArray,
    changeMainArray,
    changeMainIndex,
    changeMax,
    changeMin, changeStatusOfButtonDawn, changeStatusOfButtonUp
} from "../../Redux/Iphone-reducer";

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
        },
        colorOfButton:{
            firstColor:state.IphonePage.iPhones.firstColor,
            secondColor:state.IphonePage.iPhones.secondColor,
            thirdColor:state.IphonePage.iPhones.thirdColor,
        },
        min: state.IphonePage.min,
        max: state.IphonePage.max,

        statusUp: state.IphonePage.statusUp,
        statusDawn: state.IphonePage.statusDawn
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeMainArray: (newArray) =>{dispatch(changeMainArray(newArray))},
        changeIphoneItemsArray: (newArray) =>{dispatch(changeIphoneItemsArray(newArray))},
        changeMainIndexOfArray: (newIndex) =>{dispatch(changeMainIndex(newIndex))},

        changeMin: (value) =>{dispatch(changeMin(value))},
        changeMax: (value) =>{dispatch(changeMax(value))},

        changeStatusUp: (status) => {dispatch(changeStatusOfButtonUp(status))},
        changeStatusDawn: (status)=>{dispatch(changeStatusOfButtonDawn(status))}
    }
}
const IphoneContainer = connect(mapStateToProps,mapDispatchToProps)(Iphone);

export default IphoneContainer;
