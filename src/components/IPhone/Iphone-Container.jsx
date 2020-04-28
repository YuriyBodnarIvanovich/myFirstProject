import React from 'react';
import Iphone from "./Iphone";
import {connect} from "react-redux";
import {changeColor} from "../../Redux/Iphone-reducer";

const mapStateToProps= (state) =>{
    return{
        iphone7Color: state.IphonePage.iphone7Color,
        stateColorIphone7: state.IphonePage.stateColorIphone7,

        name: state.IphonePage.iphone7[0].name,
        price: state.IphonePage.iphone7[0].price,
        screen: state.IphonePage.iphone7[0].character.screen,
        processor: state.IphonePage.iphone7[0].character.processor,
        frontCamera: state.IphonePage.iphone7[0].character.camera.frontCamera,
        basicCamera: state.IphonePage.iphone7[0].character.camera.basicCamera,
        internalMemory: state.IphonePage.iphone7[0].character.internalMemory,
        operatingSystem: state.IphonePage.iphone7[0].character.operatingSystem,
        remainder: state.IphonePage.iphone7[0].character.remainder,
        RAM: state.IphonePage.iphone7[0].character.RAM,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeColorOfMain: (color) =>{dispatch(changeColor(color))},
    }
}

const IphoneContainer = connect(mapStateToProps,mapDispatchToProps)(Iphone);

export default IphoneContainer;