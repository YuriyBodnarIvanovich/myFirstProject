import React from "react";
import InputStyle from "../../Input.module.css";
import axios from 'axios';

const Registration = (props) =>{
    function onChangeValue(keyWord,value) {
        let element = [];
        element = JSON.parse(JSON.stringify(props.data.newElement));
        element[0][keyWord] = value;
        props.dispatch({type:'CHANGE_FIELD_OF_NEW_USER',newElement:element});
    }
    function checkActiveButton() {
        if(props.data.newElement[0].name==='' || props.data.newElement[0].email==='' || props.data.newElement[0].password === ''){
            return    <input type="submit" value="Login" onClick={login} id='loginButton' disabled/>
        }else {
            return    <input type="submit" value="Login" onClick={login} id='loginButton'/>
        }
    }
    function login() {
        let newUsersArray = [];
        newUsersArray = JSON.parse(JSON.stringify(props.data.Users));
        let newElement = JSON.parse(JSON.stringify(props.data.newElement));
        newUsersArray.push(newElement[0]);
        props.dispatch({type:'CHANGE_ARRAY_OF_USERS',newArray:newUsersArray});
        props.dispatch({type:'CHANGE_STATUS_OF_SING',status: false});


        axios.post('http://localhost:3001/registration', {
            name:props.data.newElement[0].name,
            email:props.data.newElement[0].email,
            password:props.data.newElement[0].password,
            avatarPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPXphSfUmRO80leHLmJ61fqUYRf_BPp5UyFw&usqp=CAU'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return(
        <div className={InputStyle.modalWindowInput}>
            <div className={InputStyle.transparent}>
                <div className={InputStyle.form_inner}>
                    <h3>Please registration</h3>
                    <label htmlFor="username">Name</label>
                    <input type="text" id="username" value={props.data.newElement[0].name}
                           onChange={(event)=>{onChangeValue('name',event.target.value)}} required/>
                    <label htmlFor="username">Email</label>
                    <input type="email" id="username" value={props.data.newElement[0].email}
                           onChange={(event)=>{onChangeValue('email',event.target.value)}}/>
                    <label htmlFor="password" >Password</label>
                    <input id="password" type="password"  value={props.data.newElement[0].password}
                           onChange={(event)=>{onChangeValue('password',event.target.value)}} />
                    {checkActiveButton()}
                    <button onClick={login}>You have account</button>
                </div>
            </div>
        </div>
    )
}
export default Registration;