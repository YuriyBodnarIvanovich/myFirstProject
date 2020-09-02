import React from "react";
import SingUpStyle from './SingUp.module.css';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const SingUp = () =>{
    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();
    function close(){
        dispatch({type:'SHOW_INPUT_BOX',status:false})
    }
    function openSingIn(){
        dispatch({type:'SHOW_SING_UP',status:false});
    }

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
                <div className={SingUpStyle.logoText}>
                    <b>
                        Authorization
                    </b>
                </div>
                <div className={SingUpStyle.Exit}>
                    <p onClick={close}>X</p>
                </div>
            </div>
            <div className={SingUpStyle.inputField}>
                <div className={SingUpStyle.containerInput}>
                    <p>Username:</p>
                    <input id="username" placeholder={'Username'} value={data.userName}
                           onChange={(event)=>{
                            dispatch({type:'FILL_USER_NAME',userName:event.target.value})
                    }}/>
                    <p>Email:</p>
                    <input id="email" placeholder={'Email'} type="email" value={data.email}
                           onChange={(event)=>{
                            dispatch({type:'FILL_EMAIL',email:event.target.value})
                    }}/>
                    <p>Password:</p>
                    <input id="password" placeholder={'Password'} type="password" value={data.password}
                           onChange={(event)=>{
                            dispatch({type:'FILL_PASSWORD',password:event.target.value})
                    }}/>
                </div>
                <div className={SingUpStyle.forSingUpButton}>
                    <button className={SingUpStyle.btn} onClick={sendData}>Sing UP</button>
                </div>
                <div className={SingUpStyle.showSingInContainer}>
                    <p onClick={openSingIn}>
                        I already have an account
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingUp;