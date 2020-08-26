import React, {useEffect} from "react";
import AppleStyle from './Apple.module.css';
import TopProgram from "./TopProgram/TopProgram";
import Input from "./Input/Input";
import {useDispatch, useSelector} from "react-redux";
import UserMenu from "../Menu/UserField/UserMenu/UserMenu";
import MenuStyle from "../Menu/Menu.module.css";

const Apple = () =>{

    const data = useSelector(state => state.ApplePage);
    const dispatch = useDispatch();

    let topProgramArray = data.topPrograms.map((p)=><TopProgram imgSrc={p.imgSrc}
                                                                      nameProgram={p.nameProgram}
                                                                      hrefOfCite={p.hrefOfCite}
                                                                      secondName={p.secondName}
                                                                      hrefOfCiteSecond={p.hrefOfCiteSecond}
                                                                      nomination={p.nomination}/>);
    return(
        <div>
            <div className={AppleStyle.content}>
                <div className={AppleStyle.items}>
                    <div className={AppleStyle.itemIphone}>
                        <p>Iphone</p>
                    </div>
                    <div className={AppleStyle.itemsMac}>
                        <p>Mac</p>
                    </div>
                </div>
                <div>
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
            </div>
            <div className={AppleStyle.end}>
                <div className={MenuStyle.nameCompany}>
                    <p>Your apple</p>
                 </div>
                <div className={AppleStyle.AllForces}>
                    <div className={AppleStyle.forces}>
                        <b>Privacy Policy</b>
                        <b>Terms of use</b>
                        <b>Sales and Refund</b>
                        <b>Legal</b>
                        <b>Site Map</b>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Apple;