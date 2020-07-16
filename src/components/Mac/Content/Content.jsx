import React from "react";
import MacStyle from "../Mac.module.css";
import ButtonBack from "../Button/ButtonBack/ButtonBack";
import ButtonNext from "../Button/ButtonNext/ButtonNext";
import MacItems from "../MacItems/MacItems";
import Input from "../../Apple/Input/Input";
import UserMenu from "../../Menu/UserField/UserMenu/UserMenu";
import MacPage from "../MacItems/MacPage/MacPage";

const Content =(props) =>{
    function showCatalog() {
         props.dispatch({type:'CHANGE_STATE_OF_CONTENT',showContent:false});
    }
    function showContent() {
        const catalog =  props.data.imgData.
                filter((_, index) => props.data.min <= index && index < props.data.max && props.data.min >= 0).
                        map((element)=><MacItems  number={element.id}
                                                  name={element.name}
                                                  // price={element.price}
                                                  price={element.price}
                                                  photo={element.photo}
                                                  characters={element.characters}
                                                  dispatch={props.dispatch}
                                                  data={props.data}/>)
        return(
            <div>
                {props.dataApple.showInputBox ? <Input data={props.dataApple} dispatch={props.dispatch}/> : ''}
                {props.dataApple.userMenuStatus ? <UserMenu/> : ''}
                <div className={MacStyle.main} id={"demo"}>
                    {props.data.itemsStatusShow ? <MacPage data={props.data} dispatch={props.dispatch}/> : ''}
                    {catalog}
                </div>
                {props.data.itemsStatusShow ? '' :<ButtonBack data={props.data} dispatch={props.dispatch}/> }
                {props.data.itemsStatusShow ? '' :<ButtonNext data={props.data} dispatch={props.dispatch}/> }


            </div>
        )
    }
    function showButton() {
        return(
            <div className={MacStyle.content}>
                {props.dataApple.showInputBox ? <Input data={props.dataApple} dispatch={props.dispatch}/> : ''}
                {props.dataApple.userMenuStatus ? <UserMenu/> : ''}
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