import React from "react";
import AppleStyle from './Apple.module.css';
import TopProgram from "./TopProgram/TopProgram";
import SocialButton from "./social networks/SocialButton";
import Input from "./Input/Input";

const Apple = (props) =>{
    let topProgramArray = props.topPrograms.map((p)=><TopProgram imgSrc={p.imgSrc}
                                                                      nameProgram={p.nameProgram}
                                                                      hrefOfCite={p.hrefOfCite}
                                                                      secondName={p.secondName}
                                                                      hrefOfCiteSecond={p.hrefOfCiteSecond}
                                                                      nomination={p.nomination}/>);
    return(
        <div>
            <div className={AppleStyle.intro}>
                <div className={AppleStyle.video}>
                    <video className={AppleStyle.video_media} src={props.SrcVideo} autoPlay muted loop> </video>
                </div>
                <div className={AppleStyle.intro_content}>
                    <div className={AppleStyle.container}>
                        <div className={AppleStyle.intro_title}>
                            <div className={AppleStyle.title}>
                                <h1>{props.hideInputBox ? 'Welcome' : props.savedName + ' welcome'} to Apple store!!!</h1>
                            </div>
                            <div className={AppleStyle.grow}>
                                <b className={AppleStyle.title_one}>About us</b>
                                <div>
                                    {props.extraInformation}
                                </div>
                            </div>
                            <div className={AppleStyle.content_two}>
                                <h4 className={AppleStyle.title_two}>Apps of the Year</h4>
                                <div className={AppleStyle.row}>
                                    {topProgramArray}
                                </div>
                            </div>
                                <SocialButton/>
                                <Input Username = {props.UserName} upUserName={props.upUserName}
                                       upEmail={props.upEmail} email={props.UsersEmail}
                                       upPassword={props.upPassword} password={props.UserPassword}
                                       authentication={props.authentication} upStatus={props.changeStatus}
                                       upStatusSignedIn={props.changeStatusSignedIn}
                                        savedName={props.savedName}
                                        savedEmail={props.savedEmail}
                                        savedPassword={props.savedPassword}
                                        savedNameMethod={props.saveUserName}
                                        savedEmailMethod={props.saveUserEmail}
                                        savePasswordMethod={props.saveUserPassword}
                                        exception={props.exception}
                                        exceptionMethod={props.changeStateOfException}
                                        hideInputBox={props.hideInputBox}
                                       hideInputBoxMethod={props.hideInputBoxMethod}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Apple;