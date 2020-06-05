import React from "react";
import InputStyle from "../Input.module.css";

const SingIn = (props) =>{
    function check() {
        if(props.savedEmail === props.data.name && props.email === props.data.password){
            props.dispatch({type:'CHANGE_EXCEPTION',exception:true});
            props.dispatch({type:'HIDE_INPUT_BOX',status:false});
        }
        else {
            props.dispatch({type:'CHANGE_EXCEPTION',exception:false});
        }
        if(props.savedEmail === props.adminName && props.savedPassword === props.passwordAdmin){
            props.dispatch({type:'CHANGE_ADMIN_STATUS',status:true});
            props.dispatch({type:'HIDE_INPUT_BOX',hideInputBox:false});
        }
        else {
            alert('Dont enter Admin');
            props.dispatch({type:'CHANGE_EXCEPTION',exception:false});
            console.log(props.data.adminName)
            console.log(props.data.passwordAdmin)
            console.log(props.data.savedEmail)
            console.log(props.data.savedPassword)
        }


    }
    function out() {
        if(props.data.signedIn){
            // props.dispatch({type:'',})
            // props.SingInStatusChange(true);
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