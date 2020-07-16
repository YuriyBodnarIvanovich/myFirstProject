import React, {useEffect} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {BrowserRouter,Route} from 'react-router-dom';
import Admin from "./components/Admin/Admin";
import Mac from "./components/Mac/Mac";
import Iphone from "./components/IPhone/Iphone";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import {useDispatch} from "react-redux";
import Apple from "./components/Apple/Apple";
import Profile from "./components/Profile/Profile";

function App() {
  return (
      <BrowserRouter>
            <div className="main">
                <Menu />
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
            </div>
      </BrowserRouter>
  );
}

export default App;
