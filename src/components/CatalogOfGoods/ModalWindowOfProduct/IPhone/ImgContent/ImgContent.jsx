import React, {useState} from "react";
import ContentPageStyle from "./ImgContent.module.css";

const ImgContent = (props) =>{


    const [indexOfPhoto,setIndexOfPhoto] = useState(0);



    return(
        <div className={ContentPageStyle.photo}>
            <div className={ContentPageStyle.mainPhoto}>
                <img src={props.photoData[props.indexOfColor].imgSrc[indexOfPhoto]} alt={''}/>
            </div>
            <div className={ContentPageStyle.catalogPhotoOver}>
                <div className={ContentPageStyle.catalogPhoto}>
                    <img src={props.photoData[props.indexOfColor].imgSrc[0]}
                         onClick={()=>setIndexOfPhoto(0)} alt={''}/>
                    <img src={props.photoData[props.indexOfColor].imgSrc[1]}
                         onClick={()=>setIndexOfPhoto(1)} alt={''}/>
                    <img src={props.photoData[props.indexOfColor].imgSrc[2]}
                         onClick={()=>setIndexOfPhoto(2)} alt={''}/>
                </div>
            </div>
        </div>
    )
}

export default ImgContent;
