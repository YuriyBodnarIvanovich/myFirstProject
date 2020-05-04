import React from "react";
import ItemsStyle from './IphoneItems.module.css'
const IphoneItems = (props) =>{
    function changeIndex() {
        let number = Number(props.index)
        props.changeMainIndexOfArray(number)
    }
    return(
        <div className={ItemsStyle.container}>
            <b className={ItemsStyle.name}>{props.name}</b>
            <div className={ItemsStyle.row}>
                <div>
                    <img className={ItemsStyle.img} src={props.stateColorIphone7}/>
                </div>
                <div>
                    <b className={ItemsStyle.price}> {props.price} </b>
                    <br/>
                    <button className={ItemsStyle.button} onClick={changeIndex}>Open</button>
                </div>
            </div>
        </div>
    );
}
export default IphoneItems;