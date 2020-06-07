import React from "react";
import InputStyle from "../../Input.module.css";

const SingIn = (props) =>{
    function check() {
        if(props.data.savedEmail === props.data.email && props.data.savedPassword === props.data.password){
            props.dispatch({type:'CHANGE_STATUS_OF_SHOW_INPUT_BOX',status:false});
            props.dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:true});
            props.dispatch({type:'CHANGE_STATUS_OF_SING_COMPONENTS',status:false});
        }
        else {
            props.dispatch({type:'CHANGE_STATUS_OF_ERROR_SING_IN',exception:true});
        }

        if(props.data.email === props.data.adminName && props.data.password === props.data.passwordAdmin){
            props.dispatch({type:'CHANGE_STATUS_OF_SHOW_INPUT_BOX',status:false});
            props.dispatch({type:'CHANGE_SAVED_NAME',savedName:'Admin'})
            props.dispatch({type:'CHANGE_ADMIN_STATUS',status:true});
            props.dispatch({type:'CHANGE_STATUS_OF_SING_COMPONENTS',status:false});
            props.dispatch({type:'CHANGE_SAVED_NAME',savedName:'Admin'});
            props.dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:true});
        }
        else {
            props.dispatch({type:'CHANGE_STATUS_OF_ERROR_SING_IN',exception:true});
        }
    }
    return(
        <div className={InputStyle.modalWindowInput}>
            <div className={InputStyle.transparent}>
                <div className={InputStyle.form_inner}>
                    <h3>Please sign in</h3>
                    <label htmlFor="username">Email</label>
                    <input type="email" id="username" value={props.data.email}
                           onChange={(event)=>{props.dispatch({type:'CHANGE_EMAIL',emailAdr:event.target.value})}}/>
                    <label htmlFor="password" >Password</label>
                    <input id="password" type="password"  value={props.data.password}
                           onChange={(event)=>{props.dispatch({type:'CHANGE_PASSWORD',PasswordUser:event.target.value})}} />
                    <b className={InputStyle.exception}>{props.data.exception ? 'The account name or password that you have entered is incorrect!' : ''}</b>
                    <button onClick={check}> Sing In</button>
                </div>
            </div>
        </div>
    )
}

export default SingIn;