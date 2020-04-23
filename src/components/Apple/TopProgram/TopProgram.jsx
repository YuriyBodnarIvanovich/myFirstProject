import React from "react";
import TopProgramStyle from "./TopProgram.module.css";

const TopProgram = (props) =>{
    return(
        <div className={TopProgramStyle.block_content}>
            <div>
                <img src={props.imgSrc}/>
            </div>
            <div>
                <a className={TopProgramStyle.a_style} href={props.hrefOfCite}>{props.nameProgram}</a>
                <br/>
                <a className={TopProgramStyle.a_style} href={props.hrefOfCiteSecond}>
                    {props.secondName}
                </a>
                <br/>
                <b>{props.nomination}</b>
            </div>
        </div>
    );
}

export default TopProgram;
//