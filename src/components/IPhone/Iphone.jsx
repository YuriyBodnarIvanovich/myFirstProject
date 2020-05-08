import React from 'react';
import IphoneStyle from './Iphone.module.css';
import AppleStyle from "../Apple/Apple.module.css";
import IphoneItems from './IphoneItems/iPhoneItems';
import ButtonParameter from "./Button/ButtonParameter";
import ButtonColor from "./Button/ButtonChangeColor";

const src_video = 'https://ak.picdn.net/shutterstock/videos/1042417903/preview/stock-footage-minsk-belarus-dec-close-up-woman-s-hands-keeping-and-unpacking-new-apple-iphone-pro.webm';

const Iphone = (props)=>{

    let iPhoneItems = props.data.arrayItems.map((p)=><IphoneItems name={p.name}
                                                                  stateColorIphone7={p.stateColorIphone7}
                                                                  price={p.price} index={p.key}
                                                                  changeMainIndexOfArray={props.changeMainIndexOfArray}/>)

    let iPhones = JSON.parse(JSON.stringify(props.data.array));
    function last() {
        let catalog = [];
        let y = 0;
        props.changeMin(props.min - 3);
        props.changeMax(props.max - 3);

        for(let i = props.min - 3; i < props.max - 3; i++){
            catalog[y] = props.data.array[i];
            y++;
        }
        props.changeIphoneItemsArray(catalog);
        if(props.data.arrayItems[0] === props.data.array[3]){
            props.changeStatusUp(false);
        }
        if(props.data.arrayItems[0] === props.data.array[0]){
            props.changeStatusUp(false);
        }
        props.changeStatusDawn(true);
        props.changeNumberClickDown(props.numberClickDown - 3);
    }
    function next() {
        let catalog = [];
        let y = 0;
        props.changeMin(props.min + 3);
        props.changeMax(props.max +3);
        for(let i = props.min + 3; i < props.max + 3; i++){
            if(props.data.array[i] == null){
                break;
            }else {
                catalog[y] = props.data.array[i];
                y++;
            }
        }
        console.log(props.data.arrayItems.length)
        props.changeIphoneItemsArray(catalog);
        props.changeStatusUp(true);
        props.changeNumberClickDown(props.numberClickDown + 3);
        let difference  = props.data.array.length - props.numberClickDown;

        if(difference < 3 ){
            props.changeStatusDawn(false);
        }

    }
    
    function addToCart() {
        let catalog = [];
        catalog = JSON.parse(JSON.stringify(props.arrayOfCart));
        catalog.push(JSON.parse(JSON.stringify(props.data.array[props.data.index])))
        catalog[catalog.length - 1].key = catalog.length + 1;
        props.changeArrayCart(catalog);
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
                                <ButtonColor data={props.data} changeMainArray={props.changeMainArray}
                                             colorOfButton={props.colorOfButton} mainColor={props.mainColor}
                                             changeMainColor={props.changeMainColor}/>
                                <ButtonParameter  data={props.data} changeMainArray={props.changeMainArray}/>
                                <div className={IphoneStyle.contentPrice}>
                                    <b>Price: </b>
                                    <b className={IphoneStyle.price}> {" " + props.data.array[props.data.index].price}</b>
                                </div>

                                <button onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>
                        <div className={IphoneStyle.characterStyle}>
                            <h3>
                                 {"Screen  " + props.data.array[props.data.index].character.screen}
                                 {" / Processor  " + props.data.array[props.data.index].character.processor}
                                 {" / FrontCamera  " + props.data.array[props.data.index].character.camera.frontCamera}
                                 {" / BasicCamera  " + props.data.array[props.data.index].character.camera.basicCamera}
                                 {" / Internal Memory  " + props.data.array[props.data.index].character.internalMemory}
                                 {" / Operating System  " + props.data.array[props.data.index].character.operatingSystem}
                                 {" / RAM  " + props.data.array[props.data.index].character.RAM}
                                 {" / Remainder  " + props.data.array[props.data.index].character.remainder}
                            </h3>
                        </div>
                    </div>
                    <div className={IphoneStyle.containerForItems}>
                        {props.statusUp ? <button className={IphoneStyle.Up} onClick={last}>Up</button> : <button className={IphoneStyle.Up} disabled>Up</button> }
                        <div className={IphoneStyle.forItems}>
                            {iPhoneItems}
                        </div>
                        {props.statusDawn ? <button className={IphoneStyle.Dawn} onClick={next}>dawn</button> : <button className={IphoneStyle.Dawn} onClick={next} disabled>dawn</button>}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Iphone;
