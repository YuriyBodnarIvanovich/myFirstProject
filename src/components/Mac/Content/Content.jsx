import React from "react";
import MacStyle from "../Mac.module.css";
import ButtonBack from "../Button/ButtonBack/ButtonBack";
import ButtonNext from "../Button/ButtonNext/ButtonNext";
import MacItems from "../MacItems/MacItems";

const Content =(props) =>{
    function showCatalog() {
         props.method({type:'CHANGE_STATE_OF_CONTENT',showContent:false});
    }
    function showContent() {
        const catalog =  props.data.imgData.filter((_, index) => props.data.min <= index && index < props.data.max && props.data.min >= 0).map((element)=><MacItems imgSrc = {element.imgSrc} number={element.id}
                                                     price={element.price} name={element.name}
                                                     onePhoto={element.onePhoto} twoPhoto={element.twoPhoto}
                                                     characteristics={element.characteristics}/>)
        return(<div>
                <div className={MacStyle.main} id={"demo"}>
                    {catalog}
                </div>
                <ButtonBack data={props.data} method={props.method}/>
                <ButtonNext data={props.data} method={props.method}/>
            </div>
        )
    }
    function showButton() {
        return(
            <div className={MacStyle.content}>
                <button id={'showContent'} className={MacStyle.showContent} onClick={showCatalog}>show content</button>
            </div>)
    }
    const status = props.data.centerContentShow;
    if(status){
        return showButton();
    }
    else{return showContent()}
}
export default Content;