import React from 'react';
import MacItems from './MacItems/MacItems';
import MacStyle from './Mac.module.css';
import ButtonBack from "./Button/ButtonBack/ButtonBack";
import ButtonNext from "./Button/ButtonNext/ButtonNext";
import Content from "./Content/Content";

const Mac = (props) =>{

    return(
        <div>
            <div className={MacStyle.intro}>
                <div className={MacStyle.video}>
                    <video className={MacStyle.video_media} src={"https://ak0.picdn.net/shutterstock/videos/1030780100/preview/stock-footage-a-laptop-keyboard-that-glows-in-the-dark-business-technology-image-colorful-light-illumination.webm"} autoPlay muted loop> </video>
                </div>

                <Content data={props.data} method={props.method}/>
            </div>
        </div>
    );
}

export default Mac;
