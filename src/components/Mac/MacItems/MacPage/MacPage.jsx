import React from "react";
import MacPageStyle from './MacPage.module.css';
import ModalPhoto from "./ModalPhoto/ModalPhoto";

const MacPage = (props) =>{
    function hide() {
        props.dispatch({type:'CHANGE_STATUS_OF_ITEM_SHOW',status:false});
    }
    function changeIndexOfMainPhoto(index) {
        props.dispatch({type:'CHANGE_INDEX_OF_MODAL_PHOTO',newIndex:index});
        props.dispatch({type:'CHANGE_STATUS_OF_MODAL_PHOTO',status:true});
    }
    return(
        <div className={MacPageStyle.modalWindow}>
            {props.data.statusOfModalWindow ? <ModalPhoto
                wayOfPhoto={props.data.imgData[props.data.idItemsShow].photo[props.data.indexOfModalPhoto].src}
                dispatch={props.dispatch}/> : ''}
            <div>
                <b className={MacPageStyle.name}>{props.data.imgData[props.data.idItemsShow].name}</b>
                <b className={MacPageStyle.end} onClick={hide}> X </b>
            </div>
            <div className={MacPageStyle.containerOfPhoto}>
                <div className={MacPageStyle.photo}>
                    <img src={props.data.imgData[props.data.idItemsShow].photo[0].src} alt='photo'
                         onClick={()=>{changeIndexOfMainPhoto(0)}}/>
                </div>
                <div className={MacPageStyle.photo}>
                    <img src={props.data.imgData[props.data.idItemsShow].photo[1].src}  alt='photo'
                         onClick={()=>{changeIndexOfMainPhoto(1)}}/>
                </div>
                <div className={MacPageStyle.photo}>
                    <img src={props.data.imgData[props.data.idItemsShow].photo[2].src}  alt='photo'
                         onClick={()=>{changeIndexOfMainPhoto(2)}}/>
                </div>
            </div>
            <div className={MacPageStyle.features}>
                <h2>Features:</h2>
                <b>Screen: {" " + props.data.imgData[props.data.idItemsShow].characters.screen }</b>
                <br/>
                <b>processor: {" " + props.data.imgData[props.data.idItemsShow].characters.processor }</b>
                <br/>
                <b>RAM: {" " + props.data.imgData[props.data.idItemsShow].characters.RAM }</b>
                <br/>
                <b>SSD: {" " + props.data.imgData[props.data.idItemsShow].characters.SSD }</b>
                <br/>
                <b>videoCard: {" " + props.data.imgData[props.data.idItemsShow].characters.videoCard }</b>
                <br/>
                <b>remainder: {" " + props.data.imgData[props.data.idItemsShow].characters.remainder }</b>
            </div>
        </div>
    );
}
export default MacPage;