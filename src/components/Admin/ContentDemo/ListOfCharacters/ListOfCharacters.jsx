import React from "react";
import CharactersStyle from './ListOfCharacters.module.css';

const ListOfCharacters = (props) =>{
    const showItem = () =>{
       return <li className={CharactersStyle.characterItems}><p><b>{props.name + ":  "}</b> {props.value}</p></li>
    }
    const hideValue = () =>{
        return null
    }

    if(props.value){
        return(
            showItem()
        )
    }else {
        return(
            hideValue()
        )
    }

}
export default ListOfCharacters;
