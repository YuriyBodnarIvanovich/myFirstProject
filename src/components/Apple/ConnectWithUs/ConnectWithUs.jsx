import React from 'react';
import InputStyle from './ConnectWithUs.module.css';
import {useSelector} from "react-redux";


const ConnectingWithUs = () =>{
    const data = useSelector(state=> state.ApplePage);

    return(
        <div className={`${data.darkTheme ? InputStyle.container_dark : InputStyle.container}`}>
            <div className={InputStyle.container_two}>
                <div className={`${data.darkTheme ? InputStyle.container_of_input_dark :InputStyle.container_of_input}`}>
                    <h3>You can consult any specialist at any questions!</h3>
                    <div className={InputStyle.row}>
                        <div className={`${data.darkTheme ? InputStyle.container_of_input_inner_dark 
                            : InputStyle.container_of_input_inner}`}>
                            <div><input  placeholder="Enter a name"/></div>
                            <div><input  placeholder="Your@email.com"/></div>
                            <div><input  placeholder="Password"/></div>
                        </div>
                        <div>
                            <button className={InputStyle.Ask_a_question}>Ask a question</button>
                        </div>
                    </div>
                    {data.darkTheme ?
                        <p className={InputStyle.add_info} style={{color:"white",opacity:"0.7"}}>By clicking on the button, you accept the Regulations and Consent to the processing of personal data.</p>
                    :
                        <p className={InputStyle.add_info}>By clicking on the button, you accept the Regulations and Consent to the processing of personal data.</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ConnectingWithUs;
