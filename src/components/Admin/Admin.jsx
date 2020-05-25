import React from "react";
import AdminStyle from './Admin.module.css';
import {useDispatch, useSelector} from "react-redux";
import ButtonColor from "../IPhone/Button/ButtonChangeColor";
import axios from "axios";
import ButtonParameter from "../IPhone/Button/ButtonParameter";

const Admin = () =>{
    const dataAdmin = useSelector(state=>state.AdminPage);
    const dataIPhones = useSelector(state=>state.IphonePage);
    const dispatch = useDispatch();
    function changeName(name) {
        let catalog = [];
        catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].name = name;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function changePrice(price) {
        let catalog = [];
        catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].price = price;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function changePhoto(photo) {
        let catalog = [];
        catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].stateColorIphone7 = photo;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function changeColor(color) {
        let catalog = [];
        catalog = JSON.parse(JSON.stringify(dataIPhones.iPhones));
        catalog[dataIPhones.adminIndex].photo[dataAdmin.indexOfColor].color = color;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addPhoto(photo,id) {
        let catalog = [];
        catalog = JSON.parse(JSON.stringify(dataIPhones.iPhones));
        catalog[dataIPhones.adminIndex].photo[dataAdmin.indexOfColor].imgSrc[id].src = photo;
        catalog[dataIPhones.adminIndex].stateColorIphone7 = photo;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addNewColor() {
        let catalog = [];
        catalog = JSON.parse(JSON.stringify(dataIPhones.iPhones));
        catalog[dataIPhones.adminIndex].photo.push(dataAdmin.photo[0]);
        dispatch({type:'CHANGE_ARRAY',array:catalog});
        dispatch({type:'CHANGE_INDEX_OF_COLOR',newIndex:dataAdmin.indexOfColor + 1});
    }

    function addScreen(value) {
        let catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].character.screen = value;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addProcessor(value) {
        let catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].character.processor = value;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addFrontCamera(value) {
        let catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].character.camera.frontCamera = value;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addBasicCamera(value) {
        let catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].character.camera.basicCamera = value;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addInternalMemory(value) {
        let catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].character.internalMemory = value;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addOperationSystem(value) {
        let catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].character.operatingSystem = value;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addRAM(value) {
        let catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].character.RAM = value;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function addRemainder(value) {
        let catalog = [...dataIPhones.iPhones];
        catalog[dataIPhones.adminIndex].character.remainder = value;
        dispatch({type:'CHANGE_ARRAY',array:catalog});
    }
    function up() {
        if(dataIPhones.adminIndex === 0){
            dispatch({type:'CHANGE_ADMIN_INDEX', index:dataIPhones.iPhones.length-1 });
        }
        else {
            dispatch({type:'CHANGE_ADMIN_INDEX', index:dataIPhones.adminIndex -1 });
        }
    }
    function down() {

        if(dataIPhones.adminIndex === dataIPhones.iPhones.length-1){
            dispatch({type:'CHANGE_ADMIN_INDEX', index:0});
        }
        else {
            dispatch({type:'CHANGE_ADMIN_INDEX', index:dataIPhones.adminIndex +1 });
        }
    }
    function last() {

        let array = [];
        array = JSON.parse(JSON.stringify(dataIPhones.iPhones));
        if(dataIPhones.indexOfPhoto === 0){
            dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex: 2});

        }
        else {
            dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex:dataIPhones.indexOfPhoto - 1});
        }
        array[dataIPhones.adminIndex].stateColorIphone7 =
            array[dataIPhones.adminIndex].photo[dataIPhones.indexOfColor].imgSrc[dataIPhones.indexOfPhoto].src;
        dispatch({type:'CHANGE_ARRAY',array:array});
    }
    function next() {

        let array = [];
        array = JSON.parse(JSON.stringify(dataIPhones.iPhones));
        if(dataIPhones.indexOfPhoto <2){
            dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex:dataIPhones.indexOfPhoto + 1});
        }
        else {
            dispatch({type:'CHANGE_INDEX_OF_PHOTO',newIndex:0});
        }
        array[dataIPhones.adminIndex].stateColorIphone7 =
            array[dataIPhones.adminIndex].photo[dataIPhones.indexOfColor].imgSrc[dataIPhones.indexOfPhoto].src;
        dispatch({type:'CHANGE_ARRAY',array:array});
    }

    function addNewProduct() {
        let catalog = [];
        catalog = JSON.parse(JSON.stringify(dataIPhones.iPhones));
        catalog.unshift(JSON.parse(JSON.stringify(dataAdmin.newElement[0])));
        dispatch({type:'CHANGE_ARRAY',array:catalog});
        dispatch({type:'CHANGE_STATUS_OF_SHOW_OPTION',status:false});
    }
    function showOption() {
        return(
            <div className={AdminStyle.main}>
                <div className={AdminStyle.containerOfButton}>
                    <div> <button onClick={addNewProduct}>add new product</button></div>
                    <div><button onClick={()=>dispatch({type:'CHANGE_STATUS_OF_SHOW_OPTION',status:false})}>show products</button></div>
                </div>
            </div>
        )
    }
    function showProduct() {
        const colorShow = dataIPhones.iPhones[dataIPhones.adminIndex].photo.map((element,index)=>
            <ButtonColor color={element.color} id={index} data={dataIPhones} dispatch={dispatch} way='admin'/>);

        return(
            <div className={AdminStyle.main}>
                <div className={AdminStyle.container}>
                    <button className={AdminStyle.up} onClick={up}>Up</button>
                    <div className={AdminStyle.explain}>
                        <div>
                            <div className={AdminStyle.container_two}>
                                <button className={AdminStyle.last} onClick={last}>last</button>
                                <div>
                                    <img src={dataIPhones.iPhones[dataIPhones.adminIndex].stateColorIphone7} className={AdminStyle.img}/>
                                </div>
                                <button className={AdminStyle.next} onClick={next}>next</button>
                                <div style={{marginLeft:'50px'}}>
                                    <h3>{dataIPhones.iPhones[dataIPhones.adminIndex].name}</h3>
                                    <div className={AdminStyle.row}>
                                        {colorShow}
                                    </div>
                                    <br/>
                                    <h3>{'Price:  ' + dataIPhones.iPhones[dataIPhones.adminIndex].price}</h3>
                                    <div>
                                        <ButtonParameter data={dataIPhones} dispatch={dispatch} word={'Admin'} from={dataIPhones.adminIndex}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <h3>
                                {"Screen  " + dataIPhones.iPhones[dataIPhones.adminIndex].character.screen}
                                {" / Processor  " + dataIPhones.iPhones[dataIPhones.adminIndex].character.processor}
                                {" / FrontCamera  " + dataIPhones.iPhones[dataIPhones.adminIndex].character.camera.frontCamera}
                                {" / BasicCamera  " + dataIPhones.iPhones[dataIPhones.adminIndex].character.camera.basicCamera}
                                {" / Internal Memory  " + dataIPhones.iPhones[dataIPhones.adminIndex].character.internalMemory}
                                {" / Operating System  " + dataIPhones.iPhones[dataIPhones.adminIndex].character.operatingSystem}
                                {" / RAM  " + dataIPhones.iPhones[dataIPhones.adminIndex].character.RAM}
                                {" / Remainder  " + dataIPhones.iPhones[dataIPhones.adminIndex].character.remainder}
                            </h3>
                        </div>
                    </div>
                    <button className={AdminStyle.down} onClick={down}>Down</button>
                    <div className={AdminStyle.options}>
                            <h1>General settings: </h1>
                            <p>
                                Input name:
                            </p>
                            <textarea onChange={(event)=>{changeName(event.target.value)}} value={dataIPhones.iPhones[dataIPhones.adminIndex].name}/>
                            <p>
                                Input price:
                            </p>
                            <textarea onChange={(event)=>{changePrice(event.target.value)}} value={dataIPhones.iPhones[dataIPhones.adminIndex ].price}/>
                            <p>
                                Input color:
                            </p>
                            <textarea onChange={(event)=>{changeColor(event.target.value)}}
                                      value={dataIPhones.iPhones[dataIPhones.adminIndex].photo[dataAdmin.indexOfColor].color}>
                            </textarea>
                            <p>
                                Input photo for this color:<br/>

                            </p>
                            <b><br/>First color:<br/></b>
                            <textarea onChange={(event)=>{addPhoto(event.target.value,0)}}
                                      value={dataIPhones.iPhones[dataIPhones.adminIndex].photo[dataAdmin.indexOfColor].imgSrc[0].src}>
                            </textarea>
                            <b><br/>Second color<br/></b>
                            <textarea onChange={(event)=>{addPhoto(event.target.value,1)}}
                                  value={dataIPhones.iPhones[dataIPhones.adminIndex].photo[dataAdmin.indexOfColor].imgSrc[1].src}>
                            </textarea>
                             <b><br/>Third color<br/></b>
                            <textarea onChange={(event)=>{addPhoto(event.target.value,2)}}
                                  value={dataIPhones.iPhones[dataIPhones.adminIndex].photo[dataAdmin.indexOfColor].imgSrc[2].src}>
                            </textarea>
                            <br />
                            <button onClick={addNewColor}>add new color</button>//Add function and create button 24/05/2020
                            <p>Options:</p>
                            <b><br/>Ram:<br/></b>
                            <textarea > </textarea>
                            <b><br/>Internal Memory:<br/></b>
                            <textarea> </textarea>
                            <b><br/>Front Camera:<br/></b>
                            <textarea> </textarea>
                            <b><br/>Basic Camera:<br/></b>
                            <textarea> </textarea>
                        <div className={AdminStyle.character}>
                            <div>
                                <h1>Features: </h1>
                            </div>
                            <div>
                                <b>Screen:</b>
                                <textarea value={dataIPhones.iPhones[dataIPhones.adminIndex].character.screen}
                                onChange={(event)=>{addScreen(event.target.value)}}> </textarea>
                            </div>
                            <div>
                                <b>Processor:</b>
                                <textarea value={dataIPhones.iPhones[dataIPhones.adminIndex].character.processor}
                                onChange={(event)=>{addProcessor(event.target.value)}}> </textarea>
                            </div>
                            <div>
                                <b>Front Camera:</b>
                                <textarea value={dataIPhones.iPhones[dataIPhones.adminIndex].character.camera.frontCamera}
                                onChange={(event)=>{addFrontCamera(event.target.value)}}> </textarea>
                            </div>
                            <div>
                                <b>Basic Camera:</b>
                                <textarea value={dataIPhones.iPhones[dataIPhones.adminIndex].character.camera.basicCamera}
                                onChange={(event)=>{addBasicCamera(event.target.value)}}> </textarea>
                            </div>
                            <div>
                                <b>Internal Memory:</b>
                                <textarea value={dataIPhones.iPhones[dataIPhones.adminIndex].character.internalMemory}
                                onChange={(event)=>{addInternalMemory(event.target.value)}}> </textarea>
                            </div>
                            <div>
                                <b>Operation System:</b>
                                <textarea value={dataIPhones.iPhones[dataIPhones.adminIndex].character.operatingSystem}
                                onChange={(event)=>{addOperationSystem(event.target.value)}}> </textarea>
                            </div>
                            <div>
                                <b>RAM:</b>
                                <textarea value={dataIPhones.iPhones[dataIPhones.adminIndex].character.RAM}
                                onChange={(event)=>{addRAM(event.target.value)}}> </textarea>
                            </div>
                            <div>
                                <b>Remainder:</b>
                                <textarea value={dataIPhones.iPhones[dataIPhones.adminIndex].character.remainder}
                                onChange={(event)=>{addRemainder(event.target.value)}}> </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function download() {
        axios.get('http://localhost:3001/iPhone').then((response) => {
            let resData = response.data;
            console.log(resData);
            dispatch({type:'CHANGE_ARRAY',array:resData});
        });
        return(
            <h1 style={{color:'#fff'}}>Waiting download</h1>
        )
    }
    const status = dataAdmin.showOption;
    function showPage() {
            if(status){
                return showOption();
            }else {
                return  showProduct();
            }
    }

    if(dataIPhones.iPhones.length === 0){
        return download();
    }else {
        return  showPage();
    }

}
export default Admin;