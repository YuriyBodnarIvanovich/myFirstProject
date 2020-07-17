import React from "react";
import ModalPhotoStyle from './ModalPhoto.module.css';

const ModalPhoto = (props) =>{
    function hideModalWindow() {
        props.dispatch({type:'CHANGE_STATUS_OF_MODAL_PHOTO',status:false});
    }
    return(
        <div className={ModalPhotoStyle.container}>
            <div className={ModalPhotoStyle.modalPhoto}>
                <img src={props.wayOfPhoto} alt='ph' onClick={hideModalWindow}/>
            </div>
        </div>

    )
}
export default ModalPhoto;