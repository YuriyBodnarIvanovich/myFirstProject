import React from "react";
import InputStyle from "../../Input.module.css";

const Registration = (props) =>{
    function checkActiveButton() {
        if(props.data.savedName==='' || props.data.savedEmail==='' || props.data.savedPassword === ''){
            return    <input type="submit" value="Login" onClick={login} id='loginButton' disabled/>
        }else {
            return    <input type="submit" value="Login" onClick={login} id='loginButton'/>
        }
    }
    function login() {
        props.dispatch({type:'CHANGE_STATUS_OF_SING',status: false});
    }
    return(
        <div className={InputStyle.modalWindowInput}>
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
                    <button onClick={login}>You have account</button>
                </div>
            </div>
        </div>
    )
}
export default Registration;