import React from "react";
import Style from './ItemOfMac.module.css';



const ItemOfMac = (props) => {

    const CharactersMacData = () => {
        return(
            <div className={Style.characters}>
                {props.character.screen !== '' ?
                    <p><sub>Screen: {props.character.screen}</sub></p> : null }
                {props.character.RAM !== '' ?
                    <p><sub>RAM: {props.character.RAM}</sub></p> : null }
                {props.character.SSD !== '' ?
                    <p><sub>SSD: {props.character.SSD}</sub></p> : null }
                {props.character.processor !== '' ?
                    <p><sub>Processor: {props.character.processor}</sub></p> : null }
                {props.character.videoCard !== null ?
                    <p><sub>videoCard: {props.character.videoCard}</sub></p> : null }
            </div>
        )
    }


    return(
        <div className={Style.container}>
            <div className={Style.container_of_photo}>
                <img src={props.photo} alt={''}/>
            </div>
            <p className={Style.container_of_name}><b>{props.name}</b></p>
            <CharactersMacData/>
            <div className={Style.for_price}>
                <p>{props.price + " ₴"}</p>
            </div>
            <div className={Style.for_button}>
                <button>Show More</button>
            </div>
        </div>
    )
}

export default ItemOfMac;
