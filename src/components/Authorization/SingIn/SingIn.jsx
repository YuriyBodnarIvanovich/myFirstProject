import React,{useState} from "react";
import SingInStyle from './SingIn.module.css'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import SingUpStyle from "../SingUp/SingUp.module.css";

const SingIn = (props)=>{
    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();

    const [userEmail,setEmail] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [errorMessage, setStatusOfError] = useState(false)


    function check() {
        axios.post('http://localhost:3001/authorize', {
            email:userEmail,
            password:userPassword,
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data.token.id_token);
                localStorage.setItem('token', response.data.token.id_token);
                props.setStatusOfInputBox(false);
                dispatch({type:"CHANGE_STATUS_OF_USER",userStatus:true});
            })
            .catch(function (error) {
                setStatusOfError(true)
                console.log(error);
            });
    }

    return(
        <div className={`${data.darkTheme ? SingInStyle.container_dark : SingInStyle.container}`}>
            <div className={`${data.darkTheme ? SingInStyle.logo_dark : SingInStyle.logo}`}>
                <div className={`${data.darkTheme ? SingInStyle.logo_background_dark : SingInStyle.logo_background}`}>
                    <div className={SingInStyle.exit}>
                        {data.darkTheme ?  <b style={{color:"white"}}
                                                   onClick={()=>{props.setStatusOfInputBox(false)}}>×</b>
                            :
                            <img src="https://img.icons8.com/ios/24/000000/close-window.png"
                                 onClick={()=>{props.setStatusOfInputBox(false)}}/>
                        }
                    </div>
                    <div className={SingInStyle.logoText}>
                        {data.darkTheme ? <p style={{color:"white"}}>Authentication</p> : <p>Authentication</p>}
                    </div>
                </div>
            </div>
            <div className={`${data.darkTheme ? SingInStyle.inputField_dark : SingInStyle.inputField}`}>
                <div className={SingInStyle.containerInput}>
                    <input id="email" placeholder={'Email'} type="email" value={userEmail}
                           onChange={(event)=>{setEmail(event.target.value)}}/>
                    <input id="password" placeholder={'Password'} type="password" value={userPassword}
                           onChange={(event)=>{setUserPassword(event.target.value)}}/>
                    {errorMessage ? <p className={SingInStyle.errorMessage} style={{fontSize:"14px"}}>Bad password or email</p> : null}
                </div>
                <div className={`${data.darkTheme ? SingInStyle.forSingUpButton_dark : SingInStyle.forSingUpButton}`}>
                    <button onClick={()=>{check()}}>Sing In</button>
                </div>
                <div className={`${data.darkTheme ? SingUpStyle.showSingInContainer_dark : SingUpStyle.showSingInContainer}`}>
                    <p onClick={()=>{props.setStatusOfBox(true)}}>
                        I already have an account
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingIn;
