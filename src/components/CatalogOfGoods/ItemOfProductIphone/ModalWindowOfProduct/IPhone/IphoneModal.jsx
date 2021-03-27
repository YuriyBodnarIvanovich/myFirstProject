import React, {useState} from "react";
import Style from './IphoneModal.module.css';
import ImgContent from "./ImgContent/ImgContent";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const IphoneModal = (props) =>{

    const [indexOfColor,setIndexOfColor] = useState(0);
    const [colorOfProduct, setColorOfProduct] = useState(props.photoData[0].color);
    const data = useSelector(state=>state.AdminPage);
    const dataUser = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();

    function setColor(color,index){
        setColorOfProduct(color);
        setIndexOfColor(index);
        console.log('Colors:');
        console.log(index + ",   " + color);
    }

    const colorData = props.photoData.map((item,index)=>{
        return(
            <div className={`${dataUser.darkTheme ? Style.color_item_dark : Style.color_item}`} style={{backgroundColor: `${item.color}`}} onClick={()=>(setColor(item.color,index))}>

            </div>
        )
    })

    function addToCart() {
        axios.post('http://localhost:3001/addToCart', {
            name:props.name,
            color:colorOfProduct,
            price:props.price,
        }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                console.log(response);
                dispatch({type:"INPUT_DATA_TO_ELEMENT",newData:data.emptyElement});
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function addItem(){
        axios.post('http://localhost:3001/AddItemToBD', {
            item: props.itemData,
            author:dataUser.Users[0].idUser
        }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div className={`${dataUser.darkTheme ? Style.container_dark : Style.container}`}>
            <div className={`${dataUser.darkTheme ? Style.container_of_item_dark : Style.container_of_item}`}>
                <div className={Style.exit}>
                    {dataUser.darkTheme ?  <b style={{color:"white"}} onClick={()=>{props.setStatusOfItem(false)}}>×</b>
                                           :
                        <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfItem(false)}}/>}
                </div>
                {dataUser.darkTheme ?  <h1 style={{color:"white"}}>{props.name}</h1> :  <h1>{props.name}</h1>}
                <div className={Style.container_for_content}>
                    <div className={Style.left_content}>
                        <div className={Style.container_of_colors}>
                            {colorData}
                        </div>
                        <div>
                            {dataUser.darkTheme ?
                                <p style={{color:"white"}}><b>Price:</b> <em style={{color:"white"}}>{props.price + " ₴"}</em></p>
                                :
                                <p><b>Price:</b> <em>{props.price + " ₴"}</em></p>
                            }

                            {dataUser.darkTheme ? <h3 style={{color:"white"}}>Characters:</h3> : <h3>Characters:</h3>}
                            {props.CharactersIphoneData}
                        </div>
                    </div>
                    <div className={Style.container_of_photo}>
                        <ImgContent photoData={props.photoData} indexOfColor={indexOfColor}/>
                    </div>
                </div>
                <div className={Style.for_button}>
                    {
                        props.statusOfOpen === 'goods' ?  <button onClick={()=>{addToCart()}}>Buy</button>
                            :
                            <button onClick={()=>{addItem()}}>Add Item</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default IphoneModal;
