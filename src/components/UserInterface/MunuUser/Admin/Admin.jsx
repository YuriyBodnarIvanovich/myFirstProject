import React, {useState} from "react";
import Style from './Admin.module.css';
import {useDispatch, useSelector} from "react-redux";
import FillName from "./AddProduct/FillName/FillName";
import Photos from "./AddProduct/Photos/Photos";
import Demo from "./AddProduct/Demo/Demo";
import ChooseType from "./AddProduct/ChooseType/ChooseType";
import CatalogOfProduct from "./DeleteProduct/CatalogOfProduct/CatalogOfProduct";

const Admin = (props) =>{

    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();


    const [addProduct, addProductStatusSet] = useState(false);
    const [deleteProduct, deleteProductStatusSet] = useState(false);

    function add_Product(){
        document.getElementById("chooseFunc").style.display = "none";
        addProductStatusSet(true);
    }

    function delete_Product(){
        document.getElementById("chooseFunc").style.display = "none";
        deleteProductStatusSet(true);
    }



    return(
        <div className={Style.container}>
            <div className={Style.container_of_AdminPage}>
                <div className={Style.top}>
                    <div className={Style.exit}>
                        <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfAdmin(false)}}/>
                    </div>
                </div>
                <div id={"chooseFunc"} className={Style.center}>
                    <div className={Style.container_for_button}>
                        <button onClick={()=>{add_Product()}}>Add Product</button>
                        <button onClick={()=>{delete_Product()}}>Delete Product</button>
                    </div>
                </div>
                {addProduct ? <ChooseType  data={data} dispatch={dispatch}/> : null }
                {deleteProduct ? <CatalogOfProduct/> : null}
            </div>
        </div>
    )
}

export default Admin;
