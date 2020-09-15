import React, {useEffect} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {BrowserRouter,Route} from 'react-router-dom';
import Admin from "./components/Admin/Admin";
import Mac from "./components/Mac/Mac";
import Iphone from "./components/IPhone/Iphone";
import Cart from "./components/Cart/Cart";
import Apple from "./components/Apple/Apple";
import Force from "./components/Force/Force";
import AuthBox from "./components/Authorization/AuthBox";
import {useDispatch, useSelector} from "react-redux";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import axios from "axios";
import RightCart from "./components/RightCart/RightCart";

function App() {
        const data = useSelector(state=>state.ApplePage);
        const dispatch = useDispatch();

        function checkJWT(){
            axios.post('http://localhost:3001/checkJWT', {
            }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
                .then(function (response) {
                    console.log(response.data.userData);
                    let resUser = JSON.parse(JSON.stringify(response.data.userData));
                    dispatch({type:'CHANGE_ARRAY_OF_USERS',array:resUser});
                    dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:true});
                })
                .catch(function (error) {
                    console.log(error);
                    dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:false});
                });
        }
        useEffect(() => {
            const timer = setTimeout(() => {
                setTimeout(checkJWT(), 1000);
            }, 1000);
            return () => clearTimeout(timer);
        }, []);

        return (
          <BrowserRouter>
                <div className="main">
                    {data.showLeftMenu ?
                        <div>
                            <LeftMenu/>
                            <div className={"hideContent"} onClick={()=>dispatch({type:'Show_Left_Menu',status:false})}>
                            </div>
                        </div>
                        :
                        <div style={{display:'none'}}>
                        </div>
                    }
                    <Menu />
                    {data.ShowBox ? <AuthBox/> : <div> </div>}
                    <div className={"page"}>
                        <Route path='/Mac'
                               render={ () => <Mac />} />
                        <Route path='/Apple'
                               render={ () => <Apple />} />
                        <Route path='/IPhone'
                               render={ () =><Iphone />} />
                        <Route path='/Cart'
                               render={ () => <Cart />} />
                        <Route path='/Admin'
                               render={ () => <Admin/>} />
                    </div>
                    {
                        data.showRightCart ?
                            <div>
                                <RightCart/>
                                <div className={"hideContent"} onClick={()=>dispatch({type:'SHOW_RIGHT_CART',status:false})}> </div>
                            </div>
                            :
                            <div style={{display:'none'}}> </div>
                    }
                <Force/>
                </div>
          </BrowserRouter>
      );
}

export default App;
