import React, {useState,useEffect} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {BrowserRouter,Route} from 'react-router-dom';
import Admin from "./components/Admin/Admin";
import Mac from "./components/Mac/Mac";
import Iphone from "./components/IPhone/Iphone";
import Apple from "./components/Apple/Apple";
import Force from "./components/Force/Force";
import AuthBox from "./components/Authorization/AuthBox";
import {useDispatch, useSelector} from "react-redux";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import axios from "axios";
import RightCart from "./components/RightCart/RightCart";
import CatalogOfGoods from "./components/CatalogOfGoods/CatalogOfGoods";
import Contact from "./components/Contact/Contact";

function App() {
        const data = useSelector(state=>state.ApplePage);
        const dispatch = useDispatch();

        const [showInputBox, setStatusOfInputBox] = useState(false);

        function statusOfRoles(resUser){
            for(let  i = 0; i < resUser[0].Roles.length; i++){
                if(resUser[0].Roles[i].role === 'admin'){
                    console.log('Admin Status!!')
                    dispatch({type:'STATUS_OF_ROLE_ADMIN',status:true});
                }
            }
        }
        function checkJWT(){
            axios.post('http://localhost:3001/checkJWT', {
            }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
                .then(function (response) {
                    console.log(response.data.userData);
                    let resUser = JSON.parse(JSON.stringify(response.data.userData));
                    dispatch({type:'CHANGE_ARRAY_OF_USERS',array:resUser});
                    dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:true});
                    statusOfRoles(resUser);
                })
                .catch(function (error) {
                    console.log(error);
                    dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:false});
                });
        }
        useEffect(() => {
            const timer = setTimeout(() => {
                setTimeout(checkJWT(), 0);
            }, 0);
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
                    <Menu setStatusOfInputBox={setStatusOfInputBox}/>
                    {showInputBox ? <AuthBox showInputBox={showInputBox} setStatusOfInputBox={setStatusOfInputBox}/> : null}
                    <div className={"page"}>
                        <Route exact path='/'
                               render={ () => <Apple />} />
                        <Route exact path='/CatalogOfGoods'
                               render={ () => <CatalogOfGoods />} />
                        <Route exact path='/Contact'
                               render={ () => <Contact />} />
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
