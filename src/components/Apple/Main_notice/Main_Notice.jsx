import React from "react";
import NoticeStyle from './Main_Notice.module.css';

const MainNotice = () =>{
    return(
        <div className={NoticeStyle.content}>
            <div className={NoticeStyle.main}>
                <p className={NoticeStyle.title}>
                    Certified products Apple  <b>at an affordable price</b>
                </p>
                <p className={NoticeStyle.second_title}>
                    In our store you will find original Apple devices,
                    original covers,<br/> and much more!
                </p>
                <div className={NoticeStyle.container_for_button}>
                    <button className={NoticeStyle.button_hot}>Hot deals</button>
                </div>
            </div>
        </div>
    )
}

export default MainNotice;
