import React from "react";
import InputStyle from './Input.module.css';

const Input = () =>{

    return(
        <form className={InputStyle.transparent}>
            <div className={InputStyle.form_inner}>
                <h3>Please sign in</h3>
                <label htmlFor="username">Apple ID</label>
                <input type="text" id="username" />
                <label htmlFor="password">password</label>
                <input id="password" type="password" />
                <input type="submit" value="Sing In" />
            </div>
        </form>
    );
}
export default Input;