import React from "react";
import MacPageStyle from './MacPage.module.css';
import MacItems from "../MacItems";
import Mac from "../../Mac";

const MacPage = (props) =>{
    return(
        <div>
            <button className={MacPageStyle.btn}>show</button>
            <div className={MacPageStyle.modal}>
                <div className={MacPageStyle.modal__box}>
                   <div className={MacPageStyle.content}>
                       <div><h2>{props.name}</h2></div>
                        <div className={MacPageStyle.img}>
                            <div>
                                <img src={props.imgSrc} alt={'MAc'}/>
                            </div>
                            <div>
                                <img src={props.onePhoto} alt={'MAc'}/>
                            </div>
                            <div>
                                <img src={props.twoPhoto} alt={'MAc'}/>
                            </div>
                        </div>
                       <div><h2>Characteristics</h2></div>
                       <div>
                           <b className={MacPageStyle.characteristics}>{props.characteristics}</b>
                       </div>
                       <div><h2>Price:   <b className={MacPageStyle.price}>{props.price + "₴"}</b></h2></div>
                   </div>
                </div>
            </div>
        </div>
    );
}
export default MacPage;