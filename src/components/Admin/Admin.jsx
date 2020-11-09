import React from "react";
import AdminStyle from './Admin.module.css';
import {useDispatch, useSelector} from "react-redux";
import AdditionalButtonOfColor from "./ButtonOfColor/AdditionalButtonOfColor";
import ButtonOfOptions from "./ButtonOfOptions/ButtonOfOptions";
import ContentDemo from "./ContentDemo/ContentDemo";
import axios from "axios";


const Admin = () =>{
    const dataAdmin = useSelector(state=>state.AdminPage);
    const dataIPhones = useSelector(state=>state.IphonePage);
    const dispatch = useDispatch();
    const dataOfColors = dataAdmin.adminColorContainer.map((item,index)=>{
        return <AdditionalButtonOfColor status={item.status} color={item.color}
                                        dispatch={dispatch} data={dataAdmin}
                                        photo={item.photo}
                                        indexOfColor={index}/>
    });
    const dataOfOptions = dataAdmin.optionsContainerField.map((item)=>{
          return <ButtonOfOptions name={item.name} value={item.value} kindOfOfOptions={item.kindOfOfOptions}
                                  dataAdmin={dataAdmin} dispatch={dispatch} parentsField={item.parentsField}/>
    });

    const fillName = (value) =>{
        let catalog = JSON.parse(JSON.stringify(dataAdmin.newElement));
        catalog[0].name = value;
        dispatch({type:'INPUT_DATA_TO_ELEMENT',newData:catalog});
        if(catalog[0].name.length > 0){
            dispatch({type:'SHOW_NAME',status:true});
        }else {
            dispatch({type:'SHOW_NAME',status:false});
        }
    }
    const fillPrice = (value) =>{
        let catalog = JSON.parse(JSON.stringify(dataAdmin.newElement));
        catalog[0].price = value;
        dispatch({type:'INPUT_DATA_TO_ELEMENT',newData:catalog});
    }
    const addNewItem = () =>{
        axios.post('http://localhost:3001/AddItemToBD',
            {item: dataAdmin.newElement[0]}).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    return(
        <div className={AdminStyle.containerOfContent}>
            <div className={AdminStyle.content}>
                <div>
                    <div className={AdminStyle.containerOfName}>
                        <input id="name" placeholder={'Input name of product'} value={dataAdmin.newElement[0].name} onChange={(event => {
                            fillName(event.target.value)
                        })}/>
                    </div>
                    <div className={AdminStyle.containerOfName}>
                        <input id="price" placeholder={'Input price of product'} value={dataAdmin.newElement[0].price} onChange={(event => {
                            fillPrice(event.target.value)
                        })} />
                    </div>
                    <div className={AdminStyle.containerOfColor}>
                        <button className={AdminStyle.buttonInputColor}
                                onClick={()=>{dispatch({type:'CHANGE_STATUS_OF_ITEMS_COLOR',
                                    status: !dataAdmin.statusOfNewItemsOfColor})
                                }}> Add Color</button>
                        {dataAdmin.statusOfNewItemsOfColor ?
                            dataOfColors:
                            null
                        }
                    </div>
                    <div className={AdminStyle.containerOfOptions}>
                        <button className={AdminStyle.buttonInputOptions} onClick={()=>{
                            dispatch({type:'SHOW_OPTIONS',status: !dataAdmin.showCatalogOfOptions})
                        }}>Input Options:</button>
                        {dataAdmin.showCatalogOfOptions ? dataOfOptions : null}
                    </div>
                    <button className={AdminStyle.buttonInputOptions} style={{marginTop:"25px"}}
                    onClick={addNewItem}>Add Item</button>
                </div>
                <div>
                    <ContentDemo />
                </div>
            </div>

        </div>
    )
}
export default Admin;
