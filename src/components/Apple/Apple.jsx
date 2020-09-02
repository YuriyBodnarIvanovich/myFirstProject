import React, {useEffect} from "react";
import AppleStyle from './Apple.module.css';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from 'react-router-dom';
import Slide from "./Slide/Slide";
import SocialButton from "./social networks/SocialButton";

const Apple = () =>{

    const data = useSelector(state => state.ApplePage);
    const dispatch = useDispatch();

    function showList(){
        dispatch({type:'OPEN_MACBOOK',status:false});
    }
    return(
        <div>
            <div className={AppleStyle.content}>
                <div className={AppleStyle.items}>
                    <div className={AppleStyle.itemIphone}>
                        <NavLink to='/IPhone' >Iphone</NavLink>
                    </div>
                    <div className={AppleStyle.itemsMac}>
                        <NavLink to='/Mac'  onClick={showList}>Mac</NavLink>
                    </div>
                </div>
                <div className={AppleStyle.containerSlides}>
                    <Slide data={data} dispatch={dispatch}/>
                </div>
                <div className={AppleStyle.containerForadditional_Information}>
                    <div className={AppleStyle.additional_Information}>
                        <div className={AppleStyle.photo}>
                            <img src={'https://ichip.ru/images/cache/2019/9/11/fit_739_519_false_crop_816_573_0_0_q90_339382_f8932e2842.jpeg'} alt={''}/>
                        </div>
                        <div className={AppleStyle.description}>
                            <p>
                                Да, блок камер стал квадратным, а челка никуда не исчезла — все именно так, как было известно еще до презентации. В целом дизайн мало изменился и остался узнаваемым.
                            </p>
                            <a href={"https://ichip.ru/podborki/smartfony-planshety/5-fishek-novyh-iphone-11-674392"} target={"_blank"} className={AppleStyle.btn}>look</a>
                        </div>
                    </div>
                    <div className={AppleStyle.additional_InformationTwo}>
                        <div className={AppleStyle.description}>
                            <p>
                                Качество съемки у iPhone стало лучше — во многом за счет обновления iOS 13 и нового процессора А13 Bionic. Не все новые функции одинаково полезны — часть их них пригодится только профессиональным фото- и виодеографам.
                            </p>
                            <a href={"https://ichip.ru/podborki/smartfony-planshety/5-fishek-novyh-iphone-11-674392"} target={"_blank"} className={AppleStyle.btn}>look</a>
                        </div>
                        <div className={AppleStyle.photo}>
                            <img src={'https://ichip.ru/blobimgs/uploads/2019/09/apple_keynote-event_tim-cook_091019_big.jpg.large_.jpg'} alt={''}/>
                        </div>
                    </div>
                </div>
                <SocialButton />
            </div>
        </div>
    );
}
export default Apple;