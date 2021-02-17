import React from "react";
import Style from './CatalogOfGoods.module.css';
import MainNotice from "../Apple/Main_notice/Main_Notice";
import Goods from "./Goods/Goods";


const CatalogOfGoods = () =>{
    return(
        <div>
            <MainNotice/>
            <Goods/>

        </div>
    )
}


export default CatalogOfGoods;
