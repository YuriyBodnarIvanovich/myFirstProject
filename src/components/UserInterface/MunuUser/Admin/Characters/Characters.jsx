import React, {useState} from "react";
import Style from './Characters.module.css';
import Photos from "../Photos/Photos";

const Characters = () =>{

    const [next,showNext] = useState(false);


    if(next){
        return (
            <Photos/>
        )
    }else {
        return(
            <div className={Style.characters_container}>
                <div className={Style.container_of_inputs}>
                    <input  placeholder={"Screen"}/>
                    <input  placeholder={"Processor"}/>
                    <input  placeholder={"RAM"}/>
                    <input  placeholder={"Internal Memory"}/>
                    <input  placeholder={"Basic Camera"}/>
                    <input  placeholder={"Front Camera"}/>
                    <input  placeholder={"SSD"}/>
                    <input  placeholder={"Video Card"}/>
                    <input  placeholder={"Bluetooth"}/>
                    <input  placeholder={"Notification"}/>
                    <input  placeholder={"Remainder"}/>
                    <input  placeholder={"Operation System"}/>
                </div>
                <button onClick={()=>{showNext(true)}}>Next</button>

            </div>
        )
    }

}

export default Characters;
