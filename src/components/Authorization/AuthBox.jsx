import React from "react";
import {useSelector} from "react-redux";
import SingUp from "./SingUp/SingUp";
import SingIn from "./SingIn/SingIn";
import AuthBoxStyle from './AuthBox.module.css';

const AuthBox = () => {
    const data = useSelector(state=> state.ApplePage);

    return(
        <div className={AuthBoxStyle.container}>
            {
                data.ShowSingUp ? <SingUp/> : <SingIn/>
            }
        </div>
    )
}

export default AuthBox;