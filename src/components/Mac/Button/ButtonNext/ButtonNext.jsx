import React from "react";
import MacStyle from "../../Mac.module.css";

const ButtonNext = (props) =>{
    function next() {
        props.dispatch({type:'CHANGE_MIN',min:props.data.min + 3});
        props.dispatch({type:'CHANGE_MAX',max:props.data.max + 3});
        if(props.data.max >= props.data.imgData.length  -1){
            props.dispatch({type:'CHANGE_MIN',min: 0});
            props.dispatch({type:'CHANGE_MAX',max: 3});
        }
    }
    return(<button  className={MacStyle.next} onClick={next} id={"next"}>next</button>)
}
export default ButtonNext;