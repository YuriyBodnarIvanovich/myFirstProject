import React from "react";
import SocialButtonStyle from './SocialButton.module.css';


const SocialButton = () =>{
    return(
        <div>
            <div className={SocialButtonStyle.fab}>
                <span className={SocialButtonStyle.fab_action_button}>
                    <i className={SocialButtonStyle.fab_action_button_icon}> </i>
                </span>
                <ul className={SocialButtonStyle.fab_buttons}>
                    <li className={SocialButtonStyle.fab_buttons_item}>
                        <a href="#" className={SocialButtonStyle.fab_buttons_link} data-tooltip="Facebook">
                            <i className={SocialButtonStyle.icon_material_fb}> </i>
                        </a>
                    </li>
                    <li className={SocialButtonStyle.fab_buttons_item}>
                        <a href="#" className={SocialButtonStyle.fab_buttons_link} data-tooltip="Twitter">
                            <i className={SocialButtonStyle.icon_material_tw}> </i>
                        </a>
                    </li>
                    <li className={SocialButtonStyle.fab_buttons_item}>
                        <a href="#" className={SocialButtonStyle.fab_buttons_link} data-tooltip="Linkedin">
                            <i className={SocialButtonStyle.icon_material_li}> </i>
                        </a>
                    </li>
                    <li className={SocialButtonStyle.fab_buttons_item}>
                        <a href="#" className={SocialButtonStyle.fab_buttons_link} data-tooltip="Google+">
                            <i className={SocialButtonStyle.icon_material_gp}> </i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SocialButton;