import React from "react";
import IphoneStyle from "../Iphone.module.css";
import ButtonColor from "../Button/ButtonChangeColor";
import ButtonParameter from "../Button/ButtonParameter";

const ContentPage = (props) =>{

    const colorArray = props.data.iPhones[props.data.indexOfMainArray].photo.map((element,index)=>
        <ButtonColor color={element.color} id={index} data={props.data} dispatch={props.dispatch} way='iPhone'/>);

    function addToCart() {
        let catalog = [];
        catalog = JSON.parse(JSON.stringify(props.dataCart.Product));
        catalog.push(JSON.parse(JSON.stringify(props.data.iPhones[props.data.indexOfMainArray])))
        catalog[catalog.length - 1].key = catalog.length + 1;
        props.dispatch({type:'CHANGE_ARRAY_CART',newProducts:catalog});
        console.log(props.dataCart.Product);
    }
    
    function last() {
        let array = [];
        array = JSON.parse(JSON.stringify(props.data.iPhones));
        if(props.data.indexOfPhoto === 0){
            props.dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex: 2});

        }
        else {
            props.dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex:props.data.indexOfPhoto - 1});
        }
        array[props.data.indexOfMainArray].stateColorIphone7 =
            array[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[props.data.indexOfPhoto].src;
        props.dispatch({type:'CHANGE_ARRAY',array:array});
    }
    function next() {
        let array = [];
        array = JSON.parse(JSON.stringify(props.data.iPhones));
        if(props.data.indexOfPhoto <2){
            props.dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex:props.data.indexOfPhoto + 1});
        }
        else {
            props.dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex:0});
        }
        array[props.data.indexOfMainArray].stateColorIphone7 =
            array[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[props.data.indexOfPhoto].src;
        props.dispatch({type:'CHANGE_ARRAY',array:array});
    }
    return(
        <div className={IphoneStyle.showPhone}>
            <div className={IphoneStyle.row}>
                <button className={IphoneStyle.buttonLast} onClick={last}>last</button>
                <div>
                    <img className={IphoneStyle.main_photo} src={props.data.iPhones[props.data.indexOfMainArray].stateColorIphone7} alt='some'/>
                </div>
                <button className={IphoneStyle.buttonLast} onClick={next}>next</button>
                <div className={IphoneStyle.AdditionalInformation}>
                    <div><h2>{props.data.iPhones[props.data.indexOfMainArray].name}</h2> </div>
                    <div className={IphoneStyle.row}>
                        {colorArray}
                    </div>
                    <ButtonParameter data={props.data} dispatch={props.dispatch} word={'iPhone'} from={props.data.indexOfMainArray}/>
                    <div className={IphoneStyle.contentPrice}>
                        <b>Price: </b>
                        <b className={IphoneStyle.price}> {" " + props.data.iPhones[props.data.indexOfMainArray].price}</b>
                    </div>

                    <button onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            <div className={IphoneStyle.characterStyle}>
                <h3>
                    {"Screen  " + props.data.iPhones[props.data.indexOfMainArray].character.screen}
                    {" / Processor  " + props.data.iPhones[props.data.indexOfMainArray].character.processor}
                    {" / FrontCamera  " + props.data.iPhones[props.data.indexOfMainArray].character.camera.frontCamera}
                    {" / BasicCamera  " + props.data.iPhones[props.data.indexOfMainArray].character.camera.basicCamera}
                    {" / Internal Memory  " + props.data.iPhones[props.data.indexOfMainArray].character.internalMemory}
                    {" / Operating System  " + props.data.iPhones[props.data.indexOfMainArray].character.operatingSystem}
                    {" / RAM  " + props.data.iPhones[props.data.indexOfMainArray].character.RAM}
                    {" / Remainder  " + props.data.iPhones[props.data.indexOfMainArray].character.remainder}
                </h3>
            </div>
        </div>


    )
}
export default ContentPage;