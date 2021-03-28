import React, {useState} from "react";
import Style from './Admin.module.css';
import {useDispatch, useSelector} from "react-redux";
import ChooseType from "./AddProduct/ChooseType/ChooseType";
import CatalogOfProduct from "./DeleteProduct/CatalogOfProduct/CatalogOfProduct";
import GrantAccess from "./GrantAccess/GrantAccess";

const Admin = (props) =>{


    const dataApple = useSelector(state=>state.ApplePage);


    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();


    const [addProduct, addProductStatusSet] = useState(false);
    const [deleteProduct, deleteProductStatusSet] = useState(false);
    const [grantAccess, grantAccessStusSet] = useState(false);

    function add_Product(){
        document.getElementById("chooseFunc").style.display = "none";
        addProductStatusSet(true);
    }

    function delete_Product(){
        document.getElementById("chooseFunc").style.display = "none";
        deleteProductStatusSet(true);
    }

    function grant_Access(){
        document.getElementById("chooseFunc").style.display = "none";
        grantAccessStusSet(true);
    }


    return(
        <div className={Style.container}>
            <div className={`${dataApple.darkTheme ? Style.container_of_AdminPage_dark : Style.container_of_AdminPage}`}>
                <div className={Style.top}>
                    <div className={Style.exit}>
                        <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfAdmin(false)}}/>
                    </div>
                </div>
                <div id={"chooseFunc"} className={Style.center}>
                    <div className={Style.container_for_button}>
                        <button onClick={()=>{add_Product()}}>Add Product</button>
                        <button onClick={()=>{delete_Product()}}>Delete Product</button>
                        <button onClick={()=>{grant_Access()}}>Grant access</button>
                    </div>
                </div>
                {addProduct ? <ChooseType  data={data} dispatch={dispatch}/> : null }
                {deleteProduct ? <CatalogOfProduct/> : null}
                {grantAccess ? <GrantAccess/> : null}
            </div>
        </div>
    )
}

export default Admin;
