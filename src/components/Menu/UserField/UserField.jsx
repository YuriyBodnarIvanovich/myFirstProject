import React from "react";
import userFieldStyle from './UserField.module.css';
import {useDispatch, useSelector} from "react-redux";

const UserField = () =>{
    const data = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();
    function SingInOpen() {
        dispatch({type:'CHANGE_STATUS_OF_SHOW_INPUT_BOX',status:true});
        dispatch({type:'CHANGE_STATUS_OF_SING',status:false});
    }
    function RegistrationOpen() {
        dispatch({type:'CHANGE_STATUS_OF_SHOW_INPUT_BOX',status:true});
        dispatch({type:'CHANGE_STATUS_OF_SING',status:true});
    }
    function clickUser() {
            if (data.userMenuStatus === false) {
                dispatch({type:'CHANGE_STATUS_OF_USER_MENU',status:true});
            } else {
                dispatch({type:'CHANGE_STATUS_OF_USER_MENU',status:false});
            }
    }

    return(
        <div className={userFieldStyle.fieldStyle}>
            {data.userStatus ?
                <div className={userFieldStyle.row}>
                    <b onClick={clickUser}>{data.Users[0].name}</b>
                    <img src={data.Users[0].mainPhoto} alt={'avatar'}/>
                </div>:
                <div>
                    <button onClick={SingInOpen}> Sing in </button>
                    <button onClick={RegistrationOpen}>Registration</button>
                </div>
            }
        </div>
    )
}
export default UserField;