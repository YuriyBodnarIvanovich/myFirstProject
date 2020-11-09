import React, {useState} from "react";
import InputPhotoStyle from './InputPhoto.module.css';

const InputPhoto = (props) =>{
    const [indexOfPhoto,setIndexOfPhoto] = useState(props.index);
    function addPhoto(){
        let catalog = JSON.parse(JSON.stringify(props.data.adminColorContainer));
        catalog[props.indexOfColor].photo[props.indexOfInputField].status = true;
        catalog[props.indexOfColor].photo.push(props.data.newItemOfColorContainer.photo[0])
        props.dispatch({type:'ADD_ELEMENT_TO_COLOR_ARRAY',array:catalog});

        let itemOfProduct = JSON.parse(JSON.stringify(props.dataAdmin.newElement));
        itemOfProduct[0].photo[props.indexOfColor].imgSrc.push(props.dataAdmin.photo[0].imgSrc[0]);
        props.dispatch({type:'INPUT_DATA_TO_ELEMENT',newData:itemOfProduct});
        console.log(props.dataAdmin.newElement);
    }

    function readField(text){
        let catalog = JSON.parse(JSON.stringify(props.data.adminColorContainer));
        catalog[props.indexOfColor].photo[props.indexOfInputField].value = text;
        props.dispatch({type:'ADD_ELEMENT_TO_COLOR_ARRAY',array:catalog});

        let itemOfProduct = JSON.parse(JSON.stringify(props.dataAdmin.newElement));
        itemOfProduct[0].photo[props.indexOfColor].imgSrc[props.indexOfInputField].src = text;
        props.dispatch({type:'INPUT_DATA_TO_ELEMENT',newData:itemOfProduct});
        console.log(itemOfProduct);
    }

    return(
        <div>
            {
                props.status ?
                    <p>Done</p>
                    :
                    <div className={InputPhotoStyle.inputContainer}>
                        {/*<b>{props.indexOfInput}</b>*/}
                        <input id="name" placeholder={'Input photo: '}
                               value={props.data.adminColorContainer[props.indexOfColor].photo[props.indexOfInputField].value}
                               onChange={(event => {readField(event.target.value)})} />
                        <button onClick={addPhoto}>OK</button>
                    </div>
            }
        </div>

    )
}

export default InputPhoto;
