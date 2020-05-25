import React, {useEffect} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import AppleContainer from "./components/Apple/Apple-Container";
import {BrowserRouter,Route} from 'react-router-dom';
import Admin from "./components/Admin/Admin";
import Mac from "./components/Mac/Mac";
import Iphone from "./components/IPhone/Iphone";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import {useDispatch} from "react-redux";

function App(props) {
  return (
      <BrowserRouter>
            <div className="main">
                <Menu />
                <div className={"page"}>
                    <Route path='/Mac'
                           render={ () => <Mac />} />
                    <Route path='/Apple'
                           render={ () => <AppleContainer />} />
                    <Route path='/IPhone'
                           render={ () =><Iphone />} />
                    <Route path='/Cart'
                           render={ () => <Cart />} />
                    <Route path='/Admin'
                           render={ () => <Admin/>} />
                </div>
            </div>
      </BrowserRouter>
  );
}

export default App;
