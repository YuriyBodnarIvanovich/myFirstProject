import React, {useState} from "react";
import Style from './ColorInput.module.css';
import {useDispatch, useSelector} from "react-redux";

const ColorInput = (props) =>{

    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();

    const [color,setColor] = useState('');

    function saveColor(){
                const catalog = JSON.parse(JSON.stringify(data.adminColorContainer));
                catalog.push(color);
                dispatch({type:"ADD_ELEMENT_TO_COLOR_ARRAY",array:catalog});
                console.log(data.adminColorContainer);

                const newElement = JSON.parse(JSON.stringify(data.newElement));
                newElement[0].photo.push(data.photo[0]);

                newElement[0].photo[props.indexOfColor].color = color;
                dispatch({type:"INPUT_DATA_TO_ELEMENT",newData:newElement});
                console.log(data.newElement[0])
                props.setStatusOfInput(true)
    }

    return(
        <div className={Style.name_container}>
            <input placeholder={"Input color"} value={color} onChange={(event => {setColor(event.target.value)})}/>
            <button onClick={()=>{saveColor()}}>Next</button>
        </div>
    )
}

export default ColorInput;
