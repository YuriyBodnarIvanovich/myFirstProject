import React from "react";
import IphoneStyle from "../Iphone.module.css";
import ButtonOptionItem from "./ButtonOptionItems/ButtonOptionItems";

const ButtonParameter = (props) =>{
        const buttonOptionCatalogRam = props.data.iPhones[props.data.indexOfMainArray].buttonOption
            .map((element,index)=>
            <ButtonOptionItem
                 name={element.RAM.value}
                 price={element.RAM.price}
                 index={index}
                 data={props.data}
                 dispatch={props.dispatch}
                 option='RAM'/>)
        const buttonOptionCatalogInternalMemory = props.data.iPhones[props.data.indexOfMainArray].buttonOption
            .map((element,index)=>
            <ButtonOptionItem
                 name={element.internalMemory.value}
                 price={element.internalMemory.price}
                 index={index}
                 data={props.data}
                 dispatch={props.dispatch}
                 option='InternalMemory'/>)
        const buttonOptionCatalogFrontCamera = props.data.iPhones[props.data.indexOfMainArray].buttonOption
            .map((element,index)=>
            <ButtonOptionItem
                 name={element.frontCamera.value}
                 price={element.frontCamera.price}
                 index={index}
                 data={props.data}
                 dispatch={props.dispatch}
                 option='FrontCamera'/>)
        const buttonOptionCatalogBasicCamera = props.data.iPhones[props.data.indexOfMainArray].buttonOption
            .map((element,index)=>
            <ButtonOptionItem
                 name={element.basicCamera.value}
                 price={element.basicCamera.price}
                 index={index}
                 data={props.data}
                 dispatch={props.dispatch}
                 option='BasicCamera'/>)
    return(
        <div>
            <b>Ram:</b>
            <div className={IphoneStyle.row}>{buttonOptionCatalogRam}</div>
            <b>Internal Memory</b>
            <div className={IphoneStyle.row}>{buttonOptionCatalogInternalMemory}</div>
            <b>Front Camera:</b>
            <div className={IphoneStyle.row}>{buttonOptionCatalogFrontCamera}</div>
            <b>Basic Camera:</b>
            <div className={IphoneStyle.row}>{buttonOptionCatalogBasicCamera}</div>
        </div>
    )
}
export default ButtonParameter;