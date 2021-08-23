import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter,
} from "react-router-dom";
import FirstPage from './pages/first/FirstPage';
import SecondPage from './pages/second/SecondPage';
import ThirdPage from './pages/third/ThirdPage';
import Navbar from './pages/navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <>
          <Route path="/first"  component={FirstPage}/>
          <Route path="/second"  component={SecondPage}/>
          <Route path="/third" component={ThirdPage}/>
      </>
    </BrowserRouter>
  );
}

export default App;
