import React, {useState} from "react";
import Style from './ItemOfMac.module.css';
import ModalProduct_Mac from "./ModalProduct/ModalProduct";



const ItemOfMac = (props) => {

    const [showItem, setStatusOfItem] = useState(false);


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
                <button onClick={()=>{setStatusOfItem(true)}}>Show More</button>
            </div>
            {showItem ?
                <ModalProduct_Mac CharactersMacData={<CharactersMacData/>} setStatusOfItem={setStatusOfItem}
                                  name={props.name} photo={props.catalogOfPhoto} price={props.price}/> : null }
        </div>
    )
}

export default ItemOfMac;
