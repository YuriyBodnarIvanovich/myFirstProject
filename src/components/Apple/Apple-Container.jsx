import React from "react";
import Apple from "./Apple";
import {connect} from "react-redux";
import {
    changeAdminStatus,
    changeAuthentication, changeStateException,
    changeStatusSignedIn, hideInputBox,
    inputEmail,
    inputPassword,
    inputUserName, saveUserEmail, saveUserName, saveUserPassword
} from "../../Redux/Apple-reducer";

const mapStateToProps = (state)=>{
    return{
        SrcVideo: state.ApplePage.video,
        extraInformation: state.ApplePage.extraInformation,
        topPrograms: state.ApplePage.topPrograms,

        UserName: state.ApplePage.name,//array users
        UsersEmail: state.ApplePage.email,
        UserPassword: state.ApplePage.password,

        authentication:state.ApplePage.authentication,

        singIn: state.ApplePage.signedIn,
        exception: state.ApplePage.exception,

        savedName: state.ApplePage.savedName,
        savedEmail: state.ApplePage.savedEmail,
        savedPassword: state.ApplePage.savedPassword,

        hideInputBox: state.ApplePage.hideInputBox,

        adminName: state.ApplePage.adminName,
        passwordAdmin: state.ApplePage.passwordAdmin,
        adminStatus: state.ApplePage.adminStatus

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        upEmail:(upEmail)=>{dispatch(inputEmail(upEmail))},
        upPassword:(upPassword)=>{dispatch(inputPassword(upPassword))},
        upUserName:(upName)=>{dispatch(inputUserName(upName))},
        changeStatus: (upStatus) =>{dispatch(changeAuthentication(upStatus))},
        changeStatusSignedIn: (upStatus)=>{dispatch(changeStatusSignedIn(upStatus))},
        saveUserName: (name)=>{dispatch(saveUserName(name))},
        saveUserEmail:(email)=>{dispatch(saveUserEmail(email))},
        saveUserPassword:(password)=>{dispatch(saveUserPassword(password))},
        changeStateOfException:(exception)=>{dispatch(changeStateException(exception))},
        hideInputBoxMethod:(status)=>{dispatch(hideInputBox(status))},
        changeAdminStatus: (status)=>{dispatch(changeAdminStatus(status))}
    }
}
const AppleContainer = connect(mapStateToProps,mapDispatchToProps)(Apple);

export default AppleContainer;