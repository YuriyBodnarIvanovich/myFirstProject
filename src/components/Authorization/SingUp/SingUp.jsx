import React from "react";
import SingUpStyle from './SingUp.module.css';

const SingUp = () =>{
    return(
        <div className={SingUpStyle.container}>
            <div className={SingUpStyle.logo}>
                <div className={SingUpStyle.logoText}>
                    <b>
                        Authorization
                    </b>
                </div>
                <div className={SingUpStyle.Exit}>
                    <p>X</p>
                </div>
            </div>
            <div className={SingUpStyle.inputField}>
                <div className={SingUpStyle.containerInput}>
                    <p>Username:</p>
                    <input id="username" placeholder={'Username'}/>
                    <p>Email:</p>
                    <input id="email" placeholder={'Email'} type="email"/>
                    <p>Password:</p>
                    <input id="password" placeholder={'Password'} type="password"/>
                </div>
                <div className={SingUpStyle.forSingUpButton}>
                    <button className={SingUpStyle.btn}>Sing UP</button>
                </div>
                <div className={SingUpStyle.showSingInContainer}>
                    <p>
                        I already have an account
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingUp;