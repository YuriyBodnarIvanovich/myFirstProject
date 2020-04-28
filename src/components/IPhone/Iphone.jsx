import React from 'react';
import IphoneStyle from './Iphone.module.css';
import AppleStyle from "../Apple/Apple.module.css";

const src_video = 'https://ak.picdn.net/shutterstock/videos/1042417903/preview/stock-footage-minsk-belarus-dec-close-up-woman-s-hands-keeping-and-unpacking-new-apple-iphone-pro.webm';

const Iphone = (props)=>{
    // props.changeColorOfMain(props.iphone7Color[0].imgUrlOne);
    function changeColor(colorButton) {
        let colorAdd;
        if(colorButton === props.iphone7Color[0].id){
            colorAdd=props.iphone7Color[0].imgUrlOne;
        }
        else if(colorButton === props.iphone7Color[1].id){
            colorAdd=props.iphone7Color[1].imgUrlOne;
        }else {
            colorAdd=props.iphone7Color[2].imgUrlOne;
        }
        props.changeColorOfMain(colorAdd);

    }
    return(
        <div className={AppleStyle.intro}>
            <div className={AppleStyle.video}>
                <video className={AppleStyle.video_media} src={src_video} autoPlay muted loop> </video>
            </div>
            <div className={AppleStyle.intro_content}>
                <div className={AppleStyle.container}>
                    <div className={IphoneStyle.showPhone}>
                        <div className={IphoneStyle.row}>
                            <div>
                                <img className={IphoneStyle.main_photo} src={props.stateColorIphone7} alt='some'/>
                            </div>
                            <div className={IphoneStyle.AdditionalInformation}>
                                <div><h2>{props.iphone7[0].name}</h2> </div>
                                <div>
                                    <button className={IphoneStyle.colorButtonColder} id='Golden'
                                            onClick={(e)=>{changeColor(e.target.getAttribute('id'))}}>
                                    </button>
                                    <button className={IphoneStyle.colorButtonBlack} id='Black'
                                            onClick={(e)=>{changeColor(e.target.getAttribute('id'))}}>
                                    </button>
                                    <button className={IphoneStyle.colorButtonRose} id='Rose'
                                            onClick={(e)=>{changeColor(e.target.getAttribute('id'))}}>
                                    </button>
                                </div>
                                <div><b>variable</b></div>
                                <div className={IphoneStyle.contentPrice}>
                                    <b>Price </b>
                                    <b className={IphoneStyle.price}> {" " + props.iphone7[0].price}</b>
                                </div>
                            </div>
                        </div>
                        <div className={IphoneStyle.characterStyle}>
                            <h3>
                                {props.iphone7[0].character}
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Iphone;
