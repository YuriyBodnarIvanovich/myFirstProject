import React from 'react';
import InputStyle from './ConnectWithUs.module.css';


const ConnectingWithUs = () =>{
    return(
        <div className={InputStyle.container}>
            <div className={InputStyle.container_two}>
                <div className={InputStyle.container_of_input}>
                    <h3>You can consult any specialist at any questions!</h3>
                    <div className={InputStyle.row}>
                        <div className={InputStyle.container_of_input_inner}>
                            <div><input  placeholder="Enter a name"/></div>
                            <div><input  placeholder="Your@email.com"/></div>
                            <div><input  placeholder="Password"/></div>
                        </div>
                        <div>
                            <button className={InputStyle.Ask_a_question}>Ask a question</button>
                        </div>
                    </div>
                    <p className={InputStyle.add_info}>By clicking on the button, you accept the Regulations and Consent to the processing of personal data.</p>
                </div>
            </div>
        </div>
    )
}

export default ConnectingWithUs;
