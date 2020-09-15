import React, {useEffect} from 'react';
import IphoneStyle from './Iphone.module.css';
import IphoneItems from './IphoneItems/iPhoneItems';
import {useDispatch, useSelector} from "react-redux";
import ContentPage from "./ContentPage/ContentPage";
import axios from "axios";

const Iphone = ()=>{
    useEffect(() => {
        axios.get('http://localhost:3001/iPhone').then((response) => {
            let resData = response.data;
            console.log(resData);
            dispatch({type: 'CHANGE_ARRAY', array: resData});
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);
    const dispatch = useDispatch();
    const data = useSelector(state=>state.IphonePage);
    const dataApple = useSelector(state=>state.ApplePage);
    // const dataCart = useSelector(state=>state.CartPage);

    const iPhoneItems = data.iPhones.map((element)=><IphoneItems
            name={element.name}
            stateColorIphone7={element.stateColorIphone7}
            price={element.price} index={data.iPhones.indexOf(element)} dispatch={dispatch} key={element.key} data={data}/>)


    return(
        <div className={IphoneStyle.content}>
            {
                data.openIphoneStatus ? <ContentPage data={data} dispatch={dispatch}/>
                    : <div className={IphoneStyle.contentItems}>
                        {iPhoneItems}
                    </div>
            }
        </div>
    )
}
export default Iphone;
