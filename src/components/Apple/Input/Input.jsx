import React from "react";
import InputStyle from './Input.module.css';

const Input = (props) =>{
    let status = props.authentication;
    
    function login() {
        props.upStatus(true)
    }
    if(status){
        return(
            <form className={InputStyle.transparent}>
                <div className={InputStyle.form_inner}>
                    <h3>Please sign in</h3>
                    <label htmlFor="username">Email</label>
                    <input type="email" id="username" value={props.email}
                           onChange={(event)=>{props.upEmail(event.target.value)}}/>
                    <label htmlFor="password" >Password</label>
                    <input id="password" type="password"  value={props.password}
                           onChange={(event)=>{props.upPassword(event.target.value)}} />
                    <input type="submit" value="Sing In" />
                </div>
            </form>
        );
    }else{
        return(
            <form className={InputStyle.transparent}>
                <div className={InputStyle.form_inner}>
                    <h3>Please registration</h3>
                    <label htmlFor="username">Name</label>
                    <input type="text" id="username" value={props.Username}
                           onChange={(event)=>{props.upUserName(event.target.value)}}/>
                    <label htmlFor="username">Email</label>
                    <input type="email" id="username" value={props.email}
                           onChange={(event)=>{props.upEmail(event.target.value)}}/>
                    <label htmlFor="password" >Password</label>
                    <input id="password" type="password"  value={props.password}
                           onChange={(event)=>{props.upPassword(event.target.value)}} />
                    <input type="submit" value="Login" onClick={login}/>
                </div>
            </form>
        )
    }

}
export default Input;