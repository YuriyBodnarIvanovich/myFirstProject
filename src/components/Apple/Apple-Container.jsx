import React from "react";
import Apple from "./Apple";
import {connect} from "react-redux";
import Mac from "../Mac/Mac";

const mapStateToProps = (state)=>{
    return{
        SrcVideo: state.ApplePage.video,
        extraInformation: state.ApplePage.extraInformation,
        topPrograms: state.ApplePage.topPrograms,
    }
}
const mapDispatchToProps = ()=>{}
const AppleContainer = connect(mapStateToProps,mapDispatchToProps)(Apple);

export default AppleContainer;