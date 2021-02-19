import React, {useState} from "react";
import {useSelector} from "react-redux";
import SingUp from "./SingUp/SingUp";
import SingIn from "./SingIn/SingIn";
import AuthBoxStyle from './AuthBox.module.css';

const AuthBox = (props) => {
    const [SingUpBox, setStatusOfBox] = useState(true)

    return(
        <div className={AuthBoxStyle.container}>
            {
                SingUpBox ?
                    <SingUp setStatusOfInputBox={props.setStatusOfInputBox} showInputBox={props.showInputBox}
                            setStatusOfBox={setStatusOfBox}/>
                :
                    <SingIn setStatusOfInputBox={props.setStatusOfInputBox} showInputBox={props.showInputBox}
                            setStatusOfBox={setStatusOfBox}/>
            }
        </div>
    )
}

export default AuthBox;
