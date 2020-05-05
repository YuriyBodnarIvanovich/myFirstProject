import React from "react";
import TableStyle from './Table.module.css';

const Table = (props) =>{
    return(
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.name}</td>
            <td> <div className={TableStyle.color} style={{backgroundColor: props.color}}> </div></td>
            <td>{props.price}</td>
        </tr>
    )
}
export default Table;