import React from 'react';
import IphoneStyle from './Iphone.module.css';
import AppleStyle from "../Apple/Apple.module.css";
import IphoneItems from './IphoneItems/iPhoneItems';
import ButtonParameter from "./Button/ButtonParameter";
import ButtonColor from "./Button/ButtonChangeColor";
import {useDispatch, useSelector} from "react-redux";
import ContentPage from "./ContentPage/ContentPage";
const src_video = 'https://ak.picdn.net/shutterstock/videos/1042417903/preview/stock-footage-minsk-belarus-dec-close-up-woman-s-hands-keeping-and-unpacking-new-apple-iphone-pro.webm';

const Iphone = ()=>{
    const data = useSelector(state=>state.IphonePage);
    const dataCart = useSelector(state=>state.CartPage);
    const dispatch = useDispatch();

    const iPhoneItems = data.iPhones.filter((_,index)=>
            data.min <= index && index < data.max).map((element)=><IphoneItems
            name={element.name}
            stateColorIphone7={element.stateColorIphone7}
            price={element.price} index={data.iPhones.indexOf(element)} dispatch={dispatch} key={element.key}/>)
    function last() {
        if((data.iPhones.length - 2)% 3 ===0 && data.min === 0){
            console.log('((data.iPhones.length - 2)% 3 ===0)');
            dispatch({type:'CHANGE_MIN_IPHONES',value:data.iPhones.length -2 });
            dispatch({type:'CHANGE_MAX_IPHONES',value:data.iPhones.length +1});
        }
        else if((data.iPhones.length - 1)% 3 ===0 && data.min === 0){
            console.log('((data.iPhones.length - 1)% 3 ===0)');
            dispatch({type:'CHANGE_MIN_IPHONES',value:data.iPhones.length -1 });
            dispatch({type:'CHANGE_MAX_IPHONES',value:data.iPhones.length +2});
        }
        else {
            dispatch({type:'CHANGE_MIN_IPHONES',value:data.min - 3});
            dispatch({type:'CHANGE_MAX_IPHONES',value:data.max - 3});
            if(data.min === 0){
                dispatch({type:'CHANGE_MIN_IPHONES',value:data.iPhones.length -3});
                dispatch({type:'CHANGE_MAX_IPHONES',value:data.iPhones.length});
            }
        }
    }
    function next() {
        if(data.max >= data.iPhones.length  -1 && data.iPhones.length % 3 === 0){
            dispatch({type:'CHANGE_MIN_IPHONES',value:0});
            dispatch({type:'CHANGE_MAX_IPHONES',value: 3});
        }
        if( data.max === data.iPhones.length  + 3  || data.max === data.iPhones.length  +4  && data.iPhones.length % 3 !== 0){
            console.log('true');
            dispatch({type:'CHANGE_MIN_IPHONES',value:0});
            dispatch({type:'CHANGE_MAX_IPHONES',value: 3});
        }

        if((data.iPhones.length - 2)% 3 ===0 && data.min === data.iPhones.length - 2){
            console.log('((data.iPhones.length - 2)% 3 ===0)');
            dispatch({type:'CHANGE_MIN_IPHONES',value: 0 });
            dispatch({type:'CHANGE_MAX_IPHONES',value: 3});
        }
        else if((data.iPhones.length - 1)% 3 ===0 && data.min === data.iPhones.length - 1){
            console.log('((data.iPhones.length - 1)% 3 ===0)');
            dispatch({type:'CHANGE_MIN_IPHONES',value:0 });
            dispatch({type:'CHANGE_MAX_IPHONES',value:3});
        }
        else {
            dispatch({type:'CHANGE_MIN_IPHONES',value:data.min + 3});
            dispatch({type:'CHANGE_MAX_IPHONES',value:data.max + 3});
            if(data.min === data.iPhones.length -3){
                dispatch({type:'CHANGE_MIN_IPHONES',value:0});
                dispatch({type:'CHANGE_MAX_IPHONES',value:3});
            }
        }
    }
    return(
        <div className={AppleStyle.intro}>
            <div className={AppleStyle.video}>
                <video className={AppleStyle.video_media} src={src_video} autoPlay muted loop> </video>
            </div>
            <div className={AppleStyle.intro_content}>
                <div className={AppleStyle.container}>
                    <ContentPage  data={data} dispatch={dispatch} dataCart={dataCart}/>
                    <div className={IphoneStyle.containerForItems}>
                        <button className={IphoneStyle.Up} onClick={last}>Up</button>
                        <div className={IphoneStyle.forItems}>
                            {iPhoneItems}
                        </div>
                        <button className={IphoneStyle.Dawn} onClick={next}>dawn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Iphone;
