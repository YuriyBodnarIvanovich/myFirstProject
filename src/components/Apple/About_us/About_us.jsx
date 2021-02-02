import React from "react";
import Style from './About_us.module.css';

const AboutUs = () =>{
    return(
        <div className={Style.about_us_container}>
            <div className={Style.about_us}>
                <img src={"http://134976.lp.tobiz.net/img/900x700/c34e1bb8979db325c2ed85e17fa4b50b.jpg"}/>
                <div className={Style.about_us_text_container}>
                    <h1>Who are we?</h1>
                    <div className={Style.for_hr}>
                        <hr/>
                    </div>
                    <p className={Style.add_information_title}>
                        We are a modern electronics and home appliances store Apple. Here you can buy smartphones, tablets, smart watches and bracelets, cameras, objects, set-top boxes, TVs and other home goods from Apple at the best prices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
