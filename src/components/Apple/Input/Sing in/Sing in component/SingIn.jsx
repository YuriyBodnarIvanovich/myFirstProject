import React from "react";
import InputStyle from "../../Input.module.css";
import axios from "axios";
import {useDispatch} from "react-redux";

const SingIn = (props) =>{
    const dispatch = useDispatch(state => state.ApplePage);

    function check() {
        axios.post('http://localhost:3001/authorize', {
            email:props.data.email,
            password:props.data.password,
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data.token.id_token);
                dispatch({type:'CHANGE_ARRAY_OF_USERS',newArray:response.data.Users});
                localStorage.setItem('token', response.data.token.id_token);
                dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:true});
                dispatch({type:'CHANGE_STATUS_OF_SHOW_INPUT_BOX',status:false});
            })
            .catch(function (error) {
                console.log(error);
            });
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