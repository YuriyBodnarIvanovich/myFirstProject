import React from "react";
import InputStyle from './Input.module.css';
import SingIn from "./Sing in/SingIn";

const Input = (props) =>{
    let status = props.data.authentication;
    
    
    function checkActiveButton() {
        if(props.data.savedName==='' || props.data.savedEmail==='' || props.data.savedPassword === ''){
            return    <input type="submit" value="Login" onClick={login} id='loginButton' disabled/>
        }else {
            return    <input type="submit" value="Login" onClick={login} id='loginButton'/>
        }
    }
    function login() {
        props.dispatch({type:'CHANGE_STATUS_OF_OPTION_BUTTON_ADMIN',upStatus: true});
        alert('h');
    }

    if(status){
        return(
            <SingIn data={props.data} dispatch={props.dispatch}/>
        );
    }else{
        if(props.data.hideInputBox){
            return(
                <div className={InputStyle.transparent}>
                    <div className={InputStyle.form_inner}>
                        <h3>Please registration</h3>
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" value={props.data.savedName}
                               onChange={(event)=>{props.dispatch({type:'CHANGE_SAVED_NAME',savedName:event.target.value})}} required/>
                        <label htmlFor="username">Email</label>
                        <input type="email" id="username" value={props.data.savedEmail}
                               onChange={(event)=>{props.dispatch({type:'CHANGE_SAVED_EMAIL',savedEmail:event.target.value})}}/>
                        <label htmlFor="password" >Password</label>
                        <input id="password" type="password"  value={props.data.savedPassword}
                               onChange={(event)=>{props.dispatch({type:'CHANGE_SAVED_PASSWORD',savedPassword:event.target.value})}} />
                        {checkActiveButton()}
                        <button onClick={login}>Enter for Admin</button>

                    </div>
                </div>
            )
        }else{
            return '';
        }

    }
}
export default Input;