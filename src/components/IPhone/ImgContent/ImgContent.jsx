import React from "react";
import ImgStyle from './ImgContent.module.css';
import ContentPageStyle from "../ContentPage/ContentPage.module.css";

const ImgContent = (props) =>{
    function changeMainPhoto(number){
        props.dispatch({type:'CHANGE_NUMBER_OF_PHOTO',number:number})
    }
    return(
        <div className={ContentPageStyle.photo}>
            <div className={ContentPageStyle.mainPhoto}>
                <img src={props.data.iPhones[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[props.data.numberOfPhoto]} alt={''}/>
            </div>
            <div className={ContentPageStyle.catalogPhotoOver}>
                <div className={ContentPageStyle.catalogPhoto}>
                    <img src={props.data.iPhones[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[0]}
                         onClick={()=>changeMainPhoto(0)} alt={''}/>
                    <img src={props.data.iPhones[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[1]}
                         onClick={()=>changeMainPhoto(1)} alt={''}/>
                    <img src={props.data.iPhones[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[2]}
                         onClick={()=>changeMainPhoto(2)} alt={''}/>
                </div>
            </div>
        </div>
    )
}

export default ImgContent;
