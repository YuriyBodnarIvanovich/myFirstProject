import React, {useState} from 'react';
import MacItemsStyle from './MacItem.module.css';

const ItemMac = (props) =>{

    const [srcMainPhoto, setCount] = useState(props.photo[0]);

    function show() {
        props.dispatch({type:'CHANGE_ID_OF_ITEM_SHOW',newId:props.number});
        props.dispatch({type:'CHANGE_STATUS_OF_ITEM_SHOW',status:true});
    }
    function changeImage(){
        setCount(props.photo[props.photo.length-1])
    }
    function changeImageAgain(){
        setCount(props.photo[0])
    }
    function openModalWindow(){
        props.dispatch({type:'CHANGE_ID_OF_ITEM_SHOW',newId:props.number});
        props.dispatch({type:'OPEN_MACBOOK',status:true});

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
