import React from "react";
import OptionsStyle from './ButtonOfOptions.module.css';

const ButtonOfOptions = (props) =>{
    const fillValue = (value) =>{
        let item = JSON.parse(JSON.stringify(props.dataAdmin.newElement));
        if(props.parentsField === ''){
            item[0].character[props.kindOfOfOptions] = value;
        }
        else {
            item[0].character[props.parentsField][props.kindOfOfOptions] = value;
        }
        props.dispatch({type:'INPUT_DATA_TO_ELEMENT',newData:item});
    }
    return(
        <div className={OptionsStyle.container}>
            <p>{props.name}</p>
            {
                props.parentsField === '' ?
                    <input id="option" placeholder={'Input: '}
                           value={props.dataAdmin.newElement[0].character[props.kindOfOfOptions]}
                            onChange={(event => {fillValue(event.target.value)})}/>
                    :
                    <input id="option" placeholder={'Input: '}
                           value={props.dataAdmin.newElement[0].character[props.parentsField][props.kindOfOfOptions]}
                           onChange={(event => {fillValue(event.target.value)})}/>
            }
        </div>
    )
}

export default ButtonOfOptions;
