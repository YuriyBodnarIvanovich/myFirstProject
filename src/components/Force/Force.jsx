import React from "react";
import ForceStyle from './Force.module.css';

const Force = () =>{
    return(
        <div className={ForceStyle.end}>
           <div className={ForceStyle.container}>
               <div className={ForceStyle.logo}>
                   <img src={"http://134976.lp.tobiz.net/img/400x0/1f045332bcf4e95ba5f9c051ce9fc55b.png"}/>
               </div>
               <div className={ForceStyle.info}>
                    <p>
                        LLC "Apple Devices", 123456, Moscow, st. Central 1, office 1
                        TIN 1234567890 OGRN 123456789012
                    </p>
               </div>
               <div className={ForceStyle.container_of_number}>
                  <div className={ForceStyle.number_of_phone}>
                      <img src="https://img.icons8.com/android/24/000000/phone.png"/>
                      <p>+38 099 999 9999</p>
                  </div>
                  <div className={ForceStyle.info_add}>
                      <p>
                          The call in Ukraine is free
                      </p>
                  </div>
               </div>
           </div>
        </div>
    )
}
export default Force;
