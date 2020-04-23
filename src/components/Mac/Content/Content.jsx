import React from "react";
import MacStyle from "../Mac.module.css";
import ButtonBack from "../Button/ButtonBack/ButtonBack";
import ButtonNext from "../Button/ButtonNext/ButtonNext";
import MacItems from "../MacItems/MacItems";
import BackButtonStyle from "../Button/ButtonBack/BackButton.module.css";

const Content =(props) =>{
    function showCatalog() {
        props.method.upDateStatusContent(false);
    }

    function showContent() {
        let catalog =  props.data.newArray.map((p)=><MacItems imgSrc = {p.imgSrc} number={p.id}
                                                              price={p.price} name={p.name}
                                                              onePhoto={p.onePhoto} twoPhoto={p.twoPhoto}
                                                              characteristics={p.characteristics}/>)
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