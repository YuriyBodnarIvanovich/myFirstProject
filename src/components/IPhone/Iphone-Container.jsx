import React from 'react';
import Iphone from "./Iphone";
import {connect} from "react-redux";
import {changeColor} from "../../Redux/Iphone-reducer";

const mapStateToProps= (state) =>{
    return{
        iphone7: state.IphonePage.iphone7,
        iphone7Color: state.IphonePage.iphone7Color,
        stateColorIphone7: state.IphonePage.stateColorIphone7
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeColorOfMain: (color) =>{dispatch(changeColor(color))},
    }
}

const IphoneContainer = connect(mapStateToProps,mapDispatchToProps)(Iphone);

export default IphoneContainer;