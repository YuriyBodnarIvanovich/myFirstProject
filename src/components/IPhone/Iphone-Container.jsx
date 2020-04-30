import React from 'react';
import Iphone from "./Iphone";
import {connect} from "react-redux";
import {
    changeBasicCamera,
    changeColor,
    changeFrontCamera,
    changeInternalMemory,
    changeNormalButton,
    changePrice,
    changeRAM,
    changeStatusOfMemoryButtonNormal,
    changeStatusOfMemoryButtonPrime,
    changeStatusOfRAM_NormalButton, changeStatusOfRAM_PrimeButton,
    changeStatusPrimeButtonCamera
} from "../../Redux/Iphone-reducer";

const mapStateToProps= (state) =>{
    return{
        iphone7Color: state.IphonePage.iphone7Color,
        stateColorIphone7: state.IphonePage.stateColorIphone7,

        name: state.IphonePage.iphone7.name,
        price: state.IphonePage.iphone7.price,
        screen: state.IphonePage.iphone7.character.screen,
        processor: state.IphonePage.iphone7.character.processor,
        frontCamera: state.IphonePage.iphone7.character.camera.frontCamera,
        basicCamera: state.IphonePage.iphone7.character.camera.basicCamera,
        internalMemory: state.IphonePage.iphone7.character.internalMemory,
        operatingSystem: state.IphonePage.iphone7.character.operatingSystem,
        remainder: state.IphonePage.iphone7.character.remainder,
        RAM: state.IphonePage.iphone7.character.RAM,
        buttonNormalPrimeStatus: state.IphonePage.buttonNormalPrimeStatus,
        buttonCameraPrimeStatus: state.IphonePage.buttonCameraPrimeStatus,
        buttonMemoryNormalStatus: state.IphonePage.buttonMemoryNormalStatus,
        buttonMemoryPrimeStatus: state.IphonePage.buttonMemoryPrimeStatus,
        buttonRAM_NormalStatus: state.IphonePage.buttonRAM_NormalStatus,
        buttonRAM_PrimeStatus: state.IphonePage.buttonRAM_PrimeStatus
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeColorOfMain: (color) =>{dispatch(changeColor(color))},
        changeFrontCamera: (cameraFront) =>{dispatch(changeFrontCamera(cameraFront))},
        changeBasicCamera: (camera) =>{dispatch(changeBasicCamera(camera))},
        changeInternalMemory: (memory)=>{dispatch(changeInternalMemory(memory))},
        changeRAM:(memory)=>{dispatch(changeRAM(memory))},
        changePrice:(price)=>{dispatch(changePrice(price))},

        changeNormalButton:(status)=>{dispatch(changeNormalButton(status))},
        changeStatusPrimeButtonCamera:(status)=>{dispatch(changeStatusPrimeButtonCamera(status))},

        changeStatusOfMemoryButtonNormal:(status)=>{dispatch(changeStatusOfMemoryButtonNormal(status))},
        changeStatusOfMemoryButtonPrime:(status)=>{dispatch(changeStatusOfMemoryButtonPrime(status))},

        changeStatusOfRAM_NormalButton:(status)=>{dispatch(changeStatusOfRAM_NormalButton(status))},
        changeStatusOfRAM_PrimeButton:(status)=>{dispatch(changeStatusOfRAM_PrimeButton(status))},
    }
}

const IphoneContainer = connect(mapStateToProps,mapDispatchToProps)(Iphone);

export default IphoneContainer;