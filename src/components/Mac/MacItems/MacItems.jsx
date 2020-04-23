import React from 'react';
import MacItemsStyle from './MacItem.module.css';
import MacPage from "./MacPage/MacPage";
const ItemMac = (props) =>{
    return(
        <div className={MacItemsStyle.container}>
            <div>
                <img  className={MacItemsStyle.ImgItems} src={props.imgSrc}/>
            </div>
            <div className={MacItemsStyle.information}>
                <b>{props.name}</b>
                <h3 className={MacItemsStyle.price}>{props.price}</h3>
            </div>
            <MacPage  imgSrc={props.imgSrc} key={props.id}
                      name={props.name} price={props.price}
                      onePhoto={props.onePhoto}
                      twoPhoto={props.twoPhoto}
                      characteristics={props.characteristics}/>
        </div>
    );
};

export default ItemMac;
