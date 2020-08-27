import React from "react";
import MacPageStyle from './MacPage.module.css';

const MacPage = (props) =>{

    function showDescription(){
        props.dispatch({type:'CHANGE_STATUS_DESCRIPTION',status:true});
    }
    function showRequest(){
        props.dispatch({type:'CHANGE_STATUS_DESCRIPTION',status:false});
    }

    function changeIndexOfMainPhoto(newIndex){
        props.dispatch({type:'CHANGE_INDEX_OF_MAIN_PHOTO',index:newIndex})
    }

    function showList(){
        props.dispatch({type:'OPEN_MACBOOK',status:false});
    }

    return(
        <div>
            <div className={MacPageStyle.content}>
                <div className={MacPageStyle.characters}>
                    <div>
                        <b className={MacPageStyle.name}>{props.data.imgData[props.data.idItemsShow].name}</b>
                    </div>
                    <div className={MacPageStyle.priceContainer}>
                        <b className={MacPageStyle.title}>Price:</b>
                        <b className={MacPageStyle.price}>{props.data.imgData[props.data.idItemsShow].price}</b>
                    </div>
                    <p className={MacPageStyle.charactersTitle}>Characters:</p>
                    <div className={MacPageStyle.characterItems}>
                        <ul>
                            <li><p><b>Screen:</b>{" " + props.data.imgData[props.data.idItemsShow].characters.screen}</p></li>
                            <li><p><b>Processor:</b>{" " + props.data.imgData[props.data.idItemsShow].characters.processor}</p></li>
                            <li><p><b>RAM:</b>{" " + props.data.imgData[props.data.idItemsShow].characters.RAM}</p></li>
                            <li><p><b>SSD:</b>{" " + props.data.imgData[props.data.idItemsShow].characters.SSD}</p></li>
                            <li><p><b>VideoCard:</b>{" " + props.data.imgData[props.data.idItemsShow].characters.videoCard}</p></li>
                            <li><p><b>Remainder:</b>{" " + props.data.imgData[props.data.idItemsShow].characters.remainder}</p></li>
                        </ul>
                    </div>
                    <div>
                        <div className={MacPageStyle.checkDescription}>
                            <b onClick={showDescription}>Description</b>
                            <b onClick={showRequest}>Request</b>
                        </div>
                        {
                            props.data.descriptionStatus ?
                                <p>
                                    {props.data.description}
                                </p>
                                :
                                <p>
                                    Оставьте первый отзыв! Написать отзыв
                                </p>
                        }
                    </div>
                </div>
                <div className={MacPageStyle.photo}>
                    <div className={MacPageStyle.mainPhoto}>
                        <img src={props.data.imgData[props.data.idItemsShow].photo[props.data.indexOfMainPhoto].src} alt={''}/>
                    </div>
                    <div className={MacPageStyle.catalogPhotoOver}>
                        <div className={MacPageStyle.catalogPhoto}>
                            <img src={props.data.imgData[props.data.idItemsShow].photo[0].src} alt={''}
                                 onClick={()=>{changeIndexOfMainPhoto(0)}}/>
                            <img src={props.data.imgData[props.data.idItemsShow].photo[1].src} alt={''}
                                 onClick={()=>{changeIndexOfMainPhoto(1)}}/>
                            <img src={props.data.imgData[props.data.idItemsShow].photo[2].src} alt={''}
                                 onClick={()=>{changeIndexOfMainPhoto(2)}}/>
                        </div>
                    </div>

                </div>

            </div>
            <button className={MacPageStyle.btn} onClick={showList}>last</button>
        </div>
    )
}
export default MacPage;