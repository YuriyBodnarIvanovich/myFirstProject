import React from "react";
import Style from './Demo.module.css';
import {useDispatch, useSelector} from "react-redux";


const Demo = () =>{

    const data = useSelector(state=>state.AdminPage);
    const dispatch = useDispatch();



    return(
        <div>
            <h1>Demo</h1>
            <button onClick={()=>{console.log(data.newElement[0])}}>Show info</button>
        </div>
    )
}

export default Demo;
