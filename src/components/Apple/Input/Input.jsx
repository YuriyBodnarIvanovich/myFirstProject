import React from "react";
import InputStyle from './Input.module.css';
import SingIn from "./Sing in/SingIn";

const Input = (props) =>{
    let status = props.authentication;
    
    
    function checkActiveButton() {
        if(props.savedName==='' || props.savedEmail==='' || props.savedPassword === ''){
            return    <input type="submit" value="Login" onClick={login} id='loginButton' disabled/>;
        }else {
            return    <input type="submit" value="Login" onClick={login} id='loginButton'/>
        }
    }
    function login() {
        props.upStatus(true)
    }
    if(status){
        return(
            <SingIn SingInStatus={props.signedIn} SingInStatusChange={props.changeStatusSignedIn}
                    userName={props.username}
                    userEmail={props.email} userPassword={props.password}
                    upUserName={props.upUserName} upUserEmail={props.upEmail}
                    upUserPassword={props.upPassword}
                    savedName={props.savedName} savedEmail={props.savedEmail}
                    savedPassword={props.savedPassword}
                    exception={props.exception} changeStateOfException={props.exceptionMethod}
                    hideInputBox={props.hideInputBox} hideInputBoxMethod={props.hideInputBoxMethod}/>
        );
    }else{
        if(props.hideInputBox){
            return(
                <div className={InputStyle.transparent}>
                    <div className={InputStyle.form_inner}>
                        <h3>Please registration</h3>
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" value={props.savedName}
                               onChange={(event)=>{props.savedNameMethod(event.target.value)}}
                               required/>
                        <label htmlFor="username">Email</label>
                        <input type="email" id="username" value={props.savedEmail}
                               onChange={(event)=>{props.savedEmailMethod(event.target.value)}}/>
                        <label htmlFor="password" >Password</label>
                        <input id="password" type="password"  value={props.savedPassword}
                               onChange={(event)=>{props.savePasswordMethod(event.target.value)}} />
                        {checkActiveButton()}
                    </div>
                </div>
            )
        }else{
            return '';
        }

    }
}
export default Input;