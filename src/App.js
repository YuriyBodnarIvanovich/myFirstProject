import React, {useEffect} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {BrowserRouter,Route} from 'react-router-dom';
import Admin from "./components/Admin/Admin";
import Mac from "./components/Mac/Mac";
import Iphone from "./components/IPhone/Iphone";
import Cart from "./components/Cart/Cart";
import Apple from "./components/Apple/Apple";
import Profile from "./components/Profile/Profile";
import Force from "./components/Force/Force";
import AuthBox from "./components/Authorization/AuthBox";
import {useSelector} from "react-redux";

function App() {
        const data = useSelector(state=>state.ApplePage);
        return (
          <BrowserRouter>
                <div className="main">
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
                        <Route path='/Profile'
                               render={ () => <Profile/>} />
                    </div>
                <Force/>
                </div>
          </BrowserRouter>
      );
}

export default App;
