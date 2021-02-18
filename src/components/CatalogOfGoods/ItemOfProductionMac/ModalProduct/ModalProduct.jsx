import React from "react";
import Style from './ModalProduct.module.css';
import ImgContent_Mac from "./ImgContent/ImgContent";

const ModalProduct_Mac = (props) =>{
    return(
        <div className={Style.container}>
            <div className={Style.container_of_item}>
                <div className={Style.exit}>
                    <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfItem(false)}}/>
                </div>
                <h1>{props.name}</h1>
                <div className={Style.container_for_content}>
                    <div className={Style.left_content}>
                        <p><b>Price:</b> <em>{props.price + " ₴"}</em></p>
                        <h3>Characters:</h3>
                        {props.CharactersMacData}
                    </div>
                    <div className={Style.container_of_photo}>
                        <ImgContent_Mac photo={props.photo}/>
                    </div>
                </div>
                <div className={Style.for_button}>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ModalProduct_Mac;
