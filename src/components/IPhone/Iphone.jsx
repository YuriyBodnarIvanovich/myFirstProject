import React from 'react';
import IphoneStyle from './Iphone.module.css';
import AppleStyle from "../Apple/Apple.module.css";

const src_video = 'https://ak.picdn.net/shutterstock/videos/1042417903/preview/stock-footage-minsk-belarus-dec-close-up-woman-s-hands-keeping-and-unpacking-new-apple-iphone-pro.webm';

const Iphone = (props)=>{
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

    /////////////////////////////////////////////////////////////////
    let addPrice=0;
    function changeCameraPrime() {
        addPrice = 2000;
        if(props.buttonNormalPrimeStatus === false){
            addPrice -=1000;
        }
        props.changeFrontCamera('9 Мп');
        props.changeBasicCamera('14 Мп');
        props.changePrice(props.price + addPrice);
        props.changeNormalButton(true);
        props.changeStatusPrimeButtonCamera(false);
    }
    function changeFrontCameraNormal() {
        addPrice = 1000;
        if(props.buttonCameraPrimeStatus === false){
            addPrice -=2000
        }
        props.changeFrontCamera('7 Мп');
        props.changeBasicCamera('12 Мп');
        props.changePrice(props.price + addPrice);
        props.changeNormalButton(false);
        props.changeStatusPrimeButtonCamera(true);
    }

    function MemoryPrime() {
        addPrice = 4000;
        if(props.buttonMemoryNormalStatus === false){
            addPrice -= 2000;
        }
        props.changeInternalMemory('128 Гб');
        props.changePrice(props.price + addPrice);
        props.changeStatusOfMemoryButtonNormal(true);
        props.changeStatusOfMemoryButtonPrime(false);
    }

    function MemoryNormal() {
        addPrice = 2000;
        if(props.buttonMemoryPrimeStatus === false){
            addPrice -= 4000;
        }
        props.changeInternalMemory('64 Гб');
        props.changePrice(props.price + addPrice);
        props.changeStatusOfMemoryButtonNormal(false);
        props.changeStatusOfMemoryButtonPrime(true);
    }
    function RAMPrime() {
        addPrice =4000;
        if(props.buttonRAM_NormalStatus === false){
            addPrice -= 2000;
        }
        props.changeRAM('6');
        props.changePrice(props.price + addPrice);
        props.changeStatusOfRAM_NormalButton(true);
        props.changeStatusOfRAM_PrimeButton(false);
    }
    function RAMNormal() {
        addPrice =2000;
        if(props.buttonRAM_PrimeStatus === false){
            addPrice -=4000;
        }
        props.changeRAM('4');
        props.changePrice(props.price + addPrice);
        props.changeStatusOfRAM_NormalButton(false);
        props.changeStatusOfRAM_PrimeButton(true);
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
                                <div><h2>{props.name}</h2> </div>
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
                                <div>
                                   <b className={IphoneStyle.Items}>Camera:</b>
                                    {props.buttonNormalPrimeStatus ? <button className={IphoneStyle.buttonCheck} onClick={changeFrontCameraNormal} > 12  and 7 </button> : <button className={IphoneStyle.buttonCheck} onClick={changeFrontCameraNormal} disabled> 12  and 7 </button>}
                                    {props.buttonCameraPrimeStatus ? <button className={IphoneStyle.buttonCheck} onClick={changeCameraPrime}> 14  and 9 </button> : <button className={IphoneStyle.buttonCheck} onClick={changeCameraPrime} disabled> 14  and 9 </button> }
                                    <br/>
                                    <b className={IphoneStyle.Items}>Memory:</b>
                                    {props.buttonMemoryNormalStatus ? <button className={IphoneStyle.buttonCheck} onClick={MemoryNormal}> 64 Гб </button> : <button className={IphoneStyle.buttonCheck} onClick={MemoryNormal} disabled> 64 Гб </button>}
                                    {props.buttonMemoryPrimeStatus ? <button className={IphoneStyle.buttonCheck} onClick={MemoryPrime}> 128 Гб</button> : <button className={IphoneStyle.buttonCheck} onClick={MemoryPrime} disabled> 128 Гб</button>}
                                    <br/>
                                    <b className={IphoneStyle.Items}>RAM:</b>
                                    {props.buttonRAM_NormalStatus ? <button className={IphoneStyle.buttonCheck} onClick={RAMNormal}> 4 Гб </button>  : <button className={IphoneStyle.buttonCheck} onClick={RAMNormal} disabled> 4 Гб </button>}
                                    {props.buttonRAM_PrimeStatus ? <button className={IphoneStyle.buttonCheck} onClick={RAMPrime}> 6 Гб</button> : <button className={IphoneStyle.buttonCheck} onClick={RAMPrime} disabled> 6 Гб</button> }
                                </div>
                                <div className={IphoneStyle.contentPrice}>
                                    <b>Price: </b>
                                    <b className={IphoneStyle.price}> {" " + props.price}</b>
                                </div>
                            </div>
                        </div>
                        <div className={IphoneStyle.characterStyle}>
                            <h3>
                                 {"Screen  " + props.screen}   {" / Processor  " + props.processor}
                                 {" / FrontCamera  " + props.frontCamera}  {" / BasicCamera  " + props.basicCamera}
                                 {" / Internal Memory  " + props.internalMemory}
                                 {" / Operating System  " + props.operatingSystem}  {" / RAM  " + props.RAM}
                                 {" / Remainder  " + props.remainder}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Iphone;
