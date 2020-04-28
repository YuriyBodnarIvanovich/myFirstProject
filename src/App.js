import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import MacContainer from './components/Mac/Mac-Container';
import AppleContainer from "./components/Apple/Apple-Container";
import {BrowserRouter,Route} from 'react-router-dom';
import IphoneContainer from "./components/IPhone/Iphone-Container";

function App(props) {
  return (
      <BrowserRouter>
            <div className="main">
                <Menu />
                <div className={"page"}>
                    <Route path='/Mac'
                           render={ () => <MacContainer />} />
                    <Route path='/Apple'
                           render={ () => <AppleContainer />} />
                    <Route path='/IPhone'
                           render={ () => <IphoneContainer />} />
                </div>
            </div>
      </BrowserRouter>
  );
}

export default App;
