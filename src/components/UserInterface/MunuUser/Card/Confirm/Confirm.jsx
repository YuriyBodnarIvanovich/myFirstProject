import React, {useState} from "react";
import Style from './Confirm.module.css';
import axios from "axios";

const Confirm = (props) =>{

    const [name,setName] = useState('');
    const [numberOfPhone,setNumberOfPhone] = useState('');
    const [errorMessage,setError] = useState(false);

    function deleteItem(){
        if(name !== '' && numberOfPhone !== ''){
            console.log(props.idCard);
            axios.post('http://localhost:3001/deleteFromCard', {
                idCard: props.idCard
            }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
                .then(function (response) {
                    console.log(response);
                    let upDateUser = JSON.parse(JSON.stringify(props.data.Users));
                    upDateUser[0].CartList =  props.data.Users[0].CartList.filter((itemCard)=>itemCard.idCard !== props.idCard).map(itemCard=>{
                        return itemCard;
                    });
                    props.dispatch({type:"CHANGE_ARRAY_OF_USERS",array:upDateUser});
                    props.setStatusOfConfirm(false)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            setError(true);
        }

    }
    return(
        <div className={Style.container}>
            <div className={Style.form_container}>
                <div className={Style.top}>
                    <div className={Style.exit}>
                        <img src="https://img.icons8.com/ios/50/000000/cancel.png"
                             onClick={()=>{props.setStatusOfConfirm(false)}}/>
                    </div>
                </div>
                <div className={Style.for_form}>
                    <div className={Style.input}>
                        <input placeholder={"Input your name"} value={name}
                               onChange={(event => {setName(event.target.value)})}/>
                        <input placeholder={"Input your number of phone"} value={numberOfPhone}
                               onChange={(event => {setNumberOfPhone(event.target.value)})}/>
                        {errorMessage ? <p>Pleas fill your name and number of phone</p> : null}
                    </div>
                    <button onClick={deleteItem}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Confirm;
