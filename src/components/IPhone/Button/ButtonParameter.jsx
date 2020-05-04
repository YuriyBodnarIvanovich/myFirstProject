import React from "react";
import IphoneStyle from "../Iphone.module.css";

const ButtonParameter = (props) =>{
    let iPhones = JSON.parse(JSON.stringify(props.data.array));



    let addPrice=0;
    function changeCameraPrime() {
        addPrice = 2000;
        if(props.data.array[props.data.index].buttonNormalPrimeStatus === false){
            addPrice -=1000;
        }
        iPhones[props.data.index].character.camera.frontCamera = '9 Мп';
        iPhones[props.data.index].character.camera.basicCamera = '14 Мп';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonNormalPrimeStatus = true;
        iPhones[props.data.index].buttonCameraPrimeStatus = false;
        props.changeMainArray(iPhones);
    }
    function changeFrontCameraNormal() {
        addPrice = 1000;
        if(props.data.array[props.data.index].buttonCameraPrimeStatus === false){
            addPrice -= 2000
        }
        iPhones[props.data.index].character.camera.frontCamera = '7 Мп';
        iPhones[props.data.index].character.camera.basicCamera = '12 Мп';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonNormalPrimeStatus = false;
        iPhones[props.data.index].buttonCameraPrimeStatus = true;
        props.changeMainArray(iPhones);
    }
    function MemoryPrime() {
        addPrice = 4000;
        if(props.data.array[props.data.index].buttonMemoryNormalStatus === false){
            addPrice -= 2000;
        }
        iPhones[props.data.index].character.internalMemory = '128 Гб';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonMemoryNormalStatus = true;
        iPhones[props.data.index].buttonMemoryPrimeStatus = false;
        props.changeMainArray(iPhones);
    }
    function MemoryNormal() {
        addPrice = 2000;
        if(props.data.array[props.data.index].buttonMemoryPrimeStatus === false){
            addPrice -= 4000;
        }
        iPhones[props.data.index].character.internalMemory = '64 Гб';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonMemoryNormalStatus = false;
        iPhones[props.data.index].buttonMemoryPrimeStatus = true;
        props.changeMainArray(iPhones);
    }
    function RAMPrime() {
        addPrice =4000;
        if(props.data.array[props.data.index].buttonRAM_NormalStatus === false){
            addPrice -= 2000;
        }
        iPhones[props.data.index].character.RAM = '6';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price) + Number(addPrice);
        iPhones[props.data.index].buttonRAM_NormalStatus = true;
        iPhones[props.data.index].buttonRAM_PrimeStatus = false;
        props.changeMainArray(iPhones)
    }
    function RAMNormal() {
        addPrice =2000;
        if(props.data.array[props.data.index].buttonRAM_PrimeStatus === false){
            addPrice -=4000;
        }
        iPhones[props.data.index].character.RAM = '4';
        iPhones[props.data.index].price = Number(props.data.array[props.data.index].price)+ Number(addPrice);
        iPhones[props.data.index].buttonRAM_NormalStatus = false;
        iPhones[props.data.index].buttonRAM_PrimeStatus = true;
        props.changeMainArray(iPhones)
    }
    return(
        <div>
            <b className={IphoneStyle.Items}>Camera:</b>
            {
                props.data.array[props.data.index].buttonNormalPrimeStatus ?
                    <button className={IphoneStyle.buttonCheck} onClick={changeFrontCameraNormal} >
                        {props.data.array[props.data.index].buttonTextOfCameraOptionsNormal}
                    </button> :
                    <button className={IphoneStyle.buttonCheck} onClick={changeFrontCameraNormal} disabled>
                        {props.data.array[props.data.index].buttonTextOfCameraOptionsNormal}
                    </button>
            }
            {
                props.data.array[props.data.index].buttonCameraPrimeStatus ?
                    <button className={IphoneStyle.buttonCheck} onClick={changeCameraPrime}>
                        {props.data.array[props.data.index].buttonTextOfCameraOptionsPrime} </button> :
                    <button className={IphoneStyle.buttonCheck} onClick={changeCameraPrime} disabled>
                        {props.data.array[props.data.index].buttonTextOfCameraOptionsPrime}
                    </button>
            }
            <br/>
            <b className={IphoneStyle.Items}>Memory:</b>
            {
                props.data.array[props.data.index].buttonMemoryNormalStatus ?
                    <button className={IphoneStyle.buttonCheck} onClick={MemoryNormal}>
                        {props.data.array[props.data.index].buttonTextOfMemoryNormal}
                    </button> :
                    <button className={IphoneStyle.buttonCheck} onClick={MemoryNormal} disabled>
                        {props.data.array[props.data.index].buttonTextOfMemoryNormal}
                    </button>
            }
            {
                props.data.array[props.data.index].buttonMemoryPrimeStatus ?
                    <button className={IphoneStyle.buttonCheck} onClick={MemoryPrime}>
                        {props.data.array[props.data.index].buttonTextOfMemoryPrime}
                    </button> :
                    <button className={IphoneStyle.buttonCheck} onClick={MemoryPrime} disabled>
                        {props.data.array[props.data.index].buttonTextOfMemoryPrime}
                    </button>
            }
            <br/>
            <b className={IphoneStyle.Items}>RAM:</b>
            {
                props.data.array[props.data.index].buttonRAM_NormalStatus ?
                    <button className={IphoneStyle.buttonCheck} onClick={RAMNormal}>
                        {props.data.array[props.data.index].buttonTextOfRAMNormal}</button>  :
                    <button className={IphoneStyle.buttonCheck} onClick={RAMNormal} disabled>
                        {props.data.array[props.data.index].buttonTextOfRAMNormal}
                    </button>
            }
            {
                props.data.array[props.data.index].buttonRAM_PrimeStatus ?
                    <button className={IphoneStyle.buttonCheck} onClick={RAMPrime}>
                        {props.data.array[props.data.index].buttonTextOfRAMPrime}</button> :
                    <button className={IphoneStyle.buttonCheck} onClick={RAMPrime} disabled>
                        {props.data.array[props.data.index].buttonTextOfRAMPrime}
                    </button>
            }
        </div>
    )
}
export default ButtonParameter;