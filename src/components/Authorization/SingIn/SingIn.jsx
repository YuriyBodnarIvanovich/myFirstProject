import React from "react";
import SingInStyle from './SingIn.module.css'

const SingIn = ()=>{
    return(
        <div className={SingInStyle.container}>
            <div className={SingInStyle.logo}>
                <div className={SingInStyle.logoText}>
                    <b>
                        Authorization
                    </b>
                </div>
                <div className={SingInStyle.Exit}>
                    <p>X</p>
                </div>
            </div>
            <div className={SingInStyle.inputField}>
                <div className={SingInStyle.containerInput}>
                    <p>Email:</p>
                    <input id="email" placeholder={'Email'} type="email"/>
                    <p>Password:</p>
                    <input id="password" placeholder={'Password'} type="password"/>
                </div>
                <div className={SingInStyle.forSingUpButton}>
                    <button className={SingInStyle.btn}>Sing IN</button>
                </div>
            </div>

        </div>
    )
}

export default SingIn;