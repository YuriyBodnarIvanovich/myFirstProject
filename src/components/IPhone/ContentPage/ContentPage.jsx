import React from "react";
import ButtonColor from "../Button/ButtonChangeColor";
import {useSelector} from "react-redux";
import axios from "axios";
import ContentPageStyle from './ContentPage.module.css';

const ContentPage = (props) =>{
    const dataApple = useSelector(state=>state.ApplePage);

    const colorArray = props.data.iPhones[props.data.indexOfMainArray].photo.map((element,index)=>
        <ButtonColor color={element.color} id={index} data={props.data} dispatch={props.dispatch} way='iPhone'/>);

    function addToCart() {
        let Users = JSON.parse(JSON.stringify(dataApple.Users));
        let newItem = JSON.parse(JSON.stringify(dataApple.newItemsOfCart));
        newItem[0].name = props.data.iPhones[props.data.indexOfMainArray].name;
        newItem[0].color = props.data.iPhones[props.data.indexOfMainArray].mainColor;
        newItem[0].price = props.data.iPhones[props.data.indexOfMainArray].price;
        Users[dataApple.indexOfUsers].CartList.push(newItem[0]);
        props.dispatch({type:'CHANGE_ARRAY_OF_USERS',newArray:Users});

        axios.post('http://localhost:3001/addToCart', {
            name:props.data.iPhones[props.data.indexOfMainArray].name,
            color:props.data.iPhones[props.data.indexOfMainArray].mainColor,
            price:props.data.iPhones[props.data.indexOfMainArray].price,
        }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    function showDescription(){
        props.dispatch({type:'DESCRIPTION_STATUS',status:true});
    }
    function showRequest(){
        props.dispatch({type:'DESCRIPTION_STATUS',status:false});
    }
    function showList(){
        props.dispatch({type:'OPEN_IPHONE',status:false});
    }

    function changeMainPhoto(number){
        props.dispatch({type:'CHANGE_NUMBER_OF_PHOTO',number:number})
    }
    return(
        <div>
            <div className={ContentPageStyle.content}>
                <div className={ContentPageStyle.characters}>
                    <div>
                        <b className={ContentPageStyle.name}>{props.data.iPhones[props.data.indexOfMainArray].name}</b>
                    </div>
                    <div className={ContentPageStyle.forColors}>
                        {colorArray}
                    </div>
                    <div className={ContentPageStyle.priceContainer}>
                        <b className={ContentPageStyle.title}>Price:</b>
                        <b className={ContentPageStyle.price}>{props.data.iPhones[props.data.indexOfMainArray].price}</b>
                    </div>
                    <p className={ContentPageStyle.charactersTitle}>Characters:</p>
                    <div className={ContentPageStyle.characterItems}>
                        <ul>
                            <li><p><b>Screen:</b>{" " + props.data.iPhones[props.data.indexOfMainArray].character.screen}</p></li>
                            <li><p><b>Processor:</b>{" " + props.data.iPhones[props.data.indexOfMainArray].character.processor}</p></li>
                            <li><p><b>Front Camera:</b>{" " + props.data.iPhones[props.data.indexOfMainArray].character.camera.frontCamera}</p></li>
                            <li><p><b>Basic Camera:</b>{" " + props.data.iPhones[props.data.indexOfMainArray].character.camera.basicCamera}</p></li>
                            <li><p><b>Internal Memory:</b>{" " + props.data.iPhones[props.data.indexOfMainArray].character.operatingSystem}</p></li>
                            <li><p><b>RAM:</b>{" " + props.data.iPhones[props.data.indexOfMainArray].character.RAM}</p></li>
                            <li><p><b>Remainder:</b>{" " + props.data.iPhones[props.data.indexOfMainArray].character.remainder}</p></li>
                        </ul>
                    </div>
                    <div>
                        <button className={ContentPageStyle.addToCart}>Add to Cart</button>
                    </div>
                    <div>
                        <div className={ContentPageStyle.checkDescription}>
                            <b onClick={showDescription}>Description</b>
                            <b onClick={showRequest}>Request</b>
                        </div>
                        {
                            props.data.descriptionStatus ?
                                <p>
                                    {props.data.description}
                                </p>
                                :
                                <p>
                                    Оставьте первый отзыв! Написать отзыв
                                </p>
                        }
                    </div>
                </div>
                <div className={ContentPageStyle.photo}>
                    <div className={ContentPageStyle.mainPhoto}>
                        <img src={props.data.iPhones[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[props.data.numberOfPhoto].src} alt={''}/>
                    </div>
                    <div className={ContentPageStyle.catalogPhotoOver}>
                        <div className={ContentPageStyle.catalogPhoto}>
                            <img src={props.data.iPhones[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[0].src}
                                 onClick={()=>changeMainPhoto(0)} alt={''}/>
                            <img src={props.data.iPhones[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[1].src}
                                 onClick={()=>changeMainPhoto(1)} alt={''}/>
                            <img src={props.data.iPhones[props.data.indexOfMainArray].photo[props.data.indexOfColor].imgSrc[2].src}
                                 onClick={()=>changeMainPhoto(2)} alt={''}/>
                        </div>
                    </div>

                </div>
            </div>
            <button className={ContentPageStyle.btn} onClick={showList}>last</button>
        </div>
    )
}
export default ContentPage;