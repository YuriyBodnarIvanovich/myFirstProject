import React, {useState} from "react";
import Style from './FillName.module.css';
import Price from "../Price/Price";
import {useDispatch, useSelector} from "react-redux";

const FillName = () =>{

    const [next,showNext] = useState(false);
    const [name,setName] = useState('');
    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();


    function saveName(){
        const productName = JSON.parse(JSON.stringify(data.newElement));
        productName[0].name = name;
        dispatch({type:"INPUT_DATA_TO_ELEMENT",newData:productName});
        showNext(true)
    }

    if(next){
        return (
            <Price/>
        )
    }else {
        return(
            <div className={Style.name_container}>
                <input placeholder={"Fill name of Product"} value={name}
                       onChange={(event)=>{setName(event.target.value)}}/>
                <button onClick={()=>{saveName()}}>Next</button>
            </div>

        )
    }

}

export default FillName;
