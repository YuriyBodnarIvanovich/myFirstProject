import React from "react";
import IphoneStyle from "../Iphone.module.css";

const ButtonColor = (props) =>{
    function changeColor() {
        const catalog = JSON.parse(JSON.stringify(props.data.iPhones));
        if(props.way === 'iPhone'){
            catalog[props.data.indexOfMainArray].stateColorIphone7 = catalog[props.data.indexOfMainArray].photo[props.id].imgSrc[0].src;
            catalog[props.data.indexOfMainArray].mainColor = props.color;///!!!!!!! this error for admin
        }else {
            catalog[props.data.adminIndex].stateColorIphone7 = catalog[props.data.adminIndex].photo[props.id].imgSrc[0].src;
            catalog[props.data.adminIndex].mainColor = props.color;///!!!!!!! this error for admin
        }


        props.dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex:1});
        props.dispatch({type:'CHANGE_INDEX_OF_COLOR',newIndex:props.id});
        props.dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    return(
        <div>
            <button className={IphoneStyle.colorButtonColder} style={{backgroundColor: props.color}}
                    onClick={(e)=>{changeColor(props.id)}}>
            </button>
        </div>
    )
}
export default ButtonColor;
