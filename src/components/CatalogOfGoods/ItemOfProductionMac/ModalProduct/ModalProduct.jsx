import React from "react";
import Style from './ModalProduct.module.css';
import ImgContent_Mac from "./ImgContent/ImgContent";
import {useSelector} from "react-redux";

const ModalProduct_Mac = (props) =>{
    const dataApple = useSelector(state=> state.ApplePage);

    return(
        <div className={`${dataApple.darkTheme ? Style.container_dark : Style.container}`}>
            <div className={`${dataApple.darkTheme ? Style.container_of_item_dark : Style.container_of_item}`}>
                <div className={Style.container_of_name_and_exit}>
                    <div className={Style.exit}>
                        <div className={Style.exit}>
                            {dataApple.darkTheme ?  <b style={{color:"white"}} onClick={()=>{props.setStatusOfItem(false)}}>×</b>
                                :
                                <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfItem(false)}}/>
                            }
                        </div>

                    </div>
                    {dataApple.darkTheme ? <h1 style={{color:"white"}}>{props.name}</h1> : <h1>{props.name}</h1>}
                </div>
                <div className={Style.container_for_content}>
                    <div className={Style.left_content}>
                        {dataApple.darkTheme ?
                            <p style={{color:"white"}}><b>Price:</b> <em style={{color:"white"}}>{props.price + " ₴"}</em></p>
                            :
                            <p><b>Price:</b> <em>{props.price + " ₴"}</em></p>
                        }
                        {dataApple.darkTheme ?  <h3 style={{color:"white"}}>Characters:</h3> :  <h3>Characters:</h3>}
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
