import React from "react";
import Style from './ShopAppleDevices.module.css';
import {useSelector} from "react-redux";

const ShopAppleDevices  = () =>{
    const data = useSelector(state=> state.ApplePage);
    const catalogData = [
        {
            src:'http://134976.lp.tobiz.net/img/400x400/490eefe24d9483d725720894c0526971.jpg',
            title:'CERTIFIED ELECTRONICS',
            info:'We only sell official Apple devices and gadgets',
            style:'item_1'
        },
        {
            src:'http://134976.lp.tobiz.net/img/400x400/8bdcb1b95eed5642dafe75885ebb76c1.jpg',
            title:'GUARANTEE OF EVERYTHING GOODS UNDER 5 YEARS',
            info:'Our store gives additional warranty up to 5 years for all goods',
            style:'item_2'
        },
        {
            src:'http://134976.lp.tobiz.net/img/400x400/0a65c17bdb31c80fbefed98db6c09a68.jpg',
            title:'FREE SHIPPING ON REGIONS',
            info:'We provide free delivery when ordering the amount more than 10 thousand rubles',
            style:'item_3'
        },
    ];

    const catalog = catalogData.map((item)=>{
        return(
            data.darkTheme ?

                <div className={Style[item.style]} style={{backgroundColor:"#1F201F"}}>
                    <img src={item.src}/>
                    <div>
                        <p className={Style.title_of_item} style={{color:"white"}}><b>{item.title}</b></p>
                        <p>
                            <text style={{color:"white",padding:"5px"}}>{item.info}</text>
                        </p>
                    </div>
                 </div>
                :

                <div className={Style[item.style]}>
                    <img src={item.src}/>
                    <div>
                        <p className={Style.title_of_item}><b>{item.title}</b></p>
                        <p>
                            <text>{item.info}</text>
                        </p>
                    </div>
                </div>
        )
    });

    return(
        <div className={Style.appleDevice_container}>
            <div className={`${data.darkTheme ? Style.appleDevice_container_two_dark : Style.appleDevice_container_two }`}>
               <div className={Style.main}>
                   <div className={Style.appleDevice_title_container_two}>
                       <div className={Style.appleDevice_title_container}>
                           <div className={Style.main_title}>
                               {data.darkTheme ?
                                   <h1 style={{color:"white"}}>Shop at Apple Devices</h1>
                                   :
                                   <h1>Shop at Apple Devices</h1>
                               }
                           </div>
                           {data.darkTheme ?
                               <p style={{color:"white"}}>Why have hundreds of thousands of customers chosen our store for more than 10 years?</p>
                           :
                               <p>Why have hundreds of thousands of customers chosen our store for more than 10 years?</p>
                           }
                       </div>
                   </div>
                   <div className={Style.appleDevice_notification_container}>
                       {catalog}
                   </div>
               </div>
            </div>
        </div>
    )
}

export default ShopAppleDevices;
