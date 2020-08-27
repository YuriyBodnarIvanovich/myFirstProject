import React, {useState} from 'react';
import MacItemsStyle from './MacItem.module.css';

const ItemMac = (props) =>{

    const [srcMainPhoto, setCount] = useState(props.photo[0].src);

    function show() {
        props.dispatch({type:'CHANGE_ID_OF_ITEM_SHOW',newId:props.number});
        props.dispatch({type:'CHANGE_STATUS_OF_ITEM_SHOW',status:true});
    }
    function changeImage(){
        setCount(props.photo[2].src)
    }
    function changeImageAgain(){
        setCount(props.photo[0].src)
    }
    function openModalWindow(){
        props.dispatch({type:'OPEN_MACBOOK',status:true});
        props.dispatch({type:'CHANGE_ID_OF_ITEM_SHOW',newId:props.number});
    }
    return(
        <div>
            <div className={MacItemsStyle.container}>
                <img src={srcMainPhoto} onMouseOver={changeImage} onMouseOut={changeImageAgain} onClick={openModalWindow} alt={'mac'}/>
                <div className={MacItemsStyle.name}>
                    <b>{props.name}</b>
                </div>
            </div>
        </div>
    );
};

export default ItemMac;
