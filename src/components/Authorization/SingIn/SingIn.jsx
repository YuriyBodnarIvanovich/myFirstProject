import React from "react";
import SingInStyle from './SingIn.module.css'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const SingIn = (props)=>{
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

    return(
        <div className={SingInStyle.container}>
            <div className={SingInStyle.logo}>
                <div className={SingInStyle.logo_background}>
                    <div className={SingInStyle.exit}>
                        <img src="https://img.icons8.com/ios/24/000000/close-window.png"
                             onClick={()=>{props.setStatusOfInputBox(false)}}/>
                    </div>
                    <div className={SingInStyle.logoText}>
                        <p>
                            Authentication
                        </p>
                    </div>
                </div>
            </div>
            <div className={SingInStyle.inputField}>
                <div className={SingInStyle.containerInput}>
                    <input id="email" placeholder={'Email'} type="email" value={data.email}
                           onChange={(event)=>{
                               dispatch({type:'FILL_EMAIL',email:event.target.value})
                           }}/>
                    <input id="password" placeholder={'Password'} type="password" value={data.password}
                           onChange={(event)=>{
                               dispatch({type:'FILL_PASSWORD',password:event.target.value})
                           }}/>
                </div>
                <div className={SingInStyle.forSingUpButton}>
                    <button>Sing In</button>
                </div>
                <div className={SingInStyle.showSingInContainer}>
                    <p onClick={()=>{props.setStatusOfBox(true)}}>
                        I already have an account
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingIn;
