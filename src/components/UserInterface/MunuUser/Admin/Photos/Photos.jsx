import React, {useState} from "react";
import Style from './Photos.module.css';
import {useDispatch, useSelector} from "react-redux";
import ColorInput from "./ColorInput/ColorInput";
import PhotoInput from "./PhotoInput/PhotoInput";
import Demo from "../Demo/Demo";


const Photos = () =>{

    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();

    const [nextStatus,setNextStatus] = useState(false);
    const [inputPhotoStatus, setStatusOfInput]  = useState(false);
    const [indexOfColor,setIndexOfColor]  =  useState(0);


    if(nextStatus){

        return (
            <div>
                <Demo kindOfProduct={data.newElement[0].character.KindOfProduct}/>
            </div>
        )
    }else{
        if(inputPhotoStatus){
                return (
                    <PhotoInput setStatusOfInput={setStatusOfInput} inputPhotoStatus={inputPhotoStatus}
                                setIndexOfColor={setIndexOfColor} indexOfColor={indexOfColor}
                                setNextStatus={setNextStatus}/>
                )

        }else {
            return (
                <ColorInput setStatusOfInput={setStatusOfInput} inputPhotoStatus={inputPhotoStatus}
                            setIndexOfColor={setIndexOfColor} indexOfColor={indexOfColor}/>
            )
        }
    }

}

export default Photos
