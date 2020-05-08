import React from "react";
import Admin from "./Admin";
import {connect} from "react-redux";
import {changeAdminIndex, changeMainArray} from "../../Redux/Iphone-reducer";
import {changeStatusOfShowOption} from "../../Redux/Admin-reducer";



let mapStateToProps = (state) =>{
    return{
        iPhones: state.IphonePage.iPhones,
        adminIndex: state.IphonePage.adminIndex,

        showOption: state.AdminPage.showOption,
        newElement: state.AdminPage.newElement
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        changeMainArray: (array) =>{dispatch(changeMainArray(array))},
        changeAdminIndex: (index)=>{dispatch(changeAdminIndex(index))},
        changeStatusOfShowOption: (status)=>{dispatch(changeStatusOfShowOption(status))}
    }
}

const AdminContainer = connect(mapStateToProps,mapDispatchToProps)(Admin);

export default AdminContainer;