import React from "react";
import ItemStyle from "./AdditionalButtonOfColor.module.css";
import AdminStyle from "../Admin.module.css";
import InputPhoto from "./InputPhoto/InputPhoto";

const AdditionalButtonOfColor = (props) =>{
    function addNewItem(){
      let catalog = JSON.parse(JSON.stringify(props.data.adminColorContainer));
      catalog[props.data.numberOfColor].color = props.data.newElement[0].photo[props.data.numberOfColor].color;
      catalog[props.data.numberOfColor].status = true;
      let newItemColor = JSON.parse(JSON.stringify(props.data.newItemOfColorContainer));
      newItemColor.index = catalog.length;
      catalog.push(newItemColor);
      let newItemToProductColor = JSON.parse(JSON.stringify(props.data.newElement));
      newItemToProductColor[0].photo.push(props.data.photo[0]);
      props.dispatch({type:'INPUT_DATA_TO_ELEMENT',newData:newItemToProductColor});
      props.dispatch({type:'FILL_VALUE_OF_COLOR',value:''});
      props.dispatch({type:'ADD_ELEMENT_TO_COLOR_ARRAY',array:catalog});
      props.dispatch({type:'CHANGE_NUMBER_OF_COLOR',value:props.data.numberOfColor + 1});
    }
    let catalogOfPhoto  = props.photo.map((item,index)=>{
       return <InputPhoto value={item.value} status={item.status} data={props.data}
                            indexOfColor={props.indexOfColor} indexOfInputField={index}
                            dataAdmin={props.data} dispatch={props.dispatch}/>
    });

    const fillColor = (value) =>{
        let item = JSON.parse(JSON.stringify(props.data.newElement));
        item[0].photo[props.data.numberOfColor].color = value;
        props.dispatch({type:'INPUT_DATA_TO_ELEMENT',newData:item});
    }
    return(
        <div className={ItemStyle.container}>
            {
                props.status ?
                    <div className={ItemStyle.containerForColorAndPhoto}>
                        <div className={ItemStyle.content} style={{backgroundColor:props.color}}>
                            <h4>{props.color}</h4>
                        </div>
                        <div className={ItemStyle.ContainerOfAddPhoto}>
                            {catalogOfPhoto}
                        </div>
                    </div>
                    :
                    <div className={ItemStyle.containerOfName}>
                        {/*<b>{props.index}</b>*/}
                        <div style={{padding: '20px'}}>
                            <input id="name" placeholder={'Input color: '}
                                   value={props.data.newElement[0].photo[props.indexOfColor].color}
                                   onChange={(event => {fillColor(event.target.value)})}
                            />
                        </div>
                        <div style={{padding:'5px', marginLeft:'10px'}}>
                            <button className={ItemStyle.buttonOK} onClick={addNewItem} >OK</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default AdditionalButtonOfColor;
