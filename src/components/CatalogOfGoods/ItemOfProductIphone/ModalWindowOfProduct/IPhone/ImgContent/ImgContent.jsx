import React, {useState} from "react";
import ContentPageStyle from "./ImgContent.module.css";
import {useSelector} from "react-redux";

const ImgContent = (props) =>{
    const dataApple = useSelector(state=>state.ApplePage);


    const [indexOfPhoto,setIndexOfPhoto] = useState(0);



    return(
        <div className={ContentPageStyle.photo}>
            <div className={ContentPageStyle.mainPhoto}>
                <img className={ContentPageStyle.mainPhotoStyle} src={props.photoData[props.indexOfColor].imgSrc[indexOfPhoto]} alt={''}/>
            </div>
            <div className={ContentPageStyle.catalogPhotoOver}>
                <div className={ContentPageStyle.catalogPhoto}>
                    <img className={ContentPageStyle.catalogPhotoStyle} src={props.photoData[props.indexOfColor].imgSrc[0] }
                         onClick={()=>setIndexOfPhoto(0)} alt={''}/>
                    <img className={ContentPageStyle.catalogPhotoStyle} src={props.photoData[props.indexOfColor].imgSrc[1]}
                         onClick={()=>setIndexOfPhoto(1)} alt={''}/>
                    <img className={ContentPageStyle.catalogPhotoStyle} src={props.photoData[props.indexOfColor].imgSrc[2]}
                         onClick={()=>setIndexOfPhoto(2)} alt={''}/>
                </div>
            </div>
        </div>
    )
}

export default ImgContent;
