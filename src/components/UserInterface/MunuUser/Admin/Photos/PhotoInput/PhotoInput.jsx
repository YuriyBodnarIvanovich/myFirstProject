import React from "react";
import Style from './PhotoInput.module.css';
import {useDispatch, useSelector} from "react-redux";

const PhotoInput  = (props) =>{
    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();

    function inputPhoto(indexOfPhoto,value){
        const newElement = JSON.parse(JSON.stringify(data.newElement));
        newElement[0].photo[props.indexOfColor].imgSrc[indexOfPhoto] = value;
        dispatch({type:"INPUT_DATA_TO_ELEMENT",newData:newElement});
    }

    function savePhoto(){
        props.setIndexOfColor(props.indexOfColor + 1);
        props.setStatusOfInput(false)
    }

    function next(){
        const newElement = JSON.parse(JSON.stringify(data.newElement));
        newElement[0].photo.pop();
        dispatch({type:"INPUT_DATA_TO_ELEMENT",newData:newElement});
        props.setNextStatus(true)
    }

    return(
     <div>
         <div className={Style.content}>
             <input placeholder={"Input photo"} value={data.newElement[0].photo[props.indexOfColor].imgSrc[0]}
                    onChange={((event) =>{inputPhoto(0,event.target.value)} )}/>
             <input placeholder={"Input photo"} value={data.newElement[0].photo[props.indexOfColor].imgSrc[1]}
                    onChange={((event) =>{inputPhoto(1,event.target.value)} )}/>
             <input placeholder={"Input photo"} value={data.newElement[0].photo[props.indexOfColor].imgSrc[2]}
                    onChange={((event) =>{inputPhoto(2,event.target.value)} )}/>
         </div>
         <div className={Style.next}>
             <button onClick={()=>{savePhoto()}}>Set Photos</button>
             <button onClick={()=>{next()}}>Next</button>
         </div>
     </div>
    )
}

export default PhotoInput;
