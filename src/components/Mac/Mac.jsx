import React from 'react';
import MacStyle from './Mac.module.css';
import Content from "./Content/Content";
import {useDispatch, useSelector} from "react-redux";

const Mac = () =>{
    const mainData = useSelector(state=>state.macPage);
    const dispatch = useDispatch();

    return(
        <div>
            <div className={MacStyle.intro}>
                <div className={MacStyle.video}>
                    <video className={MacStyle.video_media} src={"https://ak0.picdn.net/shutterstock/videos/1030780100/preview/stock-footage-a-laptop-keyboard-that-glows-in-the-dark-business-technology-image-colorful-light-illumination.webm"} autoPlay muted loop> </video>
                </div>

                <Content data={mainData} method={dispatch}/>
            </div>
        </div>
    );
}
export default Mac;
