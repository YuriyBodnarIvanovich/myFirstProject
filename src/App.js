import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
// import MacContainer from './components/Mac/Mac-Container';
import AppleContainer from "./components/Apple/Apple-Container";
import {BrowserRouter,Route} from 'react-router-dom';
import IphoneContainer from "./components/IPhone/Iphone-Container";
import CartContainer from "./components/Cart/Cart-Container";
import Admin from "./components/Admin/Admin";
import AdminContainer from "./components/Admin/Admin-Container";
import Mac from "./components/Mac/Mac";

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
                           render={ () => <IphoneContainer />} />
                    <Route path='/Cart'
                           render={ () => <CartContainer />} />
                    <Route path='/Admin'
                           render={ () => <AdminContainer/>} />
                </div>
            </div>
      </BrowserRouter>
  );
}

export default App;
