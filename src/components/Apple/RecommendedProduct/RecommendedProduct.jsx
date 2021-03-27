import React from "react";
import ProductStyle from './RecommendedProduct.module.css';
import {useSelector} from "react-redux";

const RecommendedProduct = () =>{
    const data = useSelector(state=> state.ApplePage);

    return(
        <div className={`${data.darkTheme ? ProductStyle.container_dark : ProductStyle.container}`}>
           <div className={`${data.darkTheme ? ProductStyle.main_dark : ProductStyle.main}`}>
               <div className={ProductStyle.second_container}>
                   <div className={ProductStyle.first_title}>
                       {data.darkTheme ? <h2 style={{color:"white"}}>Apple iMac Pro 2013 with 50% discount!</h2>
                        :<h2>Apple iMac Pro 2013 with 50% discount!</h2>}
                   </div>
                   <div className={ProductStyle.second_title}>
                       {data.darkTheme ?
                           <p style={{color:"white"}}>
                               <text>Have time to order the Apple iMac Pro 2013</text><br/>
                               <text>with 50% discount right now!</text>
                            </p>
                       :
                           <p>
                               <text>Have time to order the Apple iMac Pro 2013</text><br/>
                               <text>with 50% discount right now!</text>
                           </p>
                       }
                   </div>
                   <div className={ProductStyle.container_for_content}>
                       <div className={ProductStyle.for_img}>
                           <img src={"http://134976.lp.tobiz.net/img/450x350/d7c5df223314851901f364ab659981f8.jpg"}/>
                       </div>
                       {data.darkTheme ?
                           <div className={ProductStyle.text_content}>
                               <p style={{color:"white"}}>
                                   Professionals like to work on the iMac. That's why we've created an iMac that fits your needs perfectly. The most powerful graphics and the most powerful processors in the history of Mac, advanced drives, memory modules, I / O ports, an impressive Retina 5K display and a slim all-in-one case. Now everyone - photographers, video editors and 3D animators, professional musicians, software developers and scientists - can embody even the most incredible ideas on the iMac Pro.                        </p>
                               <p style={{marginTop:"10px",color:"white"}}>
                                   An iMac with a 4-core processor is already an astonishingly powerful computer. But the iMac with 8, 10, 14 or 18 cores goes to a whole new level of performance. Add to that Turbo Boost acceleration up to 4.5 GHz, and you get an iMac Pro that combines the power of multithreading with high-speed single-threaded applications. The new AVX-512 command system extension and new cache architecture allow the processor to process even more data. Even faster. Therefore, any task - image rendering, video editing with a resolution of up to 8K, photo processing, creating real-time sound effects or compiling a new top application - will be performed in a flash.
                               </p>
                               <div className={ProductStyle.price_and_notice}>
                                   <h2 style={{color:"white"}}>100 999 UA</h2>
                                   <p style={{color:"white"}}>Offer limited! Have time to apply by the end of December!</p>
                                   <button className={ProductStyle.button_take_product}>Place an order</button>
                               </div>
                           </div>
                       :
                           <div className={ProductStyle.text_content}>
                               <p>
                                   Professionals like to work on the iMac. That's why we've created an iMac that fits your needs perfectly. The most powerful graphics and the most powerful processors in the history of Mac, advanced drives, memory modules, I / O ports, an impressive Retina 5K display and a slim all-in-one case. Now everyone - photographers, video editors and 3D animators, professional musicians, software developers and scientists - can embody even the most incredible ideas on the iMac Pro.                        </p>
                               <p style={{marginTop:"10px"}}>
                                   An iMac with a 4-core processor is already an astonishingly powerful computer. But the iMac with 8, 10, 14 or 18 cores goes to a whole new level of performance. Add to that Turbo Boost acceleration up to 4.5 GHz, and you get an iMac Pro that combines the power of multithreading with high-speed single-threaded applications. The new AVX-512 command system extension and new cache architecture allow the processor to process even more data. Even faster. Therefore, any task - image rendering, video editing with a resolution of up to 8K, photo processing, creating real-time sound effects or compiling a new top application - will be performed in a flash.
                               </p>
                               <div className={ProductStyle.price_and_notice}>
                                   <h2>100 999 UA</h2>
                                   <p>Offer limited! Have time to apply by the end of December!</p>
                                   <button className={ProductStyle.button_take_product}>Place an order</button>
                               </div>
                           </div>
                       }
                   </div>
               </div>
           </div>
        </div>
    )
}

export default RecommendedProduct;
