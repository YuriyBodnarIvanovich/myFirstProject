import React from 'react';
import MacItemsStyle from './MacItem.module.css';

const ItemMac = (props) =>{
    function show() {
        props.dispatch({type:'CHANGE_ID_OF_ITEM_SHOW',newId:props.number});
        props.dispatch({type:'CHANGE_STATUS_OF_ITEM_SHOW',status:true});
    }
    return(
        <div className={MacItemsStyle.container}>
            <div>
                <img  className={MacItemsStyle.ImgItems} src={props.photo[0].src}/>
            </div>
            <div className={MacItemsStyle.information}>
                <div className={MacItemsStyle.name}>
                    <b>{props.name}</b>
                </div>
                <div className={MacItemsStyle.price}>
                    <b className={MacItemsStyle.price}>{props.price}</b>
                </div>
            </div>
            <div>
                <button className={MacItemsStyle.show} onClick={show}>show</button>
            </div>
        </div>
    );
};

export default ItemMac;
