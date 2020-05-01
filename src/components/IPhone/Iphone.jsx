import React from 'react';
import IphoneStyle from './Iphone.module.css';
import AppleStyle from "../Apple/Apple.module.css";
import IphoneItems from './IphoneItems/iPhoneItems';

const src_video = 'https://ak.picdn.net/shutterstock/videos/1042417903/preview/stock-footage-minsk-belarus-dec-close-up-woman-s-hands-keeping-and-unpacking-new-apple-iphone-pro.webm';

const Iphone = (props)=>{

    let iPhoneItems = props.data.arrayItems.map((p)=><IphoneItems name={p.name}
                                                                  stateColorIphone7={p.stateColorIphone7}
                                                                  price={p.price} index={p.key}
                                                                  changeMainIndexOfArray={props.changeMainIndexOfArray}/>)

    let iPhones = JSON.parse(JSON.stringify(props.data.array));

    function changeColor(colorButton) {
        if(colorButton === props.data.array[props.data.index].photo[0].id){
            iPhones[props.data.index].stateColorIphone7=props.data.array[props.data.index].photo[0].imgUrlOne;
        }
        else if(colorButton === props.data.array[props.data.index].photo[1].id){
            iPhones[props.data.index].stateColorIphone7=props.data.array[props.data.index].photo[1].imgUrlOne;
        }else {
            iPhones[props.data.index].stateColorIphone7=props.data.array[props.data.index].photo[2].imgUrlOne;
        }
        props.changeMainArray(iPhones);
    }

    let addPrice=0;
    function changeCameraPrime() {
        addPrice = 2000;
        if(props.data.array[props.data.index].buttonNormalPrimeStatus === false){
            addPrice -=1000;
        }
        iPhones[props.data.index].character.camera.frontCamera = '9 Мп';
        iPhones[props.data.index].character.camera.basicCamera = '14 Мп';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonNormalPrimeStatus = true;
        iPhones[props.data.index].buttonCameraPrimeStatus = false;
        props.changeMainArray(iPhones);
    }
    function changeFrontCameraNormal() {
        addPrice = 1000;
        if(props.data.array[props.data.index].buttonCameraPrimeStatus === false){
            addPrice -= 2000
        }
        iPhones[props.data.index].character.camera.frontCamera = '7 Мп';
        iPhones[props.data.index].character.camera.basicCamera = '12 Мп';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonNormalPrimeStatus = false;
        iPhones[props.data.index].buttonCameraPrimeStatus = true;
        props.changeMainArray(iPhones);
    }
    function MemoryPrime() {
        addPrice = 4000;
        if(props.data.array[props.data.index].buttonMemoryNormalStatus === false){
            addPrice -= 2000;
        }
        iPhones[props.data.index].character.internalMemory = '128 Гб';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonMemoryNormalStatus = true;
        iPhones[props.data.index].buttonMemoryPrimeStatus = false;
        props.changeMainArray(iPhones);
    }
    function MemoryNormal() {
        addPrice = 2000;
        if(props.data.array[props.data.index].buttonMemoryPrimeStatus === false){
            addPrice -= 4000;
        }
        iPhones[props.data.index].character.internalMemory = '64 Гб';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonMemoryNormalStatus = false;
        iPhones[props.data.index].buttonMemoryPrimeStatus = true;
        props.changeMainArray(iPhones);
    }
    function RAMPrime() {
        addPrice =4000;
        if(props.data.array[props.data.index].buttonRAM_NormalStatus === false){
            addPrice -= 2000;
        }
        iPhones[props.data.index].character.RAM = '6';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonRAM_NormalStatus = true;
        iPhones[props.data.index].buttonRAM_PrimeStatus = false;
        props.changeMainArray(iPhones)
    }
    function RAMNormal() {
        addPrice =2000;
        if(props.data.array[props.data.index].buttonRAM_PrimeStatus === false){
            addPrice -=4000;
        }
        iPhones[props.data.index].character.RAM = '4';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price)+ Number(addPrice);
        iPhones[props.data.index].buttonRAM_NormalStatus = false;
        iPhones[props.data.index].buttonRAM_PrimeStatus = true;
        props.changeMainArray(iPhones)
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
                                <img className={IphoneStyle.main_photo} src={props.data.array[props.data.index].stateColorIphone7} alt='some'/>
                            </div>
                            <div className={IphoneStyle.AdditionalInformation}>
                                <div><h2>{props.data.array[props.data.index].name}</h2> </div>
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

                                    {
                                        props.data.array[props.data.index].buttonNormalPrimeStatus ?
                                        <button className={IphoneStyle.buttonCheck} onClick={changeFrontCameraNormal} >
                                            {props.data.array[props.data.index].buttonTextOfCameraOptionsNormal}
                                        </button> :
                                        <button className={IphoneStyle.buttonCheck} onClick={changeFrontCameraNormal} disabled>
                                            {props.data.array[props.data.index].buttonTextOfCameraOptionsNormal}
                                        </button>
                                    }
                                    {
                                        props.data.array[props.data.index].buttonCameraPrimeStatus ?
                                        <button className={IphoneStyle.buttonCheck} onClick={changeCameraPrime}>
                                            {props.data.array[props.data.index].buttonTextOfCameraOptionsPrime} </button> :
                                        <button className={IphoneStyle.buttonCheck} onClick={changeCameraPrime} disabled>
                                            {props.data.array[props.data.index].buttonTextOfCameraOptionsPrime}
                                        </button>
                                    }
                                    <br/>
                                    <b className={IphoneStyle.Items}>Memory:</b>
                                    {
                                        props.data.array[props.data.index].buttonMemoryNormalStatus ?
                                        <button className={IphoneStyle.buttonCheck} onClick={MemoryNormal}>
                                            {props.data.array[props.data.index].buttonTextOfMemoryNormal}
                                        </button> :
                                        <button className={IphoneStyle.buttonCheck} onClick={MemoryNormal} disabled>
                                            {props.data.array[props.data.index].buttonTextOfMemoryNormal}
                                        </button>
                                    }
                                    {
                                        props.data.array[props.data.index].buttonMemoryPrimeStatus ?
                                        <button className={IphoneStyle.buttonCheck} onClick={MemoryPrime}>
                                            {props.data.array[props.data.index].buttonTextOfMemoryPrime}
                                        </button> :
                                        <button className={IphoneStyle.buttonCheck} onClick={MemoryPrime} disabled>
                                            {props.data.array[props.data.index].buttonTextOfMemoryPrime}
                                        </button>
                                    }
                                    <br/>
                                    <b className={IphoneStyle.Items}>RAM:</b>
                                    {
                                        props.data.array[props.data.index].buttonRAM_NormalStatus ?
                                        <button className={IphoneStyle.buttonCheck} onClick={RAMNormal}>
                                            {props.data.array[props.data.index].buttonTextOfRAMNormal}</button>  :
                                        <button className={IphoneStyle.buttonCheck} onClick={RAMNormal} disabled>
                                            {props.data.array[props.data.index].buttonTextOfRAMNormal}
                                        </button>
                                    }
                                    {
                                        props.data.array[props.data.index].buttonRAM_PrimeStatus ?
                                        <button className={IphoneStyle.buttonCheck} onClick={RAMPrime}>
                                            {props.data.array[props.data.index].buttonTextOfRAMPrime}</button> :
                                        <button className={IphoneStyle.buttonCheck} onClick={RAMPrime} disabled>
                                            {props.data.array[props.data.index].buttonTextOfRAMPrime}
                                        </button>
                                    }
                                </div>
                                <div className={IphoneStyle.contentPrice}>
                                    <b>Price: </b>
                                    <b className={IphoneStyle.price}> {" " + props.data.array[props.data.index].price}</b>
                                </div>
                            </div>
                        </div>
                        <div className={IphoneStyle.characterStyle}>
                            <h3>
                                 {"Screen  " + props.data.array[props.data.index].character.screen}   {" / Processor  " + props.data.array[props.data.index].character.processor}
                                 {" / FrontCamera  " + props.data.array[props.data.index].character.camera.frontCamera}  {" / BasicCamera  " + props.data.array[props.data.index].character.camera.basicCamera}
                                 {" / Internal Memory  " + props.data.array[props.data.index].character.internalMemory}
                                 {" / Operating System  " + props.data.array[props.data.index].character.operatingSystem}  {" / RAM  " + props.data.array[props.data.index].character.RAM}
                                 {" / Remainder  " + props.data.array[props.data.index].character.remainder}
                            </h3>
                        </div>
                    </div>
                    <div className={IphoneStyle.containerForItems}>
                        {iPhoneItems}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Iphone;
