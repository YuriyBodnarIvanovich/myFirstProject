import React, {useState} from "react";
import Style from './ItemOfProduct.module.css'
import {Link} from "@material-ui/core";
import IphoneModal from "./ModalWindowOfProduct/IPhone/IphoneModal";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";


const ItemOfProductIphone = (props) =>{
    const dataApple = useSelector(state=> state.ApplePage);

    const [statusOfItem, setStatusOfItem] = useState(false);
    const [confirmDeleteBox, setStatusOfDeleteBox] = useState(false)

    const dataIphone = useSelector(state =>state.IphonePage);
    const dispatch = useDispatch();


    const CharactersIphoneData = () => {
        return(
            <div className={`${dataApple.darkTheme ? Style.characters_dark : Style.characters}`}>
                {props.character.screen !== '' ?
                    <p><sub>Screen: {props.character.screen}</sub></p> : null }
                {props.character.processor !== '' ?
                    <p><sub>Processor: {props.character.processor}</sub></p> : null }
                {props.character.RAM !== '' ?
                    <p><sub>RAM: {props.character.RAM}</sub></p> : null }
                {props.character.internalMemory !== '' ?
                    <p><sub>Internal Memory: {props.character.internalMemory}</sub></p> : null }
                {/*{props.character.remainder !== null ?*/}
                {/*    <p><sub>Remainder: {props.character.remainder}</sub></p> : null }*/}
                {props.character.camera.basicCamera !== '' ?
                    <p><sub>Basic Camera: {props.character.camera.basicCamera}</sub></p> : null }
                {props.character.camera.frontCamera !== '' ?
                    <p><sub>Front Camera: {props.character.camera.frontCamera}</sub></p> : null }
            </div>
        )
    }

    function delete_product(){
        axios.post('http://localhost:3001/deleteProduct', {
            name:props.name,
        }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                console.log(response);
                let catalog = JSON.parse(JSON.stringify(dataIphone.iPhones));
                catalog = catalog.filter((el)=> el.name !== props.name).map((el)=>{
                    return el
                });
                dispatch({type:"CHANGE_ARRAY",array:catalog})
                console.log(catalog);
                setStatusOfDeleteBox(false);
            })
            .catch(function (error) {
                console.log(error);
            });
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
        <div className={`${dataApple.darkTheme ? Style.container_dark : Style.container}`}>
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
                <div className={Style.color_of_photo}>
                    <img src={props.photo} alt={''}/>
                </div>
            </div>
            <p className={Style.container_of_name}>
                {dataApple.darkTheme ? <b style={{color:"white"}}>{props.name}</b> : <b>{props.name}</b>}
            </p>
            <CharactersIphoneData/>
            <div className={`${dataApple.darkTheme ? Style.for_price_dark : Style.for_price}`}>
                <p>{props.price + " ₴"}</p>
            </div>
            <div className={Style.for_button}>
                <button onClick={()=>{setStatusOfItem(true)}}>Show More</button>
            </div>
            {statusOfItem ? <IphoneModal  setStatusOfItem={setStatusOfItem}
                CharactersIphoneData={<CharactersIphoneData/>} name={props.name} photoData={props.photoData} price={props.price}
                    statusOfOpen={'goods'}/> : null}
            {confirmDeleteBox ? <ConfirmDelete/> : null}
        </div>
    )
}

export default ItemOfProductIphone;
