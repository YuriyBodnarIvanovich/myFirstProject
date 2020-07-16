import React from "react";
import ProfileStyle from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import ProfileSetting from "./ProfileSetting/ProfileSetting";
import CartAdditionally from "./CartAdditionally/CartAdditionally";
import Delivery from "./Delivery/Delivery";

const Profile = () =>{
    const dataApple = useSelector(state=>state.ApplePage);
    const dispatch = useDispatch();
    
    function showProfileSetting() {
        if(dataApple.profileSettingStatus === false){
            dispatch({type:'CHANGE_STATUS_OF_PROFILE_SETTING',status:true});
            dispatch({type:'CHANGE_STATUS_OF_CART_ADDITIONALLY',status:false});
            dispatch({type:'CHANGE_STATUS_OF_DELIVERY',status:false});
        }else {
            dispatch({type:'CHANGE_STATUS_OF_PROFILE_SETTING',status:false});
        }

    }
    function showCartAdditionally() {
        if(dataApple.cartAdditionallyStatus === false){
            dispatch({type:'CHANGE_STATUS_OF_CART_ADDITIONALLY',status:true});
            dispatch({type:'CHANGE_STATUS_OF_PROFILE_SETTING',status:false});
            dispatch({type:'CHANGE_STATUS_OF_DELIVERY',status:false});
        }else {
            dispatch({type:'CHANGE_STATUS_OF_CART_ADDITIONALLY',status:false});
        }
    }
    function showDelivery() {
        if(dataApple.delivery === false){
            dispatch({type:'CHANGE_STATUS_OF_DELIVERY',status:true});
            dispatch({type:'CHANGE_STATUS_OF_CART_ADDITIONALLY',status:false});
            dispatch({type:'CHANGE_STATUS_OF_PROFILE_SETTING',status:false});
        }else {
            dispatch({type:'CHANGE_STATUS_OF_DELIVERY',status:false});
        }
    }
    
    return(
        <div className={ProfileStyle.main}>
            <div className={ProfileStyle.content}>
                <div className={ProfileStyle.menu_Container}>
                    <div className={ProfileStyle.menu}>
                        <p><b onClick={showProfileSetting}>Profile Settings</b></p>
                        <p><b onClick={showCartAdditionally}>Cart List</b></p>
                        <p><b onClick={showDelivery}>Delivery</b></p>
                    </div>
                    <div className={ProfileStyle.Additional_Information}> 2</div>
                </div>
                <div className={ProfileStyle.main_content}>
                    {dataApple.profileSettingStatus ? <ProfileSetting/> : ''}
                    {dataApple.cartAdditionallyStatus ? <CartAdditionally/>:''}
                    {dataApple.delivery ? <Delivery/> : ''}
                </div>
            </div>
        </div>
    )
}

export default Profile;