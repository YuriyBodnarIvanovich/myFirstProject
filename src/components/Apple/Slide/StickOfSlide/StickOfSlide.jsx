import React from "react";
import SlideStyle from "../Slide.module.css";

const SlickOfSlide = (props) =>{

    function activeStick(){
        return(
            <div className={SlideStyle.stickActive} value={props.index}> </div>
        )
    }
    function justStick(){
        return(
            <div className={SlideStyle.stick} value={props.index}> </div>
        )
    }

    if(props.index === props.data.indexOfSlide){
        return activeStick();
    }else{
        return justStick()
    }
}
export default SlickOfSlide;