import React, {useState} from "react";
import Style from './ItemOfMac.module.css';
import ModalProduct_Mac from "./ModalProduct/ModalProduct";
import {useDispatch, useSelector} from "react-redux";



const ItemOfMac = (props) => {

    const [showItem, setStatusOfItem] = useState(false);
    const [confirmDeleteBox, setStatusOfDeleteBox] = useState(false)

    const dataIphone = useSelector(state =>state.IphonePage);
    const dataMac = useSelector(state =>state.macPage);
    const dispatch = useDispatch();



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

    function delete_product(){
        setStatusOfDeleteBox(false);
        let catalog = JSON.parse(JSON.stringify(dataMac.imgData));
        catalog = catalog.filter((el)=> el.name !== props.name).map((el)=>{
            return el
        });
        dispatch({type:"PUT_ARRAY",newArray:catalog})
        console.log(catalog);

    }

    function save_product(){
        setStatusOfDeleteBox(false);
    }


    const ConfirmDelete = () =>{
        return(
            <div className={Style.confirm_delete_container}>
                <div className={Style.confirm_delete}>
                    <h1>Confirm delete</h1>
                    <div className={Style.for_button_confirm}>
                        <button onClick={()=>{delete_product()}}>Yes</button>
                        <button onClick={()=>{save_product()}}>No</button>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className={Style.container}>
            {
                props.statusOfDelete ? <div className={Style.delete_item_container}>
                    <div className={Style.delete_item_button}>
                        <img src="https://img.icons8.com/fluent/48/000000/delete-sign.png"
                             onClick={()=>{setStatusOfDeleteBox(true)}}/>
                    </div>
                </div>
                    : null
            }

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
            {confirmDeleteBox ? <ConfirmDelete/> : null}
        </div>
    )
}

export default ItemOfMac;
