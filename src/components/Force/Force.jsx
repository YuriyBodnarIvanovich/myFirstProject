import React from "react";
import ForceStyle from './Force.module.css';

const Force = () =>{
    return(
        <div className={ForceStyle.end}>
            <div className={ForceStyle.nameCompany}>
                <p>Your apple</p>
            </div>
            <div className={ForceStyle.AllForces}>
                <div className={ForceStyle.forces}>
                    <b>Privacy Policy</b>
                    <b>Terms of use</b>
                    <b>Sales and Refund</b>
                    <b>Legal</b>
                    <b>Site Map</b>
                </div>
            </div>
        </div>
    )
}
export default Force;