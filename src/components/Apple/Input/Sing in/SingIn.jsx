import React from "react";
import InputStyle from "../Input.module.css";

const SingIn = (props) =>{
    function check() {
        if(props.savedEmail === props.userEmail && props.savedPassword === props.userPassword){
            props.changeStateOfException(true);
            props.hideInputBoxMethod(false);

        }
        else {
            props.changeStateOfException(false);
        }
    }
    function out() {
        if(props.upStatusSignedIn){
            props.SingInStatusChange(true);
        }
        else{
            if(props.hideInputBox){
                return(
                    <div className={InputStyle.transparent}>
                        <div className={InputStyle.form_inner}>
                            <h3>Please sign in</h3>
                            <label htmlFor="username">Email</label>
                            <input type="email" id="username" value={props.userEmail}
                                   onChange={(event)=>{props.upUserEmail(event.target.value)}}/>
                            <label htmlFor="password" >Password</label>
                            <input id="password" type="password"  value={props.userPassword}
                                   onChange={(event)=>{props.upUserPassword(event.target.value)}} />
                            <b className={InputStyle.exception}>{props.exception ? '' : 'The account name or password that you have entered is incorrect!'}</b>
                            <button onClick={check}> Sing In</button>
                        </div>
                    </div>
                )
            }else {
                return '';
            }

        }
    }
    return out();

}
export default SingIn;