import React, {useState} from "react";
import Style from './FillName.module.css';
import Price from "../Price/Price";

const FillName = () =>{

    const [next,showNext] = useState(false);


    if(next){
        return (
            <Price/>
        )
    }else {
        return(
            <div className={Style.name_container}>
                <input placeholder={"Fill name of Product"}/>
                <button onClick={()=>{showNext(true)}}>Next</button>
            </div>

        )
    }

}

export default FillName;
