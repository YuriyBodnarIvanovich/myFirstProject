import React, {useEffect} from "react";
import RecommendedProduct from "./RecommendedProduct/RecommendedProduct";
import Blog from "./Blog/Blog";
import ConnectingWithUs from "./ConnectWithUs/ConnectWithUs";
import MainNotice from "./Main_notice/Main_Notice";
import AboutUs from "./About_us/About_us";
import ShopAppleDevices from "./ShopAppleDevices/ShopAppleDevice";

const Apple = () =>{

    return(
       <div>
           <MainNotice/>
            <AboutUs/>
            <ShopAppleDevices/>
           <RecommendedProduct/>
           <Blog/>
           <ConnectingWithUs/>
       </div>
    );
}
export default Apple;
