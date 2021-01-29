import React, {useState} from "react";
import ItemsStyle from './IphoneItems.module.css'
const IphoneItems = (props) =>{
    // function changeIndex() {
    //     let number = Number(props.index);
    //     props.dispatch({type:'CHANGE_MAIN_INDEX',index: number});
    // }

    const [srcMainPhoto, setCount] = useState(props.data.iPhones[props.index].photo[0].imgSrc[0]);

    function changeImage(){
        setCount(props.data.iPhones[props.index].photo[0].imgSrc[1])
    }
    function changeImageAgain(){
        setCount(props.data.iPhones[props.index].photo[0].imgSrc[0])
    }
    function openItem(){
        props.dispatch({type:'OPEN_IPHONE',status:true});
        props.dispatch({type:'INDEX_OF_IPHONE',index:props.index});
        props.dispatch({type:'CHANGE_MAIN_INDEX',index: props.index});
    }

    return(
        <div className={ItemsStyle.container}>
            <img src={srcMainPhoto} alt={''} onMouseOver={changeImage} onMouseOut={changeImageAgain} onClick={openItem}/>
            <div>
                <b>{props.name}</b>
            </div>
        </div>
    );
}
export default IphoneItems;
