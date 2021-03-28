import React, {useState} from "react";
import Style from './CatalogOfProduct.module.css';
import {useDispatch, useSelector} from "react-redux";
import ItemOfProductIphone from "../../../../../CatalogOfGoods/ItemOfProductIphone/ItemOfProductIphone";
import ItemOfMac from "../../../../../CatalogOfGoods/ItemOfProductionMac/ItemOfMac";


const CatalogOfProduct = () =>{
    const dataApple = useSelector(state=>state.ApplePage);

    const dataIphone = useSelector(state =>state.IphonePage);
    const dataMac = useSelector(state =>state.macPage);
    const dispatch = useDispatch();

    const [showMenu, setStatusOfMenu] = useState(true);
    const [typeOfMenu, setTypeOfMenu] = useState('IPhone');

    const catalogOfIphone  = dataIphone.iPhones.map((item)=>{
        return <ItemOfProductIphone
            name={item.name} photo={item.photo[0].imgSrc[0]} character={item.character} price={item.price}
            photoData={item.photo} statusOfDelete={true}/>
    })


    const catalogOfMac  = dataMac.imgData.map((item)=>{
        return <ItemOfMac name={item.name} photo={item.photo[0]} character={item.characters} price={item.price}
                          catalogOfPhoto={item.photo} statusOfDelete={true}/>
    })

    const ErrorPage = () =>{
        return(
            <div className={Style.none_product}>
                <h1>Sorry....</h1>
            </div>
        )
    }

    const ShowIphone = () =>{
        return(
            catalogOfIphone.length !== 0  ?
                <div className={Style.catalog}>
                    {typeOfMenu === 'IPhone' ? catalogOfIphone : null}
                </div>
                :
                <ErrorPage/>
        )
    }

    const ShowMac = () =>{
        return(
            catalogOfIphone.length !== 0  ?
                <div className={Style.catalog}>
                    {typeOfMenu === 'Mac' ? catalogOfMac : null}
                </div>
                :
                <ErrorPage/>
        )
    }


    return(
        <div className={Style.container}>
            <div className={Style.menu_container}>
                <button onClick={()=>{setStatusOfMenu(!showMenu)}}>{typeOfMenu}</button>
                {
                    showMenu ?
                        <div className={`${dataApple.darkTheme ? Style.menu_dark : Style.menu}`}>
                            <p onClick={()=>{setTypeOfMenu('IPhone')}}>IPhone</p>
                            <p onClick={()=>{setTypeOfMenu('Mac')}}>Mac</p>
                        </div>
                        : null
                }
            </div>
            <div className={Style.catalog_container}>
                {
                    typeOfMenu === 'IPhone' ? <ShowIphone/> : null
                }
                {
                    typeOfMenu === 'Mac' ? <ShowMac/> : null
                }

            </div>




        </div>
    )
}

export default CatalogOfProduct;
