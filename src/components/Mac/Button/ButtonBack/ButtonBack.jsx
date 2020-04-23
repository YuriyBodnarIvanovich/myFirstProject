import React from "react";
import BackButtonStyle from "./BackButton.module.css";



const ButtonBack = (props) =>{
    function back() {
        let catalog = [];

        let minChange = props.data.min;
        props.method.upDateMin(minChange - 3);
        let maxChange = props.data.max;
        props.method.upDateMax(maxChange - 3);

        let min = props.data.min;
        let max = props.data.max;
        let y =0;
        for(let i = min - 3; i<max - 3; i++){
            catalog[y] = props.data.date[i];
            y++;
        }
        props.method.upDate(catalog);
         if(props.data.newArray[2] === props.data.date[8]){
             props.method.upDateStatusNextButton(true);
         }

         if(props.data.newArray[0] === props.data.date[3]){
             props.method.upDateStatusBackButton(false);
         }

    }
    function showButton() {
        return(<button  className={BackButtonStyle.back}  onClick={back} id={"back"}>back</button>)
    }
    function hideButton() {
        return(<div> </div>)
    }

    const status = props.data.statusBack;
    if(status){
        return showButton();
    }else {
        return hideButton();
    }
}

export default ButtonBack;