import React, {useState} from "react";
import Style from './ChooseType.module.css';
import FillName from "../FillName/FillName";

const ChooseType = (props) =>{

    const [next,setStatusNext] = useState(false);


    function setType(type){
        const productType  = JSON.parse(JSON.stringify(props.data.newElement));
        productType[0].character.KindOfProduct = type;
        props.dispatch({type:"INPUT_DATA_TO_ELEMENT",newData:productType});
        setStatusNext(true);
    }

    if(next){
        return (
            <FillName/>
        )
    }
    else {
        return(
            <div className={Style.choose_container}>
                <button onClick={()=>{setType('MAC')}}>Mac</button>
                <button onClick={()=>{setType('IPHONE')}}>Iphone</button>
                <button onClick={()=>{setType('WATCH')}}>Watch Apple</button>
            </div>
        )
    }
}

export default ChooseType;
