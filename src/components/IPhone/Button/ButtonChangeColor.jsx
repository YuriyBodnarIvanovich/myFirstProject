import React from "react";
import IphoneStyle from "../Iphone.module.css";

const ButtonColor = (props) =>{
    function changeColor(colorButton) {
        const catalog = JSON.parse(JSON.stringify(props.data.iPhones));
        catalog[props.data.indexOfMainArray].stateColorIphone7 = catalog[props.data.indexOfMainArray].photo[props.id].imgUrlOne;
        catalog[props.data.indexOfMainArray].mainColor = props.color;
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
