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

function App() {
        const data = useSelector(state=>state.ApplePage);
        const dispatch = useDispatch();
        return (
          <BrowserRouter>
                <div className="main">
                    {
                        data.showLeftMenu
                            ?
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
                <Force/>
                </div>
          </BrowserRouter>
      );
}

export default App;
