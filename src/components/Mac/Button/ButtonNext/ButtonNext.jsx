import React from "react";
import MacStyle from "../../Mac.module.css";

const ButtonNext = (props) =>{
    function next() {
        let catalog = [];
        props.method.upDateStatusBackButton(true);

        let minChange = props.data.min;
        props.method.upDateMin(minChange + 3);
        let maxChange = props.data.max;
        props.method.upDateMax(maxChange + 3);

        let min = props.data.min;
        let max = props.data.max;
        let y =0;
        for(let i = min + 3; i<max + 3; i++){
            catalog[y] = props.data.date[i];
            y++;
        }
        props.method.upDate(catalog);

         if(props.data.newArray[2] === props.data.date[5]){
             props.method.upDateStatusNextButton(false);
        }

    }

    function buttonShow() {
        return <button  className={MacStyle.next} onClick={next} id={"next"}>next</button>;
    }
    function buttonHide() {
        return <div> </div>;
    }
    
    const status = props.data.statusNext;
    if (status){
        return buttonShow();
    }else {
        return buttonHide();
    }

}
export default ButtonNext;