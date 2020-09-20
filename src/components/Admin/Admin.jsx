import React from "react";
import AdminStyle from './Admin.module.css';
import {useDispatch, useSelector} from "react-redux";

const Admin = () =>{
    const dataAdmin = useSelector(state=>state.AdminPage);
    const dataIPhones = useSelector(state=>state.IphonePage);

        return(
           <div className={AdminStyle.containerOfContent}>
               <h1>
                   Admin Page!!!
               </h1>
           </div>
        )
}
export default Admin;