import React from "react";
import AdminStyle from './Admin.module.css';

const Admin = (props) =>{
    function changeName(name) {
        let catalog = [];
        catalog = [...props.iPhones];
        catalog[props.adminIndex].name = name;
        props.changeMainArray(catalog);
    }
    function changePrice(price) {
        let catalog = [];
        catalog = [...props.iPhones];
        catalog[props.adminIndex].price = price;
        props.changeMainArray(catalog);
    }
    function changePhoto(photo) {
        let catalog = [];
        catalog = [...props.iPhones];
        catalog[props.adminIndex].stateColorIphone7 = photo;
        props.changeMainArray(catalog);
    }
    function up() {
        props.changeAdminIndex(props.adminIndex - 1)
    }
    function down() {
        props.changeAdminIndex(props.adminIndex + 1)
    }

    function addNewProduct() {
        let catalog = [];
        catalog = JSON.parse(JSON.stringify(props.iPhones));
        catalog.unshift(JSON.parse(JSON.stringify(props.newElement[0])));
        props.changeMainArray(catalog);
        props.changeStatusOfShowOption(false);
        console.log(props.iPhones);
    }

    function showOption() {
        return(
            <div className={AdminStyle.main}>
                <div className={AdminStyle.containerOfButton}>
                    <div> <button onClick={addNewProduct}>add new product</button></div>
                    <div><button onClick={()=>props.changeStatusOfShowOption(false)}>show products</button></div>
                </div>
            </div>
        )
    }
    function showProduct() {
        return(
            <div className={AdminStyle.main}>
                <div className={AdminStyle.container}>
                    <button className={AdminStyle.up} onClick={up}>Up</button>
                    <div className={AdminStyle.explain}>
                        <div className={AdminStyle.container_two}>
                            <div>
                                <img src={props.iPhones[props.adminIndex].stateColorIphone7} className={AdminStyle.img}/>
                            </div>
                            <div>
                                <h3>{props.iPhones[props.adminIndex].name}</h3>
                                <br/>
                                <h3>{'Price:  ' + props.iPhones[props.adminIndex].price}</h3>
                            </div>
                        </div>
                        <div>
                            <h3>
                                {"Screen  " + props.iPhones[props.adminIndex].character.screen}
                                {" / Processor  " + props.iPhones[props.adminIndex].character.processor}
                                {" / FrontCamera  " + props.iPhones[props.adminIndex].character.camera.frontCamera}
                                {" / BasicCamera  " + props.iPhones[props.adminIndex].character.camera.basicCamera}
                                {" / Internal Memory  " + props.iPhones[props.adminIndex].character.internalMemory}
                                {" / Operating System  " + props.iPhones[props.adminIndex].character.operatingSystem}
                                {" / RAM  " + props.iPhones[props.adminIndex].character.RAM}
                                {" / Remainder  " + props.iPhones[props.adminIndex].character.remainder}
                            </h3>
                        </div>
                    </div>
                    <button className={AdminStyle.down} onClick={down}>Down</button>
                    <div className={AdminStyle.options}>
                        <p>
                            Input name:
                        </p>
                        <textarea onChange={(event)=>{changeName(event.target.value)}} value={props.iPhones[props.adminIndex].name}/>
                        <p>
                            Input price:
                        </p>
                        <textarea onChange={(event)=>{changePrice(event.target.value)}} value={props.iPhones[props.adminIndex ].price}/>
                        <p>
                            Input photo:
                        </p>
                        <textarea onChange={(event)=>{changePhoto(event.target.value)}} value={props.iPhones[props.adminIndex].stateColorIphone7}/>
                        <div> <button onClick={addNewProduct}>add new product</button></div>

                    </div>
                </div>
            </div>
        )
    }
    const status = props.showOption;
    if(status){
        return showOption();
    }else {
        return  showProduct();
    }

}
export default Admin;