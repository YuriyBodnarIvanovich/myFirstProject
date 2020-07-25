import React, {useEffect} from "react";
import AppleStyle from './Apple.module.css';
import TopProgram from "./TopProgram/TopProgram";
import SocialButton from "./social networks/SocialButton";
import Input from "./Input/Input";
import {useDispatch, useSelector} from "react-redux";
import UserMenu from "../Menu/UserField/UserMenu/UserMenu";
import axios from 'axios';

const Apple = () =>{

    useEffect(()=>{
        axios.get('http://localhost:3001/users').then((response)=>{
            let resData = response.data;
            dispatch({type:'CHANGE_ARRAY_OF_USERS',newArray:resData});
            console.log(resData);
        })
    }, [])

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
                            {data.userMenuStatus ? <UserMenu/> : ''}
                            <div className={AppleStyle.title}>
                                <h1>{data.userStatus ?  data.Users[data.indexOfUsers].name + ' welcome' : 'Welcome'} to Apple store!!!</h1>
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