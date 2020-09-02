import React from "react";
import SingInStyle from './SingIn.module.css'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const SingIn = ()=>{
    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();

    function check() {
        axios.post('http://localhost:3001/authorize', {
            email:data.email,
            password:data.password,
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data.token.id_token);
                localStorage.setItem('token', response.data.token.id_token);
                dispatch({type:'SHOW_INPUT_BOX',status:false});
                dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:true});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function close(){
        dispatch({type:'SHOW_INPUT_BOX',status:false})
    }

    function openSingUp(){
        dispatch({type:'SHOW_SING_UP',status:true});
    }
    return(
        <div className={SingInStyle.container}>
            <div className={SingInStyle.logo}>
                <div className={SingInStyle.logoText}>
                    <b>
                        Authentication
                    </b>
                </div>
                <div className={SingInStyle.Exit}>
                    <p onClick={close}>X</p>
                </div>
            </div>
            <div className={SingInStyle.inputField}>
                <div className={SingInStyle.containerInput}>
                    <p>Email:</p>
                    <input id="email" placeholder={'Email'} type="email" value={data.email}
                        onChange={event => {dispatch({type:'FILL_EMAIL',email:event.target.value})}}
                    />
                    <p>Password:</p>
                    <input id="password" placeholder={'Password'} type="password" value={data.password}
                           onChange={event => {dispatch({type:'FILL_PASSWORD',password:event.target.value})}}
                    />
                </div>
                <div className={SingInStyle.forSingUpButton}>
                    <button className={SingInStyle.btn} onClick={check}>Sing IN</button>
                </div>
                <div className={SingInStyle.showSingInContainer}>
                    <p onClick={openSingUp}>
                        Create an account
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SingIn;