import React from 'react';
import Mac from './Mac';
import {connect} from 'react-redux';
import {
    updateMax,
    updateMin,
    updateNewPageCreator, updateStateOfBackButton,
    updateStateOfNEXTButton, updateStateOfShowContent
} from "../../Redux/Mac-reducer";

const mapStateToProps = (state) =>{
    return{
        data:{
            date: state.macPage.imgData,
            newArray: state.macPage.page,
            statusBack:state.macPage.backShow,
            statusNext:state.macPage.nextShow,
            min: state.macPage.min,
            max: state.macPage.max,
            centerContentShow: state.macPage.centerContentShow
        }
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        method: {
            upDate: (newArray) => {dispatch(updateNewPageCreator(newArray))},

            upDateStatusBackButton: (status) =>{dispatch(updateStateOfBackButton(status))},
            upDateStatusNextButton: (status) =>{dispatch(updateStateOfNEXTButton(status))},

            upDateMin: (min) =>{dispatch(updateMin(min))},
            upDateMax: (max) =>{dispatch(updateMax(max))},

            upDateStatusContent: (status) =>{dispatch(updateStateOfShowContent(status))}
        }
    }
}
const MacContainer = connect(mapStateToProps,mapDispatchToProps)(Mac);

export default MacContainer;


