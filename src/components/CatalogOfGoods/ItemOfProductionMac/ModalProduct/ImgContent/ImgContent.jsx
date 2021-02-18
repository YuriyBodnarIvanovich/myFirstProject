import React, {useState} from "react";
import ContentPageStyle from "./ImgContent.module.css";

const ImgContent_Mac = (props) =>{


    const [indexOfPhoto,setIndexOfPhoto] = useState(0);

    const catalogOfPhoto = props.photo.map((item,index)=>{
        return(
            <img src={item}
                 onClick={()=>setIndexOfPhoto(index)} alt={''}/>
        )
    })

    return(
        <div className={ContentPageStyle.photo}>
            <div className={ContentPageStyle.mainPhoto}>
                <img src={props.photo[indexOfPhoto]} alt={''}/>
            </div>
            <div className={ContentPageStyle.catalogPhotoOver}>
                <div className={ContentPageStyle.catalogPhoto}>
                    {catalogOfPhoto}
                </div>
            </div>
        </div>
    )
}

export default ImgContent_Mac;
