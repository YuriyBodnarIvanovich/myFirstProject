import React from "react";
import IphoneItems from "../IphoneItems/iPhoneItems";
import IphoneStyle from "../Iphone.module.css";

const ButtonColor = (props) =>{
    let iPhones = JSON.parse(JSON.stringify(props.data.array));

    function changeColor(colorButton) {
        if(colorButton === props.data.array[props.data.index].photo[0].id){
            iPhones[props.data.index].stateColorIphone7=props.data.array[props.data.index].photo[0].imgUrlOne;
            // props.changeMainColor(props.data.array[props.data.index].firstColor);
            iPhones[props.data.index].mainColor = props.data.array[props.data.index].firstColor;
            props.changeMainArray(iPhones);
        }
        else if(colorButton === props.data.array[props.data.index].photo[1].id){
            iPhones[props.data.index].stateColorIphone7=props.data.array[props.data.index].photo[1].imgUrlOne;
            // props.changeMainColor(props.data.array[props.data.index].secondColor);
            iPhones[props.data.index].mainColor = props.data.array[props.data.index].secondColor;
            props.changeMainArray(iPhones);
        }else {
            iPhones[props.data.index].stateColorIphone7=props.data.array[props.data.index].photo[2].imgUrlOne;
            // props.changeMainColor(props.data.array[props.data.index].thirdColor);
            iPhones[props.data.index].mainColor = props.data.array[props.data.index].thirdColor;
            props.changeMainArray(iPhones);
        }
        props.changeMainArray(iPhones);
    }
    return(
        <div>
            <button className={IphoneStyle.colorButtonColder} style={{backgroundColor: props.data.array[props.data.index].firstColor}} id='Golden'
                    onClick={(e)=>{changeColor(e.target.getAttribute('id'))}}>
            </button>
            <button style={{backgroundColor: props.data.array[props.data.index].secondColor}} className={IphoneStyle.colorButtonBlack}
                    id='Black'
                    onClick={(e)=>{changeColor(e.target.getAttribute('id'))}}>
            </button>
            <button className={IphoneStyle.colorButtonRose} id='Rose'
                    style={{backgroundColor: props.data.array[props.data.index].thirdColor}}
                    onClick={(e)=>{changeColor(e.target.getAttribute('id'))}}>
            </button>
        </div>


    )
}
export default ButtonColor;
