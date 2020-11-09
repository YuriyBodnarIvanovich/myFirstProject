import React from "react";
import ContentDemoStyle from './ContentDemo.module.css';
import {useDispatch, useSelector} from "react-redux";
import ListOfCharacters from "./ListOfCharacters/ListOfCharacters";
import ButtonColor from "./ColorButton/ButtonColor";


const ContentDemo = () =>{
    const dataAdmin = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();
    const charactersList  = dataAdmin.optionsContainerField.map((item)=>{
        if(item.parentsField === ''){
           return <ListOfCharacters name={item.name} value={dataAdmin.newElement[0].character[item.kindOfOfOptions]}/>
        }else {
            return <ListOfCharacters name={item.name} value={dataAdmin.newElement[0].character[item.parentsField][item.kindOfOfOptions]}/>
        }
    });
    const colorsButton = dataAdmin.newElement[0].photo.map((item,index)=>{
        return <ButtonColor color={item.color} indexOfColor={index} dispatch={dispatch}/>
    });

    const photoList = dataAdmin.newElement[0].photo[dataAdmin.colorActive].imgSrc.filter(photo=>photo.src !=='').map((item)=>{
        return(<img src={item.src}/>)
    })

    return(
        <div className={ContentDemoStyle.container}>
            <div className={ContentDemoStyle.content}>
                {dataAdmin.showName ? <h3>{dataAdmin.newElement[0].name}</h3> : <h3>Name</h3>}
                <div className={ContentDemoStyle.forColors}>
                    {colorsButton}
                </div>
                <h3>Price: <b style={{color:"green"}}> {dataAdmin.newElement[0].price}</b></h3>
                <p className={ContentDemoStyle.charactersTitle}>Characters:</p>
                <ul>
                    {charactersList}
                </ul>
            </div>
            <div className={ContentDemoStyle.imgContent}>
                <div className={ContentDemoStyle.photoContainer}>
                    <div className={ContentDemoStyle.mainPhoto}>
                        <img src={dataAdmin.newElement[0].photo[dataAdmin.colorActive].imgSrc[0].src} style={{width:"100%"}} />
                    </div>
                    <div className={ContentDemoStyle.catalogPhoto}>
                        {photoList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentDemo
