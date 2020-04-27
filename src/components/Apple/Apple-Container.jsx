import React from "react";
import Apple from "./Apple";
import {connect} from "react-redux";
import {changeAuthentication, inputEmail, inputPassword, inputUserName} from "../../Redux/Apple-reducer";

const mapStateToProps = (state)=>{
    return{
        SrcVideo: state.ApplePage.video,
        extraInformation: state.ApplePage.extraInformation,
        topPrograms: state.ApplePage.topPrograms,

        UserName: state.ApplePage.name,
        UsersEmail: state.ApplePage.email,
        UserPassword: state.ApplePage.password,

        authentication:state.ApplePage.authentication
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        upEmail:(upEmail)=>{dispatch(inputEmail(upEmail))},
        upPassword:(upPassword)=>{dispatch(inputPassword(upPassword))},
        upUserName:(upName)=>{dispatch(inputUserName(upName))},
        changeStatus: (upStatus) =>{dispatch(changeAuthentication(upStatus))}
    }
}
const AppleContainer = connect(mapStateToProps,mapDispatchToProps)(Apple);

export default AppleContainer;