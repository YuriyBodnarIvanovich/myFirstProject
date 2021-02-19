import React from "react";
import SingUpStyle from './SingUp.module.css';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Style from "../../CatalogOfGoods/ItemOfProductIphone/ModalWindowOfProduct/IPhone/IphoneModal.module.css";

const SingUp = (props) =>{
    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();

    function sendData(){
        axios.post('http://localhost:3001/singUp', {
            name: data.userName,
            email:data.email,
            password:data.password,
        })
            .then(function (response) {
                console.log(response);
                dispatch({type:'SHOW_SING_UP',status:false});
                dispatch({type:'FILL_USER_NAME',userName:''});
                dispatch({type:'FILL_EMAIL',email:''});
                dispatch({type:'FILL_PASSWORD',password:''});
            })
            .catch(function (error) {
                console.log(error);
                alert('err');
            });
    }
    return(
        <div className={SingUpStyle.container}>
            <div className={SingUpStyle.logo}>
                <div className={SingUpStyle.logo_background}>
                    <div className={SingUpStyle.exit}>
                        <img src="https://img.icons8.com/ios/24/000000/close-window.png"
                             onClick={()=>{props.setStatusOfInputBox(false)}}/>
                    </div>
                    <div className={SingUpStyle.logoText}>
                        <p>
                            Authorization
                        </p>
                    </div>
                </div>
            </div>
            <div className={SingUpStyle.inputField}>
                <div className={SingUpStyle.containerInput}>
                    <input id="username" placeholder={'Username'} value={data.userName}
                           onChange={(event)=>{
                            dispatch({type:'FILL_USER_NAME',userName:event.target.value})
                    }}/>
                    <input id="email" placeholder={'Email'} type="email" value={data.email}
                           onChange={(event)=>{
                            dispatch({type:'FILL_EMAIL',email:event.target.value})
                    }}/>
                    <input id="password" placeholder={'Password'} type="password" value={data.password}
                           onChange={(event)=>{
                            dispatch({type:'FILL_PASSWORD',password:event.target.value})
                    }}/>
                </div>
                <div className={SingUpStyle.forSingUpButton}>
                    <button className={SingUpStyle.btn} onClick={sendData}>Sing UP</button>
                </div>
                <div className={SingUpStyle.showSingInContainer}>
                    <p onClick={()=>{props.setStatusOfBox(false)}}>
                        I already have an account
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingUp;
