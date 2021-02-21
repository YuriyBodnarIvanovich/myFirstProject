import React, {useState} from "react";
import Style from './Price.module.css';
import Characters from "../Characters/Characters";

const Price = () =>{

    const [next,showNext] = useState(false);

    if(next){
       return (
           <Characters/>
       )
    }else {
        return(
            <div className={Style.name_container}>
                <input placeholder={"Price of Product"}/>
                <button onClick={()=>{showNext(true)}}>Next</button>
            </div>
        )
    }


}

export default Price;
