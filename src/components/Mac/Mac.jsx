import React, {useEffect} from 'react';
import MacStyle from './Mac.module.css';
import Content from "./Content/Content";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";

const Mac = () =>{

    useEffect(() => {
        axios.get('http://localhost:3001/mac').then((response) => {
            let resData = response.data;
            console.log(resData);
            dispatch({type:'PUT_ARRAY',newArray:resData});
        });
    }, [])
    const mainData = useSelector(state=>state.macPage);
    const dispatch = useDispatch();

    const dataApple = useSelector(state =>state.ApplePage);
    return(
        <div>
            <div className={MacStyle.intro}>
                <div className={MacStyle.video}>
                    <video className={MacStyle.video_media} src={"https://ak0.picdn.net/shutterstock/videos/1030780100/preview/stock-footage-a-laptop-keyboard-that-glows-in-the-dark-business-technology-image-colorful-light-illumination.webm"} autoPlay muted loop> </video>
                </div>
                <Content data={mainData} dispatch={dispatch} dataApple={dataApple}/>
            </div>
        </div>
    );
}
export default Mac;
