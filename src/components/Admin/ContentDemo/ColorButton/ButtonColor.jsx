import React from "react";
import ColorStyle from './ButtonColor.module.css';

const ButtonColor = (props) =>{
    const changeColor = () =>{
        props.dispatch({type:'CHANGE_ACTIVE_COLOR',newValue:props.indexOfColor})
    }
    return(
        <div    className={ColorStyle.colorButtonColder}
                style={{backgroundColor: " " + props.color + " "}}
                onClick={changeColor}>

        </div>
    )
}

export default ButtonColor;
