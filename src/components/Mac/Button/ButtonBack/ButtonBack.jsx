import React from "react";
import BackButtonStyle from "./BackButton.module.css";

const ButtonBack = (props) =>{
    function back() {
        props.method({type:'CHANGE_MIN',min:props.data.min - 3});
        props.method({type:'CHANGE_MAX',max:props.data.max - 3});
        if(props.data.min <= 0){
            props.method({type:'CHANGE_MIN',min:props.data.imgData.length - 3});
            props.method({type:'CHANGE_MAX',max:props.data.imgData.length});
        }
    }
    return(<button  className={BackButtonStyle.back}  onClick={back} id={"back"}>back</button>)
}
export default ButtonBack;