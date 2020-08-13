import React from "react";
import ProfileStyle from './../Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import Input from "../../Apple/Input/Input";
import UserMenu from "../../Menu/UserField/UserMenu/UserMenu";

const ProfileSetting  = () =>{
    const dataApple = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();

    function onChangeField(keyWord,value) {
        let catalogOfUsers = [];
        catalogOfUsers = JSON.parse(JSON.stringify(dataApple.Users));
        catalogOfUsers[dataApple.indexOfUsers][keyWord] = value;
        dispatch({type:'CHANGE_ARRAY_OF_USERS',newArray: catalogOfUsers});
    }

    return(
        <div className={ProfileStyle.contentProfileSetting}>
            {dataApple.showInputBox ? <Input data={dataApple} dispatch={dispatch}/> : ''}
            {dataApple.userMenuStatus ? <UserMenu/> : ''}
            <div>
                <b>Name:</b>
                <br/>
                <textarea value={dataApple.Users[dataApple.indexOfUsers].name} onChange={event => {onChangeField('name',event.target.value)}}> </textarea>
                <br/>
                <b>Email:</b>
                <br/>
                <textarea value={dataApple.Users[dataApple.indexOfUsers].email} onChange={event => {onChangeField('email',event.target.value)}}> </textarea>
                <br/>
                {/*<b>Password:</b>*/}
                <br/>
                {/*<textarea value={dataApple.Users[dataApple.indexOfUsers].password} onChange={event => {onChangeField('password',event.target.value)}}> </textarea>*/}
                <br/>
                <b>Photo:</b>
                <br/>
                <textarea value={dataApple.Users[dataApple.indexOfUsers].mainPhoto} onChange={event => {onChangeField('mainPhoto',event.target.value)}}> </textarea>
            </div>
            <div className={ProfileStyle.vl}> </div>
            <div className={ProfileStyle.showDataContainer}>
                <div className={ProfileStyle.showData}>
                    <h2>Name: </h2>
                    <h3>{dataApple.Users[dataApple.indexOfUsers].name}</h3>
                    <h2>Email: </h2>
                    <h3>{dataApple.Users[dataApple.indexOfUsers].email}</h3>
                </div>
                <div style={{marginLeft:"300px"}}>
                    <img src={dataApple.Users[dataApple.indexOfUsers].mainPhoto} alt={'avatar'}/>
                </div>

            </div>
        </div>
    )
}

export default ProfileSetting;