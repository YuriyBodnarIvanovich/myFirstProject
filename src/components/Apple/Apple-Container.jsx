import React from "react";
import Apple from "./Apple";
import {connect} from "react-redux";
import {
    changeActiveButton,
    changeAuthentication, changeStateException,
    changeStatusSignedIn,
    inputEmail,
    inputPassword,
    inputUserName, saveUserEmail, saveUserName, saveUserPassword
} from "../../Redux/Apple-reducer";

const mapStateToProps = (state)=>{
    return{
        SrcVideo: state.ApplePage.video,
        extraInformation: state.ApplePage.extraInformation,
        topPrograms: state.ApplePage.topPrograms,

        UserName: state.ApplePage.name,
        UsersEmail: state.ApplePage.email,
        UserPassword: state.ApplePage.password,

        authentication:state.ApplePage.authentication,

        singIn: state.ApplePage.signedIn,
        exception: state.ApplePage.exception,

        savedName: state.ApplePage.savedName,
        savedEmail: state.ApplePage.savedEmail,
        savedPassword: state.ApplePage.savedPassword,

        activeButton: state.ApplePage.activeButton

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
        changeActiveButton:(status)=>{dispatch(changeActiveButton(status))}
    }
}
const AppleContainer = connect(mapStateToProps,mapDispatchToProps)(Apple);

export default AppleContainer;