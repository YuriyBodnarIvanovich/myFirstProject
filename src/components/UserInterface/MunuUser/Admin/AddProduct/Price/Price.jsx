import React, {useState} from "react";
import Style from './Price.module.css';
import Characters from "../Characters/Characters";
import {useDispatch, useSelector} from "react-redux";

const Price = () =>{

    const [next,showNext] = useState(false);

    const [price,setPrice] = useState('');
    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();


    function savePrice(){
        const productPrice = JSON.parse(JSON.stringify(data.newElement));
        productPrice[0].price = parseInt(price);
        dispatch({type:"INPUT_DATA_TO_ELEMENT",newData:productPrice});
        showNext(true)
    }

    if(next){
       return (
           <Characters/>
       )
    }else {
        return(
            <div className={Style.name_container}>
                <input placeholder={"Price of Product"} value={price}
                       onChange={event => {setPrice(event.target.value)}}/>
                <button onClick={()=>{savePrice()}}>Next</button>
            </div>
        )
    }


}

export default Price;
