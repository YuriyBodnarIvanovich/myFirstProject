import React, {useState} from "react";
import Style from './IphoneModal.module.css';
import ImgContent from "./ImgContent/ImgContent";

const IphoneModal = (props) =>{

    const [indexOfColor,setIndexOfColor] = useState(0);

    const colorData = props.photoData.map((item,index)=>{
        return(
            <div className={Style.color_item} style={{backgroundColor: `${item.color}`}} onClick={()=>setIndexOfColor(index)}>

            </div>
        )
    })

    return(
        <div className={Style.container}>
            <div className={Style.container_of_item}>
                <div className={Style.exit}>
                    <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfItem(false)}}/>
                </div>
                <h1>{props.name}</h1>
                <div className={Style.container_for_content}>
                    <div className={Style.left_content}>
                        <div className={Style.container_of_colors}>
                            {colorData}
                        </div>
                        <div>
                            <h3>Characters:</h3>
                            {props.CharactersIphoneData}
                        </div>
                    </div>
                    <div className={Style.container_of_photo}>
                        <ImgContent photoData={props.photoData} indexOfColor={indexOfColor}/>
                    </div>
                </div>
                <div className={Style.for_button}>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default IphoneModal;
