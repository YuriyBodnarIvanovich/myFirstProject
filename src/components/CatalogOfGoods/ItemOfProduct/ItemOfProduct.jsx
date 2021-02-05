import React from "react";
import Style from './ItemOfProduct.module.css'


const ItemOfProduct = (props) =>{

    const CharactersIphoneData = () => {
        return(
            <div className={Style.characters}>
                {props.character.screen !== '' ?
                    <p><sub>Screen: {props.character.screen}</sub></p> : null }
                {props.character.processor !== '' ?
                    <p><sub>Processor: {props.character.processor}</sub></p> : null }
                {props.character.RAM !== '' ?
                    <p><sub>RAM: {props.character.RAM}</sub></p> : null }
                {props.character.internalMemory !== '' ?
                    <p><sub>Internal Memory: {props.character.internalMemory}</sub></p> : null }
                {props.character.remainder !== null ?
                    <p><sub>Remainder: {props.character.remainder}</sub></p> : null }
                {props.character.camera.basicCamera !== '' ?
                    <p><sub>Basic Camera: {props.character.camera.basicCamera}</sub></p> : null }
                {props.character.camera.frontCamera !== '' ?
                    <p><sub>Front Camera: {props.character.camera.frontCamera}</sub></p> : null }
            </div>
        )
    }

    return(
        <div className={Style.container}>
            <div className={Style.container_of_photo}>
                <img src={props.photo} alt={''}/>
            </div>
            <p className={Style.container_of_name}><b>{props.name}</b></p>
            <CharactersIphoneData/>
            <div className={Style.for_price}>
                <p>{props.price + " ₴"}</p>
            </div>
            <div className={Style.for_button}>
                <button>Show More</button>
            </div>
        </div>
    )
}

export default ItemOfProduct;
