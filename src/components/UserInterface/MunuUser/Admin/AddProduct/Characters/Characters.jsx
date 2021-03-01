import React, {useState} from "react";
import Style from './Characters.module.css';
import Photos from "../Photos/Photos";
import {useDispatch, useSelector} from "react-redux";

const Characters = () =>{

    const [next,showNext] = useState(false);
    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();

    const [screen,setScreen] = useState('');
    const [processor,setProcessor] = useState('');
    const [RAM,setRAM] = useState('');
    const [internalMemory,setInternalMemory] = useState('');
    const [basicCamera,setBasicCamera] = useState('');
    const [frontCamera,setFrontCamera] = useState('');
    const [SSD,setSSD] = useState('');
    const [videoCard,setVideoCard] = useState('');
    const [bluetooth,setBluetooth] = useState('');
    const [notification,setNotification] = useState('');
    const [remainder,setRemainder] = useState('');
    const [operationSystem,setOperationSystem] = useState('');


    function saveCharacters(){
        const productPrice = JSON.parse(JSON.stringify(data.newElement));

        productPrice[0].character.screen = screen;
        productPrice[0].character.processor = processor;
        productPrice[0].character.RAM = RAM;
        productPrice[0].character.internalMemory = internalMemory;
        productPrice[0].character.remainder = remainder;
        productPrice[0].character.SSD = SSD;
        productPrice[0].character.videoCard = videoCard;
        productPrice[0].character.Bluetooth = bluetooth;
        productPrice[0].character.Notifications = notification;
        productPrice[0].character.OperationSystem = operationSystem;
        productPrice[0].character.camera.basicCamera = basicCamera;
        productPrice[0].character.camera.frontCamera = frontCamera;

        dispatch({type:"INPUT_DATA_TO_ELEMENT",newData:productPrice});
        showNext(true)
    }

    if(next){
        return (
            <Photos/>
        )
    }else {
        return(
            <div className={Style.characters_container}>
                <div className={Style.container_of_inputs}>
                    <input  placeholder={"Screen"} value={screen}
                            onChange={event => {setScreen(event.target.value)}}/>
                    <input  placeholder={"Processor"} value={processor}
                            onChange={event => {setProcessor(event.target.value)}}/>
                    <input  placeholder={"RAM"} value={RAM}
                            onChange={event => {setRAM(event.target.value)}}/>
                    <input  placeholder={"Internal Memory"} value={internalMemory}
                            onChange={event => {setInternalMemory(event.target.value)}}/>
                    <input  placeholder={"Basic Camera"} value={basicCamera}
                            onChange={event => {setBasicCamera(event.target.value)}}/>
                    <input  placeholder={"Front Camera"} value={frontCamera}
                            onChange={event => {setFrontCamera(event.target.value)}}/>
                    <input  placeholder={"SSD"} value={SSD}
                            onChange={event => {setSSD(event.target.value)}}/>
                    <input  placeholder={"Video Card"} value={videoCard}
                            onChange={event => {setVideoCard(event.target.value)}}/>
                    <input  placeholder={"Bluetooth"} value={bluetooth}
                            onChange={event => {setBluetooth(event.target.value)}}/>
                    <input  placeholder={"Notification"} value={notification}
                            onChange={event => {setNotification(event.target.value)}}/>
                    <input  placeholder={"Remainder"} value={remainder}
                            onChange={event => {setRemainder(event.target.value)}}/>
                    <input  placeholder={"Operation System"} value={operationSystem}
                            onChange={event => {setOperationSystem(event.target.value)}}/>
                </div>
                <button onClick={()=>{saveCharacters()}}>Next</button>

            </div>
        )
    }

}

export default Characters;
