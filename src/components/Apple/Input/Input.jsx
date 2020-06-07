import React from "react";
import Registration from "./Sing in/Registration/Registration";
import SingIn from "./Sing in/Sing in component/SingIn";

const Input = (props) =>{
    if(props.data.singStatus === true){
        return(
            <Registration data={props.data} dispatch={props.dispatch}/>
        )
    }
    else {
        return (
            <SingIn data={props.data} dispatch={props.dispatch}/>
        )
    }
}
export default Input;