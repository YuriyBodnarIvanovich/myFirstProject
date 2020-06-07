import React from "react";
import AppleStyle from './Apple.module.css';
import TopProgram from "./TopProgram/TopProgram";
import SocialButton from "./social networks/SocialButton";
import Input from "./Input/Input";
import {useDispatch, useSelector} from "react-redux";

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
            <div className={AppleStyle.intro}>
                <div className={AppleStyle.video}>
                    <video className={AppleStyle.video_media} src={data.video} autoPlay muted loop> </video>
                </div>
                <div className={AppleStyle.intro_content}>
                    <div className={AppleStyle.container}>
                        <div className={AppleStyle.intro_title}>
                            <div className={AppleStyle.title}>
                                <h1>{data.showInputBox ? 'Welcome' : data.savedName + ' welcome'} to Apple store!!!</h1>
                            </div>
                            <div className={AppleStyle.grow}>
                                <b className={AppleStyle.title_one}>About us</b>
                                <div>
                                    {data.extraInformation}
                                </div>
                            </div>
                            <div className={AppleStyle.content_two}>
                                <h4 className={AppleStyle.title_two}>Apps of the Year</h4>
                                <div className={AppleStyle.row}>
                                    {topProgramArray}
                                </div>
                            </div>
                                <SocialButton/>
                             {data.showInputBox ? <Input data={data} dispatch={dispatch}/> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Apple;