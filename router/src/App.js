import './App.css';
import React from "react";
import Home from "./Home";
import Insta  from './Insta';
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";


function App() {
  return ( 
    <>
    <Router>
    <Routes>
    <Route exact path="/"  element={<Home/>}/>
    <Route exact path="/InstaClone" element={<Insta/>}/>
    </Routes>
    </Router>


    </>
 );
}

export default App;
