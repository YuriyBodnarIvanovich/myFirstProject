import React, {useState} from "react";
import Style from './Admin.module.css';
import {useDispatch, useSelector} from "react-redux";
import FillName from "./FillName/FillName";
import Photos from "./Photos/Photos";

const Admin = (props) =>{

    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();

    const [next,setStatusNext] = useState(false);

    const ChooseType = () =>{
        return(
            <div className={Style.choose_container}>
                    <button onClick={()=>{setStatusNext(true)}}>Mac</button>
                    <button onClick={()=>{setStatusNext(true)}}>Iphone</button>
                    <button onClick={()=>{setStatusNext(true)}}>Watch Apple</button>
            </div>
        )
    }


    return(
        <div className={Style.container}>
            <div className={Style.container_of_AdminPage}>
                <div className={Style.top}>
                    <div className={Style.exit}>
                        <img src="https://img.icons8.com/ios/50/000000/cancel.png" onClick={()=>{props.setStatusOfAdmin(false)}}/>
                    </div>
                </div>
                {/*{next ? <FillName/> : <ChooseType/> }*/}
                {next ? <FillName/> : <Photos/> }

            </div>
        </div>
    )
}

export default Admin;
